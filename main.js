var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

//Go to this URL to grab the links and titles
app.get('/all', function(req, res) {

  //A url that will grab a LOT of jobs
  url = 'http://careers.amp.com.au/cw/en/listing/?page=1&page-items=100';

  // The structure of our request call
  // The first parameter is our URL
  // The callback function takes 3 parameters, an error, response status code and the html

  request(url, function(error, response, html) {

    //if no error
    if (!error) {
      // Utilize the cheerio library on the returned html which will essentially give us jQuery functionality
      var $ = cheerio.load(html);

      //set up our empty json object.
      var json = {
        links: []
      };

      $('#recent-jobs-content').filter(function() {
        // Start at the job just to narrow it down
        const links = [];

        //grab the all urls and add them to the links array
        $('.job-link').each(function(i, elem) {
          var end = "http://careers.amp.com.au";
          json.links[i] = (end + $(this).attr('href'));
        });
      })
    }

    //Write the links array to file
    fs.writeFile('links.json', JSON.stringify(json, null, 4), function(err) {
      console.log('File successfully written! - Check your project directory for the links.json file');
    })

    // Tell the page it's done
    res.send('File successfully written! - Check your project directory for the links.json file')
  })

})


//Go through each job and create a JSON file
app.get('/individuals', function(req, res) {
  let jobLinks = require('./links');
  let links = jobLinks.links;

  //links loop
  links.forEach(function(element) {
    //create your empty json
    var json = {
      title: "",
      no: "",
      location: "",
      type: "",
      details: ""
    };

    // set the url to grab to be each element
    url = element;

    // The structure of our request call
    // The first parameter is our URL
    // The callback function takes 3 parameters, an error, response status code and the html

    request(url, function(error, response, html) {

      if (!error) {

        // Utilize the cheerio library on the returned html which will essentially give us jQuery functionality
        var $ = cheerio.load(html);



        $('#job-content').filter(function() {
          // Start at the job content to narrow things down
          //formatting is different on some job pages, so if h1 doesnt exist grab the first h2
          if ($('h1').text() !== "") {
            json.title = $('h1').text();
          } else {
            json.title = $('h2:first-child').text();
          }
          //grab the rest
          json.no = $('.job-externalJobNo').text();
          json.location = $('.location').html();
          json.type = $('.work-type').text();
          json.details = $('#job-details').text();

        })
      }
      // write it to their json
      if (fs.existsSync(`./jobs/job${json.no}.json`)) {
    console.log(`job${json.no}.json already exists`);
} else {
      fs.writeFile(`./jobs/job${json.no}.json`, JSON.stringify(json, null, 4), function(err) {
      })
}
    })
  });
  //end of loop let the user know we good.
  res.send('Files successfully written! - Check your project directory for the links.json file')
})


app.listen('8081')
console.log('Magic happens on port 8081');
