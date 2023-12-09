import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import NavigationContainer from 'navigations/NavigationContainer';
import NavigationRoot from 'navigations/NavigationRoot';
import { AppearanceProvider } from 'providers/Appearance.provider';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from 'react-redux';
import store from 'store';
import { ToastProvider } from 'react-native-toast-notifications'

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 1000 * 60 * 60 * 24 * 7,
				refetchOnWindowFocus: false,
				retry: 1
			}
		}
	});

function App(): JSX.Element {
  return (
      <SafeAreaProvider>
        <StatusBar animated barStyle="default" />
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Provider store={store}>
            <QueryClientProvider client={queryClient}>
              <AppearanceProvider>
                <ToastProvider
                  placement='bottom'
                >
                  <NavigationContainer>
                      <NavigationRoot />
                  </NavigationContainer>
                </ToastProvider>
              </AppearanceProvider>
            </QueryClientProvider>
          </Provider>
        </GestureHandlerRootView>
      </SafeAreaProvider>
  );
}

export default App;
