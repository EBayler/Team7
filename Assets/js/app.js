$(document).ready(function () {


    $("#submit").on("click", function () {



        $.ajax({
            headers: {
                "x-Zomato-API-Key": "29634845f26e2908bff359556e46203f"
            },
            url: "https://developers.zomato.com/api/v2.1/cities?q=" + $("#searchForm").val(),

            success: function (data) {
                $("#cities").empty();
                $("#restaurants").empty();
                for (var i = 0; i < data.location_suggestions.length; i++) {
                    $("#cities").append("<input type='radio' id='city" + data.location_suggestions[i].name + "' name='city' value='" + i + "'>");
                    $("#cities").append("<label for='city" + data.location_suggestions[i].name + "'>" + data.location_suggestions[i].name + "</label><br/>");
                }
                $("#cities").append('<button id="select"  class="btn btn-outline-dark">Select</button>');
                $("#searchForm").val("");


                $("#select").on("click", function () {

                    var selectedCity = $("input:radio[name='city']:checked").val()

                    $.ajax({
                        headers: {
                            "x-Zomato-API-Key": "29634845f26e2908bff359556e46203f"
                        },

                        url: "https://developers.zomato.com/api/v2.1/search?entity_id=" + data.location_suggestions[selectedCity].id + "&entity_type=city&count=10&establishment_type=pub&sort=rating&order=desc",

                        success: function (data) {
                            $("#restaurants").empty();
                            for (var i = 0; i < data.restaurants.length; i++) {
                                $("#restaurants").append("<p>" + data.restaurants[i].restaurant.name + " with Rating " + data.restaurants[i].restaurant.user_rating.aggregate_rating + "</p>");
                            }

                        }
                    });


                })




            }
        });


    })




})