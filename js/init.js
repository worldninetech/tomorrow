$(document).ready(function(){

	// Code for setup process

	if (localStorage.getItem("setup") === null) {

    // Show setup because it's not complete
		$("#setup").css("display","block", "!important");

    // Actions when 'Get Started' button is pressed on setup
		$('#getstarted').click(function() {
			  // Test if any of the text fields are empty
			if( (document.getElementById("first_name").value == 0) || (document.getElementById("last_name").value == 0) || (document.getElementById("zip").value == 0) )
			{
				// Tell user to fill out everything
				toast('Fill out everything and try again!', 5000, 'rounded');
			} else {
				// Save contents of text fields to localStorage
				localStorage['firstname'] = document.getElementById("first_name").value;
				localStorage['lastname'] = document.getElementById("last_name").value;
				localStorage['zip'] = document.getElementById("zip").value;
				localStorage['setup'] = "completed";
				location.reload();
			}
		});

	} else {

	  $.simpleWeather({
    location: localStorage['zip'],
    woeid: '',
    unit: 'f',
    success: function(weather) {
      html = "<div class='card'><div class='card-content'><img src='" + weather.thumbnail + "' style='float:left; height: 45px; width: auto;' /><p>It's currently " + weather.temp + "&deg;" + weather.units.temp + " and " + weather.currently +  ".</p><p style='font-style: italic; font-size: 12px;'>Weather provided by Yahoo Weather.</p></div></div>";

      $("#weather").html(html);
    },
    error: function(error) {
      toast('There was an error fetching the weather.', 5000, 'rounded');
    }
    });

	}
});