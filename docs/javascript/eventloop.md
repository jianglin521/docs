# 事件循环(Event Loop)

- 2020.11.07

## javascript发展历史

在我们理解事件循环机制之前先来了解下`Javascript`语言的发展史。

首先我们需要知道,一个`Javascript`引擎会常驻于内存中,他等待这我们(宿主)把`Javascript`代码或者函数传递给他执行。

在早期的`Javascript`语言版本中,本事并没有异步执行代码的能力,这也叫意味着只能等待宿主环境吧代码传递给引擎,然后引擎直接把代码顺次执行,这个任务也就是宿主发起的任务。

从ES5开始,`Javascript`引入了 `Promise`, 这样，不需要浏览器的安排, `Javascript`本身也可以发起任务了。

**至此,这里就诞生了两个概念, `宏观任务`与 `微观任务`。**

- `宏观任务`: 指代那些有宿主环境发起的任务。

- `微观任务`: 指代由`Javascript`引擎本身发起的任务。

## 为什么需要是单线程？

单线程与之用途有关，单线程能够保证一致性，如果有两个线程，一个线程点击了一个元素，另一个删除了一个元素，浏览器以哪一个为准？

:::tip
单线程指的是单个脚本只能在一个线程上运行，而不是 `JavaScript` 引擎只有一个线程。
:::

我们先看一张经典的图

![Event Loop](https://img-blog.csdnimg.cn/20200213143037885.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hqbDI3MTMxNA==,size_16,color_FFFFFF,t_70)

`javascript`中为了协调事务的处理，交互等必须采用`Event Loop`机制。任务主要分为`同步任务`和`异步任务`。

异步任务分成了`宏任务`和`微任务`。

- 宏任务：包括整体代码`script`、`setTimeout`、`setInterval`、`UI 渲染`、` I/O`、`postMessage`、`MessageChannel`、`setImmediate(Node.js 环境)`

- 微任务：`Promise.then(非new Promise)`、`process.nextTick(node环境)`、`MutaionObserver`

> 单次循环的事件的执行顺序，是先执行宏任务，然后执行微任务，这个是基础，任务可以有同步任务和异步任务，同步的进入主线程，异步的进入Event Table并注册函数，异步事件完成后，会将回调函数放入`Event Queue`中(宏任务和微任务是不同的`Event Queue`)，同步任务执行完成后，会从`Event Queue`中读取事件放入主线程执行，回调函数中可能还会包含不同的任务，因此会循环执行上述操作。


**Event Loop**

- `JavaScript`是单线程的，所有的`同步任务`都会在`主线程`中执行。

- 主线程之外，还有一个`任务队列`。每当一个异步任务有结果了，就往`任务队列`里塞一个事件。

- 当主线程中的任务，都执行完之后，系统会 “依次” 读取任务队列里的事件。与之相对应的异步任务进入主线程，开始执行。

- 异步任务之间，会存在差异，所以它们执行的优先级也会有区别。大致分为 微任务 和 宏任务。<font color="#f44">同一次事件循环中，微任务永远在宏任务之前执行。</font>

- 主线程会不断重复上面的步骤，直到执行完所有任务。


**Event Loop常见面试题**

```js
async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
async function async2() {
    console.log('async2');
}

console.log('script start');

setTimeout(function() {
    console.log('setTimeout');
}, 0)

async1();

new Promise(function(resolve) {
    console.log('promise1');
    resolve();
}).then(function() {
    console.log('promise2');
});
console.log('script end');

/**
 * 1. script start // 同步任务
 * 2. async1 start // async1函数中的同步任务
 * 3. async2       // async1函数中遇到await先立即执行
 * 4. promise1     // 遇到promise 执行同步任务
 * 5. script end   // 执行外层同步任务
 * 6. async1 end   // 执行微任务中先注册的
 * 7. promise2     // 执行promise中的then 优先级大于setTimeout
 * 8. setTimeout   // 执行setTimeout函数
 * /
```

### 引申：如果我写了一个`setTimeout(()=>console.log(1111), 500);`这段代码会在500毫秒后执行吗?

不一定会执行，这段代码只是告诉浏览器我往异步任务队列塞了一个延迟500毫秒后执行的任务，如果当前异步任务队列是空闲的，在得到执行权后会延时500毫秒执行。否则的话必须等到获得执行权。


### 引申: 如何根据此特性实现一个红绿灯,把一个圆形的div按照绿色3s,黄色1s,红色2s循环改变背景色?

- 2020.11.07

<demos-trafficLight />

```html
<div ref="light" class="traffic-light" :class="[className]" />
```

#### 方法1: 思路最简单,使用`setTimeout`来显示递归显示。

```js
let that = this;
      
const fn = function (){
    that.className= "green";
    setTimeout(()=>{
        that.className= "yellow";
        setTimeout(()=>{
            that.className= "red";
            setTimeout(()=>{
                fn();
            },2000)
        },1000)
    }, 3000)
}

fn();
```

#### 方法2： `setTimeout` 与 `Promise`结合,本质上没什么区别

```js
const fn = function () {
    that.className = "green";
    setTimeout(() => {
        return new Promise((res, rej) => {
            that.className = "yellow";
            res(
                setTimeout(() => {
                    return new Promise((res, rej) => {
                        that.className = "red";
                        setTimeout(() => {
                            res(fn());
                        }, 2000);
                    });
                }, 1000)
            );
        });
    }, 3000);
};
```



