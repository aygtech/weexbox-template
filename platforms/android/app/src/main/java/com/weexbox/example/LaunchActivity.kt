package com.weexbox.example

import android.os.Bundle
import com.weexbox.core.controller.WBBaseActivity

/**
 * Author: Mario
 * Time: 2018/12/11 11:22 AM
 * Description: This is LaunchActivity
 */

class LaunchActivity: WBBaseActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContentView(R.layout.activity_launch)
        val launchFragment = LaunchFragment()
        supportFragmentManager.beginTransaction().replace(R.id.launchFragment, launchFragment).commit()
    }
}