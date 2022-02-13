$( document ).ready( function() {
	isWebp();

	$( ".slowScroll" ).click( function() {
		let href = $( this ).attr( "href" );
		if ($( href ).length) $( "html, body" ).animate( { scrollTop: $( href ).offset().top }, 500 );
	});


	$( ".header-bottom__menu-burger" ).click( function() {
		$( ".header-menu" ).toggleClass( "header-menu_actived" );
	});

	$( ".button-account" ).click( function() {
		$( this ).toggleClass( "button-account_actived" );
		$( ".account-box" ).toggleClass( "account-box_actived" );
	});

	$( ".header-menu__item_drop-down .header-menu__link" ).click( function() {
		$( ".catalog-menu" ).toggleClass( "catalog-menu_actived" );
		$( ".header-menu__arrow-down" ).toggleClass( "header-menu__arrow-down_actived" );
	});


	$( ".page-item__weight-item" ).click( function() {
		$( this ).parent().children().removeClass( "page-item__weight-item_actived" );

		$( this ).toggleClass( "page-item__weight-item_actived" );
	});
});