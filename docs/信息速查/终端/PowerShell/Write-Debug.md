# Write-Debug
`Write-Debug` 是 PowerShell 中的一个 cmdlet，用于将调试信息输出到调试流。这对于开发脚本时调试代码非常有用，尤其是当你希望在调试模式下打印信息而不影响常规输出时。  

## 示例
```powershell
Write-Debug "Ciallo～(∠・ω< )⌒☆"
```

当你使用 `Write-Debug` 输出信息时，这些信息并**不会**直接显示在标准输出中，而是通过 PowerShell 的调试流传递。这意味着你**只有在启用了调试时，才能看到这些信息<sup>[0](#启用调试)</sup>**。  

### 启用调试
> 官方文档: https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_preference_variables?view=powershell-7.5#debugpreference  

要查看 `Write-Debug` 输出的信息，首先需要启用调试流。你可以使用 `$DebugPreference` 变量来控制调试信息的显示:  

| 值 | 直译 | 表示 |
|-----|-----|-----|
| _Break_ | 中断 | 在发生错误或引发异常时进入调试器。 |
| `Stop` | 停止 | 显示调试消息并停止执行。 将错误写入控制台。 |
| `Inquire` | 询问 | 显示调试消息并询问是否继续。 |
| `Continue` | 继续 | 显示调试消息并继续执行。 |
| `SilentlyContinue` (默认) | 静默继续 | 无效果。 不会显示调试消息，并且在不会中断的情况下继续执行。 |

例如，要启用调试输出，你可以设置 `$DebugPreference` 为 `Continue`:  

```powershell
$DebugPreference = "Continue"
Write-Debug "凡是以各种名义发送不明链接，让你输入银行卡号、手机验证码和各种密码的，都是诈骗！"
```
