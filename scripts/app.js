// $(document).on("ready", function(){

// });
$(document).on("ready", function() {
    $(".moreBox").slice(0, 3).show();
      if ($(".blogBox:hidden").length != 0) {
        $("#loadMore").show();
      }   
      $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".moreBox:hidden").slice(0, 6).slideDown();
        if ($(".moreBox:hidden").length == 0) {
          $("#loadMore").fadeOut('slow');
        }
    });
});




const onSuccess = (gif)=>{
    console.log(gif);
    $('.gif-gallery').empty();
    gif.data.forEach((data)=>{
        const template = `<img src="${data.images.fixed_height.url}"></img>`;
        $('.gif-gallery').append(template);
    });
};


function onError(xhr, status, errorThrown) {
    alert("Sorry, there was a problem!");
    console.log("Error: " + errorThrown);
    console.log("Status: " + status);
    console.dir(xhr);
};

// $('.text-center').append
// $.ajax({
//     method: "GET",
//     url: "http://api.giphy.com/v1/gifs/search?q=cats&api_key=dc6zaTOxFJmzC",
//     data: $("form").serialize(),
//     success: onSuccess,
//     error: onError,
// });

$('form').on('submit', function (e) {
    e.preventDefault();
    var search = $('#search').val();


    $.ajax({
        method: "GET",
        url: "http://api.giphy.com/v1/gifs/search?q=" + search + "dc6zaTOxFJmzC",
        data: $("form").serialize(),
        success: onSuccess,
        error: onError,
    });

})