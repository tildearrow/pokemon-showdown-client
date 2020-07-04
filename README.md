# Pokémon Showdown Client with sound fixes

## Introduction

this is a modified version of the official Pokémon Showdown client, with fixes mostly on the sound side.

this fork drops SoundManager2 entirely, and just uses Gapless-5 and the official audio APIs for it.
it also adds more music (of which you have to provide yourself), and specific songs for winning/losing/tie conditions.

oh and sound effects! (again, you have to provide the sound effects yourself).

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

## License

Pokémon Showdown's client is distributed under the terms of the [AGPLv3][6].

The reason is mostly because I don't want low-effort proprietary forks that add bad code that steals everyone's passwords, or something like that.

If you're doing _anything_ else other than forking, _especially_ if you want to some client code files in your own open-source project that you want to release under a more permissive license (like, if you want to make your own multiplayer open-source game client for a different game), please ask at `staff@pokemonshowdown.com`. I hold all the copyright to the AGPLv3 parts and can relicense them to MIT for you.

  [6]: http://www.gnu.org/licenses/agpl-3.0.html

**WARNING:** This is **NOT** the same license as Pokémon Showdown's server.
