import { useState } from 'react'

import { reverse } from './helpers'
import { NameLength } from './components/NameLength'
import { NameReversed } from './components/NameReversed'
import { Title } from './components/Title'
import './styles.css'

export default function App() {
  const [name, setName] = useState('Nicolas')

  return (
    <div className="app">
      <Title name={name}/>
      <NameLength name={name} length={name.length}/>
      <NameReversed name={name} fun={reverse(name)}/>
    </div>
  )
}
