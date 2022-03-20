import React from 'react';
import Article from './Article';

function Section() {
  const arr = ['Blizzards', 'Calm', 'Dusty_Road', 'Escape', 'Payday', 'Retreat', 'Seasonal', 'Vespers'];

  return (
    <section>
      {arr.map((data, idx)=>{
        return <Article key={idx} data={data} />
      })}
    </section>
  )
}

export default Section;