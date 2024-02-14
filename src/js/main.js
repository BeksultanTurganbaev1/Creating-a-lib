import $ from './lib/lib';

// $('button').addAttribute('data-close', 'false');
$('button').on('click', function() {
    $('div').eq(1).toggleClass('active');
});

// console.log($('button').html('hello'));