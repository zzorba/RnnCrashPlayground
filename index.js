import {Navigation} from 'react-native-navigation';
import App from './App';
import TopBarButton from './TopBarButton';
import TopBarComponent from './TopBarComponent';

Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);
Navigation.registerComponent('com.myApp.TopBarButton', () => TopBarButton);
Navigation.registerComponent('com.myApp.TopBarScreen', () => TopBarComponent);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'com.myApp.WelcomeScreen',
                  },
                },
              ],
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'com.myApp.WelcomeScreen',
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });
});
