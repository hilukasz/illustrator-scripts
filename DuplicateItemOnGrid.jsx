﻿////////////////////////////////////////////////////
// Written By Łukasz Wieczorek
////////////////////////////////////////////////////
//SETUP
 
app.userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS;
var doc = app.activeDocument;
if(doc.selection.length > 0){    
    var selected = doc.selection;
    var selectedHeight = selected[0].height;
    var repeatAmount,
          myInput,
          splitInput,
          margin,
          selectedPosition;
 
    // Run
    userPrompt();
    selectedPosition = selected.position;
    var newItem = selected[0].duplicate( doc, ElementPlacement.PLACEATEND );  
    for(i=0; i< repeatAmount ; i++){
        var newHeight = selectedHeight - newItem.position[1] + margin;
        newItem.position = [newItem.position[0],-newHeight];
        doc.selection = null;
        newItem.selected = true;
        var selectedPosition = selected.position;
        newItem.duplicate( doc, ElementPlacement.PLACEATEND );  
    }
     
    function userPrompt(){
        myInput = prompt('magin, repeat amount','10,2');
        splitInput = myInput.split(",");
        margin = Number(splitInput[0]);
        repeatAmount = Number(splitInput[1]);
    }
}
else {
        alert('mannnnn, you so crazy. need to select an item to copy it, DUH.');
}