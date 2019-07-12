import 'dart:convert';

import 'package:flutter/material.dart';
import 'dart:developer';

class RouterManager {
  /*
    根据传入的协议名  找到对应跳转的路径
    {"url":"test_fade_app","param":"{"name":"test","version":"1.0.0"}"}
   */
  static Widget getPageByRouter(String json) {

    var jsonResponse = jsonDecode(json);
    String url = jsonResponse["url"];
    var param = jsonResponse["params"];
    Widget widget = _getWidgetPage(url, param);
    return widget;
  }

  static Widget _getWidgetPage(String url, Object param) {
    Widget widget = Container(
      color: Colors.red,
      child: Text(
        'route: $url,param:$param',
        textDirection: TextDirection.ltr,
      ),
    );

    switch (url) {
      case RouterPath.TEST_SAMPLE:
        widget = Container(
          color: Colors.red,
          child: GestureDetector(
            child: Center(
                child: Text('route: $url,param:$param',
                    textDirection: TextDirection.ltr)),
          ),
        );
        break;
    }
    return widget;
  }
}

class RouterPath {
  //================ 测试相关界面 =======================
  static const String TEST_SAMPLE = 'test_sample';
  static const String ODERS_PAGE = 'oders_page';
  static const String ODERS_DETAILS = 'order_details'; //订单详情
}
