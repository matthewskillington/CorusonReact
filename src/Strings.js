import LocalizedStrings from 'react-native-localization';
import es from './Strings.es';


let strings = new LocalizedStrings({
    "en-US": {
        LoginSSOMessage: "Log in through SSO",
        ssoButtonTitle: "Ideagen365Test",
        adfsLogin: "ADFS Login",
        rememberMe: "Remember me",
        orLabel: "or",
        loginCoruson: "Log in through Coruson Account",
        usernameLabel: "Username/Email Address:",
        passwordLabel: "Password:",
        loginButton: "LOGIN"
    },
    "es": es
    
});

export default strings;