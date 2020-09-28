import React from 'react'

export default function SectionTitle({ title, subtitle, isLeft }) {
  const getRowClasses = () => {
    let classes = 'row '
    return isLeft ? classes : (classes += 'justify-content-center')
  }

  const getColClasses = () => {
    return isLeft ? 'col-lg-12' : 'col-lg-7'
  }
  return (
    <div class={getRowClasses()}>
      <div class={getColClasses()}>
        <div class='section-title'>
          <h1 class='title'>{title}</h1>
          <h2 class='subtitle'>{subtitle}</h2>
        </div>
      </div>
    </div>
  )
}
