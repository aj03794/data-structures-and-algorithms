function insertionSort (items) {

    // items and list are the same thing
    const isJValueGreater = (value, comparisonValue) => {
        console.log({ value, comparisonValue })
        console.log('isJValueGreater', value > comparisonValue)
        return value > comparisonValue
    }

    for (let i = 0; i < items.length; i++) {
      let value = items[i]
      console.log({ items, i })
      let j
      // store the current item value so it can be placed right

      // skips index 0 of items because above loop starts at 0
      for (j = i - 1; j > -1 && isJValueGreater(items[j], value); j--) {
        // loop through the items in the sorted array (the items from the current to the beginning)
        // copy each item to the next one
        console.log({ j })
        items[j + 1] = items[j]
        console.log('------', items)
      }
      // the last item we've reached should now hold the value of the currently sorted item
      console.log({ j })
      console.log({ value, item: items[j + 1] })
      console.log('================')
      items[j + 1] = value
    }
  
    return list
  }
  
  const list = [54, 26, 93, 17]
  console.log(insertionSort(list)) // [ 17, 20, 26, 31, 44, 54, 55, 77, 93 ]

  // Algorithm explanation
  // 1) i = 0, value = 54, 2nd for loop not run because j = -1 and j !> -1
  // 2) i = 1, value = 26, 2nd for loop starts at j = 0, j > -1 && 54 > 26
  // items[0] = 54, so items j[1]  = 54
  // j = -1, j !> -1
  // items[j +1] = items[0] = 54, items[j+1] = 26 - items[0] now equals 26 -> [26, 54, 93, 17]
  // 3) i = 2, 2nd loop for loop starts at j = 1, j > -1 && 54 !> 93
  // items[2] = 92 -> [26, 54, 93, 17]
  // 4) i = 3, 2nd for loop starts at j = 2, j > -1 && 93 > 17
  // items[3] = 93
  // j = 1, j > -1 && 54 > 17
  // items[2] = 54
  // j = 0, j > -1 && 26 > 17
  // items[1] = 26
  // j = -1, j !> -1
  // items[0] = 17 -> [17, 26, 54, 93]