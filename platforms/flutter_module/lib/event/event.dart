import 'dart:convert';
import 'package:flutter/services.dart';
import '../channel_manger/channel_manger.dart';

class Event {
  static Map<String, Function> callbacks = Map();
  static final eventChannel = EventChannel('weexbox.com/event_channel');

  // 注册事件
  static register(String name, Function callback) {
    callbacks[name] = callback;
    eventChannel.receiveBroadcastStream({'name': name}).listen((event) {
      final params = jsonDecode(event);
      final name = params["name"];
      final callback = callbacks[name];
      if (callback != null) {
        final info = params["info"];
        callback(jsonEncode(info));
      }
    }, onError: (error) {
      callback(error);
    });
  }

  // 发送事件
  static emit(String name, Map info) {
    ChannelManger.methodChannel
        .invokeMethod('event_emit', {'name': name, 'info': info});
  }

  // 注销事件
  static unregister(String name) {
    ChannelManger.methodChannel
        .invokeMethod('event_unregister', {'name': name});
  }

  // 注销所有事件
  static unregisterAll() {
    ChannelManger.methodChannel.invokeMethod('event_unregisterAll');
  }
}
