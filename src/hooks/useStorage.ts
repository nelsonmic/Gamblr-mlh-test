import { useMMKVStorage } from "react-native-mmkv-storage";
import { appStorage } from "handlers/storage";
import { StorageKeys } from "constants/enums";

export function useStorageValue<T>(key: StorageKeys): {
	setValue: (newValue: T | undefined) => void;
	value: T | undefined;
} {
	const [value, setValue] = useMMKVStorage<T>(key, appStorage);

	// Update the value only if the new value is defined
	const updateValue = (newValue: T | undefined) => {
		if (newValue !== undefined) {
			setValue(newValue);
		}
	};

	return { setValue: updateValue, value };
}
