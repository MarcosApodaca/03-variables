

interface grupoMusical{
    nombreDelGrupo: string,
    cantante: string,
    compositor: string,
    añoDeFundacion: number,
    activo: boolean,
    generoMusical: string
}

const PopRock = "🎵 PopRock";
const Rock = "🎸 Rock";
const HardRock = "🤘 Hard Rock";
const Clasica = "🎼 Clásica";

const style = "font-weight: bold;  font-size: 20px; background-color: green;"

let grupoMusicalA = {
    nombreDelGrupo: "The Beatles",
    añoDeFundacion: 1960,
    activo: true,
    generoMusical: PopRock,
}

let grupoMusicalB = {
    nombreDelGrupo: "Queen",
    añoDeFundacion: 1970,
    activo: false,
    generoMusical: Rock,
}

let grupoMusicalC = {
    nombreDelGrupo: "AC DC",
    añoDeFundacion: 1973,
    activo: true,
    generoMusical: HardRock,
}

let grupoMusicalD = {
    compositor: "Ludwig van Beethoven",
    añoDeFundacion: 1770,
    activo: false,
    generoMusical: Clasica,
}

let grupoMusicalF = {
    nombreDelGrupo: "The Rolling Stones",
    añoDeFundacion: 1962,
    activo: true,
    generoMusical: Rock,
}

 
 

// console.log(grupoMusicalA, grupoMusicalB, grupoMusicalC, grupoMusicalD, grupoMusicalF);

console.log(grupoMusicalA.nombreDelGrupo= "%cThe Beatles", style, grupoMusicalA);
console.log(grupoMusicalB.nombreDelGrupo= "%cQueen", style, grupoMusicalB);
console.log(grupoMusicalC.nombreDelGrupo= "%cAC DC", style, grupoMusicalC);
console.log(grupoMusicalD.compositor= "%cLudwig van Beethoven", style, grupoMusicalD);
console.log(grupoMusicalF.nombreDelGrupo= "%cThe Rolling Stones", style, grupoMusicalF);





