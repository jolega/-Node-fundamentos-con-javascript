

    function sumar (a,b=10){

    return a + b;
}

const  sumar2  = (a,b=10) => {
    return a + b;
}

const  sumar3  = (a,b=10) => a + b;  // si solo tiene una linea
 
const saludar = () => 'hola mundo';


console.log(sumar (5) );
console.log(sumar2 (5) );
console.log(sumar3 (5) );
console.log(saludar() );



