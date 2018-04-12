$(document).ready(function(){
	$('.grid').isotope({
	  // options
	  itemSelector: '.grid-item',
	  layoutMode: 'fitRows'
	});


	$('a[data-filter="*"]').on('click', function(event){
		$('.grid').isotope({
		  // options
		  itemSelector: '.grid-item',
		  layoutMode: 'fitRows',
		  filter: '*'
		});
	})

	$('a[data-filter=".design"]').on('click', function(event){
		$('.grid').isotope({
		  // options
		  itemSelector: '.grid-item',
		  layoutMode: 'fitRows',
		  filter: '.design'
		});
	})

	$('a[data-filter=".coding"]').on('click', function(event){
		$('.grid').isotope({
		  // options
		  itemSelector: '.grid-item',
		  layoutMode: 'fitRows',
		  filter: '.coding'
		});
	})

	$('a[data-filter=".logo"]').on('click', function(event){
		$('.grid').isotope({
		  // options
		  itemSelector: '.grid-item',
		  layoutMode: 'fitRows',
		  filter: '.logo'
		});
	})

	$('a[href^="#"]').on('click', function(e) {
		e.preventDefault();
	});

	var navItems = $("#filters").find('a');


	  for ( var i = 0; i < navItems.length; i++ ) (function(i){ 
	      navItems[i].onclick = function() {
	      console.log(navItems[i]);
	      console.log(this);
	      $("#filters a").removeClass('current');
	      $(this).fadeIn().addClass('current');
	   }
	  })(i);

	  // look style swither


	  var styleSwitches = $(".skin-part ul").find('a');

	  for (var i = 0; i < styleSwitches.length; i++) {
	  		console.log(styleSwitches[i]);
	  }

});