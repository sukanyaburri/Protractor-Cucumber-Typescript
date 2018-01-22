import { SearchPageObject } from "../pages/searchPage";
import { browser, element, by } from "protractor";
const { Given, When, And} = require("cucumber");

//var search = new SearchPageObject();
const search: SearchPageObject = new SearchPageObject();
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

Given(/^I am on facebook page$/, async () => {
    await expect(browser.getTitle()).to.eventually.equal("Facebook - Log In or Sign Up");
});


When(/^I enter userd "(.*?)"$/, async (text) => {
    //await expect(search.userid.sendkeys(text));
    element(by.id('email')).sendKeys(text);
});

When(/^I enter passwrd "(.*?)"$/, async (text) => {
    //await expect(browser.search.password.sendKeys(text));
    element(by.id('pass')).sendKeys(text);
});


When(/^I click on login button$/, async () => {
     //await expect(browser.search.loginclick());
     element(by.id('u_0_2')).click();
});
