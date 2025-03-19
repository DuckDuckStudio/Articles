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
通过 Windows 终端配置文件或以下命令打开 Ubuntu:  
```powershell
wsl -d Ubuntu
```

## 3. 设置语言环境
```bash
sudo dpkg-reconfigure locales
```

```bash
用户名@设备名:~$ sudo dpkg-reconfigure locales
[sudo] 用户名 的密码：
Generating locales (this might take a while)...
  zh_CN.UTF-8... done # 中文简体
  zh_SG.UTF-8... done # 中文 - 新加坡
Generation complete.
```

![sudo dpkg-reconfigure locales - 1](imgs/修改Ubuntu语言/sudo%20dpkg-reconfigure%20locales-1.png)  
(一直按 ↓ 键到最下面找到 `zh` 那些，按照你要简体还是繁体选，按空格确认，`Enter` 下一页)  

![sudo dpkg-reconfigure locales - 2](imgs/修改Ubuntu语言/sudo%20dpkg-reconfigure%20locales-2.png)  
(和上一页的操作方法一致，找到你刚选的那个按下`Enter`选中)  

## 4. 重启 WSL
```bash
exit
```

```powershell
wsl --shutdown
wsl -d Ubuntu
```

> [!TIP]  
> 如果还有问题试试这个:  
> ```bash
> sudo apt update
> sudo apt install language-pack-zh-hans
> ```
