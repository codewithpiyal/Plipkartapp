import React from 'react';
import Forma from './Forma';
import Image from './Image';


function Home() {
  return (
    
    <div className='container mt-3'>
      <section className='d-flex justify-content-between'>
      <div className='left_data mt-3' style={{width:"100%"}}>
      <Forma/>
      </div>
      <div className='right_data mt-3' style={{width:"100%"}}>
      <Image/>
      </div>
      </section>
    </div>
  )
}

export default Home