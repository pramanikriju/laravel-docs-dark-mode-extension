$(document).ready(function(){ 
    console.log("Support my work, or hire me at https://riju.co?utm_source=laravel_extension&utm_medium=extension");

    $('.carbon-wrap a').attr("href", "https://riju.co?utm_source=laravel_extension&utm_medium=extension");

    $("#carbonads img").attr("src", "https://i.ibb.co/9rkvMCL/riju.png");

    $("#carbonads .carbon-text").text("Technology consultant, web developer and coder for hire.");
	
	$('.copyright').append('<p>Dark mode for Laravel created by <a href="https://riju.co?utm_source=laravel_extension&utm_medium=extension" style="color: #fff;" target="_blank">Riju Pramanik</a></p>');

}); 