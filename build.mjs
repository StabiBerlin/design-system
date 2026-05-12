import postcss from 'postcss';
import postcssImport from 'postcss-import';
import postcssUrl from 'postcss-url';
import cssnano from 'cssnano';
import { readFileSync, writeFileSync } from 'fs';

const css = readFileSync('tokens.css', 'utf-8');

const base = { from: 'tokens.css' };

// unminified
const result = await postcss([postcssImport(), postcssUrl({ url: 'rebase' })]).process(css, { ...base, to: 'dist/tokens.css' });
writeFileSync('dist/tokens.css', result.css);

// minified
const minResult = await postcss([postcssImport(), postcssUrl({ url: 'rebase' }), cssnano({ preset: 'default' })]).process(css, {
  ...base,
  to: 'dist/tokens.min.css'
});
writeFileSync('dist/tokens.min.css', minResult.css);

console.log('✓ tokens.css');
console.log('✓ tokens.min.css');
