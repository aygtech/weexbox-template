import 'dart:convert';
import 'dart:ui';
import 'package:flutter/material.dart';

void main() => runApp(_widgetForRoute(window.defaultRouteName));

Widget _widgetForRoute(String route) {
  MyApp(title: route.toString());
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

class MyApp extends StatelessWidget {
  final String title;
  const MyApp({Key key,this.title}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.red,
      child: Center(
        child: Text(title),
      ),
    );
  }
}
