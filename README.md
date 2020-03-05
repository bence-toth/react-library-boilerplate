### Available scripts

- `npm start`

  Runs Storybook.

- `npm build`

  Creates production build which can be published
  to the npm registry.

- `npm test`

  Runs Jest:
    - unit tests
    - integration tests
    - structural snapshot tests with `storyshots`
    - visual snapshot tests with `storyshots-puppeteer`

  To run Jest in watch mode, run `npm run test:watch`.

  To run Jest with a browser UI, run `npm run test:gui`.

  To generate test coverage, run `npm run test:watch`.

- `npm run lint`

  Runs ESLint and StyleLint sequentially.

  To run ESLint individually, run `npm run eslint`.

  To run StyleLint individually, run `npm run stylelint`.

- `npm run proofread`

  Analyses text and pinpoints potential mistakes.

- `npm run update`

  Check for package updates interactively.
