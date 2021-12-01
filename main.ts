basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) < 150) {
        basic.showIcon(IconNames.Sad)
        basic.setLedColor(0xff0000)
    } else {
        basic.showIcon(IconNames.Happy)
        basic.setLedColor(0x00ff00)
    }
})
