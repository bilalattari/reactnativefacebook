import {
  StackNavigator,
} from 'react-navigation';
import SignUpPage from '../Component/SignupPage'
import SignIn from '../Component/SignIn'

const Screens = StackNavigator({
  Login: { screen: SignIn },
  signUp: { screen: SignUpPage },
 }
,
{
    initialRouteName : 'Login',
    headerMode : 'none'
}
);
export default Screens