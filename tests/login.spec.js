const { test, expect } = require('@playwright/test');

test.describe('Login Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://app2.abtasty.com/login');
  });

  test('TC001: Valid login', async ({ page }) => {
    await page.fill('#email', 'valid.email@abtasty.com');
    await page.fill('#password', 'validpassword');
    await page.click('#signInButton');

    // Wait for navigation to dashboard
    await page.waitForNavigation({ url: '**/dashboard' });
    await expect(page).toHaveTitle(/Dashboard - AB Tasty/);
  });

  test('TC002: Invalid email', async ({ page }) => {
    await page.fill('#email', 'invalid.email@abtasty.com');
    await page.fill('#password', 'validpassword');
    await page.click('#signInButton');

    // Check for error message
    await expect(page.locator('.error-message')).toHaveText('Invalid email/password');
  });

  test('TC003: Invalid password', async ({ page }) => {
    await page.fill('#email', 'valid.email@abtasty.com');
    await page.fill('#password', 'invalidpassword');
    await page.click('#signInButton');

    // Check for error message
    await expect(page.locator('.error-message')).toHaveText('Invalid email/password');
  });

  test('TC004: SSO login', async ({ page }) => {
    await page.click('data-testid=signInButton')
    await page.fill('#email', 'sso.email@abtasty.com');
    await page.getByText('Sign In').click();

    // Check for redirection to SSO login page
    await expect(page).toHaveURL(/sso-login/);
  });

  test('TC005: CAPTCHA trigger', async ({ page }) => {
    for (let i = 0; i < 3; i++) {
      await page.click('data-testid=signInButton')
      await page.fill('#email', 'valid.email@abtasty.com');
      await page.click('#signInButton');
    }

    // Check for CAPTCHA presence
    await expect(page.locator('#captcha')).toBeVisible();
  });

  test('TC006: Correct CAPTCHA', async ({ page }) => {
    // Assuming CAPTCHA can be bypassed for testing purposes
    for (let i = 0; i < 3; i++) {
      await page.fill('#email', 'valid.email@abtasty.com');
      await page.fill('#password', 'invalidpassword');
      await page.click('#signInButton');
    }

    // Simulate solving CAPTCHA
    await page.fill('#captcha', 'correctcaptcha');
    await page.click('#signInButton');

    // Check for password prompt
    await expect(page.locator('#password')).toBeVisible();
  });

  test('TC007: Incorrect CAPTCHA', async ({ page }) => {
    // Assuming CAPTCHA can be bypassed for testing purposes
    for (let i = 0; i < 3; i++) {
      await page.fill('#email', 'valid.email@abtasty.com');
      await page.fill('#password', 'invalidpassword');
      await page.click('#signInButton');
    }

    // Simulate solving CAPTCHA incorrectly
    await page.fill('#captcha', 'incorrectcaptcha');
    await page.click('#signInButton');

    // Check for error message
    await expect(page.locator('.error-message')).toHaveText('CAPTCHA verification failed');
  });

  test('TC008: MFA required', async ({ page }) => {
    await page.fill('#email', 'mfa.email@abtasty.com');
    await page.fill('#password', 'validpassword');
    await page.click('#signInButton');

    // Check for MFA code input
    await expect(page.locator('#mfa-code')).toBeVisible();
  });

  test('TC009: Incorrect MFA', async ({ page }) => {
    await page.fill('#email', 'mfa.email@abtasty.com');
    await page.fill('#password', 'validpassword');
    await page.click('#signInButton');

    // Enter incorrect MFA code
    await page.fill('#mfa-code', 'incorrectmfacode');
    await page.click('#signInButton');

    // Check for error message
    await expect(page.locator('.error-message')).toHaveText('Incorrect MFA code');
  });

  test('TC010: Save device for MFA', async ({ page }) => {
    await page.fill('#email', 'mfa.email@abtasty.com');
    await page.fill('#password', 'validpassword');
    await page.click('#signInButton');

    // Enter valid MFA code and check "Save this device"
    await page.fill('#mfa-code', 'validmfacode');
    await page.check('#save-device');
    await page.click('#signInButton');

    // Check for successful login
    await page.waitForNavigation({ url: '**/dashboard' });
    await expect(page).toHaveTitle(/Dashboard - AB Tasty/);
  });

  test('TC011: Responsive Design', async ({ page }) => {
    await page.setViewportSize({ width: 800, height: 600 });

    // Check if login form takes up full screen
    await expect(page.locator('#login-form')).toHaveCSS('width', '100%');
  });

  test('TC012: Translation Check', async ({ page }) => {
    await page.selectOption('#language-selector', 'fr'); // Assuming there's a language selector

    // Check if text is translated to French
    await expect(page.locator('.welcome-message')).toHaveText('Bienvenue sur AB Tasty');
  });
});