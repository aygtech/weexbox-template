package iquest.aiyuangong.com.iquest.flutter

import com.alibaba.fastjson.JSONObject
import com.weexbox.core.controller.WBBaseActivity
import com.weexbox.core.event.Event
import com.weexbox.core.router.Router
import com.weexbox.core.util.ToastUtil
import io.flutter.plugin.common.MethodCall
import io.flutter.plugin.common.MethodChannel
import io.flutter.plugin.common.StandardMethodCodec
import io.flutter.view.FlutterView

class FlutterMethod(private val flutterView: FlutterView, private val act: WBBaseActivity) : MethodChannel.MethodCallHandler {

    private val messageChannel: MethodChannel

    init {
        messageChannel = MethodChannel(flutterView, CHANNEL, StandardMethodCodec.INSTANCE)
        messageChannel.setMethodCallHandler(this)
    }

    override fun onMethodCall(methodCall: MethodCall, result: MethodChannel.Result) {
        when (methodCall.method) {
            "open_page" -> if (methodCall.arguments is Map<*, *>) {
                val router = mapToEntity(methodCall.arguments as Map<String, Any>, Router::class.java)
                router!!.open(act)
            }
            "emit_event" -> Event.emit(methodCall.argument<String>("eventName")!!, methodCall.argument<Map<String, Any>>("params"))
            "unregister_event" -> Event.unregister(act, methodCall.argument<String>("eventName")!!)
            "register_event" -> FlutterEvent(flutterView, act, methodCall.argument<String>("eventName")!!)
            "show_toast" -> showToast(methodCall.arguments)
        }
    }

    companion object {
        var CHANNEL = "weexbox_template"
    }

    fun showToast(`object`: Any) {
        if (`object` is Map<*, *>) {
            val options = JSONObject(`object` as Map<String, Any>)
            ToastUtil.showShortToast(act, options.getString("message"))
        }
    }

    /**
     * Map转实体类
     * @param map 需要初始化的数据，key字段必须与实体类的成员名字一样，否则赋值为空
     * @param entity  需要转化成的实体类
     * @return
     */
    fun <T> mapToEntity(map: Map<String, Any>, entity: Class<T>): T? {
        var t: T? = null
        try {
            t = entity.newInstance()
            for (field in entity.declaredFields) {
                if (map.containsKey(field.name)) {
                    val flag = field.isAccessible
                    field.isAccessible = true
                    val `object` = map[field.name]
                    if (`object` != null && field.type.isAssignableFrom(`object`.javaClass)) {
                        field.set(t, `object`)
                    }
                    field.isAccessible = flag
                }
            }
            return t
        } catch (e: InstantiationException) {
            e.printStackTrace()
        } catch (e: IllegalAccessException) {
            e.printStackTrace()
        }

        return t
    }
}