import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import LoginScreen from './src/screens/LoginScreen';


const  navigator = createStackNavigator({
  Index:IndexScreen,
  Login:LoginScreen
},{
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    header:null
  }
 }
);

export default createAppContainer(navigator);

