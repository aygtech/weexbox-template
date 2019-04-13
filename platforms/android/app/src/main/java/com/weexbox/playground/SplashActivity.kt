package com.weexbox.playground

import android.os.Bundle
import com.weexbox.core.controller.WBBaseActivity
import com.weexbox.core.util.HotReloadManager

/**
 * Author: Mario
 * Time: 2018/12/11 11:22 AM
 * Description: This is SplashActivity
 */

class SplashActivity : WBBaseActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        HotReloadManager.ws = intent.dataString
        router.navBarHidden = true

        super.onCreate(savedInstanceState)

        setContentView(R.layout.activity_splash)
        val splashFragment = SplashFragment()
        supportFragmentManager.beginTransaction().replace(R.id.launchFragment, splashFragment).commit()
    }
}
