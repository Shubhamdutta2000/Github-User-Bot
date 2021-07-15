/**
 * @name Github: Create Repository
 *
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
  await page.goto("https://github.com/");
  await page.waitForSelector(".HeaderMenu-link.flex-shrink-0.no-underline");

  // click sign-in button
  await page.click(".HeaderMenu-link.flex-shrink-0.no-underline");
  await page.waitForSelector(".octicon.octicon-mark-github");

  // github login
  await page.type("#login_field", process.env.GITHUB_USERNAME, { delay: 100 });
  await page.type("#password", process.env.GITHUB_PASSWORD, { delay: 100 });

  await page.click(".btn.btn-primary.btn-block");
  await page.waitForSelector(
    ".Link--primary.no-underline.text-bold.wb-break-all.d-inline-block"
  );
  // open dropdown
  await page.click("span.dropdown-caret");

  // new repository
  await page.waitForSelector(".dropdown-menu.dropdown-menu-sw");
  await page.click(".dropdown-menu.dropdown-menu-sw a.dropdown-item");

  // create repo
  await page.waitForSelector("#repository_name");
  await page.focus("#repository_name");
  await page.evaluate(
    (name, desc) => {
      document.getElementById("repository_name").value = name;
      document.getElementById("repository_description").value = desc;
    },
    process.env.REPO_NAME,
    process.env.REPO_DESCRIPTION
  );

  // public or private
  if (process.env.REPO_VISIBILITY === "public") {
    await page.click(
      "#repository_visibility_public",
      { clickCount: 1 },
      { delay: 100 }
    );
  } else if (process.env.REPO_VISIBILITY === "private") {
    await page.click(
      "#repository_visibility_private",
      { clickCount: 1 },
      { delay: 100 }
    );
  }
  await page.waitForTimeout(5000);

  // create repo
  await page.click("button.btn-primary");

  // waits for 5000 ms
  await page.waitForTimeout(5000);

  await page.screenshot({ path: "images/create_repo.png" });

  // await browser.close();
  console.log("See screenshot: " + "create_repo");
})();
