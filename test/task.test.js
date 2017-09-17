import test from 'ava';
import isEmpty from 'is-empty';
import noop from 'noop3';
import {default as gupp, emitter as ee} from '../dist/';

function clean() {
	ee.removeAllListeners('tasks.hello');
}

test('When gupp.task(name, cb) is called, a new entry should be made in the EventEmitter under \'tasks\'', t => {
	gupp.task('hello', noop);

	t.false(isEmpty(ee.listeners('tasks.hello')));
	t.is(ee.listeners('tasks.hello')[0], noop);

	clean();
});

test('When gupp.task(name, deps, cb) is called, a number of new entries should be made in the EventEmitter', t => {
	gupp.task('hello', ['world'], noop);

	t.false(isEmpty(ee.listeners('tasks.hello')));
	t.is(ee.listeners('tasks.hello').length, 2);

	clean();
});
