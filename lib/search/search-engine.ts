import { getSearchIndex, SearchIndexItem } from "./search-index";

export interface SearchResult {
  id: string;
  title: string;
  url: string;
  category: string;
  snippet: string;
  score: number;
  highlightedSnippet?: string;
}

const STOP_WORDS = new Set([
  "a", "an", "and", "are", "as", "at", "be", "by", "for", "from", "has", "he",
  "in", "is", "it", "its", "of", "on", "or", "that", "the", "to", "was", "were",
  "will", "with", "our", "us", "we"
]);

/**
 * Normalizes text for matching by converting to lowercase, stripping special characters,
 * and normalizing extra whitespace.
 */
export function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Extract tokens from query string.
 * Ignores stop words if there are multiple tokens present.
 */
export function extractTokens(query: string): string[] {
  const normalized = normalizeText(query);
  if (!normalized) return [];

  const rawTokens = normalized.split(" ").filter(Boolean);
  if (rawTokens.length === 1) {
    return rawTokens;
  }

  const filtered = rawTokens.filter((token) => !STOP_WORDS.has(token));
  return filtered.length > 0 ? filtered : rawTokens;
}

/**
 * Performs a search across all site content, ranking items by relevance.
 */
export function searchSite(rawQuery: string): SearchResult[] {
  const query = rawQuery.trim();
  if (!query) {
    return [];
  }

  const normalizedQuery = normalizeText(query);
  const tokens = extractTokens(query);
  if (tokens.length === 0 && !normalizedQuery) {
    return [];
  }

  const index = getSearchIndex();
  const scoredResults: SearchResult[] = [];

  for (const item of index) {
    const itemTitleNorm = normalizeText(item.title);
    const itemSnippetNorm = normalizeText(item.snippet);
    const itemContentNorm = normalizeText(item.content);
    const itemCategoryNorm = normalizeText(item.category);
    const itemKeywordsNorm = item.keywords.map(normalizeText);

    let score = 0;

    // 1. Exact Title Match
    if (itemTitleNorm === normalizedQuery) {
      score += 500;
    } else if (itemTitleNorm.startsWith(normalizedQuery)) {
      score += 300;
    } else if (itemTitleNorm.includes(normalizedQuery)) {
      score += 200;
    }

    // 2. Exact Category Match
    if (itemCategoryNorm === normalizedQuery) {
      score += 150;
    }

    // 3. Keyword / Key Term Match
    for (const kw of itemKeywordsNorm) {
      if (kw === normalizedQuery) {
        score += 180;
      } else if (kw.includes(normalizedQuery)) {
        score += 90;
      }
    }

    // 4. Exact Phrase in Snippet or Content
    if (itemSnippetNorm.includes(normalizedQuery)) {
      score += 100;
    }
    if (itemContentNorm.includes(normalizedQuery)) {
      score += 50;
    }

    // 5. Individual Token Matching
    let matchedTokenCount = 0;
    for (const token of tokens) {
      let tokenMatched = false;

      // Token in title
      if (itemTitleNorm.includes(token)) {
        score += 80;
        tokenMatched = true;
      }

      // Token in keywords
      if (itemKeywordsNorm.some((kw) => kw.includes(token))) {
        score += 60;
        tokenMatched = true;
      }

      // Token in category
      if (itemCategoryNorm.includes(token)) {
        score += 40;
        tokenMatched = true;
      }

      // Token in snippet
      if (itemSnippetNorm.includes(token)) {
        score += 25;
        tokenMatched = true;
      }

      // Token in body content (capped contribution per token)
      if (itemContentNorm.includes(token)) {
        score += 10;
        tokenMatched = true;
      }

      if (tokenMatched) {
        matchedTokenCount++;
      }
    }

    // Multi-token complete match bonus
    if (tokens.length > 1 && matchedTokenCount === tokens.length) {
      score *= 1.5;
    }

    // 6. Specific Intent / Subject Boosts (Ensures top-tier relevance for key terms)
    score += applySubjectBoosts(normalizedQuery, item.url, item.id);

    if (score > 0) {
      scoredResults.push({
        id: item.id,
        title: item.title,
        url: item.url,
        category: item.category,
        snippet: generateExcerpt(item.content, item.snippet, tokens, normalizedQuery),
        score: Math.round(score),
      });
    }
  }

  // Sort descending by score
  scoredResults.sort((a, b) => b.score - a.score);

  // Deduplicate results pointing to identical base page URLs if they share the exact same title & URL
  const seenUrls = new Set<string>();
  const deduplicated: SearchResult[] = [];

  for (const result of scoredResults) {
    if (!seenUrls.has(result.url)) {
      seenUrls.add(result.url);
      deduplicated.push(result);
    }
  }

  return deduplicated;
}

