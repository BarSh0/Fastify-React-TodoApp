import {createGlobalStyle} from 'styled-components'

export const lightTheme = {
    body: " hsl(0, 0%, 98%)",
    fontColor:"#000",
    headerBackground: "./todo-app-main/images/bg-desktop-light.jpg",
    cardBackground: "hsl(236, 33%, 92%)",
    
};

export const darkTheme = {
    body: "hsl(235, 21%, 11%)",
    fontColor:"#fff",
    headerBackground:'#f0f0f0',
    cardBackground: "hsl(235, 24%, 19%)",

};

export const GlobalStyles = createGlobalStyle`

    body {
        background-color ${props => props.theme.body}
    }
    .header {
    }
    .card {
        background-color ${props => props.theme.cardBackground}
    }

`
// light
// - Very Light Gray: hsl(0, 0%, 98%)
// - Very Light Grayish Blue: hsl(236, 33%, 92%)
// - Light Grayish Blue: hsl(233, 11%, 84%)
// - Dark Grayish Blue: hsl(236, 9%, 61%)
// - Very Dark Grayish Blue: hsl(235, 19%, 35%)

// darkTheme
// - Very Dark Blue: hsl(235, 21%, 11%)
// - Very Dark Desaturated Blue: hsl(235, 24%, 19%)
// - Light Grayish Blue: hsl(234, 39%, 85%)
// - Light Grayish Blue (hover): hsl(236, 33%, 92%)
// - Dark Grayish Blue: hsl(234, 11%, 52%)
// - Very Dark Grayish Blue: hsl(233, 14%, 35%)
// - Very Dark Grayish Blue: hsl(237, 14%, 26%)