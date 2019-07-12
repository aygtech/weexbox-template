import 'dart:ui';
import 'package:flutter/material.dart';

void main() => runApp(_widgetForRoute(window.defaultRouteName));

Widget _widgetForRoute(String route) {
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
      return Center(
        child: Text('Unknown route: $route', textDirection: TextDirection.ltr),
      );
  }
}

class MyApp extends StatelessWidget {
  const MyApp({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      child: child,
    );
  }
}
