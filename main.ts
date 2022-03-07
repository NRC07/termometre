input.onButtonPressed(Button.A, function () {
	
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(input.temperature())
        basic.showString("Celsius")
    } else if (input.buttonIsPressed(Button.B)) {
        if (input.temperature() < 25) {
            basic.showIcon(IconNames.Sad)
        } else {
            basic.showIcon(IconNames.Happy)
        }
    }
})
