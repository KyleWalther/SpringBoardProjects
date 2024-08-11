// async function sayHi() {
//     return "Hello!"
// }

// async function sayHi() {
//     return Promise.resolve('Hello!')
// }

// async function oops(){
//     throw "Bad idea"
// }


// sayHi().then((msg) => console.log(msg))

// oops()
//     .then((msg) => console.log(msg))
//     .catch(err => console.log('INSIDE CATCH: ', err))


async function getStarWarFilms(){
    
    const res = await axios.get("https://swapi.dev/api/films/")
    console.log(res)
}


const h1 = document.querySelector('h1');
function changeH1(element, color){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            element.style.color = color;
            resolve()
        }, 1000);
    })
}
async function colorChange(el){
    await changeH1(el,'red')
    await changeH1(el,'orange')
    await changeH1(el,'green')
    await changeH1(el,'blue')
    await changeH1(el,'silver')
    await changeH1(el,'black')
}

colorChange(h1)




const deck = {
    async init() {
        let res = await axios.get('https://www.deckofcardsapi.com/api/deck/new/');
        this.deckId = res.data.deck_id;
    },
    async shuffle() {
        let res = await axios.get(`https://www.deckofcardsapi.com/api/deck/${this.deckId}/shuffle/`);
        console.log(res);
    },
    async draw(){
        let res = await axios.get(`https://www.deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=2`)
        console.log(res)
    }
};


class Pokemon {
    constructor(id){
        this.id = id;
        this.types = []

    }
    async getInfo(){
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
        this.name = res.data.name;
        this.weight = res.data.weight;
        for (let type of res.data.types){
            this.types.push(type.type.name)
        }
        console.log(res)
    }
}

let mankey = new Pokemon(56)



async function getStarWarFilms(){
    
    const res = await axios.get("https://swapi.dev/api/films/")
    console.log(res)
}

try {
    console.frog(45)
}
catch {
    console.log('caught you')
}


async function getUser(user) {
    try {
      let url = `https://api.github.com/users/${user}`;
      let response = await $.getJSON(url);
      console.log(`${response.name}: ${response.bio}`);
    } catch (e) {
      console.log("User does not exist!");
    }
  }

getUser('mmmaaattttttttt')




async function catchSomeOfEmParallel() {
    let baseURL = "https://pokeapi.co/api/v2/pokemon";
    let p1Promise = $.getJSON(`${baseURL}/1/`);
    let p2Promise = $.getJSON(`${baseURL}/2/`);
    let p3Promise = $.getJSON(`${baseURL}/3/`);
  
    let p1 = await p1Promise;
    let p2 = await p2Promise;
    let p3 = await p3Promise;
  
    console.log(`The first pokemon is ${p1.name}`);
    console.log(`The second pokemon is ${p2.name}`);
    console.log(`The third pokemon is ${p3.name}`);
  }
  
  catchSomeOfEmParallel();


  async function catchSomeOfEmParallel2() {
    let baseURL = "https://pokeapi.co/api/v2/pokemon";
    let pokemon = await Promise.all([
      $.getJSON(`${baseURL}/1/`),
      $.getJSON(`${baseURL}/2/`),
      $.getJSON(`${baseURL}/3/`)
    ]);
  
    console.log(`The first pokemon is ${pokemon[0].name}`);
    console.log(`The second pokemon is ${pokemon[1].name}`);
    console.log(`The third pokemon is ${pokemon[2].name}`);
  }
  
  catchSomeOfEmParallel2();














