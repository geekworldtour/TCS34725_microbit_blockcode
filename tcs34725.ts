// Add your code here



/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */

enum colers {
    R,
    G,
    B
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace TCS34725 {
    /**
     * Init sensor
     * @param add I2C address
     */
    //% block
    export function TSC_INIT(add: number): void {
        let iic_address = 0
        iic_address = 41
        pins.i2cWriteNumber(
            iic_address,
            0x80 | 0x12,
            NumberFormat.Int8LE,
            false
        )
        serial.writeValue("x", pins.i2cReadNumber(iic_address, NumberFormat.Int8LE, false))
        pins.i2cWriteNumber(
            iic_address,
            0x80 | 0x00,
            NumberFormat.Int8LE,
            true
        )
        pins.i2cWriteNumber(
            iic_address,
            1,
            NumberFormat.Int8LE,
            false
        )
        basic.pause(10)
        pins.i2cWriteNumber(
            iic_address,
            0x80 | 0x00,
            NumberFormat.Int8LE,
            true
        )
        pins.i2cWriteNumber(
            iic_address,
            3,
            NumberFormat.Int8LE,
            false
        )
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function TCS_farve(add: number, c: colers): number {
        let a = 0
        switch (c) {
            case 0:
                a = 0x80 | 0x16;
                break;
            case 1:
                a = 0x80 | 0x18;
                break;
            case 2:
                a = 0x80 | 0x1A;
                break;
            default:
                a = 0x80 | 0x16;
        }
        pins.i2cWriteNumber(
            add,
            a,
            NumberFormat.Int8LE,
            false
        )
        return Math.map(pins.i2cReadNumber(add, NumberFormat.Int16LE, false), 100, 5000, 0, 255)
    }
}
