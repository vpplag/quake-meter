function SetColor (red: number, green: number, blue: number) {
    red = Math.map(red, 0, 255, 1023, 0)
    green = Math.map(green, 0, 255, 1023, 0)
    blue = Math.map(blue, 0, 255, 1023, 0)
    pins.analogWritePin(AnalogPin.P0, red)
    pins.analogWritePin(AnalogPin.P1, green)
    pins.analogWritePin(AnalogPin.P2, blue)
    basic.pause(200)
}
let blue = 0
let green = 0
let red = 0
input.setAccelerometerRange(AcceleratorRange.OneG)
basic.forever(function () {
    if (Math.abs(input.acceleration(Dimension.Strength) - 1023) > 30) {
        red = 255
        green = 0
        blue = 0
        SetColor(red, green, blue)
    } else {
        red = 0
        green = 255
        blue = 0
        SetColor(red, green, blue)
    }
})
