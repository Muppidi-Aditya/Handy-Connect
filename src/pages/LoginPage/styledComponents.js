import styled from 'styled-components';

export const LoginMainPage = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #EFEFEF;
    display: flex;
    flex-direction: column;
`

export const LoginPageFirstBlock = styled.div`
    height: 110px;
    border-style: solid;
    border-color: red;
    padding-left: 20px;
    margin-top: 20px;
`

export const WebsiteLogoImg = styled.img`
    height: 110px;
`

export const LoginPageSecondBlock = styled.div`
    height: 100%;
    width: 100vw;
    border-style: solid;
    border-color: red;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const LoginButtonsBlock = styled.div`
    height: 60px;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    gap: 10px;
`

export const LoginTypeBtn = styled.button`
    height: 100%;
    width: 50%;
    border-style: solid;
    border-color: #EC5228;
    background-color: #EC5228;
    color: ${(props) => (!props.isRegister ? "#EC5228" : "white")};
    background-color: ${(props) => (props.isRegister ? "#EC5228" : "transparent")};
    border-radius: 6px;
    font-size: 18px;
    font-family: "Poppins", sans-serif;
`