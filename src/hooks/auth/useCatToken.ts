import EncryptedStorage from "react-native-encrypted-storage";
import { useCallback, useEffect, useState } from "react";
import { StorageKeys } from "constants/enums";

type useCatToken = {
      catToken: string | null;
      setCatToken: (token: string) => void;
}

export const useCatToken = (): useCatToken => {
	const [token, setToken] = useState<string | null>(null);

	useEffect(() => {
		(async () => {
			const catToken = await EncryptedStorage.getItem(StorageKeys.catToken);
			if (!catToken) return;
			setToken(catToken);
		})();
	}, []);

	const setCatToken = useCallback((token: string) => {
		EncryptedStorage.setItem(StorageKeys.catToken, String(token));
	}, []);

	return { catToken: token, setCatToken };
};
