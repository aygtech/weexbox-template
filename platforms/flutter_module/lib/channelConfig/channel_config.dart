import 'package:flutter/services.dart';

class MethodConfig {

  factory MethodConfig() => _getInstance();

  // 静态私有成员，没有初始化
  static MethodConfig _instance;

  // 静态、同步、私有访问点
  static MethodConfig _getInstance() {
    if (_instance == null) {
      _instance = MethodConfig._();
    }
    return _instance;
  }

  //全局相关
  MethodChannel _iQuestNative;

  // 私有构造函数
  MethodConfig._() {
    // 具体初始化代码
    _iQuestNative = MethodChannel('weexbox_template');
  }

  Future<String> invokeMethod(String method, [dynamic arguments]) async {
    String reply = await _iQuestNative.invokeMethod(method, arguments);
    return reply;
  }
}

//打开界面
const String native_open_page = 'open_page';
//事件注册
const String register_event = 'register_event';
//事件反注册
const String unregister_event = 'unregister_event';
//toast
const String native_toast = 'show_toast';