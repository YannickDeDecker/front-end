const Twit = require('twit');

var T = new Twit({
consumer_key: 'xxxx',
consumer_secret: 'xxxx',
access_token: 'xxxx-xxxx',
access_token_secret: 'xxxxxx',
timeout_ms: 60*1000, // optional HTTP request timeout to apply to all requests.
strictSSL: true, // optional - requires SSL certificates to be valid.
})

T.get('search/tweets',{q:'usa',count:1},(err,data,res)=>{
//console.log(data.statuses) // response of twitterAPI
let x = data.statuses[0];
let username= x.user.screen_name;
let followers= x.user.followers_count
let tweetPostedDate = x.created_at
let profileLang = x.lang;
let tweet = x.text
let output = `
username: ${username}\n
profileLang: ${profileLang}\n
TweetDate: ${tweetPostedDate}\n
Tweet: ${tweet}
`
console.log(output)
})