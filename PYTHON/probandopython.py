import serial

deArduino = serial.Serial("COM5",115200)

while(1):
    while(deArduino.inWaiting()==0):
        pass
    datoString = deArduino.readline()
    a = datoString.splitlines()
    print(a)
    b=str(a[0])
    c=b.replace("b","")
    d=c.replace("'","")
    e=float(d)
    print (e)