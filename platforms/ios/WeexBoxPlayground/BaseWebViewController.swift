//
//  BaseWebViewController.swift
//  WeexBoxPlayground
//
//  Created by Mario on 2019/1/25.
//  Copyright © 2019 WeexBox. All rights reserved.
//

import Foundation
import WeexBox

class BaseWebViewController: WBWebViewController {
    
    override func rt_customBackItem(withTarget target: Any!, action: Selector!) -> UIBarButtonItem! {
        let button = UIButton(type: .custom)
        button.setImage(UIImage(named: "back"), for: .normal)
        button.addTarget(self, action: #selector(back), for: .touchUpInside)
        return UIBarButtonItem(customView: button)
    }
    
    func back() {
        navigationController?.popViewController(animated: true)
    }
}
