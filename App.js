import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import LoginScreen from './src/screens/LoginScreen';
import LandingScreen from './src/screens/LandingScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import CategoryScreen from './src/screens/CategoryScreen';
import ListScreen from './src/screens/ListScreen';
import HelpScreen from './src/screens/HelpScreen';
import SettingScreen from './src/screens/SettingScreen';
import SelectionScreen from './src/screens/SelectionScreen';
import DetailScreen from './src/screens/DetailScreen';
import RequestScreen from './src/screens/RequestScreen';


const  navigator = createStackNavigator({
  Index:IndexScreen,
  Login:LoginScreen,
  Landing:LandingScreen,
  Forgot:ForgotPasswordScreen,
  Category:CategoryScreen,
  List:ListScreen,
  Help:HelpScreen,
  Setting:SettingScreen,
  Selection:SelectionScreen,
  Detail:DetailScreen,
  Request:RequestScreen
},{
  initialRouteName: 'Request',
  defaultNavigationOptions: {
    header:null
  }
 }
);

export default createAppContainer(navigator);

