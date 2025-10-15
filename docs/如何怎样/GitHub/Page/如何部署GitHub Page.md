# 如何部署GitHub Page

## 前提条件
- 你有一个 GitHub 账户 ([点我注册](https://github.com/signup))
- 你的设备上有 Git 并已配置 ([点我下载](https://git-scm.com/downloads))
- **你有网页文件**

## 具体步骤
### 创建一个 GitHub 仓库
(已有 GitHub 仓库的可以跳过此步)  
点击 [这个链接](https://github.com/new) 在 GitHub 上创建一个新仓库。   

> [!NOTE]
> 仓库名称你可以自己取，但有个特殊的名称:  
> 当你使用自定义名称时，GitHub Page的默认链接是`https://你的用户名.github.io/你的仓库名/`，  
> 而当你使用`你的用户名.github.io`作为仓库名称时，GitHub Page的默认链接是`https://你的用户名.github.io/`。  
> 而当你使用自己的用户名作为仓库名称时，也会设置GitHub的个人资料。  

### 将本地代码推送到新仓库上
在创建完成新的 GitHub 仓库后，复制 Quick setup 给出的 HTTPS 链接(格式为`https://github.com/用户名/仓库名.git`)，然后依次执行下面的代码:  
```powershell
cd "你的本地目录"
git init # 初始化 Git 仓库
git remote add origin <这里填前面提到的链接，以.git结尾> # 链接到远程仓库
# 例如 git remote add origin https://github.com/用户名/仓库名.git
git add . # 将所有文件添加到暂存区(如需忽略一部分文件请添加.gitignore文件)
git commit -m "Initial commit" # 提交修改，提交信息可以自己写，这里是Initial commit
git push # 将修改推送到远程仓库
```

> [!NOTE]
> 这里的注释遵循 PowerShell 的注释格式，**在使用时请勿复制注释**。  
> 注释以`#`开头。  

### 部署 GitHub Page
在推送完代码后，点击仓库界面中的`Settings`(上方栏) > `Pages`(左侧栏) (或者通过链接`https://github.com/用户名/仓库名/settings/pages`打开)，然后找到`Build and deployment`。  
`Source`选择`Deploy from a branch`  
`Branch`选择一个分支(默认`main`) / 选择一个文件夹(默认`(root)`)  
最后点击`Save`即可。  

## 查看部署情况
每次有修改(包括初始部署)时都会有个GitHub Action，你可以在`https://github.com/用户名/仓库名/actions`查看(上方栏选`Actions`)，  
当页面部署完成后GitHub Action应该会打上一个让人放心的小 **绿** 钩。正在部署则是 **黄** 色的，取消部署则是 **灰** 色的(灰色感叹号，或者红色叉叉)。  

## 访问部署后的网页
最后，你就可以通过GitHub Page给出的链接访问网页啦！  

### 关于最后的域名
GitHub Page会给出二级域名来共使用，具体见下:  
当你使用 **自定义仓库名称** 时，GitHub Page的默认链接是`https://你的用户名.github.io/你的仓库名/`，  
而当你使用 **`你的用户名.github.io`** 作为仓库名称时，GitHub Page的默认链接是`https://你的用户名.github.io/`。 

当然你也可以链接自己的域名，在Page设置页的`Custom domain`处。  