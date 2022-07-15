import { useState } from 'react'

import { reverse } from './helpers'
import { NameLength } from './components/NameLength'
import { NameReversed } from './components/NameReversed'
import { Title } from './components/Title'
import './styles.css'

export default function App() {
  const defaultNames =  [
    'Noemi', 'John', 
    'Richard', 'Ning', 
    'Lorel', 'Hubert', 
    'Michele', 'Steve', 
    'Gift', 'Mirkan', 
    'Delia', 'Tom', 
    'Sam'
  ]

  const [names] = useState(defaultNames)
  const [name, setName] = useState('Nicolas')

  const onClickChange = () => {
   const newName = names[Math.floor((Math.random()*names.length))]
   setName(newName)
  }

  return (
    <div className="app">
      <div className='btn'>
      <button  onClick={onClickChange}>Change my Name!</button>
      </div>
      <Title name={name}/>
      <NameLength name={name} length={name.length}/>
      <NameReversed name={name} fun={reverse(name)}/>
    </div>
  )
}
