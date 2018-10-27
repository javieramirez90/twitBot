require('dotenv').config()

var Twit = require('twit');

var bot = new Twit({
    consumer_key: process.env.LEARNINGBOT_CONSUMER_KEY,
    consumer_secret: process.env.LEARNINGBOT_CONSUMER_SECRET,
    access_token: process.env.LEARNINGBOT_ACCESS_TOKEN,
    access_token_secret: process.env.LEARNINGBOT_ACCESS_TOKEN_SECRET,
    timeout_ms: 60*1000
});


// bot.post('statuses/update', {status: 'hello world!'}, function(err, data, response){
//   if (err){
//       console.log(err);
//   } else {
//       console.log(data.text + ' was tweeted.');
//   }
// });

//IDS
// bot.get('followers/ids', {screen_name: 'bots_with_han'}, function(err, data, response){
//   if(err){
//     console.log(err)
//   } else {
//     console.log(data);
//   }
// });

//LIST PEOPLE THAT FOLLOW US
// bot.get('followers/list', {screen_name: 'bots_with_han'}, function(err, data, response){
//   if(err){
//     console.log(err)
//   } else {
//     data.users.forEach(function(user){
//       console.log(user.screen_name);
//     });
//   }
// });

//FOLLOW PEOPLE BACK (individually)
//General rule is bot only follows users that follow the bot
// bot.post('friendships/create', {screen_name: 'Donciscone'}, function(err, data, response){
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// })

//GET PEOPLE WE FOLLOW
// bot.get('friends/list', {screen_name: 'VotreDlire'}, function(err, data, response){
//   if(err){
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// })

//GIVE US THE RELATION TO A SPECIFIC USER
// bot.get('friendships/lookup', {screen_name: 'JossDZ'}, function(err, data, response){
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// })

//SEND DIRECT MESSAGE BY PROGRAMMING THE BOT
bot.post('direct_messages/events/new (message_create)', {screen_name:'JossDz', text: 'Testing Twitter API using twit.js'}, function(err, data, response){
  if(err){
    console.log(err);
  }else{
    console.log(data);
  }
});