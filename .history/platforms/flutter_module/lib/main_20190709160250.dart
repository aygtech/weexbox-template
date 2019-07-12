import 'dart:convert';
import 'dart:ui';
import 'package:flutter/material.dart';

void main() => runApp(_widgetForRoute(window.defaultRouteName));

Widget _widgetForRoute(String route) {
  var data = json.decode(route.toString());
  print(data);
  switch (route) {
    case 'route1':
      return Container(
        color: Colors.white,
        child: Center(
          child: Text('route: $route', textDirection: TextDirection.ltr),
        ),
      );
    case 'route2':
      return Center(
        child: Text('route: $route', textDirection: TextDirection.ltr),
      );
    default:
      return Container(
        child: Center(
          child:
              Text(' route: $route', textDirection: TextDirection.ltr),
        ),
      );
  }
}

class MyApp extends StatefulWidget {
  MyApp({Key key,this.title}) : super(key: key);

  final String title;
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  Widget build(BuildContext context) {
    return Container(
       child: Center(
         child: Text('title : $this.title'),
       ),
    );
  }
}
