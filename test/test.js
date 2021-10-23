function waitThreeSeconds() {
    const ms = 3000 + new Date().getTime()
    while (new Date() < ms){}
    console.log('finished function')
}

function clickHandler () {
    console.log('Click Event')
}

document.addEventListener('click', clickHandler)

waitThreeSeconds()