/*
* Amazon.com login page test.
*
* */
module.exports = {
    "Test Case-1: Go to Amazon.com, check elements, take a screenshots": (browser) => {
        const page = browser.page.loginCommand();
        page.navigate()
            .checkAmazonMainPage()
            .saveScreenshot("test/screenshots/" + "amz-main-page.png")
            .end();
    },
    "Test Case-2: Go to login page, check elements, take a screenshots": (browser) => {
        const page = browser.page.loginCommand();
        page.navigate()
            .verifyLoginElements()
            .saveScreenshot("test/screenshots/" + "amz-login-page.png")
            .end();
    },
    "Test Case-3: Login fail, invalid password, take a screenshots": (browser) => {
        const page = browser.page.loginCommand();
        page.navigate()
            .invalidPassword()
            .loginErrorMessage()
            .saveScreenshot("test/screenshots/" + "amz-login-fail.png")
            .end();
    },
    "Test Case-4: Login success, valid password, take a screenshots": (browser) => {
        const page = browser.page.loginCommand();
        page.navigate()
            .validPassword()
            .successUserLogin()
            .saveScreenshot("test/screenshots/" + "amz-login-success.png")
            .end();
    },
};