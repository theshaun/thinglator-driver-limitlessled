'use strict';

class StarterDriver {
	constructor(driverSettingsObj, interfaces) {
		var self = this;
		this.interface = interfaces[this.getInterface()];
	}

	getName() {
		return 'starter';
	}

	getType() {
		return 'switch';
	}

	getInterface() {
		return 'http';
	}

	setEventEmitter(eventEmitter) {
		this.eventEmitter = eventEmitter;
		//when something happens with this device you can emit an event to let the homebox platform know:
		//it should only emit events which are valid types (see documentation for more info)
		//this.eventEmitter.emit('eventType','driverId','deviceId','value')

		//E.g:
		//this.eventEmitter.emit('didSomething','starter','defghi','abc123');
	}

	initDevices(devices) {
		
	}

	getAuthenticationProcess() {
		return [];
	}

	discover() {
		return new Promise(function(resolve) {
			var devices = [];
			//find any devices on the network here, then add them to devices array
			var device = {
				deviceId: 'uniqueSerialNumber',
				name: 'nameOfDevice',
				address: 'ipAddressOfDevice',
				capabilities: { //the list of capabilities listed here should reflect the capabilities of the type of device
					on: true,
					off: true
				}
			};

			devices.push(device);
			resolve(devices);
		});
	}

	capability_on(device, props) {
		return new Promise(function(resolve) {
			//turn the device on here
			resolve({
				on: true
			});
		});
	}

	capability_off(device, props) {
		return new Promise(function(resolve) {
			//turn the device off here
			resolve({
				off: true
			});
		});
	}
}

module.exports = StarterDriver;
