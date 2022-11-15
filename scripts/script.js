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

function greet(user, time = 'day')
{
    console.log(`Good ${time} ${user}`);
    // console.log('Hello' + str);
}

greet("Bryce" , "Night", "Morning");
greet("Bryce");
