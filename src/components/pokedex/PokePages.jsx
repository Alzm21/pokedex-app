import React from 'react'

const PokePages = ({page, setPage, total}) => {
    const handlePrev = (num) => {
        if (page > num) {
            setPage(page - num)
        } else {
            setPage(total)
        }
    }
    const handleNext = (num) => {
        if (page <= total - num) {
            setPage(page + num)
        } else {
            setPage(1)
        }
    }
  return (
    <div>
        <button onClick={() => {handlePrev(10)}}>{'<'}</button>
        <span>{page}/{total}</span>
        <button onClick={() => {handleNext(10)}}>{'>'}</button>
    </div>
  )
}

export default PokePages