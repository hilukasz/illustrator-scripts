var newContent;
 function getNewContent(){
        newContent = prompt('new content','');
  }getNewContent();

alert(newContent);

for(var i = 0; i < app.activeDocument.selection.length; i++){
    app.activeDocument.selection[i].contents = newContent;
 }