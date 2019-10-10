// $(document).on("ready", function(){

// });




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