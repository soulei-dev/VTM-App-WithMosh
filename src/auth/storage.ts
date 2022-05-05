import * as SecureStore from 'expo-secure-store';
import jwtDecode from 'jwt-decode';

const key = "authKey";

const storeToken = async (authToken: any) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log('Error storing the auth token.', error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log('Error getting the auth token.', error);
  }
};

const getUser = async () => {
  const token = await getToken();
  return token ? jwtDecode(token) : null;
};

const removeToken = async () => {
  try {
    return await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log('Error removing the auth token.', error);
  }
};

export default {
  storeToken,
  getUser,
  removeToken
}