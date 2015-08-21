window.sr = new scrollReveal();

var toast = $('#toast');
var inside = $('#inside');
var gi = $('#gi');
// var stomach = $('#stomach');
// var duodenum = $('#duodenum');
// var ileum = $ ('#ileum')
var toast2 = $('#toast2');
var toaster = $('#toaster');
var one = $('#one');
var two = $('#two');
var epiglottis = $('#epiglottis');
var click = $('#click');
var turd = $('#turd');

// $(toast2).scroll(function(){
// 	if( $(window).scrollTop() > 10 {
// 		$(toast2).css({
//             'position': 'fixed';
// 	}
// });

function explode() {
	
	inside.show();
	gi.show();
	one.show();
	two.show();
	epiglottis.show();
	// stomach.show();
	// duodenum.show();
	// ileum.show();
}

$(toast).click(function(){
	$(toast).animate({ 
		'left' : '250px'
		});
	$(toast).fadeOut(700);
	setTimeout(explode, 1500);
	$(toaster).fadeOut('slow');
	$(click).fadeOut('slow');
	$(toast2).delay("1500").fadeIn();
}); 

$(toast2).scroll(function(){
	if( $(toast2).scrollTop() > 10) {
		$(toast2).css({
            'position': 'fixed'
		})
	}
});

$( window ).scroll(function() {

	if( $(window).scrollTop() > 5100) {
            $('#turd').fadeOut( "slow" );
        }
});



