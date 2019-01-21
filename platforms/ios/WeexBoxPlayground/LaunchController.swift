//
//  LaunchController.swift
//  WeexBoxPlayground
//
//  Created by Mario on 2018/12/10.
//  Copyright © 2018 WeexBox. All rights reserved.
//

import Foundation
import WeexBox
import SnapKit
import SDWebImage

class LaunchController: WBBaseViewController {
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        navigationController?.isNavigationBarHidden = true
        let logo = UIImageView()
        logo.contentMode = .scaleAspectFit
        logo.sd_setImage(with: URL(string: "https://aygtech.github.io/weexbox/logo.png"))
        view.addSubview(logo)
        logo.snp.makeConstraints { (make) -> Void in
            make.width.equalToSuperview()
            make.center.equalToSuperview()
        }
        
        // 配置热更新地址
        let hotDeployUrl = URL(string: "https://raw.githubusercontent.com/aygtech/weexbox-template/master/deploy")!
        UpdateManager.serverUrl = hotDeployUrl
        
        // 是否需要强制更新
        UpdateManager.forceUpdate = false
        
        // 执行热更新
        UpdateManager.update { [weak self] (state, progress, error, url) in
            switch state {
            case .Unzip:
                // 解压
                HUD.showProgress(view: self?.view, progress: Float(progress) / 100, message: "解压中")
            case .DownloadFile:
                // 下载
                if UpdateManager.forceUpdate {
                    HUD.showProgress(view: self?.view, progress: Float(progress) / 100, message: "下载中")
                }
            case .UpdateSuccess:
                // 更新成功，可以进入APP
                // 如果开启了强制更新，会等到下载完成才会进入这里。否则就是静默更新，解压成功就会进入
                let appDelegate = UIApplication.shared.delegate as! AppDelegate
                appDelegate.window?.rootViewController = WBNavigationController(rootViewController: WeexViewController())
            default:
                break
            }
        }
    }
}
