// Code to generate lorem ipsum

function GetLoremIpsum() {
    
    var sentences = [
        "Is pussy a carb?",
        "The day you started lifting is the day you became forever small.",
        "We're all gonna make it bruhs.",
        "Am I still natty if I take creatine?",
        "Looking thick, solid, tight. Keep us updated with progress pics.",
        "Your pump is like riding two jet skis at the same time. Except one of them is a rinocheros that farts lightning and the other one is two jet skis.",
        "If you're on the smith machine you can re-rack it at any time. That's not how life works. You can't just re-rack life half-way through. You're a quitter.",
        "Do you even lift?",
        "Crossfit takes complicated movements and gets rid of all the useless shit like effectiveness and safety and replaces it with cool shit like uh, violence and danger.",
        "Deadlifting alone, is like trying to get pussy sober, you don't have the confidence for that.",
        "I had to skip leg day cause of the full moon tonight.",
        "I don't need to do legs, I run every other day.",
        "Asking someone to set their deadlifts down softer is like asking Mac Miller If he's ever tried not having down syndrome.",
        "The worst part by far about a rest day is being alone with yourself without a pump.",
        "Benching heavy without a spotter is a lot like using the pull-out method. You wanna push it to the limit, but it you go too hard your life is over.",
        "Squats are bad for your knees.",
        "How many grams of protein you eat in a day?",
        "Life's gonna give me another set. I know it will.",
        "When it started, America was just a handful of scrawny colonies. Now, it's the most buff, pumped-up country on the planet. That's pretty rad.",
        "You already big, but you could be bigger. You know? I'm big - I'mma be swole, though. Walk sideways through doors.",
        "I like a chick with a broad back, you know what I'm saying?",
        "I'm hot! I'm big!",
        "Slamming the weights, let's talk about that. Unless you're deadlifting a minimum of 315, the only sound I should be able to hear is you queefing midset.",
        "When you lift something, you use your muscles to move it through space and time.",
        "Getting your girl to lift is all about gentle physcological manipulation. It's a lot like doing anal.",
        "Cardio, ha ha yeah, nope.",
        "Just assume anyone bigger than you is on steroids.",
        "Upright rows...nobody knows the right way to do 'em, there's no wrong way, they're not called upwrong rows.",
        "The smith machine takes away a basic human instinct, the fear of death.",
        "Why do you hate enjoying things bro?",
        "I treat my legs like I treat my girlfriend, ignore them until they disappear.",
        "The pump is as satisfying to me as, uh, cumming is, you know? As, ah, having sex with a woman and cumming. And so can you believe how much I am in heaven? I am like, uh, getting the feeling of cumming in a gym, I'm getting the feeling of cumming at home, I'm getting the feeling of cumming backstage when I pump up, when I pose in front of 5,000 people, I get the same feeling, so I am cumming day and night. I mean, it's terrific. Right? So you know, I am in heaven.",
        "I'm trying to replace social skills with muscles.",
        "Overtraining is a lot like global warming. AKA, not real.",
        "It's not about how much you can lift, but about how much you look like you can lift.",
        "I don't have any weak points.",
        "The greatest feeling you can get in a gym, or the most satisfying feeling you can get in the gym is... The Pump. Let's say you train your biceps. Blood is rushing into your muscles and that's what we call The Pump. You muscles get a really tight feeling, like your skin is going to explode any minute, and it's really tight - it's like somebody blowing air into it, into your muscle. It just blows up, and it feels really different. It feels fantastic.",
        " Do you visualize yourself as a living sculpture?",
        "Maybe I should start wearing lifting gloves so I can continue to give my boyfriend smoth hand jobbs with my buttery man paws.",
        "Some people say deadlift is for leg day, other people say it's for back day, I say it's for another day fuck it I don't wanna deadlift today.",
        "Gotta confuse the muscles, right babe?",
        "Right babe?",
        "Small calves are the biggest source of male insecurity in the world.",
        "You have the upper body, but you don't have the lower body.",
        "I mean, you have the lower body, but you don't have the upper body.",
        "It takes 8 hours to get in a good arm workout.",
        "In the morning I look at myself and think, wow I'm a shredded kunt. At night I look at myself and think, wow I'm a fat piece of bloated shit.",
        "My message is to train hard, don't be a hard cunt, enjoy life and don't take yourself too seriously.",
        "I don't workout for chicks, i workout to create an aura, when i walk into a room, introduce myself to someone, go for a job interview, i love looking dominant, in charge, and in control.",
        "There are normal people. There are try hards. There are hard cunts. Then there are sick cunts. Sick cunts are the best, friendly, sexy, aesthetic, party hard and live it up without being staunch and get along with everyone.",
        "Become a sick cunt.",
        "At the end off the day bro you got to listen to this, if your a fucking shredded sick kunt you can get away with anything bro.",
        "Everyone has a little bit of Zyzz in them.",
        "Bro you should never train your back, I don't train mine because I can't see it.",
        "You 'mirin?",
        "Come at me bro.",
        "Why do you lift? Because my ego needed substance.",
        "Pretend, before each set, that someone is holding a gun to your head, and you must complete the set to survive.",
        "Attention is the primary source of muscle growth.",
        "Benching without touching your chest is like eating pussy with a dental dam.",
        "Ask not what you can do for your country, ask does your country even lift.",
        "Yeah I got a problem. I can still fit through doorways.",
        "Gym selfies are the most efficient use of your data.",
        "What's your favorite cheat meal? Steroids.",
        "Every time you get bigger, everyone else gets smaller.",
        "You compete?! Yeah, I compete.",
        "A pump is an impossible chase, you're Captain Ahab and your pump is Moby Dick.",
        "The back is the legs of the upper body.",
        "Sneak up on the weights, before gravity has a chance to make them heavy.",
        "If you wanna get really good at moving fast for an hour, then crossfit is for you.",
        "It sick. It piss.",
        "Something about autism.",
        "I don't want to get big you know, I just want to tone.",
        "I'm scared if I lift heavy I'll get too bulky.",
        "How much you bench?",
        "How much you squat?",
        "I recommend Starting Strength and gomad for two years. You need a solid foundation.",
        "I do abs at home.",
        "If women with muscles look like men, do men with no muscles look like women?",
        "Light weight baby!",
        "Ain't nuthin' but a peanut.",
        "Whatever it takes.",
        "Bent over rows before bent over hoes.",
        "Curls before girls.",
        "Quads before broads.",
        "Ham squeezes before slam pieces.",
        "Legs before kegs and before eggs if you know what I mean.",
        "Pecs before sex, catch my drift?",
        "Traps before tramps.",
        "Tri's before thighs unless you mean quads, in which case, thighs and tri's on the same day.",
        "Clean and jerk before jerk and clean, if you know what I mean",
        "Cardio before the party hoes as they say in Austria.",
        "Burpees before herpees.",
        "Make sure you snatch before da snatch, know what I'm sayin'?",
        "Barbells before southern belles, but dumbells are the same thing so I'm not sure...get it?",
        "Glutes before sloots.",
        "Core before whores.",
        "Lat rows before fat hoes.",
        "Chin-up curls before pin-up girls.",
        "Sit-ups before tit-fucks.",
        "Pec minors before you wreck minors...don't wreck minors.",
        "What is this, strong guys or something?",
        "Awesome pics. Great size. Look thick. Solid. Tight. Keep us all posted on your continued progress with any new progress pics or vid clips. Show us what you got man. Wanna see how freakin' huge, solid, thick and tight you can get. Thanks for the motivation."
        
        ];
        
    this.getSentence = function() {
        
        var sentence = sentences[Math.floor(Math.random() * sentences.length)];
        return sentence;
    }

    this.getParagraph = function() {
        
        var num = Math.floor(Math.random() * (5) + 4);
        var paragraph = "";
        
        for (var i = 0; i < num; i++) {
            paragraph += this.getSentence() + " ";
        }
        
        return paragraph;
    }

    this.generate = function(num) {
        var fullText = [];
        
        for (var i = 0; i < num; i++) {
            fullText.push(this.getParagraph());
        }
        
        return fullText;
    }
        
    
}


var loremIpsum = new GetLoremIpsum();


module.exports = loremIpsum;