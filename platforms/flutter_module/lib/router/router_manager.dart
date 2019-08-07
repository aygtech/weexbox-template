import 'dart:convert';
import 'dart:developer';
import 'package:flutter/material.dart';
import 'package:flutter_module/page/default_route.dart';
import 'package:flutter_module/router/Router.dart';
import '../channelConfig/channel_config.dart';

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

  static void openPage(bool navBarHidden, String name, String url, Map params, {String type}) {
    var router = Router();
    router.name = name;
    router.url = url;
    router.params = params;
    router.navBarHidden = navBarHidden;
    if(type != null && type.length > 0){
      router.type = type;
    }
    MethodConfig().invokeMethod(native_open_page, router.toJson());
  }

  static Widget _getWidgetPage(String url, Map param) {
    Widget widget;
    switch (url) {
      case 'test_fade_app':
        widget = DefaultRoute();
        break;
    }
    return widget;
  }
}