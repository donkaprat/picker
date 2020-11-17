interface IProduct {
    img : string;
    name : string;
    category : string;
    stock : string;
}

let productList: IProduct[] = [
    { img: "fh0g3", name: "Bamboo Watch", category: "Accessories", stock: "Instock" },
    { img: "el433", name: "Black Watch", category: "Accessories", stock: "Instock" },
    { img: "cz3c1", name: "Blue Band", category: "Fitness", stock: "Lowstok" },
    { img: "vgerg2", name: "Blue T-Shirt", category: "Clothing", stock: "Instock" },
    { img: "6wer53", name: "Bracelet", category: "Accessories", stock: "Lowstok" },
    { img: "31fwg", name: "Brown Purse", category: "Accessories", stock: "Instock" }
]

let Listpush : IProduct[] = [];
let app : HTMLElement = document.getElementById('app');
let htmlCode: string = `<h1>Pick list</h1>`;

let valueSelectionned : IProduct = null;
let valueIdList1: number | null = null;
let valueIdList2: number | null = null

const selectValueList1 = (e) => {
    valueIdList1 = e.target.value
}

const selectValueList2 = (e) => {
    valueIdList2 = e.target.value
}

const addEventOnOption = (list : IProduct[]) : void => {
    if(list == productList){
        list.forEach(( element ,i)=> {
            document.getElementById(`option-${i}`).addEventListener("click",selectValueList1)
        })
    }else if(list == Listpush){
        list.forEach(( element ,i)=> {
            document.getElementById(`option-list2${i}`).addEventListener("click",selectValueList2)
        })
    }
}

const list = () : void => {
    let tr = "<div>" + productList.map((object, i) => {
         return `<option id = option-${i} value=${i}> ${object.img} •  ${object.category} • ${object.name} • ${object.stock}</option>`;
    }).join("") + "</div>";
    document.getElementById('tableBody').innerHTML = tr
    addEventOnOption(productList)
}

const list2 = () : void => {
    let tr = "<div>" + Listpush.map((object, i) => {
         return `<option id = option-list2${i} value=${i}> ${object.img} •  ${object.category} • ${object.name} • ${object.stock}</option>`;
    }).join("") + "</div>";
    document.getElementById('tableBody2').innerHTML = tr
    addEventOnOption(Listpush)
}

const addAll = () : void => {
 if(Listpush.length === 0){
    Listpush = productList
    productList = []
 }else if(productList.length === 0){
     productList = Listpush
     Listpush = []
 }
    list()
    list2()
}
    

    function addone() : void{
        if(valueIdList1 != null){
            valueSelectionned = productList[valueIdList1]
        }else{
            valueSelectionned = Listpush[valueIdList2]
        }

        if(!Listpush.includes(valueSelectionned)){
            productList.splice(valueIdList1, 1)
            Listpush.push(valueSelectionned);
            valueIdList1 = null
        }else{
            valueSelectionned = Listpush[valueIdList2]
            Listpush.splice(valueIdList2, 1)
            productList.push(valueSelectionned);
            valueIdList2 = null
        }
        list2();
        list();
     }




htmlCode += `<div class="tables"><select size=10 id="tableBody" ></select>  <select size=10 id="tableBody2" >${Listpush}</select></div>`
htmlCode += `<button onClick="addone()"> addOne</button>`
htmlCode += `<button onClick="addAll()"> add </button>`


app.innerHTML = htmlCode
list()
