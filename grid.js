var singleBlock = '<div class="single-block"></div>';
var color = 'blue';
$(document).ready(function() {
	createGrid(16);
	sketch();
	clear();
	generate();
	gridToggle();
});

function createGrid (x) {
	$('body').append('<div class="container"></div>');
	var size = (640/x);
	for(var i = 0; i < (x*x); i++) {
		$('.container').prepend(singleBlock);
	};
	$('.single-block').height(size);
	$('.single-block').width(size);
	sketch();
};

function sketch() {
	$('.single-block').hover(function() {
		$(this).css('background-color', color);
	});
};	

function gridToggle() {
	$('#grid-toggle').click(function() {
		$('.single-block').addClass('div-border');
	});
};

function clear() {
	$('#clear').click(function() {
		$('.single-block').css({'background-color': 'white'});
	});
};

function generate() {
	$('#generate').click(function() {
		$('.container').remove();
		var newSize = $("input[name=size]").val();
		createGrid(newSize);
	});
};