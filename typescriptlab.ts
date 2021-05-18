interface Mountain {
    name: string;
    height: number;
};

const mountains: Mountain[] = [
    {name:"Kilimanjaro", height: 19341},
    {name:"Everest", height:29029},
    {name:"Denali", height:20310},
];

function findNameOfTallestMountain (mountains: Mountain[]){
    let tallestMtn = mountains[0];
    if(mountains.length <= 0) {
        return "";
    } else { 
        mountains.forEach(element => {    
        if (element.height > tallestMtn.height) {
            tallestMtn = element;
        }
    });
    return tallestMtn.name;
}}
  
let tallestMtn = findNameOfTallestMountain(mountains);
console.log(tallestMtn);

interface Product {
    name: string;
    price: number;
};

const products: Product[] = [
    {name:"pizza", price:15.99},
    {name:"sandwich", price:8.50},
    {name:"burger", price:10.75},
];

function calcAverageProductPrice (products: Product[]){
    let sum = 0;
    if(products.length <= 0) {
        return 0;
    } else { 
            for(let i = 0; i < products.length; i++) {
                sum += products[i].price;
            }
            let averagePrice = sum / products.length;
            return averagePrice.toFixed(2);
        }
    }


let averagePrice = calcAverageProductPrice(products);
console.log(averagePrice);

interface InventoryItem {
    product: {
        name: string;
        price: number;
    },
    quantity: number;
}

const inventory: InventoryItem[] = [
    {product:{name:"motor", price:10.00}, quantity: 10},
    {product:{name:"sensor", price:12.50}, quantity:4},
    {product:{name:"LED", price:1.00}, quantity: 20},
];

function calcInventoryValue (inventory: InventoryItem[]){
    let sum = 0;
    if(inventory.length <= 0) {
        return 0;
    } else { 
            for(let i = 0; i < inventory.length; i++) {
                sum += inventory[i].product.price * inventory[i].quantity;
            }
            let totalInventory = sum;
            return totalInventory;
        }
    }

let totalInventory = calcInventoryValue(inventory);
console.log(totalInventory);