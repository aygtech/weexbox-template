import 'dart:ui';
import 'dart:convert';
import 'package:flutter/material.dart';
import 'page/default_route.dart';
import 'router/router.dart';
import 'page/aa.dart';

void main() => runApp(_widgetForRoute(window.defaultRouteName));

Widget _widgetForRoute(String route) {
  if (route == '/') {
    return AA();
  }
  final router = Router.fromJson(jsonDecode(route));
  final url = router.url;
  switch (url) {
    case 'test_fade_app':
      return DefaultRoute();
//    case 'route2':
//      return SomeOtherWidget(...);
    default:
      return DefaultRoute();
  }
}