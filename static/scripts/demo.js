// when the first dropdown is changed, we want to change all the other ones
function updateDropdowns(){
    if($("#genInput1").val() == "image"){
        $("#genInput2").html(`
            <option value="cat"selected>of a cat</option>
            <option value="santa">of Santa Claus</option>
            <option value="apple">of an apple</option>
        `);

        $("#genInput3").html(`
            <option value="skateboard"selected>riding a skateboard.</option>
            <option value="beach">relaxing on the beach.</option>
            <option value="textbook">reading a textbook.</option>
        `);
    }

    else if($("#genInput1").val() == "write"){
        $("#genInput2").html(`
            <option value="quantum"selected>about quantum physics</option>
            <option value="dino">about dinosaurs</option>
            <option value="acro">about acrobatics</option>
        `);

        $("#genInput3").html(`
            <option value="pirate"selected>in the style of a pirate.</option>
            <option value="five">for five year olds.</option>
            <option value="shakespeare">as a shakespeare poem.</option>
        `);
    }
}

// list of pregenerated essays
const essays = {
    "quantum": {
        "pirate":[
            `
            Ahoy there, me hearties! Gather 'round as we embark on a treacherous journey into the mysterious waters of quantum physics, a realm as elusive and unpredictable as the tides themselves. Picture it, if ye will, a vast and boundless sea of subatomic particles, where the laws of the ordinary world be tossed overboard like a ship's anchor in a tempest.   
            In the world of quantum physics, me mateys, we be dealing with particles so small they make a fleck of sea spray look like a towering wave. These particles, known as quarks, electrons, and photons, be the buccaneers of the quantum realm, swashbuckling their way through the cosmic seas with a reckless abandon that leaves even the most seasoned sailors scratching their heads.
            One of the most peculiar aspects of quantum physics be the notion of superposition, a phenomenon that would make even the hardiest pirate question his grog intake. Imagine, me hearties, that a particle can exist in multiple states at once, like a ship caught between two parallel dimensions. It be as if a pirate could simultaneously be both a gentleman and a scoundrel, depending on the observer's perspective.
            But beware, for the quantum seas be treacherous, and uncertainty be lurking in every shadow. Heisenberg's uncertainty principle, a notorious rascal of a concept, declares that ye can never precisely know both the position and the momentum of a particle. It be like trying to chart a course through a foggy night without a compass—ye may have a general idea, but the details be shrouded in mystery.
            And what about entanglement, me hearties? This be the quantum equivalent of a pirate's code—two particles become entangled, and no matter how far apart they may roam, the actions of one be intimately tied to the other. It be as if two pirates, separated by the vastness of the ocean, could feel each other's every move without sending a single carrier pigeon.
            Now, me mateys, brace yerselves for the grand finale—the famed Schrödinger's cat experiment. In this mind-bending scenario, a cat be placed in a box with a vial of poison that may or may not be released based on the random decay of a radioactive atom. Until the box be opened, the cat be both alive and dead simultaneously. Aye, it be a paradox that challenges the very notion of reality, akin to sailing the seas and claiming both victory and defeat in a single breath.
            In conclusion, quantum physics be a realm of the bizarre, a mysterious sea where the rules of the ordinary world be as elusive as the fabled Fountain of Youth. So, me hearties, as ye set sail on the quantum seas, keep yer wits about ye, for the tides of uncertainty and the winds of superposition may lead ye to discoveries as fantastical as any tale told by a seasoned pirate of the high seas. Yo-ho-ho and a bottle of quantum grog!
            `,
            `
            Arr, me hearties! Gather 'round as we set sail on a treacherous voyage into the mysterious waters of quantum physics, the most enigmatic and mind-bogglin' realm in the vast sea of science. Avast ye, for this be a tale of particles and waves, of uncertainty and paradoxes, told in the swashbucklin' style of a true pirate!
            In the world of quantum physics, we be dealin' with particles so small, they be defyin' the laws of the ordinary world. These tiny scallywags, like electrons and photons, be actin' like slippery eels, both particles and waves at the same time. Aye, they be playin' tricks on us, confoundin' the sharpest minds of the seven seas.
            Now, me hearties, imagine ye be standin' on the edge of the plank, tryin' to measure the speed and position of these quantum critters. But lo and behold, the Heisenberg uncertainty principle be raisin' its cursed flag! Ye can't know both the speed and position with perfect accuracy – it be like tryin' to catch the wind in yer hands.
            But the real skull and crossbones in this quantum adventure be the infamous Schrödinger's cat. Picture this: a feline matey trapped in a box with a vile contraption that could release a deadly poison. Now, according to quantum theory, until ye open the box and spy on the cat, it be both alive and dead at the same time. Shiver me timbers! It be like playin' a game of chance with the very fabric of reality itself.
            And let's not forget the ghostly crew of quantum entanglement. These particles, once connected, be sharin' information faster than Blackbeard's ship in full sail. No matter how far apart they be, the actions of one affect the other instantaneously. Aye, it be as if they be communicatin' through some otherworldly pirate code, defyin' the laws of time and space.
            Now, me hearties, as we navigate these quantum waters, we encounter the strange land of superposition. Here, particles can exist in multiple states at once, like a ship sailin' in different directions at the same time. It be a mind-bendin' phenomenon that challenges our very understanding of reality. Quantum physics be a treasure map with clues leadin' us to hidden realms, where logic itself be stretched like a ship's riggin' in a tempest.
            In conclusion, me fellow buccaneers, quantum physics be a wild and untamed sea, filled with mysteries and conundrums that would make even the bravest sailor shake in his boots. As we set sail into the unknown, remember that the laws of this quantum realm be as elusive as a sly pirate in the shadows. So, batten down the hatches, me hearties, for the seas of quantum physics be a vast and unpredictable ocean where only the boldest dare to venture. Yarrr!
            `,
            `
            Ahoy there, me hearties! Set yer sails and prepare to embark on a quantum journey through the mysterious seas of physics, where particles be not just particles, but cunning rogues that dance to the tune of uncertainty. Avast ye, for quantum physics be a treasure map leading to the depths of the subatomic world, where the laws of the land be as unpredictable as a squall on the high seas.
            In the grand tale of quantum physics, me buccaneers, we find ourselves dealin' with particles so small they be as elusive as the fabled kraken. These particles, called quarks and leptons, be the scallywags that make up the very fabric of our reality. But beware, for in the quantum realm, these mischievous scoundrels be playin' a game of hide and seek that would make even the most cunning pirate jealous.
            One of the most notorious aspects of quantum physics be the Heisenberg Uncertainty Principle – a set of rules dictatin' that ye can never precisely know both the position and the momentum of a particle at the same time. It be as if the particles themselves be donning a cloak of invisibility, keeping their secrets safe from the prying eyes of any would-be investigator.
            Picture this, me hearties: ye spy a particle on the horizon, tryin' to chart its course and predict its whereabouts. But alas, the more ye try to pin down its position, the slipperier it becomes. It be like tryin' to catch the wind in yer sails – a task doomed to fail. This uncertainty be a fundamental characteristic of the quantum sea, leavin' us with a sense of wonder and bewilderment.
            But the quantum tales be not just about uncertainty; they also be about entanglement, a phenomenon that be as mystical as Davy Jones' locker. Entanglement be the notion that particles, once connected, remain bound together, no matter the distance between 'em. It be as if two pirates sharin' a secret code – no matter how far apart, their destinies be entwined.
            Imagine, if ye will, two particles entangled like old shipmates sharin' the same destiny. Ye change the state of one particle, and the other – no matter how far away – reacts in kind. This be a peculiar kind of magic, defyin' the laws of classical physics and confoundin' even the most seasoned sailors of the scientific community.
            As we delve deeper into the quantum seas, we come across the mysterious phenomenon known as superposition – the ability of particles to exist in multiple states at once. It be as if a pirate could be both in Port Royal and Tortuga at the same time, a concept that challenges our very notions of reality. Superposition be the pirate's dream, allowing particles to navigate the quantum realm in ways that defy the logic of the everyday world.
            But, me hearties, the quantum seas be treacherous, and the laws that govern 'em be as elusive as the fabled Fountain of Youth. Quantum mechanics, with its strange and unpredictable nature, be a puzzle that even the most astute scholars find confounding. Yet, it be this very mystery that draws us – like a siren's call – into the depths of the quantum ocean.
            So, me fellow buccaneers, as we navigate these uncharted waters of quantum physics, let us raise our Jolly Rogers in salute to the enigmatic particles that defy the laws of the known world. For in the quantum sea, where uncertainty reigns supreme, there be a treasure trove of mysteries awaitin' to be unraveled by those bold enough to embark on this daring voyage. Onward, me hearties, to the quantum horizon!
            `,
            `
            Arrr, me hearties, gather 'round as I spin ye a tale of the mysterious seas of quantum physics! Aye, the world of the tiny, the realm where particles dance like ghostly pirates on the waves of uncertainty. This be no ordinary journey, for in the quantum ocean, reality be a slippery fish, eluding the grasp of even the savviest physicists.
            In the quantum realm, we be talkin' 'bout particles smaller than a speck of sand, where the laws of classical physics be cast adrift. Aye, me hearties, here be where the parrots of probability squawk their cryptic messages, and the compass of causality spins like a rogue whirlpool.
            The first mate of this quantum ship be none other than the infamous Heisenberg, and his Uncertainty Principle be the guiding star. He be tellin' us that the more we know 'bout a particle's position, the less we know 'bout its speed, and vice versa. It be as confounding as navigatin' through a foggy night without a lantern, me mates!
            But the quantum sea be not just about particles playin' hide and seek. No, no, no! It be a place where particles be entangled like old shipmates sharin' a mystical bond. Ye measure the spin of one particle, and in an instant, its mate across the vast expanse of the quantum sea be affected, as if by magic. Aye, this be the phenomenon that Einstein mockingly called "spooky action at a distance."
            Now, me hearties, let us set sail into the waters of superposition. In this strange dimension, particles be existin' in multiple states at once, like a ship caught between the doldrums and a fierce tempest. A particle can be both here and there, both spin up and spin down, until the moment it be observed, settlin' into one state or another.
            But beware, for the quantum sea be treacherous, and the waves of decoherence be ready to swallow the unsuspecting sailor. Decoherence be the force that nudges the quantum world into the realm of classical reality, like a ghostly ship fadin' into the mist.
            And what of the quantum pirates themselves, the quarks and bosons that make up this mysterious crew? These be the elemental rogues, the building blocks of the cosmic pirate ship, sailin' through the vast quantum sea with a swagger that defies the laws of the mundane.
            So, me hearties, as we chart the uncharted waters of quantum physics, let us raise our glasses to the enigmatic world where particles be as elusive as a wily sea serpent. May we navigate these quantum seas with the spirit of adventure and the courage to embrace the unknown, for in the world of quantum physics, the only certainty be uncertainty itself! Yo ho ho, and a quantum bottle of rum!
            `
        ],
        "five":[
            `
            Alright, kiddos, imagine you have a magical world of teeny-tiny things called atoms. These atoms are like the building blocks of everything around us - your toys, the air, even you!
            Now, imagine if these atoms were really playful and liked to do strange dances. They don't dance like we do, though. Instead, they do this mysterious dance called "quantum dance." It's like a secret party that's happening all the time, but we can't see it with our eyes.
            Now, here's the coolest part: sometimes, when these atoms are dancing, they can do something super special. They can be in two places at the same time! It's like if you were playing with your toy car in the living room and, at the same time, it was also zooming around in the kitchen. Sounds pretty magical, doesn't it?
            Oh, and there's another trick these atoms can do. They can talk to each other without making any sound or sending messages. It's like having a superpower telephone that doesn't need wires or sound waves – they just instantly know what the other one is up to. Scientists call this "quantum entanglement," but you can think of it as a super cool secret code between atoms.
            So, quantum physics is like peeking into this magical world of tiny dances and secret messages that the atoms have going on all around us. Even though it might sound a bit tricky, it's really just a way of understanding the amazing and mysterious way everything in our world likes to party and play!
            `,
            `
            Alright, imagine you have a magical toy that you can't see or touch, but it's everywhere around you, kind of like invisible fairy dust. This magical toy is called "quantum stuff." Now, quantum stuff is not like regular toys you play with, it's super tiny, even smaller than the tiniest speck of dust you can imagine.

Now, here's the fun part – sometimes, when you're not looking, quantum stuff can be in two places at the same time. Imagine if you could be both in your room and in the kitchen at the very same moment! That's what quantum stuff does. It's like a very tricky game of hide and seek.

Also, when you try to catch quantum stuff or peek at it, it suddenly changes its game plan. It's like playing with a friend who always switches the rules when you're about to win. So, scientists have to be super clever to figure out what quantum stuff is up to.

One more cool thing about quantum stuff is that it loves to chat with its friends even if they are really far apart. It's like having a secret code language that only quantum stuff understands. This is called "entanglement," and it's like when you and your friend have matching superhero capes – when one of you does a special move, the other one feels it instantly, no matter how far apart you are!

So, quantum stuff is like a magical, invisible friend that loves to play tricks and have secret conversations with other quantum friends. Even though it's a little tricky to understand, scientists are like detectives trying to solve the mystery of how quantum stuff works because it's so amazing and different from everything else we know!
            `
        ]
    }
}


let lastInd = 0;
function fakeRand(){ // randomly choose an output, but avoid the previous output(not truly random)
    let ret = lastInd;
    while(ret == lastInd) ret = parseInt(Math.random() * 4);
    lastInd = ret;
    return ret;
}


function generateDemo(){
    $("#demoSpace").fadeOut(1000,function(){
        if($("#genInput1").val() == "image"){
            $("#demoSpace").html(`<img src='static/assets/ai-pics/${$("#genInput2").val()}/${$("#genInput3").val()}/${fakeRand()}.png'>`);
        }
        $("#demoSpace").fadeIn(1000);
    });
    
}