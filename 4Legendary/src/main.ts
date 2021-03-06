import 'bootstrap';
import 'materialize-css';
import {Aurelia} from 'aurelia-framework';

export function configure(aurelia: Aurelia) {

  let materialize = 'materialize-css';

  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-materialize-bridge', bridge => bridge.useAll());

  // Uncomment the line below to enable animation.
  // aurelia.use.plugin('aurelia-animator-css');

  // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  // aurelia.use.plugin('aurelia-html-import-template-loader')

  // return aurelia.loader.loadModule(materialize).then(() => {
  //   aurelia.use
  //     .standardConfiguration()
  //     .developmentLogging()
  //     .plugin('aurelia-materialize-bridge', bridge => bridge.useAll());

  //   return aurelia.start().then(() => aurelia.setRoot());
  // });

  return aurelia.start().then(() => aurelia.setRoot());
}
