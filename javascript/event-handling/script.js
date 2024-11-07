const createHex = () => Math.floor(Math.random() * 256).toString(8);

let randomHex = createHex();

const hex = (str) => /^[0-9a-fA-F]+$/.test(str);

console.log("Random Hex:", randomHex);
console.log(hex(randomHex));
