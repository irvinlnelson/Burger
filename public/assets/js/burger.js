$("#submit").on("click", function(){
    var newBurger = $("#burgerName").val().trim();

    $.ajax({
        url: "/api/burgers",
        method: "POST",
    }).then(function(response){
        
    })
})