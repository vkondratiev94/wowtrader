import React from 'react'
import './styles.scss'

import Instrument from './Instrument'

const InstrumentsTable = ({ items }) => {
  const renderItems = () => {
    return items.length ? items.map(item => <Instrument
      key={item.instrumentID}
      {...item}
    />) : (
      <tr>
        <td colSpan='3'>There is no available instruments</td>
      </tr>
    )
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>{renderItems()}</tbody>
    </table>
  )
}

export default InstrumentsTable
