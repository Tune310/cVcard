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