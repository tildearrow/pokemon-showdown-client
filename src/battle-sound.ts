g5inst=new Gapless5("gapless5-block", {
                          loop: true,
                          tracks: ["/psc/audio/bgm/silence_intro.mp3", "/psc/audio/bgm/silence_loop.mp3"],
});

// TODO: please fix looping. perhaps use howler.js.
class BattleBGM {
       /**
        * May be shared with other BGM objects: every battle has its own BattleBGM
        * object, but two battles with the same music will have the same SMSound- erm Audio
        * object.
        */
       sound: Gapless5;
       isPlaying = false;
       constructor(url: string) {
               this.url = url;
               let ext = ((navigator.userAgent.indexOf("Chrome") == -1) && (navigator.userAgent.indexOf("Safari") != -1)) ? '.mp3' : '.ogg';
               //this.sound = sound;
               this.sound = g5inst;
               this.sound.stop();
               console.log("loading thingy");
               this.sound.insertTrack(0,url+"_intro"+ext);
               this.sound.insertTrack(1,url+"_loop"+ext);
               this.sound.gotoTrack(0,false);
               while (this.sound.totalTracks()>2) {
                 this.sound.removeTrack(2);
               }
               this.sound.setGain(BattleSound.bgmVolume*655.35);
       }
       play() {
               if (this.isPlaying) return;
               this.isPlaying = true;
               if (BattleSound.muted || !BattleSound.bgmVolume) return;
               this.sound.setGain(BattleSound.bgmVolume*655.35);
               this.sound.play();
       }
       pause() {
               this.isPlaying = false;
               this.sound.pause();
               BattleBGM.update();
       }
       resume() {
               this.play();
       }
       stop() {
               this.isPlaying = false;
               this.sound.stop();
               this.sound.gotoTrack(0,false);
       }
       destroy() {
               this.isPlaying = false;
               this.sound.stop();
               this.sound.gotoTrack(0,false);
               const soundIndex = BattleSound.bgm.indexOf(this);
               if (soundIndex >= 0) BattleSound.bgm.splice(soundIndex, 1);
               BattleBGM.update();
       }
       static update() {
               for (const bgm of BattleSound.bgm) {
                       if (bgm.isPlaying) {
                               if (BattleSound.muted || !BattleSound.bgmVolume) {
                                       bgm.sound.pause();
                               } else {
                                       bgm.sound.setGain(BattleSound.bgmVolume*655.35);
                                       bgm.sound.play();
                               }
                               break;
                       }
               }
       }
}

