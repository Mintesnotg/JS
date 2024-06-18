const items = [


    { name: "Bike", price: 100 },
    { name: "TV", price: 120 },
    { name: "Album", price: 10 },
    { name: "Book", price: 200 },
    { name: "Phone", price: 300 },
    { name: "Computer", price: 400 },
    { name: "keyboard", price: 10 }
]

const filterd = items.filter((item, index) => {

    return item.price <= 100
})
// console.log(`cheap items`)
// filterd.forEach((name)=>{
//     console.log(name.name)
// })

const price = items.map((itm, index, []) => {
    return itm.price
})

console.log(price)


items.forEach((item, index, []) => {
    console.log(`${item.name} is placed ${index}`)
})


const isexisted = items.some((item) => {

    return item.price <= 10
})

const every = items.every((item) => {

    return item.price <= 10
})

const totalprice = items.reduce((prv, curr) => {

    var val = prv + curr.price;
    return val;
}, 0)

console.log(` totalprice is  ${totalprice}`)