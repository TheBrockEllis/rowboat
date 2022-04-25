import { Component, Prop, h } from '@stencil/core';
import state from '../../global/store';
// import Streamer from '../../interfaces/streamer';

@Component({
  tag: 'app-streamer-list',
  styleUrl: 'app-streamer-list.css',
  shadow: true,
})
export class AppStreamerList {
  @Prop() streamers: any[]; // TODO streamer but throws errors

  render() {
    return (
      <nav>
        <ion-list lines='full' class="streamer-list">
          <ion-list-header>
            <ion-label>Streamers</ion-label>
          </ion-list-header>
  
          {this.streamers && this.streamers.length > 0 
            ? this.streamers.map( (streamer) => {
                return (
                  <ion-item button detail onClick={() => state.currentStreamer = streamer} color={state.currentStreamer.video === streamer.video ? 'primary' : undefined} >
                    <ion-label>{streamer.name}</ion-label>
                  </ion-item>
                )
              })
            : ''
          }
        </ion-list>
      </nav>
    )
  }
}
