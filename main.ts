function SetColor (red: number, green: number, blue: number) {
    red = Math.map(red, 0, 255, 1023, 0)
    green = Math.map(green, 0, 255, 1023, 0)
    blue = Math.map(blue, 0, 255, 1023, 0)
    pins.analogWritePin(AnalogPin.P0, red)
    pins.analogWritePin(AnalogPin.P1, green)
    pins.analogWritePin(AnalogPin.P2, blue)
    basic.pause(200)
}
let acc_strength = 0
let blue = 0
let green = 0
let red = 0
input.setAccelerometerRange(AcceleratorRange.OneG)
let threshold = 25
basic.forever(function () {
    acc_strength = Math.abs(input.acceleration(Dimension.Strength) - 1023)
    led.plotBarGraph(
    acc_strength,
    threshold
    )
    if (acc_strength > threshold) {
        red = 255
        green = 0
        blue = 0
        music.playTone(262, music.beat(BeatFraction.Eighth))
        SetColor(red, green, blue)
    } else {
        red = 0
        green = 255
        blue = 0
        SetColor(red, green, blue)
    }
})
