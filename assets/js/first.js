$(document).ready(function(){
	$("[data-fancybox]").fancybox();

	const $elements = $('.search__columns').isotope({
		itemSelector: '.search__item',
		layoutMode: 'fitRows'
	});	


	$('.search__filter--btn').on( 'click', function() {
		const filterValue = $(this).attr('data-filter');
		// console.log(filterValue);
		$elements.isotope({ filter: filterValue}); 
	});

	$('#search').on( 'keyup', function() {
		const filterText = $(this).val().toLowerCase(); 
		// console.log(filterText);
		const filterSelector = 
		(filterText == '')
		? '.search__item:has(a[data-name])'
		: '.search__item:has(a[data-name*="' + filterText + '"])';	
		// console.log(filterSelector);
		$elements.isotope({ filter: filterSelector}); 
	});


});














