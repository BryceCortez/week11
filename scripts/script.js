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


let r = prompt("enter a radius. ");
console.log(r)
function circleArea (radius)
{
    return Math.PI * radius * radius;
}

let area = circleArea(r).toFixed(2);

alert(`The area of a circle with radius ${r} is ${area}`)