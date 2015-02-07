if ( app.activeDocument.selection.length > 0){

    var newContent;
     function getNewContent(){
            newContent = prompt('new content','');
      }getNewContent();

    
    for(var i = 0; i < app.activeDocument.selection.length; i++){
        app.activeDocument.selection[i].contents = newContent;
    }
}
else { alert("yo dawg, I heard through the grapevine you hate selecting text. You should do that. Else this script doesn't work.");}