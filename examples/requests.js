var Dwolla = require('dwolla')()    // Include the Dwolla REST Client
    , cfg = require('./_config')    // Include any required keys
    ;

// Seed the user's OAuth token
Dwolla.setToken(cfg.accessToken);

/***
 * Example 1:
 *
 * Request $5 from Source ID '812-111-1111'
 */

Dwolla.request('812-111-1111', '5.00', function(err, data) {
   if (err) { console.log(err); }
   console.log(data);
});

/***
 * Example 2:
 *
 * List pending money requests for the user associated with the
 * OAuth token
 */

Dwolla.requests(function(err, data){
   if (err) { console.log(err); }
   console.log(data);
});

/***
 * Example 3:
 *
 * Fetch detailed information about a money request by specific id '12345678'
 */

Dwolla.requestById('12345678', function(err, data) {
   if (err) { console.log(err); }
   console.log(data);
});

/***
 * Example 4:
 *
 * Cancel money request with ID '12345678'
 */

Dwolla.cancelRequest('12345678', function(err, data){
   if (err) { console.log(err); }
   console.log(data);
});

/***
 * Example 5:
 *
 * Fulfill money request '12345678' of amount '10.00'
 */

Dwolla.fulfillRequest(cfg.pin, '12345678', '10.00', function(err, data) {
   if (err) { console.log(err); }
   console.log(data);
});