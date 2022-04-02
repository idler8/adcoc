# adcoc

## Usage

#### Install
`npm i -S adcoc`

#### Import
```javascript
import treeData from 'adcoc/source/tree.json'
console.log(treeData)

import {treeParser} from 'adcoc'
console.log(treeParser([
    { 'code': '110000', 'name': '北京市' },
    { 'code': '110101', 'name': '东城区' },
]))
```
```html
<script src="//unpkg.com/adcoc@1.0.0/source/tree.iife.js"></script>
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