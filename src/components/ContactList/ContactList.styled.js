import styled from '@emotion/styled'

export const ContactItem= styled.li`
display: flex;
align-items: center;
padding-left: 30px;
font-size: 20px;
font-weight:500;
line-height: 1.17;
:not(:last-child) {
    margin-bottom: 15px;
}
`

export const NameInfo= styled.span`
margin-right: 5px;
`
export const NumberInfo= styled.span`
margin-right: 15px;
`

export const DeleteButton = styled.button`
width: 60px;
min-height: 25px;
border-radius: 5px;
background-color: lightgray;
transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1), border 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

:hover, :focus {
background-color: lightblue;
border: 1px solid #000;
}
`