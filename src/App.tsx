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
import { CustomToastType, Toast } from 'components/molecules/Toast';
import { ToastError, ToastInfo, ToastSuccess, ToastWarning } from 'components/Icons';
import { BiometricsProvider } from 'providers/Biometrics.provider';

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				// staleTime: 1000 * 60 * 60 * 24 * 7,
				refetchOnWindowFocus: false,
				retry: 1
			}
		}
	});
const iconSizes = {
  width: 20,
  height: 20,
}
function App(): JSX.Element {
  return (
      <SafeAreaProvider>
        <StatusBar animated barStyle="default" />
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Provider store={store}>
            <QueryClientProvider client={queryClient}>
              <AppearanceProvider>
                <ToastProvider
                  duration={5000}
                  placement='top'
                  dangerColor='#B94545'
                  warningColor='#DA8420'
                  successColor='#3E863E'
                  dangerIcon={<ToastError {...iconSizes} />}
                  warningIcon={<ToastWarning {...iconSizes} />}
                  successIcon={<ToastSuccess {...iconSizes} />}
                  renderToast={(options) => <Toast options={options}/>}
                  renderType={{
                    info: (toast) => <CustomToastType options={toast} borderColor='#0853C2' leftIcon={<ToastInfo {...iconSizes} />}/>
                  }}
                >
                <BiometricsProvider>
                  <NavigationContainer>
                      <NavigationRoot />
                  </NavigationContainer>
                </BiometricsProvider>
                </ToastProvider>
              </AppearanceProvider>
            </QueryClientProvider>
          </Provider>
        </GestureHandlerRootView>
      </SafeAreaProvider>
  );
}

export default App;
