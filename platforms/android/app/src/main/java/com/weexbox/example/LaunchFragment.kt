package com.weexbox.example

import android.os.Bundle
import com.weexbox.core.controller.WBBaseFragment
import com.weexbox.core.router.Router
import com.weexbox.core.update.UpdateManager

/**
 * Author: Mario
 * Time: 2018/12/11 11:22 AM
 * Description: This is LaunchFragment
 */

class LaunchFragment : WBBaseFragment() {

    override fun getLayoutId(): Int {
        return R.layout.fragment_lauch
    }

    override fun onActivityCreated(savedInstanceState: Bundle?) {
        super.onActivityCreated(savedInstanceState)

        // 配置热更新地址
        val hotDeployUrl = "https://raw.githubusercontent.com/aygtech/weexbox-template/master/deploy"
        UpdateManager.serverUrl = hotDeployUrl

        // 是否需要强制更新
        UpdateManager.forceUpdate = false

        // 执行热更新
        UpdateManager.update { state, progress, error, url ->
            when (state) {
                UpdateManager.UpdateState.Unzip -> {
                    // 解压
                    (activity as LaunchActivity).loadDialogHelper.showProgressWithText(activity, "解压中", progress)
                }
                UpdateManager.UpdateState.DownloadFile -> {
                    // 下载
                    if (UpdateManager.forceUpdate) {
                        (activity as LaunchActivity).loadDialogHelper.showProgressWithText(activity, "下载中", progress)
                    }
                }
                UpdateManager.UpdateState.UpdateSuccess -> {
                    // 更新成功，可以进入APP
                    // 如果开启了强制更新，会等到下载完成才会进入这里。否则就是静默更新，解压成功就会进入
                    val router = Router()
                    router.name = Router.NAME_WEEX
                    router.url = "page/home.js"
                    router.closeFrom = 0
                    router.open(activity as LaunchActivity)
                }
            }
        }
    }

}
