# The input of side A

def on_button_pressed_a():
    global rope
    rope += randint(-1, 0)
input.on_button_pressed(Button.A, on_button_pressed_a)

# The input of side B

def on_button_pressed_b():
    global rope
    rope += randint(0, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

rope = 2

def on_forever():
    basic.clear_screen()
    led.plot(Math.round(rope), 2)
    if rope < 0:
        basic.show_string("a")
    elif rope > 4:
        basic.show_string("b")
basic.forever(on_forever)

print("Do you wish to play again? (a = yes)")