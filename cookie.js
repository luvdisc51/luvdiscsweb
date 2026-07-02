let cooky = Number(localStorage.getItem('cookedClickies')) || 0
let cpc = Number(localStorage.getItem('cpc')) || 1



function updateWebpageVisuals() {
    document.getElementById('cook').innerHTML = 'Clickies: ' + cooky
}
function cookClickie() {
    cooky = cooky + cpc
    updateWebpageVisuals()
}