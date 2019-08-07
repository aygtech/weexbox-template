import 'package:flutter/material.dart';
import 'package:flutter_module/channelConfig/Event.dart';
import 'package:flutter_module/util/toast.dart';

class DefaultRoute extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Welcome to Flutter'),
      ),
      body: Center(
        child: Column(
          children: <Widget>[
            Container(width: 20, height: 20),
            GestureDetector(
              onTap: () {
                Map<String, dynamic> map = {'name': "long"};
                Event.getInstance().emitEvent("aaaaaa", map);
              },
              child: Container(
                padding: EdgeInsets.all(10),
                color: Color(0xffff00ff),
                child: Text(
                  "发送原生端Event",

                ),
              ),
            ),
            Container(width: 20, height: 20),
            GestureDetector(
              onTap: () {
                Event.getInstance().receiveEvent("bbbbb", (val) {
                  showToast("Flutter的event回调:" + val["name"]);
                });
              },
              child: Container(
                padding: EdgeInsets.all(10),
                color: Color(0xffff00ff),
                child: Text(
                  "注册Flutter的Event",

                ),
              ),
            ),
            Container(width: 20, height: 20),
            GestureDetector(
              onTap: () {
                Map<String, dynamic> map = {'name': "long"};
                Event.getInstance().emitEvent("bbbbb", map);
              },
              child: Container(
                padding: EdgeInsets.all(10),
                color: Color(0xffff00ff),
                child: Text(
                  "发送Flutter端Event",

                ),
              ),
            ),
            Container(width: 20, height: 20),
            GestureDetector(
              onTap: () {
                Event.getInstance().unReceiveEvent("bbbbb");
              },
              child: Container(
                padding: EdgeInsets.all(10),
                color: Color(0xffff00ff),
                child: Text("反注册Flutter的Event"),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
