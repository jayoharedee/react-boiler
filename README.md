# react-boiler

[![Build Status](https://travis-ci.com/jayoharedee/react-boiler.svg?token=qoLyUBkC3b8L5zAaa9tp&branch=master)](https://travis-ci.com/jayoharedee/react-boiler)

> Used to start some frontend projects

# How to use

* `npm install` your dependencies
* `npm run build` for a production build
* `npm run dev` for a development build
* `npm run start` for a webpack dev-server
* `npm run test` for prettier and eslint

If you want to configure a mock api using json-server, you can run `npm run mock:api`

In the scripts folder you'll find both a `deploy.sh` and a `scaffold_component.sh`. Below you'll find details on how these shell scripts can be used.

### deploy.sh
This script is currently being used by [Travis CI](https://travis-ci.com) for deployments. Inside the [Travis Config File](./.travis.yml), you'll see that the deploy service is currently set to script. Right now I have the deploy script using [Zeit's](https://zeit.co) CLI tool for deploys. Travis will run this script and deploy to Zeit for me.

By default, the deployment lifecycle is commented out in the [deploy](./scripts/deploy.sh) shell script so if you want to run deploys, you'll have to wire that up to your preference.

### scaffold_component.sh
If you run this script, a new component will be generated in [src/js/components](./src/js/components).

To use this script, run `npm run component` followed by the name of the component you'd like to have generated.

**example:**
```sh
npm run component COMPONENT_NAME_HERE
```

