## DOM事件
### 3.1 事件级别
三个事件级别，没有DOM1，只有DOM0、DOM2、DOM3，因为DOM1标准制定的时候没有涉及到DOM1事件。DOM3比DOM2只是多了一些事件类型。
* DOM0:element.click=function(){}
* DOM2:element.addEventListener('click',function(){},false)
* DOM3:element.addEventListener('keyup',function(){},false)

### 3.2 事件模型和事件流DOM事件模型包括捕获和冒泡
事件流即用户界面交互的过程中，事件的流向过程。

### 3.3 DOM事件捕获的具体流程
捕获的流程为：window->document->html->body->..->目标元素。
冒泡的流程为：目标元素->..->body->html->document->window。

### 3.4 Event对象常见应用
1. event.preventDefault()
取消事件的默认动作（比如a标签点击后就会跳转）
2. event.stopPropagation()
阻止事件冒泡。
3. event.stopImmediatePropagation()
阻止剩下的事件处理程序被执行。如果一个元素上绑定了三个事件，一旦某个事件中调用了该方法，那其他两个事件将不会被执行。

### 3.5 事件捕获流程及自定义事件示例
<DOM.html>