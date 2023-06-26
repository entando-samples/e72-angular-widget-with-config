# Bundle for a simple Angular MFE with a React config widget
The project contains a simple Angular MFE with config for Entando 7.2

## Prerequisites
1. Docker account
2. attach ent to an Entando platform (e.g. ent attach-kubeconfig config-file)

## Build and publish steps  
1. ent bundle pack 
2. ent bundle publish
3. ent bundle deploy
4. ent bundle install

See https://developer.entando.com for more information.

## History
v0.0.3 Switch to production mode but fails in Entando due to error NG0908. Error not shown in local production build/serve.
v0.0.2 Add React MFE Config and enabled angular-widget. Using development mode for the build which works local and in Entando 7.2
v0.0.1 First version