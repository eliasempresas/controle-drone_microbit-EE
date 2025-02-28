enum RadioMessage {
    message1 = 49434,
    INICIAR = 120,
    BOTAO_A = 1598,
    BOTAO_A_B = 4412,
    DIREITA = 12197,
    ESQUERDA = 27293,
    DESLIGAR = 30426,
    BOTAO_B = 38770
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendMessage(RadioMessage.DESLIGAR)
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendMessage(RadioMessage.ESQUERDA)
})
input.onButtonPressed(Button.A, function () {
    radio.sendMessage(RadioMessage.BOTAO_A)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendMessage(RadioMessage.BOTAO_A_B)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    radio.sendMessage(RadioMessage.INICIAR)
    music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    radio.sendMessage(RadioMessage.BOTAO_B)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendMessage(RadioMessage.DIREITA)
})
radio.setGroup(55)
basic.showLeds(`
    # # . # #
    # . . # .
    # # . # #
    # . . # .
    # # . # #
    `)
basic.showString("CONTROLE")
basic.showLeds(`
    # # . # #
    # . . # .
    # # . # #
    # . . # .
    # # . # #
    `)
