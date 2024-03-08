function sandwich(...items: string[]): void{
    console.log("Sandwich order:")
    for (let i =0; i < items.length; i++){
        console.log(`- ${items[i]}`)
    }
}
console.log(`enjoy your sandwich Asfa Qasim`)

sandwich(`Capsicum`,`Tomato`,`Chicken`);
sandwich(`Beef`, `Cheese`);
sandwich(`Garlic chicken`, `Mayo sauce`);