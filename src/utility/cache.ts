import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

const prefix = 'cache';
const expiryInMinutes = 5;

const store = async (key: any, value: any) => {
  try {
    const item = {
      value,
      timestamp: Date.now()
    };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item))
  } catch (error) {
    console.log(error);
  }
};

const isExpired = (item: any) => {
  const now = moment(Date.now());
  const storedTime = moment(item.timestamp);
  return now.diff(storedTime, 'minutes') > expiryInMinutes;
};

const get = async (key: any) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    if (value !== null) {
      const item = JSON.parse(value);

      if (!item) return null;

      if (isExpired(item)) {
        await AsyncStorage.removeItem(prefix + key);
        return null;
      }

      return item.value;
    }
  } catch (error) {
    
  }
};

export default {
  store,
  get,
}