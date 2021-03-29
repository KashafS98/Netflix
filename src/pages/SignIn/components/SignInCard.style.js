import styled from 'styled-components'

export const Card = styled.div`
    margin: 0 auto;
    text-align: left;
    background-color: rgba(0,0,0,.75);
    color: white;
    min-height: 535px;
    width: 300px;
    padding: 60px 68px 40px;
    input{
        &:placeholder{
            color: white
        }
    }
    button{
        width: 300px;
    }
    p{
        font-size: 14px;
        color: #737373
    }
    margin-bottom: 50px;
`

export const FormActions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 10px;
`

export const Subcard2 = styled.div`
    margin-top: 30px;
    display: flex;
    align-items:center;
    justify-content: flex-start;
    color: #737373;
    margin-bottom: 8px
`