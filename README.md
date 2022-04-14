# adcoc
##### Administrative division code of China
##### 中国行政区划代码
## 数据
全部来自于[民政局官方网站](http://www.mca.gov.cn/article/sj/xzqh/)

[2021年中华人民共和国县以上行政区划代码变更情况](http://www.mca.gov.cn/article/sj/xzqh/2021/20211201.html)


[2020年中华人民共和国县以上行政区划代码（截止2020年12月31日）](http://www.mca.gov.cn/article/sj/xzqh/2020/20201201.html)
## 使用方法

#### 安装
`npm i -S adcoc`

#### 应用
```javascript
import { treeParser } from 'adcoc'
const treeSourceCache = treeParser();
console.log(treeSourceCache)
const customTreeSourceCache = treeParser([
    { 'code': '110000', 'name': '北京市' },
    { 'code': '110101', 'name': '东城区' },
]);
console.log(customTreeSourceCache)
```
```html
<script src="//unpkg.com/adcoc/source/tree.iife.js"></script>
<script>
    console.log(window.adcocTree)
</script>
```

## License

The MIT License (MIT)

Copyright (c) 2022-present, idler8

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
