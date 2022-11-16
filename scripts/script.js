// function greet(user)
// {
//     console.log(`Hello ${user}`);
//     // console.log('Hello' + str);
// }

// greet("Bryce");

// const greet = function (user)
// {
//     console.log(`hello ${user}`);
// }

// greet("Bryce")

// const greet =  (user, time) =>
// {
//     console.log(`hello ${user}`);
// }

// greet()

// function greet(user, time = 'day')
// {
//     console.log(`Good ${time} ${user}`);
//     // console.log('Hello' + str);
// }

// greet("Bryce");
// greet("Bryce" , "Night", );


// let r = prompt("enter a radius. ");
// console.log(r)
// function circleArea (radius)
// {
//     const radiusP = document.querySelector("#radius");
//     const resultP = document.querySelector("#result");
// radiusP.textContent = radius;  
// let calculatedArea = Math.PI * radius * radius;
// resultP.textContent = calculatedArea
// return calculatedArea;

    
// }

// let area = circleArea(r).toFixed(2);

// alert(`The area of a circle with radius ${r} is ${area}`)

const shoppingList = ["eggs", "milk", "bread", "green tea"];
const shopul = document.querySelector(".shopping")
function shop (shopping)
{
   for (let i = 0; i < shopping.length; i++)
   {
    let newLi = document.createElement("li");
    newLi.textContent = shopping[i];
    shopul.append(newLi);
    console.log(shopping[i]);
   }
}


shop(shoppingList)

function changeListStyle()
{
shopul.classList.remove("cricleList");
shopul.classList.add ("squareList");


}
changeListStyle()

const listItems = document.querySelectorAll(".shoppping li")

function greenItem()
{
    for (let i = 0 ; i<greenItem.length; i++)
    {
     if ( listItems[i].textContent.includes("green") )
     {
        listItems[i].classList.add ("green");

     }
    }
}

greenItem();