# 在 WSL 中的 Ubuntu 中新建非 root 用户

## 1. 新建用户
```bash
sudo adduser 新用户名
sudo usermod -aG sudo 新用户名 # 添加到 sudo 组 (可选)
```

### 1.1 用户已经存在
如果你遇到错误 `fatal: 用户"用户名"已经存在。`，很可能是你在配置 WSL 时就有建过用户了，只是 WSL 默认启动了 root 用户。  
请直接跳过 [第 1 步](#1-新建用户) 直接看 [第 2 步](#2-设置为默认使用用户)。  

## 2. 设置为默认使用用户
```bash
sudo nano /etc/wsl.conf
```
在打开的文件中添加以下内容:  
```conf
[user]
default=用户名
```
(按`Ctrl+X`后按`Y`后按`Enter`保存并退出)  

## 3. 重启 WSL
```bash
exit
```

```powershell
wsl --shutdown
wsl -d Ubuntu
```
