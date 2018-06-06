var exp = require("express");
var handlers=require('./routes/routes');

var app = exp();

app.set('view engine', 'ejs');
app.set('port', (process.env.PORT || 5000));

app.get('/', handlers.homeFn);
app.get('/:city', handlers.cityFn);


app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
})    
