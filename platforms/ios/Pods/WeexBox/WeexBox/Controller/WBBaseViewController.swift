//
//  WBBaseViewController.swift
//  WeexBox
//
//  Created by Mario on 2018/8/13.
//  Copyright © 2018年 Ayg. All rights reserved.
//

import Foundation

/// vc基类
@objcMembers open class WBBaseViewController: UIViewController {
    
    // 路由
    public var router = Router()
    // 导航栏原始高度
    let navHeight = UIApplication.shared.statusBarFrame.size.height
    
    open override func viewDidLoad() {
        super.viewDidLoad()
        
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
    
//    override open func rt_customBackItem(withTarget target: Any!, action: Selector!) -> UIBarButtonItem! {
//        let button = UIButton(type: .custom)
//        button.setImage(UIImage(named: "back"), for: .normal)
//        return UIBarButtonItem(customView: button)
//    }
//
}
