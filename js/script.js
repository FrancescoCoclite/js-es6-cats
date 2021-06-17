// Milestone 1 Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
// Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.
// Milestone 2 Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.
// Milestone 3 Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome, colore e opacità del fiocco per ogni gatto.

const cats = [
    {
        nome : 'Pippo',
        eta : 1,
        colore : '#ff0000',
        sesso : 'male'
    },
    {
        nome : 'Pluto',
        eta : 4,
        colore : '#ff00ff',
        sesso : 'male'
    },
    {
        nome : 'Paperino',
        eta : 1.5,
        colore : '#ffff00',
        sesso : 'male'
    },
    {
        nome : 'Lola',
        eta : 3,
        colore : '#0000ff',
        sesso : 'female'
    },
    {
        nome : 'Giulia',
        eta : 8,
        colore : '#00ffff',
        sesso : 'female'
    },
    {
        nome : 'Sara',
        eta : 12,
        colore : '#00ff00',
        sesso : 'female'
    }
];

cats.forEach((element) => {
    console.log(element.nome, element.colore);
});


// Milestone 2
// Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.

let catsMale = cats.filter((object) => {
    return object.sesso == 'male';
});

let catsFemale = cats.filter((object) => {
    return object.sesso == 'female';
});

console.log(catsMale);
console.log(catsFemale);

catsMale.forEach((object) => {
    const {nome, sesso} = object;
    document.getElementById('catsMale').innerHTML += `<li>${nome}, ${sesso} <i class="fas fa-ribbon"></i></li>` ;
});
