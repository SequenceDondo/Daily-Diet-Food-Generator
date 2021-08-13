// Healthy Food Generator
function generateRandomNumber (num) {
    return Math.floor(Math.random() * num);
 }
 
 const userName = '';
userName ? console.log(`Hello ${userName}`) : console.log('Hello!');
 
const userRequest = `This is your personal weightloss diet plan.\nHere is what you should eat today.`;
 console.log(userRequest);

 const healthyDietFood = {
    Breakfast: ['Cereal', 'a Protein Shake', 'a Smoothie', ],
    Lunch: ['Boiled Eggs', 'Fruit Salad', 'Chicken & tomato Salad' ],
    Super: ['Brown Rice', 'Sweet Potatoes', 'Mashed Potatoes'],
 }

let foodChosen = []

  for (food in healthyDietFood) {
    let foodOption = generateRandomNumber (healthyDietFood[food].length);
 

 switch (food) {
    case 'Breakfast':
       foodChosen.push(`For Breakfast you are recommended to have ${healthyDietFood[food][foodOption]}.`);
       break;
   case 'Lunch':
      foodChosen.push(`For Lunch you should have ${healthyDietFood[food][foodOption]}.`);
      break;
   case 'Super':
      foodChosen.push(`For Super you should eat ${healthyDietFood[food][foodOption]}.`);
      break;
      default:
      foodChosen.push('Please enter correct infomation.');

 }

  }
 
 console.log(foodChosen);
 


