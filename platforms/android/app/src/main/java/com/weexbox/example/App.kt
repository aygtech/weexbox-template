package com.weexbox.example

import android.app.Application
import com.taobao.weex.WXSDKEngine
import com.weexbox.core.WeexBoxEngine

class App : Application() {

    override fun onCreate() {
        super.onCreate()

        // 初始化 WeexBox
        WeexBoxEngine.setup(this, null)

        // 开启调试
        WeexBoxEngine.isDebug = true

        WXSDKEngine.registerModule("event", EventModule::class.java)
    }

}
