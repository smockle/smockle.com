describe("index.amp.html", () => {
  beforeAll(async () => {
    await page.goto("http://localhost:3000/index.amp.html");
  });

  it("has welcome message", async () => {
    await expect(page).toMatch("SALUT!");
  });

  it("has introduction", async () => {
    await expect(page).toMatch(
      "I love making connections between people and ideas."
    );
  });

  it("has links in the 'Networker.' section", async () => {
    const length = await page.$$eval("#connect a", x => x.length);
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
});
