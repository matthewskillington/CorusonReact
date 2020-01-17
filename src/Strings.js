import LocalizedStrings from 'react-native-localization';

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
    "es": {
        LoginSSOMessage: "Inicie sesión a través de SSO",
        ssoButtonTitle: "Ideagen365Test",
        adfsLogin: "ADFS Iniciar sesión",
        rememberMe: "Recuérdame",
        orLabel: "o",
        loginCoruson: "Inicie sesión a través de la cuenta Coruson",
        usernameLabel: "Nombre de usuario",
        passwordLabel: "Contraseña",
        loginButton: "Iniciar sesión"
    }
});

export default strings;