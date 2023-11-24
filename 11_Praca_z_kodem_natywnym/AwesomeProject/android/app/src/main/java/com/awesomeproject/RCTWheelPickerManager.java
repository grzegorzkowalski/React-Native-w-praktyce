package com.awesomeproject;

import com.facebook.react.uimanager.SimpleViewManager;
import io.blackbox_vision.wheelview.view.WheelView;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.bridge.ReadableArray;

import java.util.List;
import java.util.LinkedList;

public class RCTWheelPickerManager extends SimpleViewManager<WheelView> {
    public static final String REACT_CLASS = "RCTWheelPicker";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected WheelView createViewInstance(ThemedReactContext reactContext) {
        final WheelView wheelView = new WheelView(reactContext);
//        List<String> testList = new LinkedList<>();
//
//        testList.add("CodeKingdom 1");
//        testList.add("CodeKingdom 2");
//        testList.add("CodeKingdom 3");
//
//        wheelView.setItems(testList);
        return wheelView;
    }

    @ReactProp(name = "data")
    public void setData(WheelView wheelView, ReadableArray data) {
        List<String> dataList = new LinkedList<>();
        for (int i = 0; i < data.size() ; i++) {
            dataList.add(data.getString(i));
        }
        wheelView.setItems(dataList);
    }

}