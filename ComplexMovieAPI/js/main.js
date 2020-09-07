$(document).ready(function(){


  $("form").on("submit", function(e){
    e.preventDefault();
    var movie = $("#movieName").val()
    var apiKey = "464729fb";
    var apiURL = "http://www.omdbapi.com/?apikey=464729fb&t=" + encodeURI(movie);


    $.ajax({
      url: apiURL,
      // Work with the response
      success: function(response) {
        $('#name').text(response.Director)
        console.log(response.Director)
        getDirector(response.Director)
        $('#movie').attr("src", response.Poster)
      },
      error: function(r){
        console.log(r)
      }
    });

    function getDirector(dm){

      var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ dm +"&format=json&callback=?";

      $.ajax({
          type: "GET",
          url: url,
          contentType: "application/json; charset=utf-8",
          async: false,
          dataType: "json",
          success: function (data){
            $('#info').html(data[2]["0"]);

            $('#info').html(data[2]["0"]);
            console.log(data[2]["0"]);

          },
          error: function (errorMessage) {
          }
      });

    }


  });

});
