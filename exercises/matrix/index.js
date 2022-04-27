// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// function matrix(n) {
//     let arr = []
//     let subArr = []
//     for (let i = 0; i < n; i++){
//         for(let j = n - 1; j >= 0 ; j--){
//             subArr.push((i+1) * n - j)
//         }
//         arr.push(subArr)
//         subArr = []
//     } 
//     return arr
// }

function matrix(n) {
    let results = []
    let count = 0
    for (let i = 0; i < n; i++) {
        results.push([])
    }

    for (let row = 0; row < n; row++) {
        if (row !== n) {
            count++
            results[0].push(count)
        } else {
            break;
        }
    }

    for (let column = 1; column < n; column++) {
        if (column !== n) {
            count++
            results[column].push(count)
        } else {
            break;
        }
    }

    for (let row = n - 1; row > 0; row--) {
        if (row !== -1) {
            count++
            results[n-1].unshift(count)
        } else {
            break;
        }
    }

    for (let column = n - 2; column > 0; column--) {
        if (column !== 0) {
            count++
            results[column].unshift(count)
        } else {
            break;
        }
    }

    for (let row = 1; row < n; row++) {
        if (row !== n - 1) {
            count++
            results[1].splice(row, 0, count)
        } else {
            break;
        }
    }

    for (let column = 2; column < n; column++) {
        if (column !== n - 1) {
            count++
            results[column].splice(results[column].length - 1, 0, count)
        } else {
            break;
        }
    }

    for(let row = n - 2; row > 0; row--) {
        if (row !== 1) {
            count++
            results[n-2].splice(row - 1, 0 ,count)
        } else {
            break;
        }
    }

    return results
}

matrix(4)

module.exports = matrix;
