//'use strict';
let currVersion = "v0.31.6b",
    devMode=false,
    exit=false,
    dvirLogArray = [],
    startDate;//,
    //confirmStartDate;

let employeeArray = [
  {name: "Flores, Jose",url:"https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1335257756&Date="},
  {name: "Foster, Vincent",url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308558192&Date="},
  {name: "Jeronimo, Jesus",url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308553144&Date="},
  {name: "Moore, Jason",url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1352518174&Date="},
  {name: "Shelton, Kenneth,",url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308555622&Date="},
  {name: "Sing, Anil,",url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308557080&Date="},
  {name: "Wilson, David,",url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1353574072&Date="},
  {name: "Corpuz, Zalhdee,",url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1332941582&Date="},
  {name: "Greer, Peter,",url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308551662&Date="},
  {name: "Hatt, Burton,",url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308552158&Date="},
  {name: "Huff, Daryl,",url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308559046&Date="},
  {name: "Jacobs, Frederick,",url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308553110&Date="},
  {name: "Johnston, Michael,",url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308553138&Date="},
  {name: "Jordon, Timothy,",url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308556852&Date="},
  {name: "Longmore, Jessy,",url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308551288&Date="},
  {name: "Marc, James",url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1346713884&Date="},
  {name: "Medina, Juan,",url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308553172&Date="},
  {name: "Naples, Tina,",url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308552826&Date="},
  {name: "Sanchez, Roberto,",url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1327216822&Date="},
  {name: "Wilson, Joseph,",url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308556476&Date="},
  {name: "Allen, Rashaan,",url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308558196&Date="},
  {name: "Felder, James,",url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1330980720&Date="},
  {name: "Hippe, Bruce,",url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308556872&Date="},
  {name: "Mcguiness, Jordan",url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1349517206&Date="},
  {name: "Muhatia, Nixon,",url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1344934460&Date="},
  {name: "Pereira, Errol",url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1352828404&Date="},
  {name: "Petrucci, Robert,",url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308551290&Date="},
  {name: "Raymundo, Victor,",url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308556288&Date="},
  {name: "Romero, Gerrardo,",url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308551292&Date="},
  {name: "Santiago, Rosales,",url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1333448034&Date="},
  {name: "Soares, Albert,",url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1330980682&Date="},
  {name: "Soares, Anthony,",url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308556830&Date="}
];



let URL_GEN = UrlGenerator('WIP_VERSION'),
    URL = URL_GEN.next().value;


/* URL Generator and Date Calculator and Setter */
function* UrlGenerator(url,dt=new Date()) {
  while (true){
    yield url + dt.getFullYear() + (''+(dt.getMonth()+1)).padStart(2,'0') + (''+dt.getDate()).padStart(2,'0') + "&Violations=true&SensorFailures=false";
    dt.setDate(dt.getDate()+1); // increase a day
    document.querySelector("#date-input").value = dt.getFullYear() + "-" + (''+(dt.getMonth()+1)).padStart(2,'0') + "-" + (''+dt.getDate()).padStart(2,'0');
  }
}

//This function converts a javascript date object into an HTML Date readable format
function dateFormatter (date){
  alert("dateFormatter 0: " + date);
  return date.getFullYear() + "-" + (''+(date.getMonth()+1)).padStart(2,'0') + "-" + (''+date.getDate()).padStart(2,'0');
}


// will open x number of new windows containing URL
//2
function grabOpenPDF(maxNumberDays, date) {
  //Setting constant start date so that it cannot be altered
  const ourDate = date;
  alert("grabOpenPdf alert: " + ourDate);
  //let newDate = document.querySelector*("#date-input").value;
  //Check if devMode is true and that employeeArray exists
  if(devMode == true && employeeArray){

    //While j is less than the current number of employees in the array, IE: employeeArray.length
    for(let j = 0; j < 1; j++){

      //Resets the date back to the specified start date for each iteration

      document.querySelector("#date-input").value = dateFormatter(ourDate);
      console.log("grabOpenPdf 0: " + dateFormatter(ourDate));
      console.log("grabOpenPdf 1: " + ourDate);

      // This setTimeout anonymous function is here because a piece of this program runs asynchronously
      setTimeout(() => {
        URL_GEN = UrlGenerator(employeeArray[j].url, ourDate);
        document.querySelector("#employeeID").value = employeeArray[j].url;
        for (let y = 0; y < maxNumberDays; y++){
          URL = URL_GEN.next().value;
          openNewBackgroundTab(URL);
        }
      }, j * 250);
    }
  }else{
    alert("Entered else on grabOpenPDF");
    for (let x = 0; x < maxNumberDays; x++) {
      if (devMode) {console.log("It works: " + x, URL);}
      URL = URL_GEN.next().value;
      openNewBackgroundTab(URL);
    }}
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

  if(confirm("Large Load Detected: "+arrLength+"\nDo you want to continue?")){
    workingForLoop(arrLength, arr);
  }else{
    return;
  }
}

function workingForLoop(count, arr){
  for(let z = 0; z < count; z++){
    //console.log("Looped: " + z);
    console.log("Array Index: " + arr[z]);
    window.open(
        "http://winweb.cleanharbors.com/Vehicle/UnifiedDVIREntry.aspx?InspectionLogID=" + arr[z],
        "_blank");
  }
}
//DVIR Functionality END

//copyrightScript and wipDetector and domEventSetter
window.onload = () => {
  /*
  let windowURL = window.location.href,
    checkURL = "wip";
  windowURL = windowURL.toLowerCase();
  */
  //set EventListeners on DOM
  if($("#startAppDVIR")){
    $("document.body").on("keyup", (evt) => {
      if(evt.keyCode === 13){
        $("#startAppDVIR").click();
      }
    });
    $("#startAppDVIR").on("click", () => {
      callMe(setToArray($("#dvirLogInputs").val()));
    });
  }

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
  let html = ('<div class="sidenav"><a href="/index">Home</a><a href="/DVIR_App">Dvir+</a><a href="/DLOG_App">Dlog+</a></div>');
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
  startDate = new Date(document.querySelector('#date-input').value);
  const confirmStartDate = startDate;
  startDate.setDate(startDate.getDate()+1);
  alert("start 0:" + startDate);
  if(document.querySelector("#maxNumberDays").value > 31){
    if(confirm("Amount of days entered is high, continue? ")){

      // overwrite global
      URL_GEN = UrlGenerator(document.querySelector("#employeeID").value, startDate);
      URL = URL_GEN.next().value;

      if(devMode){console.log("Current Address: " + URL);}
      if (load === 1) {
        if(devMode){console.log("Event load active. ");}
        let maxDay = document.querySelector('#maxNumberDays').value;
        grabOpenPDF(maxDay, startDate);
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

    // overwrite global
    URL_GEN = UrlGenerator(document.querySelector("#employeeID").value, startDate);
    URL = URL_GEN.next().value;

    if(devMode){console.log("Current Address: " + URL);}
    if (load === 1) {
      if(devMode){console.log("Event load active. ");}
      let maxDay = document.querySelector('#maxNumberDays').value;
      grabOpenPDF(maxDay);
    } else {
      //console.log("Event load skip. ");
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