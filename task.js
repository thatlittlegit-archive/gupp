/*
 * Manages tasks. Provides various gupp.task's.
 */
import {emitter} from '.';

export function taskCb(name, cb) {
	emitter.on(`tasks.${name}`, cb);
}

export function taskDepsCb(name, deps, cb) {
	deps.forEach(dep => {
		emitter.on(`tasks.${name}`, () => (emitter.emit(`tasks.${dep}`)));
	});

	emitter.on(`tasks.${name}`, cb);
}
