class HashTable {

    constructor(size = 53) {
        // keyMap is where we will store data
        this.keyMap = new Array(size)
    }

    _hash(key) {
        let total = 0
        let WEIRD_PRIME = 31
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length
        }
        return total
    }

    set(key, value) {
        let index = this._hash(key)
        if (!this.keyMap[index]) {
            this.keyMap[index] = []
        }
        this.keyMap[index].push([key, value])
        return index
    }

    get(key) {
        let index = this._hash(key)
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
               if(this.keyMap[index][i][0] === key) {
                   return this.keyMap[index][i][1]
               }
            }
        }
        return undefined
    }

}

let hashTable = new HashTable(17)
hashTable.set("maroon", "1234")
hashTable.set('yellow', "4567")
hashTable.set("olive", "234124")
hashTable.set("salmon", "234124")
hashTable.set("lightcoral", "234124")
hashTable.set("mediumvioletred", "234124")

console.log(hashTable.get("yellow"))