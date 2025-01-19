### Test Plan

#### Test Cases for AB Tasty Login Page

| Test Case ID | Description                             | Steps                                                                                      | Expected Result                                                                                     | Data Set                          |
|--------------|-----------------------------------------|--------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|-----------------------------------|
| TC001        | Valid login                             | 1. Enter valid email<br>2. Enter valid password<br>3. Click login                           | User is logged in successfully                                                                      | Valid Email, Valid Password       |
| TC002        | Invalid email                           | 1. Enter invalid email<br>2. Enter valid password<br>3. Click login                         | Error message "Invalid email/password" is displayed                                                 | Invalid Email, Valid Password     |
| TC003        | Invalid password                        | 1. Enter valid email<br>2. Enter invalid password<br>3. Click login                         | Error message "Invalid email/password" is displayed                                                 | Valid Email, Invalid Password     |
| TC004        | SSO login                               | 1. Enter SSO email<br>2. Click login                                                       | User is redirected to SSO login page                                                                | SSO Email                         |
| TC005        | CAPTCHA trigger                         | 1. Enter valid email<br>2. Enter invalid password 3 times                                    | CAPTCHA is triggered                                                                              | Valid Email, Invalid Password     |
| TC006        | Correct CAPTCHA                         | 1. Enter valid email<br>2. Enter invalid password 3 times<br>3. Solve correct CAPTCHA        | User is prompted to enter password again                                                            | Valid Email, Invalid Password     |
| TC007        | Incorrect CAPTCHA                       | 1. Enter valid email<br>2. Enter invalid password 3 times<br>3. Solve incorrect CAPTCHA      | Error message "CAPTCHA verification failed" is displayed                                          | Valid Email, Invalid Password     |
| TC008        | MFA required                            | 1. Enter @abtasty email<br>2. Enter valid password<br>3. Enter valid MFA code              | User is logged in successfully                                                                      | @abtasty Email, Valid Password, Valid MFA Code |
| TC009        | Incorrect MFA                           | 1. Enter @abtasty email<br>2. Enter valid password<br>3. Enter invalid MFA code             | Error message "Incorrect MFA code" is displayed                                                   | @abtasty Email, Valid Password, Invalid MFA Code |
| TC010        | Save device for MFA                       | 1. Enter @abtasty email<br>2. Enter valid password<br>3. Enter valid MFA code<br>4. Check "Save this device" | User is logged in and not prompted for MFA on subsequent logins from the same device                | @abtasty Email, Valid Password, Valid MFA Code |
| TC011        | Responsive Design                       | 1. Resize browser window below 1024px                                                      | Login form takes up the full screen                                                               | N/A                               |
| TC012        | Translation Check                       | 1. Change language to French, Spanish, German                                              | All text is correctly translated into the selected language                                         | N/A                               |

### Detailed Test Cases

#### TC001: Valid login

**Description:**  
Verify that a user can log in with a valid email and password.

**Steps:**
1. Open the login page.
2. Enter a valid email address.
3. Enter a valid password.
4. Click the "Login" button.

**Expected Result:**
- User is redirected to the Dashboard.
- Dashboard title is displayed as "Dashboard - AB Tasty".

**Data Set:**
- Valid Email: `valid.email@abtasty.com`
- Valid Password: `validpassword`

---

#### TC002: Invalid email

**Description:**  
Verify that an error message is displayed when an invalid email is entered.

**Steps:**
1. Open the login page.
2. Enter an invalid email address.
3. Enter a valid password.
4. Click the "Login" button.

**Expected Result:**
- Error message "Invalid email/password" is displayed.

**Data Set:**
- Invalid Email: `invalid.email@abtasty.com`
- Valid Password: `validpassword`

---

#### TC003: Invalid password

**Description:**  
Verify that an error message is displayed when an invalid password is entered.

**Steps:**
1. Open the login page.
2. Enter a valid email address.
3. Enter an invalid password.
4. Click the "Login" button.

**Expected Result:**
- Error message "Invalid email/password" is displayed.

**Data Set:**
- Valid Email: `valid.email@abtasty.com`
- Invalid Password: `invalidpassword`

---

#### TC004: SSO login

**Description:**  
Verify that a user is redirected to the SSO login page when an SSO email is entered.

