import { Component, Prop, h } from '@stencil/core';
import state from '../../global/store';

@Component({
  tag: 'app-streamer-player',
  styleUrl: 'app-streamer-player.css',
  shadow: true,
})
export class AppStreamerPlayer {
  @Prop() streamer: any;

  render() {
    return (
      <main>
        {
          state.currentPlatform === 'twitch' 
          ? <app-twitch-player streamer={this.streamer}></app-twitch-player>
          : <app-youtube-player streamer={this.streamer}></app-youtube-player>
        }
      </main>
    )
  }
}
