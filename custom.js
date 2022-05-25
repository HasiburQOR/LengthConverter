let feet = document.getElementById("feet");
let meter = document.getElementById("meter");
let inches = document.getElementById("inches");
let cm = document.getElementById("cm");
let yards = document.getElementById("yards");
let km = document.getElementById("km");
let miles = document.getElementById("miles");

// feet to others converter js start 

function feetToOther(val){
    meter.value =  val/3.2808; 
    inches.value =  val*12;   
    cm.value    =  val/0.032808; 
    yards.value  =  val*0.33333;  
    km.value    =  val/3280.8; 
    miles.value  =  val*0.00018939; 
}

// feet to others converter js end 

// meter to others converter js start 

function meterToOther(val){
    feet.value = val*3.2808;
    inches.value = val*39.370;  
    cm.value   = val/0.01;
    yards.value = val*1.0936; 
    km.value   = val/1000;
    miles.value = val*0.00062137;
}


// meter to others converter js end 

// inches to others converter js start 

function inchesToOther(val){
    feet.value = val*0.083333;
    meter.value = val/39.370;  
    cm.value = val/0.39370;
    yards.value = val*0.027778; 
    km.value = val/39370;
    miles.value = val*0.000015783;
}

// inches to others converter js end 

// cm to others converter js start 
function cmToOther(val){
    feet.value = val*0.032808;
    meter.value = val/100;  
    inches.value = val*0.39370;
    yards.value = val*0.010936; 
    km.value = val/100000 ;
    miles.value = val*0.0000062137;
}

// cm to others converter js end


// yards to others converter js start

function yardsToOther(val){
    feet.value = val*3;
    inches.value = val*36;  
    cm.value = val/0.010936;
    meter.value = val/1.0936; 
    km.value = val/1093.6;
    miles.value = val*0.00056818;
}

// yards to others converter js end


// km to others converter js start

function kmToOther(val){
    feet.value = val*3280.8;
    inches.value = val*39370;  
    cm.value = val*100000;
    yards.value = val*1093.6; 
    meter.value = val*1000;
    miles.value = val*0.62137;
}


// km to others converter js end


// miles to others converter js start

function milesToOther(val){
    feet.value = val*5280;
    inches.value = val*63360;  
    cm.value = val/0.0000062137;
    yards.value = val*1760; 
    km.value = val/0.62137;
    meter.value = val/0.00062137;

}


// miles to others converter js end


// Converters swtich case loop start

function ConvertToOthers(convertFrom,value){    
    switch(convertFrom){
        case "feet" : feetToOther (parseFloat(value)); break;
        case "meter": meterToOther(parseFloat(value)); break;
        case "inches" : inchesToOther(parseFloat(value)); break;
        case "cm"   : cmToOther(parseFloat(value)); break;
        case "yards" : yardsToOther (parseFloat(value)); break;
        case "km"   : kmToOther (parseFloat(value)); break;
        case "miles" : milesToOther(parseFloat(value)); break;
    }
}

// Converters swtich case loop end