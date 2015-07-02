

"use strict";

// JSON OBJECTS WITH BIO AND OTHER INFO FOR RESUME

var bio = {
  "name": "Dennis A. Drenner",
  "role": "Web Developer",
  "pictureURl": "https://pbs.twimg.com/profile_images/450269902050312192/SQuOpWgy.jpeg",
  "welcomeMessage": "Custom web design since 1845.",
  "skills": ["web developer", "photographer", "paraglider pilot", "chef"],
  "contacts": {
    "mobile": "301-437-6972",
    "email": "dennis@dennisdrenner.com",
    "github": "dennisdrenner",
    "twitter": "@DennisDrenner",
    "location": "Baltimore, MD"
    }
};

var work = {
  "jobs": [
  {
    "employer": "Self (Dennis Drenner Photographs)",
    "title": "Principal",
    "location": "Baltimore, MD",
    "dates": "1991-Present",
    "description": "Self-employed photojournalist and wedding photographer. Specialize in photographing people" +
    ", both portraiture and candid event photography."},

  {
    "employer": "Washington Post",
    "title": "Freelance Photographer",
    "location": "Washington, DC",
    "dates": "1995-2005",
    "description": "Regular contributor to the Washington Post Metro, Style and Sports sections."
  },

  {
    "employer": "Baltimore Jewish Times",
    "title": "Director of Photography",
    "location": "Baltimore, MD",
    "dates": "2005-2007",
    "description": "Chief photographer and DP for small Baltimore Jewish weekly newspaper."}
  ]
};

var projects = {
  "projects": [
  {
    "title": "Hampden Alley Portraits",
    "location": "Baltimore, MD",
    "dates": "2014-Present",
    "description": "Street portraits of people from the alley behind my house",
    "images": ["http://www.ddcodes.com/static/assets/images/art/hampden-alley-ports-screen-shot.jpg"]
  },

  {
    "title": "Referral Puppy",
    "location": "Baltimore, MD",
    "dates": "2014",
    "description": "Referral tracking web appplication",
    "images": ["http://www.ddcodes.com/static/assets/images/art/referral-puppy-screen-shot.png"]
  },

  {
    "title": "Hampden Alley Portraits",
    "location": "Baltimore, MD",
    "dates": "2014-Present",
    "description": "Street portraits of people from the alley behind my house",
    "images": ["http://www.ddcodes.com/static/assets/images/art/hampden-alley-ports-screen-shot.jpg"]
  }
  ]
};


var education = {
  "schools": [
    {
    "name": "University of Maryland",
    "location":  "College Park, MD",
    "degree": "BS",
    "majors": ["Biology", "German"],
    "dates": "1987-1992",
    "url": "http://www.umd.edu/"
     },


     {
    "name": "University of Mannheim",
    "location": "Mannheim, Germany",
    "degree": "Certificate of Proficiency in German",
    "majors": ["German","Beer Drinking"],
    "dates": "1991",
    "url": "https://www.uni-mannheim.de/1/"
     }
  ],

  onlineCourses: [
     {
    "name": "Introduction to Computer Programming",
    "site": "Udacity",
    "dates": "2013",
    "url": "www.udacity.com"
     },

     {
    "name": "AJAX",
    "site": "Udacity",
    "dates": "2014",
    "url": "www.udacity.com"
     }
  ]
};



//FUNCTIONS FOR BUILDING VARIOUS PAGE SECTIONS


//BUILD TOP BIO SECTION

bio.display = function () {
  // ADD NAME AND ROLE TO TOP OF PAGE
  HTMLheaderName = HTMLheaderName.replace('%data%', bio.name);
  HTMLheaderRole = HTMLheaderRole.replace('%data%', bio.role);
  $('#header').prepend(HTMLheaderRole);
  $('#header').prepend(HTMLheaderName);

 // ADD CONTACT STRIP
 for (var item in this.contacts) {
    var contact = HTMLcontactGeneric.replace('%contact%', item).replace('%data%', this.contacts[item]);
    $('#topContactStrip').append(contact);
    $('#footerContacts').append(contact);
  }

// BUILD TOP SUMMARY SECTION
    HTMLbioPic = HTMLbioPic.replace('%data%', this.pictureURl);
    HTMLWelcomeMsg = HTMLWelcomeMsg.replace('%data%', this.welcomeMessage);
    $('#topSummaryText').append(HTMLWelcomeMsg);
    if (this.skills.length > 0) {
      $('#topSummaryText').append(HTMLskillsStart);
      for (var i in this.skills) {
      var skill = HTMLskills.replace('%data%', this.skills[i]);
      $('#skills').append(skill);
      }
    }
    $('#topSummary').prepend(HTMLbioPic);
};

