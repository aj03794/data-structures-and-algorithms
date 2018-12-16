function naiveSearch(long, short) {
    let count = 0
    for (let i = 0; i < long.length; i++) {
        // console.log({ i })
        for (let j = 0; j < short.length; j++) {
            console.log(short[j], long[i + j])
            if (short[j] !== long[i+j]) {
                console.log("break")
                break
            }
            if (j === short.length - 1) {
                console.log("Found one")
                count++
            }
        }
    }
    console.log({ count })
    return count
}

naiveSearch("lorie loled", "lol")