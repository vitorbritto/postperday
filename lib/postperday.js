(function() {

    'use strict';

    // Dependencies
    var browser = require('open'),

    // Options
    opts = {
        prefix: 'https',
        type: 'hashtag',
        query: '1postperday'
    },

    // Hosts
    hosts = ['www.facebook.com', 'www.twitter.com'];

    // URL request
    function getHosts(element) {
        var url = opts.prefix + '://' + element + '/' + opts.type + '/' + opts.query;
        browser(url);
    }

    hosts.forEach(getHosts);

})();

