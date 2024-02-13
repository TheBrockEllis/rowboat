
<img width="1500" alt="Screenshot 2024-02-13 at 11 54 28 AM" src="https://github.com/TheBrockEllis/rowboat/assets/1606194/1194fdc2-0c7d-4b5a-ae91-9f31fbe74662">

# Rowboat

Helping you navigate the streams!

## Stack

### Stencil

The main application is built with [stenciljs](https://stenciljs.com/docs/introduction). Stencil providers a spiffy
framework for building out page components and app architecture with jsx. It's main strength is outputting vanilla
web components, which is awesome #usetheplatform #ihatereact.

### Ionic Framework

The component library is the [Ionic Framework](https://ionicframework.com/docs/components). Ionic provides a ton of
components that are ready to use out of the box like list views, form fields, etc. I've used Ionic for many
hybrid mobile apps and love the product and team behind it.

### Neutralino

The tool used to build desktop application is [Neutralino](https://neutralino.js.org/docs/). It uses the existing web
library on the native device instead of bundling Chromium, resulting in much smaler file sizes. This is the first time
using this tool, but it seems promising thus far.

## Commands

### Running locally

- make sure you've run `npm install` to install dependencies

- you will need the `neu` [CLI tool](https://neutralino.js.org/docs/cli/neu-cli) in order to build desktop apps

- run `npm run build` to trigger Stencil to output a build into `/www`

- running `npm run app:run` will run the desktop app on your platform locally, Ctl+C to stop

- if you want to run JUST the stencil app, `npm run start` will do the trick

- to build desktop apps, run `npm run app:build` and the executables will be located in `/dist/rowboat`
