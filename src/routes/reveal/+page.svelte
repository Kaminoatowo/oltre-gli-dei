<script>
    const dorso = "../../src/lib/img/tarots/cards/Dorso.png";
    
    let img1, img2, img3;
    img1 = img2 = img3 = dorso;

    let deck = [];
    shuffle();
    
    // Function to randomly pick a number
    function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function reveal() {
        const pre = "../../src/lib/img/tarots/cards/";
        const post = ".png";
        if (deck.length == 0) {
            return dorso;    
        } else {
            let tarotNumber = deck[getRandomNumber(0, deck.length - 1)];
            deck.splice(deck.indexOf(tarotNumber), 1);
            return pre.concat(tarotNumber).concat(post);
        }
    }

    function shuffle() {
        deck = [];
        for (let i = 0; i < 22; i++) {
            deck.push(i);
        }
    }
</script>

<div class="text-center">
    <h1>Svela i tarocchi!</h1>
    <p>Seleziona un tarocco per svelarlo.</p>
    
    <div class="flex flex-row gap-1">
        <button on:click="{() => img1 = reveal()}" class="w-1/3">
            <img src="{img1}" alt="Tarot 1" >
        </button>
        <button on:click="{() => img2 = reveal()}" class="w-1/3">
            <img src="{img2}" alt="Tarot 2" >
        </button>
        <button on:click="{() => img3 = reveal()}" class="w-1/3">
            <img src="{img3}" alt="Tarot 3">
        </button>
    </div>
    
    <button on:click="{() => {img1 = reveal(), img2 = reveal(), img3 = reveal()}}" class="mt-2 p-1 text-center bg-tertiary rounded">Svela tutto</button>    
    <button on:click="{() => {img1 = img2 = img3 = dorso, shuffle()}}" class="mt-2 p-1 text-center bg-tertiary rounded">Rimescola</button>    
</div>
