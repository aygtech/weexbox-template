import 'dart:convert';
import 'dart:developer';
import 'package:flutter/material.dart';
import 'package:flutter_module/page/hello_route.dart';
import 'package:flutter_module/router/Router.dart';

class RouterManager {
  /*
    根据传入的协议名  找到对应跳转的路径
    {"url":"test_fade_app","params":"{"name":"test","version":"1.0.0"}"}
   */
  static Widget getPageByRouter(String json) {
    final router = Router.fromJson(jsonDecode(json));
    Widget widget = _getWidgetPage(router.url, router.params);
    return widget;
  }

  static Widget _getWidgetPage(String url, Map param) {
    Widget widget = HelloRoute();
    switch (url) {
      case 'test_fade_app':
        break;
    }
    return widget;
  }
}