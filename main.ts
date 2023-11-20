input.onButtonPressed(Button.A, function () {
    basic.showNumber(steps)
    basic.pause(5000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString(timeanddate.date(timeanddate.DateFormat.YYYY_MM_DD))
    basic.pause(5000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString(timeanddate.time(timeanddate.TimeFormat.HMMAMPM))
    basic.pause(5000)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
})
let steps = 0
steps = 0
timeanddate.setTime(11, 30, 0, timeanddate.MornNight.AM)
timeanddate.setDate(1, 20, 2022)
basic.showString("" + control.deviceName() + ("::" + control.deviceSerialNumber()))
basic.pause(5000)
basic.clearScreen()
basic.forever(function () {
	
})
