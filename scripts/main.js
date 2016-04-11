//funkcja ładująca plik, którego url przekazujemy w parametrze 
//do kontenera w HTMLu: <div id="content"></div>
function enter(url){
	$('#content').load(url);
}
//1) nasłuchujemy na zmianę hash.
//zmiana nastąpi, kiedy user kliknie w link w menu.
$(window).on('hashchange', function(){

	var hash = location.hash.substr(2);
	var page = hash + '.html';
	enter(page);
});
//2) domyślną stroną jest home.html
enter('home.html');


