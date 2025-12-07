let autosA = ["Masda 3", "Onda civic", "Toyota Corolla"]
let autosB = ["Masda 3", "Onda civic", "Toyota Corolla", "Kona"]


//spread (desparrama)operatior  
let union = [...autosA];


//FOR OF es una manera de recorrer los elementos
// de un arreglo de un manera mas eficciente
for (let auto of autosB) {
    if (!union.includes(auto)) {
        union.push(auto);
    }
}
console.log("CONCAT")
console.log(autosA.concat(autosB));
console.log("UNION")
console.log(union);
