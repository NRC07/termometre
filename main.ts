input.onButtonPressed(Button.A, function () {
    serial.writeLine("" + (input.temperature()))
    serial.writeLine("Celsius")
    basic.showString("" + (input.temperature()))
    basic.showString("Celsius")
})
input.onButtonPressed(Button.AB, function () {
    if (input.temperature() < 25) {
        serial.writeLine("Te vas a congelar")
        basic.showIcon(IconNames.Umbrella)
    } else {
        serial.writeLine("Sin camisa")
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    if (input.temperature() < 25) {
        serial.writeLine("" + (input.temperature()))
        basic.showIcon(IconNames.Sad)
    } else {
        serial.writeLine("" + (input.temperature()))
        basic.showIcon(IconNames.Happy)
    }
})
