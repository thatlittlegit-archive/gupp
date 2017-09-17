# `gupp`
> A recreation of Gulp for preformance.

## Usage
```sh
gupp       # Runs the default task
gupp babel # Runs 'babel'
```

#### Example guppfile
```js
/* remember, this isn't yet finished */
const gupp = require('gupp');

/* when gupp.task(name, glob, array) is called, then
   it's assumed to be like gupp.task(name, () => {
     const src = gupp.src(glob);
	 array.forEach((cb) => src.pipe(cb));
	 // NO gupp.dest!
   }
   
   to get a gupp.dest, use gupp.task(name, glob, array, dest).
   */
gupp.task('eslint', '*.js', [
	require('gulp-eslint')(),
	require('gulp-eslint').format(),
	require('gulp-eslint').failAfterError()
	]);

gupp.task('babel', '*.js', [require('gulp-babel')], 'dist');

gupp.task('default', () => {
	console.log(`babel   Run babel
eslint  Run ESLint`);
});
```
