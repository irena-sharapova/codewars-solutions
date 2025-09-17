function pickRandom(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  return arr[Math.floor(Math.random() * arr.length)];
}

const args = process.argv.slice(2);

if (args.length > 0) {
  const word = pickRandom(args);
  if (word != null) console.log(word);
  process.exit(0);
}