import {Module} from 'react-360-web';
export default class UserModule extends Module {
  constructor(ctx) {
    super('BrowserInfo');
    this._rnctx = ctx;
  }

  playVideo() {

    var myVideo = document.getElementsByTagName('video')[0];

    if (myVideo.paused)
        myVideo.play();
    else
        myVideo.pause();
  }
}
