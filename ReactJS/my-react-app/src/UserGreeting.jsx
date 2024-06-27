import PropTypes from 'prop-types'
export let check = false;
function UserGreeting(props)
{
    const welcomeMessage = <h2 className='welcome-message'>Welcome  {props.userName} to green nature store</h2>
    const loginPrompt = <h2 className='login-prompt'>Please log in to continue</h2>;
   if(props.isLoggedIn)
    {
        check = true;
        return welcomeMessage;
    }
    check = false;
    return loginPrompt
}
UserGreeting.propTypes = { 
    isLoggedIn: PropTypes.bool,
    userName: PropTypes.string
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    userName: "Guest",
}

export default UserGreeting