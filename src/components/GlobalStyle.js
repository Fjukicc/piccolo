import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    font-family: 'Montserrat', sans-serif;
}
`

export const Container = styled.div`
    z-index: 1;
    height: 550px;
    display: flex;
    justify-content: flex-start;
    width: 100%;
    background-color: #FBF5F3;
    @media only screen and (max-width: 1100px) {
        padding: 0px 20px;
        flex-direction: column;
        height: auto;
        padding-bottom: 10px;
    }
`

export default GlobalStyle;