import React, { useState } from 'react'
import { FormikProps, useFormik } from 'formik'
import { AiOutlineEye } from 'react-icons/ai'
import { RiEyeCloseLine } from 'react-icons/ri'
import {
  InputGroup,
  InputRightElement,
  Flex,
  Box,
  Text,
} from '@chakra-ui/react'
import { CustomButton, InputBox } from '../index'
import { validateEmail, validatePassword } from '../../services'
import { logInUser } from '../../redux/user/operations/operations'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import type { UserLogInRequest } from '../../types/types'
import { AppDispatch } from '../../redux/store'

export const LoginForm = ({
  isOnLogin,
}: {
  isOnLogin: React.MouseEventHandler
}) => {
  const [showPassword, setShowPassword] = useState(false)
  const [isValid, setIsValid] = useState({
    email: false,
    password: false,
  })
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  const handleTogglePassword = () => setShowPassword(!showPassword)

  const formik: FormikProps<UserLogInRequest> = useFormik<UserLogInRequest>({
    initialValues: {
      email: '',
      password: '',
    },
    validate: values => {
      const errors: UserLogInRequest = formik.initialValues
      const errorEmail = validateEmail(values)
      if (!errorEmail) {
        setIsValid(prevState => ({ ...prevState, email: true }))
      } else {
        setIsValid(prevState => ({ ...prevState, email: false }))
        errors.email = errorEmail
      }
      const errorPassword = validatePassword(values)
      if (!errorPassword) {
        setIsValid(prevState => ({ ...prevState, password: true }))
      } else {
        setIsValid(prevState => ({ ...prevState, password: false }))
        errors.password = errorPassword
      }
      return errors
    },
    onSubmit: values => {
      dispatch(
        logInUser({
          email: values.email,
          password: values.password,
        }),
      )
      formik.resetForm()
      navigate('/welcome', { replace: true })
    },
  })
  return (
    <Flex
      bgGradient='linear(to-br, #DCE6FF 8.7%, #FFFFFF 123.75%)'
      px='7'
      py='8'
      rounded='md'
      w='460px'
      mb='13vh'
    >
      <Box w='100%' textAlign='center'>
        <form onSubmit={formik.handleSubmit}>
          <InputGroup pos='relative' display='block'>
            <InputBox
              formik={formik}
              placeholder='Enter your email'
              isValid={isValid.email}
              name='email'
              type='email'
            />
            <Box
              h={4}
              my='2px'
              ml={2}
              textAlign='left'
              fontSize={12}
              textColor='red.400'
            >
              {formik.errors.email &&
                formik.touched.email &&
                formik.errors.email}
            </Box>
          </InputGroup>

          <InputGroup pos='relative' display='block'>
            <InputBox
              formik={formik}
              placeholder='Enter your password'
              isValid={isValid.password}
              name='password'
              type={showPassword ? 'text' : 'password'}
            />

            <InputRightElement
              pr='4'
              mt='0.5'
              as='button'
              type='button'
              onClick={handleTogglePassword}
              w='10'
              h='10'
              color='gray.400'
              cursor='pointer'
            >
              {showPassword ? (
                <AiOutlineEye size={30} />
              ) : (
                <RiEyeCloseLine size={30} />
              )}
            </InputRightElement>

            <Box
              h={10}
              ml={2}
              my={1}
              textAlign='left'
              fontSize={12}
              textColor='red.400'
            >
              {formik.errors.password &&
                formik.touched.password &&
                formik.errors.password}
            </Box>
          </InputGroup>

          <CustomButton
            type='submit'
            mb='6'
            disabled={!isValid.email || !isValid.password}
          >
            Sign in
          </CustomButton>
        </form>

        <div>
          <Text
            alignItems='baseline'
            justifyItems='center'
            mb={1}
            lineHeight={1.375}
            textColor='blue.900'
            fontSize={12}
          >
            Don’t have an acount yet?
            <button
              type='button'
              style={{ cursor: 'pointer' }}
              onClick={isOnLogin}
            >
              <Text as='u' fontWeight='700' pl='3px' color='blue.900'>
                Create your account here
              </Text>
            </button>
          </Text>

          <Text lineHeight='1.37' color='blue.900' fontSize='14px'>
            It will take less than two minutes.
          </Text>
        </div>
      </Box>
    </Flex>
  )
}
