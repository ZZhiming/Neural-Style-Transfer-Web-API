
$(document).ready(function(){
   $( "#image1" ).click(function() {
  //alert( "Handler for .click() called." );

    });

//  $(#image1).onclick
//  $(":image").css("background-color", "red");
//  console.log("testing");
//  //console.log(data.dd);
//  get_data();
});

var prior = null;
function foo2(e){
if(this.prior!=null){
 this.prior.style.opacity = 1
}
e.style.opacity = 0.5;
console.log("cool");
console.log(e);
this.prior = e;
var node = document.getElementById(e.id);
console.log(node.offsetTop);

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