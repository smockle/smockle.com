const sites = {
  development: "http://localhost:3000",
  staging: "https://staging.smockle.com",
  production: "https://www.smockle.com"
};
const site = sites[process.env.NODE_ENV] || "http://localhost:3000";

describe("index.html", () => {
  beforeAll(async () => {
    await page.goto(site);
  });

  it("has welcome message", async () => {
    await expect(page).toMatch("SALUT!");
  });

  it("has introduction", async () => {
    await expect(page).toMatch("I love long-term thinking");
  });

  it("has links in the 'Networker.' section", async () => {
    const length = await page.$$eval(".network-icons a", x => x.length);
    expect(length).toBe(4);
  });

  it("has no missing 'alt' attributes", async () => {
    const alts = await page.$$eval("img", images =>
      Array.from(images, ({ alt }) => alt)
    );
    alts.forEach((alt = "") => {
      expect(typeof alt).toBe("string");
      expect(alt).not.toBe("");
    });
  });

  it("has no console warnings or errors", async () => {
    page.on("console", async ({ _type: type, _text: message }) => {
      if (["warning", "error"].includes(type)) {
        await expect(message).toBeNull();
      }
    });
    await page.goto(site);
  });
});
