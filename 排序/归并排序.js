function mergeSort (arr) {
    if (arr.length < 2) {
        return arr
    } else {
        let middle = arr.length / 2
        let left = arr.slice(0, middle)
        let right = arr.slice(middle)

        return merge(mergeSort(left), mergeSort(right))
    }
}

function merge (left, right) {
    let result = []
    while (left.length != 0 && right != 0) {
        if (left[0] <= right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    return result.concat(left).concat(right)
}

console.log(mergeSort([1, 2, 4, 3]))