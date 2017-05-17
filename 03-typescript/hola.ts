
//boolean
let soltero: boolean = true; // false

// number
let novias = 1;

// string
let frasetion = "You are dont";

let otraFrasetion = `El numero de novias ${novias + 1}`;

// arrays
let notas:number []= [1,2,3,4];
let jaladas:Arrays<number> = [1,2,3];

let  nombre:any = "asd"
nombre = 12;


// interface
let usuario:UsuarioLogin = {
    nombre:"alexis",
    apellido:"gualoto",
}
interface UsuarioLogin {  // sirven para definir tipos de datos
    nombre:string,
    apellido:string,
    direccion?:string // para que aparesca o no se utiliza el signo de interrogacion
}
/*
class persona {
    nombre:string = "Nom"; // no se requiere poner adlenate publica ya que se sobre entiende, inicializada
    private apellido:string;
    public fechaNacimiento:Date;
    constructor(nombre:string,
                apellido:string,
                fechaNacimiento?:Date){
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;

    } */

class Persona {
    nombre:string = "Nom"; // no se requiere poner adlenate publica ya que se sobre entiende, inicializada
    private apellido:string;
    public fechaNacimiento:Date;
    constructor(nombre?:string,
                apellido?:string,
                fechaNacimiento?:Date){
    } /*
    imprimirPersona (){
        console.log(this.nombre, this.apellido);
    }*/

    imprimirPersona ():UsuarioLogin{ // que una funcion devuelva el tipo de dato
        console.log(this.nombre, this.apellidong);
        return <UsuarioLogin>{
            nombre: this.nombre,
            apellido: this.apellido
        }
    }
    private imprimirNombre (nombre?:string, apellido?:string):void{
        if (apellido){
            console.log(nombre,apellido);
        }else {
            console.log(nombre);
        }


    }
}

// instanciar una nueva clase
let alexis:Persona = new Persona();
console.log(alexis.nombre, alexis.fechaNacimiento);

alexis.nombre = "Alexis";
alexis.apellido = "Gualoto";
alexis.fechaNacimiento = new Date ("1986-05-12");
alexis.imprimirPersona();

/// funciones **++ en tipe scripr pueden utilizar la arrow funcion si
function SumarNumeros(numero1:number, numero2:number):number{
    return numero1 + numero2;
}
var objeto = {
    nombre:"Alexis",
    imprimirNombre:function(){
        return this.nombre;
    }
}

