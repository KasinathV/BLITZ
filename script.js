// Show Route Comparison
function showRoutes() {
    document.getElementById("search").classList.add("hidden");
    document.getElementById("routes").classList.remove("hidden");

    window.scrollTo({
        top: document.getElementById("routes").offsetTop,
        behavior: "smooth"
    });
}

// Start Journey
function startJourney() {
    document.getElementById("routes").classList.add("hidden");
    document.getElementById("journey").classList.remove("hidden");

    window.scrollTo({
        top: document.getElementById("journey").offsetTop,
        behavior: "smooth"
    });
}

// Report Popup
function openReport() {
    document.getElementById("reportPopup").classList.remove("hidden");
}

function submitReport() {

    alert("Reported. This helps route others safely.");

    document.getElementById("reportPopup").classList.add("hidden");
}

// SOS Popup
function openSOS() {
    document.getElementById("sosPopup").classList.remove("hidden");
}

function closeSOS() {
    document.getElementById("sosPopup").classList.add("hidden");
}

// Close popup when clicking outside
window.onclick = function (event) {

    const report = document.getElementById("reportPopup");
    const sos = document.getElementById("sosPopup");

    if (event.target === report) {
        report.classList.add("hidden");
    }

    if (event.target === sos) {
        sos.classList.add("hidden");
    }

}
