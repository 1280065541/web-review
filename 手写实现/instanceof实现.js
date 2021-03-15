function newInstanceof(val, type) {
    //直接用typeof判断基础数据类型，不是直接返回false
    if (val === null || typeof val !== 'object') {
        return false
    }
    var proto = Object.getPrototypeOf(val) //getPrototypeOf能够拿到参数的原型对象
    while (true) {
        if (proto === null) {
            //没找到就返回false
            return false
        }
        if (proto === type.prototype) {
            //找到相同对象的原型，返回true
            return true
        }
        proto = Object.getPrototypeOf(proto)
    }
}

function myInstanceOf(obj, type) {
    //直接用typeof判断基础数据类型，不是直接返回false
    if (val === null || typeof val !== 'object') {
        return false
    }
    var proto = obj.__proto__
    while (true) {
        if (proto === null) {
            return false
        }
        if (proto === type.prototype) {
            return true
        }
        proto = proto.__proto__
    }
}

console.log(newInstanceof(new Number(123), Number))
//不能判断基础数据类型
console.log(newInstanceof(123, Number))
