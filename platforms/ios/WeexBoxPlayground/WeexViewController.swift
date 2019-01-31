//
//  WeexViewController.swift
//  WeexBoxPlayground
//
//  Created by Mario on 2018/12/10.
//  Copyright © 2018 WeexBox. All rights reserved.
//

import Foundation
import WeexBox
import WXDevtool

class WeexViewController: WBWeexViewController {
    
    override func viewDidLoad() {
//        let devtoolUrl = "ws://192.168.5.242:8093/debugProxy/native/923b5ec1-82a9-4954-aa3b-d3baf177ada1"
//        WXDevTool.launchDebug(withUrl: devtoolUrl)
        
        router.url = "http://192.168.5.242:8093/weex/src/page/graphql/App.js"

        super.viewDidLoad()
    }
}
