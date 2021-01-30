let monObjet = { 
    nom : 'Achraf',
    age : 22
}


let myElements = document.querySelector('div#object').children
console.log(myElements);



console.log(Object.keys(monObjet));
let prop = Object.keys(monObjet)




console.log('____4____');
//4
prop.forEach(el => {
    console.log(monObjet[el]);
});

console.log('____5____');
prop.forEach((el,i) => {
    console.log(monObjet[el], i);
});



console.log('____6____');
prop.forEach((el,i) => {
    myElements[i].innerText = monObjet[el]
});