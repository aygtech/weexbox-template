package com.weexbox.playground

import android.graphics.PixelFormat
import android.os.Bundle
import android.view.ViewGroup
import android.widget.FrameLayout
import com.weexbox.core.controller.WBBaseActivity
import com.weexbox.core.event.Event
import com.weexbox.core.extension.toJsonMap
import com.weexbox.core.extension.toJsonString
import com.weexbox.core.extension.toObject
import com.weexbox.core.router.Router
import com.weexbox.core.util.StatusBarUtil
import io.flutter.facade.Flutter
import io.flutter.plugin.common.MethodCall
import io.flutter.plugin.common.MethodChannel

/**
 *Author:leon.wen
 *Time:2019/6/17   15:52
 *Description:This is WBFlutterActivity
 */
open class WBFlutterActivity : WBBaseActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        if (router.type == Router.Companion.TYPE_MODALMASK) {
            StatusBarUtil.fullScreen(this)
        }
        router.navBarHidden = true
        val flutterView = Flutter.createView(
                this,
                lifecycle,
                router.toJsonString()
        )
        flutterView.setZOrderMediaOverlay(true)
        flutterView.holder.setFormat(PixelFormat.TRANSLUCENT)
        val layout = FrameLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT)
        setContentView(flutterView, layout)

        MethodChannel(flutterView, "weexbox.com/method_channel").setMethodCallHandler { call, result ->
            flutterMethodCall(call, result)
            val method = call.method
            val arguments = (call.arguments as String).toJsonMap()
            when (method) {
                "event_emit" -> Event.emit(arguments["name"] as String, arguments["info"] as Map<String, Any>)
                "event_unregister" -> Event.unregister(this, arguments["name"] as String)
                "event_unregisterAll" -> Event.unregisterAll(this)
                "router_open" -> {
                    val router = (arguments["router"] as Map<String, Any>).toObject(Router::class.java)
                    router.open(this)
                }
                "router_close" ->{
                    val router = (arguments["router"] as Map<String, Any>).toObject(Router::class.java)
                    router.close(this)
                }
            }
        }
    }

    // 子类重载此方法，就可以添加自己的method
    open fun flutterMethodCall(call: MethodCall, result: MethodChannel.Result) {

    }

}
