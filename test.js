const pa11y = require('pa11y');

pa11y('http://localhost:3000/', {
    headers: {
        cookie: 'test=test'
    },
    screenCapture: `${__dirname}/cookie.png`
});