(function() {

    'use strict';

    // Dependencies
    var browser = require('open'),

    // Object options
    opts = {
        prefix: 'https',
        host: 'www.facebook.com',
        type: 'hashtag',
        query: '1postperday'
    },

    // URL request
    url = opts.prefix + '://' + opts.host + '/' + opts.type + '/' + opts.query;
    browser(url);

})();

