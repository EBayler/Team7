 // function to validate users input
 // if blank, will use modal to have user search by either zip or city and state
 // else num, will search by zip
 // if  else, will search by city and state
 function inputValidation(event) {
    event.preventDefault()
    console.log('fired');
    var city = $('#searchForm').val().trim();
     if (city.length==0) {
        console.log('Please search by: city')
     } else {
         console.log(city);
     }

 }

 // Once submit button is fired
 // will submit users input and search by option
 $(document).on("click", ".searchButton", inputValidation);
