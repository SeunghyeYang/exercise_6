function start(){
	$("div.page:first").show();
}

start();

function collect(){

	var obj = {};
  
  $("input[name]").each(function(){
  	var text = $(this).val();
    var name = $(this).attr("name");
		obj[name] = text;
	})

	var data = JSON.stringify(obj);
	$("#json").val(data);

}


function proceed(){

	var item = $("div.page:visible");
  
  item.next(".page").show();
  item.hide();
  
  var index = item.next(".page").index();

	if (index == 3) {
  	$("#next").remove();
  }
  
  collect();

}

$(document).on("click", "#next", proceed);