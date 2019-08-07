import 'package:flutter/services.dart';
import 'package:flutter_module/channelConfig/channel_config.dart';

class Event {
  static Event mInstance = new Event();

  static Event getInstance() {
    return mInstance;
  }

  //注册
  receiveEvent(String eventName, Function function) {
    MethodConfig().invokeMethod(register_event, {"eventName": eventName});
    EventChannel('iquest.aiyuangong.com/event/' + eventName).receiveBroadcastStream(eventName).listen((Object success) {
      function(success);
    }, onError: (Object error) {
      function(error);
    });
  }

  //反注册
  unReceiveEvent(String eventName) {
    MethodConfig().invokeMethod(unregister_event, {"eventName": eventName});
  }

  //发送
  emitEvent(String eventName, Map params) {
    MethodConfig()
        .invokeMethod(emit_event, {"eventName": eventName, "params": params});
  }
}

//订单状态改变
const String order_status_change_event = 'order_status_change_event';
//刷新小红点
const String order_status_redCount_event = 'order_status_red_event';
//发送事件
const String emit_event = 'emit_event';