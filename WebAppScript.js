let currVersion = "1.7.1r | Updated Employee List and Code",
    devMode = false,
    exit = false,
    dvirLogArray = [],
    startDate,
    employeeArray = [
        {
            name: "Flores, Jose",
            url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1335257756&Date=",
            branch: "3M",
            active: true
        },
        {
            name: "Jeronimo, Jesus",
            url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308553144&Date=",
            branch: "4B",
            active: true
        },
        {
            name: "Sing, Anil",
            url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308557080&Date=",
            branch: "3M",
            active: true
        },
        {
            name: "Wilson, David",
            url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1353574072&Date=",
            branch: "3M",
            active: true
        },
        {
            name: "Foster, Vincent",
            url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308558192&Date=",
            branch: "6M",
            active: true
        },
        {
            name: "Greer, Peter",
            url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308551662&Date=",
            branch: "6M",
            active: true
        },
        {
            name: "Hatt, Burton",
            url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308552158&Date=",
            branch: "6M",
            active: true
        },
        {
            name: "Huff, Daryl",
            url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308559046&Date=",
            branch: "6M",
            active: true
        },
        {
            name: "Johnston, Michael",
            url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308553138&Date=",
            branch: "6M",
            active: true
        },
        {
            name: "Jordon, Timothy",
            url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308556852&Date=",
            branch: "6M",
            active: true
        },
        {
            name: "Longmore, Jessy",
            url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308551288&Date=",
            branch: "6M",
            active: true
        },
        {
            name: "Marc, James",
            url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1346713884&Date=",
            branch: "6M",
            active: true
        },
        {
            name: "Medina, Juan",
            url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308553172&Date=",
            branch: "6M",
            active: true
        },
        {
            name: "Menor Jr., Gene",
            url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1366082712&Date=",
            branch: "6M",
            active: true
        },
        {
            name: "Mora, Pedro",
            url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1369628138&Date=",
            branch: "6M",
            active: true
        },
        {
            name: "Naples, Tina",
            url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308552826&Date=",
            branch: "6M",
            active: true
        },
        {
            name: "Sanchez, Roberto",
            url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1327216822&Date=",
            branch: "6M",
            active: false,
            reason: "LOA"
        },
        {
            name: "Allen, Rashaan",
            url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308558196&Date=",
            branch: "KH",
            active: true
        },
        {
            name: "Brooks, Eddie",
            url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1375322368&Date=",
            branch: "KH",
            active: true
        },
        {
            name: "Delosreyes, Jose",
            url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1366360486&Date=",
            branch: "KH",
            active: true
        },
        {
            name: "Felder, James",
            url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1330980720&Date=",
            branch: "KH",
            active: true
        },
        {
            name: "Jenkins, Tyrone",
            url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308559004&Date=",
            branch: "KH",
            active: true
        },
        {
            name: "Mcguiness, Jordan",
            url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1349517206&Date=",
            branch: "KH",
            active: true
        },
        {
            name: "Moore, Jason",
            url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1352518174&Date=",
            branch: "KH",
            active: true
        },
        {
            name: "Muhatia, Nixon",
            url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1344934460&Date=",
            branch: "KH",
            active: true
        },
        {
            name: "Pereira, Errol",
            url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1352828404&Date=",
            branch: "KH",
            active: false,
            reason: "TRANSFER"
        },
        {
            name: "Petrucci, Robert",
            url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308551290&Date=",
            branch: "KH",
            active: false,
            reason: "LOA"
        },
        {
            name: "Raymundo, Victor",
            url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308556288&Date=",
            branch: "KH",
            active: true
        },
        {
            name: "Romero, Gerrardo",
            url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308551292&Date=",
            branch: "KH",
            active: true
        },
        {
            name: "Santiago, Rosales",
            url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1333448034&Date=",
            branch: "KH",
            active: true
        },
        {
            name: "Shelton, Kenneth",
            url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308555622&Date=",
            branch: "KH",
            active: false,
            reason: "Occasional Driver"
        },
        {
            name: "Soares, Albert",
            url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1330980682&Date=",
            branch: "KH",
            active: true
        },
        {
            name: "Soares, Anthony",
            url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308556830&Date=",
            branch: "KH",
            active: true
        },
        {
            name: "Wilson, Joseph",
            url: "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308556476&Date=",
            branch: "KH",
            active: true
        },
        {
            "name": "AMBEAU, MICHAEL",
            "url": "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1326716020&Date=",
            "branch": "7BE",
            "active": true
        }, {
            "name": "INIGO, FRANK",
            "url": "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308551030&Date=",
            "branch": "7BE",
            "active": true
        }, {
            "name": "AKINCI, AYDOGAN",
            "url": "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308551098&Date=",
            "branch": "DJ",
            "active": true
        }, {
            "name": "BARTH, DONIMIQUE",
            "url": "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308551100&Date=",
            "branch": "DJ",
            "active": true
        }, {
            "name": "CERDA GALVAN, JOSE",
            "url": "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308552122&Date=",
            "branch": "DJ",
            "active": true
        }, {
            "name": "COVARRUBIAS, JOSE",
            "url": "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308559740&Date=",
            "branch": "DJ",
            "active": true
        }, {
            "name": "GONZALEZ, FERNANDO",
            "url": "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1359232452&Date=",
            "branch": "DJ",
            "active": true
        }, {
            "name": "GUARY, NATHANIEL",
            "url": "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308556486&Date=",
            "branch": "DJ",
            "active": true
        }, {
            "name": "JAMES, ANTHONY",
            "url": "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1326647386&Date=",
            "branch": "DJ",
            "active": true
        }, {
            "name": "RIOS, IGNACIO",
            "url": "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308551034&Date=",
            "branch": "DJ",
            "active": true
        }, {
            "name": "ROSAS, MICHAEL",
            "url": "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308556806&Date=",
            "branch": "DJ",
            "active": true
        }, {
            "name": "RUSHER, BRIAN",
            "url": "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308551104&Date=",
            "branch": "DJ",
            "active": true
        }, {
            "name": "SIFUENTES, ANTONIO",
            "url": "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308556888&Date=",
            "branch": "DJ",
            "active": true
        }, {
            "name": "WATKINS, DAVID",
            "url": "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1308551282&Date=",
            "branch": "DJ",
            "active": true
        }, {
            "name": "WATTS, COREY",
            "url": "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1354829766&Date=",
            "branch": "DJ",
            "active": true
        }, {
            "name": "YANEZ, ALEX",
            "url": "https://cleanharbors.platform.telogis.com/handler/driver/dailylog.ashx?DriverId=1371107200&Date=",
            "branch": "DJ",
            "active": true
        }
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
function* UrlGenerator(url, dt = new Date()) {
    while (true) {
        //padStart forces there to be two digits in the YYYY-MM-DD format
        yield url + dt.getFullYear() + ('' + (dt.getMonth() + 1)).padStart(2, '0') + ('' + dt.getDate()).padStart(2, '0') + "&Violations=true&SensorFailures=false";
        dt.setDate(dt.getDate() + 1); // Increases a day
    }
}

//Formats parameter date object into html date compatible string (YYYY-MM-DD)
function dateFormatter(date = new Date()) {
    return date.getFullYear() + "-" + ('' + (date.getMonth())).padStart(2, '0') + "-" + ('' + date.getDate()).padStart(2, '0');
}

//Combines data needed to execute method openNewBackgroundTab and then executes accordingly
function combineInfo(maxNumberDays) {
    for (let z = 0; z < maxNumberDays; z++) {
        URL = URL_GEN.next().value;

        if ($("#autoPrint").attr("checked") == "checked") {
            console.log("Entered iFrame methods");
            setTimeout(() => {
                // Creates iframe and prints the window
                let iframeObj = document.createElement('iframe');
                iframeObj.id = `iframe_${z}`;
                iframeObj.hidden = true;
                iframeObj.onload = () => {
                    setTimeout(() => {
                        document.querySelector("#iframe_"+z).contentWindow.print();
                    }, 500);
                };
                iframeObj.src = URL;
                document.body.appendChild(iframeObj);
            }, z * 500);
        } else {
            // Opens tab for manual print
            openBackgroundTab(URL);
        }
    }
    if (devMode) {
        console.log("Finished! ");
    }
}

//Simulates a mouse control clicking an html link. Opens a new tab with the passed url parameter
function openBackgroundTab(url) {
    let a = document.createElement("a");
    a.href = url;

    let evt = document.createEvent("MouseEvents");
    evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, true, false, false, false, 0, null);
    a.dispatchEvent(evt);
}

