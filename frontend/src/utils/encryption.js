import crypto from 'crypto';

const encryptMessage = (message, publicKey) => {
  const encrypted = crypto.publicEncrypt(publicKey, Buffer.from(message));
  return encrypted.toString('base64');
};

const decryptMessage = (encryptedMessage, privateKey) => {
  const decrypted = crypto.privateDecrypt(privateKey, Buffer.from(encryptedMessage, 'base64'));
  return decrypted.toString('utf-8');
};

export { encryptMessage, decryptMessage };
