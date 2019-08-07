import 'package:flutter_module/channelConfig/channel_config.dart';

void showToast(String msg){
    Map<String,dynamic> map = {'message':msg};
    MethodConfig().invokeMethod(native_toast,map);
}