//This function toggles the developer mode for the site
function devModeToggle() {
    if (!devMode && prompt("Attempting to activate developer mode: \nEnter Credentials: ") == "admin64") {
        devMode = true;

        alert("Developer mode activated! Please take caution. ");
        $(".footNotation").html(("All Rights Reserved. Released under the MIT license. Copyright Tyler Poore " + new Date().getFullYear() + ", created for general use Clean Harbors© in-house. Logos and Images used are owned, and or managed by Clean Harbors©.<br>DevAppVersion " + currVersion));
        $("#elInput").attr("style", "display: block");
    } else {
        devMode = false;

        alert("Developer mode deactivated! \nTraces of previous code or elements may still exist.\n For safety, please refresh the page.");
        $(".footNotation").html(("All Rights Reserved. Released under the MIT license. Copyright Tyler Poore " + new Date().getFullYear() + ", created for general use Clean Harbors© in-house. Logos and Images used are owned, and or managed by Clean Harbors©.<br>AppVersion " + currVersion + ". DevMode code may still exist, take caution."));
    }
}

//This function initiates the entire program when on the DLOG+ page
function start(load) {

    //Takes date input from html element, splits it by "-" and sets it to an array and then parses all the values to integers
    let maxNumberDays = $("#maxNumberDays").val();

    if (maxNumberDays > 31 && $("#listSelector").attr("checked") === false) {
        if (confirm("Amount of days entered is high!\nContinue?")) {

            // overwrite global
            URL_GEN = UrlGenerator(document.querySelector("#employeeID").value, startDate);
            URL = URL_GEN.next().value;

            if (load === 1) {
                combineInfo(maxNumberDays);
            } else {
                alert("Function not yet added! ");
            }
        }
    } else if (maxNumberDays > 31 && $("#listSelector").attr("checked")) {
        alert(`When 'Daily Process' is checked the maximum amount of days can not be higher than 31.\nAmount entered: ${maxNumberDays}`);
    } else {

        if ($("#listSelector").attr("checked")) {
            for (let i = 0; i < employeeArray.length; i++) {
                if (employeeArray[i].active === false) {
                    console.log(`Skipped ${employeeArray[i].name}, Reason: ${employeeArray[i].reason}`);
                    continue;
                }
                //sets startDate to be equal to the date input field
                startDate = new Date($("#date-input").val());

                // overwrite global
                URL_GEN = UrlGenerator(employeeArray[i].url, startDate);
                URL = URL_GEN.next().value;
                if (load === 1) {
                    combineInfo(maxNumberDays);
                } else {
                    alert("Function not yet added! ");
                }
            }
        } else {
            //sets startDate to be equal to the date input field
            startDate = new Date($("#date-input").val());

            // overwrite global
            URL_GEN = UrlGenerator(document.querySelector("#employeeID").value, startDate);
            URL = URL_GEN.next().value;
            if (load === 1) {
                combineInfo(maxNumberDays);
            } else {
                alert("Function not yet added! ");
            }
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
