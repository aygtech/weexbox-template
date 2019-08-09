import 'package:flutter/services.dart';
import '../channel_manger/channel_manger.dart';

class Event {

  // 注册事件
  static register(String name, Function function) {
    EventChannel('weexbox.com/event_channel').receiveBroadcastStream({'name': name}).listen((event) {
      function(event);
    }, onError: (error) {
      function(error);
    });
  }

  // 发送事件
  static emit(String name, Map info) {
    ChannelManger.methodChannel.invokeMethod('event_emit', {'name': name, 'info': info});
  }

  // 注销事件
  static unregister(String name) {
    ChannelManger.methodChannel.invokeMethod('event_unregister', {'name': name});
  }

  // 注销所有事件
  static unregisterAll() {
    ChannelManger.methodChannel.invokeMethod('event_unregisterAll');
  }

}
