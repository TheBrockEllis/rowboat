import { Component, h } from '@stencil/core';
import state from '../../global/store';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  public segmentChanged = (event:any) => {
    console.log('Made a selection', event)
    state.currentPlatform = event.detail.value;
  }

  render() {
    return (
      <ion-content>
          <ion-toolbar style={{ '--background': state.currentPlatform === 'twitch' ? 'purple' : 'red' }}>
            <ion-segment mode='ios' onIonChange={(ev) => this.segmentChanged(ev)} value={state.currentPlatform}>
              <ion-segment-button value="twitch">
                <ion-label>Twitch</ion-label>
              </ion-segment-button>
              <ion-segment-button value="youtube">
                <ion-label>YouTube</ion-label>
              </ion-segment-button>
            </ion-segment>
          </ion-toolbar>
          
          <main class='split'>
            <div id='streamer-list'>
              <app-streamer-list streamers={state[state.currentPlatform]}></app-streamer-list>
            </div>
            <div id='streamer-player'>
              <app-streamer-player streamer={state.currentStreamer}></app-streamer-player>
            </div>
          </main>

          <ion-footer>
            <ion-toolbar>
              <ion-title innerHTML={state.announcement ? state.announcement : `Brought to you by <a href="https://thebrockellis.com/rowboat" target="_blank">Rowboat</a>`}></ion-title>
            </ion-toolbar>
          </ion-footer>
      </ion-content>

    );
  }
}
