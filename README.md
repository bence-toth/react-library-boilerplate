### Available scripts

#### `npm start`

Runs [Storybook](https://storybook.js.org/).

To create a static build of Storybook, run `npm run build:storybook`.


#### `npm build`

Creates production build which can be [published to the npm registry](#publishing-a-new-version).


#### `npm test`

Runs tests:
  - unit tests with [Jest](https://jestjs.io/),
  - integration tests with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro),
  - structural snapshot tests with [StoryShots](https://storybook.js.org/docs/testing/structural-testing/).

To run Jest in watch mode, run `npm run test:watch`.

To run Jest with [a browser UI](https://github.com/Raathigesh/majestic#readme), run `npm run test:gui`.

To generate test coverage, run `npm run test:coverage`.


#### `npm run lint`

Runs [ESLint](https://eslint.org/), [StyleLint](https://stylelint.io/), and [Alex](https://github.com/get-alex/alex#readme) sequentially.

To run ESLint individually, run `npm run eslint`.

To run StyleLint individually, run `npm run stylelint`.

To run Alex individually, run `npm run proofread`.


#### `npm run update`

Runs [`npm-check`](https://github.com/dylang/npm-check#readme) to check for package updates interactively.


### Publishing a new version

This is an npm package which uses [semantic versioning](https://docs.npmjs.com/about-semantic-versioning). Before releasing a new version, you have to make sure that you have updated the version number using `npm version`.

When you are releasing a new version, you should add a new entry to [the change log](./changelog.md) describing what changes were introduced, and providing a migration plan in case of breaking changes.

Before you publish a new package version, make sure that the production build is up-to-date by running `npm run build`.

Finally run `npm publish` to publish your package to the npm registry.


### Change configuration

#### Configuration files

- **Babel:** `.babelrc`

- **ESLint:** `.eslintrc`

- **Jest:** `jest.config.js`

- **PostCSS** `postcss.config.js`

- **Storybook:** `storybook/main.js` and `storybook/preview.js`

- **StyleLint:** `stylelint.config.js`

- **Webpack:** `webpack.config.js`


#### Enable visual snapshot testing

In order to enable [visual snapshot testing](https://storybook.js.org/docs/testing/automated-visual-testing/) with StoryShots, first you have to install `puppeteer` and `@storybook/addon-storyshots-puppeteer`:

```sh
npm install puppeteer @storybook/addon-storyshots-puppeteer
```

Create a new file called `storyshots.puppeteer.test.js` in the root folder of the project (right next to `storyshots.test.js`) with the following content:

```js
import initStoryshots from '@storybook/addon-storyshots'
import {imageSnapshot} from '@storybook/addon-storyshots-puppeteer'

initStoryshots({
  suite: 'Visual snapshots',
  test: imageSnapshot({
    storybookUrl: 'http://localhost:6006/'
  })
})

```

Finally generate visual snapshots:

```sh
npm test
```


#### Add Sass support

To add [Sass support](https://sass-lang.com/), first you have to install `sass-loader` and `node-sass` as development dependencies:

```sh
npm install sass-loader node-sass --save-dev
```

You have to add a new rule in the `module.rules` of the webpack configuration file (`webpack.config.js`):

```js
{
  // Load all `scss` and `sass`
  // imports with `style-loader`,
  // `css-loader`, and `sass-loader`.
  test: /\.s[ac]ss$/i,
  use: [
    // Creates `style` nodes from JS strings
    'style-loader',
    // Translates CSS into CommonJS
    'css-loader',
    // Compiles Sass to CSS
    'sass-loader'
  ]
}
```

You will also have to update the webpack configuration of Storybook with the same rule. You can do this by overriding `webpackFinal` in `.storybook/main.js` to merge the new rule with the original Storybook webpack config:

```js
async config => ({
  ...config,
  module: {
    ...config.module,
    rules: [
      ...config.module.rules,
      {
        // Load all `scss` and `sass`
        // imports with `style-loader`,
        // `css-loader`, and `sass-loader`.
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Autoprefixes CSS
          'postcss-loader',
          // Compiles Sass to CSS
          'sass-loader'
        ]
      }
    ]
  }
})
```

Finally, you will have to mock `scss` and `sass` imports for Jest. In order to do this, you will have to extend `moduleNameMapper` in the Jest configuration file (`jest.config.js`) with:

```js
'\\.scss$': '<rootDir>/.jest/mocks/styleMock.js',
'\\.sass$': '<rootDir>/.jest/mocks/styleMock.js'
```

With this done, you can finally import `scss` files in `js` and `jsx` files, exactly like you would do with `css`:

```js
import './styles.scss'
```

You may also want to update or extend your StyleLint setup for working with Sass.
