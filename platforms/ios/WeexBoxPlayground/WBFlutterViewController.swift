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
import SwiftyJSON

class WBFlutterViewController: FlutterViewController {
    
    // 路由
    public var router: Router!
    // 通道
    public var methodChannel: FlutterMethodChannel!
    public var eventChannel: FlutterEventChannel!
    let eventChannelHandler = EventChannelHandler()

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
        
        methodChannel = FlutterMethodChannel(name: "weexbox.com/method_channel", binaryMessenger: engine as! FlutterBinaryMessenger)
        methodChannel.setMethodCallHandler { [weak self] (call, result) in
            self!.flutterMethodCall(call, result)
            let method = call.method
            let arguments = JSON(call.arguments ?? "")
            switch method {
            case "event_emit":
                Event.emit(name: arguments["name"].stringValue, info: arguments["info"].dictionaryObject)
            case "event_unregister":
                Event.unregister(target: self!.eventChannelHandler, name: arguments["name"].stringValue)
            case "event_unregisterAll":
                Event.unregisterAll(target: self!.eventChannelHandler)
            case "router_open":
                let router = Router.deserialize(from: arguments["router"].dictionaryObject)
                router?.open(from: self!)
            case "router_close":
                let router = Router.deserialize(from: arguments["router"].dictionaryObject)
                router?.close(from: self!, count: arguments["levels"].int)
            case "hud_showToast":
                HUD.showToast(view: self!.view, message: arguments["message"].stringValue)
            case "getControllerId":
                result(String(self!.hashValue))
            default:
                break
            }
        }
        
        eventChannel = FlutterEventChannel(name: "weexbox.com/event_channel", binaryMessenger: engine as! FlutterBinaryMessenger)
        eventChannel.setStreamHandler(eventChannelHandler)
    }

    deinit {
        Event.unregisterAll(target: self)
        Event.unregisterAll(target: eventChannelHandler)
    }
    
    // 子类重载此方法，就可以添加自己的method
    public func flutterMethodCall(_ call: FlutterMethodCall, _ result: FlutterResult) {
        
    }
    
}
