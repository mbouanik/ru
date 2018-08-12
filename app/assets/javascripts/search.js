document.addEventListener('DOMContentLoaded', function() {
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
			match: {
				enabled: true
			},
			maxNumberOfElements: 6,
			showAnimation: {
				type: "slide",
				time: 300
			},
			hideAnimation: {
				type: "slide",
				time: 300
			},
			onChooseEvent: function() {
				var url = $input.getSelectedItemData().url
				$input.val("")
				window.location.replace(url)
			},
		}
	}
	$input.easyAutocomplete(options);
});
