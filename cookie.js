let cooky = Number(localStorage.getItem('cookedClickies')) || 0
let cpc = Number(localStorage.getItem('cpc')) || 1
let cps = Number(localStorage.getItem('cps')) || 0
let p = ""
// p = purchase


function updateWebpageVisuals() {
    document.getElementById('cook').innerHTML = 'Clickies: ' + cooky
    document.getElementById('cpc').innerHTML = 'Clickies per click (cpc): ' + cpc
}
function saveGame() {
    localStorage.setItem('cookedClickies', cooky)
    localStorage.setItem('cps', cps)
    localStorage.setItem('cpc', cpc)
}
function cookClickie() {
    cooky = cooky + cpc
    updateWebpageVisuals()
}
function cpsTrigger() {
    cooky = cooky + cps
    saveGame()
    updateWebpageVisuals()
}
function buyGramma() {
    p = "Gramma"
    MakePurchase()
}





function MakePurchase() {
    if (p = "Gramma") {
        if (cooky >= 50) {
            cps++
            cooky = cooky - 50
        }
        else {
            alert('You do not have enough money!')
        }
    }
    updateWebpageVisuals()
}


setInterval(cpsTrigger, 1000)