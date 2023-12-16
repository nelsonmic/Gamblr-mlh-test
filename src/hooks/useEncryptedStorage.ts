import { StorageKeys } from "constants/enums";
import { useCallback } from "react";
import EncryptedStorage from "react-native-encrypted-storage";

type useEncryptedStorage = {
  getEncryptItemFromStorage: (key: StorageKeys) => Promise<any | null>,
  setEncryptItemToStorage: (key: StorageKeys, value: any) => void,
  removeEncryptedItemFromStorage: (key: StorageKeys) => void,
  clearAllEncryptedStorageItems: () => void
};

export const useEncryptedStorage = (): useEncryptedStorage => {
      
  const getEncryptItemFromStorage = useCallback(async (key: StorageKeys) => {
    const item = await EncryptedStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }, []);

  const setEncryptItemToStorage = useCallback((key: StorageKeys, value: any) => {
    EncryptedStorage.setItem(key, JSON.stringify(value));
  }, []);

  const removeEncryptedItemFromStorage = useCallback((key: StorageKeys) => {
    EncryptedStorage.removeItem(key);
  }, []);

  const clearAllEncryptedStorageItems = useCallback(() => {
    EncryptedStorage.clear();
  }, []);

  return {
    getEncryptItemFromStorage,
    setEncryptItemToStorage,
    removeEncryptedItemFromStorage,
    clearAllEncryptedStorageItems
  };
};
