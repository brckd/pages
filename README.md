# @bricked/astro-template

[![license](https://custom-icon-badges.demolab.com/github/license/brckd/astro-template?logo=law)](LICENSE.md)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
[![version](https://img.shields.io/npm/v/@bricked/astro-template?color=crimson&logo=npm)](https://www.npmjs.com/package/@bricked/astro-template)

A template for Astro projects.

## ToDo

- [ ] [Create](https://github.com/brckd/astro-template/generate) a new repository from this template
- [ ] Find & replace `astro-template` with the name of the new repository
- [ ] Find & replace the description with a proper one
- [ ] Remove `"dryRun": true` from the [`package.json`](./package.json)
- [ ] Remove this section

## Usage

`astro-template` can be used as A template for Astro projects.

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

[![Deploy and clone to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/brckd/astro-template)

#### From a fork

[![Deploy existing fork to Vercel](https://vercel.com/button)](https://vercel.com/new/import?s=https://github.com/brckd/astro-template)

### Deploy to GitHub pages

1. Enable pages in the [pages settings](https://github.com/brckd/astro-template/settings/pages).
2. Uncomment the push event in the [`deploy.yml`](./.github/workflows/deploy.yml) workflow to enable it.
