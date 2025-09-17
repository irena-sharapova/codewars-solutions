const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("No words provided.");
  process.exit(0);
}

const randomIndex = Math.floor(Math.random() * args.length);
console.log(args[randomIndex]);
