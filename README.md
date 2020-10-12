# Testing with Nightwatchjs

## What is Nightwatchjs
**Nightwatch.js** is a test automation framework on web applications, developed in Node.js which uses W3C WebDriver API (formerly Selenium WebDriver). It is a complete End-to-End testing solution which aims to simplify writing automated tests and setting up Continuous Integration. Nightwatch works by communicating over a restful HTTP API with a WebDriver server (such as ChromeDriver or Selenium Server).

## Nightwatch.js Installation
Run the following command to install the latest version using the terminal:


```
yarn install nightwatch
```

## Selenium Installation
Run the following command to install the latest version using the terminal:


```
yarn add selenium-server
```

## WebDrive Service
After installation Nightwatch, you need to identify the browsers you want to test. Those who are about to perform the test in Chrome and Firefox should also install their drivers. Drivers are used by Selenium to control scanners. Performing the test with Safari is easier to do, because Safari’s driver is built into MacOS.

```
yarn add chromedriver
```


Now that we have installed WebDriver servers, there is the process of creating **[nightwatch.json](https://github.com/miktadozturk/nightwatchjs_test/blob/main/nightwatch.json)** file.


## 1. Google Search Test

First test with the Google Search. The test below opens the search engine Google.com and searches for "nightwatch", then verifies if the term first result is the Nightwatch.js website and click the link. Then takes to screenshot and finish the test.

You can see from here **[googleFirstTest.js](https://github.com/miktadozturk/nightwatchjs_test/blob/main/test/googleFirstTest.js)**


## 2. Amazon.com Login Page Test

Now we will focus on the Login page test with Nightwatchjs. I chose the Amazon.com page. After understanding the logic, you can use other pages if you wish. 

You can see from here **[loginTest.js](https://github.com/miktadozturk/nightwatchjs_test/blob/main/test/loginTest.js)**


# More

You can watch my videos and subscribe my channel : **[Youtube.com/MiktadOzturk](https://www.youtube.com/MiktadOzturk)**

or

You can read my articles from Medium and follow me : **[medium.com/@miktadozturk](https://medium.com/@miktadozturk)**
