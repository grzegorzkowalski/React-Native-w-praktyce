import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Camera, useCameraDevice, useCameraPermission} from 'react-native-vision-camera';

function App(): JSX.Element {
  const {hasPermission, requestPermission} = useCameraPermission();
  const devices = Camera.getAvailableCameraDevices();
  //console.log(devices);
  const device = useCameraDevice('front');
  console.log({device});
  const [camOk, setCamOk] = useState(false);

  useEffect(() => {
    // @ts-ignore
    // request(PERMISSIONS.ANDROID.CAMERA).then(result => {
    //   console.log(result);
    // });
    requestPermission().then(res => {
      //console.log(res);
      setCamOk(true);
    })
  }, []);

  if (device && camOk) {
    return (
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
        />
    )
  }
  else {
    return <></>;
  }
}

export default App;
