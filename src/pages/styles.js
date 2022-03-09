import styled from 'styled-components'

export const Container=styled.div`
    width:90%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    overflow-x:${props=>props.overflow?"scroll":"none"};
    font-family: 'Lexend Deca', sans-serif;
`

export const PeerWrapper=styled.div`
    display: flex;
    width:2800px;
    @media only screen and (max-width: 1080px)
    {
        width:2300px;
    }
    @media only screen and (max-width: 750px)
    {
        width:1400px;
    }
    @media only screen and (max-width: 500px)
    {
        width:900px;
    }
`

export const Heading=styled.div`
    font-size:${props=>props.bold?"35px":"25px"};
    font-weight: ${props=>props.bold?"700":"500"};
    margin: 40px 0 10px 0;
`
export const Card=styled.div`
    width: 100%;
    margin: ${props=>props.margin?"10px":"auto"};
    padding: 20px;
    background-color: ${props=>props.color?props.color:"#DEDEDE"};
    border-radius: 10px;
    height: auto;
    @media only screen and (max-width: 480px)
    {
        padding: 15px;
        margin: ${props=>props.margin?"5px":"auto"};

    }
`
export const Field=styled.div`
    display: flex;
    width: 100%;
    align-items: flex-start;
    justify-content: flex-end;
    margin: 15px 0px;
    @media only screen and (max-width: 750px)
    {
        flex-direction: column;
    }
    @media only screen and (max-width: 480px)
    {
        margin: 10px 0;
    }
`
export const Label=styled.div`
    font-size: 17px;
    font-weight: 700;
    width:13%;
    margin-top: 5px;
    color: #444;
    @media only screen and (max-width: 1080px){
        font-size: 14px;
    }
    @media only screen and (max-width:750px)
    {
        width: 17%;
        font-size: 12px;
        margin-bottom: 5px;
        width: 100%;
    }
`
export const DisValue=styled.input`
    width: 85%;
    background: #CCC;
    border-radius: 5px;
    border: 1px solid #AAA;
    padding: 5px;
    color: #555;
    font-size: 17px;
    @media only screen and (max-width: 1080px)
    {
        font-size: 14px;
    }
    @media only screen and (max-width: 750px)
    {
        width: 100%;
    }
`
export const Value=styled.input`
    width: 85%;
    border-radius: 5px;
    border: 1px solid #AAA;
    padding: 5px;
    font-size: 17px;
    @media only screen and (max-width: 1080px)
    {
        font-size: 14px;
    }
    @media only screen and (max-width: 750px)
    {
        width: 100%;
    }
`
export const DataField=styled.textarea`
    width: 85%;
    height:200px;
    border-radius: 5px;
    padding: 5px;
    border:1px solid #BBB;
    resize: none;
    overflow-y: scroll;
    scrollbar-width: thin; 
    font-size: 17px;
    @media only screen and (max-width: 1080px)
    {
        font-size: 14px;
    }
    @media only screen and (max-width: 750px)
    {
        width: 100%;
    }
`
export const Button=styled.div`
    background:#2A6598;
    color:white;
    padding:7px 17px;
    font-size: 13px;
    border-radius: 5px;
    cursor: pointer;
    :hover{
    background:#195487;
    }
`