import { NativeModules } from 'react-native';

type SimpleNotificationsType = {
  multiply(a: number, b: number): Promise<number>;
};

const { SimpleNotifications } = NativeModules;

export default SimpleNotifications as SimpleNotificationsType;
