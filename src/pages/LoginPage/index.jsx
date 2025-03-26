import { Component } from "react";
import {
    LoginMainPage,
    LoginPageFirstBlock,
    WebsiteLogoImg,
    LoginPageSecondBlock,
    LoginButtonsBlock,
    LoginTypeBtn
} from './styledComponents'

import WebsiteLogo from '../../assets/HandyConnectLogo.png'

class LoginPage extends Component {

    state = {
        isRegister: true,
    }

    clickRegister = () => {
        this.setState({
            isRegister: true,
        })
    }

    clickLogin = () => {
        this.setState({
            isRegister: false,
        })
    }

    render () {
        console.log(this.state.isRegister);
        return (
            <LoginMainPage>
                <LoginPageFirstBlock>
                    <WebsiteLogoImg src={WebsiteLogo} />
                </LoginPageFirstBlock>
                <LoginPageSecondBlock>
                    <LoginButtonsBlock>
                        <LoginTypeBtn isRegister={this.state.isRegister} onClick={this.clickRegister}> Register </LoginTypeBtn>
                        <LoginTypeBtn isRegister={!this.state.isRegister} onClick={this.clickLogin}> Login </LoginTypeBtn>
                    </LoginButtonsBlock>
                </LoginPageSecondBlock>
            </LoginMainPage>
        )
    }
}

export default LoginPage;