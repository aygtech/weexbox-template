package com.weexbox.playground

import android.os.Bundle
import android.view.ViewGroup
import android.widget.FrameLayout
import com.weexbox.core.controller.WBBaseActivity
import com.weexbox.core.extension.toJsonString
import io.flutter.facade.Flutter

/**
 *Author:leon.wen
 *Time:2019/6/17   15:52
 *Description:This is WBFlutterActivity
 */
open class WBFlutterActivity : WBBaseActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val flutterView = Flutter.createView(
            this,
            lifecycle,
            router.toJsonString()
        )
        val layout = FrameLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT)
        addContentView(flutterView, layout)
    }
}
