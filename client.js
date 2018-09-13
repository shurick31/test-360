// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance} from 'react-360-web';
import UserModule from './UserModule';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    nativeModules: [
      ctx => new UserModule(ctx),
    ],
    ...options,
  });

  r360.renderToLocation(
    r360.createRoot('test_360'),
    r360.getDefaultLocation(),
  );

}

window.React360 = {init};
