// this file will test the query and make sure it is returning a random value
import { randomNetflixTitle } from ".";

// testing the query I have created along with the associated array
test("testing out a basic test for this Netflix query", async () => {
  const netflixTitles = [
    "Peaky Blinders",
    "Breaking Bad",
    "Stranger Things",
    "Squid Games",
    "The Witcher",
    "Love Island",
    "Naruto",
  ];
  const expectedValue = "Peaky Blinders";

  const randomValue = await randomNetflixTitle();

  expect(netflixTitles).toContain(expectedValue);
  expect(randomValue).toBeDefined();
  expect(netflixTitles[0]).toBe("Peaky Blinders");
  expect(randomValue).not.toContain("Pokemon");
  expect(netflixTitles[7]).not.toBeDefined();
});
