// Unix timestamp in milliseconds
const currentTime = Date.now(); 
console.log( currentTime );
const timeInTenMinutes = now + 600000;
console.log( timeInTenMinutes );

const HMACSHA256 = (stringToSign, secret) => "not_implemented"

// The header typically consists of two parts: 
// the type of the token, which is JWT, and the signing algorithm being used, 
// such as HMAC SHA256 or RSA.
const header = {
    "alg": "ES256",
    "kid": "S27C28J257",
    "typ": "JWT"
}
const encodedHeaders = btoa(JSON.stringify(header))


// The second part of the token is the payload, which contains the claims.
// Claims are statements about an entity (typically, the user) and 
// additional data. There are three types of claims: 
// registered, public, and private claims.
const payload = {    
    "iss": "69a6de91-2a8d-47e3-e053-5b8c7c11a4d1",
    "iat": currentTime,
    "exp": timeInTenMinutes,
    "aud": "appstoreconnect-v1"
}
const encodedPlayload = btoa(JSON.stringify(payload))

const privateKey = process.env.ASC_KEY

// create the signature part you have to take the encoded header, 
// the encoded payload, a secret, the algorithm specified in the header, 
// and sign that.
const signature = HMACSHA256(`${encodedHeaders}.${encodedPlayload}`, privateKey)
const encodedSignature = btoa(signature)

const jwt = `${encodedHeaders}.${encodedPlayload}.${encodedSignature}`
console.log({jwt})