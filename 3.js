function main(){
	$('#accounts').on('click',function(){
		window.open("accounts.html");
	});
	$('#trips').on('click',function(){
		window.open("trips.html");
	});
	$('#calendar').on('click',function(){
		window.open("calendar.html");
	});
}
$(document).ready(main);