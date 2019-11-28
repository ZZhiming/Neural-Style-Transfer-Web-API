
$(document).ready(function(){
    var html = $('<div>Hello, you&#39;re awesome!</div>');
    $("body").append(html);

    var wrapper = $("#99");
    console.log(container);

    var container = $("<div>");
    console.log(container)
    container.addClass("tutorial");

    var h1 = $("<h1>");
    h1.text("laksdjfl");
    h1.addClass("tutorial-heading");
    container.append(h1);

    wrapper.append(container);

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
     var de = document.getElementById(this.prior.id+"select");
        de.style.display = "none";
    }
    e.style.opacity = 0.5;
     var de2 = document.getElementById(e.id+"select");
    de2.style.display="inline";
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

var wrapper = $("#99");
console.log(container);

var container = $("<div>");
console.log(container)
container.addClass("tutorial");

var h1 = $("<h1>");
h1.text("laksdjfl");
h1.addClass("tutorial-heading");
container.append(h1);

wrapper.append(container);

var title = "Constructing HTML Elements";

var html = [
    '<div class="tutorial">',
        '<h1 class="tutorial-heading">' + title + '<h1>',
    '</div>'
].join("\n");
// html: '<div ...>\n<h1 ...>Constructing HTML Elements<h1>\n</div>'

$("#99").append(html);
console.log(title)
var html = $('<div>Hello, you&#39;re awesome!</div>');
$("body").append(html)
//("body").append(wrapper);