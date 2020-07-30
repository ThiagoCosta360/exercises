function dirReduc(arr) {

    const opposites = {
        "NORTH": "SOUTH",
        "SOUTH": "NORTH",
        "WEST": "EAST",
        "EAST": "WEST"
    }

    let reduction = 0
    do {
        reduction = 0
        arr.forEach((el, i) => {
            if (arr[i + 1] == oposits[el]) {
                arr.splice(i, 2)
                reduction = 1
            }
        })
    }
    while (reduction)

    return arr
}


console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"])
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]), ["NORTH", "WEST", "SOUTH", "EAST"])
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]), [])