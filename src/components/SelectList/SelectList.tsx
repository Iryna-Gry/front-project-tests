import React from 'react'
import { List } from '@chakra-ui/react'
import { ListedItem } from '../index'
import { LanguageT } from 'src/types/types'

type SelectedListProps = {
  languages: LanguageT[]
}
export const SelectList: React.FC<SelectedListProps> = ({ languages }) => {
  return (
    <List display='flex' mx='auto' gap='7' flexWrap='wrap'>
      {languages.map(item => (
        <ListedItem
          language={item}
          key={item.id}
          id={item.id}
          icon={item.icon}
        />
      ))}
    </List>
  )
}
