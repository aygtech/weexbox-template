import '../channel_manger/channel_manger.dart';

class HUD {

  static showToast(String message) {
    ChannelManger.methodChannel.invokeMethod('hud_showToast', {'message': message});
  }

}
