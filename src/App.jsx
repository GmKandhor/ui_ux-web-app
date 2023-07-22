import React from 'react';
import styles from './style'
import './App.css'

import { Navbar, Hero , Stats, Business, Billing  , Clients, CTA , Footer,CardDeal,Testimonials} from './components'
const  App = ()=> (
  <>
  <div className='bg-[#000] w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
  </div>

  <div className={`bg-[#000] ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
      <Hero />
    </div>
  </div>
  <div className={`bg-[#000]  ${styles.paddingX} ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
     <Stats />
     <Business />
     <Billing  />
     <CardDeal />
     <Testimonials  />
     <Clients />
     <CTA  />
     <Footer />
    </div>
  </div>
  </>
)

export default App
