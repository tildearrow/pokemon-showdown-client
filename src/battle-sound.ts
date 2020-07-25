
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
               this.sound = new Gapless5("gapless5-block", {
                          loop: true,
                          tracks: [url+"_intro"+ext, url+"_loop"+ext],
                        });
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
		if (!window.HTMLAudioElement) return;
		if (this.soundCache[url]) return this.soundCache[url];
		try {
			const sound = document.createElement('audio');
			sound.src = 'https://' + Config.routes.client + '/' + url;
			sound.volume = this.effectVolume / 100;
			this.soundCache[url] = sound;
			return sound;
		} catch {}
	}

	getLocalSound(url: string) {
		if (!window.HTMLAudioElement) return;
		if (this.soundCache[url]) return this.soundCache[url];
		try {
			const sound = document.createElement('audio');
                        console.log("SOURCE URL: "+url);
			sound.src = 'https://' + 'tildearrow.zapto.org' + '/' + url + '_loop.ogg';
			sound.volume = this.effectVolume / 100;
			this.soundCache[url] = sound;
			return sound;
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
          console.warn("TODO: local effects");
        }

        playEndEffect(url: string) {
          console.warn("TODO: end effect");
        }

        stopEndEffect() {
          console.warn("TODO: stop end effect");
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
