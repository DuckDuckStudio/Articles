# 在 WSL 中的 Ubuntu 中新建非 root 用户

## 0. 操作前确认
请确认你已安装 Ubuntu:  
```powershell
[Powered by 虚空终端] PS D:\...> wsl --list --verbose
  NAME              STATE           VERSION
* docker-desktop    Stopped         2
  Ubuntu            Stopped         2
```

## 1. 打开 Ubuntu
通过 Windows 终端配置文件或以下命令打开 Ubuntu:  
```powershell
wsl -d Ubuntu
```

## 2. 新建用户
```bash
sudo adduser 新用户名
sudo usermod -aG sudo 新用户名 # 添加到 sudo 组 (可选)
```

### 2.1 用户已经存在
如果你遇到错误 `fatal: 用户"用户名"已经存在。`，很可能是你在配置 WSL 时就有建过用户了，只是 WSL 默认启动了 root 用户。  
请直接跳过 [第 2 步](#2-新建用户) 直接看 [第 3 步](#3-设置为默认使用用户)。  

## 3. 设置为默认使用用户
```bash
sudo nano /etc/wsl.conf
```
在打开的文件中添加以下内容:  
```conf
[user]
default=用户名
```
(按`Ctrl+X`后按`Y`后按`Enter`保存并退出)  

## 5. 重启 WSL
```bash
exit
```

```powershell
wsl --shutdown
wsl -d Ubuntu
```
