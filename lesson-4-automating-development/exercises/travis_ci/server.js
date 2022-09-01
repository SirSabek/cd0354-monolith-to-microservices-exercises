function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
const favoriteFood = process.env.VARIABLE_NAME
async function main() {
  while(true) {
    console.log(`My favorite food is ${VARIABLE_NAME}`);
    await sleep(5000);
  }
}

main();
