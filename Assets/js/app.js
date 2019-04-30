$(document).ready(function () {
    $("#submit").on("click", function () {
        var city = $("#searchForm").val();
        getCities(city, processCities);
    });
});

function getCities(city, resultCallback) {
    $.ajax({
        headers: {
            "x-Zomato-API-Key": "29634845f26e2908bff359556e46203f"
        },
        url: "https://developers.zomato.com/api/v2.1/cities?q=" + $("#searchForm").val(),
        success: resultCallback
    });
}

function processCities(cityDatas) {
    $("#cities").empty();
    $("#restaurants").empty();
    for (var i = 0; i < cityDatas.location_suggestions.length; i++) {
        $("#cities").append("<input type='radio' id='city" + cityDatas.location_suggestions[i].name + "' name='city' value='" + i + "'>");
        $("#cities").append("<label for='city" + cityDatas.location_suggestions[i].name + "'>" + cityDatas.location_suggestions[i].name + "</label><br/>");
    }
    $("#cities").append('<button id="select"  class="btn btn-outline-dark">Select</button>');
    $("#searchForm").val("");
    $("#select").on("click", function () {
        var selectedCity = $("input:radio[name='city']:checked").val();
        displayCity(cityDatas.location_suggestions[selectedCity].id);
    });
}

function displayCity(cityID) {
    $.ajax({
        headers: {
            "x-Zomato-API-Key": "29634845f26e2908bff359556e46203f"
        },
        url: "https://developers.zomato.com/api/v2.1/search?entity_id=" + cityID + "&entity_type=city&count=10&establishment_type=7&sort=rating&order=desc",
        success: function (searchDatas) {
            $("#restaurants").empty();
            for (var i = 0; i < searchDatas.restaurants.length; i++) {
                $("#restaurants").append("<p>" + searchDatas.restaurants[i].restaurant.name + " with Rating " + searchDatas.restaurants[i].restaurant.user_rating.aggregate_rating + "</p>");
            }
        }
    });
}