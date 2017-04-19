import serial  # Import Serial Library

arduinoSerialData = serial.Serial('\\.\COM6', 115200)  # Create Serial port object called arduinoSerialData
# COM6 == 5
while (1 == 1):
    if arduinoSerialData.inWaiting() > 0:
        myData = arduinoSerialData.readline()
        print
        myData
