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
    // 状态栏原始高度
    let statusBarHeight = UIApplication.shared.statusBarFrame.size.height
    let flutterEngine = (UIApplication.shared.delegate as? AppDelegate)?.flutterEngine
    
    init() {
        super.init(engine: flutterEngine, nibName: nil, bundle: nil)!
    }

    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func viewWillAppear(_ animated: Bool) {
        router = Router.deserialize(from: routerString) ?? Router()
        
        rt_disableInteractivePop = router.disableGestureBack
        view.backgroundColor = .white
        if title == nil {
            title = router.title
        }
        navigationController?.isNavigationBarHidden = router.navBarHidden
    }
    
    deinit {
        Event.unregisterAll(target: self)
    }
    
}
