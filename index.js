import {EventEmitter2} from 'eventemitter2';

export const emitter = new EventEmitter2();

const gupp = {
	task(name, cb) {
		emitter.on(`tasks.${name}`, cb);
	}
};

export default gupp;
