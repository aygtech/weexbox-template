//
//  WeexViewController.swift
//  WeexBoxPlayground
//
//  Created by Mario on 2018/12/10.
//  Copyright © 2018 WeexBox. All rights reserved.
//

import Foundation
import WeexBox
import Flutter

class WeexViewController: WBWeexViewController {
    
    override func viewDidLoad() {
//        router.url = "page/home.js"
        self.view.backgroundColor = UIColor.red
        super.viewDidLoad()
    }
    
    override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
        super.touchesBegan(touches, with: event)
        
        let flutterVC = FlutterBaseController()
        flutterVC.setInitialRoute("{name:'route1',dataList:['aa','bb','cc']}")
        self.navigationController?.pushViewController(flutterVC, animated: true)
    }
}
