
//setTimeout( function() { // callback con funciona externa

//    console.log('Hola mundo')
//},1000);

// const getUsuarioById= (id,) => {

//     const usuario = {
//         id,
//         nombre:'johan'
//     }

//     setTimeout(()=> {
//         console.log(usuario)
//     }, 1500)
// }

const getUsuarioById= (id,callback) => {  // call back con funciona externa

    const usuario = {
        id,
        nombre:'johan'
    }

    setTimeout(()=> {
        callback(usuario);
    }, 1500)
}

getUsuarioById(10, (usuario)=>{
    console.log('Hola mundo');
    console.log(usuario);
    console.log(usuario.nombre.toUpperCase());
    
});
