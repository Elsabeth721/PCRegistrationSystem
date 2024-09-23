import 'package:flutter/material.dart';
import 'dart:async';
class AnimationPage extends StatefulWidget {
  @override
  _AnimationPageState createState() => _AnimationPageState();
}

class _AnimationPageState extends State<AnimationPage> {
  int _currentIndex = 0;
  List<String> _imagePaths = [
    'asset/image1.jpg',
    'asset/image2.jpg',
    'asset/image3.jpg',
    'asset/image4.jpg',
  ];
  late Timer _timer;

  @override
  void initState() {
    super.initState();
    _startTimer();
  }

  @override
  void dispose() {
    _timer.cancel();
    super.dispose();
  }

  void _startTimer() {
    _timer = Timer.periodic(Duration(seconds: 5), (Timer timer) {
      setState(() {
        _currentIndex = (_currentIndex + 1) % _imagePaths.length;
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      width:
          MediaQuery.of(context).size.width / 2, // Half of the available width
      child: Center(
        child: SizedBox(
          width: 500, // Set the width of the AnimatedContainer
          height: 350, // Set the height of the AnimatedContainer
          child: AnimatedContainer(
            duration: Duration(seconds: 1),
            decoration: BoxDecoration(
              image: DecorationImage(
                image: AssetImage(_imagePaths[_currentIndex]),
                // fit: BoxFit.cover,
              ),
            ),
          ),
        ),
      ),
    );
  }
}
