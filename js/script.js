// Milestone 1 Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
// Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.
// Milestone 2 Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.
// Milestone 3 Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome, colore e opacità del fiocco per ogni gatto.

// Milestone 1 

// Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
document.getElementById("init").innerHTML = 'Milestone 1';
const gatti = [
    {nome: 'pippo', eta: 8, colore: '#000000', sesso: 'maschio'},
    {nome: 'pluto', eta: 12, colore: '#c8ae8c', sesso: 'maschio'},
    {nome: 'paperina', eta: 3, colore: '#ff6800', sesso: 'femmina'},
    {nome: 'mimmie', eta: 11, colore: '#4D3728', sesso: 'femmina'},
    {nome: 'qui', eta: 2, colore: '#F7BF09', sesso: 'maschio'},
    {nome: 'maria', eta: 3, colore: '#949494', sesso: 'femmina'},
]


//Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.

gatti.forEach((element) => {
    document.getElementById("gatti").innerHTML +=
    `
    <li>
        ${element.nome} : <i class="fas fa-cat" style="color:${element.colore}"></i>
    </li>

    `;    
});

// Milestone 2 
// Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio.Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.

document.getElementById("mid").innerHTML = 'Milestone 2';

let pink = '#b62a71';
let blue = '#011372';

const divisione = gatti.map ((element) => {
    const{nome,eta,colore,sesso} = element;

    const opacity = element.eta / 12;

    return{
        nome,
        eta,
        colore,
        sesso,
        fiocco : {
            color: (sesso == 'femmina')? pink : blue, 
            opacity : opacity
        }
    }
});

const gattiMaschi = divisione.filter((element) =>{
    return element.sesso === 'maschio';
});
// console.log(maschi);
gattiMaschi.forEach((element) => {
    document.getElementById("fiocchi").innerHTML +=
    `
    <li>
        ${element.nome} : <i class="fas fa-cat" style="color:${element.colore}"></i>
         <i class="fas fa-ribbon" style="color:${element.fiocco.color}; opacity:${element.fiocco.opacity}"></i>
    </li>
    `; 
});


const gattiFemmine = divisione.filter((element) =>{
    return element.sesso === 'femmina';
});
// console.log(femmine);
gattiFemmine.forEach((element) => {
    document.getElementById("fiocchi").innerHTML +=
    `
    <li>
       ${element.nome} : <i class="fas fa-cat" style="color:${element.colore}"></i>
      <i class="fas fa-ribbon" style="color:${element.fiocco.color}; opacity:${element.fiocco.opacity}"></i>
    </li>
    `; 
});


// Milestone 3 
// Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome, colore e opacità del fiocco per ogni gatto.

document.getElementById("fin").innerHTML = 'Milestone 3';

let femmineMaschiArray = [...gattiFemmine,...gattiMaschi];
const gattiFemmineMaschi = femmineMaschiArray.map((element) => {
    const{nome, colore, fiocco} = element;

    return {
        nome,
        colore,
        fiocco    
    }
});

gattiFemmineMaschi.forEach((element) => {
    document.getElementById("femmine-maschi").innerHTML +=
    `
   
    <li>
        ${element.nome} : <i class="fas fa-cat" style="color:${element.colore}"></i>
        <i class="fas fa-ribbon" style="color:${element.fiocco.colore}; opacity:${element.fiocco.opacity}"></i>
    </li>
    
    `;  
});