//
//  WeexViewController.swift
//  WeexBoxPlayground
//
//  Created by Mario on 2018/12/10.
//  Copyright © 2018 WeexBox. All rights reserved.
//

import Foundation

class WeexViewController: BaseWeexViewController {
    
    override func viewDidLoad() {
        router.url = "page/home.js"
        
        super.viewDidLoad()
    }
}
