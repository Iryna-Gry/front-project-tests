import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FormikProps, useFormik } from 'formik'
import {
  InputGroup,
  InputRightElement,
  Flex,
  Box,
  Text,
} from '@chakra-ui/react'
import { InputBox, CustomButton, CustomTooltip } from '../index'
import { AiOutlineEye } from 'react-icons/ai'
import { ImInfo } from 'react-icons/im'
import { FaStarOfLife } from 'react-icons/fa'
import { RiEyeCloseLine } from 'react-icons/ri'
import {
  validateFirstName,
  validateLastName,
  validateEmail,
  validatePassword,
} from '../../services'
import { signUpUser } from '../../redux/user/operations/operations'
import { selectIsLoggedIn } from '../../redux/user/slice/slice'
import { useNavigate } from 'react-router-dom'
import { UserSignUpRequest } from '../../types/types'
import { AppDispatch } from '../../redux/store'

export const SignUpForm = ({
  isOnLogin,
}: {
  isOnLogin: React.MouseEventHandler<Element>
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [isValid, setIsValid] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  })
  const dispatch = useDispatch<AppDispatch>()

  const isLoggedIn = useSelector(selectIsLoggedIn)
  const navigate = useNavigate()
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/welcome')
    }
  }, [isLoggedIn, navigate])

  const handleTogglePassword = () => setShowPassword(!showPassword)

  const formik: FormikProps<UserSignUpRequest> = useFormik<UserSignUpRequest>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validate: values => {
      const errors: UserSignUpRequest = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      }
      const errorFirstName = validateFirstName(values)
      if (!errorFirstName) {
        setIsValid(prevState => ({ ...prevState, firstName: true }))
      } else {
        setIsValid(prevState => ({ ...prevState, firstName: false }))
        errors.firstName = errorFirstName
      }
      const errorLastName = validateLastName(values)
      if (!errorLastName) {
        setIsValid(prevState => ({ ...prevState, lastName: true }))
      } else {
        setIsValid(prevState => ({ ...prevState, lastName: false }))
        errors.lastName = errorLastName
      }
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
        signUpUser({
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          password: values.password,
        }),
      )
      formik.resetForm()
    },
  })
  return (
    <Flex
      bgGradient='linear(to-br, #DCE6FF 8.7%, #FFFFFF 123.75%)'
      px='5'
      py='18px'
      rounded='md'
      w='460px'
      mb='3vh'
    >
      <Box w='100%' textAlign='center'>
        <form onSubmit={formik.handleSubmit}>
          <InputGroup pos='relative' display='block'>
            <Flex gap='10px'>
              <Box pos='relative' flexGrow='1'>
                <InputBox
                  type='text'
                  formik={formik}
                  placeholder='Enter your first name'
                  isValid={isValid.firstName}
                  name='firstName'
                />
                <Box pos='absolute' top='6px' right='6px'>
                  <FaStarOfLife color='red' size={5} />
                </Box>
              </Box>

              <Flex align='center'>
                <CustomTooltip textTooltip='First name will be used for greeting and on the certificate of test completion.'>
                  <span>
                    <ImInfo size={20} color='rgba(17, 31, 66, 0.56)' />
                  </span>
                </CustomTooltip>
              </Flex>
            </Flex>
            <Box
              h={4}
              my='2px'
              ml={2}
              textAlign='left'
              fontSize={12}
              textColor='red.400'
            >
              {formik.errors.firstName &&
                formik.touched.firstName &&
                formik.errors.firstName}
            </Box>
          </InputGroup>
          <InputGroup pos='relative' display='block'>
            <Flex gap='10px'>
              <Box pos='relative' flexGrow='1'>
                <InputBox
                  type='text'
                  formik={formik}
                  placeholder='Enter your last name'
                  isValid={isValid.lastName}
                  name='lastName'
                />
                <Box pos='absolute' top='6px' right='6px'>
                  <FaStarOfLife color='red' size={5} />
                </Box>
              </Box>
              <Flex align='center'>
                <CustomTooltip textTooltip='Last name will be used on the certificate of test completion.'>
                  <span>
                    <ImInfo size={20} color='rgba(17, 31, 66, 0.56)' />
                  </span>
                </CustomTooltip>
              </Flex>
            </Flex>
            <Box
              h={4}
              my='2px'
              ml={2}
              textAlign='left'
              fontSize={12}
              textColor='red.400'
            >
              {formik.errors.lastName &&
                formik.touched.lastName &&
                formik.errors.lastName}
            </Box>
          </InputGroup>
          <InputGroup pos='relative' display='block'>
            <Flex gap='10px'>
              <Box pos='relative' flexGrow='1'>
                <InputBox
                  formik={formik}
                  placeholder='Enter your email'
                  isValid={isValid.email}
                  name='email'
                  type='email'
                />
                <Box pos='absolute' top='6px' right='6px'>
                  <FaStarOfLife color='red' size={5} />
                </Box>
              </Box>
              <Flex align='center'>
                <CustomTooltip textTooltip='Email will be used for your login and notifications. We don’t send spam.'>
                  <span>
                    <ImInfo size={20} color='rgba(17, 31, 66, 0.56)' />
                  </span>
                </CustomTooltip>
              </Flex>
            </Flex>
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
            <Flex gap='10px'>
              <Box pos='relative' flexGrow='1'>
                <InputBox
                  formik={formik}
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Enter your password'
                  isValid={isValid.password}
                  name='password'
                />
                <Box pos='absolute' top='6px' right='6px'>
                  <FaStarOfLife color='red' size={5} />
                </Box>

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
              </Box>
              <Flex align='center'>
                <CustomTooltip textTooltip='Password must be at least 8 symbols long and contain upper and lowercase Latin letters, digits and at least one special character.'>
                  <span>
                    <ImInfo size={20} color='rgba(17, 31, 66, 0.56)' />
                  </span>
                </CustomTooltip>
              </Flex>
            </Flex>
            <Box
              h={4}
              my='2px'
              ml={2}
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
            mb='7'
            disabled={
              !formik.dirty ||
              !isValid.firstName ||
              !isValid.lastName ||
              !isValid.email ||
              !isValid.password
            }
          >
            Sign up
          </CustomButton>
        </form>

        <div>
          <Text
            alignItems='baseline'
            justifyContent='center'
            mb={1}
            lineHeight={1.375}
            textColor='blue.900'
            fontSize={12}
          >
            Have an account already?
            <button
              type='button'
              style={{ cursor: 'pointer' }}
              onClick={isOnLogin}
            >
              <Text as='u' fontWeight='700' pl='3px' color='blue.900'>
                Sign in here
              </Text>
            </button>
          </Text>
        </div>
      </Box>
    </Flex>
  )
}
