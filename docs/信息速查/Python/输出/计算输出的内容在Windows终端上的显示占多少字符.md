# 计算输出的内容在 Windows 终端 上的显示占多少字符

> 前置说明  
> 本文使用 Windows 终端，Cascadia Mono 字体。  

这是一段示例代码:  

```python
from colorama import init, Fore

init(autoreset=True)

s: str = f"{Fore.MAGENTA}乌蒙山connect着山out山" # 显示的内容
d: int = 0 # 显示的内容所占字符位数

for c in s.replace(Fore.MAGENTA, ""): # Fore.MAGENTA 占 5 个字符，但不显示，所以去掉
    d += 1
    if not ((ord(c) < 128) or (c == "♪")):
        # 如果这个 char 不是 ASCII 字符或 ♪ 等 显示一个字符大小的 字符
        # 例如中文或日文
        d += 1 # 显示时多占一个字符的位置

print(d)
```

预期最终的 `d` 是 `22`。  

## 这是怎么计算的

我们可以数一下去掉颜色后的输出:  

```text
乌蒙山connect着山out山
```

这句话中有 `6` 个中文字符，`10` 个英文字符（ASCII字符），所以显示占的字符数是:  

$$
6 \times 2 + 10 = 22
$$


## 验证

```python
from colorama import init, Fore

init(autoreset=True)

s: str = f"{Fore.MAGENTA}乌蒙山connect着山out山" # 显示的内容
d: int = 0 # 显示的内容所占字符位数

for c in s.replace(Fore.MAGENTA, ""): # Fore.MAGENTA 占 5 个字符，但不显示，所以去掉
    d += 1
    if not ((ord(c) < 128) or (c == "♪")):
        # 如果这个 char 不是 ASCII 字符或 ♪ 等 显示一个字符大小的 字符
        # 例如中文或日文
        d += 1 # 显示时多占一个字符的位置

print(f"{s}|")
print(f"{" " * d}|")
print(f"{" " * len(s)}|")
```

预期末尾的两个 `|` 能对齐。  

![末尾标识对齐](https://duckduckstudio.github.io/Articles/信息速查/Python/输出/photos/计算输出的内容在Windows终端上的显示占多少字符/末尾标识对齐的输出.png)

如果只计算 `len(s)` 的话这两个 `|` 不会对齐（不够）:  

![末尾标识未对齐](https://duckduckstudio.github.io/Articles/信息速查/Python/输出/photos/计算输出的内容在Windows终端上的显示占多少字符/末尾标识未对其的输出.png)
