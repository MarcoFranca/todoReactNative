import styled from "styled-components/native";
export const Container = styled.View`
  padding-top: 30px;
  flex: 1;
  background-color: #211D28;
`
Container.Title = styled.Text`
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  color: #FFFFFF;
`

Container.Subtitle = styled.Text`
  margin-top:16px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #FFFFFF;
  opacity: 0.8;
`
export const FinalBar = styled.View`
  position: absolute;
  bottom: 0;
  ${props => props.width? (`width:${props.width}px`) : null };
  border-radius: 50px;
  height: 105px;
  touch-action: none;
`

