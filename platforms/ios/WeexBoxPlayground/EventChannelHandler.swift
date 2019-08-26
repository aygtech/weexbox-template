//
//  EventChannelHandler.swift
//  WeexBoxPlayground
//
//  Created by Mario on 2019/8/9.
//  Copyright © 2019 WeexBox. All rights reserved.
//

import Foundation
import Flutter
import WeexBox
import SwiftyJSON

class EventChannelHandler: NSObject, FlutterStreamHandler {
    
    // 保存当前事件通道的最新会话
    var eventSink: FlutterEventSink?

    // MARK- FlutterStreamHandler
    func onListen(withArguments arguments: Any?, eventSink events: @escaping FlutterEventSink) -> FlutterError? {
        eventSink = events
        let json = JSON(arguments ?? "")
        let name = json["name"].stringValue
        Event.register(target: self, name: name) { (notification) in
            var params = Dictionary<String, Any>()
            params["name"] = name
            if let info = notification?.userInfo {
                params["info"] = info
            }
            self.eventSink?(JSON(params).rawString())
        }
        return nil
    }
    
    func onCancel(withArguments arguments: Any?) -> FlutterError? {
        return nil
    }
}
