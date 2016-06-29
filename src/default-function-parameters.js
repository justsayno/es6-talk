function sayHello(name = 'unknown'){
    console.log(`Hello ${name}`);
}

sayHello('john');
sayHello();
sayHello(undefined);

function sayHelloAgain(name = 'unknown'){
    console.log(arguments.length);
}
sayHelloAgain('john'); // logs 1
sayHelloAgain(); // logs 0