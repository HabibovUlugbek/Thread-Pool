const crypto = require("node:crypto")

const MAX_CALLS = 3;
const start = Date.now()
for(let i = 0; i < MAX_CALLS; i++){
    crypto.pbkdf2Sync("password", "salt", 10000, 512, "sha512")
}
console.log(`Spending time for creating ${MAX_CALLS} hashes : ` , Date.now() - start )