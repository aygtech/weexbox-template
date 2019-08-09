import '../channel_manger/channel_manger.dart';

class Router {
  static const typePush = 'push';
  static const typePresent = 'present';
  static const typeModalMask = 'modalMask';
  static const nameWeex = 'weex';
  static const nameWeb = 'web';
  static const nameFlutter = 'flutter';

  // 页面名称
  var name;

  // 下一个weex/web的路径
  var url;

  // 页面出现方式：push, present
  var type = "push";

  // 是否隐藏导航栏
  var navBarHidden = false;

  // 导航栏标题,只对weex与原生有效，并且需要显示导航栏navBarHidden=false
  var title;

  // 禁用返回手势
  var disableGestureBack = false;

  // 需要传到下一个页面的数据
  var params = Map<String, dynamic>();

  // 打开页面的同时关闭页面
  var closeFrom;

  // 关闭页面的方向，默认和堆栈方向一致
  var closeFromBottomToTop = true;

  // 关闭页面的个数
  var closeCount;

  Router();

  Router.fromJson(Map<String, dynamic> json)
      : name = json['name'],
        url = json['url'],
        navBarHidden = json['navBarHidden'],
        title = json['title'],
        disableGestureBack = json['disableGestureBack'],
        params = json['params'],
        closeFrom = json['closeFrom'],
        closeFromBottomToTop = json['closeFromBottomToTop'],
        closeCount = json['closeCount'],
        type = json['type'];

  Map<String, dynamic> toJson() => {
    'name': name,
    'url': url,
    'navBarHidden': navBarHidden,
    'title': title,
    'disableGestureBack': disableGestureBack,
    'params': params,
    'closeFrom': closeFrom,
    'closeFromBottomToTop': closeFromBottomToTop,
    'closeCount': closeCount,
    'type': type
  };

  open() {
    ChannelManger.methodChannel.invokeMethod('router_open', {'router': this.toJson()});
  }

  close(int levels) {
    ChannelManger.methodChannel.invokeMethod('router_close', {'router': this.toJson(), 'levels': levels});
  }
}
