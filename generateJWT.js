// Unix timestamp in milliseconds
const currentTime = Date.now(); 
console.log( currentTime );
const timeInTenMinutes = now + 600000;
console.log( timeInTenMinutes );

const HMACSHA256 = (stringToSign, secret) => "not_implemented"

const header = {
    "alg": "ES256",
    "kid": "S27C28J257",
    "typ": "JWT"
}
const encodedHeader = btoa(JSON.stringify(header))

const payload = {    
    "iss": "69a6de91-2a8d-47e3-e053-5b8c7c11a4d1",
    "iat": currentTime,
    "exp": timeInTenMinutes,
    "aud": "appstoreconnect-v1"
}
const encodedPayload = btoa(JSON.stringify(payload))

const privateKey = process.env.ASC_KEY

const signature = HMACSHA256(`${encodedHeader}.${encodedPayload}`, privateKey)
const encodedSignature = btoa(signature)

const jwt = `${encodedHeader}.${encodedPayload}.${encodedSignature}`
console.log({jwt})