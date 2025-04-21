let number = 0
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    number = randint(0, 6)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        music.ringTone(988)
    } else {
        music.stopAllSounds()
    }
})
