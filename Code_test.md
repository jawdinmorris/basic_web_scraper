
## Code Test for Jordan

One of our biggest operation challenges is getting customer jobs into our system. We do this by “scraping” customer job sites and finding the job data on a regular basis.

What I’d like to give you as an assignment is to have you write some code to scrape a site. We do this in C# but I’d rather you used Node (or something else you’re comfortable with). I have a good setup and framework for this in our codebase which I can teach you, I’m more interested in seeing the troubleshooting and analysis skills and how you write code in a language you’re familiar	 with.

So I’d like to see code to scrape the AMP careers site. http://careers.amp.com.au/cw/en/listing

Do this with HTTP requests rather than using any of the browser automation libraries.

The output of this should be a JSON file containing a list of URLs for the jobs (n.b. there is more than one page of jobs… see the “More Jobs” button). Then for each job I want to see a JSON file with the following properties:

* Job TItle
* Reference Number
* Location
* Work Type (full time / casual etc)
* HTML Body for just the job description without any other metadata

I’d like to see this in a GitHub or BitBucket project (public is fine). As a rule I like to see a readme.md file with instructions on how to run it. Ideally this is as simple as `npm install && nom start run`


### Some Hints
* Find a library that does HTML DOM parsing. Reading XPath expressions is much easier than trying to deal with regex (although sometimes I need to fall back to regex).
* Chrome Dev tools are your friend to see what requests the browser makes when you click a button.
* Remember that while an interpreter or compiler can read any valid code, writing code for humans to read is much better for collaboration.