enum RadioMessage {
    message1 = 49434,
    Start = 56380
}
function instructA () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    basic.pause(2000)
    basic.showString("PRESS A")
    waitforA()
}
function waitforB () {
    music.playTone(262, music.beat(BeatFraction.Breve))
    WaitUntilBlocks.waitUntilButtonPressed(Button.B)
    basic.showString("Good!")
}
input.onButtonPressed(Button.A, function () {
    rope += 1
})
function instructB () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    basic.pause(2000)
    basic.showString("PRESS B")
    waitforB()
}
input.onButtonPressed(Button.B, function () {
    rope += -1
})
function waitforA () {
    music.playTone(262, music.beat(BeatFraction.Breve))
    WaitUntilBlocks.waitUntilButtonPressed(Button.A)
    basic.showString("Good!")
    instructB()
}
let rope = 2
let Score_A = 0
let score_B = 0
instructA()
basic.forever(function () {
    basic.clearScreen()
    led.plot(Math.round(rope), 2)
    if (rope < 0) {
        Score_A += 1
        basic.showString("A WON")
        basic.showString("A Score " + Score_A)
        basic.showString("B Score " + score_B)
    } else if (rope > 4) {
        score_B += 1
        basic.showString("B WON")
        basic.showString("B Score " + score_B)
        basic.showString("A Score " + Score_A)
        rope = 2
    }
})
