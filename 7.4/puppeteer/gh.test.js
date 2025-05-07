let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team");
  });
  test("The h1 header content'", async () => {
    await page.waitFor(1000);
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual(
      "GitHub · Build and ship software on a single, collaborative platform · GitHub"
    );
  }, 20000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content");
  }, 10000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-mktg.btn-large-mktg.btn-muted-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toContain("Sign up for free");
  }, 10000);
});

test("Additional Title Test1'", async () => {
  await page.goto("https://github.com/");
  await page.waitFor(1000);
  const firstLink = await page.$(".btn-mktg.mb-4.btn-muted-mktg");
  await firstLink.click();
  await page.waitForSelector("h1");
  const title_subscibe = await page.title();
  expect(title_subscibe).toEqual(
    "GitHub - Newsletter Sign-up | GitHub Resources - GitHub Resources"
  );
}, 20000);

test("Additional Title Test2'", async () => {
  await page.goto("https://github.com/features/copilot");
  await page.waitFor(1000);
  const link = await page.$("a[href='/features/copilot/plans#compare']");
  await link.click();
  await page.waitFor(2000);
  await page.waitForSelector("h1");
  const title_subscibe = await page.title();
  expect(title_subscibe).toEqual(
    "GitHub Copilot · Your AI pair programmer · GitHub"
  );
}, 20000);

test("Additional Title Test3'", async () => {
  await page.goto("https://partner.github.com");
  await page.waitFor(1000);
  const link = await page.$("a[href='/technology-partners']");
  await link.click();
  await page.waitFor(2000);
  await page.waitForSelector("h1");
  const title_subscibe = await page.title();
  expect(title_subscibe).toEqual("Technology Partners | GitHub Partner Portal");
}, 20000);
