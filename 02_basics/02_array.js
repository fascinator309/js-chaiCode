const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[2][1]);
//print char of element 

const allHeros = marvel_heros.concat(dc_heros)
//join both array
// console.log(allHeros);

//spread operator :- spread all the element
const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

//flat attribute :- flat(layer) :- also spread element of array but have layer to set.
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


// console.log(Array.isArray("Hitesh"))
// checking for array existence


//make array from(source)
// console.log(Array.from({name: "hitesh"})) 
// return empty array

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3));\


/* differnce b/w of and form is 
    of :- if there is single word provide it will create array with single word .

// console.log(Array.of("Hitesh"))
// [ 'Hitesh' ] array made

    from :- where , this will make the single element iteraable and make array form elemtent fo that word

// console.log(Array.from("Hitesh"))
//[ 'H', 'i', 't', 'e', 's', 'h' ]

*/