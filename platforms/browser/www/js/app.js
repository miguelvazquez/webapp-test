var app={
	inicio: function() {
		this.iniciaBotones();
		this.iniciaFastClick();
		this.iniciaHammer();
	},

	iniciaFastClick: function() {
		window.FastClick = FastClick;
		FastClick.attach(document.body);
	},

	iniciaBotones: function () {
		var botonClaro = document.querySelector('#claro');
		var botonOscuro = document.querySelector('#oscuro');

		botonClaro.addEventListener('click', this.ponloClaro,false);
		botonOscuro.addEventListener('click', this.ponloOscuro,false);		
	},

	iniciaHammer () {
		var zona = document.getElementById('zona-gestos');
		var hammertime = new Hammer(zona);

		hammertime.get('pinch').set({enable: true });
		hammertime.get('rotate').set({enable: true });

		//hammertime.on('tap doubletap pan swipe press pinch rotate', function(ev) {
		hammertime.on('tap doubletap swipe press rotate', function(ev) {
			document.querySelector('#info').innerHTML = ev.type+'!';
		})
	}, 

	ponloClaro: function(){
		document.body.className = 'claro';
		//alert('claro');
	},

	ponloOscuro: function(){
		document.body.className = 'oscuro';
		//alert('oscuro')
	},

};

if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		app.inicio();
	}, false);
}