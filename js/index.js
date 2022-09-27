$(document).ready(function(){



});

function getDetalle(){
    $("#portfolioModal1").modal('toggle');
    
    $.ajax({
        type: "POST",
        url: "",
        data: data,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: true,
        success: function (response) {
          
        },
        failure: function (response) {

        }
    });

}