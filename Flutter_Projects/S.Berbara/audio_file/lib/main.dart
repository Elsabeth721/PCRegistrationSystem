// import 'package:audio_file/home_page.dart';
import 'package:audio_file/onboarding.dart';
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';


Future main() async{
  WidgetsFlutterBinding.ensureInitialized();
  final prefs = await SharedPreferences.getInstance();
  final showHome = prefs.getBool('showHome')?? false;

  runApp(MyApp(showHome: showHome));
} 

class MyApp extends StatefulWidget {
  final bool showHome;
  const MyApp({
    Key? key,
    required this.showHome,
  }): super(key: key);
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      // home:widget.showHome? HomePage():OnBoardingScreen(),
     home: OnBoardingScreen(),
      debugShowCheckedModeBanner: false,
    );
  }
}
