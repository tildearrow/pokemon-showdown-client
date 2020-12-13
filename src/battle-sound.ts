// BattleBGM using Asuka instead of the browser's own Audio.
// Safari sucks

class BattleBGM {
       /**
        * May be shared with other BGM objects: every battle has its own BattleBGM
        * object, but two battles with the same music will have the same SMSound- erm Audio
        * ob- wait. come on Asuka::Music object.
        */
       sound: null;
       isPlaying = false;
       constructor(url: string) {
               this.url = url;
               Asuka.loadSong(0,0,url);
               Asuka.setMusicVolume(0,0,BattleSound.bgmVolume/100.00);
       }
       play() {
               if (this.isPlaying) return;
               this.isPlaying = true;
               if (BattleSound.muted || !BattleSound.bgmVolume) return;
               Asuka.setMusicVolume(0,0,BattleSound.bgmVolume/100.00);
               Asuka.play(0,0);
       }
       pause() {
               this.isPlaying = false;
               Asuka.stop(0,0);
               BattleBGM.update();
       }
       resume() {
               Asuka.play(0,0);
       }
       stop() {
               this.isPlaying = false;
               Asuka.stop(0,0);
               Asuka.goBegin(0,0);
       }
       destroy() {
               this.isPlaying = false;
               Asuka.stop(0,0);
               Asuka.goBegin(0,0);
               const soundIndex = BattleSound.bgm.indexOf(this);
               if (soundIndex >= 0) BattleSound.bgm.splice(soundIndex, 1);
               BattleBGM.update();
       }
       static update() {
               for (const bgm of BattleSound.bgm) {
                       if (bgm.isPlaying) {
                               if (BattleSound.muted || !BattleSound.bgmVolume) {
                                       Asuka.stop(0,0);
                               } else {
                                       Asuka.setMusicVolume(0,0,BattleSound.bgmVolume/100.00);
                                       Asuka.play(0,0);
                               }
                               break;
                       }
               }
       }
}

const BattleSound = new class {
	soundCache: {[url: string]: HTMLAudioElement | undefined} = {};

	bgm: BattleBGM[] = [];

        endEffectID = -1;

	// options
	effectVolume = 50;
	bgmVolume = 50;
	weatherVolume = 50;
	muted = false;
        menuSounds = true;

	playEffect(url: string) {
                Asuka.playSoundVol(0,url,this.muted ? 0 : this.effectVolume/100);
	}

        playLocalEffect(url: string) {
                Asuka.playSoundVol(0,url,this.muted ? 0 : this.effectVolume/100);
        }

        playBlitzEffect(url: string) {
                Asuka.playSoundEx(0,url,this.muted ? 0 : this.effectVolume/100,4.0);
        }

        playEndEffect(url: string) {
               this.stopEndEffect();
               this.endEffectID=Asuka.playSoundVol(0,url,this.muted ? 0 : this.effectVolume/100);
        }
        stopEndEffect() {
          if (this.endEffectID>-1) {
            Asuka.stopSound(0,this.endEffectID);
            this.endEffectID=-1;
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
	setMenuSounds(menuSounds: boolean) {
		menuSounds = !!menuSounds;
		if (this.menuSounds=== menuSounds) return;
		this.menuSounds = menuSounds;
	}

	loudnessPercentToAmplitudePercent(loudnessPercent: number) {
		// 10 dB is perceived as approximately twice as loud
                return loudnessPercent;
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
