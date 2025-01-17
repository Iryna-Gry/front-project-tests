import { Flex, Stack, Text, Icon, Box } from '@chakra-ui/react'
import { CustomButton, Section } from '../../components'
import arrowSvg from '../../assets/img/sprite.svg'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  resetQuiz,
  selectQuestions,
  selectScore,
} from '../../redux/questions/slice/slice'

const percentCorrectAnswers = 80

export const ResultsPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const score = useSelector(selectScore)
  const questionsLength = useSelector(selectQuestions).length
  const testResult = Math.round((Number(score) * 100) / Number(questionsLength))

  useEffect(() => {
    const currentLocation = window.location.pathname

    window.addEventListener('popstate', () => {
      if (currentLocation === '/front-project-tests/results') {
        navigate('/welcome')
      }
    })

    return () => {
      window.removeEventListener('popstate', () => {
        if (currentLocation === '/front-project-tests/results') {
          navigate('/welcome')
        }
      })
    }
  }, [navigate])

  return (
    <Section>
      <Stack textAlign='center' pt='80px' spacing='30px' alignItems='center'>
        <Text
          color='blue.400'
          fontWeight={700}
          fontSize='22px'
          lineHeight='26px'
        >
          Test finished!
        </Text>
        {testResult > percentCorrectAnswers ? (
          <>
            <Text
              color='green.700'
              fontWeight={700}
              fontSize='24px'
              lineHeight='29px'
            >
              Congratulaction!
            </Text>

            <Text
              color='blue.400'
              fontWeight={700}
              fontSize='20px'
              lineHeight='24px'
            >
              You have passed the test <br /> and received {''}
              <Text
                as='span'
                color='green.700'
                fontWeight={700}
                fontSize='30px'
                lineHeight='36px'
              >
                {' '}
                {testResult}{' '}
              </Text>
              points out of
              <Text
                as='span'
                fontWeight={700}
                fontSize='30px'
                lineHeight='36px'
              >
                {' '}
                100
              </Text>
            </Text>
            <Text color='blue.900' lineHeight='19px'>
              80 points is the passing score,
              <br /> but you can improve your result any time.
            </Text>
          </>
        ) : (
          <>
            <Text
              color='pink.400'
              fontWeight={700}
              fontSize='24px'
              lineHeight='29px'
            >
              Unfortunately, you did not pass the test.
            </Text>

            <Text
              color='blue.400'
              fontWeight={700}
              fontSize='20px'
              lineHeight='24px'
            >
              You have received{''}
              <Text
                as='span'
                color='pink.400'
                fontWeight={700}
                fontSize='30px'
                lineHeight='36px'
              >
                {' '}
                {testResult}{' '}
              </Text>
              points out of
              <Text
                as='span'
                fontWeight={700}
                fontSize='30px'
                lineHeight='36px'
              >
                {' '}
                100
              </Text>
            </Text>
            <Text color='blue.900' lineHeight='19px'>
              80 points is the passing score. <br /> Don’t worry, you can try
              again any time.
            </Text>
          </>
        )}

        <Flex pt='27px' gap='130px'>
          <Box>
            <Icon
              mr='22px'
              width='66.5px'
              height='8px'
              viewBox='0 0 67 8'
              fill='blue.900'
              alignSelf='center'
              transform='rotate(180deg)'
            >
              <use href={arrowSvg + '#icon-bigArrow'}></use>
            </Icon>
            <CustomButton
              disabled={false}
              variant='pink'
              onClick={() => {
                dispatch(resetQuiz())
                navigate('/questions')
              }}
            >
              Try Again
            </CustomButton>
          </Box>
          <Box>
            <CustomButton
              disabled={false}
              onClick={() => {
                dispatch(resetQuiz())
                navigate('/welcome')
              }}
            >
              Finish
            </CustomButton>
            <Icon
              ml='22px'
              width='66.5px'
              height='8px'
              viewBox='0 0 67 8'
              fill='blue.900'
              alignSelf='center'
            >
              <use href={arrowSvg + '#icon-bigArrow'}></use>
            </Icon>
          </Box>
        </Flex>
      </Stack>
    </Section>
  )
}
