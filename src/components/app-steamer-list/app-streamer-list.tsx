import { Component, Prop, h, State } from '@stencil/core';
import state from '../../global/store';
// import Streamer from '../../interfaces/streamer';

@Component({
  tag: 'app-streamer-list',
  styleUrl: 'app-streamer-list.css',
  shadow: true,
})
export class AppStreamerList {
  @Prop() streamers: any[]; // TODO streamer but throws errors
  @State() newStream: string;

  addStreamer() {
    state[state.currentPlatform] = [ ...state[state.currentPlatform], { name: this.newStream } ]
    state.announcement = `${this.newStream} was added`

    this.newStream = undefined;
  }

  removeStreamer({ index, name }) {
    state[state.currentPlatform].splice(index, 1)
    state[state.currentPlatform] = [ ...state[state.currentPlatform] ]
    state.announcement = `${name} was removed`
  }

  render() {
    return (
      <nav>
        <ion-list class="streamer-list">
          <ion-list-header>
            <ion-label>Streamers</ion-label>
          </ion-list-header>
  
          {this.streamers && this.streamers.length > 0 
            ? this.streamers.map( (streamer, index) => {
                return (
                  // color={state.currentStreamer.name === streamer.name ? 'primary' : undefined}
                  <ion-item button class={"streamer " + (state.currentStreamer.name === streamer.name ? "active" : "") } detail>
                    <ion-button slot="start" color="danger" onClick={() => this.removeStreamer({ index, name: streamer.name })}>
                      X
                    </ion-button>
                    <ion-label onClick={() => state.currentStreamer = streamer} >{streamer.name}</ion-label>
                  </ion-item>
                )
              })
            : ''
          }
        </ion-list>

        <ion-list class="add-streamer-list">
          <ion-list-header>
            <ion-label>Add Stream</ion-label>
          </ion-list-header>

          <ion-item>
            <ion-button slot="start" onClick={() => this.addStreamer()}>
              Add
            </ion-button>
            <ion-input placeholder='username' value={this.newStream} onChange={(ev) => this.newStream = ev.target.value}></ion-input>
          </ion-item>
        </ion-list>
      </nav>
    )
  }
}
