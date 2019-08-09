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

    // MARK- FlutterStreamHandler
    func onListen(withArguments arguments: Any?, eventSink events: @escaping FlutterEventSink) -> FlutterError? {
        let json = JSON(arguments ?? "")
        let name = json["name"].stringValue
        Event.register(target: self, name: name) { (notification) in
            if let info = notification?.userInfo {
                events(JSON(info).rawString())
            }
        }
        return nil
    }
    
    func onCancel(withArguments arguments: Any?) -> FlutterError? {
        return nil
    }
}
