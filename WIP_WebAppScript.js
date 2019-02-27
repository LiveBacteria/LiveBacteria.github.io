//'use strict';
let currVersion = "v0.23.0",
devMode=false,
exit=false,
dvirLogArray = [];
var logList = Array(31).fill(Array(2).fill(null)),
dailyProcess=false;



let URL_GEN = UrlGenerator('WIP_VERSION'),
  URL = URL_GEN.next().value;


/* URL Generator and Date Calculator and Setter */
function* UrlGenerator(url,dt=new Date()) {
  if(dailyProcess){
     while (true){
      url = publicUrl;
         if(devMode){console.log(url + ": is the URL at the moment.");}
    yield url + dt.getFullYear() + (''+(dt.getMonth()+1)).padStart(2,'0') + (''+dt.getDate()).padStart(2,'0') + "&Violations=true&SensorFailures=false";
    dt.setDate(dt.getDate()); // Keeps the same day value, for cycling the logList!
    document.querySelector("#date-input").value= dt.getFullYear() + "-" + (''+(dt.getMonth()+1)).padStart(2,'0') + "-" + (''+dt.getDate()).padStart(2,'0');
     }
  }else{
      while (true){
    yield url + dt.getFullYear() + (''+(dt.getMonth()+1)).padStart(2,'0') + (''+dt.getDate()).padStart(2,'0') + "&Violations=true&SensorFailures=false";
    dt.setDate(dt.getDate()+1); // increase a day
    document.querySelector("#date-input").value= dt.getFullYear() + "-" + (''+(dt.getMonth()+1)).padStart(2,'0') + "-" + (''+dt.getDate()).padStart(2,'0');
  }
  }
}

function csvProcessor () {
      let files = $("#fileInput")[0].files;
      let file = files[0];
  if(devMode){console.log(file);}
  Papa.parse(file, {
  complete: function(results) {
          {
            logList = results.data;
            if(devMode){console.log("Results: " + logList[0][1]);}
        }
      }
  });
  }


// will open x number of new windows containing URL
//2
function grabOpenPDF(maxNumberDays) {

  //Set the variable for max days.
  for (let x = 0; x < maxNumberDays; x++) {
  	if (devMode) {console.log("It works: " + x, URL);}
    URL = URL_GEN.next().value;
    openNewBackgroundTab(URL);
  }
/**/
}

//OpenLoadNew 12 18 2018 Test
function openNewBackgroundTab(url){
    var a = document.createElement("a");
    a.href = url;
    var evt = document.createEvent("MouseEvents");
    //the tenth parameter of initMouseEvent sets ctrl key
    evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0,
                                true, false, false, false, 0, null);
    a.dispatchEvent(evt);
}

//DVIR Functionatlity BEGIN
function clearLoaded () {
  $("#dvirLogInputs").val("");
  for(let i = 0; i < 200; i++){$("#iframeDIV"+i).remove()}
  if(devMode){console.log("Element Clear Complete");}
}

function setToArray(str){
  if(str === "" || str === "Log Numbers"){
    if(typeof str != "number"){
      alert("Log input cannot be blank!\nLog Input should not contain letters. ");
    }else{
      alert("Log input cannot be blank! ");
    }
    exit = true;
    return;
  }else{
    dvirLogArray = JSON.parse("[" + str + "]");
  }
  return JSON.parse("[" + str + "]");
}

function callMe(arr){
  if(exit){return;}
  let arrLength = arr.length;
  
  if(arrLength > 5){
    if(confirm("Large Load Detected: "+arrLength+"\nDo you want to continue?")){
      workingForLoop(arrLength, arr);
      }else{
        return;
      }
    }else{
      workingForLoop(arrLength, arr);
    }
}


