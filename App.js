import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import LoginScreen from './src/screens/LoginScreen';
import LandingScreen from './src/screens/LandingScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import CategoryScreen from './src/screens/CategoryScreen';


const  navigator = createStackNavigator({
  Index:IndexScreen,
  Login:LoginScreen,
  Landing:LandingScreen,
  Forgot:ForgotPasswordScreen,
  Category:CategoryScreen
},{
  initialRouteName: 'Landing',
  defaultNavigationOptions: {
    header:null
  }
 }
);

export default createAppContainer(navigator);

