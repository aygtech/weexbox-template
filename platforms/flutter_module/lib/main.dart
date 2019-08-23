import 'dart:developer';
import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:flutter_module/router/router_manager.dart';

void main() => runApp(_widgetForRoute(window.defaultRouteName));

Widget _widgetForRoute(String routerJson) {
  return MaterialApp(home: RouterManager.getPageByRouter(routerJson));
}
