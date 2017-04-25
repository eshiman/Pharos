
// DW1000Ranging TAG
#include <SPI.h>
#include "DW1000Ranging.h"

// Barometer MS5803
#include <Wire.h>
#include <SparkFun_MS5803_I2C.h>
//  ADDRESS_HIGH = 0x76
//  ADDRESS_LOW  = 0x77

//Sparkfun barometer

#include <Adafruit_MPL3115A2.h>

MS5803 sensor(ADDRESS_HIGH);

//Create variables to store results for barometer
double pressure_abs, pressure_relative, altitude_delta, pressure_baseline;

// Delta calculations to check for great changein pressure
int iter = 0;
float AveragePressure = 0;
float SumPressure = 0;
float OldPressure = 0;
boolean underwater = false;

// connection pins
const uint8_t PIN_RST = 9; // reset pin
const uint8_t PIN_IRQ = 2; // irq pin
const uint8_t PIN_SS = SS; // spi select pin

// Create Variable to store altitude in (m) for calculations;
double base_altitude = 1655.0; // Altitude of SparkFun's HQ in Boulder, CO. in (m)

//SET UP FOR SPARKFUN BAROMETER
Adafruit_MPL3115A2 baro = Adafruit_MPL3115A2();

void setup() {
    Serial.begin(9600);
    delay(1000);
  //init the configuration
  DW1000Ranging.initCommunication(PIN_RST, PIN_SS, PIN_IRQ); //Reset, CS, IRQ pin
  //define the sketch as anchor. It will be great to dynamically change the type of module
  DW1000Ranging.attachNewRange(newRange);
  DW1000Ranging.attachNewDevice(newDevice);
  DW1000Ranging.attachInactiveDevice(inactiveDevice);
  //we start the module as a tag
  DW1000Ranging.startAsTag("7D:00:22:EA:82:60:3B:9C", DW1000.MODE_LONGDATA_RANGE_ACCURACY);

    //Retrieve calibration constants for conversion math.
    sensor.reset();
    sensor.begin();
    pressure_baseline = sensor.getPressure(ADC_4096);
    
}

void loop() {
  if(!isUnderwater()){
  DW1000Ranging.loop();
  }

  delay(200);
}


boolean isUnderwater() {
  float pressureValue = baro.getPressure();
  //readPressure();
  SumPressure += pressureValue;
  
    Serial.println(SumPressure);
  if(iter==3){
    AveragePressure = SumPressure / 4;
    Serial.println(AveragePressure);
    float delta = AveragePressure-OldPressure;

    //check state
    if(delta> 300){
      underwater = true;
    }
    if(delta<= 300){
      underwater = false;
    }
    
    //reset values
    iter = 0;
    OldPressure = AveragePressure;
    SumPressure=0;
  }
  iter++;
  return underwater;
}




// TAG METHODS
void newRange() {
  Serial.print("from: "); Serial.print(DW1000Ranging.getDistantDevice()->getShortAddress(), HEX);
  Serial.print("\t Range: "); Serial.print(DW1000Ranging.getDistantDevice()->getRange()); Serial.print(" m");
  Serial.print("\t RX power: "); Serial.print(DW1000Ranging.getDistantDevice()->getRXPower()); Serial.println(" dBm");
}

void newDevice(DW1000Device* device) {
  Serial.print("ranging init; 1 device added ! -> ");
  Serial.print(" short:");
  Serial.println(device->getShortAddress(), HEX);
}

void inactiveDevice(DW1000Device* device) {
  Serial.print("delete inactive device: ");
  Serial.println(device->getShortAddress(), HEX);
}



// BAROMETER METHODS
 double sealevel(double P, double A)
// Given a pressure P (mbar) taken at a specific altitude (meters),
// return the equivalent pressure (mbar) at sea level.
// This produces pressure readings that can be used for weather measurements.
{
	return(P/pow(1-(A/44330.0),5.255));
}


double altitude(double P, double P0)
// Given a pressure measurement P (mbar) and the pressure at a baseline P0 (mbar),
// return altitude (meters) above baseline.
{
	return(44330.0*(1-pow(P/P0,1/5.255)));
}


// Prints pressure and returns value
float readPressure(){
    // ADC_4096 is most precise setting
  // Read pressure from the sensor in mbar.
  pressure_abs = sensor.getPressure(ADC_4096);
  // Convert abs pressure with the help of altitude into relative pressure
  pressure_relative = sealevel(pressure_abs, base_altitude);
  Serial.print("Pressure relative (mbar)= ");
  Serial.println(pressure_relative); 
  return pressure_relative;
}

  
