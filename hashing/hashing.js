"use strict";

var crypto = require("crypto");

// The Power of a Smile
// by Tupac Shakur
var poem = [
  "The power of a gun can kill",
  "and the power of fire can burn",
  "the power of wind can chill",
  "and the power of a mind can learn",
  "the power of anger can rage",
  "inside until it tears u apart",
  "but the power of a smile",
  "especially yours can heal a frozen heart",
];

var Blockchain = {
  blocks: [],
};

// Genesis block
Blockchain.blocks.push({
  index: 0,
  hash: "000000",
  data: "Genesis Block - The Power of a Smile by Tupac Shakur",
  timestamp: Date.now(),
});

function createBlock(_data) {
  const block = {
    index: Blockchain.blocks.length,
    prevHash: Blockchain.blocks[Blockchain.blocks.length - 1].hash,
    data: _data,
    timestamp: Date.now(),
  };

  block.hash = blockHash(block);
  Blockchain.blocks.push(block);

  return block;
}

// console.log(`Blockchain is valid: ${verifyChain(Blockchain)}`);

// **********************************

function blockHash(bl) {
  const strungBlock = JSON.stringify(bl);
  //use block data to calculate hash
  return crypto.createHash("sha256").update(strungBlock).digest("hex");
}

// insert each line into blockchain
for (const line of poem) {
  createBlock(line);
}

for (const block of Blockchain.blocks) {
  console.log("🟥⚠️🟣 ~ file: hashing.js ~ line 40 ~ block", block);
}

// for (let i = 0; i < Blockchain.blocks.length; i++) {
//   console.log("🟥⚠️🟣 ~ file: hashing.js ~ line 40 ~ block", Blockchain.blocks[i]);
// }
