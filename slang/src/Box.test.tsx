import { chromium, Browser, Page } from "playwright";

let browser: Browser;
beforeAll(async () => {
  browser = await chromium.launch();
});

afterAll(async () => {
  await browser.close();
});

let page: Page;
beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(async () => {
  await page.close();
  // render.resetHtml();
});

it("Home page should have the correct title", async () => {
  // render.setHtml("<html><head><title>Another Title</title></head></html>");
  await page.goto("http://localhost:4321/");
  expect(await page.title()).toBe("Sup Tho");
});
