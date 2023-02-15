/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let johnSnowAttack = 25
let jamieLannisterAttack = 35

if (johnSnowAttack > jamieLannisterAttack) {
    console.log("John Snow is more beefy")
} else if (jamieLannisterAttack === johnSnowAttack) {
    console.log("Equaly strong")
}
else {
    console.log("Jamie is the OG!")
}

let johnSnowHealth = 100
let JohnSnowDefense = 0

if (johnSnowHealth <= jamieLannisterAttack){
    console.log ("John Snow has been slain")

} else{
    johnSnowHealth -= jamieLannisterAttack
    console.log(`John's health is down to ${johnSnowHealth}`)
}

JohnSnowDefense += 25

if (johnSnowHealth <= jamieLannisterAttack){
    console.log("Jon jas been slain")
}else {
    johnSnowHealth -= jamieLannisterAttack - JohnSnowDefense
    console.log(`John's health is down to ${johnSnowHealth}`)
}

if (johnSnowHealth + 50 >= 100){
    johnSnowHealth = 100
} else {
    johnSnowHealth += 50
}
console.log(johnSnowHealth)

let coinLandsHeads = false
if (coinLandsHeads === true)
{
    console.log("the fight continues")
} else {
    console.log("John is allowed to leave")
}

for (let i = 0; i < 5; i++ ){
    if(johnSnowHealth <= 0) {
        console.log("john has been slain")
    }else {
        johnSnowHealth -= jamieLannisterAttack - JohnSnowDefense
        console.log(`John's health is now ${johnSnowHealth}`)
    }
}

while (johnSnowHealth > 0){
    johnSnowHealth -= jamieLannisterAttack - JohnSnowDefense
    if(johnSnowHealth <= 0){
        console.log("John Snow is finally dead!")
    }else{
        console.log(`John's health is now ${johnSnowHealth}`)
    }

}

if(johnSnowAttack > 25 && johnSnowAttack < 75) {
    console.log("John Snow is mid level bease")
}

if (jamieLannisterAttack < 25 || jamieLannisterAttack > 75) {
    console.log("Jamie is strong if heate his wheaties")
} else {
    console.log("Jamie is mid level best")
}