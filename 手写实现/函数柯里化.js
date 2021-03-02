//函数柯里化实现
//柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术
function createCurry(fn) {
    var args = [].slice.call(arguments, 1)
    return function () {
        var newArgs = args.concat([].slice.call(arguments))
        return fn.apply(this, newArgs)
    }
}

function add(a, b) {
    return a+b
}
console.log(createCurry(add)(1,2))
