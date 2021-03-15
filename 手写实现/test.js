const people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
]

// if (!Array.prototype.myMap) {
//     Array.prototype.myMap = function (callback, thisArg) {
//         return this.reduce(function (mappedArray, currentValue, index, array) {
//             mappedArray[index] = callback.call(
//                 thisArg,
//                 currentValue,
//                 index,
//                 array
//             )
//             return mappedArray
//         }, [])
//     }
// }

if (!Array.prototype.mapUsingReduce) {
    Array.prototype.mapUsingReduce = function(callback, thisArg) {
      return this.reduce(function(mappedArray, currentValue, index, array) {
        mappedArray[index] = callback.call(thisArg, currentValue, index, array)
        return mappedArray
      }, [])
    }
  }

console.log(
    [1, 2, , 3].mapUsingReduce(
        (currentValue, index, array) => currentValue + index + array.length
    )
)
