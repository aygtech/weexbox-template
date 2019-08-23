

import 'package:flutter/material.dart';
import '../router/router.dart';
import '../event/event.dart';
import '../event/hud.dart';

class TestRoute extends StatelessWidget {
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
                child: Text('打开新页面2', style: textStyle),
              ),
            ),
            onTap: () {
              var router = Router();
              router.name = Router.nameFlutter;
              router.url = 'test_fade_app';
              router.navBarHidden = true;
              router.params = {
                "sss":"sss"
              };
              router.open();
            },
          ),
          GestureDetector(
            child: Container(
              width: double.infinity,
              margin: EdgeInsets.all(20),
              child: Center(
                child: Text('关闭当前页面2', style: textStyle),
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
                child: Text('注册事件2', style: textStyle),
              ),
            ),
            onTap: () {
              HUD.showToast('注册事件2');
              Event.register('name2', (event) {
                HUD.showToast('接收到2: ' + event);
                print('test 接收到2');
              });
            },
          ),
          GestureDetector(
            child: Container(
              width: double.infinity,
              margin: EdgeInsets.all(20),
              child: Center(
                child: Text('注册事件3', style: textStyle),
              ),
            ),
            onTap: () {
              HUD.showToast('注册事件3');
              Event.register('name3', (event) {
                HUD.showToast('接收到3: ' + event);
                print("事件3");
              });
            },
          ),
          GestureDetector(
            child: Container(
              width: double.infinity,
              margin: EdgeInsets.all(20),
              child: Center(
                child: Text('发送事件2', style: textStyle),
              ),
            ),
            onTap: () {
              Event.emit('name2', {'k2': 'vbbbb2'});

            },
          ),
          GestureDetector(
            child: Container(
              width: double.infinity,
              margin: EdgeInsets.all(20),
              child: Center(
                child: Text('发送事件3', style: textStyle),
              ),
            ),
            onTap: () {
              Event.emit('name3', {'k3': 'vbbbb3'});

            },
          ),
          GestureDetector(
            child: Container(
              width: double.infinity,
              margin: EdgeInsets.all(20),
              child: Center(
                child: Text('注销事件3', style: textStyle),
              ),
            ),
            onTap: () {
              Event.unregister("name3");
            },
          ),
          GestureDetector(
            child: Container(
              width: double.infinity,
              margin: EdgeInsets.all(20),
              child: Center(
                child: Text('注销当前界面全部事件', style: textStyle),
              ),
            ),
            onTap: () {
              Event.unregisterAll();
            },
          ),
        ],
      ),
    );
  }
}
