import {
  Icon,
  Flex,
  FormLabel,
  Text,
  useCheckbox,
  ScaleFade,
} from '@chakra-ui/react'

import LogoSvg from '../../assets/img/Logo.svg'
type InputProps = {
  type: string
  label: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  isChecked: boolean
}
export const CustomInput = ({ label, onChange, isChecked }: InputProps) => {
  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
    useCheckbox({
      'aria-label': label,
      isChecked: isChecked,
      onChange: onChange,
    })

  return (
    <FormLabel
      display='inline-flex'
      alignItems='center'
      cursor='pointer'
      mx='auto'
      {...htmlProps}
    >
      <input {...getInputProps()} hidden />
      <Flex
        alignContent='center'
        bgColor='white'
        minW={20}
        minH={20}
        w={20}
        h={20}
        mr={20}
        boxShadow='inset 1px 1px 1px rgba(92, 129, 225, 0.32)'
        {...getCheckboxProps()}
      >
        {state.isChecked && (
          <ScaleFade in={state.isChecked} initialScale={0.5}>
            <Icon
              width={3}
              height={3}
              color='blue.400'
              fill='transparent'
              stroke='currentColor'
            >
              <use href={LogoSvg + '#icon-check'}></use>
            </Icon>
          </ScaleFade>
        )}
      </Flex>
      <Text color='blue.600' {...getLabelProps()}>
        {label}
      </Text>
    </FormLabel>
  )
}
