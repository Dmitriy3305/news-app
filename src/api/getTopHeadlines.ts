export async function getTopHeadlines() {
  const API_KEY = "31d694054aa34cdfb9acd80a185054ab";
  const API_URL =
    "https://newsapi.org/v2/top-headlines/sources?&apiKey=" + API_KEY;

  try {
    const response = await fetch(API_URL);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Error: " + response.status);
    }
  } catch (e) {
    console.error("Error:", e);
  }
}
