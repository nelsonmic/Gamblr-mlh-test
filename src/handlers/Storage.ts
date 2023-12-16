import { MMKVLoader } from "react-native-mmkv-storage";

export const appStorage = new MMKVLoader()
	.withEncryption()
	.withInstanceID("userdata")
	.initialize();

const mmkvStorage = {
	clear: () => appStorage.clearStore(),
	getItem: (name: string) => appStorage.getString(name) ?? null,
	removeItem: (name: string) => appStorage.removeItem(name),
	setItem: (name: string, value: string) => appStorage.setString(name, value)
};

export default mmkvStorage;
