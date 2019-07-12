import 'dart:io';
import 'dart:ui';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'router/RouterManager.dart';


void main(){
    runApp(_widgetForRoute(window.defaultRouteName));
}

Widget _widgetForRoute(String route) {
    return MaterialApp(
        home: RouterManager.getPageByRouter(route),
    );
}
