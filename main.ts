input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    basic.showString("Celsius")
})
input.onButtonPressed(Button.AB, function () {
    if (input.temperature() < 25) {
        basic.showString("Te vas a congelar")
    } else {
        basic.showString("Sin camiseta ")
    }
})
input.onButtonPressed(Button.B, function () {
    if (input.temperature() < 25) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
basic.forever(function () {
	
})
