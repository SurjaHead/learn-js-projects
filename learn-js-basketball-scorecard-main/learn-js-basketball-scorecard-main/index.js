let homeScore = 0
let guestScore = 0
document.getElementById('home-score').textContent = homeScore
document.getElementById('guest-score').textContent = guestScore

function homeAdd1() {
    homeScore += 1
    document.getElementById('home-score').textContent = homeScore
    if (homeScore > guestScore) {
        document.getElementById('home-score').style.color = '#FEF3C7'
        document.getElementById('guest-score').style.color = '#F94F6D'
    } else if (guestScore > homeScore) {
        document.getElementById('guest-score').style.color = '#FEF3C7'
        document.getElementById('home-score').style.color = '#F94F6D'
    } else {
        document.getElementById('guest-score').style.color = '#F94F6D'
        document.getElementById('home-score').style.color = '#F94F6D'
    }
}

function homeAdd2() {
    homeScore += 2
    document.getElementById('home-score').textContent = homeScore
    if (homeScore > guestScore) {
        document.getElementById('home-score').style.color = '#FEF3C7'
        document.getElementById('guest-score').style.color = '#F94F6D'
    } else if (guestScore > homeScore) {
        document.getElementById('guest-score').style.color = '#FEF3C7'
        document.getElementById('home-score').style.color = '#F94F6D'
    } else {
        document.getElementById('guest-score').style.color = '#F94F6D'
        document.getElementById('home-score').style.color = '#F94F6D'
    }
}

function homeAdd3() {
    homeScore += 3
    document.getElementById('home-score').textContent = homeScore
    if (homeScore > guestScore) {
        document.getElementById('home-score').style.color = '#FEF3C7'
        document.getElementById('guest-score').style.color = '#F94F6D'
    } else if (guestScore > homeScore) {
        document.getElementById('guest-score').style.color = '#FEF3C7'
        document.getElementById('home-score').style.color = '#F94F6D'
    } else {
        document.getElementById('guest-score').style.color = '#F94F6D'
        document.getElementById('home-score').style.color = '#F94F6D'
    }
}

function guestAdd1() {
    guestScore += 1
    document.getElementById('guest-score').textContent = guestScore
    if (homeScore > guestScore) {
        document.getElementById('home-score').style.color = '#FEF3C7'
        document.getElementById('guest-score').style.color = '#F94F6D'
    } else if (guestScore > homeScore) {
        document.getElementById('guest-score').style.color = '#FEF3C7'
        document.getElementById('home-score').style.color = '#F94F6D'
    } else {
        document.getElementById('guest-score').style.color = '#F94F6D'
        document.getElementById('home-score').style.color = '#F94F6D'
    }
}

function guestAdd2() {
    guestScore += 2
    document.getElementById('guest-score').textContent = guestScore
    if (homeScore > guestScore) {
        document.getElementById('home-score').style.color = '#FEF3C7'
        document.getElementById('guest-score').style.color = '#F94F6D'
    } else if (guestScore > homeScore) {
        document.getElementById('guest-score').style.color = '#FEF3C7'
        document.getElementById('home-score').style.color = '#F94F6D'
    } else {
        document.getElementById('guest-score').style.color = '#F94F6D'
        document.getElementById('home-score').style.color = '#F94F6D'
    }
}

function guestAdd3() {
    guestScore += 3
    document.getElementById('guest-score').textContent = guestScore
    if (homeScore > guestScore) {
        document.getElementById('home-score').style.color = '#FEF3C7'
        document.getElementById('guest-score').style.color = '#F94F6D'
    } else if (guestScore > homeScore) {
        document.getElementById('guest-score').style.color = '#FEF3C7'
        document.getElementById('home-score').style.color = '#F94F6D'
    } else {
        document.getElementById('guest-score').style.color = '#F94F6D'
        document.getElementById('home-score').style.color = '#F94F6D'
    }
}

function newGame() {
    homeScore = 0
    guestScore = 0
    document.getElementById('home-score').textContent = homeScore
    document.getElementById('guest-score').textContent = guestScore
    document.getElementById('guest-score').style.color = '#F94F6D'
    document.getElementById('home-score').style.color = '#F94F6D'
}
