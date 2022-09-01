import React from 'react'
import { colors } from '../../style'

const Button = (props) => {
  return <a href='!#'
  style={{
    boxSizing:'border-box',
    padding:"10px 20px",
    background:props.inverse?"transparent": colors.primaryColour,
    color:props.inverse? colors.primaryColour: "#fff",
    display:"inline-block",
    borderRadius:"20px",
    boxShadow:props.inverse? "none": "#6dba6d 0px 0px 10px 0px ",
    border:"1px solid",
    borderColor:props.inverse? colors.primaryColour :"transparent",
    fontSize:12,
    letterSpacing:"1px",
  }}>
    {props.lable}
  </a>
}

export default Button