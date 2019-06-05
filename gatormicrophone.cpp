/**
* Andy England @ SparkFun Electronics
* September 6, 2018
* https://github.com/sparkfun/pxt-light-bit
*
* Development environment specifics:
* Written in Microsoft PXT
* Tested with a SparkFun temt6000 sensor and micro:bit
*
* This code is released under the [MIT License](http://opensource.org/licenses/MIT).
* Please review the LICENSE.md file included with this example. If you have any questions
* or concerns with licensing, please contact techsupport@sparkfun.com.
* Distributed as-is; no warranty is given.
*/


#include "pxt.h"
#include <cstdint>
#include <math.h>
#include "SparkFun_ADS1015_Arduino_Library.h"

using namespace pxt;

namespace gatorMicrophone {
	ADS1015 *mic; //BME280 handles our Temp, pressure, and humidity
		
	//%
	uint16_t readEnvelopeData()
	{
		uint16_t temp = mic->getSingleEnded(2);
		release_fiber();
		return temp;
	}
	
	//%
	bool readGateData()
	{
		uint16_t temp = mic->getSingleEnded(3);
		if (temp > 1000)
		{
			release_fiber();
			return true;
		}
		return false;
	}
}