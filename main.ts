let b = 0
let strip: neopixel.Strip = null
let g = 0
let r = 0
let iic_address = 0
iic_address = 41
TCS34725.TSC_INIT(iic_address)
strip = neopixel.create(DigitalPin.P2, 12, NeoPixelMode.RGB)
basic.forever(function () {
    r = TCS34725.TCS_farve(iic_address, colers.R)
    g = TCS34725.TCS_farve(iic_address, colers.G)
    b = TCS34725.TCS_farve(iic_address, colers.B)
    serial.writeValue("R", r)
    serial.writeValue("G", g)
    serial.writeValue("B", b)
    strip.showColor(neopixel.rgb(r, g, b))
})
