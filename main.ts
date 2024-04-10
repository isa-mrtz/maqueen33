control.onEvent(EventBusSource.MES_BROADCAST_GENERAL_ID, EventBusValue.MES_ALERT_EVT_ALARM1, function () {
    basic.showNumber(maqueen.Ultrasonic(PingUnit.Centimeters))
})
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) == 5) {
        maqueen.motorStop(maqueen.Motors.All)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    }
    control.raiseEvent(
    EventBusSource.MES_BROADCAST_GENERAL_ID,
    EventBusValue.MES_ALERT_EVT_ALARM1
    )
})
