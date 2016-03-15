$(function() {

	// Yandex Metrika
	!function(a,b,c){(b[c]=b[c]||[]).push(function(){try{b.yaCounter34446535=new Ya.Metrika({id:34446535,clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0,trackHash:!0,ut:"noindex"})}catch(a){}});var d=a.getElementsByTagName("script")[0],e=a.createElement("script"),f=function(){d.parentNode.insertBefore(e,d)};e.type="text/javascript",e.async=!0,e.src="https://mc.yandex.ru/metrika/watch.js","[object Opera]"==b.opera?a.addEventListener("DOMContentLoaded",f,!1):f()}(document,window,"yandex_metrika_callbacks");


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
						alert("Спасибо! Скоро я с вами свяжусь.");
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
		// "pageshadow",
		"theme-dark",
			"effect-listitems-slide",
			"effect-menu-slide",
			"effect-panels-zoom",
			// "border-offset",
			// "effect-listitems-drop",
			// "effect-listitems-fade",
			// "effect-menu-fade",
			// "effect-menu-zoom",
			// "effect-panels-slide-0",
			// "effect-panels-slide-100",
			// "pagedim-black",
			// "pagedim-white",
			// "theme-black",
			// "theme-white",
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

	// toggle_hidden_strategy
	$(".toggle_hidden_strategy").click(function() {
		$(this).toggleClass("on");
		$(".hidden_strategy").slideToggle();
		return false;
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

	// Google
	google.charts.load('current', {packages: ['corechart', 'line', 'bar']});
	google.charts.setOnLoadCallback(drawCurveTypes_0);
	google.charts.setOnLoadCallback(drawCurveTypes_1);
	google.charts.setOnLoadCallback(drawCurveTypes_2);
	google.charts.setOnLoadCallback(drawChart_0_1);
	google.charts.setOnLoadCallback(drawChart_1_1);
	google.charts.setOnLoadCallback(drawChart_2_1);

	function drawCurveTypes_0() {

				// data
				var data = new google.visualization.DataTable();
				data.addColumn('number', 'X');
				data.addColumn('number', 'Яндекс');
				data.addColumn('number', 'Google');

				data.addRows([
					[0, 50, 50],
					[1, 9, 5],
					[2, 8, 3],
					[3, 4, 1],
					[4, 2, 1], // 25.07.2014
					// [19, 2, 1],
				]);

				// options
				var options = {
					backgroundColor: '#f5f5f5',
					colors: ['#222', '#848484'],
					// curveType: 'function',
					hAxis: {
						titleTextStyle: {
							italic: false
						},
						format: '# месяц',
						minorGridlines: {
							color: '#cecece',
							count: 1
						},
					},
					legend: {
						position: 'bottom',
						textStyle: {
							fontSize: 16
						}
					},
					lineWidth: 2,
					pointSize: 6,
					titleTextStyle: {
						fontSize: 12
					},
					vAxis: {
						viewWindow: {
							min: 1,
							max: 50
						},
						baseline: 10,
						baselineColor: "#f90",
						direction: -1,
						format: '# место',
						gridlines: {
							color: '#cecece',
							count: 6
						},
						minorGridlines: {
							color: '#cecece',
							count: 1
						},
						/*logScale: true*/
						titleTextStyle: {
							italic: false
						}
						},
				};

				var chart = new google.visualization.LineChart(document.getElementById('chart_div_0'));
				chart.draw(data, options);
			}

	function drawCurveTypes_1() {

				// data
				var data = new google.visualization.DataTable();
				data.addColumn('number', 'X');
				data.addColumn('number', 'Яндекс');
				data.addColumn('number', 'Google');

				data.addRows([
					[0, 50, 50],
					[1, 22, 39],
					[2, 10, 35],
					[3, 9, 32],
					[4, 8, 30],
					[5, 4, 14],
					[6, 2, 14],
					[7, 1, 12],
					[8, 1, 12],
					// [9, 1, 11],
					// [10, 2, 10],
					// [11, 2, 11],
					// [13, 2, 14],
					// [14, 1, 13],
				]);

				// options
				var options = {
					backgroundColor: '#f5f5f5',
					colors: ['#222', '#848484'],
					// curveType: 'function',
					hAxis: {
						titleTextStyle: {
							italic: false
						},
						format: '# месяц',
						minorGridlines: {
							color: '#cecece',
							count: 1
						},
					},
					legend: {
						position: 'bottom',
						textStyle: {
							fontSize: 16
						}
					},
					lineWidth: 2,
					pointSize: 6,
					titleTextStyle: {
						fontSize: 12
					},
					vAxis: {
						viewWindow: {
							min: 1,
							max: 50
						},
						baseline: 10,
						baselineColor: "#f90",
						direction: -1,
						format: '# место',
						gridlines: {
							color: '#cecece',
							count: 6
						},
						minorGridlines: {
							color: '#cecece',
							count: 1
						},
						/*logScale: true*/
						titleTextStyle: {
							italic: false
						}
						},
				};

				var chart = new google.visualization.LineChart(document.getElementById('chart_div_1'));
				chart.draw(data, options);
			}

	function drawCurveTypes_2() {

				// data
				var data = new google.visualization.DataTable();
				data.addColumn('number', 'X');
				data.addColumn('number', 'Яндекс');
				data.addColumn('number', 'Google');

				data.addRows([
					[0, 50, 50],
					[1, 50, 50],
					[2, 1, 22],
					[3, 2, 38],
					[4, 2, 36],
					[5, 6, 38],
					[6, 1, 33],
					[7, 1, 32],
					[8, 1, 26],
				]);

				// options
				var options = {
					backgroundColor: '#f5f5f5',
					colors: ['#222', '#848484'],
					// curveType: 'function',
					hAxis: {
						titleTextStyle: {
							italic: false
						},
						format: '# месяц',
						minorGridlines: {
							color: '#cecece',
							count: 1
						},
					},
					legend: {
						position: 'bottom',
						textStyle: {
							fontSize: 16
						}
					},
					lineWidth: 2,
					pointSize: 6,
					titleTextStyle: {
						fontSize: 12
					},
					vAxis: {
						viewWindow: {
							min: 1,
							max: 50
						},
						baseline: 10,
						baselineColor: "#f90",
						direction: -1,
						format: '# место',
						gridlines: {
							color: '#cecece',
							count: 6
						},
						minorGridlines: {
							color: '#cecece',
							count: 1
						},
						/*logScale: true*/
						titleTextStyle: {
							italic: false
						}
						},
				};

				var chart = new google.visualization.LineChart(document.getElementById('chart_div_2'));
				chart.draw(data, options);
			}

	function drawChart_0_1() {

				var data = google.visualization.arrayToDataTable([
					['Когда','Посетителей в мес.'],
					['Было',430],
					['Добавилось',1648]
				]);

				var options = {
					backgroundColor: '#f5f5f5',
					legend: {
						position: 'bottom',
						textStyle: {
							fontSize: 16,
						},
					},
					// title: 'Кол-во поситителей',
					titleTextStyle: {
						fontSize: 12
					},
					// width: 300,
					colors: ['#555', '#f90'],
					pieHole: 0.3,
				};

				var chart = new google.visualization.PieChart(document.getElementById('chart_div_0_1'));

				chart.draw(data, options);
			}

	function drawChart_1_1() {

				var data = google.visualization.arrayToDataTable([
					['Когда','Посетителей в мес.'],
					['Было',26],
					['Добавилось',421]
				]);

				var options = {
					backgroundColor: '#f5f5f5',
					legend: {
						position: 'bottom',
						textStyle: {
							fontSize: 16,
						},
					},
					// title: 'Кол-во поситителей',
					titleTextStyle: {
						fontSize: 12
					},
					// width: 300,
					colors: ['#555', '#f90'],
					pieHole: 0.3,
				};

				var chart = new google.visualization.PieChart(document.getElementById('chart_div_1_1'));

				chart.draw(data, options);
			}

	function drawChart_2_1() {

				var data = google.visualization.arrayToDataTable([
					['Когда','Посетителей в мес.'],
					['Было',157],
					['Добавилось',290]
				]);

				var options = {
					backgroundColor: '#f5f5f5',
					legend: {
						position: 'bottom',
						textStyle: {
							fontSize: 16,
						},
					},
					// title: 'Кол-во поситителей',
					titleTextStyle: {
						fontSize: 12
					},
					// width: 300,
					colors: ['#555', '#f90'],
					pieHole: 0.3,
				};

				var chart = new google.visualization.PieChart(document.getElementById('chart_div_2_1'));

				chart.draw(data, options);
			}

	// jQuery scroll
	$(".mnu").on("click","a", function (event) {
				// исключаем стандартную реакцию браузера
				event.preventDefault();
 
				// получем идентификатор блока из атрибута href
				var id  = $(this).attr('href'),
 
				// находим высоту, на которой расположен блок
						top = $(id).offset().top;
				 
				// анимируем переход к блоку, время: 800 мс
				$('body,html').animate({scrollTop: top}, 800);
		});
	
	
	// jquery.textillate
    $('.tlt').textillate({ in : {
            delay: 50,
            delayScale: 1.5,
            effect: 'flash',
            shuffle: true,
        },
    });

	// console.log("Качество - Landing2Top.ru")

});