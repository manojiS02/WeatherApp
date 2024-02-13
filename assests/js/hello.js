$(document).ready(function() {
    $("#checkWeatherBtn").click(function() {
        var location = $("#locationInput").val();
        if (location.trim() === "") {
            alert("Please enter a location.");
            return;
        }

        $("#loading1").show();
        $("#output").empty();
        $("#locationInput").hide();
        $("#checkWeatherBtn").hide();

        // Simulate a 2-second delay
        setTimeout(function() {
            $("#loading1").hide();
            $("#loading2").show();
            setTimeout(function() {
                $("#loading2").hide();
                $("#loading3").show();
                setTimeout(function (){
                    $("#loading3").hide();
                    $("#loading4").show();
                    setTimeout(function() {
                        $("#loading4").hide();
                        $("#output").text("I don't know, just look outside, you dumb!");
                    }, 2000);
                },2000);

            }, 2000);
        }, 2000);


    });
});


// setTimeout(function() {
//     $("#loading2").hide();
//     $("#output").text("Congratulations!");
// }, 2000);