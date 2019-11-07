const express = require('express'),
    ntlm = require('express-ntlm'),
    bodyParser = require('body-parser'),
    cors = require('cors');

const app = express();

app.use(ntlm({
    debug: function() {
        var args = Array.prototype.slice.apply(arguments);
        console.log.apply(null, args);
    },
    //domain: 'MYDOMAIN',
    //domaincontroller: 'ldap://myad.example'
}));

app.get('/api', (req, res) => {
    res.json({
        status: "Connection Successful",
        message: "API is working"
    })
})
app.get('/details', function(request, response) {
    response.end(JSON.stringify(request.ntlm));
});

app.listen(1000);