function workingForLoop(count, arr){
  if(devMode && $("#loadInsideCheckbox").is(":checked")){
    let dvirFrame = "<iframe src='' id=''></iframe>";
    let targetStart = $("#frameContainer");
    let dvirTarget = "";
    for(let z = 0; z < count; z++){
    //dvirFrame = "<div id='iframeDIV"+ z +"' style='padding: 5px'><b id='iframeText"+ z +"'></b><iframe src='' id='iframe" + z + "'style='border: solid red; width: 200px; height: 100px; padding: 10px;''></iframe></div>";
    dvirFrame = "<div id='iFrameDIV" + z +"' style='padding: 5px'><b id='iframeText" + z + "'></b><iframe id='iframe" + z + "' src='' style='border: solid red; width: 200px; height: 100px; padding: 10px'></iframe></div>";

    if(devMode){console.log(dvirFrame);}

      //console.log("Looped: " + z);
      if(devMode){console.log("Array Index: " + arr[z]);}
      //console.log("Working as intended!");

      targetStart.after(dvirFrame);
      //if(devMode){console.log(targetStart);}
      
      dvirTarget = $('#iframe'+z);
      //if(devMode){console.log(dvirTarget);}

      $("#iframeText"+z).text(arr[z]);
      dvirTarget.attr("src","http://winweb.cleanharbors.com/Vehicle/UnifiedDVIREntry.aspx?InspectionLogID=" + arr[z]);
      
      /** DEFUNCT **/
      //dvirTarget.attr("id","iframe"+z);
    }
    }else{
      for(let z = 0; z < count; z++){
      //console.log("Looped: " + z);
      console.log("Array Index: " + arr[z]);
      window.open(
        "http://winweb.cleanharbors.com/Vehicle/UnifiedDVIREntry.aspx?InspectionLogID=" + arr[z],
        "_blank");
    }
  }
}
//DVIR Functionality END

//copyrightScript and wipDetector and domEventSetter
window.onload = () => {
  //devModeToggle();
  /*
  let windowURL = window.location.href,
    checkURL = "wip";
  windowURL = windowURL.toLowerCase();
  */
  //set EventListeners on DOM
  if($("#startAppDVIR").length){
    $("#clearFramesBtn").on("click", () => {
      clearLoaded();
    });

    $("document.body").on("keyup", (evt) => {
      if(evt.keyCode === 13){
        $("#startAppDVIR").click();
      }
    });
    $("#startAppDVIR").on("click", () => {
  callMe(setToArray($("#dvirLogInputs").val()));
});
  }

  if($("#loginButtonVerizon").length){
		document.querySelector("#loginButtonVerizon").addEventListener("click", () => {
		window.open("$https://login-cleanharbors.platform.telogis.com/");
	  });
  }
	if($("#startPDFApp").length){
  document.querySelector("#startPDFApp").addEventListener("click", () => {
    start(0);
  });
	}
	if($("#startPDFApp1").length){
	document.querySelector("#startPDFApp1").addEventListener("click", () => {
    start(1);
  });
	}
	if($("#startPDFApp1").length){
		document.addEventListener("keyup", function(event) {
		event.preventDefault();
	if (event.keyCode === 13) {
	  document.getElementById("startPDFApp1").click();
  	}
});
	}
	let html = ('<div class="sidenav"><a href="/">Home</a><a href="/DVIR_App">Dvir+</a><a href="/DLOG_App">Dlog+</a></div>');
  	//document.body.append(newDiv);
    //let sidenav = "sidenav";
    let newElement = document.createElement("DIV");
    let body = document.body;
    //newElement.setAttribute('class', sidenav);
    newElement.innerHTML = html;
    body.appendChild(newElement);

  /* Sets the max and min values for dates */
	if($("#date-input").length){
		let dt=new Date(),
    dateInput = document.querySelector("#date-input");
		var y = dt.getFullYear();
  dateInput.max= dt.getFullYear() + "-" + (''+(dt.getMonth()+1)).padStart(2,'0') + "-" + (''+dt.getDate()).padStart(2,'0');
  document.querySelector(".footNotation").innerHTML = ("All Rights Reserved. Released under the MIT license. Copyright Tyler Poore " + y + ", created for general use Clean Harbors© in-house. Logos and Images used are owned, and or managed by Clean Harbors©.<br>AppVersion " + currVersion);
  
if(devMode){console.log(dateInput.min);}
  dateInput.min= (dt.getFullYear()-1) + "-" +  (''+(dt.getMonth()+1)).padStart(2,'0') + "-" + (''+dt.getDate()).padStart(2,'0');
  dateInput.value= dt.getFullYear() + "-" + (''+(dt.getMonth()+1)).padStart(2,'0') + "-" + (''+dt.getDate()).padStart(2,'0');
}else{
	let dt=new Date();
	var y = dt.getFullYear();
    document.querySelector(".footNotation").innerHTML = ("All Rights Reserved. Released under the MIT license. Copyright Tyler Poore " + y + ", created for general use Clean Harbors© in-house. Logos and Images used are owned, and or managed by Clean Harbors©.<br>AppVersion " + currVersion);
  }
};

