import {EventEmitter2} from 'eventemitter2';

import * as tasks from './task';

export const emitter = new EventEmitter2();

const gupp = {
	task(name, cb, cb1) {
		if (Array.isArray(cb)) {
			tasks.taskDepsCb(name, cb, cb1);
		} else if (cb instanceof Function) {
			tasks.taskCb(name, cb);
		}
	}
};

export default gupp;
