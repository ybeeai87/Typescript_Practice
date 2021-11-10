interface Mountain {
    name: string;
    height: number;
}

let Kilimanjaro:Mountain={
    name:"Kilimanjaro",
    height:19341
}

let Everest:Mountain={
    name:"Everest",
    height:29029
}

let Denali:Mountain={
    name:"Denali",
    height:20310
}

let mountains: Mountain []=[Kilimanjaro, Everest, Denali];

function findNameOfTallestMountain(Mts:Mountain[]) {
    let mt:Mountain = Mts[0];
    for(let i = 0; i < Mts.length; i++){
        if (mt.height<Mts[i].height){
            mt = Mts[i];
        }
    }
    console.log(mt.name)
}
findNameOfTallestMountain(mountains);

interface Product {
    name: string,
    price: number
};

let productlist : Product[] = [
    {name: "Pop", price: 1.99},
    {name: "Beer", price: 2.49},
    {name: "Chips", price: 0.99},
    {name: "Coffee", price: 0.79}
];

function calcAverageProductPrice(pl:Product[]) {
   let total = 0;
   let avg = 0;
    for(let i = 0; i <pl.length; i++){
         total += pl[i].price;  
    }
    avg = total / pl.length;
    console.log(avg);
}
calcAverageProductPrice(productlist);

interface InventoryItem {
    product : Product,
    quantity : number;
};

let motor: Product = 
{name:"motor",
 price: 10.00};
let sensor : Product = 
{name:"sensor", 
price: 12.50};
let LED : Product = 
{name:"LED",
 price: 1.00};

let inventory : InventoryItem[]= [
    {product: motor, quantity:10 },
    {product: sensor, quantity:4},
    {product: LED, quantity: 20}
];

function calcInventoryValue(inv:InventoryItem[]){
   let value = 0;
    for(let  i = 0; i<inv.length; i++ ){
        value += (inv[i].product.price * inv[i].quantity);
    }
    console.log(value);
}
calcInventoryValue(inventory);