/**
 * Applies intentional relevance boosts based on specific subject searches.
 */
function applySubjectBoosts(query: string, url: string, id: string): number {
  let boost = 0;

  // Kotido / Moroto / Famine
  if (query.includes("kotido") || query.includes("moroto") || query.includes("famine") || query.includes("karamoja")) {
    if (url === "/current-appeal") boost += 450;
    if (id === "news-kotido-moroto-famine-relief-drive") boost += 400;
  }

  // Chaconet
  if (query.includes("chaconet")) {
    if (url === "/about-us/chaconet-partners") boost += 450;
    if (id === "news-getting-to-know-chaconet-our-network-of-nine-charity-homes") boost += 400;
  }

  // Volunteer
  if (query.includes("volunteer") || query.includes("volunteering")) {
    if (url === "/get-involved/volunteer") boost += 450;
    if (url === "/get-involved") boost += 250;
    if (id === "faq-volunteer") boost += 200;
  }

  // Charity Shop / Shop
  if (query.includes("charity shop") || query.includes("shop")) {
    if (url === "/get-involved/charity-shop") boost += 450;
  }

  // Annual Reports
  if (query.includes("annual report") || query.includes("report") || query.includes("audits") || query.includes("audit")) {
    if (url === "/resources/annual-reports") boost += 450;
  }

  // FAQs
  if (query.includes("faq") || query.includes("faqs") || query.includes("question") || query.includes("questions")) {
    if (url === "/resources/faqs") boost += 450;
  }

  // Refugees
  if (query.includes("refugee") || query.includes("refugees") || query.includes("asylum")) {
    if (id === "programme-refugee-support") boost += 450;
  }

  // Disability
  if (query.includes("disability") || query.includes("disabled") || query.includes("special needs")) {
    if (id === "programme-disability-support") boost += 450;
  }

  // Elderly
  if (query.includes("elderly") || query.includes("seniors") || query.includes("aging")) {
    if (id === "programme-elderly-support") boost += 450;
  }

  // Families / Children
  if (query.includes("family") || query.includes("families") || query.includes("children") || query.includes("child")) {
    if (id === "programme-family-child-support") boost += 400;
  }

  // Donate
  if (query.includes("donate") || query.includes("donation") || query.includes("giving") || query.includes("contribute")) {
    if (url === "/donate") boost += 450;
  }

  // Contact
  if (query.includes("contact") || query.includes("phone") || query.includes("address") || query.includes("location") || query.includes("nsambya")) {
    if (url === "/contact-us") boost += 450;
  }

  return boost;
}

/**
 * Generates a clean snippet for search results.
 */
function generateExcerpt(
  content: string,
  defaultSnippet: string,
  tokens: string[],
  normalizedQuery: string
): string {
  if (!content) return defaultSnippet;

  const normalizedContent = content.toLowerCase();
  const matchIndex = normalizedContent.indexOf(normalizedQuery);

  if (matchIndex !== -1) {
    const start = Math.max(0, matchIndex - 40);
    const end = Math.min(content.length, matchIndex + 140);
    let excerpt = content.slice(start, end).trim();
    if (start > 0) excerpt = "..." + excerpt;
    if (end < content.length) excerpt = excerpt + "...";
    return excerpt;
  }

  for (const token of tokens) {
    const idx = normalizedContent.indexOf(token);
    if (idx !== -1) {
      const start = Math.max(0, idx - 40);
      const end = Math.min(content.length, idx + 140);
      let excerpt = content.slice(start, end).trim();
      if (start > 0) excerpt = "..." + excerpt;
      if (end < content.length) excerpt = excerpt + "...";
      return excerpt;
    }
  }

  return defaultSnippet;
}
