(function(){
	
	//3- Declarar una funcion anónima autoejecutable que imprima en la consola el texto 'Hola Mundo'
	(function(){
		console.log('Hola mundo');
	})();

	//4- Crear una variable del tipo array 
	var arreglo_prueba = [];

	//5- Crear una variable del tipo string 
	var texto_prueba = 'Contenido de la variable tipo string';
	console.log(texto_prueba);

	//6- Crear una variable del tipo numerico
	var numero_prueba = '0';
	console.log(numero_prueba);

	//7- Añadir dos elementos del tipo string dentro del array
	arreglo_prueba.push('lunes');
	arreglo_prueba.push('martes');

	//Imprimir en consola el valor del array
	console.log(arreglo_prueba);

	//Crear una variable del tipo object
	var objeto_prueba = {};

	//Añadir los atributos descripcion y cantidad a la variable del tipo object
	objeto_prueba.largo = 10;
	objeto_prueba.ancho = 20;
	objeto_prueba.alto = 25;
	console.log(objeto_prueba);

})();