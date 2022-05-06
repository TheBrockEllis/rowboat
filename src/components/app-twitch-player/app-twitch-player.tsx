import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-twitch-player',
  styleUrl: 'app-twitch-player.css',
  shadow: true,
})
export class AppTwitchPlayer {
  @Prop() streamer: any;

  render() {
    if (!this.streamer.name) {
      return;
    }

    return (
      <div class='twitch'>
        <iframe
          src={`https://player.twitch.tv/?channel=${this.streamer.name}&parent=localhost&autoplay=false`}
          frameborder="0"
          scrolling="no"
          allowFullScreen={true}
          height="80%"
          width="100%">
        </iframe>
      </div>
    )
  }
}
