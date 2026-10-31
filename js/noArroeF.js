//.map dan filter tanpa arrow function

const nama = [
    {orang1: "hakkul", umur: 20},
    {orang2: "well", umur:30}
]

const namaSaja = nama.map(function(n) {
    return n.orang1
}) 
.filter(function(hasil){
    return hasil !== undefined
})

console.log(namaSaja)