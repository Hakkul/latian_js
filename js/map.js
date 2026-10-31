//Mengalikan setiap angka
// const angka = [1, 2, 3, 4, 5, 6]
// const kalidua = angka.map((num) => num * 2)

// console.log(angka)
// console.log(kalidua)


//mengubah format data objek
// const nama = [
//     {orang: "hakkul", umur: 20},
//     {orang: "well", umur:30}
// ]

// const namaSaja = nama.map((n) => n.umur)

// console.log(namaSaja)

//.map beda key
const nama = [
    {orang1: "hakkul", umur: 20},
    {orang2: "well", umur:30}
]

const namaSaja = nama
    .map((n) => n.orang1)
    .filter((n) => n !== undefined) //membuang undifined


console.log(namaSaja)