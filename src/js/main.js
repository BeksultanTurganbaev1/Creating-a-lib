import $ from './lib/lib';

// $('button').addAttribute('data-close', 'false');
$('button').on('click', function() {
    $('div').eq(1).toggleClass('active');
});

$('div').click(function() {
    console.log($(this).index());
});

// console.log($('div').eq(2).find('.some'));
// console.log($('.some').closest('.findmea'));
console.log($('.findme').siblings());

// console.log($('button').html('hello'));