// const CryptoJS = require("crypto-js");
const Cryptr = require("cryptr");
const cryptr = new Cryptr(process.env.secretKey, {
  pbkdf2Iterations: 10000,
  saltLength: 10,
});

const crypt = (text) => {
  const encryptedString = cryptr.encrypt(text);
  return encryptedString;
};

const decrypt = (encoded) => {
  const decryptedString = cryptr.decrypt(encoded);
  return decryptedString;
};

// Module Export
module.exports = {
  crypt,
  decrypt,
};
