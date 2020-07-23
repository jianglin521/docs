(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{788:function(t,a,n){"use strict";n.r(a);var e=n(14),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"numpy-概述"}},[t._v("NumPy 概述")]),t._v(" "),n("ul",[n("li",[t._v("2020.07.21")])]),t._v(" "),n("h2",{attrs:{id:"简介"}},[t._v("简介")]),t._v(" "),n("blockquote",[n("p",[n("code",[t._v("NumPy")]),t._v(" 是一个 "),n("code",[t._v("Python")]),t._v(" 的第三方库，代表 "),n("code",[t._v("Numeric Python")]),t._v("，主要用于"),n("code",[t._v("数学/科学计算")]),t._v("。 它是一个由多维数组对象和用于处理数组的例程集合组成的库。")])]),t._v(" "),n("p",[t._v("使用 "),n("code",[t._v("Numpy")]),t._v(" 我们可以轻松进行如下等计算：")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("数组的算数和逻辑运算。")])]),t._v(" "),n("li",[n("p",[t._v("傅立叶变换和用于图形操作的例程。")])]),t._v(" "),n("li",[n("p",[t._v("与线性代数有关的操作。 "),n("code",[t._v("NumPy")]),t._v(" 拥有线性代数和随机数生成的内置函数。")])])]),t._v(" "),n("h2",{attrs:{id:"安装"}},[t._v("安装")]),t._v(" "),n("p",[t._v("推荐使用"),n("code",[t._v("pip")]),t._v("命令进行安装或者下载 "),n("a",{attrs:{href:"https://www.anaconda.com/products/individual",target:"_blank",rel:"noopener noreferrer"}},[t._v("Anaconda"),n("OutboundLink")],1),t._v(" (一个python集成环境应用，内置numpy等常用库)")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("pip install numpy\n")])])]),n("h2",{attrs:{id:"安装检查"}},[t._v("安装检查")]),t._v(" "),n("p",[t._v("我们可以引入"),n("code",[t._v("numpy")]),t._v("，如果未报错说明已经正常安装。")]),t._v(" "),n("div",{staticClass:"language-py extra-class"},[n("pre",{pre:!0,attrs:{class:"language-py"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这是约定俗称的引入方式")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" numpy "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" np\n")])])]),n("h2",{attrs:{id:"开始"}},[t._v("开始")]),t._v(" "),n("p",[t._v("在开始前我们需要知道一个概念"),n("code",[t._v("ndarray")]),t._v("。"),n("code",[t._v("ndarray")]),t._v("是"),n("code",[t._v("Numpy")]),t._v("的核心功能,其含义为"),n("code",[t._v("n-dimenssional-array")]),t._v("，即"),n("code",[t._v("多维数组")]),t._v("。")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[n("strong",[t._v("数组与列表之间的主要区别为:")])]),t._v(" "),n("ul",[n("li",[n("p",[t._v("数组是同类的,即数组的所以元素必须具有相同的类型。")])]),t._v(" "),n("li",[n("p",[t._v("列表可以包含任意其他类型的元素。")])])]),t._v(" "),n("p",[t._v("使用"),n("code",[t._v("Numpy")]),t._v("的函数可以快速的创建数组,效率比使用基本库更高,原因是内部使用的是"),n("code",[t._v("向量")]),t._v("。")])]),t._v(" "),n("h2",{attrs:{id:"数组的创建"}},[t._v("数组的创建")]),t._v(" "),n("ul",[n("li",[t._v("2020.07.21")])]),t._v(" "),n("blockquote",[n("p",[t._v("数组由实际数据和描述这些数据的元素组成,可以使用"),n("code",[t._v("*.shape")]),t._v("查看数据的形状,也可以用"),n("code",[t._v("*.dim")]),t._v("查看数组的维数。")])]),t._v(" "),n("h3",{attrs:{id:"语法"}},[t._v("语法")]),t._v(" "),n("div",{staticClass:"language-py extra-class"},[n("pre",{pre:!0,attrs:{class:"language-py"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" numpy "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" np\n\nnp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("array"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("object")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dtype "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" copy "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" order "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" subok "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ndmin "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("h3",{attrs:{id:"参数说明"}},[t._v("参数说明")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}},[t._v("参数")]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("object")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("任何暴露数组接口方法的对象都会返回一个数组或任何(嵌套)序列。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("dtype")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("数组的所需数据类型，可选。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("copy")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("可选，默认为true，对象是否被复制。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("order")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("C(按行)、F(按列)或A(任意，默认)。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("subok")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("默认情况下，返回的数组被强制为基类数组。 如果为true，则返回子类。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("ndimin")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("指定返回数组的最小维数。")])])])]),t._v(" "),n("h3",{attrs:{id:"数组创建"}},[t._v("数组创建")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}},[t._v("输入")]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[t._v("输出")]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("np.array([1,2,3,4])")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[n("code",[t._v("array([1,2,3,4])")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("创建一个一维数组")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("np.array([[1,2,3],[4,5,6]], dtype=float)")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[n("code",[t._v("array([[1. 2. 3.][4. 5. 6.]])")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("创建一个类型为float的二维数组")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("np.arange(0,3,1)")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[n("code",[t._v("array([0 1 2])")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("创建一个从0开始到3结束(不包含3)步长为1的等差数列")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("np.linspace(0,3,5)")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[n("code",[t._v("array([0. 0.75 1.5 2.25 3.])")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("创建一个从0开始到3结束,总的元素为5个的等差数列,可以包含结束(常用于统计区间内指定不同范围的数据)")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("np.repeat([1,2,3],2)")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[n("code",[t._v("array([1,1,2,2,3,3])")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("创建一个对已有数组元素值复制2次的新数组(对每个元素复制n次)")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("np.title([1,2,3],2)")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[n("code",[t._v("array([1,2,3,1,2,3])")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("创建一个复制数组2次的新数组(对原数组复制n次)")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("np.empty([2,2], dtype = int)")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[n("code",[t._v("array([[ 4611686018427387904 -5764598731833932082][7596498546853937154 562954583945058]])")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("创建了一个2行2列的数组,由于我们未给定初始化值,所以初始化出来的值是随机int8类型")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("np.ones((2,3))")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[n("code",[t._v("array([[1. 1. 1.][1. 1. 1.]])")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("创建一个m行n列的单位矩阵")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("np.zeros((2,3))")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[n("code",[t._v("array([[0. 0. 0.][0. 0. 0.]])")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("创建一个m行n列的0向量矩阵")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("np.random.random(3)")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[n("code",[t._v("array([0.33540741 0.77770008 0.68126503])")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("创建一个0~1之间随机数的1行n列的数组")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("np.random.randn(3)")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[n("code",[t._v("array([-1.89796613 -0.96672881 1.86899636])")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("创建一个1行n列的标准正态分布数组")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("np.random.normal(loc=0,scale=1,size=3)")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[n("code",[t._v("array([-1.55783589 0.99025671 1.992423 ])")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("创建一个1行n列的均值为0,标准差为1的正态分布数组")])])])]),t._v(" "),n("h3",{attrs:{id:"数值类型补充"}},[t._v("数值类型补充")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("bool")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("存储为一个字节的布尔值(True或False)。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("int")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("默认整数，通常为int32或int64。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("int8")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("字节（-128 ~ 127）。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("int16")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("整数（-32768 ~ 32767）。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("int32")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("整数（-2 ** 31 ~ 2 ** 31 - 1）。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("int64")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("整数（-2 ** 63 ~ 2 ** 63 - 1）。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("uint8")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("无符号整数（0 ~ 255）。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("uint16")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("无符号整数（0 ~ 65535）。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("uint32")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("无符号整数（0 ~ 2 ** 32 - 1）。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("uint64")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("无符号整数（0 ~ 2 ** 64 - 1）。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("float16")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("半精度浮点，符号位，5 位指数，10 位尾数。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("float32")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("单精度浮点，符号位，8 位指数，23 位尾数。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("float64或float")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("双精度浮点，符号位，11 位指数，52 位尾数。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("complex64")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("复数，由两个 32 位浮点表示（实部和虚部）。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("complex128或complex")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("复数，由两个 64 位浮点表示（实部和虚部）。")])])])]),t._v(" "),n("h2",{attrs:{id:"数组的索引与变换"}},[t._v("数组的索引与变换")]),t._v(" "),n("blockquote",[n("p",[t._v('Python数组的索引与切片使用中括号 "[]" 选定下标来实现,同时采用 ":" 分割起始位置与间隔,用 ","表示不同的维度, 用 "..."表示遍历剩下的维度。使用'),n("code",[t._v("reshape()")]),t._v("函数可以重构数组。")])]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}},[t._v("输入")]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[t._v("输出")]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("a = np.arange(6).reshape((3,2))")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[n("code",[t._v("array([[0 1][2 3][4 5]])")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("创建了1个从0到6(不包含)的1行6列数组并且转置为3行2列的数组")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("a[:,1]")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[n("code",[t._v("[1 3 5]")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("选取数组的第一列元素(逗号前面的表示行、逗号后面表示列)")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("a[:,[0,1]]")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[n("code",[t._v("[[0 1][2 3][4 5]]")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("拷贝原数组并选取0到1列(返回的即是原数组的复制)")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("a[1,:]")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[n("code",[t._v("[[2 3]]")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("选取数组的第二行 并且返回所有的列数")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("a[[0,1],:]")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[n("code",[t._v("[[0 1][2 3]]")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("选取数组的第一行和第二行 并且返回所有的列数")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("a[1,1]")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[n("code",[t._v("3")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("选取数组的第二行第二列所在的元素")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("a[a[:,1]>2,]")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[n("code",[t._v("[[2 3][4 5]]")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[n("code",[t._v("a[:,1]>2")]),t._v(" 返回第一列数据与2的比较结果 "),n("code",[t._v("[False True True]")]),t._v(" "),n("code",[t._v("a[[False True True],]")]),t._v(" 返回第一行第二行对应的所有列的数组(即当对应行显示为True的时候返回该行)")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("a[a[:,1]>2,] & a[a[:,1]<4,]")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[n("code",[t._v("[[2 3]]")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("多条件判断 返回上述结果元素小于4的情况下的数组")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("a.reshape(2,3)")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[n("code",[t._v("[0 2 4][1 3 5]")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("将原来3行2列的数组转置为2行3列的数组")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("a.T")]),t._v(" 或者 "),n("code",[t._v("np.transpose(a)")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[n("code",[t._v("[0 2 4][1 3 5]")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("数组转置方法 行列转置")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("a.flatten()")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[n("code",[t._v("[0 1 2 3 4 5]")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("将数组降为一维数组(返回原数组的拷贝)")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("a.ravel()")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[n("code",[t._v("[0 1 2 3 4 5]")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("将数组降为一维数组(返回原数组的视图,改变了原数组)")])])])]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[n("code",[t._v("Numpy")]),t._v("的"),n("code",[t._v("ravel()")]),t._v("和"),n("code",[t._v("flatten()")]),t._v("所实现的功能是一致的,都是将制定的多维数组降为一维数组。两者的区别是在于返回拷贝还是视图。")]),t._v(" "),n("ul",[n("li",[n("p",[n("code",[t._v("flatten()")]),t._v("返回原数组的拷贝,并不会改变原数组")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("ravel()")]),t._v("返回修改后的原数组,会影响原始的矩阵。")])])])]),t._v(" "),n("h2",{attrs:{id:"数组的排序"}},[t._v("数组的排序")]),t._v(" "),n("ul",[n("li",[t._v("2020.07.22")])]),t._v(" "),n("blockquote",[n("p",[n("code",[t._v("Numpy")]),t._v(" 提供了多种排序函数,比如"),n("code",[t._v("sort")]),t._v("(直接返回排序后的数组)、"),n("code",[t._v("argsort")]),t._v("(返回数组排序后的下标)、"),n("code",[t._v("lexsort")]),t._v("(根据键值的字典序排序)、"),n("code",[t._v("msort")]),t._v("(沿着第一个轴排序)、"),n("code",[t._v("sort_complex")]),t._v("(对复数按照先实后虚的顺序排序)等。")])]),t._v(" "),n("div",{staticClass:"language-py extra-class"},[n("pre",{pre:!0,attrs:{class:"language-py"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" numpy "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" np\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 一维数组a")]),t._v("\na "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("array"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 直接排序 [2,3,4,5]")]),t._v("\nnp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sort"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\na"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sort"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 降序排列 [5,4,3,2]")]),t._v("\nnp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sort"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("np"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("argsort"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 数组排序后的下标 [1,0,3,2]")]),t._v("\nnp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("argsort"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 二维数组")]),t._v("\nb "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("array"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# axis = 0 表示按列排序 axis = 1 表示按行排列")]),t._v("\nb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sort"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("axis"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("h2",{attrs:{id:"数组的组合"}},[t._v("数组的组合")]),t._v(" "),n("ul",[n("li",[t._v("2020.07.23")])]),t._v(" "),n("blockquote",[n("p",[t._v("数组的组合可以分为: "),n("code",[t._v("水平组合(hstack)")]),t._v("、"),n("code",[t._v("垂直组合(vstack)")]),t._v("、"),n("code",[t._v("深度组合(dstack)")]),t._v("、"),n("code",[t._v("列组合(colume_stack)")]),t._v("、"),n("code",[t._v("行组合(row_stack)")]),t._v("等。")])]),t._v(" "),n("div",{staticClass:"language-py extra-class"},[n("pre",{pre:!0,attrs:{class:"language-py"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" numpy "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" np\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [[0 1][2 3][4 5]]")]),t._v("\na "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("arange"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reshape"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [[0 1 2][3 4 5][6 7 8]]")]),t._v("\nb "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("arange"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reshape"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [[0 1 2][3 4 5]]")]),t._v("\nc "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("arange"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reshape"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v("'''\n水平组合 \n[[0 1 0 1 2]\n [2 3 3 4 5]\n [4 5 6 7 8]]\n'''")]),t._v("\nnp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hstack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nnp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("concatenate"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("axis"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nnp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("axis"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v("'''\n垂直组合\n[[0 1 2]\n [3 4 5]\n [6 7 8]\n [0 1 2]\n [3 4 5]]\n'''")]),t._v("\nnp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vstack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nnp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("concatenate"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("axis"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nnp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("axis"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v("'''\n直接组合\n[0 1 2 3 4 5 0 1 2 3 4 5]\n'''")]),t._v("\nnp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),n("h2",{attrs:{id:"数组的常用统计函数"}},[t._v("数组的常用统计函数")]),t._v(" "),n("ul",[n("li",[t._v("2020.07.23")])]),t._v(" "),n("blockquote",[n("p",[t._v("我们经常需要对数据进行一些统计处理,包括简单的均值、中值、方差、标准差、最大值、最小值等。")])]),t._v(" "),n("div",{staticClass:"language-py extra-class"},[n("pre",{pre:!0,attrs:{class:"language-py"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" numpy "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" np\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [0 1 2 3 4 5]")]),t._v("\na "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("arange"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 统计平均值 2.5")]),t._v("\nnp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mean"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nnp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("average"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 统计方差 2.9166666666666665")]),t._v("\nnp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("var"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 统计标准差 1.707825127659933")]),t._v("\nnp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("std"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 统计最大值 6")]),t._v("\nnp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("max")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 统计最小值 0")]),t._v("\nnp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("min")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 统计最大值所在的索引 6")]),t._v("\nnp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("argmax"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 统计最小值所在的索引 0")]),t._v("\nnp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("argmin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 计算全距 即最大值与最小值的差 5")]),t._v("\nnp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ptp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 计算百分位在统计对象中的值 4.5")]),t._v("\nnp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("percentile"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 计算统计对象的中值 2.5")]),t._v("\nnp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("median"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 计算统计对象的和 15")]),t._v("\nnp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("sum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n\n\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);