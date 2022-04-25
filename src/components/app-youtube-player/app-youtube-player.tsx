import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-youtube-player',
  styleUrl: 'app-youtube-player.css',
  shadow: true,
})
export class AppYoutubePlayer {
  @Prop() streamer: any;

  render() {
    return (
      <div class='youtube'>
        <div class="youtube-video">
          <iframe
            src={this.streamer.video}
            frameborder="0"
            scrolling="no"
            allowFullScreen={true}
            height="100%"
            width="100%">
          </iframe>
        </div>
      </div>
    )
  }
}