**Steps:**
1. Open the login page.
2. Enter an SSO email address.
3. Click the "Login" button.

**Expected Result:**
- User is redirected to the SSO login page.

**Data Set:**
- SSO Email: `sso.email@abtasty.com`

---

#### TC005: CAPTCHA trigger

**Description:**  
Verify that the CAPTCHA is triggered after 3 consecutive failed login attempts.

**Steps:**
1. Open the login page.
2. Enter a valid email address.
3. Enter an invalid password.
4. Click the "Login" button.
5. Repeat steps 2-4 two more times.

**Expected Result:**
- CAPTCHA is triggered after the third failed attempt.

**Data Set:**
- Valid Email: `valid.email@abtasty.com`
- Invalid Password: `invalidpassword`

---

#### TC006: Correct CAPTCHA

**Description:**  
Verify that the user can log in after solving the CAPTCHA correctly.

**Steps:**
1. Open the login page.
2. Enter a valid email address.
3. Enter an invalid password.
4. Click the "Login" button.
5. Repeat steps 2-4 two more times to trigger CAPTCHA.
6. Solve the CAPTCHA correctly.
7. Click the "Login" button again.

**Expected Result:**
- User is prompted to enter the password again.

**Data Set:**
- Valid Email: `valid.email@abtasty.com`
- Invalid Password: `invalidpassword`
- Correct CAPTCHA: `correctcaptcha`

---

#### TC007: Incorrect CAPTCHA

**Description:**  
Verify that an error message is displayed when the CAPTCHA is solved incorrectly.

**Steps:**
1. Open the login page.
2. Enter a valid email address.
3. Enter an invalid password.
4. Click the "Login" button.
5. Repeat steps 2-4 two more times to trigger CAPTCHA.
6. Solve the CAPTCHA incorrectly.
7. Click the "Login" button again.

**Expected Result:**
- Error message "CAPTCHA verification failed" is displayed.

**Data Set:**
- Valid Email: `valid.email@abtasty.com`
- Invalid Password: `invalidpassword`
- Incorrect CAPTCHA: `incorrectcaptcha`

---

#### TC008: MFA required

**Description:**  
Verify that an MFA code is required for users with @abtasty email addresses.

**Steps:**
1. Open the login page.
2. Enter an @abtasty email address.
3. Enter a valid password.
4. Click the "Login" button.

**Expected Result:**
- MFA code input field is displayed.

**Data Set:**
- @abtasty Email: `mfa.email@abtasty.com`
- Valid Password: `validpassword`

---

#### TC009: Incorrect MFA

**Description:**  
Verify that an error message is displayed when an incorrect MFA code is entered.

**Steps:**
1. Open the login page.
2. Enter an @abtasty email address.
3. Enter a valid password.
4. Click the "Login" button.
5. Enter an incorrect MFA code.
6. Click the "Login" button again.

**Expected Result:**
- Error message "Incorrect MFA code" is displayed.

**Data Set:**
- @abtasty Email: `mfa.email@abtasty.com`
- Valid Password: `validpassword`
- Incorrect MFA Code: `incorrectmfacode`

---

#### TC010: Save device for MFA

**Description:**  
Verify that the device is saved for MFA when the "Save this device" option is checked.

**Steps:**
1. Open the login page.
2. Enter an @abtasty email address.
3. Enter a valid password.
4. Click the "Login" button.
5. Enter a valid MFA code.
6. Check the "Save this device" option.
7. Click the "Login" button again.

**Expected Result:**
- User is logged in successfully and not prompted for MFA on subsequent logins from the same device.

**Data Set:**
- @abtasty Email: `mfa.email@abtasty.com`
- Valid Password: `validpassword`
- Valid MFA Code: `validmfacode`

---

#### TC011: Responsive Design

**Description:**  
Verify that the login page is responsive and adapts to different screen sizes.

**Steps:**
1. Open the login page.
2. Resize the browser window to below 1024px.

**Expected Result:**
- Login form takes up the full screen.

**Data Set:**
- N/A

---

#### TC012: Translation Check

**Description:**  
Verify that the login page is properly translated into different languages.

**Steps:**
1. Open the login page.
2. Change the language to French, Spanish, or German.

**Expected Result:**
- All text is correctly translated into the selected language.

**Data Set:**
- N/A