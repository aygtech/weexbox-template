package com.weexbox.playground

import android.app.Application
import com.weexbox.core.WeexBoxEngine

class App : Application() {

    override fun onCreate() {
        super.onCreate()

        // 初始化 WeexBox
        WeexBoxEngine.setup(this, null)

        // 开启调试
        WeexBoxEngine.isDebug = true
    }

}
