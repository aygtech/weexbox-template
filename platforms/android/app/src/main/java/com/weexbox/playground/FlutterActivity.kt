package com.weexbox.example

import android.os.Bundle
import android.view.ViewGroup
import android.widget.FrameLayout
import com.weexbox.core.controller.WBBaseActivity
import io.flutter.facade.Flutter

/**
 *Author:leon.wen
 *Time:2019/6/17   15:52
 *Description:This is FlutterActivity
 */
open class FlutterActivity : WBBaseActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        router.navBarHidden = true
        val flutterView = Flutter.createView(
            this,
            lifecycle,
            router.params!!["path"].toString()
        )
        val layout = FrameLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT)
        addContentView(flutterView, layout)
    }
}
