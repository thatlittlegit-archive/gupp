import test from 'ava';
import isEmpty from 'is-empty';
import {default as gupp, emitter as ee} from '../dist/index.js';
import noop from 'noop3';

test('When gupp.task is called, a new entry should be made in the EventEmitter under \'tasks\'', t => {
		gupp.task('hello', noop);

		t.false(isEmpty(ee.listeners('tasks.hello')));
		t.is(ee.listeners('tasks.hello')[0], noop);
});