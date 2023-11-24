import {View, requireNativeComponent} from 'react-native';

const settings = {
     name: 'RCTWheelPicker',
     propTypes: {
          ...View.propTypes,
     },
};

export default requireNativeComponent('RCTWheelPicker', settings);