let degrees = 0
input.onGesture(Gesture.Shake, function () {
    degrees = randint(80, 100)
    basic.showNumber(degrees)
    if (degrees >= 90) {
        basic.showString("A+")
    } else if (degrees >= 85) {
        basic.showString("A")
    } else if (degrees >= 80) {
        basic.showString("A-")
    }
})
basic.forever(function () {
	
})
