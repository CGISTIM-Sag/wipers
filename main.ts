led.enable(false)
let Temp = 0
let X = 230
ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, X)
basic.forever(function () {
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, X)
    if (ModuleWorld_Analog.Rocker(ModuleWorld_Analog.mwAnalogNum.AP2P3, ModuleWorld_Analog.enRocker.Up)) {
        X = X - 4
    } else if (ModuleWorld_Analog.Rocker(ModuleWorld_Analog.mwAnalogNum.AP2P3, ModuleWorld_Analog.enRocker.Down)) {
        X = X + 4
    } else if (ModuleWorld_Analog.Rocker(ModuleWorld_Analog.mwAnalogNum.AP2P3, ModuleWorld_Analog.enRocker.Left)) {
        X = X + 4
    } else if (ModuleWorld_Analog.Rocker(ModuleWorld_Analog.mwAnalogNum.AP2P3, ModuleWorld_Analog.enRocker.Right)) {
        X = X - 4
    }
    if (X < 130) {
        X = 130
    } else if (X > 230) {
        X = 230
    }
    if (ModuleWorld_Digital.Button(ModuleWorld_Digital.mwDigitalNum.P10P11, ModuleWorld_Digital.enButton.Press)) {
        basic.pause(500)
        if (ModuleWorld_Digital.Button(ModuleWorld_Digital.mwDigitalNum.P10P11, ModuleWorld_Digital.enButton.Press)) {
            for (let index = 0; index < 2; index++) {
                ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 131)
                basic.pause(500)
                ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 229)
                basic.pause(500)
            }
            control.reset()
        }
        for (let index = 0; index < 2; index++) {
            ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 131)
            basic.pause(300)
            ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 229)
            basic.pause(300)
        }
    }
})
