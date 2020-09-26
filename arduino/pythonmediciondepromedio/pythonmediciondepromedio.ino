#include <CircularBuffer.h>
#include <MAX30100.h>
#include <MAX30100_BeatDetector.h>
#include <MAX30100_Filters.h>
#include <MAX30100_PulseOximeter.h>
#include <MAX30100_Registers.h>
#include <MAX30100_SpO2Calculator.h>
#include <CircularBuffer.h>
#include <MAX30100.h>
#include <MAX30100_BeatDetector.h>
#include <MAX30100_Filters.h>
#include <MAX30100_PulseOximeter.h>
#include <MAX30100_Registers.h>
#include <MAX30100_SpO2Calculator.h>
#include <Wire.h>
#include "MAX30100_PulseOximeter.h"
#define REPORTING_PERIOD_MS   1000
PulseOximeter pox;
uint32_t tsLastReport = 0;
void onBeatDetected()
{
}
void setup() 
{
  Serial.begin(115200);
  if (!pox.begin()) {
    for(;;);
  } else {
  }
  pox.setOnBeatDetectedCallback(onBeatDetected);
}

void loop() {
  // put your main code here, to run repeatedly:
uint32_t cantidaddemediciones=0;
int totalmediciones = 0;
while(cantidaddemediciones < 10)
{
  pox.update();
  if (millis() - tsLastReport > REPORTING_PERIOD_MS) {
        if (pox.getHeartRate() > 40){ 
    int medicion = pox.getHeartRate();
    totalmediciones = totalmediciones+ medicion; 
    tsLastReport = millis();
    cantidaddemediciones ++;
        }
     }
}
  int pulso= totalmediciones/10;
  if (pulso > 200)
  {
  byte pulsobyte= byte(pulso);
  Serial.print(pulsobyte);
  }
   else if (pulso < 50)
  {
  byte pulsobyte= byte(pulso);
  Serial.print(pulsobyte);
  }
}
