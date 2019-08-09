import 'package:flutter/material.dart';
import '../router/router.dart';

class DefaultRoute extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    const textStyle = TextStyle(fontSize: 16, color: Colors.black);
    return Scaffold(
      appBar: AppBar(
        title: Text('Welcome to Flutter'),
      ),
      body: ListView(
        children: <Widget>[
          GestureDetector(
            child: Container(
              width: double.infinity,
              margin: EdgeInsets.all(20),
              child: Center(
                child: Text('打开新页面1', style: textStyle),
              ),
            ),
            onTap: () {
              var router = Router();
              router.name = Router.nameFlutter;
              router.url = 'test_fade_app1';
              router.navBarHidden = true;
              router.open();
            },
          )
        ],
      ),
    );
  }
}
