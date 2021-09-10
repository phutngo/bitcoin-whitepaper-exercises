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
  data: "",
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
}

// console.log(`Blockchain is valid: ${verifyChain(Blockchain)}`);

// **********************************

function blockHash(bl) {
  return crypto
    .createHash("sha256")
    .update
    // TODO: use block data to calculate hash
    ()
    .digest("hex");
}
