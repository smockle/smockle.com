describe("index.html", () => {
  beforeAll(async () => {
    await page.goto("http://localhost:3000");
  });

  it("has welcome message", async () => {
    await expect(page).toMatch("SALUT!");
  });

  it("has introduction", async () => {
    await expect(page).toMatch("I love long-term thinking");
  });

  it("has links in the 'Networker.' section", async () => {
    const length = await page.$$eval("#networker a", x => x.length);
    expect(length).toBe(5);
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
    await page.goto("http://localhost:3000");
  });
});
