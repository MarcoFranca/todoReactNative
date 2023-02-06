import styled from "styled-components/native";

export const ListContainer = styled.ScrollView`
  margin-bottom: 40px;
`

export const ListItem = styled.TouchableOpacity`
  margin: 2px;
  border-radius:22px;
  background-color: #211D28;
`

export const TextContainer = styled.View`
  flex-direction: row;
  height:46px;
  align-items: center;
`
TextContainer.text = styled.Text`
  font-size:20px;
  font-weight: normal;
  padding-left:15px;
  color:#ffffff;
  
  ${props => props.done? ("text-decoration-Line:line-through; " +
                  "text-decoration-style: solid;" +
                  "color: rgba(255,255,255,0.17);") : null }
`
export const BtnContainer = styled.View`
  flex-direction: row;
`
