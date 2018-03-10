import {
  StackNavigator,
} from 'react-navigation';
import SignUpPage from '../Component/SignupPage'
import SignIn from '../Component/SignIn'
import Result from '../Component/Result'
import Profile from '../Component/Profile'
import Main from '../Component/Main'
import ImagePick from '../Component/ImagePick'

const Screens = StackNavigator({
  Login: { screen: SignIn },
  signUp: { screen: SignUpPage },
  ResultPage : {screen :Result },
  Profile : {screen : Profile},
  MainPage : {screen : Main},
  ImagePicker : {screen : ImagePick}
 }
,
{
    initialRouteName : 'ImagePicker',
    headerMode : 'none'
}
);
export default Screens