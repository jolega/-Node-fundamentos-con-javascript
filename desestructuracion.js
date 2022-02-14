const deadpool = {
nombre: 'Wade',
apellido:'Winston',
poder:'Regeneracion',
    getNombre: function (){
        return `${this.nombre} ${this.apellido} ${this.poder}`

    }

}

console.log (deadpool.getNombre());

// const nombre   = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder    = deadpool.poder;//

// console.log(nombre, apellido, poder);

//const {nombre, apellido, poder, edad= 0} = deadpool  // desestructuracion de obejtos
//console.log(nombre, apellido, poder, edad );

function imprimeHereo (hero){
const {nombre, apellido, poder, edad= 0} = deadpool  // desestructuracion de obejtos
console.log(nombre, apellido, poder, edad );
}

function imprimeHereo2 ({nombre, apellido, poder, edad= 0}){
nombre   = 'Fernando'
console.log(nombre, apellido, poder, edad );
}

imprimeHereo(deadpool);
imprimeHereo2(deadpool);

const heroes =['Deadpool','Superman','Batmant']  // desestructuracion de ARRAY


//const h1 = heroes[0];   
//const h2 = heroes[1];
//const h3 = heroes[1];//

//console.log(h1 ,h2 ,h3 )


//const [h1, h2 , h3]= heroes;
//console.log(h1 ,h2 ,h3 );

const [ ,  , h3]= heroes;
console.log(h3);

function imprimeHereo3 ([h1, h2, h3, edad= 0]){
    nombre   = 'Fernando'
    console.log(h1, h2, h3, edad );
    }
    
    imprimeHereo3(heroes);