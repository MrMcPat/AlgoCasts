// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    let step = " ".repeat(n + n-1)
    let stepArr = step.split("")
    for(let i = 0; i < n; i++) {
        stepArr[i + Math.floor((n+n-1)/2)] = "#"
        stepArr[Math.floor((n+n-1)/2) - i] = "#"
        console.log(stepArr.join(""))
    }
}

pyramid(5)

module.exports = pyramid;
