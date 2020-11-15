const productList: { img: string, name: string, category: string, stock: string }[] = [
    { img: "fh0g3", name: "Bamboo Watch", category: "Accessories", stock: "Instock" },
    { img: "el433", name: "Black Watch", category: "Accessories", stock: "Instock" },
    { img: "cz3c1", name: "Blue Band", category: "Fitness", stock: "Lowstok" },
    { img: "vgerg2", name: "Blue T-Shirt", category: "Clothing", stock: "Instock" },
    { img: "6wer53", name: "Bracelet", category: "Accessories", stock: "Lowstok" },
    { img: "31fwg", name: "Brown Purse", category: "Accessories", stock: "Instock" }
]

let pushProductList = ['img', 'name', 'category', 'stock'];
let Listpush = [];

let app = document.getElementById('app')
let htmlCode: string = `<h1>Pick list</h1>`;


const list = () => {
    let tr = "<div>" + productList.map((object, i) => {
        return `<option> ${object.img} •  ${object.category} • ${object.name} • ${object.stock}</option>`;
    }).join("") + "</div>";
    document.getElementById('tableBody').innerHTML = tr

}



const addAll = () => {
    productList.forEach((e) => {
        Listpush.push(e)
        const list2 = () => {
            let tr = "<div>" + Listpush.map((object) => {
                return `<option>${object.img} •  ${object.category} • ${object.name} • ${object.stock}</option>`;
            }).join("") + "</div>";
            document.getElementById('tableBody2').innerHTML = tr
        }
        list2()
    })

}

function addone() {
    // let number = document.querySelectorAll('[name=1]')
    Listpush.push()
    const list2 = () => {
        let tr = "<div>" + productList.map((object, i) => {
            return `<option>${object.img} •  ${object.category} • ${object.name} • ${object.stock}</option>`;
        }).join("") + "</div>";
        document.getElementById('tableBody2').innerHTML = tr
    }
    list2()

}


htmlCode += `<div class="tables"><select size=10 id="tableBody" ></select>  <select size=10 id="tableBody2" >${Listpush}</select></div>`
htmlCode += `<button onClick="addone()"> addOne</button>`
htmlCode += `<button onClick="addAll()"> add </button>`


app.innerHTML = htmlCode
list()
