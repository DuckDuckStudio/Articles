# 三种定义变量的方式的区别

| 定义方式 | 重新赋值 | 作用域 | 变量提升 | 重复声明 | 文档 |
|-----|-----|-----|-----|-----|-----|
| var | 是 | 函数作用域 | undefined | 是 | [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/var) |
| let | 是 | 块级作用域 | 否 | 否 | [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/let) |
| const | 否 | 块级作用域 | 否 | 否 | [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/const) |
