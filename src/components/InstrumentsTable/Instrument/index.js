import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

const Instrument = ({ instrumentID: id, name, isOpen }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{isOpen
        ? <span className='status--opened'>Open</span>
        : <span className='status--closed'>Closed</span>
      }</td>
    </tr>
  )
}

Instrument.propTypes = {
  instrumentID: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired
}

Instrument.defaultProps = {
  instrumentID: 'W/o id',
  name: 'W/o name',
  isOpen: false
}

export default Instrument
