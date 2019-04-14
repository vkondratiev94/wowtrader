import React, { useState, useEffect } from 'react'
import './styles/base.scss'

import instrumentsJson from './data/instruments.json'

import InstrumentsTable from './components/InstrumentsTable'
import Filter from './components/Filter'

const App = () => {
  const [isOpenOnly, setIsOpenOnly] = useState(false)
  const [instruments, setInstruments] = useState({
    all: [],
    opened: []
  })

  useEffect(() => {
    /*
      To prevent filtering after each isOpenOnly change
      I'm sorting instruments once on 'componentDidMount'
      into two separate arrays with 'all' and 'opened' items
    */
    const now = new Date().getTime()
    let instrumentsAll = instrumentsJson.map(item => ({
      ...item,
      isOpen: item.tradingHours.some(({ from, to }) => from <= now && to >= now)
    }
    ))
    const instrumentsOpened = instrumentsAll.filter(({ isOpen }) => isOpen)
    setInstruments({
      all: instrumentsAll,
      opened: instrumentsOpened
    })
  }, [])

  const items = isOpenOnly ? instruments.opened : instruments.all

  return (
    <main>
      <div className='container'>
        <Filter
          isOpenOnly={isOpenOnly}
          handleIsOpenChange={() => setIsOpenOnly(!isOpenOnly)}
        />
        <InstrumentsTable items={items} />
      </div>
    </main>
  )
}

export default App
