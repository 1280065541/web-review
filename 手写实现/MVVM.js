//劫持data的所有属性
function Observe(data) {
    //所谓的数据劫持，就是给data属性增加get和set
    for (var key in data) {
        var val = data[key]
        //递归继续向下找，实现深度的数据劫持
        observe(val)
        //把data属性通过defineProperty的方式定义属性
        Object.defineProperty(data, key, {
            configurable: true, //可以配置对象，删除属性
            get: function () {
                return val
            },
            set: function (newVal) {
                //如果改变后的值与之前的值相同，不用操作
                if ((newVal = val)) {
                    return
                }
                //如果以后再获取值的时候，将刚才设置的值再返回回去
                val = newVal
                //当设置为新值时，也需要把新值再去定义成属性
                observe(newVal)
            }
        })
    }
}

//
function observe(data) {
    //如果不是对象，直接返回，防止递归溢出
    if (!data || typeof data !== 'object') {
        return
    } else {
        return new Observe(data)
    }
}

//数据代理
//数据代理就是每次拿data里的数据时，不用每次都写一长串
function Mvvm(options = {}) {
    //数据劫持
    var data = options.data
    observe(options.data)
    // this代理了this._data
    for (let key in data) {
        Object.defineProperty(this,key, {
            configurable:true,
            get(){
                return this.data
            },
            set(){
                
            }
        })
    }

}

function Mvvm(options = {}) {
    // observe(data);
        
    // 编译    
   new Compile(options.el, this);    
}

// 创建Compile构造函数
function Compile(el, vm) {
    // 将el挂载到实例上方便调用
    vm.$el = document.querySelector(el);
    // 在el范围里将内容都拿到，当然不能一个一个的拿
    // 可以选择移到内存中去然后放入文档碎片中，节省开销
    let fragment = document.createDocumentFragment();
    
    while (child = vm.$el.firstChild) {
        fragment.appendChild(child);    // 此时将el中的内容放入内存中
    }
    // 对el里面的内容进行替换
    function replace(frag) {
        Array.from(frag.childNodes).forEach(node => {
            let txt = node.textContent;
            let reg = /\{\{(.*?)\}\}/g;   // 正则匹配{{}}
            
            if (node.nodeType === 3 && reg.test(txt)) { // 即是文本节点又有大括号的情况{{}}
                console.log(RegExp.$1); // 匹配到的第一个分组 如： a.b, c
                let arr = RegExp.$1.split('.');
                let val = vm;
                arr.forEach(key => {
                    val = val[key];     // 如this.a.b
                });
                // 用trim方法去除一下首尾空格
                node.textContent = txt.replace(reg, val).trim();
            }
            // 如果还有子节点，继续递归replace
            if (node.childNodes && node.childNodes.length) {
                replace(node);
            }
        });
    }
    
    replace(fragment);  // 替换内容
    
    vm.$el.appendChild(fragment);   // 再将文档碎片放入el中
}

