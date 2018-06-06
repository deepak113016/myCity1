//Home route  Handler
function HomeR(req, res) {
    res.render('home.ejs', {
        title: 'I Love my City',
        headline: 'Every city has its own personality'
    });
}
// City Route Handler
function  CityR(req, res) {
    var cityname = req.params.city;
    var titleValue;
    var headlineValue;
    if (cityname === 'newyork') {
        titleValue = "New York";
        headlineValue = "Business capital of the world";
    } else if (cityname === 'london') {
        titleValue = "London";
        headlineValue = "City of the Themes";
    } else if (cityname === 'paris') {
        titleValue = "Paris";
        headlineValue = "Fashion Capital of the world";
    } else if (cityname === 'delhi') {
        titleValue = "Delhi";
        headlineValue = "Capital of India";
    }
    res.render('city.ejs', {
        title: titleValue,
        headline: headlineValue
    });
}

module.exports.cityFn=CityR;
module.exports.homeFn=HomeR;