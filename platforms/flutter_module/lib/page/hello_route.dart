import 'package:flutter/material.dart';
import '../router/router.dart';
import '../event/event.dart';
import '../event/hud.dart';

class HelloRoute extends StatelessWidget {
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
                child: Text('打开新页面', style: textStyle),
              ),
            ),
            onTap: () {
              var router = Router();
              router.name = Router.nameFlutter;
              router.url = 'test_fade_app';
              router.navBarHidden = true;
              router.open();
            },
          ),
          GestureDetector(
            child: Container(
              width: double.infinity,
              margin: EdgeInsets.all(20),
              child: Center(
                child: Text('关闭当前页面', style: textStyle),
              ),
            ),
            onTap: () {
              var router = Router();
              router.close();
            },
          ),
          GestureDetector(
            child: Container(
              width: double.infinity,
              margin: EdgeInsets.all(20),
              child: Center(
                child: Text('注册事件', style: textStyle),
              ),
            ),
            onTap: () {
              HUD.showToast('注册事件');
              Event.register('name', (event) {
                HUD.showToast('接收到: ' + event);
              });
            },
          ),
          GestureDetector(
            child: Container(
              width: double.infinity,
              margin: EdgeInsets.all(20),
              child: Center(
                child: Text('发送事件', style: textStyle),
              ),
            ),
            onTap: () {
              Event.emit('name', {'k': 'vbbbb'});
            },
          ),
        ],
      ),
    );
  }
}
