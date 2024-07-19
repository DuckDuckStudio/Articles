# C# 控制台程序中的 Write 与 WriteLine 的区别 (System)
*由 Visual Studio 创建的 NET 8.0 控制台程序*  

在 C# 的控制台程序中，`Write` 和 `WriteLine` 是用来输出文本到控制台的两个常用方法，它们之间有以下区别：  

## Write 方法

`Console.Write` 方法用于输出指定的文本，但**不会自动换行**。  
使用 `Write` 方法输出的内容将会依次显示在**同一行**上。  
示例：  
```csharp
Console.Write("Hello, ");
Console.Write("World!");
// 输出结果为：Hello, World!
```

## WriteLine 方法

`Console.WriteLine` 方法用于输出指定的文本，并在末尾**自动换行**。  
每次调用 `WriteLine` 方法输出的内容都会从**新的一行**开始。  
示例：  
```csharp
Console.WriteLine("Hello, ");
Console.WriteLine("World!");
// 输出结果为：
// Hello,
// World!
```

## 总结区别

| 方法 | 是否自动换行 | 命令 | 文档 |
|-----|-----|-----|-----|
| `Write` | ✕ | `Console.Write()` | [Console.Write 方法 (System) \| Microsoft Learn](https://learn.microsoft.com/zh-cn/dotnet/api/system.console.write?view=net-8.0) |
| `WriteLine` | ✓ | `Console.WriteLine()` | [Console.WriteLine 方法 (System) \| Microsoft Learn](https://learn.microsoft.com/zh-cn/dotnet/api/system.console.writeline?view=net-8.0#system-console-writeline) |
