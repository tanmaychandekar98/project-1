
function main(){
	var $code="youknowme";

	$('.go').on('click',function(){
	
	if($('#pass').val()===$code){
	window.open("3.html","_self");
}else{
	alert("wrong code");
	
}	
	});
	$("#pass").keypress(function(event){
    if(event.keyCode == 13){
        event.preventDefault();
        $(".go").click();
    }
});
	
}
$(document).ready(main);
/*<div class="row">
<img class="col-sm-6" src="6.jpg">
<img src="7.jpg" class="col-sm-6">
</div>*/
