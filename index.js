var poems = [
    {
        "body": "Matsuo Basho (1644-1694)\nAutumn moonlight \u0096\n\na worm digs silently\ninto the chestnut.\n\n\nOld pond\n\na frog jumps\nthe sound of water", 
        "id": 0
    }, 
    {
        "body": "Kobayashi Issa (1763-1828)\nAutumn wind \u0096\n\nmountain\u2019s shadow\nwavers.\n\n\nDon\u2019t weep, insects \u0096\n\nLovers, stars themselves,\nMust part.", 
        "id": 1
    }, 
    {
        "body": "Masaoka Shiki (1867-1902)\nIn the coolness\n\nof the empty sixth-month sky...\nthe cuckoo\u2019s cry.\n\n\nthe tree cut,\n\ndawn breaks early\nat my little window", 
        "id": 2
    }, 
    {
        "body": "From Book of Haikus\nJack Kerouac (1922-1969)\nSnow in my shoe\n\nAbandoned\nSparrow\u2019s nest", 
        "id": 3
    }, 
    {
        "body": "From Haiku: This Other World\nRichard Wright (1908-1960)\nWhitecaps on the bay:\n\nA broken signboard banging\nIn the April wind.", 
        "id": 4
    }, 
    {
        "body": "From Selected Haiku\nNick Virgilio (1928-1989)\nLily:\n\nout of the water\nout of itself\n\n\nBass\n\npicking bugs\noff the moon", 
        "id": 5
    }, 
    {
        "body": "Don Eulert (1933-)\nquail excited\n\nin dirt turned up\nby a gopher\n\n\nground squirrel\n\nbalancing its tomato\non the garden fence", 
        "id": 6
    }, 
    {
        "body": "From After an Affair\nAlexis Rotella\nJust friends:\n\nhe watches my gauze dress\nblowing on the line.", 
        "id": 7
    }, 
    {
        "body": "From HSA Newsletter", 
        "id": 8
    }, 
    {
        "body": "Robert Yehling (1959- )\nA little boy sings\n\non a terrace, eyes aglow.\nRidge spills upward.", 
        "id": 9
    }
]
var pick_up_lines = [
    {
        "body": "[me != me]. [me += you].", 
        "id": 0
    }, 
    {
        "body": "A life without you, would be like a computer without an OS.", 
        "id": 1
    }, 
    {
        "body": "Anonymity makes me even more handsome.", 
        "id": 2
    }, 
    {
        "body": "Are you a computer keyboard? Because you're my type.", 
        "id": 3
    }, 
    {
        "body": "Are you a computer whiz\u2026 it seems you know how to turn my software to hardware.", 
        "id": 4
    }, 
    {
        "body": "Are you a double? The thought of you always floats inside my head.", 
        "id": 5
    }, 
    {
        "body": "Are you an angel, because your texture mapping is divine!", 
        "id": 6
    }, 
    {
        "body": "Are you an applet? You make me feel all GUI (gooey) inside.", 
        "id": 7
    }, 
    {
        "body": "Are you an exception? Let me catch you.", 
        "id": 8
    }, 
    {
        "body": "Are you my driver? Because you make my life worthwhile.", 
        "id": 9
    }, 
    {
        "body": "Are you sitting on the F5 key? Cause you are refreshing.", 
        "id": 10
    }, 
    {
        "body": "Are your pants a compressed file? Because I'd love to unzip them!", 
        "id": 11
    }, 
    {
        "body": "As of now, my mother doesn't have a Facebook account so, if we were to take this thing to the next level, you wouldn't have to worry about rejecting her inappropriate Family Request.", 
        "id": 12
    }, 
    {
        "body": "Baby are you a motherboard?, Cause I'd \"RAM\" you all night long.", 
        "id": 13
    }, 
    {
        "body": "Baby you know this junk isn't USB2.0..it's firewire!", 
        "id": 14
    }, 
    {
        "body": "Baby you must be Google Glasses, because you augment my reality", 
        "id": 15
    }, 
    {
        "body": "Baby you're so cute you made my page 404.", 
        "id": 16
    }, 
    {
        "body": "Baby, if they made you in C, you would have a pointer to my heart.", 
        "id": 17
    }, 
    {
        "body": "Baby, if they made you in Java, you'd be the object of my desire.", 
        "id": 18
    }, 
    {
        "body": "Baby, if they made you in Java, you'd be the object of my desire.", 
        "id": 19
    }, 
    {
        "body": "Baby, there is no part of my body that is Micro or Soft", 
        "id": 20
    }, 
    {
        "body": "Baby, you make my floppy disk turn into a hard drive", 
        "id": 21
    }, 
    {
        "body": "Baby, you must be running a TCP protocol, since every time I talk to you, your body gives me an acknowledgment!", 
        "id": 22
    }, 
    {
        "body": "Baby, you overclock my processor.", 
        "id": 23
    }, 
    {
        "body": "Be the hard drive of my dreams.", 
        "id": 24
    }, 
    {
        "body": "Before you, I was a PC without a power outlet.", 
        "id": 25
    }, 
    {
        "body": "Can I stick my USB drive in your USB port?", 
        "id": 26
    }, 
    {
        "body": "Can you be my ActionListener? That way you notice everything that I do.", 
        "id": 27
    }, 
    {
        "body": "Can you be my private variable? I want to be the only one with access to you.", 
        "id": 28
    }, 
    {
        "body": "Come to my 127.0.0.1 and I\u2019ll give you sudo access.", 
        "id": 29
    }, 
    {
        "body": "Computer techs have skilled fingers if you know what I mean.", 
        "id": 30
    }, 
    {
        "body": "Could I borrow your smartphone? I need to post a Facebook status update that I've met the woman of my dreams, in order to make all the ex-girlfriends I'm still Facebook friends with jealous.", 
        "id": 31
    }, 
    {
        "body": "Could I have your I.P.?", 
        "id": 32
    }, 
    {
        "body": "Do u like me? Text '1\u2032 for 'Yes,' '2\u2032 for 'No.", 
        "id": 33
    }, 
    {
        "body": "Do you think we can make it a step more serious and disable network sharing?", 
        "id": 34
    }, 
    {
        "body": "Don't worry honey, they call it my dual-channel RAM.", 
        "id": 35
    }, 
    {
        "body": "Don't worry, the first couple of times it's always Abort, Retry, Fail.", 
        "id": 36
    }, 
    {
        "body": "Every once and a while two numbers meet, link, and become forever binary.", 
        "id": 37
    }, 
    {
        "body": "Girl, are you Wi-Fi? Cuz im feeling the connection!", 
        "id": 38
    }, 
    {
        "body": "Girl, you are an A++.", 
        "id": 39
    }, 
    {
        "body": "Girl, you are hotter than the bottom of my laptop.", 
        "id": 40
    }, 
    {
        "body": "Have you been Googling me? I've got my blog all tricked out with analytics and I think I've been seeing your IP address in them.", 
        "id": 41
    }, 
    {
        "body": "Here's my number: 0011 0011 1011  0001 0010 1000 0101", 
        "id": 42
    }, 
    {
        "body": "Hey baby, did you know I am wearing a C-String?", 
        "id": 43
    }, 
    {
        "body": "Hey baby, I'm a power source, and you're the kind of resistor i'd like to deliver my load to.", 
        "id": 44
    }, 
    {
        "body": "Hey Baby, Let me hack your kernel.", 
        "id": 45
    }, 
    {
        "body": "Hey baby, lets turn off our firewalls and connect our Ethernet cable.", 
        "id": 46
    }, 
    {
        "body": "Hey cutie! I have a processor, and if you have an empty slot on your motherboard.", 
        "id": 47
    }, 
    {
        "body": "Hey, how 'bout I take off your cover and insert a bigger CPU.", 
        "id": 48
    }, 
    {
        "body": "How about we do a little peer-to-peer saliva swapping?", 
        "id": 49
    }, 
    {
        "body": "How about we go home and you handle my exception?", 
        "id": 50
    }, 
    {
        "body": "How'd you like to come to MySpace so I can Twitpic your Yahoo until you tweet my Tumblr and I Google all over your Facebook!", 
        "id": 51
    }, 
    {
        "body": "How'd you like to come to MySpace so I can Twitter you with my Yahoo until I Google on your FaceBook?", 
        "id": 52
    }, 
    {
        "body": "I am a boolean method whose love will always return true.", 
        "id": 53
    }, 
    {
        "body": "I am a BufferedReader. You input meaning into my life.", 
        "id": 54
    }, 
    {
        "body": "I am the field attribute in your class: I can't exist unless you do.", 
        "id": 55
    }, 
    {
        "body": "I CAN HAS DA NASTY WIT U?", 
        "id": 56
    }, 
    {
        "body": "I didn't mean to ogle you, but I'd sure like to Google you.", 
        "id": 57
    }, 
    {
        "body": "I googled your name earlier... I clicked on 'I'm Feeling Lucky.'", 
        "id": 58
    }, 
    {
        "body": "I had to drop out of college because the $250,000,000 software company I started in my dorm room was taking up too much of my time. Can I buy you a PC?", 
        "id": 59
    }, 
    {
        "body": "I hope you're an ISO file, because I'd like to mount you.", 
        "id": 60
    }, 
    {
        "body": "I must be using Apple maps, because I keep getting lost in your eyes.", 
        "id": 61
    }, 
    {
        "body": "I need to hop over to Facebook for a second to change my status to smitten.", 
        "id": 62
    }, 
    {
        "body": "I output gibberish as you tap my keypad.", 
        "id": 63
    }, 
    {
        "body": "I think we should increase our bandwidth.", 
        "id": 64
    }, 
    {
        "body": "I think you could be an integral part of my project life cycle.", 
        "id": 65
    }, 
    {
        "body": "I think you're my compiler. My life wouldn't start without you.", 
        "id": 66
    }, 
    {
        "body": "I want all of our functions to be read/write.", 
        "id": 67
    }, 
    {
        "body": "I was hoping you wouldn't block my pop-up.", 
        "id": 68
    }, 
    {
        "body": "I was wondering if you'd like to go back to My-Space, so I can Twitter with your Yahoo, until I Google all over your Facebook?", 
        "id": 69
    }, 
    {
        "body": "I wish to uncompress you over *all* my disk space.", 
        "id": 70
    }, 
    {
        "body": "I wish you were Broadband, so I could get high-speed access.", 
        "id": 71
    }, 
    {
        "body": "I wish you were DSL so I could get high speed access.", 
        "id": 72
    }, 
    {
        "body": "I would love to stick my pins into your sockets.", 
        "id": 73
    }, 
    {
        "body": "I'd ask if you come here often, but I already stalk you on FourSquare.", 
        "id": 74
    }, 
    {
        "body": "I'd get a T3 to watch your streaming video.", 
        "id": 75
    }, 
    {
        "body": "I'd like to play on your laptop.", 
        "id": 76
    }, 
    {
        "body": "I'd switch to a Iphone for you.", 
        "id": 77
    }, 
    {
        "body": "I'd switch to emacs for you.", 
        "id": 78
    }, 
    {
        "body": "I'll always have cache for you.", 
        "id": 79
    }, 
    {
        "body": "I'll bet my hard drive is the biggest you've ever seen.", 
        "id": 80
    }, 
    {
        "body": "I'll have to try again tomorrow, because you've already exceeded my bandwidth.", 
        "id": 81
    }, 
    {
        "body": "I'm definitely in the range of your hotspot. How about you let me connect and get full access.", 
        "id": 82
    }, 
    {
        "body": "I'm overheating because you're stuck in my head like an infinite loop.", 
        "id": 83
    }, 
    {
        "body": "I've fully rebooted from my last relationship.", 
        "id": 84
    }, 
    {
        "body": "If I was an operating system, your process would have top priority.", 
        "id": 85
    }, 
    {
        "body": "If I were a method, you must be my parameter, because I will always need you.", 
        "id": 86
    }, 
    {
        "body": "If I were an assembly language, I'd jump to your address, shift right a bit, push it in, pop it out, load a byte into your accumulator, then jump if you're negative.", 
        "id": 87
    }, 
    {
        "body": "If I were an operating system, your process would be real-time priority.", 
        "id": 88
    }, 
    {
        "body": "If we were connected on Linkedin, I'd endorse you all night long.", 
        "id": 89
    }, 
    {
        "body": "If you ever need to get rid of a trojan, don't hesitate to call me!", 
        "id": 90
    }, 
    {
        "body": "If you have an empty slot, I have the card to fill it.", 
        "id": 91
    }, 
    {
        "body": "If you were a part of my domain, we could share cookies.", 
        "id": 92
    }, 
    {
        "body": "If you were a USB Port i'd stick my jump drive into you.", 
        "id": 93
    }, 
    {
        "body": "If you were a web browser, you'd be called a Fire-foxy lady", 
        "id": 94
    }, 
    {
        "body": "If you were an ebay auction, I'd totally 'buy it now'.", 
        "id": 95
    }, 
    {
        "body": "If you were an ISP I'd dial you all day long.", 
        "id": 96
    }, 
    {
        "body": "If you won't let me buy you a drink, at least let me fix your laptop.", 
        "id": 97
    }, 
    {
        "body": "Im not staring, Im stuck in a loop. (Logic: while (girl=hot, look))", 
        "id": 98
    }, 
    {
        "body": "Is your name Google? Because you have everything I've been searching for.", 
        "id": 99
    }, 
    {
        "body": "Is your name Wi-fi? Because I'm really feeling a connection.", 
        "id": 100
    }, 
    {
        "body": "Is your network encrypted? Im looking to hack.", 
        "id": 101
    }, 
    {
        "body": "Isn't your e-mail address [email\u00a0protected]/* <![CDATA[ */!function(t,e,r,n,c,a,p){try{t=document.currentScript||function(){for(t=document.getElementsByTagName('script'),e=t.length;e--;)if(t[e].getAttribute('data-cfhash'))return t[e]}();if(t&&(c=t.previousSibling)){p=t.parentNode;if(a=c.getAttribute('data-cfemail')){for(e='',r='0x'+a.substr(0,2)|0,n=2;a.length-n;n+=2)e+='%'+('0'+('0x'+a.substr(n,2)^r).toString(16)).slice(-2);p.replaceChild(document.createTextNode(decodeURIComponent(e)),c)}p.removeChild(t)}}catch(u){}}()/* ]]> */?", 
        "id": 102
    }, 
    {
        "body": "Let me be the 'throws Exception\u2019 to your 'public static void main (String[] args)\u2019. I will accept whatever you give me.", 
        "id": 103
    }, 
    {
        "body": "Let's interface our hardware.", 
        "id": 104
    }, 
    {
        "body": "Let's just cut to the chase, I wanna hotsync your PDA.", 
        "id": 105
    }, 
    {
        "body": "Living with you would be like living in a virtual reality.", 
        "id": 106
    }, 
    {
        "body": "Mind if I run a sniffer to see if your ports are open?", 
        "id": 107
    }, 
    {
        "body": "Most people say women are NP-complete, but if I get you into bed, I can solve you in polynomial time!", 
        "id": 108
    }, 
    {
        "body": "My 'up-time' is better than BSD.", 
        "id": 109
    }, 
    {
        "body": "My attraction for you is stronger than the magnetic forces inside of my hard disk.", 
        "id": 110
    }, 
    {
        "body": "My love for you cannot be measured with an int, not with a long, and not even with an array. It is out of bounds and infinite\u2026.", 
        "id": 111
    }, 
    {
        "body": "My love for you comes with no strings attached.", 
        "id": 112
    }, 
    {
        "body": "My love for you is a constant variable: unupdatable and unchangeable.", 
        "id": 113
    }, 
    {
        "body": "My love is a for loop without the increment operator\u2014 infinitive, non-terminating, and difficult to stop once it starts running.", 
        "id": 114
    }, 
    {
        "body": "My main method is 'public love iLoveYou().'", 
        "id": 115
    }, 
    {
        "body": "My name is #####, and I speak Klingon.", 
        "id": 116
    }, 
    {
        "body": "My servers never go down... but I do!", 
        "id": 117
    }, 
    {
        "body": "Need me to unzip your files?", 
        "id": 118
    }, 
    {
        "body": "Need me to unzip your files?", 
        "id": 119
    }, 
    {
        "body": "Nice Set of Floppies!", 
        "id": 120
    }, 
    {
        "body": "No GPU in the world could make you look hotter than you already are.", 
        "id": 121
    }, 
    {
        "body": "No kinky Windows stuff.", 
        "id": 122
    }, 
    {
        "body": "No matter how I sort things, you'll always be first.", 
        "id": 123
    }, 
    {
        "body": "No, that's not a iphone in my pants, but thanks for noticing.", 
        "id": 124
    }, 
    {
        "body": "No, that's not a Logitech MX-100 in my pants, but thanks for noticing.", 
        "id": 125
    }, 
    {
        "body": "No, that's not an iPod mini in my pocket. I'm just happy to see you.", 
        "id": 126
    }, 
    {
        "body": "Nobody turns me on from a cold boot like you.", 
        "id": 127
    }, 
    {
        "body": "Oh little processer of my desire!", 
        "id": 128
    }, 
    {
        "body": "No, that's not an iPod mini in my pocket. I'm just happy to see you.", 
        "id": 129
    }, 
    {
        "body": "Oh, you found out about my backups, didn't you?", 
        "id": 130
    }, 
    {
        "body": "Our Love Routines link perfectly.", 
        "id": 131
    }, 
    {
        "body": "Phone for you, I think it's your motherboard.", 
        "id": 132
    }, 
    {
        "body": "Press any key to continue.", 
        "id": 133
    }, 
    {
        "body": "Public class Your World extends My World.", 
        "id": 134
    }, 
    {
        "body": "Roses are #FF0000, violets are #0000FF. All my base are belong to you.", 
        "id": 135
    }, 
    {
        "body": "There is no cache, lets go straight to the hard drive.", 
        "id": 136
    }, 
    {
        "body": "There is no primitive data type that could possibly hold the number of things I would do to spend one night with you.", 
        "id": 137
    }, 
    {
        "body": "Trust me, I'm user friendly.", 
        "id": 138
    }, 
    {
        "body": "Want to come see my HARD Disk? I promise it isn't 3.5 inches and it ain't floppy.", 
        "id": 139
    }, 
    {
        "body": "Want to see my HARD Disk? I promise it isn't 3.5 inches and it ain't floppy.", 
        "id": 140
    }, 
    {
        "body": "Want to see my Red Hat?", 
        "id": 141
    }, 
    {
        "body": "We are an aggregation of classes: one cannot exist without the other.", 
        "id": 142
    }, 
    {
        "body": "We can make beautiful .wav files together.", 
        "id": 143
    }, 
    {
        "body": "WebMD says your love is contagious.", 
        "id": 144
    }, 
    {
        "body": "Well, if that's how you feel, I guess it's time to upgrade.", 
        "id": 145
    }, 
    {
        "body": "Well, now you've gone and killed my process.", 
        "id": 146
    }, 
    {
        "body": "What do you say we play a game of \"Words With More Than Friends?\"", 
        "id": 147
    }, 
    {
        "body": "What's a nice girl like you doing in a chat room like this?", 
        "id": 148
    }, 
    {
        "body": "What's a nice girl like you doing in a chatroom like this?", 
        "id": 149
    }, 
    {
        "body": "What's the difference between a crush and a Facebook account? [what?] I'm not rapidly developing a Facebook account on you.", 
        "id": 150
    }, 
    {
        "body": "Where's the 'like' button for that smile?", 
        "id": 151
    }, 
    {
        "body": "while(myBAC >= 0.3) {YourHotness++; }", 
        "id": 152
    }, 
    {
        "body": "Why don't you come down to my basement apartment in my mom's house and see me sometime?", 
        "id": 153
    }, 
    {
        "body": "Would you like to enjoy my laptop, I promise I don't have any viruses...", 
        "id": 154
    }, 
    {
        "body": "Would you like to enjoy my laptop, I promise I don't have any viruses\u2026", 
        "id": 155
    }, 
    {
        "body": "You are a field in my class. You will always be protected.", 
        "id": 156
    }, 
    {
        "body": "You are my API. I want to know everything about you.", 
        "id": 157
    }, 
    {
        "body": "You are my increment operator. You make my value increase.", 
        "id": 158
    }, 
    {
        "body": "You are my initializer: without you, my life would point to nothing (null).", 
        "id": 159
    }, 
    {
        "body": "You are my loop condition. I keep coming back to you.", 
        "id": 160
    }, 
    {
        "body": "You are my methods. I am nothing without you.", 
        "id": 161
    }, 
    {
        "body": "You are my semicolon; always present in everything I do.", 
        "id": 162
    }, 
    {
        "body": "You are my superclass: you define what I can do.", 
        "id": 163
    }, 
    {
        "body": "You are so hot girl that when I first laid eyes on you, I reached a runtime error.", 
        "id": 164
    }, 
    {
        "body": "You are the Apple of my i-Mac.", 
        "id": 165
    }, 
    {
        "body": "You are the IDE of my life: I find it easier because of you.", 
        "id": 166
    }, 
    {
        "body": "You are the JDK (Java Development Kit) in my life. I won't compile without you.", 
        "id": 167
    }, 
    {
        "body": "You auto-complete me.", 
        "id": 168
    }, 
    {
        "body": "You can put a Trojan on my Hard Drive anytime", 
        "id": 169
    }, 
    {
        "body": "You defragment my life", 
        "id": 170
    }, 
    {
        "body": "You got me stuck on Caps Lock, if you know what I mean.", 
        "id": 171
    }, 
    {
        "body": "You had me at \"Hello World.\"", 
        "id": 172
    }, 
    {
        "body": "You have a trojan? hmm... I think I'll need to take a look at that backdoor.", 
        "id": 173
    }, 
    {
        "body": "You have nice syntax.", 
        "id": 174
    }, 
    {
        "body": "You look familiar. What's your Twitter handle? I think I follow you.", 
        "id": 175
    }, 
    {
        "body": "You make me want to calibrate my joystick without the latest drivers", 
        "id": 176
    }, 
    {
        "body": "You make my software turn into hardware!", 
        "id": 177
    }, 
    {
        "body": "You must be tired because you've been streaming through my RSS feed all day\u2026", 
        "id": 178
    }, 
    {
        "body": "You must be Windows 95 because you have me so unstable.", 
        "id": 179
    }, 
    {
        "body": "You put the SPARC in my workstation.", 
        "id": 180
    }, 
    {
        "body": "You still use Internet Explorer? You must like it nice and slow.", 
        "id": 181
    }, 
    {
        "body": "You totally spiked my traffic.", 
        "id": 182
    }, 
    {
        "body": "You turn my floppy disk in to a hard drive", 
        "id": 183
    }, 
    {
        "body": "You want to learn about computers huh, you've already passed the first lesson \"Turning Me On\"", 
        "id": 184
    }, 
    {
        "body": "You're hotter then the bottom of my laptop.", 
        "id": 185
    }, 
    {
        "body": "You're making me feel like I have something in common with these pop-up ads.", 
        "id": 186
    }, 
    {
        "body": "You're so pretty, I wouldn't even need to use an Instagram filter if I took your photo.", 
        "id": 187
    }, 
    {
        "body": "You've stolen the ASCII to my heart.", 
        "id": 188
    }, 
    {
        "body": "Your beauty rivals the graphics of Call of Duty.", 
        "id": 189
    }, 
    {
        "body": "Your beauty rivals the graphics of MW3.", 
        "id": 190
    }, 
    {
        "body": "Your eyes are far more gorgeous than any source code I have ever seen.", 
        "id": 191
    }, 
    {
        "body": "Your homepage or mine?", 
        "id": 192
    }, 
    {
        "body": "YouTube Myspace and I'll Google your Yahoo!", 
        "id": 193
    }
]
var horror_2_lines = [
    {
        "body": "One I heard a while ago. Not taking credit for this.\n\n\"Growing up with cats and dogs, I got used to the sounds of scratching at my door while I slept. Now that I live alone, it is much more unsettling.\"", 
        "id": 0
    }, 
    {
        "body": "My grandmother told me that it was a gift to see the angel of death in front of people's houses, to know that he'd be collecting someone there soon. I thought it was a gift too, up until the day I began to see it in front of every house.", 
        "id": 1
    }, 
    {
        "body": "My sister says that mommy killed her. Mommy says that I don't have a sister.", 
        "id": 2
    }, 
    {
        "body": "I begin tucking him into bed and he tells me, \u201cDaddy check for monsters under my bed.\u201d I look underneath for his amusement and see him, another him, under the bed, staring back at me quivering and whispering, \u201cDaddy there\u2019s somebody on my bed.\u201d\n\n-Juan J Ruiz", 
        "id": 3
    }, 
    {
        "body": "Yesterday my parents told me I was too old for an imaginary friend and that I had to let her go. They found her body this morning.", 
        "id": 4
    }, 
    {
        "body": "Don't be scared of the monsters, just look for them. Look to your left, to your right, under your bed, behind your dresser, in your closet but never look up, she hates being seen.", 
        "id": 5
    }, 
    {
        "body": "I can't move, breathe, speak or hear and it's so dark all the time. If I knew it would be this lonely, I would have been cremated instead.", 
        "id": 6
    }, 
    {
        "body": "For years we heard the little voices and footsteps of the ghost children in our old farmhouse, and we got used to them.  Then one day they went quiet, which should have been our own cue to leave.", 
        "id": 7
    }, 
    {
        "body": "The doctors told the amputee he might experience a phantom limb from time to time. Nobody prepared him for the moments though, when he felt cold fingers brush across his phantom hand.", 
        "id": 8
    }, 
    {
        "body": "I woke up to hear knocking on glass. At first, I though it was the window until I heard it come from the mirror again.", 
        "id": 9
    }, 
    {
        "body": "They celebrated the first successful cryogenic freezing. He had no way of letting them know he was still conscious.", 
        "id": 10
    }, 
    {
        "body": "When I finally grabbed her in the darkness, I swam back to the surface. It never occurred to me how fast the ice could freeze over.", 
        "id": 11
    }, 
    {
        "body": "The operation wasn't successful in the traditional sense since my sight didn't return, but it left me with the ability to distinguish heat signatures, at least.\nThree weeks have passed and I'm still not sure how to politely ask my best friend why he's room temperature.", 
        "id": 12
    }, 
    {
        "body": "I wish I could remember whose these people are. They tell me I have Alzheimers.", 
        "id": 13
    }, 
    {
        "body": "\"I can't sleep\" she whispered, crawling into bed with me.  I woke up cold, clutching the dress she was buried in.", 
        "id": 14
    }, 
    {
        "body": "After so many years living alone in this large house I came to a startling revelation. In this time I had closed far more doors than I had opened.  ", 
        "id": 15
    }, 
    {
        "body": "There was a picture in my phone of me sleeping. I live alone.", 
        "id": 16
    }, 
    {
        "body": "The last thing I saw was my alarm clock flashing 12:07 before she pushed her long rotting nails through my chest, her other hand muffling my screams.  \n\nI sat bolt upright, relieved it was only a dream, but as I saw my alarm clock read 12:06, I heard my closet door creak open.", 
        "id": 17
    }, 
    {
        "body": "Years ago, a lone chair appeared in the center of the basement, and no matter how many times I put it back in the corner it always found a way back to the center.  It took a long time to realize it was positioned underneath the kitchen, almost like someone had taken a seat at the dinner table with the rest of us.", 
        "id": 18
    }, 
    {
        "body": "You know that weird, full-body twitch you get sometimes when you're falling asleep? If there was a camera pointed at you, and you saw what it captured at that moment, you'd never sleep again. ", 
        "id": 19
    }, 
    {
        "body": "They delivered the mannequins in bubble wrap. From the main room I begin to hear popping.", 
        "id": 20
    }, 
    {
        "body": "The longer I wore it the more it grew on me. She had such pretty skin.", 
        "id": 21
    }, 
    {
        "body": "After struggling desperately to move any part of his paralytic body just to alert the doctors that he was conscious before they made the first incision, he was relieved to see that one of the nurses had noticed his pupils dilating from the bright light. She leaned in close and, in a whisper that tickled his ear, said \"you think we don't know you're awake?\"", 
        "id": 22
    }, 
    {
        "body": "It sat on my shelf, with thoughtless porcelain eyes and the prettiest pink doll dress I could find. Why did she have to be born still?", 
        "id": 23
    }, 
    {
        "body": "She wondered why she was casting two shadows. Afterall, there was only a single lightbulb. ", 
        "id": 24
    }, 
    {
        "body": "\"You stupid bastard!\" I cried as he tied me to the rails, \"don't you know this line has been abandoned for years!\" \"Of course I know\", he said, walking away, \"no one comes here at all.\"", 
        "id": 25
    }, 
    {
        "body": "Working the night shift alone tonight. There is a face in the cellar staring at the security camera.", 
        "id": 26
    }, 
    {
        "body": "If you like these types of stories you should join us on /r/shortscarystories.", 
        "id": 27
    }, 
    {
        "body": "I wake up and everything feels wrong; it's too quiet outside. I look out the window and see everyone standing still, looking at my house.\n\nEdit: Grammar and stuff. ", 
        "id": 28
    }, 
    {
        "body": "It's been watching me for hours now... Sometimes I catch glimpses of its reflexion on the computer screen, but I dare not turn around...", 
        "id": 29
    }, 
    {
        "body": "The grinning face stared at me from the darkness beyond my bedroom window. I live on the 14th floor.", 
        "id": 30
    }, 
    {
        "body": "He came to my door near sunset, and put his cold hand in mine, whispering that he had seen \"*it*\" as he fell to the ground, dead.\n\nWe still don't know how he got out of the morgue.", 
        "id": 31
    }, 
    {
        "body": "They say practicing smiling in front of a mirror makes you feel happier.\nI wish my reflection would join along.", 
        "id": 32
    }, 
    {
        "body": "Try six words\n\nI just saw my reflection blink.", 
        "id": 33
    }, 
    {
        "body": "Put back the mirrors. We miss watching you.", 
        "id": 34
    }, 
    {
        "body": "Attending his funeral today was really scary. It might have been the constant muffled screams I heard or the worry of someone noticing the dirt on my hands.", 
        "id": 35
    }, 
    {
        "body": "Being buried alive was bad enough. Realizing I wasn't alone in my own grave was worse.\n\nEdit: Wow, this blew up unexpectedly. Thanks for making an aspiring writer feel loved Reddit &lt;3", 
        "id": 36
    }, 
    {
        "body": "Pet shelters close. Beef strangely cheaper.", 
        "id": 37
    }, 
    {
        "body": "Back against the door, desperately trying to keep the voracious dead out, I looked in the mirror.  My reflection raised his hand in goodbye and smiled sadly, never to be needed again.", 
        "id": 38
    }, 
    {
        "body": "I was having a pleasant dream when what sounded like hammering woke me. After that, I could barely hear the muffled sound of dirt covering the coffin over my own screams.", 
        "id": 39
    }, 
    {
        "body": "My daughter won't stop crying and screaming in the middle of the night. I visit her grave and ask her to stop, but it doesn't help.", 
        "id": 40
    }, 
    {
        "body": "She asked why I was breathing so heavily.  I wasn't.", 
        "id": 41
    }, 
    {
        "body": "You get home, tired after a long day's work and ready for a relaxing night alone. You reach for the light switch, but another hand is already there.", 
        "id": 42
    }, 
    {
        "body": "My grandfather, who died of Alzheimers several years ago, refused to let the house lights be turned off at night. The light, he offered, was the only thing keeping the dark men away.\n\nWhat terrifies me about those two sentences is that they're true. The lights didn't go off in that house at night for three months.", 
        "id": 43
    }, 
    {
        "body": "Day 312. Internet still not working.", 
        "id": 44
    }, 
    {
        "body": "It's behind you.\n\nIt's *always* behind you... but nobody else can see it.", 
        "id": 45
    }, 
    {
        "body": "You wake up.  She doesn't.", 
        "id": 46
    }, 
    {
        "body": "Neatly laid across my dining room table, I found a dull kitchen knife, a torn, crusty rag, and a Flip video camera which seemed to be recording. I own none of these items.", 
        "id": 47
    }, 
    {
        "body": "I always liked this picture of my great-grandmother.  Why does she seem closer to the camera than before?", 
        "id": 48
    }, 
    {
        "body": "Dan's time machine was complete, but there was a slight glitch.  Dan's time machine was complete, but there was a slight glitch.", 
        "id": 49
    }, 
    {
        "body": "When next you are completely alone, imagine you are listening to a sound of some kind. \n\nWhen that sounds seems to stop, you'll know that you've been noticed.", 
        "id": 50
    }, 
    {
        "body": "The trains were delayed today.\nThere's something in the tunnels.", 
        "id": 51
    }, 
    {
        "body": "He Even reads over my Letters to make sure i spelled everything Perfectly. although My capitalization isn\u2019t Excellent yet.", 
        "id": 52
    }, 
    {
        "body": "Most laugh tracks were recorded in the early 70's, and most of those people are dead now. That means the dead are laughing at us. ", 
        "id": 53
    }, 
    {
        "body": "The lady with the mangled bleeding face chased you in the staircase up to the buildings roof. You jump off, turn your head to the right, and see her falling next to you.\n\nThis was an actual dream I had. I woke up short of breath.", 
        "id": 54
    }, 
    {
        "body": "His reputation as the best surgeon in the world is well-deserved.  In a lesser talent's hands, I would have died weeks ago and escaped his revenge.", 
        "id": 55
    }, 
    {
        "body": "You lay down in bed and turn your lights off. When you move your hand, you feel seaweed, followed by a whisper that says \"I'm ooooolllld Greeeeeggg\".\n\nEdit: Thanks for the Gold. I've only been redditing for a month so now i have to figure out what that even means.", 
        "id": 56
    }, 
    {
        "body": "I'm sorry. We ran out of breadsticks.", 
        "id": 57
    }, 
    {
        "body": "I ignore the sound of my room mate tapping on the door, asking me to let him in. I ignore it as I watch him sleep on the other side of the room", 
        "id": 58
    }, 
    {
        "body": "You start to drift off into a comfortable sleep when you hear your name being whispered. You live alone.", 
        "id": 59
    }, 
    {
        "body": "You're the last woman alive on Earth and you knock on a door. Guy inside doesn't answer it.", 
        "id": 60
    }, 
    {
        "body": "Julia: I love you.\nRichard: I love you too, Maria.", 
        "id": 61
    }, 
    {
        "body": "I never go to sleep. But I keep waking up. ", 
        "id": 62
    }, 
    {
        "body": "I kiss my wife and daughter goodnight before I go to sleep. When I wake up, I'm in a padded room and the nurses tell me it was just a dream.", 
        "id": 63
    }
]

