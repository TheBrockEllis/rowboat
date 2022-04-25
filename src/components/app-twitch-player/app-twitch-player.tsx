import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-twitch-player',
  styleUrl: 'app-twitch-player.css',
  shadow: true,
})
export class AppTwitchPlayer {
  @Prop() streamer: any;

  render() {
    return (
      <div class='twitch'>
        <div class="twitch-video">
          <iframe
            src={this.streamer.video}
            frameborder="0"
            scrolling="no"
            allowFullScreen={true}
            height="100%"
            width="100%">
          </iframe>
        </div>
        <div class="twitch-chat">
          <iframe
            frameborder="0"
            scrolling="no"
            src={this.streamer.chat}
            height="100%"
            width="100%">
          </iframe>
        </div>
      </div>
    )
  }
}
