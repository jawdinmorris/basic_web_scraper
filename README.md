# DEPLOYMENT  
Clone or download this repository head to the root folder, then run:    
` npm install `  

To start the server  
`  node main.js `  

To generate your links.json of all available jobs.
`http://127.0.0.1:8081/all`  
To generate your individual json files based of links.json
`http://127.0.0.1:8081/individuals`

# NOTES

* Workflow    
  * Todo    
  In broader list see if a url is an element already before adding.  
  For job title - If the formatting doesn't include the h1 the h2 grabs more than is needed.   
  Regex location and position so if there's more than one we chuck it into an array.  
  Regex description to remove (/n, /t etc.)

  * Done  
  Grab all the data from AMP  
  Grab specific job links  
  Grab specific Job Data  
  Format into JSON
  Will only create invidual .json if it doesn't already exist


* Tools  
  node.js  
  express (Quick formatting)  
  cheerio (personally new library, good DOM mapping)  

Notes so far:  
Enjoy using Cheerio for jQuery, unsure if it's really much easier than without though.
