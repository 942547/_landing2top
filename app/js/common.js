$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
		$("#seo_consultation").submit(function() { //Change
				var th = $(this);
				$.ajax({
						type: "POST",
						url: "mail.php", //Change
						data: th.serialize()
				}).done(function() {
						alert("Спасибо! Мы скоро с вами свяжемся.");
						setTimeout(function() {
								// Done Functions
								th.trigger("reset");
						}, 1000);
				});
				return false;
				});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
		} catch(err) {

		};

		$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	// superfish
	jQuery('ul.sf-menu').superfish({
		delay: 200,
		speed: "fast",
		cssArrows: false
		});

	// mmenu
	$("#mobile_mnu").mmenu({
		"counters": true,
		"dragOpen": {
			open: true,
		// maxStartPos: 100,
		// threshold: 50,
		},
		"extensions": [
		"pageshadow",
		"theme-dark",
			// "theme-black",
			// "theme-white",
			// "border-offset",
			// "effect-listitems-drop",
			// "effect-listitems-fade",
			"effect-listitems-slide",
			// "effect-menu-fade",
			"effect-menu-slide",
			// "effect-menu-zoom",
			// "effect-panels-slide-0",
			// "effect-panels-slide-100",
			"effect-panels-zoom",
			// "pagedim-black",
			// "pagedim-white",
			],

			navbar: {
				title: "Меню"},

				"navbars": [
				{
					"position": "bottom",
					"content": [
					"<a class='fa fa-envelope' href='#/'></a>",
					"<a class='fa fa-twitter' href='#/'></a>",
					"<a class='fa fa-facebook' href='#/'></a>"
					]
				}
				],

				offCanvas: {
				// position: "right"
				// position: "top"
				// position: "bottom"
				// position: "front"
				// position: "next"
			},

		});

	// toogle-mnu
	$(".toggle-mnu").click(function() {
		$(this).addClass("on");
		});

	// toggle_inputs
	$(".toggle_inputs").click(function() {
		$(this).toggleClass("on");
		$(".hidden_inputs").slideToggle();
		return false;
		});

	var api = $("#mobile_mnu").data("mmenu");
	api.bind("closed", function () {
		$(".toggle-mnu").removeClass("on");
	});

	// imagefill
	// $('.imagefill').imagefill();

	// Google
	// Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Mushrooms', 3],
          ['Onions', 1],
          ['Olives', 1],
          ['Zucchini', 1],
          ['Pepperoni', 2]
        ]);

        // Set chart options
        var options = {'title':'How Much Pizza I Ate Last Night',
                       'width':400,
                       'height':300};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }

	// console.log("Качество - Landing2Top.ru")

});