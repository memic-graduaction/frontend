export function getPhraseIndex(sentence: string, query: string) {
  const sentences = sentence.split(' ');
  const queries = query.split(' ');

  let startIndex = sentences.findIndex((s) => s === queries[0]);
  let endIndex = startIndex + queries.length - 1;
  queries.forEach((q, i) => {
    if (q !== sentences[startIndex + i]) {
      startIndex = -1;
      endIndex = -1;
    }
  });

  return { startIndex, endIndex };
}
