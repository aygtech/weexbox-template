package com.weexbox.playground

import android.graphics.PixelFormat
import android.os.Bundle
import android.view.ViewGroup
import android.widget.FrameLayout
import com.weexbox.core.controller.WBBaseActivity
import com.weexbox.core.event.Event
import com.weexbox.core.event.EventCallback
import com.weexbox.core.extension.toJsonString
import com.weexbox.core.router.Router
import com.weexbox.core.util.StatusBarUtil
import com.weexbox.core.util.ToastUtil
import io.flutter.facade.Flutter
import iquest.aiyuangong.com.iquest.flutter.FlutterMethod

/**
 *Author:leon.wen
 *Time:2019/6/17   15:52
 *Description:This is WBFlutterActivity
 */
open class WBFlutterActivity : WBBaseActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        if (router.type.equals(Router.Companion.TYPE_MODALMASK)) {
            StatusBarUtil.fullScreen(this)
        }
        router.navBarHidden = true
        val flutterView = Flutter.createView(
                this,
                lifecycle,
                router.toJsonString()
        )
        flutterView?.setZOrderMediaOverlay(true);
        flutterView?.getHolder()?.setFormat(PixelFormat.TRANSLUCENT);
        var flutterMethod = FlutterMethod(flutterView, this);
        val layout = FrameLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT)
        setContentView(flutterView, layout)

        Event.register(this, "aaaaaa", object : EventCallback {
            override fun invoke(p1: Map<String, Any>?) {
                var name = p1?.get("name").toString();
                ToastUtil.showShortToast(application, "WBFlutterActivity原生event回调:" + name)
            }
        })
    }

    override fun onDestroy() {
        super.onDestroy()
        Event.unregister(this, "aaaaaa")
    }
}
