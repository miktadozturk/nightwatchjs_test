module.exports = {
    "1.Go to Google": function (client) {
        client
            .url("https://www.google.com/")
            .assert.visible("body")
            .saveScreenshot("test/screenshots/" + "google.jpg")
            .end()
    },

    "2. Search nightwatch.js and visit the website then take a screenshots": function (client) {
        client
            .url("https://www.google.com/")
            .pause(2000)
            .setValue("input[type=text]", ['Nightwatch.js', client.Keys.ENTER])
            .pause(3000)
            .assert.containsText("#search", "Nightwatch.js")
            .click('a[href="https://nightwatchjs.org/"]')
            .saveScreenshot("test/screenshots/" + 'nightwatchjsOrg.jpg')
            .end()
    }
};