function devModeToggle () {
  let dt=new Date();
  var y = dt.getFullYear();
  if(devMode === false && prompt("Attempting to Activate Developer Mode: \nEnter credentials: ") === "admin64"){
		  devMode = true;
      document.querySelector(".footNotation").innerHTML = ("All Rights Reserved. Released under the MIT license. Copyright Tyler Poore " + y + ", created for general use Clean Harbors© in-house. Logos and Images used are owned, and or managed by Clean Harbors©.<br>AppVersion " + currVersion+"a");
	    alert("This is a WIP Build, please take caution.\nAppVersion: " + currVersion + "\nDeveloper Mode Activated");
      unlockWIPMethods(devMode);
    }else{
      devMode = false;
      document.querySelector(".footNotation").innerHTML = ("All Rights Reserved. Released under the MIT license. Copyright Tyler Poore " + y + ", created for general use Clean Harbors© in-house. Logos and Images used are owned, and or managed by Clean Harbors©.<br>AppVersion " + currVersion + "lv");
			alert("Developer Mode Deactivated:\nLimited Version Active!");
		}
}

function unlockWIPMethods(con){
  console.log("Entered unlock method. " + con);
  if(con == true){
    if($("#elInput").length){
      let target = document.querySelector("#elInput");
      $("#fileInputContainer").css("display","block");
      target.setAttribute('style', 'display: block');
    }
  }else{
    alert("Error in unlocking WIP Methods.");
  }
}

//Starts the task. 
//1
function start(load) {
  if(document.querySelector("#maxNumberDays").value > 10 && !dailyProcess){
    if(confirm("Amount of days entered is high, continue? ")){
      let startDate = new Date(document.querySelector('#date-input').value);
      
      
  // overwrite global
  if(dailyProcess){
    URL_GEN = UrlGenerator("test", startDate);
  }else{
    URL_GEN = UrlGenerator(document.querySelector("#employeeID").value, startDate);
    URL = URL_GEN.next().value;
  
  }
  if(devMode){console.log("Current Address: " + URL);}
  if (load === 1) {
    if(devMode){console.log("Event load active. ");}
    let maxDay = document.querySelector('#maxNumberDays').value;
    grabOpenPDF(maxDay);
  } else {
    //console.log("Event load skip. ")
    //let maxDay = document.getElementById('maxNumberDays').value;
    alert("Feature not yet added!");
    //printTrigger(iFramePdf);
  }
    }else{
      alert("Action Cancelled! ");
    }
  }else{
  let startDate = new Date(document.querySelector('#date-input').value);
  
  // overwrite global
  URL_GEN = UrlGenerator(document.querySelector("#employeeID").value, startDate);
  URL = URL_GEN.next().value;
  
  if(devMode){console.log("Current Address: " + URL);}
  if (load === 1) {
    if(devMode){console.log("Event load active. ");}
    let maxDay = document.querySelector('#maxNumberDays').value;
    grabOpenPDF(maxDay);
  } else {
    //console.log("Event load skip. ")
    //let maxDay = document.getElementById('maxNumberDays').value;
    if(devMode === true){
      printTrigger(iFramePdf);
    }else{
      alert("Feature not yet added!");
    }
    }
  }
}

function printTrigger(elementId) {
    var getMyFrame = document.getElementById(elementId);
    //getMyFrame.focus();
    //getMyFrame.contentWindow.print();

    $("#iFramePdf").ready(function() {
    var body = $("#iFramePdf").contents().find("body");
    body.append('Test');
  });
}

//GrabClean

/* Killed All Keyboard Commands - To be placed in onLoad Functions */
/*
 var targArea = document;
targArea.addEventListener ('keydown',  reportKeyEvent);

function reportKeyEvent (zEvent) {
    var reportStr   =
        "The " +
        ( zEvent.ctrlKey  ? "Control " : "" ) +
        ( zEvent.shiftKey ? "Shift "   : "" ) +
        ( zEvent.altKey   ? "Alt "     : "" ) +
        ( zEvent.metaKey  ? "Meta "    : "" ) +
        zEvent.code + " " +
        "key was pressed."
    ;
    $("#statusReport").text (reportStr);

    //--- Was a Ctrl-Alt-E combo pressed?
    if (zEvent.ctrlKey  &&  zEvent.altKey  &&  zEvent.code === "KeyE") {
        this.hitCnt = ( this.hitCnt || 0 ) + 1;
        $("#statusReport").after (
            '<p>Bingo! cnt: ' + this.hitCnt + '</p>'
        );
    }
    zEvent.stopPropagation ();
    zEvent.preventDefault ()
}
*/
/* Deprecated Not working Combo Actiavator
document.body.addEventListener("keyup", function(e){
event.preventDefault();
if (e.ctrlKey && e.altKey && e.key === "KeyE"){
  if(devMode === false){
    devMode = true;
      alert("This is a WIP Build, please take caution. \nAppVersion: " + currVersion + "\nDeveloper Mode Activated");
    }else{
      devMode = false;
      alert("Developer Mode Deactivated");
    }
  }
});
*/