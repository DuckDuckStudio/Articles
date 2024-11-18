import { writeFileSync, readdirSync, statSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 简化的辅助函数来获取当前模块的目录
const getScriptDir = () => path.dirname(fileURLToPath(import.meta.url));

try {
  const scriptDir = getScriptDir(); // 直接使用简化函数获取脚本目录
  const repoRoot = path.join(scriptDir, '..', '..'); // 当前目录向上两级，得到项目根目录
  const docsRoot = path.join(repoRoot, 'docs')
  const repoUrl = 'https://duckduckstudio.github.io/Articles/#';

  const urls = new Set();

  // 扫描目录并生成 URL 列表
  function scanDirectory(dir) {
    // 定义一个忽略的文件路径列表，放在函数内部
    const ignorePatterns = [
      '_Footer',     // 忽略某个特定文件
      '404.html',
      '.nojekyll',
      '某鸭的文章页面模板.html',
      'exam/ple.html', // 忽略某个目录下的特定文件 - md的不用后缀
      'exam/ple/',      // 忽略某个目录
    ];

    const files = readdirSync(dir);
    files.forEach(file => {
      const fullPath = path.join(dir, file);
      const stat = statSync(fullPath);

      // 如果是目录，递归扫描
      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else if (file.endsWith('.md') || file.endsWith('.html')) {
        const relativePath = path.relative(docsRoot, fullPath).replace(/\\/g, '/');
        const encodedPath = encodeURIComponent(relativePath).replace(/%2F/g, '/'); // 对路径进行编码并替换%2F为/

        // 删除 URL 中的 `.md` 后缀
        const urlWithoutMd = encodedPath.replace(/\.md$/, '');

        // 如果当前路径在忽略列表中，则跳过
        if (ignorePatterns.some(pattern => urlWithoutMd.includes(pattern))) {
          return; // 跳过此文件
        }

        const fullUrl = `${repoUrl}/${urlWithoutMd}`;
        urls.add(fullUrl);
      }
    });
  }

  scanDirectory(docsRoot);

  // 获取当前日期并格式化
  const currentDate = new Date().toISOString();

  // 创建 sitemap.xml 文件内容
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  sitemap += `<!-- 生成日期: ${currentDate} -->\n`; // 添加生成日期的注释
  sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
               xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
               xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
                                   http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n\n`;

  // 生成 URL 列表
  urls.forEach(url => {
    sitemap += `<url>\n`;
    sitemap += `  <loc>${url}</loc>\n`;
    sitemap += `</url>\n`;
  });

  sitemap += `</urlset>\n`;

  // 保存 sitemap.xml 文件
  writeFileSync(path.join(docsRoot, 'sitemap.xml'), sitemap, 'utf8');// 要生成在 docs 文件夹中才能部署

  console.log('[INFO] 已成功生成并保存为 sitemap.xml');
  process.exit(0);

} catch (error) {
  console.error('[ERROR] 生成 Sitemap 时发生错误:', error.message);
  process.exit(1);
}
