import brightcovePlayerLoader from '@brightcove/player-loader';
import {IStuff} from "../../../../../../../src/app/shared/models/course-viewer/stuff.model";


export class VideoInit {
  public static initBrightCove(refNode): Promise<any> {
    return brightcovePlayerLoader({
      refNode: refNode, refNodeInsert: 'replace', accountId: '5034103592001', playerId: '5LcYdkBLi', embedId: 'default',
      embedOptions: {
        tagName: brightcovePlayerLoader.EMBED_TAG_NAME_VIDEOJS,
        responsive: {options: {aspectRatio: '16:9', maxWidth: '100%'}}
      },
      options: {
        autoplay: false, controls: true, preload: 'auto', language: 'ar', playbackRates: [0.5, 1, 1.5, 2],
        liveui: false, plugins: {contextmenu: false}, controlBar: {muteToggle: false}
      }
    });
  }

  public static disableSeeking(videoJS, video: IStuff): void {
    let disableForwardScrubbing = (player) => {
      return {
        setSource: (srcObj, next) => {
          next(null, srcObj);
        },
        setCurrentTime: (ct) => {
          let percentAllowForward = 100,
            percentPlayed = player.currentTime() / player.duration() * 100;
          //@ts-ignore
          if (ct < player.currentTime() || percentPlayed > percentAllowForward || video.localProgress > ct) {
            return ct;
          }
          return player.currentTime();
        }
      };
    };
    videoJS.use('*', disableForwardScrubbing);
  }

  public static initPlayer(player, videoPosition): void {
    player.currentTime(videoPosition);
    player.off('contextmenu');
    player.on('pause', () => {
      player.isPaused = true;
      player.bigPlayButton.addClass('vjs-has-paused');
    });
    player.on('play', () => {
      player.isPaused = false;
      player.bigPlayButton.removeClass('vjs-has-paused');
    });
  }

  public static initBookmarks(player, videoJS, bookmarks) {
    let bookmarksButton = player.controlBar.addChild('button', {
      text: 'Bookmark',
    }, 10);
    bookmarksButton.addClass('bookmarks-button');

    player.bookmarks(videoJS, player, {
      bookmarks: bookmarks
    });

    return bookmarksButton;
  }
}


