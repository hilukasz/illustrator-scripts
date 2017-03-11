// Written by Lukasz Wieczorek (www.lukasz.io) and meant to be free to use
// This script is released under GPLv3 http://www.gnu.org/licenses/gpl.html
// Please don't repackage or sell without permission.

#target illustrator  
function test(){  
doc = app.activeDocument;   
sel = doc.selection[0];   
  
var rotate;   
var numberOfObjects;   
var radius;   
   
  
initWindow();   
  
var iterations = 360/numberOfObjects;   
  
var selectionHeight = sel.height;   
var selectionWidth = sel.width;   
  
for (var i = 0; i <360; i+=iterations){   
    var angelInRAD = radians(i);   
  
    var currentX = Math.cos(angelInRAD)*radius+(doc.width/2)-(selectionWidth/2);   
    var currentY = Math.sin(angelInRAD)*radius-(doc.height/2)+(selectionHeight/2);   
  
    var newShape = sel.duplicate();   
  
    newShape.left = currentX;   
    newShape.top = currentY;   
       
    var XYdoc = [doc.width, doc.height];   
       
    if(rotate){   
      newShape.rotate(i);   
    }   
}   
  
function radians(input){   
  return input*(Math.PI/180);   
}   
  
function print(i) {   
    if(i == "object"){   
        print("you are trying to printObject, use printObj(); function");   
    }   
    else {     
        $.write(i+"\n");   
    }   
}   
  
// window   
  
  
  
  
function initWindow(){   
    var win, windowResource;   
       
    windowResource = "dialog {  \  " +  
        "orientation: 'column', \  " +  
        "alignChildren: ['fill', 'top'],  \  " +  
        "preferredSize:[300, 130], \  " +  
        "text: 'Wutastic art generator',  \  " +  
        "margins:15, \  " +  
        "\  " +  
        "sliderPanel: Panel { \  " +  
            "orientation: 'row', \  " +  
            "alignChildren: 'right', \  " +  
            "margins:15, \  " +  
            "text: ' PANEL ', \  " +  
            "st: StaticText { text: 'Diameter:' }, \  " +  
            "sll: Slider { minvalue: 1, maxvalue: 1000, value: 3v00, size:[220,20] }, \  " +  
            "tee: EditText { text: '500', characters: 5, justify: 'left'}, \  " +  
            "st: StaticText { text: 'Iterations:' }, \  " +  
            "sl: Slider { minvalue: 1, maxvalue: 1000, value: 30, size:[220,20] }, \  " +  
            "te: EditText { text: '12', characters: 5, justify: 'left'} \  " +  
            "} \  " +  
        "\  " +  
        "bottomGroup: Group{ \  " +  
            "cd: Checkbox { text:'Rotate?', value: true }, \  " +  
            "cancelButton: Button { text: 'Cancel', properties:{name:'cancel'}, size: [120,24], alignment:['right', 'center'] }, \  " +  
            "applyButton: Button { text: 'Apply', properties:{name:'ok'}, size: [120,24], alignment:['right', 'center'] }, \  " +  
        "}\  " +  
    "}";  
       
       
       
    win = new Window(windowResource);   
       
    win.bottomGroup.cancelButton.onClick = function() {   
      return win.close();   
    };   
    win.bottomGroup.applyButton.onClick = function() {   
      return win.close();   
    };   
http://www.hidehocomics.com/wantlist/  
    win.sliderPanel.sl.onChange = win.sliderPanel.sl.onChanging = function() {   
        win.sliderPanel.te.text = Math.round(this.value);   
    }   
  
    win.sliderPanel.sll.onChange = win.sliderPanel.sll.onChanging = function() {   
        win.sliderPanel.tee.text = Math.round(this.value);   
    }  
  
  
    win.sliderPanel.tee.onChange = win.sliderPanel.tee.onChanging = function(){  
        win.sliderPanel.sll.value = this.text;  
    };  
  
  
    win.sliderPanel.te.onChange = win.sliderPanel.te.onChanging = function(){  
        win.sliderPanel.sl.value = this.text;  
    };  
  
    win.show();   
       
    numberOfObjects = Math.round(win.sliderPanel.sl.value);   
    rotate = Math.round(win.bottomGroup.cd.value);   
    radius =  Math.round(win.sliderPanel.sll.value);   
       
    //print(numberOfObjects);   
}   
}  
test(); 