function hash (key, arrayLen) {
    let total = 0
    for (let char of key) {
        let value = char.charCodeAt(0) - 96
        total = (total + value) % arrayLen
    }
    return total
}

// Collisions with this
console.log(hash("pink", 10)) // 0
console.log(hash("orange", 10)) // 0
console.log(hash("cyan", 10)) // 3