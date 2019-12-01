$(document).ready(function(){
  $(":image").css("background-color", "red");
  console.log("testing");
  //console.log(data.dd);
  get_data();
});

function get_data(){
     $.ajax({
        url: '/test/data',
        success: function(data) {
            console.log('get info');
            console.log(JSON.parse(data)[1])
            //console.log(data.zhiming)
            console.log('{{data|tojson}}')
//            $('#info').html(JSON.stringify(data, null, '   '));
//            $('#description').html(data['description']);
        }
    });
}