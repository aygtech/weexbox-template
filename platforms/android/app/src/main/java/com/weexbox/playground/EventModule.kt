package com.weexbox.playground

import com.taobao.weex.annotation.JSMethod
import com.weexbox.core.module.BaseModule
import com.weexbox.core.router.Router

/**
 * Author: Mario
 * Time: 2019/1/25 9:08 PM
 * Description: This is EventModule
 */

class EventModule: BaseModule() {

    @JSMethod(uiThread = true)
    fun openURL(url: String) {
        val router = Router()
        router.url = url
        router.name = Router.NAME_WEEX
        router.open(getActivity())
    }
}