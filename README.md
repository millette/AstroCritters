# [astro-critters] 🦔

This **[Astro integration][astro-integration]** brings [critters][critters] to
your Astro project.

Critters is a plugin that inlines your app's [critical CSS] and lazy-loads the
rest.

## Installation

There are two ways to add integrations to your project. Let's try the most
convenient option first!

### (experimental) `astro add` command

Astro includes a CLI tool for adding first party integrations: `astro add`. This
command will:

1. (Optionally) Install all necessary dependencies and peer dependencies
2. (Also optionally) Update your `astro.config.*` file to apply this integration

To install `astro-critters`, run the following from your project directory and
follow the prompts:

```sh
# Using NPM
npx astro add astro-critters
# Using Yarn
yarn astro add astro-critters
# Using PNPM
pnpx astro add astro-critters
```

### Install dependencies manually

First, install the `astro-critters` integration like so:

```
npm install -D -E astro-critters
```

Then, apply this integration to your `astro.config.*` file using the
`integrations` property:

**astro.config.ts**

```ts
import type { AstroUserConfig } from "astro";
import critters from "astro-critters";

export default (): AstroUserConfig => ({
	integrations: [critters()],
});
```

## Getting started

Critters should now automatically inline the critical CSS of your HTML files.

You can override any of the default options from the configuration at
https://github.com/GoogleChromeLabs/critters#properties.

Set logger to 0 if you do not want to see debug messages. Default is 2.

```ts
import type { AstroUserConfig } from "astro";
import critters from "astro-critters";

export default (): AstroUserConfig => ({
	integrations: [
		critters({
			logger: 0,
		}),
	],
});
```

[astro-critters]: https://npmjs.org/astro-critters
[critters]: https://github.com/GoogleChromeLabs/critters
[astro-integration]: https://docs.astro.build/en/guides/integrations-guide/
[astro-configuration-outdir]:
	https://docs.astro.build/en/reference/configuration-reference/#outdir
[astro-ui-frameworks]:
	https://docs.astro.build/en/core-concepts/framework-components/#using-framework-components
[critical css]:
	https://www.smashingmagazine.com/2015/08/understanding-critical-css/

[![Built with nikolarhristov/npm](https://raw.githubusercontent.com/nikolarhristov/npm/main/.github/img/favicon-16x16.png)](https://github.com/NikolaRHristov/npm)
