import { useSelector } from 'react-redux'
import { Box, Flex, IconButton } from '@chakra-ui/react'
import { IoPersonCircleSharp } from 'react-icons/io5'
import { FiLogOut } from 'react-icons/fi'
import { selectUser } from '../../redux/user/slice/slice'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ModalUserLogOut } from '../index'

export const UserMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleTogleModal = () => {
    setIsModalOpen(!isModalOpen)
  }
  const { user } = useSelector(selectUser)

  return (
    <Flex alignItems='center' color='blue.400'>
      <IoPersonCircleSharp size={25} />
      <Box
        px={'12px'}
        transition='color 0.3s'
        textDecoration={'underline'}
        _hover={{
          color: 'blue.700',
          transition: 'color 0.3s',
        }}
      >
        <Link style={{ display: 'flex' }} to='/account'>
          Hello,{' '}
          <Flex fontWeight='bold'>{user.firstName + ' ' + user.lastName}</Flex>
        </Link>
      </Box>

      <IconButton
        aria-label=''
        marginLeft={'30px'}
        minWidth='32px'
        h='32px'
        variant='outline'
        _hover={{
          color: '#4270E8',
          filter: 'drop-shadow(3px 3px 4px rgba(137, 150, 183, 0.2))',
        }}
        _focus={{
          color: 'blue.700',
          boxShadow: ' 3px 3px 4px rgba(137, 150, 183, 0.2)',
        }}
        _active={{
          color: 'blue.700',
          boxShadow: 'inset 4px 4px 4px rgba(49, 77, 147, 0.8);',
        }}
        onClick={() => {
          setIsModalOpen(true)
        }}
        icon={<FiLogOut />}
      />

      {isModalOpen && <ModalUserLogOut onClose={handleTogleModal} />}
    </Flex>
  )
}
