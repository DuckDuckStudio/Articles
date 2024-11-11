# PowerShell vs CMD

| CMD | PowerShell | 用途 | 备注 |
|-----|-----|-----|-----|
| / | `Get-Content "file.txt"` | 读取文件内容 | [More](#Get-Content) |
| `echo` | `Write-Host` / `Write-Output` | 输出 | [Diff in PowerShell](#echo) |
| `title 标题` | `$host.ui.RawUI.WindowTitle = "标题"` | 修改当前会话窗口标题 | / |

## 备注
### Get-Content
1. **读取并输出** 文件内容  

```powershell
Get-Content "file.txt"
```
这将读取文件并将内容显示在控制台上。  

2. 将文件内容 **存储到变量**  
你还可以将文件的内容存储到变量中，供后续操作使用:  

```powershell
$fileContent = Get-Content "file.txt"
```

3. **按行读取** 文件  
`Get-Content` 默认按行读取文件。如果你想读取所有内容并逐行输出，可以使用如下命令：  

```powershell
Get-Content "file.txt" | ForEach-Object { Write-Host $_ }
```

4. 读取 **大型文件** 时 **按块读取**  
如果文件非常大，你可以使用 `-ReadCount` 参数来按块读取文件：  

```powershell
Get-Content "file.txt" -ReadCount 1000
```

这个命令每次读取 `1000` 行，适用于处理大文件。  

5. 读取文件并以 `UTF-8` 编码显示  
如果文件使用非默认编码格式 (例如 `UTF-8`) 保存，你可以 **指定编码** ：  

```powershell
Get-Content "file.txt" -Encoding UTF8
```

6. 以 **逆序读取** 文件  
你也可以按逆序读取文件内容：  

```powershell
Get-Content "file.txt" | Select-Object -Last 10
```

这个命令会显示文件的最后 `10` 行。  

---

<h3 id="echo">Write-Host vs Write-Output</h3>

| Command | Do what |
|-----|-----|
| `Write-Host` | 用于直接打印到控制台（不用于进一步处理） |
| `Write-Output` | 用于将输出发送到管道（用于链接命令） |

