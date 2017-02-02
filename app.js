var express = require('express')

var app = express()

//Public for static files
app.use(express.static('public'))

//For clean urls
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html')
})

var port = process.env.PORT || 80;
app.listen(port, function() {
    console.log('Listening on port ' + port);
});
