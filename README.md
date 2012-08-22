# dwolla-node: Node Wrapper for Dwolla's API
=================================================================================

## Version
1.0.0

## Requirements

- [NodeJS](http://www.nodejs.org/)
- [npm](http://www.npmjs.org/)
- [Dwolla Application](https://www.dwolla.com/applications)

## Installation

Automatic installation:

    npm install dwolla

## Usage

```javascript
// Instantiate a Dwolla API object
var Dwolla = require('dwolla')(['{CLIENT_ID}', '{CLIENT_SECRET}']);

// Seed the user's OAuth token
Dwolla.setToken('[TOKEN]');

// Send money to a given Dwolla ID
Dwolla.send('[PIN]', '812-626-8794', 1.00, function(error, transactionId) {
    if(error) { console.log('Error: ' + error); }

    console.log('Transaction ID: ' + transactionId);
});
```
    
## Examples / Quickstart

This repo includes various usage examples, including:

* Authenticating with OAuth [oauth.js]
* Sending money [send.js]
* Fetching account information [accountInfo.js]
* Grabbing a user's contacts [contacts.js]
* Listing a user's funding sources [fundingSources.js]
* Creating offsite gateway sessions [offsiteGateway.js]

## Methods

Helper Methods:

    setToken(oauth_token)   ==> (bool) did the token change sucessfully?
    getToken()              ==> (string) the currently used oauth token

Authentication Methods:

    authUrl([redirect_uri, scope])          ==> (string) OAuth permissions page URL
    requestToken(code[, redirect_uri, fn])  ==> (string) a never-expiring OAuth access token

Account Methods:

    basicAccountInfo(id, fn)    ==> 
    fullAccountInfo(fn)         ==> (array) the user entity associated with the token
    balance(fn)                 ==> (string) the Dwolla balance of the account associated with the token
    register(userInfo, fn)      ==> 

Contacts Methods:

    contacts(params, fn)            ==> (array) list of contacts matching the search criteria
    nearby(lat, lon, params, fn)    ==> (array) list of nearby spots matching the search criteria
    
Funding Sources Methods:

    fundingSources(fn)          ==> (array) a list of funding sources associated with the token
    fundingSourceById(id, fn)   ==> (array) information about the {$id} funding source

Transactions Methods:

    send(pin, destinationId, amount, params, fn)    ==> (string) transaction ID
    request(pin, sourceId, amount, params, fn)      ==> (string) request ID
    transactionById(id, fn)                         ==> (array) transaction details
    transactions(params, fn)                        ==> (array) a list of recent transactions matching the search criteria
    transactionsStats(params, fn)                   ==> (array) statistics about the account associated with the token
    
Offsite Gateway Methods:

    startGatewaySession(redirectUri)                            ==> (bool) did session start?
    addGatewayProduct(name, amount[, description, quantity])    ==> (bool) was product added?
    verifyGatewaySignature(signature, checkout_id, amount)      ==> (bool) is signature valid?
    getGatewayURL(destination_id[, params], fn)                 ==> (string) checkout URL
    setMode(mode)                                               ==> (bool) did the mode change successfully?

## Credits

This wrapper is a forked extension of Kenan Shifflett's 'node-dwolla' module.

- Kenan Shifflett &lt;kenan.shifflett@gmail.com&gt;
- Michael Schonfeld &lt;michael@dwolla.com&gt;

## Support

- Dwolla API &lt;api@dwolla.com&gt;
- Michael Schonfeld &lt;michael@dwolla.com&gt;

## References / Documentation

http://developers.dwolla.com/dev

## License 

(The MIT License)

Copyright (c) 2012 Dwolla &lt;michael@dwolla.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.