import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  preserveSymlinks: true,
	input: ['slider-carousel.js'],
	output: {
		file: 'build/slider-carousel.js',
    format: 'es',
		sourcemap: true
	},
	plugins: [
    resolve(),
    babel()
  ]
};