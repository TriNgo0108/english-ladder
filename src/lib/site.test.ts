import { BASE_PATH, SITE_NAME } from "@/lib/site";

describe("site constants", () => {
  it("BASE_PATH matches the GitHub Pages project path", () => {
    expect(BASE_PATH).toBe("/english-ladder");
  });
  it("BASE_PATH has no trailing slash", () => {
    expect(BASE_PATH.endsWith("/")).toBe(false);
  });
  it("SITE_NAME is the published name", () => {
    expect(SITE_NAME).toBe("English Ladder");
  });
});
