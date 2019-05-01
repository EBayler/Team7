 var zip = input=(Number);
 var city = input=(String)

 // function to validate users input
 // if blank, will use modal to have user search by either zip or city and state
 // else num, will search by zip
 // if  else, will search by city and state
 function inputValidation() {
     var input = document.forms['searchForm'].value;
     if (input == city) {
         console.log(city);
     } else if (input == zip) {
         console.log(zip);
     } else {
         console.log('Please search by:');
     }

 }

 // Once submit button is fired
 // will submit users input and search by option
 $(document).on("click", ".searchButton", function(inputValidation) {
     console.log('fired');
 });