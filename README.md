# Pokémon Showdown Client with sound fixes

## Introduction

this is a modified version of the official Pokémon Showdown client, with fixes mostly on the sound side.

quoting Zarel:

> The main complicated thing we do with sound is loop music with an intro.
> This is unfortunately not supported by ANY sound library out there
> (I had to manually add support for it myself to soundManager!)

this fork formerly used Gapless-5 for music, which does exactly what is mentioned above (proper looping)........ except that it doesn't.

therefore, as of now I wrote a whole sound engine for the mere purpose of doing the aforementioned thing.

it also adds more music (of which you have to provide yourself), and specific songs for winning/losing/tie conditions.

oh and sound effects! (again, you have to provide the sound effects yourself).

## Browser support

this fork of Pokémon Showdown currently supports, in order of preference:

 - Chrome 57+
 - Firefox 53+
 - Opera 44+
 - Safari 11+

support for WebAssembly is mandatory for the sound engine.

we discourage using Safari. reasons to be written soon.

## Testing

you **have** to build the whole thing.

use `./build full`. yeah. building just the main part won't work.

you need node and git, of course.

after finishing, go to `testclient.html`.

### Test keys

For security reasons, browsers [don't let other websites control PS][5], so
they can't screw with your account, but it does make it harder to log in on
the test client.

The default hack makes you copy/paste the data instead, but if you're
refreshing a lot, just add a `config/testclient-key.js file`, with the
contents:

    const POKEMON_SHOWDOWN_TESTCLIENT_KEY = 'sid';

Replace `sid` with the contents of your actual PS `sid` cookie. You can quickly
access this on Chrome through the URL bar:

![image](https://user-images.githubusercontent.com/551184/53414680-def43480-3994-11e9-89d0-c06098c23fa0.png)
![image](https://user-images.githubusercontent.com/551184/53414760-119e2d00-3995-11e9-80f8-ecd17467310a.png)

(This is the only supported method of logging in on the beta Preact client.)

  [5]: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

### Other servers

You can connect to an arbitrary server by navigating to
`testclient.html?~~host:port`. For example, to connect to a server running
locally on port 8000, you can navigate to `testclient.html?~~localhost:8000`.

**NOTE**: Certain browsers will convert `'?'` to `'%3F'` when reading files off
of the local filesystem. As a workaround, try using a different browser or
serving the files locally first (ie. run `npx http-server` from the
directory this README is in, then navigate in your browser to
`http://localhost:8080/testclient.html?~~localhost:8000`).

**NOTE 2**: this version **mandatorily** uses SSL/TLS for connections, regardless of server. therefore you have to use the SSL port, if any.

### Limitations

Even with a test key, the following things will fail in `testclient.html`:

+ Registering
+ Logging into other accounts (you can still switch to other unregistered
  accounts and back, though)

Everything else can be tested.

furthermore, I am not sure if this is true anymore. maybe the registering thing, but I and this other tester are able to log in using their respective accounts without any problems.

## Warning

you have to provide the songs, sound effects and my version of the Gapless-5 code yourself.
here is a sample of the tree:

```
audio/
  bgm/ <-- songs go here, in tildearrow's loop format (see below).
    silence_intro.wav <-- 0.5 seconds of silence, used when running in Safari
    silence_intro.ogg <-- same in .ogg format
    silence_intro.mp3 <-- same in .mp3 format
    silence_loop.wav
    silence_loop.ogg
    silence_loop.mp3
  draw/ <-- draw songs go here
  hurry/ <-- "you're in a pinch" goes here. same thing as before.
  lose/ <-- losing songs go here
  moves/ <-- attack sound effects go here
  win/ <-- win songs go here
  notification.wav <-- from http://play.pokemonshowdown.com/audio/notification.wav, used when running in Safari
  test_intro.wav <-- the test song, used for the "Sound test" option.
  test_intro.ogg <-- same in .ogg format
  test_intro.mp3 <-- same in .mp3 format
  test_loop.wav
  test_loop.ogg
  test_loop.mp3
Gapless-5/ <-- clone of https://github.com/tildearrow/Gapless-5
```

to provide you with a head start, the silence, test (except wav) and notification files are included.

for the songs, the format goes like this: `NUMBER_intro.EXT` and `NUMBER_loop.EXT`. `NUMBER` goes from 1 to 110 (you can change this but i'll tell you how later).

for the files in `draw`, `lose` and `win`, this is the format: `NUMBER.EXT`. `NUMBER` goes from 1 to:

- 2 in `draw`
- 4 in `lose`
- 11 in `win`

for the files in `moves`, this is the format: `MOVE.EXT`. `MOVE` is a Pokémon move name, lowercase without spaces.

for the files in `hurry`, provide:

- hurry1\_intro.EXT
- hurry1\_loop.EXT
- hurry2\_intro.EXT
- hurry2\_loop.EXT

preferably provide "You're in a Pinch!" in hurry1.

for all cases, `EXT` is `wav`, `ogg` and `mp3` (for Safari).

## tildearrow's loop format

this is my format for looping songs. it is very simple.

a song consists of two files, `SONGNAME_intro` and `SONGNAME_loop` (`SONGNAME` being the file name).

the intro file contains the beginning of the song, and the loop file contains the looping part. the extension/format can be any, but the ones that preserve exact length in samples are preferred.

## License

Pokémon Showdown's client is distributed under the terms of the [AGPLv3][6].

The reason is mostly because I don't want low-effort proprietary forks that add bad code that steals everyone's passwords, or something like that.

If you're doing _anything_ else other than forking, _especially_ if you want to some client code files in your own open-source project that you want to release under a more permissive license (like, if you want to make your own multiplayer open-source game client for a different game), please ask at `staff@pokemonshowdown.com`. I hold all the copyright to the AGPLv3 parts and can relicense them to MIT for you.

  [6]: http://www.gnu.org/licenses/agpl-3.0.html

**WARNING:** This is **NOT** the same license as Pokémon Showdown's server.

## Footnote

the test song is my saw wave rendition of [bth.cracktro1](http://modarchive.org/index.php?request=view_by_moduleid&query=116014) by [blackthorne/TRSI](https://www.exotica.org.uk/wiki/Tristar_Red_Sector_Inc#Crack_Intro_03_.281993.2C_ECS_Intro.29).
