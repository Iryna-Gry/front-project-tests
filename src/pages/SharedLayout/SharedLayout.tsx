import { Logo, UserMenu } from '../../components'
import { selectIsLoggedIn } from '../../redux/user/slice/slice'
import { Box, Flex, Spacer } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
//import { AuthNav } from 'components/AuthNav/AuthNav';
import React from 'react'
import { Outlet } from 'react-router-dom'

export const SharedLayout: React.FC = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  return (
    <>
      <Box as='header' className='container' my={5} mx='auto'>
        <Flex>
          <Logo />
          <Spacer />
          {/*{isLoggedIn ? <UserMenu /> : <AuthNav />}*/}
          {isLoggedIn && <UserMenu />}
        </Flex>
      </Box>
      <Outlet />
    </>
  )
}
