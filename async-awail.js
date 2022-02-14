const empleados =[
    
    {
        id:1,
        nombre: 'Fernando'
    },
    {
        id:2,
        nombre: 'Linda'
    },
    {
        id:3,
        nombre: 'Karen'
    }
];

const salarios =[
    
    {
        id:1,
        salario: 1000
    },
    {
        id:2,
        salario: 2000
    }
];

const getEmpleado =(id, callback) => {

    return new Promise ((resolve, reject)=> {  //resolve cuando esta bien , reject cuando no existe
        const empleado = empleados.find( e => e.id === id ) ?.nombre;  // find  funcion de call back que recorre ?.empleado valida si es null

        (empleado) 
            ? resolve( empleado)
            : reject(`No existe empleado con id ${id}`);
    });
} 

const getSalario =(id, callback) => {

    return new Promise((resolve, reject)=> { 

        const salario = salarios.find( s => s.id === id ) ?.salario ;// find  funcion de call back que recorre  ?.salario valida si es null
   
        (salario) 
        ? resolve( salario)
        : reject(`Empleado con id ${id} no tiene salario asignado`);
    }
    )}


const id=3;

//async-await

const getInfoUsuario = async() => {
   
    const empleado=  await  getEmpleado(id);
    const salario=  await  getSalario(id) 
    return `El salario del empleado: ${empleado} es de  ${salario}`;
}

getInfoUsuario()
    .then(msg => console.log(msg))
    .catch( err => console.log(err));     // controlar el error 

// let nombre;
// getEmpleado(id)    // evitar callback anidados
//     .then(empleado=> {
//         nombre=empleado
//         return getSalario(id)
//     })
//     .then(salario=>  console.log(`el empleado ${nombre} tiene un salaro de ${salario}`))
//     .catch( err => console.log(err));     // controlar el error 
