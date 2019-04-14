import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

const Filter = ({ isOpenOnly, handleIsOpenChange }) => {
  const checkboxClasses = ['checkbox']
  if (isOpenOnly) {
    checkboxClasses.push('checkbox--checked')
  }
  return (
    <div className='filters-wrapper'>
      <div className='filter'>
        <div
          className={checkboxClasses.join(' ')}
          onClick={handleIsOpenChange}
        >
          {isOpenOnly && <i className='fas fa-check' />}
        </div>
        <span>Open only</span>
      </div>
    </div>
  )
}

Filter.propTypes = {
  isOpenOnly: PropTypes.bool.isRequired,
  handleIsOpenChange: PropTypes.func.isRequired
}

Filter.defaultProps = {
  isOpenOnly: false,
  handleIsOpenChange: () => {}
}

export default Filter
