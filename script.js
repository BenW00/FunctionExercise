
// Question 1
function spookyGhost() {
    console.log("Boo!!!")
}

spookyGhost()

// Question 2
function candy(goal) {

    console.log(goal)
    console.log(goal)
    console.log(goal)
    console.log(goal)
}

candy("Get Candy")

// Question 3
function werewolf(a, b) {
    if ( a == "Full" && b == "Moon" )
        console.log("ARH-WOOO!")
}

// Question 4
function halloween() {
    console.log("October 31st")
}

// Question 5
function isEnoughCandy(pieces) {
    return( number >= 31)
}

// Question 6
function candyCounter(nums) {
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    return(nums.reduce(reducer))
}

// Question 7
const hauntedMansion = function() {
    console.log("Welcome, foolish mortals, to the Haunted Mansion!")
}
hauntedMansion()

// Question 8
ghostbusters = () => ("Who You Gonna Call?")

// Question 9
// No

// Question 10
// No

// Question 11A
const costumes = ["Ghost", "Princess", "Pirate"]

// Question 11B
costumes.forEach(n => {
    const upperCostumes = (n.toUpperCase());
});

// BONUS

// Question 12A
const stephenKingMovies = [ "The Shining", "Christine", "It", "The Mist", "Creepshow", "Pet Sematary" ]

// Question 12B
const twoMovies = stephenKingMovies.filter(x => x.length == 9 )

// Question 13A
const halloweenSongs1 = ["Monster Mash", "Thriller"]

// Question 13B
const halloweenSongs2 = ["I Put A Spell On You", "This Is Halloween", "Ghostbusters"]

// Question 13C
halloweenJukeBox = (songs) => console.log(songs[Math.floor(Math.random()*songs.length)])

// Question 13D
halloweenJukeBox(halloweenSongs2)
halloweenJukeBox(halloweenSongs1)

// Question 14
caps = (string) => {
    let count = 0
    let casedString = ""
    for (letter of string) {
        if ((letter.toLowerCase() == letter.toUpperCase())){
            casedString += letter
        }
        else if (count % 2 == 0) {
            casedString += letter.toUpperCase()
            count++
        }
        else {
            casedString += letter
            count++
        }
        console.log(count)
    }
    return(casedString)
}
