import { createStore } from "@stencil/store";
import Streamer from '../interfaces/streamer'

const { state, onChange } = createStore({
  youtube: <Streamer[]> [{
    name: 'TimTheTatMan',
    video: 'https://www.youtube.com/embed/live_stream?channel=UCXBE_QQSZueB8082ml5fslg&autoplay=1'
  },{
    name: 'DrDisRespect',
    video: 'https://www.youtube.com/embed/live_stream?channel=UCcJL2ld6kxy_nuV1u7PVQ0g&autoplay=1'
  }],
  twitch: <Streamer[]> [{
    name: 'gorgc',
    video: 'https://player.twitch.tv/?channel=gorgc&parent=localhost&autoplay=false',
    chat: 'https://www.twitch.tv/embed/gorgc/chat?parent=localhost'
  },{
    name: 'TeePee',
    video: 'https://player.twitch.tv/?channel=teepee&parent=localhost&autoplay=false',
    chat: 'https://www.twitch.tv/embed/teepee/chat?parent=localhost'
  },{
    name: 'Merk',
    video: 'https://player.twitch.tv/?channel=merk&parent=localhost&autoplay=false',
    chat: 'https://www.twitch.tv/embed/merk/chat?parent=localhost'
  },{
    name: 'Symfuhny',
    video: 'https://player.twitch.tv/?channel=symfuhny&parent=localhost&autoplay=false',
    chat: 'https://www.twitch.tv/embed/symfuhny/chat?parent=localhost'
  }],
  announcement: <string> '',
  currentPlatform: <string> 'twitch',
  currentStreamer: <Streamer> {}
});

onChange('youtube', (value: any | Streamer) => {
  state.announcement = `Youtuber ${value.name} streamer added`;
});

export default state;