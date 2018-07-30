$(document).ready(function(){
	$('input.autocomplete').autocomplete({
		data: "<%=@attendee%>" 
	});
});
