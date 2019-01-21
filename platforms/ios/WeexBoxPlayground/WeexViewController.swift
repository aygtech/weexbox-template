//
//  WeexViewController.swift
//  WeexBoxPlayground
//
//  Created by Mario on 2018/12/10.
//  Copyright © 2018 WeexBox. All rights reserved.
//

import Foundation
import WeexBox

class WeexViewController: WBWeexViewController {
    
    override func viewDidLoad() {
        router.url = "page/home.js"
        
        super.viewDidLoad()
    }
}
