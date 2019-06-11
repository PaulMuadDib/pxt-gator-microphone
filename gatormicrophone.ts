/**
* Andy England @ SparkFun Electronics
* September 6, 2018

* Development environment specifics:
* Written in Microsoft Makecode
* Tested with a SparkFun gatorMicrophone sensor and micro:bit
*
* This code is released under the [MIT License](http://opensource.org/licenses/MIT).
* Please review the LICENSE.md file included with this example. If you have any questions
* or concerns with licensing, please contact techsupport@sparkfun.com.
* Distributed as-is; no warranty is given.
*/


/**
 * Functions to operate the gatorMicrophone sensor
 */

enum gainOptions
{
	//% block="two thirds"
	two_thirds = 0,
	one = 1,
	two = 2,
	four = 3,
	eight = 4,
	sixteen = 5,
}

//% color=#f44242 icon="\uf130"
namespace gatorMicrophone {
    // Functions for reading envelope and gate data
	
	/**
	* Read's the intensity of sound from the microphone as a value between 0 and 2047, sensitivity is determined by the switch on the gator:microphone
	*/
	//% weight=25
	//% blockId="gatorMicrophone_readEnvelopeData"
	//% block="Get sound intensity"
	//% shim=gatorMicrophone::readEnvelopeData
	export function readEnvelopeData(): number{
		return 0
	}
	
	/**
	* Returns true if the sound is above a certain level, sensitivity is determined by the switch on the gator:microphone
	*/
	//% weight=24
	//% blockId="gatorMicrophone_readGateData"
	//% block="Check for sound"
	//% shim=gatorMicrophone::readGateData
	export function readGateData(): boolean{
		return true
	}
	
	/**
	* Sets the gain, or volume of the microphone. Lower gain means more sensitivity to smaller changes in volume.
	*/
	//% weight=23
	//% blockId="gatorMicrophone_setGain"
	//% block="Change gain to %gainOptions"
	//% shim=gatorMicrophone::setGain
	//% advanced=true
	export function setGain(gainOption: gainOptions){
		return
	}
}