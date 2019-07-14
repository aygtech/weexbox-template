import 'dart:ui';
import 'dart:convert';
import 'package:flutter/material.dart';
import 'page/default_route.dart';
import 'router/router.dart';

void main() => runApp(_widgetForRoute(window.defaultRouteName));

Widget _widgetForRoute(String routerJson) {
  final router = Router.fromJson(jsonDecode(routerJson));
  final url = router.url;
  var widget = DefaultRoute();
  switch (url) {
    case 'test_fade_app':
      widget = DefaultRoute();
      break;
  }
  return MaterialApp(
    home: widget,
  );
}