var motivateJSON = [
    {
        "body": "Life isn\u2019t about getting and having, it\u2019s about giving and being., Kevin Kruse\n", 
        "id": 0
    }, 
    {
        "body": "Whatever the mind of man can conceive and believe, it can achieve., Napoleon Hill\n", 
        "id": 1
    }, 
    {
        "body": "Strive not to be a success, but rather to be of value., Albert Einstein\n", 
        "id": 2
    }, 
    {
        "body": "Two roads diverged in a wood, and I\u2014I took the one less traveled by, And that has made all the difference., Robert Frost\n", 
        "id": 3
    }, 
    {
        "body": "I attribute my success to this: I never gave or took any excuse., Florence Nightingale\n", 
        "id": 4
    }, 
    {
        "body": "You miss 100% of the shots you don\u2019t take., Wayne Gretzky\n", 
        "id": 5
    }, 
    {
        "body": "I\u2019ve missed more than 9000 shots in my career. I\u2019ve lost almost 300 games. 26 times I\u2019ve been trusted to take the game winning shot and missed. I\u2019ve failed over and over and over again in my life. And that is why I succeed., Michael Jordan\n", 
        "id": 6
    }, 
    {
        "body": "The most difficult thing is the decision to act, the rest is merely tenacity., Amelia Earhart\n", 
        "id": 7
    }, 
    {
        "body": "Every strike brings me closer to the next home run., Babe Ruth\n", 
        "id": 8
    }, 
    {
        "body": "Definiteness of purpose is the starting point of all achievement., W. Clement Stone\n", 
        "id": 9
    }, 
    {
        "body": "We must balance conspicuous consumption with conscious capitalism., Kevin Kruse\n", 
        "id": 10
    }, 
    {
        "body": "Life is what happens to you while you\u2019re busy making other plans., John Lennon\n", 
        "id": 11
    }, 
    {
        "body": "We become what we think about., Earl Nightingale\n", 
        "id": 12
    }, 
    {
        "body": "14.Twenty years from now you will be more disappointed by the things that you didn\u2019t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover., Mark Twain\n", 
        "id": 13
    }, 
    {
        "body": "15.Life is 10% what happens to me and 90% of how I react to it., Charles Swindoll\n", 
        "id": 14
    }, 
    {
        "body": "The most common way people give up their power is by thinking they don\u2019t have any., Alice Walker\n", 
        "id": 15
    }, 
    {
        "body": "The mind is everything. What you think you become., Buddha\n", 
        "id": 16
    }, 
    {
        "body": "The best time to plant a tree was 20 years ago. The second best time is now., Chinese Proverb\n", 
        "id": 17
    }, 
    {
        "body": "An unexamined life is not worth living., Socrates\n", 
        "id": 18
    }, 
    {
        "body": "Eighty percent of success is showing up., Woody Allen\n", 
        "id": 19
    }, 
    {
        "body": "Your time is limited, so don\u2019t waste it living someone else\u2019s life., Steve Jobs\n", 
        "id": 20
    }, 
    {
        "body": "Winning isn\u2019t everything, but wanting to win is., Vince Lombardi\n", 
        "id": 21
    }, 
    {
        "body": "I am not a product of my circumstances. I am a product of my decisions., Stephen Covey\n", 
        "id": 22
    }, 
    {
        "body": "Every child is an artist.  The problem is how to remain an artist once he grows up., Pablo Picasso\n", 
        "id": 23
    }, 
    {
        "body": "You can never cross the ocean until you have the courage to lose sight of the shore., Christopher Columbus\n", 
        "id": 24
    }, 
    {
        "body": "I\u2019ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel., Maya Angelou\n", 
        "id": 25
    }, 
    {
        "body": "Either you run the day, or the day runs you., Jim Rohn\n", 
        "id": 26
    }, 
    {
        "body": "Whether you think you can or you think you can\u2019t, you\u2019re right., Henry Ford\n", 
        "id": 27
    }, 
    {
        "body": "The two most important days in your life are the day you are born and the day you find out why., Mark Twain\n", 
        "id": 28
    }, 
    {
        "body": "Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it., Johann Wolfgang von Goethe\n", 
        "id": 29
    }, 
    {
        "body": "The best revenge is massive success., Frank Sinatra\n", 
        "id": 30
    }, 
    {
        "body": "People often say that motivation doesn\u2019t last. Well, neither does bathing.  That\u2019s why we recommend it daily., Zig Ziglar\n", 
        "id": 31
    }, 
    {
        "body": "Life shrinks or expands in proportion to one\u2019s courage., Anais Nin\n", 
        "id": 32
    }, 
    {
        "body": "If you hear a voice within you say \u201cyou cannot paint,\u201d then by all means paint and that voice will be silenced., Vincent Van Gogh\n", 
        "id": 33
    }, 
    {
        "body": "There is only one way to avoid criticism: do nothing, say nothing, and be nothing., Aristotle\n", 
        "id": 34
    }, 
    {
        "body": "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you., Jesus\n", 
        "id": 35
    }, 
    {
        "body": "The only person you are destined to become is the person you decide to be., Ralph Waldo Emerson\n", 
        "id": 36
    }, 
    {
        "body": "Go confidently in the direction of your dreams.  Live the life you have imagined., Henry David Thoreau\n", 
        "id": 37
    }, 
    {
        "body": "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me., Erma Bombeck\n", 
        "id": 38
    }, 
    {
        "body": "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him., Booker T. Washington\n", 
        "id": 39
    }, 
    {
        "body": "Certain things catch your eye, but pursue only those that capture the heart.,  Ancient Indian Proverb\n", 
        "id": 40
    }, 
    {
        "body": "Believe you can and you\u2019re halfway there., Theodore Roosevelt\n", 
        "id": 41
    }, 
    {
        "body": "Everything you\u2019ve ever wanted is on the other side of fear., George Addair\n", 
        "id": 42
    }, 
    {
        "body": "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light., Plato\n", 
        "id": 43
    }, 
    {
        "body": "Teach thy tongue to say, \u201cI do not know,\u201d and thous shalt progress., Maimonides\n", 
        "id": 44
    }, 
    {
        "body": "Start where you are. Use what you have.  Do what you can., Arthur Ashe\n", 
        "id": 45
    }, 
    {
        "body": "When I was 5 years old, my mother always told me that happiness was the key to life.  When I went to school, they asked me what I wanted to be when I grew up.  I wrote down \u2018happy\u2019.  They told me I didn\u2019t understand the assignment, and I told them they didn\u2019t understand life., John Lennon\n", 
        "id": 46
    }, 
    {
        "body": "Fall seven times and stand up eight., Japanese Proverb\n", 
        "id": 47
    }, 
    {
        "body": "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us., Helen Keller\n", 
        "id": 48
    }, 
    {
        "body": "Everything has beauty, but not everyone can see., Confucius\n", 
        "id": 49
    }, 
    {
        "body": "How wonderful it is that nobody need wait a single moment before starting to improve the world., Anne Frank\n", 
        "id": 50
    }, 
    {
        "body": "When I let go of what I am, I become what I might be., Lao Tzu\n", 
        "id": 51
    }, 
    {
        "body": "Life is not measured by the number of breaths we take, but by the moments that take our breath away., Maya Angelou\n", 
        "id": 52
    }, 
    {
        "body": "Happiness is not something readymade.  It comes from your own actions., Dalai Lama\n", 
        "id": 53
    }, 
    {
        "body": "If you\u2019re offered a seat on a rocket ship, don\u2019t ask what seat! Just get on., Sheryl Sandberg\n", 
        "id": 54
    }, 
    {
        "body": "First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end., Aristotle\n", 
        "id": 55
    }, 
    {
        "body": "If the wind will not serve, take to the oars., Latin Proverb\n", 
        "id": 56
    }, 
    {
        "body": "You can\u2019t fall if you don\u2019t climb.  But there\u2019s no joy in living your whole life on the ground., Unknown\n", 
        "id": 57
    }, 
    {
        "body": "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained., Marie Curie\n", 
        "id": 58
    }, 
    {
        "body": "Too many of us are not living our dreams because we are living our fears., Les Brown\n", 
        "id": 59
    }, 
    {
        "body": "Challenges are what make life interesting and overcoming them is what makes life meaningful., Joshua J. Marine\n", 
        "id": 60
    }, 
    {
        "body": "If you want to lift yourself up, lift up someone else., Booker T. Washington\n", 
        "id": 61
    }, 
    {
        "body": "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do., Leonardo da Vinci\n", 
        "id": 62
    }, 
    {
        "body": "Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless., Jamie Paolinetti\n", 
        "id": 63
    }, 
    {
        "body": "You take your life in your own hands, and what happens? A terrible thing, no one to blame., Erica Jong\n", 
        "id": 64
    }, 
    {
        "body": "What\u2019s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do., Bob Dylan\n", 
        "id": 65
    }, 
    {
        "body": "I didn\u2019t fail the test. I just found 100 ways to do it wrong., Benjamin Franklin\n", 
        "id": 66
    }, 
    {
        "body": "In order to succeed, your desire for success should be greater than your fear of failure., Bill Cosby\n", 
        "id": 67
    }, 
    {
        "body": "A person who never made a mistake never tried anything new.,  Albert Einstein\n", 
        "id": 68
    }, 
    {
        "body": "The person who says it cannot be done should not interrupt the person who is doing it., Chinese Proverb\n", 
        "id": 69
    }, 
    {
        "body": "There are no traffic jams along the extra mile., Roger Staubach\n", 
        "id": 70
    }, 
    {
        "body": "It is never too late to be what you might have been., George Eliot\n", 
        "id": 71
    }, 
    {
        "body": "You become what you believe., Oprah Winfrey\n", 
        "id": 72
    }, 
    {
        "body": "I would rather die of passion than of boredom., Vincent van Gogh\n", 
        "id": 73
    }, 
    {
        "body": "A truly rich man is one whose children run into his arms when his hands are empty., Unknown\n", 
        "id": 74
    }, 
    {
        "body": "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings., Ann Landers\n", 
        "id": 75
    }, 
    {
        "body": "If you want your children to turn out well, spend twice as much time with them, and half as much money., Abigail Van Buren\n", 
        "id": 76
    }, 
    {
        "body": "Build your own dreams, or someone else will hire you to build theirs., Farrah Gray\n", 
        "id": 77
    }, 
    {
        "body": "The battles that count aren\u2019t the ones for gold medals. The struggles within yourself\u2013the invisible battles inside all of us\u2013that\u2019s where it\u2019s at., Jesse Owens\n", 
        "id": 78
    }, 
    {
        "body": "Education costs money.  But then so does ignorance., Sir Claus Moser\n", 
        "id": 79
    }, 
    {
        "body": "I have learned over the years that when one\u2019s mind is made up, this diminishes fear., Rosa Parks\n", 
        "id": 80
    }, 
    {
        "body": "It does not matter how slowly you go as long as you do not stop., Confucius\n", 
        "id": 81
    }, 
    {
        "body": "If you look at what you have in life, you\u2019ll always have more. If you look at what you don\u2019t have in life, you\u2019ll never have enough., Oprah Winfrey\n", 
        "id": 82
    }, 
    {
        "body": "Remember that not getting what you want is sometimes a wonderful stroke of luck., Dalai Lama\n", 
        "id": 83
    }, 
    {
        "body": "You can\u2019t use up creativity.  The more you use, the more you have., Maya Angelou\n", 
        "id": 84
    }, 
    {
        "body": "Dream big and dare to fail., Norman Vaughan\n", 
        "id": 85
    }, 
    {
        "body": "Our lives begin to end the day we become silent about things that matter., Martin Luther King Jr.\n", 
        "id": 86
    }, 
    {
        "body": "Do what you can, where you are, with what you have., Teddy Roosevelt\n", 
        "id": 87
    }, 
    {
        "body": "If you do what you\u2019ve always done, you\u2019ll get what you\u2019ve always gotten., Tony Robbins\n", 
        "id": 88
    }, 
    {
        "body": "Dreaming, after all, is a form of planning., Gloria Steinem\n", 
        "id": 89
    }, 
    {
        "body": "It\u2019s your place in the world; it\u2019s your life. Go on and do all you can with it, and make it the life you want to live., Mae Jemison\n", 
        "id": 90
    }, 
    {
        "body": "You may be disappointed if you fail, but you are doomed if you don\u2019t try., Beverly Sills\n", 
        "id": 91
    }, 
    {
        "body": "Remember no one can make you feel inferior without your consent., Eleanor Roosevelt\n", 
        "id": 92
    }, 
    {
        "body": "Life is what we make it, always has been, always will be., Grandma Moses\n", 
        "id": 93
    }, 
    {
        "body": "The question isn\u2019t who is going to let me; it\u2019s who is going to stop me., Ayn Rand\n", 
        "id": 94
    }, 
    {
        "body": "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it., Henry Ford\n", 
        "id": 95
    }, 
    {
        "body": "It\u2019s not the years in your life that count. It\u2019s the life in your years., Abraham Lincoln\n", 
        "id": 96
    }, 
    {
        "body": "Change your thoughts and you change your world., Norman Vincent Peale\n", 
        "id": 97
    }, 
    {
        "body": "Either write something worth reading or do something worth writing., Benjamin Franklin\n", 
        "id": 98
    }, 
    {
        "body": "Nothing is impossible, the word itself says, \u201cI\u2019m possible!\u201d, \u2013Audrey Hepburn\n", 
        "id": 99
    }, 
    {
        "body": "The only way to do great work is to love what you do., Steve Jobs\n", 
        "id": 100
    }, 
    {
        "body": "If you can dream it, you can achieve it., Zig Ziglar\n", 
        "id": 101
    }
]

// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function (event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);

        /**
         * Uncomment this if statement and populate with your skill's application ID to
         * prevent someone else from configuring a skill that sends requests to this function.
         */
     
//     if (event.session.application.applicationId !== "amzn1.echo-sdk-ams.app.05aecccb3-1461-48fb-a008-822ddrt6b516") {
//         context.fail("Invalid Application ID");
//      }

        if (event.session.new) {
            onSessionStarted({requestId: event.request.requestId}, event.session);
        }

        if (event.request.type === "LaunchRequest") {
            onLaunch(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "IntentRequest") {
            onIntent(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "SessionEndedRequest") {
            onSessionEnded(event.request, event.session);
            context.succeed();
        }
    } catch (e) {
        context.fail("Exception: " + e);
    }
};

/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    console.log("onSessionStarted requestId=" + sessionStartedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // add any session init logic here
}

/**
 * Called when the user invokes the skill without specifying what they want.
 */
function onLaunch(launchRequest, session, callback) {
    console.log("onLaunch requestId=" + launchRequest.requestId
        + ", sessionId=" + session.sessionId);

    var cardTitle = "Hello, World!"
    var speechOutput = "I did not understand you"
    callback(session.attributes,
        buildSpeechletResponse(cardTitle, speechOutput, "", true));
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, callback) {
    console.log("onIntent requestId=" + intentRequest.requestId
        + ", sessionId=" + session.sessionId);

    var intent = intentRequest.intent,
        intentName = intentRequest.intent.name;

    // dispatch custom intents to handlers here
    if (intentName == 'TestIntent') {
        handleTestRequest(intent, session, callback);
    }
    else {
        throw "Invalid intent";
    }
}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {
    console.log("onSessionEnded requestId=" + sessionEndedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // Add any cleanup logic here
}

function handleTestRequest(intent, session, callback) {
    var intentSlots = intent.slots;
    var intentSlotsIntent = intentSlots.intent;
    var intentSlotsIntentValue = intentSlotsIntent.value;
    if (intentSlotsIntentValue == "scare"){
        var index = Math.round(64 * Math.random());
        var actual_story = horror_2_lines[index].body;
        callback(session.attributes,
            buildSpeechletResponseWithoutCard(actual_story, "", "true"));
        
    }
    else if(intentSlotsIntentValue == "motivate"){
        var indexMotivate = Math.round(99 * Math.random());
        var actual = motivateJSON[indexMotivate].body;
        
        callback(session.attributes,
            buildSpeechletResponseWithoutCard(actual, "", "true"));
    }
    else if(intentSlotsIntentValue == "flirt with"){
        var indexPickUp = Math.round(192 * Math.random());
        var actualPickUp = pick_up_lines[indexPickUp].body;
        
        callback(session.attributes,
            buildSpeechletResponseWithoutCard(actualPickUp, "", "true"));    
    }
    
    else if(intentSlotsIntentValue == "recite"){
        var indexPoem = Math.round(9 * Math.random());
        var actualPoem = poems[indexPoem].body;
        
        callback(session.attributes,
            buildSpeechletResponseWithoutCard(actualPoem, "", "true")); 
    }
}

// ------- Helper functions to build responses -------

function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        card: {
            type: "Simple",
            title: title,
            content: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildSpeechletResponseWithoutCard(output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    };
}
