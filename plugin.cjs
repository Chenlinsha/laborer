const path = require('path');
const fs = require('fs');
const shell = require('shelljs');
const { log } = require('console');
class EndingConsolePlugin {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    let datas = '';
    let paths = this.options.path;
    shell.exec('git log ', {
      //silent: true
    },  (code, stdout, stderr) =>{
      if (stdout !== "") {
        datas = stdout;
      } else {
        datas = stderr;
      }
      const dirname = path.resolve('./dist');
      if (!fs.existsSync(dirname)) {
        fs.mkdir(dirname);
      }
      fs.writeFile(`${paths}\\readme.md`, datas, (err) => {
        if(err)return
        console.log('写入成功')
      })
     // console.log(fs.readFileSync(`${paths}\\readme.md`, 'utf8'));
    });
  }



}
module.exports = EndingConsolePlugin;