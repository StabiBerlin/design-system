import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';

register(StyleDictionary);

const sd = new StyleDictionary({
  source: ['tokens.json'],
  preprocessors: ['tokens-studio'],
  platforms: {
    css: {
      transformGroup: 'tokens-studio',
      transforms: ['name/kebab'],
      buildPath: 'build/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
          filter: {
            attributes: {
              category: 'semantic'
            }
          },
        },
      ],
    },
    scss: {
      transformGroup: 'scss',
      transforms: ['name/kebab'],
      buildPath: 'build/',
      files: [
        {
          destination: 'variables.scss',
          format: 'scss/variables',
          filter: {
            attributes: {
              category: 'semantic'
            }
          },
        }
      ]
    },
  },
  log: {
    verbosity: 'verbose'
  },
});

await sd.cleanAllPlatforms();
await sd.buildAllPlatforms();
