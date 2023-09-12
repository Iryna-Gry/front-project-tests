import React from 'react'
import { Button } from '@chakra-ui/react'

type ButtonProps = {
  children: React.ReactNode
  disabled: boolean
  type?: 'button' | 'submit' | 'reset' | undefined
  mb?: string
  variant?: 'blue' | 'green' | 'pink' | 'yellow'
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export const CustomButton: React.FC<ButtonProps> = ({
  children,
  disabled,
  type = 'button',
  mb,
  variant = 'blue',
  onClick = undefined,
}) => {
  const buttonTypes = {
    blue: {
      disabledColor: 'blue.100',
      bgColor: 'blue.400',
      hoverColor: 'blue.700',
      pressedBoxShadow: 'inset 4px 4px 4px rgba(49, 77, 147, 0.8)',
    },
    green: {
      disabledColor: 'green.100',
      bgColor: 'green.400',
      hoverColor: 'green.700',
      pressedBoxShadow: 'inset 4px 4px 4px #2E7E33',
    },
    pink: {
      disabledColor: '#CDD3CE',
      bgColor: 'pink.400',
      hoverColor: 'pink.700',
      pressedBoxShadow: 'inset 4px 4px 4px #B7577B',
    },
    yellow: {
      disabledColor: 'yellow.100',
      bgColor: 'yellow.400',
      hoverColor: 'yellow.700',
      pressedBoxShadow: 'inset 4px 4px 4px #C19833',
    },
  }

  const { disabledColor, bgColor, hoverColor, pressedBoxShadow } =
    buttonTypes[variant] ?? buttonTypes.blue

  return (
    <>
      <Button
        type={type}
        minW='113px'
        minH='45px'
        fontSize={20}
        fontWeight={700}
        textColor={'white'}
        transition='all 0.3ms ease-in-out'
        borderRadius='5px'
        backgroundColor={bgColor}
        mb={mb}
        boxShadow='3px 3px 4px rgba(137, 150, 183, 0.2)'
        isDisabled={disabled}
        onClick={onClick}
        _hover={{
          backgroundColor: hoverColor,
          boxShadow: ' 3px 3px 4px rgba(137, 150, 183, 0.2)',
        }}
        _focus={{
          backgroundColor: hoverColor,
          boxShadow: ' 3px 3px 4px rgba(137, 150, 183, 0.2)',
        }}
        _active={{
          backgroundColor: hoverColor,
          boxShadow: pressedBoxShadow,
        }}
        _disabled={{
          backgroundColor: disabledColor,
          pointerEvents: 'none',
        }}
      >
        {children}
      </Button>
    </>
  )
}
