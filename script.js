var Kilimanjaro = {
    name: "Kilimanjaro",
    height: 19341
};
var Everest = {
    name: "Everest",
    height: 29029
};
var Denali = {
    name: "Denali",
    height: 20310
};
var mountains = [Kilimanjaro, Everest, Denali];
function findNameOfTallestMountain(Mts) {
    var mt = Mts[0];
    for (var i = 0; i < Mts.length; i++) {
        if (mt.height < Mts[i].height) {
            mt = Mts[i];
        }
    }
    console.log(mt.name);
}
findNameOfTallestMountain(mountains);
;
var productlist = [
    { name: "Pop", price: 1.99 },
    { name: "Beer", price: 2.49 },
    { name: "Chips", price: 0.99 },
    { name: "Coffee", price: 0.79 }
];
function calcAverageProductPrice(pl) {
    var total = 0;
    var avg = 0;
    for (var i = 0; i < pl.length; i++) {
        total += pl[i].price;
    }
    avg = total / pl.length;
    console.log(avg);
}
calcAverageProductPrice(productlist);
;
var motor = { name: "motor",
    price: 10.00 };
var sensor = { name: "sensor",
    price: 12.50 };
var LED = { name: "LED",
    price: 1.00 };
var inventory = [
    { product: motor, quantity: 10 },
    { product: sensor, quantity: 4 },
    { product: LED, quantity: 20 }
];
function calcInventoryValue(inv) {
    var value = 0;
    for (var i = 0; i < inv.length; i++) {
        value += (inv[i].product.price * inv[i].quantity);
    }
    console.log(value);
}
calcInventoryValue(inventory);
