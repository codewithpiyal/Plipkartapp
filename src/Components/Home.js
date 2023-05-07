import React from 'react';
import Forma from './Forma';
import Image from './Image';


function Home() {
  return (
    < div className="d-flex">
     <div className='left  col-lg-6 '>
     <Forma/>
     </div>
       <Image/>
    </div>
  )
}

export default Home