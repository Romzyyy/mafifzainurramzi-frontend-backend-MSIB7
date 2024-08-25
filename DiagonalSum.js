diagonalSum = (matrix) => {
    let n = matrix.length
    let sum = 0

    for (let i = 0; i < n; i++) {
        sum += matrix[i][i]
        sum += matrix[i][n - 1 - i]
    }

    if (n % 2 !== 0) {
        sum -= matrix[Math.floor(n / 2)][Math.floor(n / 2)]
    }

    return sum
}

console.log(
    diagonalSum([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ])
)

console.log(
    diagonalSum([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
    ])
)
