import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:flutter_module/page/hello_route.dart';
import 'package:flutter_module/page/test.dart';
import 'package:flutter_module/router/Router.dart';

class RouterManager {
  /*
    根据传入的协议名  找到对应跳转的flutter路径
    {"name":"flutter","url":"test_fade_app","params":"{"name":"test","version":"1.0.0"}"}
   */
  static Widget getPageByRouter(String json) {
    final router = Router.fromJson(jsonDecode(json));
    Widget widget = _getWidgetPage(router.url, router.params);
    return widget;
  }

  static Widget _getWidgetPage(String url, Map param) {
    Widget widget = HelloRoute();
    switch (url) {
      case RouterPath.TEST_FADE_APP_PAGE:
        widget = TestRoute(); //在这里根据定义好的界面路径，返回你写的相应界面
        break;
    }
    return widget;
  }
}

class RouterPath {
  //================ flutter相关界面路径 =======================
  static const TEST_FADE_APP_PAGE = "test_fade_app";
}
