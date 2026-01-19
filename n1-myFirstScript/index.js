function greeting(user) {
    console.log('Hello ' + user);
    console.log(`Hello ${user} how are you?`);
    console.log(username);
    {
        const x = 2; // hoisting
        console.log(x);
    }
}

const username = 'Andre';
greeting('Paulo');
