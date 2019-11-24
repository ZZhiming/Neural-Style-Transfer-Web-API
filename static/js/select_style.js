$(document).ready(function(){
   $( "#image1" ).click(function() {
  alert( "Handler for .click() called." );

    });

//  $(#image1).onclick
//  $(":image").css("background-color", "red");
//  console.log("testing");
//  //console.log(data.dd);
//  get_data();
});

function foo2(e){
console.log("cool");
console.log(e);
}

function get_data(){
     $.ajax({
        url: '/test/data',
        success: function(data) {
            console.log('get info');
            console.log(data.zhiming)
//            $('#info').html(JSON.stringify(data, null, '   '));
//            $('#description').html(data['description']);
        }
    });
}