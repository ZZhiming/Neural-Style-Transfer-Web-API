
$(document).ready(function(){

//    var container_b = $("<div>");
//    var container = $("<div>");
//    container_b.append(container);
//    container.addClass("upload-container");
//    var html = '<form method=post enctype=multipart/form-data>';
//    html+='<input type=file name=file>';
//    html+='<input type=submit value=Upload>';
//    html+='</form>';
//    container.append(html);
//    $("body").append(container_b);


     get_data();
    //var html = $('<div>Hello, you&#39;re awesome!</div>');
        //$("body").append(html);


    var html = '<div style="height:650px;width:420px;padding:20px;display:inline-block">';
          html += '<div style="height:400px;width:400px">';
           html +=' <img src="static/uploads/starwar2.jpg" style="height:100%;width:100%;">';
          html+='</div>';
          html+='<div style="height:200px;width:400px;padding:10px">';
              html+='<img src="static/uploads/starwars1.jpeg" style="height:100%;width:40%;margin-right:10px">';
             html+=' <img src="static/uploads/mudan.jpg" style="height:100%;width:40%;">';
          html+='</div>';
            html+='<div style="text-align:center;margin-top:0px;">(Picture: Stormtrooper ,   Art: Mudan Flower)</div>';
         html+='</div>';
    $("body").append(html);

    var wrapper = $("#99");
    console.log(container);

    var container = $("<div style=\"display:inline-block\">");
    console.log(container)
    container.addClass("tutorial");

    var h1 = $("<h1>");
    h1.text("laksdjfl");
    h1.addClass("tutorial-heading");
    container.append(h1);

    wrapper.append(container);

    //document.getElementById('id').value = **
    //$('#hf').attr('value', 'shanna');

    $('#upload_form').submit(function () {
        var name2 = $('#hf').attr('value');
        console.log("name2: ", name2);
        var name = $("#upload-style-container").val();
        //var name = $("#upload-style-container").attr('value');
        console.log("name: ", name);
        console.log($("#upload-style-container"));
        var name3 = $('#imgInp').val();

        //var name3 = $('#imgInp').attr('value');
        console.log("name3", name3);
        if(((name=='')&(name2==''))|(name3=='')){
            alert("Please Upload or Select!");
            return false;
        }
    });

    $("#imgInp").change(function(){
        readURL(this, "preview_image");
    });

    $("#upload-style-container").change(function(){
        readURL(this, "preview_image2");
    });

   $( "#image1" ).click(function() {
  //alert( "Handler for .click() called." );

    });



//  $(#image1).onclick
//  $(":image").css("background-color", "red");
//  console.log("testing");
//  //console.log(data.dd);
//  get_data();
});

        function readURL(input, id) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                 var pi = document.getElementById(id);

                  pi.style.display='inline';
                $('#'+id).attr('src', e.target.result);
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
    console.log("fname: ", e.getAttribute("fname"));
    fname = e.getAttribute("fname");
    $('#hf').attr('value', fname);
    $("#upload-style-container").val("");

}

var prior_tab = null;
var cd = {"popular-style-container":"upload-style-container", "upload-style-container":"popular-style-container"};
function tab_click(e){
    var cname = e.getAttribute("cname");
    if(this.prior_tab!=null){
        var cname2 = this.prior_tab.getAttribute("cname")
        console.log("cname", cname2)
        var container = document.getElementById(cname2);
        container.style.display = "none";
        this.prior_tab.style["background-color"] = "white";
    }else if((this.prior_tab==null)&(cname=="upload-style-container")){
        var button = document.getElementById("popular-button");
        button.style["background-color"] = "white";
    }
    prior_tab = e;
    console.log("ttt: ", this.cd["popular-style-container"]);
    console.log(e);
    //cname = e.getAttribute("class")
    console.log(e.getAttribute("class"));
    //e.style.display = "none";
    //var container = document.getElementById("popular-style-container");
    console.log("this cd: ", this.cd[cname]);
    var container = document.getElementById(this.cd[cname]);
    container.style.display = "none";
    var container = document.getElementById(cname);
    //var container = document.getElementById("upload-style-container");
    container.style.display = "inline-block";
    e.style["background-color"] = "#d2d2d2";
}

function create_click(e){
    //location.replace("http://192.168.148.21:5000/create")
    //window.location.href="sample.html";
    console.log("test");

}

function get_data(){
     $.ajax({
        url: '/test/data',
        success: function(data) {
            console.log('get info');
            console.log(data.zhiming);
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
//var html = $('<div>Hello, you&#39;re awesome!</div>');
//$("body").append(html)
//("body").append(wrapper);