const totalBarang = [
    {barang: "buku", harga: 150},
    {barang: "pencil", harga: 300},
    {barang: "pulpen", harga: 100},
]

const totalBayar = totalBarang.reduce(function(total, item){
    return total + item.harga
}, 0)

console.log(totalBayar)