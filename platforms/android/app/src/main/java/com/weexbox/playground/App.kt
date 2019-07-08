package com.weexbox.playground

import android.app.Application
import com.taobao.weex.WXSDKEngine
import com.weexbox.core.WeexBoxEngine
import com.weexbox.core.router.Router

class App : Application() {

    override fun onCreate() {
        super.onCreate()

        // 初始化 WeexBox
        WeexBoxEngine.setup(this, null)

        // 开启调试
        WeexBoxEngine.isDebug = true

        WXSDKEngine.registerModule("event", EventModule::class.java)
        Router.register("flutter", FlutterActivity::class.java)
    }

}
