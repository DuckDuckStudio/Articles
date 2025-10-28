# 在 .gitignore 文件中排除特定文件或目录

在使用 Git 进行版本控制时，有时我们需要忽略某些文件或目录，但又希望保留其中的某些特定文件或目录。这可以通过在 .gitignore 文件中使用 `!` 标志来实现。  

## 简单总结

```gitignore
# 注意这里有个 *
.vscode/*
# 注意前面有个 !
!.vscode/launch.json
```

## 举个栗子🌰

```powershell
[Powered by 虚空终端] PS D:\Duckhome\CodeDebug\test> cat .gitignore
# 正常忽略
.vscode/
[Powered by 虚空终端] PS D:\Duckhome\CodeDebug\test> tree /f
Folder PATH listing for volume Data
Volume serial number is 8467-9657
D:.
│   .gitignore
│
└───.vscode
        launch.json

[Powered by 虚空终端] PS D:\Duckhome\CodeDebug\test> git clean -xn
Would remove .vscode/
```

这时候整个 `.vscode` 文件夹都被忽略了，但我们希望在版本控制中保留 `launch.json`。  

我们修改 `.gitignore` 成这样:  
```gitignore
# 尝试保留 .vscode/launch.json
.vscode/
!.vscode/launch.json
```

这样看起来就可以了。**对吗？**

```powershell
[Powered by 虚空终端] PS D:\Duckhome\CodeDebug\test> cat .gitignore
# 尝试保留 .vscode/launch.json
.vscode/
!.vscode/launch.json
[Powered by 虚空终端] PS D:\Duckhome\CodeDebug\test> git clean -xn
Would remove .vscode/
```

看起来**不对**，Git 还是想要移除整个 `.vscode` 目录。这该怎么办捏？  

很简单，问题出在忽略那行——**我们这里是忽略整个 `.vscode` 目录而不是这个目录下的所有文件。**  

```gitignore
# 忽略整个目录
.vscode/

# 忽略目录下的所有文件
.vscode/*
```

所以，这里把 `.vscode/` 改成 `.vscode/*` 就可以了:  

```powershell
[Powered by 虚空终端] PS D:\Duckhome\CodeDebug\test> cat .gitignore
# 这就对了
.vscode/*
!.vscode/launch.json
[Powered by 虚空终端] PS D:\Duckhome\CodeDebug\test> git clean -xn
[Powered by 虚空终端] PS D:\Duckhome\CodeDebug\test> git status
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .vscode/

nothing added to commit but untracked files present (use "git add" to track)
[Powered by 虚空终端] PS D:\Duckhome\CodeDebug\test> ls .vscode

    Directory: D:\Duckhome\CodeDebug\test\.vscode

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a---          2025/10/29     1:30              3 launch.json
```
