## UCL Porticode 2016

Alexa is very formal. You cannot mess around it with and gives very straightforward answers most of the time. So we decided to build a skill for Alexa that allows her to be more informal with users. We called it Nancy because we invoke it by saying "Alexa, tell Nancy to do something".

## What it does
Nancy can recite poems, narrate 2 line horror stories, flirt with you and motivate you with inspirational quotes.

## How we built it
We are used Amazon Web Services to host a lambda function which does all the work. Alexa looks for the particular keywords like 'scare', 'motivate', 'flirt' and 'recite' when you say something to it. The keyword is then sent over to our lambda function which uses it query the approriate database (for 'scare' it would query the database containing horror stories, for 'motivate' it would query the database containing motivational quotes...you get the idea). Once a result is received a lambda response is sent back to Alexa which reads out the response. 

## Challenges we ran into
Scarping data from the internet was big challenge we had to over come. We had to alter our source code multiple times to scrap the appropriate data from different websties and return JSON data. Configuring Alexa was also a big challenge due to intermittent drops in WiFi. We spent 4 hours trying to figure out why Alexa would not pick up our skill only to find out that the account was in English US and Alexa was in English UK. Furthermore, due to Amazon's policy, our skill will only be fully downloadable to everybody once it has been reviewed by them.

