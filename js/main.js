var $header = $('header');
var $h1 = $('h1');
var $main = $('main');
var $pFirstChild = $('main p:first-child');
var $h2 = $('h2');
var $ul = $('main ul');
var $img = $('img');
var $liFirstChild = $('ul li:first-child');
var $liLastChild = $('ul li:last-child');
var $dl = $('dl');
var $dt = $('dt');

$header.addClass('masthead')
$h1.removeClass('big-heading');
$h1.addClass('logo');
$main.addClass('wrapper');
$pFirstChild.addClass('intro');
$h2.addClass('slug-head');
$ul.addClass('slug-list');
$img.addClass('slug-img');
$liFirstChild.addClass('slug-list-first');
$liLastChild.addClass('slug-list-last');
$dl.addClass('classification');
$dt.removeClass('big-label');
$liLastChild.show();
