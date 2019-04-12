package com.weexbox.playground

import android.os.Bundle
import com.weexbox.core.controller.WBBaseActivity

/**
 * Author: Mario
 * Time: 2018/12/11 11:22 AM
 * Description: This is SplashActivity
 */

class SplashActivity : WBBaseActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        router.navBarHidden = true
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_launch)
        val launchFragment = SplashFragment()
        supportFragmentManager.beginTransaction().replace(R.id.launchFragment, launchFragment).commit()
    }
}
