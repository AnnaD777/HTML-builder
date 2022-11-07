const fs = require('fs');
fs.open('text.txt', 'w', (err) => {
  if(err) throw err;
  console.log('File created');
  
});


  fs.writeFile('text.txt', ' Hello my friend.', (err) => {
      if(err) throw err;
      console.log('Content added');
  });


