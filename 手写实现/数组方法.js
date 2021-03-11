// ES5实现数组原生的方法
// map
Array.prototype.map = function (callback) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push(callback(this[i], i, this));
    }
    return arr;
};

// filter
Array.prototype.filter = function (callback) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            arr.push(this[i]);
        }
    }
    return arr;
};

// some
Array.prototype.some = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return true;
        }
    }
    return false;
};

// every
Array.prototype.every = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i])) {
            return false;
        }
    }
    return true;
};

// find
Array.prototype.find = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return this[i];
        }
    }
};

// forEach
Array.prototype.forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

// reduce
Array.prototype.reduce = function (callback, prev) {
    for (let i = 0; i < this.length; i++) {
        //初始值不传递时的处理
        if (typeof prev === 'undefined') {
            prev = callback(this[i], this[i + 1], i, this);
            ++i;
        } else {
            prev = callback(prev, this[i], i, this);
        }
    }
    return prev;
};
