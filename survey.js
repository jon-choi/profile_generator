const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  console.log(`That's a very interesting nickname,  ${name}`);
  rl.question("What's an activity you like doing?", (activity) => {
    console.log(`No way! I love doing ${activity} too!`);
    rl.question("What do you listen to while doing that?" , (music) => {
      console.log(`That's pretty cool, I also like ${music}`);
      rl.question("What's your favourite type of cuisine?" , (food) => {
        console.log(`Nice! Have you tried that new ${food} place downtown?`);
        rl.question("If you have to eat one type of food for the rest of your life, what would it be?", (meal) => {
          console.log(`Wow, I would have chosen ${meal} as well! Great minds think alike`);
          rl.question("What is your superpower? What are you amazing at?", (superpower) => {
            console.log(`You're a very talented person! I would have not expected you to be so good at ${superpower}!`);
            rl.question("Which sport is your absolut favourite?", (sport) => {
              console.log(`That's cool, I actually played a little bit of ${sport} when I was a teenager.`);
              
              rl.close();
            });
          });
        });
      });
    });
  });
});