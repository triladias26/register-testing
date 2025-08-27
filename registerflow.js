const {By, Key, Builder} = require("selenium-webdriver")
require("chromedriver")
const assert = require("assert")

async function RegisterFlow() {
    
    // open the browser
    let driver = await new Builder().forBrowser("chrome").build();

    //open the website
    await driver.get("https://www.cermati.com/gabung");

    //Assert it is on the website
    let title = await driver.getTitle();
    assert.strictEqual(title, "Daftar");

    //fill the form
    await driver.findElement(By.name("mobilePhone")).sendKeys("085781824733");
    await driver.findElement(By.name("email")).sendKeys("alana1234.testing@mailinator.com");
    await driver.findElement(By.name("firstName")).sendKeys("Alana");
    await driver.findElement(By.id("lastName")).sendKeys("Kurtis");

    //submit registration data
    await driver.sleep(2000); 
    let button = await driver.findElement(By.css('[data-button-name="register-new"]'));
    await button.click();

    // Redirect to next page
    let RedirectPagetitle = await driver.getTitle();
    assert.strictEqual(RedirectPagetitle, "Verifikasi No. Handphone");

}
RegisterFlow();