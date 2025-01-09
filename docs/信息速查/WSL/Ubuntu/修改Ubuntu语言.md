# 将 WSL 中的 Ubuntu 的默认语言修改为中文

## 0. 操作前确认
请确认你已安装 Ubuntu:  
```powershell
[Powered by 虚空终端] PS D:\...> wsl --list --verbose
  NAME              STATE           VERSION
* docker-desktop    Stopped         2
  Ubuntu            Stopped         2
```

## 1. 打开 Ubuntu
通过Windows终端配置文件或以下命令打开 Ubuntu:  
```powershell
wsl -d Ubuntu
```

## 2. 更新 apt 软件包列表
```bash
sudo apt update
```

## 3. 安装中文(简体)语言包
```bash
sudo apt install language-pack-zh-hans
```

## 4. 设置语言环境
```bash
sudo dpkg-reconfigure locales
```

```bash
用户名@设备名:~$ sudo dpkg-reconfigure locales
[sudo] 用户名 的密码：
Generating locales (this might take a while)...
  zh_CN.UTF-8... done
  zh_SG.UTF-8... done
Generation complete.
```

![sudo dpkg-reconfigure locales - 1](imgs/修改Ubuntu语言/sudo%20dpkg-reconfigure%20locales-1.png)

![sudo dpkg-reconfigure locales - 2](imgs/修改Ubuntu语言/sudo%20dpkg-reconfigure%20locales-2.png)

## 5. 重启 WSL
```bash
exit
```

```powershell
wsl --shutdown
wsl -d Ubuntu
```
