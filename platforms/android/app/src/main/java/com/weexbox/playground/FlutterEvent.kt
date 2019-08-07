package iquest.aiyuangong.com.iquest.flutter

import com.weexbox.core.controller.WBBaseActivity
import com.weexbox.core.event.Event
import io.flutter.plugin.common.EventChannel
import io.flutter.view.FlutterView

class FlutterEvent(flutterView: FlutterView, private val activity: WBBaseActivity, event: String) : EventChannel.StreamHandler {

    private val eventChannel: EventChannel

    init {
        eventChannel = EventChannel(flutterView, CHANNEL + event)
        eventChannel.setStreamHandler(this)
    }

    override fun onListen(o: Any, eventSink: EventChannel.EventSink) {
        Event.register(activity, o.toString()) { stringMap ->
            eventSink.success(stringMap)
        }
    }

    override fun onCancel(o: Any) {}

    companion object {
        var CHANNEL = "iquest.aiyuangong.com/event/"
    }
}
