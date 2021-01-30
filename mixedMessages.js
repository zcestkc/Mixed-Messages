// generateRandomNumber returns a random number between 0 to (num-1)
function generateRandomNumber(num) { 
    return Math.floor(Math.random()*num)
}
// random words
const words = {
    bodyParts: ['hands', 'eyes', 'feet', 'nostrils', 'nipples', 'boobs'],
    descriptions: ['big', 'fat', 'gigantic', 'wide', 'tiny', 'cute'],
    advice: ['go running', 'do pushups', 'eat an apple', 'start lifting']
}
// store random sentence
let randomMessage = []

// generate random index for each word category

for (let prop in words) {
    let index = generateRandomNumber(words[prop].length);
    switch(prop) {
        case 'bodyParts':
            randomMessage.push(`Your ${words[prop][index]} are`)
            break
        case 'descriptions':
            randomMessage.push(`${words[prop][index]}, you should`)
            break
        case 'advice':
            randomMessage.push(`${words[prop][index]}.`)
            break
        default:
            randomMessage.push('There is not enough info.')
    };
}

console.log(randomMessage.join(' '))