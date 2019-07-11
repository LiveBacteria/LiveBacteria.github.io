let currVersion = "1.2.1r | Stable Rewrite",
    devMode = false,
    exit = false,
    dateArray = [],
    dailyProcess= false,
    dvirLogArray = [],
    startDate,
    employeeArray = [
        {name: "Flores, Jose",url:"https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1335257756&Date="},
        {name: "Foster, Vincent",url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308558192&Date="},
        {name: "Jeronimo, Jesus",url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308553144&Date="},
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
        {name: "Allen, Rashaan,",url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308558196&Date="},
        {name: "Felder, James,",url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1330980720&Date="},
        {name: "Mcguiness, Jordan",url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1349517206&Date="},
        {name: "Moore, Jason",url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1352518174&Date="},
        {name: "Muhatia, Nixon,",url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1344934460&Date="},
        {name: "Pereira, Errol",url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1352828404&Date="},
        {name: "Petrucci, Robert,",url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308551290&Date="},
        {name: "Raymundo, Victor,",url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308556288&Date="},
        {name: "Romero, Gerrardo,",url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308551292&Date="},
        {name: "Santiago, Rosales,",url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1333448034&Date="},
        {name: "Soares, Albert,",url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1330980682&Date="},
        {name: "Soares, Anthony,",url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308556830&Date="},
        {name: "Wilson, Joseph,",url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308556476&Date="}
    ];
/*
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBBX3JXe4jMbL4YW2Bwv90zP2s0g5nNsjY",
    authDomain: "protos-store.firebaseapp.com",
    databaseURL: "https://protos-store.firebaseio.com",
    projectId: "protos-store",
    storageBucket: "protos-store.appspot.com",
    messagingSenderId: "117649759022",
    appId: "1:117649759022:web:b6a528005b4dc04d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
*/

let URL_GEN = UrlGenerator('Rewritten Versioning'),
    URL = URL_GEN.next().value;

//Url generator increments the date and formats the url correctly for use in telogis connect
function* UrlGenerator(url, dt = new Date()){
    //Checks for if daily process is true
    if($("#listSelector").attr("checked")){

        //Creates new date object from raw date data in the format of YYYY, MM, DD
        const dateObj = new Date(dateArray[0], dateArray[1], dateArray[2]);

        while(true){
            //padStart forces there to be two digits in the YYYY-MM-DD format
            //date.getMont()+1
            yield url + dateObj.getFullYear() + (''+(dateObj.getMonth())).padStart(2,'0') + (''+dateObj.getDate()).padStart(2,'0') + "&Violations=true&SensorFailures=false";
            dateObj.setDate(dateObj.getDate()+1); // Increases a day
        }
    }else{
        while(true){
            //padStart forces there to be two digits in the YYYY-MM-DD format
            yield url + dt.getFullYear() + (''+(dt.getMonth()+1)).padStart(2,'0') + (''+dt.getDate()).padStart(2,'0') + "&Violations=true&SensorFailures=false";
            dt.setDate(dt.getDate()+1); // Increases a day
        }
    }
}

//Formats parameter date object into html date compatible string (YYYY-MM-DD)
function dateFormatter(date = new Date()){
    //date.getMont()+1
    return date.getFullYear() + "-" + (''+(date.getMonth())).padStart(2,'0') + "-" + ('' + date.getDate()).padStart(2,'0');
}

//Combines data needed to execute method openNewBackgroundTab and then executes accordingly
function combineInfo(maxNumberDays){
    const dateObj = new Date(dateArray[0], dateArray[1], dateArray[2]);

    //Checks if #listSelector (Daily Process checkbox) is checked and that the array employeeArray exists
    if(employeeArray && $("#listSelector").attr("checked")){

        setTimeout(() => {

            //for loop executes for as many entries in the employeeArray array
            for(let x = 0; x < employeeArray.length; x++){
                URL_GEN = UrlGenerator(employeeArray[x].url, dateObj); //don't forget about the date object issue at hand

                //For visuals, we are updating the employee url field on the page
                $("#employeeID").val(employeeArray[x].url);

                //for loop executes up to the amount of maxNumberDays
                for(let y = 0; y < maxNumberDays; y++){
                    URL = URL_GEN.next().value;
                    openBackgroundTab(URL);
                }
            }
        },150);
    }else{
        for(let z = 0; z < maxNumberDays; z++){
            URL = URL_GEN.next().value;
            openBackgroundTab(URL);
        }
    }
    if(devMode){console.log("Finished! ");}
}

//Simulates a mouse control clicking an html link. Opens a new tab with the passed url parameter
function openBackgroundTab (url){
    let a = document.createElement("a");
    a.href = url;

    let evt = document.createEvent("MouseEvents");
    evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, true, false, false, false, 0, null);
    a.dispatchEvent(evt);
}

//This function toggles the developer mode for the site
function devModeToggle(){
    if(!devMode && prompt("Attempting to activate developer mode: \nEnter Credentials: ") == "admin64"){
        devMode = true;

        alert("Developer mode activated! Please take caution. ");
        $(".footNotation").html(("All Rights Reserved. Released under the MIT license. Copyright Tyler Poore " + dateArray[0] + ", created for general use Clean Harbors© in-house. Logos and Images used are owned, and or managed by Clean Harbors©.<br>DevAppVersion " + currVersion));
        $("#elInput").attr("style", "display: block");
    }else{
        devMode = false;

        alert("Developer mode deactivated! \nTraces of previous code or elements may still exist.\n For safety, please refresh the page.");
        $(".footNotation").html(("All Rights Reserved. Released under the MIT license. Copyright Tyler Poore " + dateArray[0] + ", created for general use Clean Harbors© in-house. Logos and Images used are owned, and or managed by Clean Harbors©.<br>AppVersion " + currVersion + ". DevMode code may still exist, take caution."));
    }
}

//This function initiates the entire program when on the DLOG+ page
function start(load){

    //Takes date input from html element, splits it by "-" and sets it to an array and then parses all the values to integers
    dateArray = ($("#date-input").val()).split("-");
    for(let count = 0; count < dateArray.length; count++){
        dateArray[count] = parseInt(dateArray[count]);
    }

    if($("#maxNumberDays").val() > 31){
        if(confirm("Amount of days entered is high!\nContinue?")){

            // overwrite global
            URL_GEN = UrlGenerator(document.querySelector("#employeeID").value, startDate);
            URL = URL_GEN.next().value;

            if(load == 1){
                let maxDay = $("#maxNumberDays").val();
                combineInfo(maxDay);
            }else{
                alert("Function not yet added! ");
            }
        }
    }else{
        //sets startDate to be equal to the date input field
        startDate = new Date($("#date-input").val());

        // overwrite global
        URL_GEN = UrlGenerator(document.querySelector("#employeeID").value, startDate);
        URL = URL_GEN.next().value;
        if(load == 1){
            let maxDay = $("#maxNumberDays").val();
            combineInfo(maxDay);
        }else{
            alert("Function not yet added! ");
        }
    }
}

//DVIR Functionatlity BEGIN
function setToArray(str) {
    if (str === "" || str === "Log Numbers") {
        if (typeof str != "number") {
            alert("Log input cannot be blank!\nLog Input should not contain letters. ");
        } else {
            alert("Log input cannot be blank! ");
        }
        exit = true;
        return;
    } else {
        dvirLogArray = JSON.parse("[" + str + "]");
    }
    return JSON.parse("[" + str + "]");
}

function callMe(arr) {
    if (exit) {
        return;
    }
    let arrLength = arr.length;

    if (confirm("Large Load Detected: " + arrLength + "\nDo you want to continue?")) {
        workingForLoop(arrLength, arr);
    } else {
        return;
    }
}

function workingForLoop(count, arr) {
    for (let z = 0; z < count; z++) {
        //console.log("Looped: " + z);
        console.log("Array Index: " + arr[z]);
        window.open(
            "http://winweb.cleanharbors.com/Vehicle/UnifiedDVIREntry.aspx?InspectionLogID=" + arr[z],
            "_blank");
    }
}

window.onload = () => {
    /*
    let windowURL = window.location.href,
      checkURL = "wip";
    windowURL = windowURL.toLowerCase();
    */
    //set EventListeners on DOM
    if ($("#startAppDVIR")) {
        $("document.body").on("keyup", (evt) => {
            if (evt.keyCode === 13) {
                callMe(setToArray($("#dvirLogInputs").val()));
                //$("#startAppDVIR").click();
            }
        });
        $("#startAppDVIR").on("click", () => {
            callMe(setToArray($("#dvirLogInputs").val()));
        });
    }

    if (document.querySelector("#loginButtonVerizon")) {
        document.querySelector("#loginButtonVerizon").addEventListener("click", () => {
            window.open("https://login-cleanharbors.platform.telogis.com/");
        });
    }
    if (document.querySelector("#startPDFApp")) {
        document.querySelector("#startPDFApp").addEventListener("click", () => {
            start(0);
        });
    }
    if (document.querySelector("#startPDFApp1")) {
        document.querySelector("#startPDFApp1").addEventListener("click", () => {
            start(1);
        });
    }
    if (document.getElementById("startPDFApp1")) {
        document.addEventListener("keyup", function (event) {
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
    if (document.querySelector("#date-input")) {
        let dt = new Date(),
            dateInput = document.querySelector("#date-input");
        var y = dt.getFullYear();
        dateInput.max = dt.getFullYear() + "-" + ('' + (dt.getMonth() + 1)).padStart(2, '0') + "-" + ('' + dt.getDate()).padStart(2, '0');
        document.querySelector(".footNotation").innerHTML = ("All Rights Reserved. Released under the MIT license. Copyright Tyler Poore " + y + ", created for general use Clean Harbors© in-house. Logos and Images used are owned, and or managed by Clean Harbors©.<br>AppVersion " + currVersion);

        if (devMode) {
            console.log(dateInput.min);
        }
        dateInput.min = (dt.getFullYear() - 1) + "-" + ('' + (dt.getMonth() + 1)).padStart(2, '0') + "-" + ('' + dt.getDate()).padStart(2, '0');
        dateInput.value = dt.getFullYear() + "-" + ('' + (dt.getMonth() + 1)).padStart(2, '0') + "-" + ('' + dt.getDate()).padStart(2, '0');
    } else {
        let dt = new Date();
        var y = dt.getFullYear();
        document.querySelector(".footNotation").innerHTML = ("All Rights Reserved. Released under the MIT license. Copyright Tyler Poore " + y + ", created for general use Clean Harbors© in-house. Logos and Images used are owned, and or managed by Clean Harbors©.<br>AppVersion " + currVersion);
    }
};