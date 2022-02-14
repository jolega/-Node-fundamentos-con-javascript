
const nombre = 'Deadpool';
const real ='Wade Wiston';

const normal = nombre + ' ' + real ;
let template = `${1 + 1 }  Johan Garcia`;  // template string

console.log(normal);
console.log(template);  

template = `${nombre} ${real}`;
console.log(template);
console.log(normal === template);


// ojo con los saltos de linea
const html =`    
<h1>hola</h1>
<p>mundo</p>`;

console.log(html);