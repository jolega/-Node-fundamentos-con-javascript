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

    const empleado = empleados.find( e => e.id === id ) ?.nombre  // find  funcion de call back que recorre ?.empleado valida si es null
    if(empleado) {                //Un valor falso  undefined, null, NaN, 0, "" (string vacía), and  false .
       // return empleado
       callback(null, empleado);
    }
    else     // si es unefine entra a el else 
    {
        callback( `Empleado con id ${id} no existe` )
    }
    
} 

const getSalario=(id, callback) => {

    const salario = salarios.find( s => s.id === id ) ?.salario // find  funcion de call back que recorre  ?.salario valida si es null
    if(salario) {                //Un valor falso  undefined, null, NaN, 0, "" (string vacía), and  false .
       // return empleado
       callback(null, salario);
    }
    else     // si es unefine entra a el else 
    {
        callback( `Empleado con id ${id} no tiene salario asignado` )
    }

}
// console.log(getEmpleado(1));
// console.log(getEmpleado(2));
// console.log(getEmpleado(3));
// console.log(getEmpleado(5));

const id=3;

// getEmpleado (id, (err, empleado)=> {

//   if(err){  // null es false and  texto es true
//       console.log('Error!')
//       return console.log(err);
//    }
//     console.log('El empleado existe');
//     console.log((empleado));
// })

// getSalario (id, (err, salario)=> {

//     if(err){  // null es false and  texto es true
//         console.log('Error!')
//         return console.log(err);
//     }
//       console.log('El salario existe');
//       console.log((salario));
//   })

getEmpleado (id, (err, empleado)=> {

    if(err){  // null es false and  texto es true
        console.log('Error!')
        return console.log(err);
     }
 
     getSalario (id, (err, salario)=> {
 
        if(err){  // null es false and  texto es true
            console.log('Error!')
            return console.log(err);
        }

   
        console.log(`El empleado  ${empleado}  tiene un salario de ${salario}`);    
        })

 
  })

