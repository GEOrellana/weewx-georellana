/**
 * Javascript del skin GeOrellana, Ecuador
 * para generar los informes de las estaciones meteorológicas con weewx 
 * 
 * 
 * Sientate libre en usar lo que quieras, es software libre.
 */

$(function(){$("#title").load("title.html");});
$(function(){$("#day").load("day.html");});
$(function(){$("#week").load("week.html");});
$(function(){$("#month").load("month.html");});
$(function(){$("#year").load("year.html");});
$(function(){$("#sunmoon").load("sunmoon.html");});
$(function(){$("#station").load("station.html");});
$(function(){$("#footer").load("footer.html");});

$('#myTab a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
})

$(document).ready(function(){
    $('#myTabs a:first').tab('show');
    var refreshPageMin = setInterval(function(){
        $('#title').load('title.html');
        $('#day').load('day.html');
        $('#footer').load('footer.html');
    }, 60000);
    var refreshPageH = setInterval(function(){
        $('#week').load('week.html');
        $('#month').load('month.html');
        $('#year').load('year.html');
        $('#sunmoon').load('sunmoon.html');
    }, 900000);
});

