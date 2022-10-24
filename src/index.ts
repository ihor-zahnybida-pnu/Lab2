import { Polybius } from './polybius';

const p = new Polybius();

console.log(`Encrypted: ${p.encrypt("software")}`);
console.log(`Decrypted: ${p.decrypt("MLE$PSDC")}`);
