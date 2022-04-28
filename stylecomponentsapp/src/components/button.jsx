
import styled from "styled-components"

//    export const Button=({children,onClick})=>{

//        return <button onClick={onClick}>{children}</button>

//    }

const Button=styled.button`
background-color:transparent;
background-color:${(props)=> props.them==="light" ? "#143f6b":"#641414"};
border-radius:40px;
color: red;
margin: 20px;
&:hover{
    background-color:gray;
}


`
export {Button}
