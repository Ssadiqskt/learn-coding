var fs = require('fs');
fs.readFile('file2.txt','utf8',readingFile);
function readingFile(error,data){
    if (error) {
        console.log('error',error);
    } else {
        console.log(data);
        fs.appendFile('file1.txt',data,'utf8',writing);
    }
};
 

function writing(error,data){
    if (error) {
        console.log('error',error);
    } else {
        console.warn('copied.....');
    }
}