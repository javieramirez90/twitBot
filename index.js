var Twit = require('twit');

var bot = new Twit({
  consumer_key: process.env.LEARNINGBOT_CONSUMER_KEY,
  consumer_secret: process.env.LEARNINGBOT_CONSUMER_SECRET,
  access_token: process.env.LEARNINGBOT_ACCESS_TOKEN,
  access_token_secret: process.env.LEARNINGBOT_ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000//for HTTP request
})

//TO TWIT WITH MY ACCOUNT
// bot.post('statuses/update', {status: "Hello world, using twit.js"}, function(err,data,response){
//   if(err) {
//      console.log(err);
//   } else {
//     console.log(data.text + 'was tweeted.');
//   }
// })

bot.get('followers/ids', {screen_name: 'bots_with_han'}, function(err, data, response){
  if(err){
    console.log(err);
  } else {
    console.log(data);
  }
});