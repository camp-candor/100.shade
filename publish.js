
var FS = require('fs-extra')

var complete = () =>{

  console.log("complete")

  //FS.copySync()

}


const { exec } = require('child_process');

exec('yarn parcel build src/index.html', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);

  complete()

  
});