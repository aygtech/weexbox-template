//
//  WeexViewController.swift
//  WeexBoxExample
//
//  Created by Mario on 2018/12/10.
//  Copyright © 2018 WeexBox. All rights reserved.
//

import Foundation
import WeexBox

class WeexViewController: WBWeexViewController {
    
    override func viewDidLoad() {
        router.url = "module1/page1.js"
        
        super.viewDidLoad()
    }
}
