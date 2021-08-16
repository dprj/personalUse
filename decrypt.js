const Cryptr = require('cryptr');
//Replace secret_key with your old password
const cryptr = new Cryptr('secret_key');
//encrypted string. 
const encryptedString = "67a92113b07ce342d117fa2f51f7b641850d056fb7d7b8d193cad9dded3a043de1d50f06488341e499596d5be1afe56f701d038a573a403630631669b166b5b87219a017954127d89ebe2fd74174575ae1d6c107136f6be24c111b18f1b6638e17ba83ff18e5b15c5309f80b79b557c31e9100dfd21ab2853b76d86e8e25c2de79f74a1ba73aeedd7a39a88ef94812266ba4a097b4d61e5baa78565cd0dc1b153fc5509877413cc3adb1c657dea0abb629"
const decryptedString = cryptr.decrypt(encryptedString);
//it will print my secrect key in the console.
console.log(decryptedString); 