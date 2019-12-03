
$(document).ready(function(){


});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
             var pi = document.getElementById("preview_image");

              pi.style.display='inline';
            $('#preview_image').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

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