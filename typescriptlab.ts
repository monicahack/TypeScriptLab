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
    //I would recommend any variable that is going to be added to as you loop through to be initialized outside the loop at the beginning that way you dont need the extra loop and its best practice 
    //to declare variables youre going to use to count or track something in a loop at the beginning of your block of code.
    if(products.length <= 0) {
        return 0;
    } else { 
         //you dont need to have this extra loop here if you initialize above.
            for(const product of products) {
                sum += product.price;
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
            //same recommendation as above, you can remove one of these and initialize sum above
            for (const item of inventory) {
            sum += item.product.price * item.quantity;
            }
            let totalInventory = sum;
            return totalInventory;
      }
}

let totalInventory = calcInventoryValue(inventory);
console.log(totalInventory);
