/**
 * @name Github login
 *
 * @desc Looks for a "nyan cat pullover" on amazon.com, goes two page two clicks the third one.
 */
const puppeteer = require("puppeteer");
const dotenv = require("dotenv");
dotenv.config();

const screenshot1 = "github_repo.png";

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto("https://github.com/");
  await page.waitForSelector(".HeaderMenu-link.flex-shrink-0.no-underline");

  // click sign-in button
  await page.click(".HeaderMenu-link.flex-shrink-0.no-underline");
  await page.waitForSelector(".octicon.octicon-mark-github");

  // github login
  await page.type("#login_field", process.env.GITHUB_USERNAME, { delay: 100 });
  await page.type("#password", process.env.GITHUB_PASSWORD, { delay: 100 });

  await page.click(".btn.btn-primary.btn-block");

  // waits for 5000 ms
  await page.waitForTimeout(5000);

  await page.screenshot({ path: "images/github_login.png" });

  // await browser.close();
  console.log("See screenshot: " + "github_login");
})();
