import 'package:audio_file/audio_player.dart';
import 'package:flutter/material.dart';
// import 'package:social_share/social_share.dart';

class MyFile {
  final String title;
  final String image;
  final String audio;

  MyFile(this.title, this.image, this.audio);
}

// ignore: must_be_immutable
class HomePage extends StatefulWidget {
  HomePage({Key? key}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();

  List<MyFile> myFiles = [
    MyFile('ክፍል1', 'asset/image1.jpg', 'asset/4.mp3'),
    MyFile('ክፍል2', 'asset/image1.jpg', 'asset/5.mp3'),
    MyFile('ክፍል3', 'asset/image1.jpg', 'asset/6.mp3'),
    MyFile('ክፍል4', 'asset/image1.jpg', 'asset/7.mp3'),
    MyFile('ክፍል5', 'asset/image1.jpg', 'asset/8.mp3'),
    MyFile('ክፍል6', 'asset/image1.jpg', 'asset/9.mp3'),
    MyFile('ክፍል7', 'asset/image1.jpg', 'asset/10.mp3'),
    MyFile('ክፍል7', 'asset/image1.jpg', 'asset/11.mp3'),
    MyFile('ክፍል8', 'asset/image1.jpg', 'asset/12.mp3'),
    MyFile('ክፍል9', 'asset/image1.jpg', 'asset/13.mp3'),
  ];
}

class _HomePageState extends State<HomePage> {
  bool showText = false;
  bool showText2 = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: const Color.fromARGB(255, 211, 139, 113),
        title: const Text(
          'ቅድስት በርባራ',
          style: TextStyle(
            fontFamily: 'AmharicFont',
            fontSize: 25,
            fontWeight: FontWeight.bold,
            color: Color.fromARGB(255, 52, 34, 27),
          ),
        ),
        actions: [
          IconButton(
            icon: const Icon(Icons.more_vert),
            onPressed: () {
              // Add your action here
              showText2 = !showText2;
            },
            tooltip: 'For more info',
          ),
        ],
      ),
      drawer: Drawer(
        child: ListView(
          padding: EdgeInsets.zero,
          children: <Widget>[
            const DrawerHeader(
              decoration: BoxDecoration(
                color: Color.fromARGB(255, 211, 139, 113),
              ),
              child: CircleAvatar(
                backgroundImage: AssetImage('asset/image3.jpg'),
                radius: 15,
              ),
            ),
            ListTile(
              leading: const Icon(Icons.share,
                  color: Color.fromARGB(255, 211, 139, 113)),
              title: const Text('አጋራ'),
              onTap: () {
                // SocialShare.shareOptions('Check out this cool content!');
              },
            ),
            ListTile(
              leading: const Icon(Icons.more,
                  color: Color.fromARGB(255, 211, 139, 113)),
              title: Text('ስለ እኛ'),
              onTap: () {
                setState(() {
                  showText = !showText;
                });
              },
            ),
            ListTile(
              leading: const Icon(Icons.info,
                  color: Color.fromARGB(255, 211, 139, 113)),
              title: const Text('ለማግኘት'),
              onTap: () {
                setState(() {
                  showText2 = !showText2;
                });
              },
            ),
          ],
        ),
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            if (showText2)
              Container(
                width: double.infinity,
                height: 200,
                margin: EdgeInsets.all(16),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(16),
                  boxShadow: [
                    BoxShadow(
                      color: Colors.grey.withOpacity(0.5),
                      spreadRadius: 5,
                      blurRadius: 7,
                      offset: Offset(0, 3),
                    ),
                  ],
                ),
                child: Center(
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Padding(
                        padding: EdgeInsets.all(16.0),
                        child: Row(
                          children: [
                            Icon(Icons.phone),
                            SizedBox(width: 10),
                            Text(
                              '+251977020665',
                              style: TextStyle(fontSize: 16),
                            ),
                          ],
                        ),
                      ),
                      TextButton(
                        onPressed: () {
                          setState(() {
                            showText2 = false;
                          });
                        },
                        child: Text('እሺ',
                            style: TextStyle(
                                fontFamily: 'AmharicFont',
                                fontSize: 15,
                                color: Colors.red)),
                      ),
                    ],
                  ),
                ),
              ),
            if (showText)
              Container(
                width: double.infinity,
                height: 200,
                margin: EdgeInsets.all(16),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(16),
                  boxShadow: [
                    BoxShadow(
                      color: Colors.grey.withOpacity(0.5),
                      spreadRadius: 5,
                      blurRadius: 7,
                      offset: Offset(0, 3),
                    ),
                  ],
                ),
                child: Center(
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Padding(
                        padding: EdgeInsets.all(16.0),
                        child: Text(
                          'በቦሌ ደብረ ገነት ቅዱስ ገብርኤል እና ቅዱስ ጊዮርጊስ ቤተ-ክርስቲያን በ ፍሬ ሃይማኖት ሰንበት ትምህርት ቤት የተሰራ',
                          style: TextStyle(
                              fontFamily: 'AmharicFont', fontSize: 15),
                        ),
                      ),
                      TextButton(
                        onPressed: () {
                          setState(() {
                            showText = false;
                          });
                        },
                        child: Text('እሺ',
                            style: TextStyle(
                                fontFamily: 'AmharicFont',
                                fontSize: 15,
                                color: Colors.red)),
                      ),
                    ],
                  ),
                ),
              ),
            ListView.builder(
              shrinkWrap: true,
              physics: NeverScrollableScrollPhysics(),
              itemCount: widget.myFiles.length,
              itemBuilder: (BuildContext context, int index) {
                return Card(
                  child: ListTile(
                    leading: CircleAvatar(
                      radius: 20.0,
                      backgroundImage: AssetImage(widget.myFiles[index].image),
                    ),
                    title: Text(
                      widget.myFiles[index].title,
                      style: TextStyle(
                          fontFamily: 'AmharicFont',
                          fontSize: 17,
                          fontWeight: FontWeight.bold),
                    ),
                    onTap: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) => AudioPlayerPage(
                            audioPath: widget.myFiles[index].audio,
                            title: widget.myFiles[index].title,
                          ),
                        ),
                      );
                    },
                  ),
                );
              },
            ),
          ],
        ),
      ),
    );
  }
}
