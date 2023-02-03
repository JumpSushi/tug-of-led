enum RadioMessage {
    message1 = 49434,
    Start = 56380
}
function maingame () {
    while (true) {
        basic.clearScreen()
        led.plot(Math.round(rope), 2)
        if (rope < 0) {
            Score_A += 1
            basic.showString("A WON")
            basic.showString("A Score " + Score_A)
            basic.showString("B Score " + score_B)
            rope = 2
        } else if (rope > 4) {
            score_B += 1
            basic.showString("B WON")
            basic.showString("B Score " + score_B)
            basic.showString("A Score " + Score_A)
            rope = 2
        }
        if (input.buttonIsPressed(Button.A)) {
            rope += 0.1
        }
        if (input.buttonIsPressed(Button.B)) {
            rope += -0.1
        }
    }
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
    WaitUntilBlocks.waitUntilButtonReleased(Button.B)
    basic.showString("Good!")
}
// The input of side A
input.onButtonPressed(Button.A, function () {
	
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
// The input of side B
input.onButtonPressed(Button.B, function () {
	
})
function waitforA () {
    music.playTone(262, music.beat(BeatFraction.Breve))
    WaitUntilBlocks.waitUntilButtonPressed(Button.A)
    basic.showString("Good!")
    instructB()
}
let score_B = 0
let Score_A = 0
let rope = 0
rope = 3
Score_A = 0
score_B = 0
while (true) {
    if (input.buttonIsPressed(Button.A)) {
        instructA()
    } else if (input.buttonIsPressed(Button.B)) {
        maingame()
    }
}
