input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.Yes)
    puntos += 1
    basic.pause(1000)
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(puntos)
    basic.pause(1000)
})
let puntos = 0
puntos = 0
basic.forever(function () {
    basic.showLeds(`
        . # # # #
        . # . . #
        . . # # #
        . . # . .
        . . . . .
        `)
})
