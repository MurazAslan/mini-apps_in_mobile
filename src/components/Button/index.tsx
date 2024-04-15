import React, { ReactNode } from 'react'
import {  ButtonProps } from 'react-native'



interface iButton {
    title?: string,
    children: ReactNode,
    style:any,
    lefticon: string
}

const Button: React.FC<ButtonProps> = ({title}) => {
  return (
    <Button title={title}>
      
    </Button>
  )
}

export default Button
