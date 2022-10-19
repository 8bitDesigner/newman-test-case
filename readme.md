# Minimal reproduction for bug in Newman

When running against a server on localhost, if the server responds with a
`Set-Cookie` header for the domain `localhost`, Postman will store the cookie
and use it for subsequent requests against localhost, however newman will not.

## Steps to reproduce:

1. Clone this repo
2. `npm install` to install a minimal express server and newman
3. `npm start` to boot the minimal express server on port 8000
4. `npm test` to run the included newman script

## Expected outcome

The `connect.sid` cookie should be stored in the cookie jar

## Actual outcome

No cookie is stored in the cookie jar
