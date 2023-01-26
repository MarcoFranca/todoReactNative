import styled from "styled-components/native";

export const Container = styled.View`
  margin:8px 24px;
  height:46px;
  border-width: 2px;
  border-radius:10px;
`

export const InputForm = styled.TextInput`
  color:#ffffff;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0;
  padding-left: 15px;
  padding-bottom: 15px;
  width: 95%;
  ::placeholder{
    color: white;
  }
`
Container.Input = styled.View`
  align-self: center;
  height:38px;
  margin-top:16px;
  flex: 1;
  
`

export const ButtonIcon = styled.Image`
  height: 30px;
  width: 30px;
  margin-right: 4px;
`

