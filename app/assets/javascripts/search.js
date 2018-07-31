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
				header: "<strong class='header-search'>Login</strong>",
			},
			{
				listLocation: "attendees_name",
				header: "<strong class='header-search'>Name</strong>",
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
	$input.easyAutocomplete(options);
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
