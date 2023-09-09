function hideTopic() {
    document.getElementById('mainContent').style.display = "none";
    document.getElementById('myVideo').style.zIndex = "-10";
    document.getElementById('myTopnav').style.display = "block";
}

function heritage() {
    document.getElementById('myVideo').style.display = "none";
    document.getElementById('carousel_heritage').style.display = "block";
    document.getElementById('carousel_snow').style.display = "none";
    document.getElementById('carousel_flower').style.display = "none";
    document.getElementById('carousel_hotSpring').style.display = "none";
    document.getElementById('carousel_nature').style.display = "none";
    document.getElementById('carousel_castle').style.display = "none";

}

function snow() {
    document.getElementById('myVideo').style.display = "none";
    document.getElementById('carousel_snow').style.display = "block";
    document.getElementById('carousel_heritage').style.display = "none";
    document.getElementById('carousel_flower').style.display = "none";
    document.getElementById('carousel_hotSpring').style.display = "none";
    document.getElementById('carousel_nature').style.display = "none";
    document.getElementById('carousel_castle').style.display = "none";
}

function flower() {
    document.getElementById('myVideo').style.display = "none";
    document.getElementById('carousel_flower').style.display = "block";
    document.getElementById('carousel_heritage').style.display = "none";
    document.getElementById('carousel_snow').style.display = "none";
    document.getElementById('carousel_hotSpring').style.display = "none";
    document.getElementById('carousel_nature').style.display = "none";
    document.getElementById('carousel_castle').style.display = "none";
}

function hotSpring() {
    document.getElementById('myVideo').style.display = "none";
    document.getElementById('carousel_hotSpring').style.display = "block";
    document.getElementById('carousel_heritage').style.display = "none";
    document.getElementById('carousel_snow').style.display = "none";
    document.getElementById('carousel_flower').style.display = "none";
    document.getElementById('carousel_nature').style.display = "none";
    document.getElementById('carousel_castle').style.display = "none";
}

function nature() {
    document.getElementById('myVideo').style.display = "none";
    document.getElementById('carousel_nature').style.display = "block";
    document.getElementById('carousel_heritage').style.display = "none";
    document.getElementById('carousel_snow').style.display = "none";
    document.getElementById('carousel_flower').style.display = "none";
    document.getElementById('carousel_hotSpring').style.display = "none";
    document.getElementById('carousel_castle').style.display = "none";
}

function castle() {
    document.getElementById('myVideo').style.display = "none";
    document.getElementById('carousel_heritage').style.display = "none";
    document.getElementById('carousel_snow').style.display = "none";
    document.getElementById('carousel_flower').style.display = "none";
    document.getElementById('carousel_hotSpring').style.display = "none";
    document.getElementById('carousel_nature').style.display = "none";
    document.getElementById('carousel_castle').style.display = "block";
}


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// 螢幕縮小時，點擊連結後，nav會再縮小回去原本的位置
window.onclick = function (event) {
    if (!event.target.matches('.icon')) {
        var dropdowns = document.getElementsByClassName("topnav");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('responsive')) {
                openDropdown.classList.remove('responsive');
            }
        }
    }
}
