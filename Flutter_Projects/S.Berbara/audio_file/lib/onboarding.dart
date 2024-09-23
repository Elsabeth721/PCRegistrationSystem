import 'package:audio_file/home_page.dart';
import 'package:flutter/material.dart';
import 'package:smooth_page_indicator/smooth_page_indicator.dart';
import 'package:shared_preferences/shared_preferences.dart';

class OnBoardingScreen extends StatefulWidget {
  const OnBoardingScreen({super.key});

  @override
  State<OnBoardingScreen> createState() => _OnBoardingScreenState();
}

class _OnBoardingScreenState extends State<OnBoardingScreen> {
  final controller = PageController();
  bool isLastPage = false;
  @override
  void dispose() {
    controller.dispose();

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        padding: const EdgeInsets.only(bottom: 80),
        child: PageView(
          controller: controller,
          onPageChanged: (index) {
            setState(() => isLastPage = index == 2);
          },
          children: [
            buildPage(
                color: Colors.brown,
                urlImage: 'asset/image1.jpg',
                title: 'ቅድስት በርባራ',
                subtitle: 'በ15 ዓመቷ ሰማዕት የሆነች የስሟ ትርጓሜ ልዩ የተመረጠች ማለት ነው!'),
            buildPage(
                color: Colors.lightBlue,
                urlImage: 'asset/image2.jpg',
                title: 'ቅድስት በርባራ ',
                subtitle: 'ከጣኦት አምላኪ ነገስታት ቤተሰብ የተገች!'),
            buildPage(
                color: Colors.blue,
                urlImage: 'asset/image3.jpg',
                title: 'ቅድስት በርባራ',
                subtitle: 'በአባቷ እጅ ሰማዕት የሆነች!'),
          ],
        ),
      ),
      bottomSheet: isLastPage
          ? TextButton(
              onPressed: () async {
                final prefs = await SharedPreferences.getInstance();
                prefs.setBool('showHome', true);
                Navigator.of(context).pushReplacement(
                    MaterialPageRoute(builder: (context) => HomePage()));
              },
              child: const Text(
                'ጀምር',
                style: TextStyle(fontSize: 24, fontFamily: 'AmharicFont'),
              ))
          : Container(
              padding: const EdgeInsets.symmetric(horizontal: 30),
              height: 80,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  TextButton(
                      onPressed: () => controller.jumpToPage(2),
                      child: const Text(
                        'ዝለል',
                        style: TextStyle(fontFamily: 'AmharicFont'),
                      )),
                  Center(
                    child: SmoothPageIndicator(
                      controller: controller,
                      count: 3,
                      effect: WormEffect(
                          spacing: 16,
                          dotColor: Colors.black26,
                          activeDotColor: Colors.teal.shade700),
                      onDotClicked: (index) => controller.animateToPage(index,
                          duration: const Duration(milliseconds: 500),
                          curve: Curves.bounceIn),
                    ),
                  ),
                  TextButton(
                      onPressed: () => controller.nextPage(
                          duration: const Duration(milliseconds: 500),
                          curve: Curves.easeInOut),
                      child: const Text(
                        'ቀጣይ',
                        style: TextStyle(fontFamily: 'AmharicFont'),
                      )),
                ],
              ),
            ),
    );
  }

  Widget buildPage(
          {required MaterialColor color,
          required String urlImage,
          required String title,
          required String subtitle}) =>
      Container(
        // color: color,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Image.asset(
              urlImage,
              fit: BoxFit.cover,
              width: double.infinity,
              height: 630.0,
            ),
            const SizedBox(
              height: 5,
            ),
            Text(
              title,
              style: TextStyle(
                  fontFamily: 'AmharicFont',
                  color: Colors.teal.shade700,
                  fontSize: 32,
                  fontWeight: FontWeight.bold),
            ),
            // const SizedBox(
            //   height: 5,
            // ),
            Container(
              // padding: const EdgeInsets.symmetric(horizontal: 20),
              child: Text(
                subtitle,
                style: const TextStyle(
                    fontFamily: 'AmharicFont',
                    color: Color.fromARGB(255, 0, 0, 0)),
              ),
            )
          ],
        ),
      );
}
