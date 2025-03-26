import { Component } from "react";
import {
    LoginLandingMainPage,
    LoginLandingPageBlock,
    LoginLandingPageH1,
    LoginAsButton
} from './styledComponents';
import { AppContext } from "../../App";

import LoginPageMainImg from '../../assets/undraw_qa-engineers_kgp8.svg';

class LoginLandingPage extends Component {
    render() {
        return (
            <AppContext.Consumer>
                {({ userTypeSelection }) => (
                    <LoginLandingMainPage>
                        <img src={LoginPageMainImg} alt="Login Illustration" />
                        <LoginLandingPageBlock>
                            <LoginLandingPageH1> Are you searching for? </LoginLandingPageH1>
                            <LoginAsButton onClick={() => userTypeSelection('Work')}>
                                Work
                            </LoginAsButton>
                            <LoginAsButton onClick={() => userTypeSelection('Worker')}>
                                Worker
                            </LoginAsButton>
                        </LoginLandingPageBlock>
                    </LoginLandingMainPage>
                )}
            </AppContext.Consumer>
        );
    }
}

export default LoginLandingPage;
