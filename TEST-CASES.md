## Disclaimer

All URLs, usernames, passwords, email addresses, page addresses, and their possible transitions provided in this document are for illustrative purposes only and have been fabricated without verification. These details are intended solely to align with the test cases and should not be used as real data. Any resemblance to actual websites, accounts, or data is purely coincidental. Please note that this data may not work in a real environment and is created schematically for understanding.

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

**Acceptance Criteria:**
1. The user enters a valid email address.
2. The user enters a valid password.
3. The user clicks the "Login" button.
4. The system redirects the user to the Dashboard.
5. The Dashboard title is displayed as "Dashboard - AB Tasty".
6. No error messages are displayed.

**Data Set:**
- Valid Email: `valid.email@abtasty.com`
- Valid Password: `validpassword`

---

#### TC002: Invalid email

**Description:**  
Verify that an error message is displayed when an invalid email is entered.

**Acceptance Criteria:**
1. The user enters an invalid email address.
2. The user enters a valid password.
3. The user clicks the "Login" button.
4. The system displays an error message "Invalid email/password".
5. The user remains on the login page.

**Data Set:**
- Invalid Email: `invalid.email@abtasty.com`
- Valid Password: `validpassword`

---

#### TC003: Invalid password

**Description:**  
Verify that an error message is displayed when an invalid password is entered.

**Acceptance Criteria:**
1. The user enters a valid email address.
2. The user enters an invalid password.
3. The user clicks the "Login" button.
4. The system displays an error message "Invalid email/password".
5. The user remains on the login page.

**Data Set:**
- Valid Email: `valid.email@abtasty.com`
- Invalid Password: `invalidpassword`

---

#### TC004: SSO login

**Description:**  
Verify that a user is redirected to the SSO login page when an SSO email is entered.

**Acceptance Criteria:**
1. The user enters an SSO email address.
2. The user clicks the "Login" button.
3. The system redirects the user to the SSO login page.
4. The SSO login page is displayed with the appropriate branding and fields.

**Data Set:**
- SSO Email: `sso.email@abtasty.com`

---

#### TC005: CAPTCHA trigger

**Description:**  
Verify that the CAPTCHA is triggered after 3 consecutive failed login attempts.

**Acceptance Criteria:**
1. The user enters a valid email address.
2. The user enters an invalid password.
3. The user clicks the "Login" button.
4. Steps 1-3 are repeated two more times.
5. After the third failed attempt, the CAPTCHA is displayed.
6. The user remains on the login page.

**Data Set:**
- Valid Email: `valid.email@abtasty.com`
- Invalid Password: `invalidpassword`

---

#### TC006: Correct CAPTCHA

**Description:**  
Verify that the user can log in after solving the CAPTCHA correctly.

**Acceptance Criteria:**
1. The user enters a valid email address.
2. The user enters an invalid password.
3. The user clicks the "Login" button.
4. Steps 1-3 are repeated two more times to trigger CAPTCHA.
5. The user solves the CAPTCHA correctly.
6. The user clicks the "Login" button again.
7. The system prompts the user to enter the password again.
8. The user enters the correct password.
9. The system redirects the user to the Dashboard.
10. The Dashboard title is displayed as "Dashboard - AB Tasty".

**Data Set:**
- Valid Email: `valid.email@abtasty.com`
- Invalid Password: `invalidpassword`
- Correct CAPTCHA: `correctcaptcha`

---

#### TC007: Incorrect CAPTCHA

**Description:**  
Verify that an error message is displayed when the CAPTCHA is solved incorrectly.

**Acceptance Criteria:**
1. The user enters a valid email address.
2. The user enters an invalid password.
3. The user clicks the "Login" button.
4. Steps 1-3 are repeated two more times to trigger CAPTCHA.
5. The user solves the CAPTCHA incorrectly.
6. The user clicks the "Login" button again.
7. The system displays an error message "CAPTCHA verification failed".
8. The user remains on the login page.

**Data Set:**
- Valid Email: `valid.email@abtasty.com`
- Invalid Password: `invalidpassword`
- Incorrect CAPTCHA: `incorrectcaptcha`

---

#### TC008: MFA required

**Description:**  
Verify that an MFA code is required for users with @abtasty email addresses.

**Acceptance Criteria:**
1. The user enters an @abtasty email address.
2. The user enters a valid password.
3. The user clicks the "Login" button.
4. The system prompts the user to enter an MFA code.
5. The MFA code input field is displayed.

**Data Set:**
- @abtasty Email: `mfa.email@abtasty.com`
- Valid Password: `validpassword`

---

#### TC009: Incorrect MFA

**Description:**  
Verify that an error message is displayed when an incorrect MFA code is entered.

**Acceptance Criteria:**
1. The user enters an @abtasty email address.
2. The user enters a valid password.
3. The user clicks the "Login" button.
4. The system prompts the user to enter an MFA code.
5. The user enters an incorrect MFA code.
6. The user clicks the "Login" button again.
7. The system displays an error message "Incorrect MFA code".
8. The user remains on the MFA input page.

**Data Set:**
- @abtasty Email: `mfa.email@abtasty.com`
- Valid Password: `validpassword`
- Incorrect MFA Code: `incorrectmfacode`

---

#### TC010: Save device for MFA

**Description:**  
Verify that the device is saved for MFA when the "Save this device" option is checked.

**Acceptance Criteria:**
1. The user enters an @abtasty email address.
2. The user enters a valid password.
3. The user clicks the "Login" button.
4. The system prompts the user to enter an MFA code.
5. The user enters a valid MFA code.
6. The user checks the "Save this device" option.
7. The user clicks the "Login" button again.
8. The system redirects the user to the Dashboard.
9. The Dashboard title is displayed as "Dashboard - AB Tasty".
10. On subsequent logins from the same device, the user is not prompted for MFA.

**Data Set:**
- @abtasty Email: `mfa.email@abtasty.com`
- Valid Password: `validpassword`
- Valid MFA Code: `validmfacode`

---

#### TC011: Responsive Design

**Description:**  
Verify that the login page is responsive and adapts to different screen sizes.

**Acceptance Criteria:**
1. The user opens the login page.
2. The user resizes the browser window to below 1024px.
3. The login form takes up the full screen.
4. All elements are properly aligned and visible on the screen.

**Data Set:**
- N/A

---

#### TC012: Translation Check

**Description:**  
Verify that the login page is properly translated into different languages.

**Acceptance Criteria:**
1. The user opens the login page.
2. The user changes the language to French.
3. All text on the login page is correctly translated into French.
4. The user changes the language to Spanish.
5. All text on the login page is correctly translated into Spanish.
6. The user changes the language to German.
7. All text on the login page is correctly translated into German.

**Data Set:**
- N/A
