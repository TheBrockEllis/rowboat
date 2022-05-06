import { createStore } from "@stencil/store";
import Streamer from '../interfaces/streamer'

// {
//       name: 'TimTheTatMan',
//       video: 'https://www.youtube.com/embed/live_stream?channel=UCXBE_QQSZueB8082ml5fslg&autoplay=1'
//     },{
//       name: 'DrDisRespect',
//       video: 'https://www.youtube.com/embed/live_stream?channel=UCcJL2ld6kxy_nuV1u7PVQ0g&autoplay=1'
//     }

// {
//       name: 'gorgc',
//       value: 'gorgc',
//       video: 'https://player.twitch.tv/?channel=gorgc&parent=localhost&autoplay=false',
//       chat: 'https://www.twitch.tv/embed/gorgc/chat?parent=localhost'
//     },{
//       name: 'TeePee',
//       value: 'teepee',
//       video: 'https://player.twitch.tv/?channel=teepee&parent=localhost&autoplay=false',
//       chat: 'https://www.twitch.tv/embed/teepee/chat?parent=localhost'
//     },{
//       name: 'Merk',
//       value: 'merk',
//       video: 'https://player.twitch.tv/?channel=merk&parent=localhost&autoplay=false',
//       chat: 'https://www.twitch.tv/embed/merk/chat?parent=localhost'
//     },{
//       name: 'Symfuhny',
//       value: 'symfuhny',
//       video: 'https://player.twitch.tv/?channel=symfuhny&parent=localhost&autoplay=false',
//       chat: 'https://www.twitch.tv/embed/symfuhny/chat?parent=localhost'
//     }

let savedStorage = JSON.parse(localStorage.getItem('rowboat-storage'))
if (!savedStorage) {
  savedStorage = {
    youtube: <Streamer[]> [],
    twitch: <Streamer[]> [],
    announcement: <string> '',
    currentPlatform: <string> 'twitch',
    currentStreamer: <Streamer> {}
  }
}

const { state, onChange } = createStore(savedStorage);

onChange('youtube', (value: any | Streamer) => {
  console.log('chaning youtube', value[value.length - 1].name)
  state.announcement = `Youtuber ${value[value.length - 1].name} streamer added`;
  clearAnnouncement()
  saveState()
});

onChange('twitch', (value: any | Streamer) => {
  console.log('chaning twitch', value[value.length - 1].name)
  state.announcement = `Twitch streamer ${value[value.length - 1].name} added`;
  clearAnnouncement()
  saveState()
});

const saveState = () => {
  localStorage.setItem('rowboat-storage', JSON.stringify(state))
}

const clearAnnouncement = () => {
  setTimeout( () => {
    state.announcement = ''
    saveState()
  }, 5000)
}

export default state;