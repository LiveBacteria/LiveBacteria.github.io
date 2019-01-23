//'use strict';
let currVersion = "v0.11.0a",
devMode=false;



let URL_GEN = UrlGenerator('WIP_VERSION'),
  URL = URL_GEN.next().value;


/* URL Generator and Date Calculator and Setter */
function* UrlGenerator(url,dt=new Date()) {
  while (true){
    yield url + dt.getFullYear() + (''+(dt.getMonth()+1)).padStart(2,'0') + (''+dt.getDate()).padStart(2,'0') + "&Violations=true&SensorFailures=false";
    dt.setDate(dt.getDate()+1); // increase a day
    document.querySelector("#date-input").value= dt.getFullYear() + "-" + (''+(dt.getMonth()+1)).padStart(2,'0') + "-" + (''+dt.getDate()).padStart(2,'0');
  }
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

//copyrightScript and wipDetector and domEventSetter
window.onload = () => {
  /*
  let windowURL = window.location.href,
    checkURL = "wip";
  windowURL = windowURL.toLowerCase();
  */
  //set EventListeners on DOM
  if(document.querySelector("#loginButtonVerizon")){
		document.querySelector("#loginButtonVerizon").addEventListener("click", () => {
		window.open("https://login-cleanharbors.platform.telogis.com/");
	  });
  }
	if(document.querySelector("#startPDFApp")){
  document.querySelector("#startPDFApp").addEventListener("click", () => {
    start(0);
  });
	}
	if(document.querySelector("#startPDFApp1")){
	document.querySelector("#startPDFApp1").addEventListener("click", () => {
    start(1);
  });
	}
	if(document.getElementById("startPDFApp1")){
		document.addEventListener("keyup", function(event) {
		event.preventDefault();
	if (event.keyCode === 13) {
	  document.getElementById("startPDFApp1").click();
  	}
});

	}
	let html = ('<div class="sidenav"><a href="index.html">Home</a><a href="about.html">About</a></div>');
  	//document.body.append(newDiv);
    //let sidenav = "sidenav";
    let newElement = document.createElement("DIV");
    let body = document.body;
    //newElement.setAttribute('class', sidenav);
    newElement.innerHTML = html;
    body.appendChild(newElement);

  /* Sets the max and min values for dates */
	if(document.querySelector("#date-input")){
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
  if(devMode === false && prompt("Attempting to Activate Developer Mode: \nEnter credentials: ") === "admin64"){
		  devMode = true;
      document.querySelector(".footNotation").innerHTML = ("All Rights Reserved. Released under the MIT license. Copyright Tyler Poore " + y + ", created for general use Clean Harbors© in-house. Logos and Images used are owned, and or managed by Clean Harbors©.<br>AppVersion " + currVersion);
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
    let target = document.querySelector("#iFramePdf");
    target.setAttribute('style', 'display: block');

  }else{
    alert("Error in unlocking WIP Methods.");
  }
}

//Starts the task. 
//1
function start(load) {
  if(document.querySelector("#maxNumberDays").value > 31){
    if(confirm("Amount of days entered is high, continue? ")){
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