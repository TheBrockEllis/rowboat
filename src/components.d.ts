/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults } from "@stencil/router";
export namespace Components {
    interface AppHome {
    }
    interface AppProfile {
        "match": MatchResults;
    }
    interface AppRoot {
    }
    interface AppStreamerList {
        "streamers": any[];
    }
    interface AppStreamerPlayer {
        "streamer": any;
    }
    interface AppTwitchPlayer {
        "streamer": any;
    }
    interface AppYoutubePlayer {
        "streamer": any;
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLAppStreamerListElement extends Components.AppStreamerList, HTMLStencilElement {
    }
    var HTMLAppStreamerListElement: {
        prototype: HTMLAppStreamerListElement;
        new (): HTMLAppStreamerListElement;
    };
    interface HTMLAppStreamerPlayerElement extends Components.AppStreamerPlayer, HTMLStencilElement {
    }
    var HTMLAppStreamerPlayerElement: {
        prototype: HTMLAppStreamerPlayerElement;
        new (): HTMLAppStreamerPlayerElement;
    };
    interface HTMLAppTwitchPlayerElement extends Components.AppTwitchPlayer, HTMLStencilElement {
    }
    var HTMLAppTwitchPlayerElement: {
        prototype: HTMLAppTwitchPlayerElement;
        new (): HTMLAppTwitchPlayerElement;
    };
    interface HTMLAppYoutubePlayerElement extends Components.AppYoutubePlayer, HTMLStencilElement {
    }
    var HTMLAppYoutubePlayerElement: {
        prototype: HTMLAppYoutubePlayerElement;
        new (): HTMLAppYoutubePlayerElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "app-streamer-list": HTMLAppStreamerListElement;
        "app-streamer-player": HTMLAppStreamerPlayerElement;
        "app-twitch-player": HTMLAppTwitchPlayerElement;
        "app-youtube-player": HTMLAppYoutubePlayerElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
    }
    interface AppProfile {
        "match"?: MatchResults;
    }
    interface AppRoot {
    }
    interface AppStreamerList {
        "streamers"?: any[];
    }
    interface AppStreamerPlayer {
        "streamer"?: any;
    }
    interface AppTwitchPlayer {
        "streamer"?: any;
    }
    interface AppYoutubePlayer {
        "streamer"?: any;
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "app-streamer-list": AppStreamerList;
        "app-streamer-player": AppStreamerPlayer;
        "app-twitch-player": AppTwitchPlayer;
        "app-youtube-player": AppYoutubePlayer;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "app-streamer-list": LocalJSX.AppStreamerList & JSXBase.HTMLAttributes<HTMLAppStreamerListElement>;
            "app-streamer-player": LocalJSX.AppStreamerPlayer & JSXBase.HTMLAttributes<HTMLAppStreamerPlayerElement>;
            "app-twitch-player": LocalJSX.AppTwitchPlayer & JSXBase.HTMLAttributes<HTMLAppTwitchPlayerElement>;
            "app-youtube-player": LocalJSX.AppYoutubePlayer & JSXBase.HTMLAttributes<HTMLAppYoutubePlayerElement>;
        }
    }
}
