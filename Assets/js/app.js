var queryURL = "http://beermapping.com/webservice/locquery/7119dfed247fc7f888178a6fe14e3c50/piece&s=json"

		$.ajax({
			url: queryURL,
            method: "GET",
            
        }).then(function(response) {
            console.log(response)
            });