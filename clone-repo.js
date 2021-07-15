/**
 * @name Amazon search
 *
 * @desc Looks for a "nyan cat pullover" on amazon.com, goes two page two clicks the third one.
 */
const puppeteer = require("puppeteer");
const dotenv = require("dotenv");
dotenv.config();

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto(
    `https://github.com/${process.env.REPO_USERNAME_FOR_CLONE}/${process.env.REPO_NAME_FOR_CLONE}`
  );

  // waits for 2000 ms
  await page.waitForTimeout(2000);

  // click 'code' button
  await page.click("span.d-none.d-md-flex.ml-2");
  await page.waitForSelector(
    ".form-control.input-monospace.input-sm.color-bg-secondary"
  );

  // get clone link
  var cloneLink = await page.evaluate(() => {
    const cloneLink = document.querySelector("input.input-monospace").value;
    return cloneLink;
  });
  console.log("Use this command to clone desired repository:\n");
  console.log("git clone ", cloneLink, "\n");

  await page.screenshot({ path: "images/clone_repo.png" });

  // await browser.close();
  console.log("See screenshot: " + "clone_repo");
})();
