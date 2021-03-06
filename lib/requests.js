module.exports = function(exports) {
    // ************************
    // Request Methods
    // ************************
    var vars = exports.vars;

    /**
     * Request funds from a source user for the user associated with the authorized access token.
     * https://www.dwolla.com/developers/endpoints/transactions/request
     *
     * Optional params:
     *
     *   - sourceType
     *   - facilitatorAmount
     *   - notes
     *
     * @param {Number}   pin
     * @param {String}   sourceId
     * @param {String}   amount
     * @param {Function} fn
     */
    exports.request = function(sourceId, amount, params, fn) {
      // params are optional
      if (!fn || typeof params === 'function') {
        fn = params;
        params = {};
      }

      if (!sourceId) { throw new Error('Missing arg sourceId'); }
      if (!amount) { throw new Error('Missing arg amount'); }
      var path = '/requests/';
      var data = Object.assign({ sourceId, amount}, params | {});
      exports._post({ path, data, fn});
    };

    /**
     * Use this method to retrieve a list of pending money requests for the user associated with the authorized access token.
     * https://developers.dwolla.com/dev/docs/requests/pending
     *
     * Optional params:
     *
     *   - startDate
     *   - endDate
     *   - skip
     *   - limit
     *
     * @param {Function} fn
     */

    exports.requests = function(params, fn) {
        // params are optional
        if (!fn || typeof params === 'function') {
            fn = params;
            params = {};
        }
        var path = '/requests/';
        var query = params || {};
        exports._request({ path, query, fn });
    };

    /**
     * Use this method to fetch detailed information about a money request, identified by a specific request ID.
     * https://www.dwolla.com/developers/endpoints/transactions/request
     *
     * @param {String}   request_id
     * @param {Function} fn
     */

    exports.requestById = function(request_id, fn) {
        if (!request_id) { throw new Error('Missing arg request_id'); }
        var path = `/requests/${request_id}`;
        exports._request({ path, fn });
    };


    /**
     * Use this method to cancel (i.e. "reject") a money request from the user with the associated access token.
     * https://developers.dwolla.com/dev/docs/requests/cancel
     *
     * @param {String}   request_id
     * @param {Function} fn
     */
    exports.cancelRequest = function(request_id, fn) {
        if (typeof fn !== 'function') { throw new Error('Missing callback'); }
        if (!request_id) { throw new Error('Missing arg request_id'); }
        
        var path = `/requests/${request_id}/cancel`;
        var callback = function(err, res) {
            if (err) { return fn(err); }
            else {
                // since the actual API response is an empty string
                // in the case of a successful cancel, and that is
                // terrible, we will return true, instead.
                fn(null, true);
            }
        }
        exports._post({ path, fn: callback });
    };

    /**
     * Use this method to fulfill (i.e. "pay") a money request from the user with the associated access token.
     * https://developers.dwolla.com/dev/docs/requests/fulfill
     *
     * Optional params:
     *
     *   - notes
     *   - fundsSource
     *   - assumeCosts
     *
     * @param {Number}   pin
     * @param {String}   request_id
     * @param {String}   amount
     * @param {Function} fn
     */
    exports.fulfillRequest = function(pin, request_id, amount, params, fn) {
        // params are optional
        if (!fn || typeof params === 'function') {
            fn = params;
            params = {};
        }
        if (!pin) { throw new Error('Missing arg pin'); }
        if (!request_id) { throw new Error('Missing arg request_id'); }
        if (!amount) { throw new Error('Missing arg amount'); }
        var path = `/requests/${request_id}/fulfill`
        var data = Object.assign({ pin, request_id, amount }, params || {});

        exports._post({ path, data, fn });
    };

};
