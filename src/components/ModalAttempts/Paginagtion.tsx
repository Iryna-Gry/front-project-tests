import Pagination from 'react-bootstrap/Pagination'
import { LanguageTopicAttempt } from 'src/types/types'

type PaginationStateProps = {
  attempts: LanguageTopicAttempt[]
}

export const PaginationState: React.FC<PaginationStateProps> = ({
  attempts,
}) => {
  const active = 1
  const items = []
  for (let number = 1; number <= Math.ceil(attempts.length / 10); number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    )
  }
  return (
    <div>
      <Pagination size='sm'>{items}</Pagination>
    </div>
  )
}
