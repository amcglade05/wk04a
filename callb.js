//command to get it to run on the terminal is 'node callb'
// = ()=> will help to make it a function expession

const logGreeting = (greeting) => {
    console.log(greeting);
};

const createGreeting = (name, callback)=>{
    console.log(callback);
    const greet = `Hello ${name}`;
    callback(greet);
};

createGreeting("John", (greeting)=>{
console.log(greeting);
});
