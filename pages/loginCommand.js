/*
* Page object https://s3.eu-central-1.amazonaws.com/faircare-registration-beta/beta12/index.html?flow=schema_da_direkt_bas_qa_challenge&showDaTheme=true#policy and page commands
* */

module.exports = {
    url: function () {
        return "https://s3.eu-central-1.amazonaws.com/faircare-registration-beta/beta12/index.html?flow=schema_da_direkt_bas_qa_challenge&showDaTheme=true#policy";
    },
    elements:{
        signIn: {
            selector: "#nav-link-accountList"
        },
        form: {
            selector: ".a-section"
        },
        email: {
            selector: "#ap_email"
        },
        continue: {
            selector: "#continue"
        },
        password: {
            selector: "#ap_password"
        },
        signInButton: {
            selector: "#signInSubmit"
        },
        errorMessageAlert: {
            selector: ".a-box-inner.a-alert-container"
        },
        loggedInSuccess: {
            selector: "#nav-link-accountList"
        },
    },
    commands: [{
        /*
        * Test Case-1:
        *
        * check all fields visibility title and body
        *
        * */
        checkAmazonMainPage: function () {
            return this
                .assert.title("Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more")
                .assert.visible("body")
        },

        /*
        * Test Case-2:
        *
        * check all fields visibility title, form, email and continue button
        *
        * */
        verifyLoginElements: function () {
            return this
                .click("@signIn")
                .assert.title("Amazon Sign-In")
                .assert.visible("@form")
                .assert.visible("@email")
                .assert.visible("@continue")
        },

        /*
        * Test Case-3:
        *
        * login fail check, with invalid password and error message.
        *
        * */
        invalidPassword: function () {
            return this
                .click("@signIn")
                .setValue("@email", "mithatozturk34@gmail.com")
                .click("@continue")
                .setValue("@password", "1234567890")
                .click("@signInButton")
        },
        loginErrorMessage: function () {
            return this
                .assert.elementPresent("@errorMessageAlert")
                .assert.containsText("@errorMessageAlert", "To better protect your account, please re-enter your password and then enter the characters as they are shown in the image below.")
        },

        /*
        * Test Case-4:
        *
        * login success check, with valid password, main page check and logout success.
        *
        * */
        validPassword: function () {
            return this
                .click("@signIn")
                .setValue("@email", "mithatozturk34@gmail.com")
                .click("@continue")
                .setValue("@password", "Test12345")
                .click("@signInButton")
        },
        successUserLogin: function () {
            return this
                .assert.visible("@loggedInSuccess")
        },
    }],
};