const BattleSound = new class {
	soundCache: {[url: string]: HTMLAudioElement | undefined} = {};

	bgm: BattleBGM[] = [];

	// options
	effectVolume = 50;
	bgmVolume = 50;
	muted = false;

	getSound(url: string) {
                if ((navigator.userAgent.indexOf("Chrome") == -1) && (navigator.userAgent.indexOf("Safari") != -1)) {
                  if (url.match("notification")) {
                    sCN='duo';
                    return null;
                  } else {
                    sCN='mono';
                  }
		  if (this.soundCache[sCN]) {
                    this.soundCache[sCN].src = url;
                    this.soundCache[sCN].load();
                    this.soundCache[sCN].volume=this.effectVolume/100;
                    return this.soundCache[sCN];
                  }
                } else {
                  sCN=url;
		  if (this.soundCache[sCN]) {
                     this.soundCache[sCN].currentTime=0;
                     return this.soundCache[sCN];
                  }
                }
		try {
			this.soundCache[sCN] = new Audio(url);
			this.soundCache[sCN].volume = this.effectVolume / 100;
			return this.soundCache[sCN];
		} catch {}
	}

	getLocalSound(url: string) {
                if ((navigator.userAgent.indexOf("Chrome") == -1) && (navigator.userAgent.indexOf("Safari") != -1)) {
                  sCN='mono';
		  if (this.soundCache[sCN]) {
                    this.soundCache[sCN].src = url;
                    this.soundCache[sCN].load();
                    this.soundCache[sCN].volume=this.effectVolume/100;
                    return this.soundCache[sCN];
                  }
                } else {
                  sCN=url;
		  if (this.soundCache[sCN]) {
                     this.soundCache[sCN].currentTime=0;
                     return this.soundCache[sCN];
                  }
                }
		try {
			this.soundCache[sCN] = new Audio(url);
			this.soundCache[sCN].volume = this.effectVolume / 100;
			return this.soundCache[sCN];
		} catch {}
	}

	playEffect(url: string) {
		this.playSound(url, this.muted ? 0 : this.effectVolume);
	}

	playSound(url: string, volume: number) {
		if (!volume) return;
		const effect = this.getSound(url);
		if (effect) {
			effect.volume = volume / 100;
			effect.play();
		}
	}

        playLocalEffect(url: string) {
          this.playLocalSound(url, this.muted ? 0 : this.effectVolume);
        }

	playLocalSound(url: string, volume: number) {
		if (!volume) return;
		const effect = this.getLocalSound(url);
		if (effect) {
			effect.volume = volume / 100;
			effect.play();
		}
	}

        loadEndEffect(url: string) {
                if (this.soundCache['endbgm']) {
                    this.soundCache['endbgm'].src = url;
                    this.soundCache['endbgm'].load();
                    this.soundCache['endbgm'].volume=this.effectVolume/100;
                } else {
                 try {
                    this.soundCache['endbgm'] = new Audio(url);
                    this.soundCache['endbgm'].volume=this.effectVolume/100;
                 } catch {}
                 if (!this.soundCache['endbgm']) {
                   this.soundCache['endbgm'] = this.soundPlaceholder;
                 }
                }
               return this.soundCache['endbgm'];
        }
        playEndEffect(url: string) {
               if (!this.muted) {
                  var s=this.loadEndEffect(url);
                  s.volume=this.effectVolume/100;
                  if (s.paused) s.play();
                }
        }
        stopEndEffect() {
          if (this.soundCache['endbgm']) {
            this.soundCache['endbgm'].pause();
            this.soundCache['endbgm'].currentTime=0;
          }
        }

	/** loopstart and loopend are in milliseconds */
	loadBgm(url: string, loopstart: number, loopend: number, replaceBGM?: BattleBGM | null) {
		if (replaceBGM) this.deleteBgm(replaceBGM);
                console.log("loading BGM, url: "+url);

		const bgm = new BattleBGM(url);
		this.bgm.push(bgm);
		return bgm;
	}
	deleteBgm(bgm: BattleBGM) {
		const soundIndex = BattleSound.bgm.indexOf(bgm);
		if (soundIndex >= 0) BattleSound.bgm.splice(soundIndex, 1);
	}

	currentBgm() {
		if (!this.bgmVolume || this.muted) return false;
		for (const bgm of this.bgm) {
			if (bgm.isPlaying) return bgm;
		}
		return null;
	}

	// setting
	setMute(muted: boolean) {
		muted = !!muted;
		if (this.muted === muted) return;
		this.muted = muted;
		BattleBGM.update();
	}

	loudnessPercentToAmplitudePercent(loudnessPercent: number) {
		// 10 dB is perceived as approximately twice as loud
		let decibels = 10 * Math.log(loudnessPercent / 100) / Math.log(2);
		return Math.pow(10, decibels / 20) * 100;
	}
	setBgmVolume(bgmVolume: number) {
		this.bgmVolume = this.loudnessPercentToAmplitudePercent(bgmVolume);
		BattleBGM.update();
	}
	setEffectVolume(effectVolume: number) {
		this.effectVolume = this.loudnessPercentToAmplitudePercent(effectVolume);
	}
};

if (typeof PS === 'object') {
	PS.prefs.subscribeAndRun(key => {
		if (!key || key === 'musicvolume' || key === 'effectvolume' || key === 'mute') {
			BattleSound.effectVolume = PS.prefs.effectvolume;
			BattleSound.bgmVolume = PS.prefs.musicvolume;
			BattleSound.muted = PS.prefs.mute;
			BattleBGM.update();
		}
	});
}
