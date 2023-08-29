# @bricked/pages

[![license](https://custom-icon-badges.demolab.com/github/license/brckd/pages?logo=law)](LICENSE.md)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
[![version](https://img.shields.io/npm/v/@bricked/pages?color=crimson&logo=npm)](https://www.npmjs.com/package/@bricked/pages)

My very own site on the interwebz.

## Deploy

Set the `SITE` environment variable to the url of the deployment.

### Develop locally

```sh
npm install # install dependencies
npm run dev # start dev server
```

### Deploy locally

```sh
npm install # install dependencies
npm run build # build site to ./dist/
```

### Deploy to Vercel

#### From upstream

[![Deploy and clone to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/brckd/pages)

#### From a fork

[![Deploy existing fork to Vercel](https://vercel.com/button)](https://vercel.com/new/import?s=https://github.com/brckd/pages)

### Deploy to GitHub pages

1. Enable pages in the [pages settings](https://github.com/brckd/pages/settings/pages).
2. Uncomment the push event in the [`deploy.yml`](./.github/workflows/deploy.yml) workflow to enable
   it.
