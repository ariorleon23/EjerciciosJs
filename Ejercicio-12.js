/*Metodos
    -Metodo estatico: Permite ser ejecutada sin necesidad de instanciar la clase
    -Metodo Setter: Permite establecer los valores de atributos de nuestra clase
    -Metodo Getter: Permite obtener los valores de los atributos de nuestra clase
*/

class Animal{
    constructor(nombre, genero){
        this.nombre=nombre;
        this.genero=genero;
    }

    saludar(){
    console.log(`Hola, mi nombre es ${this.nombre}`)
    }
}

class Perro extends Animal{
    constructor(nombre, genero, tamanio){
        super(nombre, genero)
        this.tamanio=tamanio;
        //Atributo raza se crea nulo para luego pedirlo con el método setter
        this.raza= null;
    }

    saludar(){
        console.log(`Hola! Soy un perro y mi nombre es ${this.nombre}`)
    }

    static queEres(){ //Método estatico
        console.log("Los perros somos animales mamiferos que pertenecemos a la familia de los caninos")
    }

    //Getter. Obtiene el valor.
    get getRaza(){
        return this.raza;
    }

    //Setter. Modificador o establecedor del valor.
    set setRaza(raza){
        this.raza=raza;
    }
}

const scooby= new Perro("Scooby Doo", "Macho", "Grande")

//Metodo estatico
Perro.queEres();

//Metodos setter y getter
scooby.setRaza = "Gran Danes"
console.log(scooby.getRaza)


//// Ejercicios propuesto ////

class Persona{
    constructor (){
    this.nombre=null;
    this.apellido=null;
    this.edad=null;
    this.nacionalidad=null;
    }

set setNombre(nombre){
        this.nombre=nombre;
}
set setApellido(apellido){
    this.apellido=apellido;
}
set setEdad(edad){
    this.edad=edad;
}
set setNacionalidad(nacionalidad){
    this.nacionalidad=nacionalidad;
}

get getNombre(){
    return this.nombre;
}
get getApellido(){
    return this.apellido;
}
get getEdad(){
    return this.edad;
}
get getNacionalidad(){
    return this.nacionalidad;
}
static cuantosSon(){ //Método estatico
    console.log("Hay 8.010.359.063 personas en el mundo")
}
}

const mySelf= new Persona()

mySelf.setNombre ="Ariana";
mySelf.setApellido = "Ortiz";
mySelf.setEdad = 25;
mySelf.setNacionalidad = " Colombiano";

console.log(mySelf.getNombre)
console.log(mySelf.getApellido)
console.log(mySelf.getEdad)
console.log(mySelf.getNacionalidad)

Persona.cuantosSon();