# image2base64

> An electron-vue project

#### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production (Mac)
npm run build:darwin

# build electron application for production (Windows)
npm run build:win32

# build electron application for production (Linux)
npm run build:linux


```

---

electron 小 demo，用到了 [electron-vue](https://github.com/SimulatedGREG/electron-vue) 这个 vue-cli 模板，主要作用是将剪切板中的图片转成 base64 编码的，并通过一键复制成 img 标签或 markdown 的图片语法，可以通过滑块调整图片缩放和压缩率。

编写的目的是，Typora 没有方便的粘贴图片的办法，`![Alt text][]` 如果在其中写入本地图片的相对路径的话，导出成 html 会导致图片消失，另一种办法是在其中写入图片的 base64 编码。markdown 中调节图片大小根据编辑器的支持有不同的写法，我用的 typora 只支持基于 <img> 来调节因此我加上了滑动调节大小的功能，又因为转成 base64 后长度很长，因此使用 canvas.toDataURL 的 api 来进行压缩。

demo 的界面：

![main_interface](https://github.com/HongHaiyang/image2base64/raw/master/src/renderer/assets/main_interface.png)

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue)@[1c165f7](https://github.com/SimulatedGREG/electron-vue/tree/1c165f7c5e56edaf48be0fbb70838a1af26bb015) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).

