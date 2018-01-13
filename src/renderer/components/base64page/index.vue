<template>
  <div>
    <el-container>
      <el-header>图片转成 base64 编码</el-header>
      <el-main>
        <div class="converter-input">
          <el-input  type="textarea" :rows="2" placeholder="请粘贴内容" v-on:paste.native="paste">
          </el-input>
        </div>
        <div class="converter-prompt">所粘贴图片：</div>
        <img class="converter-img" :src="pasteImageData">
        <div class="converter-button">
        <el-button type="primary">一键复制 (&lt;img&gt;)</el-button>
        <el-button type="primary" style="margin-left:6%;">一键复制 (markdown)</el-button>
        </div>
      </el-main>
    </el-container>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        pasteImageData: ""
      }
    },
    mounted() {},
    methods: {
      paste(e) {
        if (!(e.clipboardData && e.clipboardData.items)) {
          return;
        }
        for (let i = 0, len = e.clipboardData.items.length; i < len; i++) {
          let item = e.clipboardData.items[i];
          if (item.kind === "file") {
            // pasteFile就是获取到的文件 (blob 对象)           
            let pasteFile = item.getAsFile();
            if (pasteFile.size > 0 && pasteFile.type.match('^image/')) {
              console.log('图片')
              this.blobToBase64(pasteFile, (data) => {
                this.pasteImageData = data
              })
            }
          } else {
            console.log('粘贴的不是文件')
          }
        }
      },
      blobToBase64(blob, callback) {
        let reader = new FileReader();
        reader.onload = function (e) {
          callback(e.target.result);
        }
        reader.readAsDataURL(blob);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-header,
  .el-footer {
    background-color: lightblue;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #f9f9f9;
    color: #333;
    text-align: center;
    /* line-height: 160px; */
  }

  body>.el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .converter-input {
    display: inline-block;
    width: 60%;
  }

  .converter-prompt{
    display:inline-block;
    width: 60%;
    text-align: left;
    margin-top: 4%;
  }

  .converter-img{
    display: block;
    margin: 4% auto 0 auto;
    box-shadow: 1px 3px 8px grey;
  }

  .converter-button{
    margin-top: 4%;
  }
</style>