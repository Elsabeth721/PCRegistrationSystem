import 'package:flutter/material.dart';
import 'package:just_audio/just_audio.dart';
import 'dart:async';
import 'package:audio_file/animation.dart';
class AudioPlayerPage extends StatefulWidget {
  final String audioPath, title;

  AudioPlayerPage({required this.audioPath, required this.title});

  @override
  _AudioPlayerPageState createState() => _AudioPlayerPageState();
}

class _AudioPlayerPageState extends State<AudioPlayerPage> {
  late AudioPlayer player;
  PlayerState playerState = PlayerState.stopped;
  Duration? totalDuration;

  @override
  void initState() {
    super.initState();
    player = AudioPlayer();
    player.playerStateStream.listen((state) {
      setState(() {
        playerState = state.playing ? PlayerState.playing : PlayerState.stopped;
      });
    });
    player.durationStream.listen((duration) {
      setState(() {
        totalDuration = duration;
      });
    });
    loadAudio(widget.audioPath);
  }

  @override
  void dispose() {
    super.dispose();
    player.dispose();
  }

  Future<void> loadAudio(String assetPath) async {
    await player.setAsset(assetPath);
    print('Audio loaded');
  }

  Future<void> playPause() async {
    switch (playerState) {
      case PlayerState.stopped:
        await player.play();
        print('Audio started playing');
        break;
      case PlayerState.playing:
        await player.pause();
        print('Audio paused');
        break;
    }
  }

  @override
  Widget build(BuildContext context) {
    Duration? remainingTime =
        totalDuration != null ? totalDuration! - player.position : null;

    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(
          title: Text(widget.title, style: TextStyle(fontFamily: 'AmharicFont', fontSize: 20, color: const Color.fromARGB(255, 80, 47, 34)))
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              AnimationPage(),
              IconButton(
                icon: Icon(playerState == PlayerState.playing
                    ? Icons.pause
                    : Icons.play_arrow),
                onPressed: () async {
                  await playPause();
                },
                iconSize: 50.0,
                color: Colors.blue,
              ),
              Slider(
                min: 0,
                max: totalDuration?.inMilliseconds.toDouble() ?? 0,
                value: player.position.inMilliseconds.toDouble().clamp(0, totalDuration?.inMilliseconds.toDouble()??0),
                onChanged: (value) {
                  player.seek(Duration(milliseconds: value.round()));
                },
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text(
                    totalDuration != null
                        ? '${totalDuration?.inMinutes}:${(totalDuration!.inSeconds % 60).toString().padLeft(2, '0')}'
                        : '0:00',
                  ),
                  Text(
                    remainingTime != null
                        ? '${remainingTime.inMinutes}:${(remainingTime.inSeconds % 60).toString().padLeft(2, '0')}'
                        : '0:00',
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}

enum PlayerState { stopped, playing }

