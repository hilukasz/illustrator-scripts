flipHorizontally();
flipHorizontally(duplicateObject());
moveObject();

function moveObject(){
    var idoc = app.activeDocument;  
    var sel = idoc.selection[0];  
    sel.left = sel.left+sel.width;  
}

function duplicateObject(){
    selection = app.activeDocument.selection;
    newItem = selection[0].duplicate();
    return newItem;
}

function flipHorizontally(objectToFlip) {
    mySelection = objectToFlip;
    var doc = app.activeDocument;              
    var s    = doc.selection;                            
    var sl   = s.length;                                    
    var m  = app.getScaleMatrix(-100,100);      
    for(var i = 0 ; i < sl; i++) s[i].transform(m);
    app.redraw();
}