bio.display();


// BUILD WORK EXPERIENCE SECTION

work.display = function () {
  for (var job in this.jobs) {
    $('#workExperience').append(HTMLworkStart);
    var employer = HTMLworkEmployer.replace('%data%', this.jobs[job].employer);
    var title = HTMLworkTitle.replace('%data%', this.jobs[job].title);
    var dates = HTMLworkDates.replace('%data%', this.jobs[job].dates);
    var description = HTMLworkDescription.replace('%data%', this.jobs[job].description);
    var location = HTMLworkLocation.replace('%data%', this.jobs[job].location);
    $('.work-entry:last').append(employer + title);
    $('.work-entry:last').append(dates + location);
    $('.work-entry:last').append(description);
  }
};

work.display();

// BUILD PROJECTS SECTION

projects.display = function () {
  for (var item in this.projects) {
    $('#projects').append(HTMLprojectStart);
    var title = HTMLprojectTitle.replace('%data%', this.projects[item].title);
    var dates =  HTMLprojectDates.replace('%data%', this.projects[item].dates);
    var description =  HTMLprojectDescription.replace('%data%', this.projects[item].description);
    $('.project-entry:last').append(title).append(dates).append(description);
    if (this.projects[item].images.length > 0) {
      var image =  HTMLprojectImage.replace('%data%', this.projects[item].images[0]);
      $('.project-entry:last').append(image);
    }
  }
};

projects.display();

// BUILD EDUCATION SECTION

education.display = function () {
  //BUILD SCHOOL SECTION
  for (var item in this.schools) {
  $('#education').append(HTMLschoolStart);
  var name = HTMLschoolName.replace('%data%', this.schools[item].name);
  var location = HTMLschoolLocation.replace('%data%', this.schools[item].location);
  var degree = HTMLschoolDegree.replace('%data%', this.schools[item].degree);
  var dates = HTMLschoolDates.replace('%data%',this.schools[item].dates);
  $('.education-entry:last').append(name + degree).append(location).append(dates);

    for (var i in this.schools[item].majors) {
      var major = HTMLschoolMajor.replace('%data%', this.schools[item].majors[i]);
      $('.education-entry:last').append(major);
    }
  }
  //BUILD ONLINE COURSE SECTION
  if (this.onlineCourses.length > 0) {
    $('#education').append(HTMLonlineClasses);
    for (var i in this.onlineCourses) {
      $('#education').append(HTMLschoolStart);
      var title = HTMLonlineTitle.replace('%data%', this.onlineCourses[i].name);
      var school = HTMLonlineSchool.replace('%data%', this.onlineCourses[i].site);
      var dates = HTMLonlineDates.replace('%data%', this.onlineCourses[i].dates);
      var url = HTMLonlineURL.replace('%data%', this.onlineCourses[i].url);
      $('.education-entry:last').append(title + school).append(dates).append(url);
    }
  }
};

education.display();

// BUILD MAP SECTION

function locationFinder () {
  var addresses =  [];
    addresses.push(bio.contacts.location);
    var job_obj;
    for (job_obj in work.jobs) {
      addresses.push(work.jobs[job_obj].location);
    }

    var project_obj;
    for (project_obj in projects.projects) {
      addresses.push(projects.projects[project_obj].location);
    }
   var school_obj;
   for (school_obj in education.schools) {
      addresses.push(education.schools[school_obj].location);
   }
   return addresses;
}

function mapMaker() {
  var addresses = locationFinder();
  var mapOptions = {
    center: { lat: 34.397, lng: -45.644},
    zoom: 3
  };
  var map = new google.maps.Map(document.getElementById('mapDiv'), mapOptions);
  var len = addresses.length;
  var x;
  for (x = 0; x < len; x++) {
      $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+addresses[x]+'&sensor=false', null, function (data) {
          var p = data.results[0].geometry.location;
          var latlng = new google.maps.LatLng(p.lat, p.lng);
          var placeName = data.results[0].address_components[0].long_name;
          new google.maps.Marker({
              animation: google.maps.Animation.DROP,
              position: latlng,
              map: map,
              title: placeName
          });
    });
  }
}


$(document).ready(function() {
  mapMaker();
});
