import { describe, test } from "@jest/globals";
const { Builder, By, until } = require("selenium-webdriver");

const chrome = require("selenium-webdriver/chrome");

describe("회원 로그인 테스트", () => {
  test("성공 케이스 테스트", async () => {
    let driver = await new Builder()
      .forBrowser("chrome")
      .setChromeOptions(new chrome.Options())
      .build();
    await driver.post("http://localhost:8080/api/v1/member/login");

    const input_email = await driver.wait(
      until.elementLocated(By.id("email-input"))
    );
    await input_email.sendKeys("test@test.com");

    const input_password = await driver.wait(
      until.elementLocated(By.id("password-input"))
    );
    await input_password.sendKeys("12345678910");

    const login_btn = await driver.wait(
      until.elementLocated(By.id("login-btn"))
    );

    await login_btn.click();

    // const logout_btn = await driver.wait(
    //   until.elementLocated(By.id("logout-btn")),
    //   30000
    // );
    // // 가져온 요소가 NULL이 아니라면 성공으로 판단
    // expect(logout_btn).not.toBeNull();
    driver.quit();
  });
});
