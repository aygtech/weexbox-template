//
//  WBFlutterViewController.swift
//  WeexBoxPlayground
//
//  Created by Mario on 2019/7/11.
//  Copyright © 2019 WeexBox. All rights reserved.
//

import Foundation
import Flutter
import WeexBox

class WBFlutterViewController: FlutterViewController {
    
    // 路由
    public var router: Router!

    override func viewDidLoad() {
        setInitialRoute(routerJson)
        router = Router.deserialize(from: routerJson) ?? Router()
        
        rt_disableInteractivePop = router.disableGestureBack
        view.backgroundColor = .white
        if title == nil {
            title = router.title
        }
        navigationController?.isNavigationBarHidden = router.navBarHidden
        
        super.viewDidLoad()
    }

    deinit {
        Event.unregisterAll(target: self)
    }
    
}
