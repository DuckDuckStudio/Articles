# 通过 GitHub API 获取仓库最新提交内容
代码语言：HTML, JavaScript  

在你的html中添加如下代码:  
```html
<p><strong>网站最新修改内容: <span id="commitMessage">[加载中...]</span></strong></p>
<!-- 单行+加粗+未加载出来时显示“加载中” -->
```

然后再在 **上面那行代码的下面** 添加如下JS代码:  
```html
<script>
// 你仓库的GitHub API
// 一般为：https://api.github.com/repos/仓库所有者/仓库名称/commits
// 请自行替换“仓库所有者”与“仓库名称”
const repoUrl = 'https://api.github.com/repos/user/repo/commits';

// 获取数据
fetch(repoUrl)
    .then(response => response.json())
    .then(data => {
        // 获取最后提交信息
        const latestCommitMessage = data[0].commit.message;
        
        // 修改页面中的显示
        document.getElementById('commitMessage').innerHTML = /*可在这里做更详细的修改，目前仅显示最后提交信息→*/`${latestCommitMessage}`;
    })
    .catch(error => console.error('Error fetching data:', error));
    // 如果没获取到在控制台讲下
</script>
```

这样就好了，是不是很简单捏？  
