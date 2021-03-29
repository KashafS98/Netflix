import styled from 'styled-components'

export const Container = styled.div`
    background-image: url('${props=>props.background}');
`

export const Overlay = styled.div`
    min-height: 100%;
    background-color: rgba(0,0,0,0.4);
    background-image: linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%);
    img{
        width: 150px;
        margin: 10px 50px 20px 50px;
    }
`