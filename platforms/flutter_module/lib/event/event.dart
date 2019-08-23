import 'dart:convert';
import 'dart:developer';
import 'package:flutter/services.dart';
import '../channel_manger/channel_manger.dart';

class Event {
  static Map<String, Map<String, Function>> callbacks = Map();

  static final eventChannel = EventChannel('weexbox.com/event_channel');

  // 注册事件
  static register(String name, Function callback) {
    getControllerId().then((id) {
      if (callbacks[id] == null) {
        callbacks[id] = Map();
      }
      callbacks[id][name] = callback;
      eventChannel.receiveBroadcastStream({'name': name}).listen((event) {
        final params = jsonDecode(event);
        final name = params["name"];
        final callback = callbacks[id][name];
        if (callback != null) {
          final info = params["info"];
          callback(jsonEncode(info));
        }
      }, onError: (error) {
        callback(error);
      });
    });
  }

  static Future<String> getControllerId() async {
    String id =
        await ChannelManger.methodChannel.invokeMethod('getControllerId');
    return id;
  }

  // 发送事件
  static emit(String name, Map info) {
    ChannelManger.methodChannel
        .invokeMethod('event_emit', {'name': name, 'info': info});
  }

  // 注销事件
  static unregister(String name) {
    getControllerId().then((id) {
      Map map = callbacks[id];
      if (map != null) {
        map.remove(name);
      }
      ChannelManger.methodChannel
          .invokeMethod('event_unregister', {'name': name});
    });
  }

  // 注销所有事件
  static unregisterAll() {
    getControllerId().then((id) {
      callbacks.remove(id);
      ChannelManger.methodChannel.invokeMethod('event_unregisterAll');
    });
  }
}
