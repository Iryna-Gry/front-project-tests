import { Input } from '@chakra-ui/react'
import { UserLogInRequest, UserSignUpRequest } from '../../types/types'
import { FormikProps } from 'formik'

type InputBoxProps = {
  formik: FormikProps<UserLogInRequest> | FormikProps<UserSignUpRequest>
  placeholder: string
  isValid: boolean
  name: 'email' | 'password' | 'firstName' | 'lastName'
  type: string
}

export const InputBox = ({
  formik,
  placeholder,
  isValid,
  name,
  type = 'text',
}: InputBoxProps) => {
  const inputValues: UserSignUpRequest | UserLogInRequest = formik.values

  return (
    <Input
      pl='6'
      py='2.5'
      bg='white'
      border={
        formik.dirty &&
        inputValues[name as keyof typeof inputValues] &&
        !isValid
          ? '1px solid #E0729B'
          : 'none'
      }
      color='blue.900'
      boxShadow='inset 1px 1px 1px rgba(92, 129, 225, 0.32)'
      size='md'
      type={type}
      name={name}
      required
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      placeholder={placeholder}
      _placeholder={{ color: 'gray.400', fontSize: '20px' }}
      value={inputValues[name as keyof typeof inputValues]}
    />
  )
}
