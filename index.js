// pair programming
// Declaración
const Coche = {
  marca: 'ford',
	modelo: '2024',
	matricula: '1010ABC'
}

const Casa =  {
	codPostal: 48940,
	calle: 'Calle unamono',
	portal: 1,
	piso: 2
}

const FullStackDeveloper = {
	lenguajes: ['Español', 'Ingles', 'Frances'],
	proyectos: ['Coches', 'Jardín', 'Cocina']
}

const Perro = {
	nombre: 'Petete',
	raza: 'Pitbull',
	color: 'Cafe',
	edad: 8,
	ladrar: function () {
		return console.log('Gua, gua, gua!!!')
	},
	popo: function () {
		return Math.random() * 3
	}
}

// Lectura de propiedades 

const marcaPortatil = Portatil.marca

const marcaPortatil2 = Portatil['marca']

const grupos = Concierto.grupos

const RGB = [Led.rojo, Led.verde, Led.azul]

// Modificación de propiedades

Portatil.modelo = 'P345'

Concierto.cartelera.push("Guns N' Roses")

Concierto.fecha = new Date()

const objeto = {
	nombreArchivo: '', 
	copias: '', 
	numPaginas: ''
}

Impresora.imprimiendo = objeto

// Declaración

const Noticia = {
	titular: '',
	cuerpo: ''
}

const Persona = {
	nombre: '',
	apellidos: '',
	edad: 22
}

const Avion = {
	numPasajeros: 5,
	despegar: function () {
		return console.log('despegando')
	},
	volar: function () {
		return console.log('llegando al destino')
	},
	aterrizar: function () {
		return console.log('aterrizando')
	}
}

const Paquete = {
	contenido: []
}

const Pais = {
	numHabitantes: 32531,
	continente: 'Latino América',
	gentilicio: 'Colombianos'
}

// Lectura de propiedades

const codError = O_Error.codigo

const integrantes = Grupo.integrantes

const nivelesTinta = Impresora.tinta

const pixeles = Pantalla.pixeles

const especificaciones = Movil["especificaciones"]

// Modificación de propiedades

Grupo.numIntegrantes = 5

Pantalla.dimensiones = '1920x1080'

Led.encendido = !true

Movil.temperatura = '20º'

