let currVersion = "WIPv0.7.5r",
devMode=false;

let URL_GEN = UrlGenerator('WIP_VERSION'),
  URL = URL_GEN.next().value;


/* URL Generator and Date Calculator and Setter */
function* UrlGenerator(url,dt=new Date()) {
  while (true){
    yield url + dt.getFullYear() + (''+(dt.getMonth()+1)).padStart(2,'0') + (''+dt.getDate()).padStart(2,'0') + "&Violations=true&SensorFailures=false";
    dt.setDate(dt.getDate()+1); // increase a day
    document.querySelector("#date-input").value= dt.getFullYear() + "-" + (''+(dt.getMonth()+1)).padStart(2,'0') + "-" + (''+(dt.getDate()+1)).padStart(2,'0');
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
  let windowURL = window.location.href,
    checkURL = "wip";
  windowURL = windowURL.toLowerCase();

  //set EventListeners on DOM
  document.querySelector("#loginButtonVerizon").addEventListener("click", () => {
    window.open("https://login-cleanharbors.platform.telogis.com/");
  });

  document.querySelector("#startPDFApp").addEventListener("click", () => {
    start(0);
  });

  document.querySelector("#startPDFApp1").addEventListener("click", () => {
    start(1);
  });

  document.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("startPDFApp1").click();
  }
});

/* Killed All Keyboard Commands
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

  /* Sets the max and min values for dates */
  let dt=new Date(),
    y = dt.getFullYear(),
    dateInput = document.querySelector("#date-input");
  dateInput.max= dt.getFullYear() + "-" + (''+(dt.getMonth()+1)).padStart(2,'0') + "-" + (''+dt.getDate()).padStart(2,'0');
  if(devMode){console.log(dateInput.min);}
  dateInput.min= (dt.getFullYear()-1) + "-" +  (''+(dt.getMonth()+1)).padStart(2,'0') + "-" + (''+dt.getDate()).padStart(2,'0');
  dateInput.value= dt.getFullYear() + "-" + (''+(dt.getMonth()+1)).padStart(2,'0') + "-" + (''+dt.getDate()).padStart(2,'0');

  if(windowURL.indexOf(checkURL) != -1){
    console.log(windowURL.toUpperCase() + " and " + checkURL.toUpperCase() + " have matched the search check. ");
    alert("This is a WIP Build, please take caution. \nAppVersion: " + currVersion + "\nDeveloper Mode Activated");
    devMode = true;
    document.querySelector(".footNotation").innerHTML = ("All Rights Reserved. Released under the MIT license. Copyright Tyler Poore " + y + ", created for general use Clean Harbors&copy; in-house. Logos and Images used are owned, and or managed by Clean Harbors&copy;.<br>AppVersion " + currVersion);
  }else{
    document.querySelector(".footNotation").innerHTML = ("All Rights Reserved. Released under the MIT license. Copyright Tyler Poore " + y + ", created for general use Clean Harbors&copy; in-house. Logos and Images used are owned, and or managed by Clean Harbors&copy;.<br>AppVersion " + currVersion);
  }
}

let devModeToggle = () => {
	if(devMode === false && prompt("Attempting to Activate Developer Mode: \nEnter credentials: ") == "admin64"){
		devMode = true;
	    alert("This is a WIP Build, please take caution.\nAppVersion: " + currVersion + "\nDeveloper Mode Activated");
		}else{
			devMode = false;
			alert("Developer Mode Deactivated");
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
  URL = URL_GEN.next().value
  
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
  URL = URL_GEN.next().value
  
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
