// let baseURL = "https://pokeapi.co/api/v2/pokemon";

// // $.ajax(`${baseURL}/1/`, {
// //   success: p1 => {
// //     console.log(`The first pokemon is ${p1.name}`);
// //     $.ajax(`${baseURL}/2/`, {
// //       success: p2 => {
// //         console.log(`The second pokemon is ${p2.name}`);
// //         $.ajax(`${baseURL}/3/`, {
// //           success: p3 => {
// //             console.log(`The third pokemon is ${p3.name}`);
// //           },
// //           error: err => console.log(err)
// //         });
// //       },
// //       error: err => console.log(err)
// //     });
// //   },
// //   error: err => console.log(err)
// // });

// // promise chaining with pokemon apilet baseURL = "https://pokeapi.co/api/v2/pokemon";

// axios
//   .get(`${baseURL}/1/`)
//   .then(p1 => {
//     console.log(`The first pokemon is ${p1.data.name}`);
//     return axios.get(`${baseURL}/2/`);
//   })
//   .then(p2 => {
//     console.log(`The second pokemon is ${p2.data.name}`);
//     return axios.get(`${baseURL}/3/`);
//   })
//   .then(p3 => {
//     console.log(`The third pokemon is ${p3.data.name}`);
//   })
//   .catch(err => {
//     console.log(`Oops, there was a problem :( ${err}`);
//   });


// function wait3Seconds(){
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, 3000)
//     })
// }

// wait3Seconds()
//     .then(()=> console.log('all done'))
//     .catch(() => console.log("error"))


// const h1 = document.querySelector('h1');
// // setTimeout(() => {
// //     h1.style.color = 'blue'
// //     setTimeout(() => {
// //         h1.style.color = 'red'
// //     }, 1000);
// // }, 1000);

// function changeH1(element, color){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             element.style.color = color;
//             resolve()
//         }, 1000);
//     })
// }
// changeH1(h1, 'green')
// .then(() => changeH1(h1, 'blue'))
// .then(() => changeH1(h1, 'red'))
// .then(() => changeH1(h1, 'yellow'))
// .then(() => changeH1(h1, 'green'))
// .then(() => changeH1(h1, 'black'))




// function get(url){
//     const request = new XMLHttpRequest();
//     return new Promise((resolve, reject) => {
//         request.onload = function(){
//             if (request.readyState !== 4) return;
            
//             // check status code
//             if (request.status >= 200 && request.status < 300){
//                 resolve(JSON.parse(request.response));
//             } else {
//                 reject(request.status);
//             }
//         };
        
//         // for when the internet is off
//         request.onerror = function handleError() {
//             request = null;
//             reject('NETWORK ERROR');
//         };

//         request.open('GET', url);
//         request.send();
//     });
// }

// get('https://swapi.dev/api/planets/1/')
// .then(res => {
//  console.log(res)
//  return get('https://swapi.dev/api/planets/2/')
// })
// .then(res => console.log(res))
// .catch(err => console.log(err));



// let fourPokemonPromises = [];

// for (let i = 1; i < 5; i++) {
//   fourPokemonPromises.push(
//     axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
//   );
// }

// Promise.all(fourPokemonPromises)
//   .then(pokemonArr => {
//     for(let res of pokemonArr){
//         console.log(res.data.name);
//     }
//   })
//   .catch(err => console.log(err));




//   let fourPokemonRace = [];

// for (let i = 1; i < 5; i++) {
//   fourPokemonRace.push(
//     axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
//   );
// }

// Promise.race(fourPokemonRace)
// .then(res => {
//     console.log(res.data.name)
// })
// .catch(err => console.log(err))

