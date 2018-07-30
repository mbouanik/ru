document.addEventListener("turbolinks:load", function() {
	$input = $("[data-behavior='autocomplete']")

	var options = {
		getValue: "login",
		url: function(phrase) {
			return "/search.json?q=" + phrase;
		},
		categories: [
			{
				listLocation: "attendees",
				header: "<strong>Attendees</strong>",
			},
		],
		list: {
			onChooseEvent: function() {
				var url = $input.getSelectedItemData().url
				$input.val("")
				Turbolinks.visit(url)
			}
		}
	}
  $input.easyAutocomplete(options)
});













//
// document.addEventListener("turbolinks:load", function() {
// 	$input = $("[data-behavior='autocomplete']")
//
// 	var options = {
// 		getValue: "login",
// 		url: function(phrase){
// 			return"/search.json?q=" + phrase;
// 		},
// 		list: {
// 			onChooseEvent: function(){
// 				var url = $input.getSelectedItemData().url
// 				// $input.val("")
// 				Turbolinks.visit(url)
// 			}
// 		}
// 	}
// 	$input.easyAutocomplete(options)
// });
