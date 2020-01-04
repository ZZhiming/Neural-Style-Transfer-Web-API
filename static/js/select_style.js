
$(document).ready(function(){
    //get_data();

    // make sure user upload both content and style
    $('#upload_form').submit(function () {
        var name2 = $('#hf').attr('value');
        var name = $("#upload-style-container").val();

        var name3 = $('#imgInp').val();

        //var name3 = $('#imgInp').attr('value');
        console.log("name3", name3);
        if(((name=='')&(name2==''))|(name3=='')){
            alert("Please Upload or Select A Style!");
            return false;
        }
    });

    //preview content upload
    $("#imgInp").change(function(){
        readURL(this, "preview_image");
    });

    //preview style upload
    $("#upload-style-container").change(function(){
        readURL(this, "preview_image2");
    });


});

// upload preview helper
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

// highlight image selection
var prior = null;
function select_style(e){
    if(this.prior!=null){
     this.prior.style.opacity = 1
     var de = document.getElementById(this.prior.id+"select");
        de.style.display = "none";
    }
    e.style.opacity = 0.5;
     var de2 = document.getElementById(e.id+"select");
    de2.style.display="inline";
    console.log(e);
    this.prior = e;
    var node = document.getElementById(e.id);
    console.log(node.offsetTop);
    console.log("fname: ", e.getAttribute("fname"));
    fname = e.getAttribute("fname");
    $('#hf').attr('value', fname);
    $("#upload-style-container").val("");

}


// allow user to switch between popular styles vs upload own style
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
    var container = document.getElementById(this.cd[cname]);
    container.style.display = "none";
    container = document.getElementById(cname);
    container.style.display = "inline-block";
    e.style["background-color"] = "#d2d2d2";
}


// get style image models with ajax call
// generate html for create own page
function get_styles(){
     $.ajax({
        url: '/getstyles',
        success: function(data) {
            console.log('get info');
            console.log(data);
             e = JSON.parse(data);
             console.log(e[1]);
                var html = '<div style="height:650px;width:420px;padding:20px;display:inline-block">';
          html += '<div style="height:400px;width:400px">';
           html +=' <img src="static/uploads/' + e[1]['name'] +'" style="height:100%;width:100%;">';
          html+='</div>';
          html+='<div style="height:200px;width:400px;padding:10px">';
              html+='<img src="static/uploads/starwars1.jpeg" style="height:100%;width:40%;margin-right:10px">';
             html+=' <img src="static/uploads/mudan.jpg" style="height:100%;width:40%;">';
          html+='</div>';
            html+='<div style="text-align:center;margin-top:0px;">(Picture: Stormtrooper ,   Art: Mudan Flower)</div>';
         html+='</div>';
        $("body").append(html);
            return data;
        }
    });
}

// test ajax call
function get_data(){
     $.ajax({
        url: '/test/data',
        success: function(data) {

        }
    });
}
