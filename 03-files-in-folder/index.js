const fs = require('fs');
fs.readdir('/HTML-builder/HTML-builder/03-files-in-folder/secret-folder', (err, files) => {
   if(err) throw err; 
   console.log('В папке находятся файлы:' + files);
});

