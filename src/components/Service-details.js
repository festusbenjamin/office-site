import React from 'react'
import { BiCodeAlt, BiDesktop, BiStar } from 'react-icons/bi'
import { GiPaperClip } from 'react-icons/gi'
import '../components/service-details.css'

const Servicedetails = () => {
  return (
<div id='service-body' className="container-fluid py-5">
  <div className="container pt-5 pb-3">
    <div className="row">
      <div id='service-div' className="col-lg-3 col-md-6 mb-4">
        <div id='service-head' className="service-item text-center mb-2 py-5 px-4">
        <BiStar style={{color:'#FFD333', marginBottom:'2rem', padding: '0.5rem', border: '2px Solid #FFD333', fontSize:'5rem'}}/>
          <h5 className="mb-2">Concept</h5>
          <p className="m-0">Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore</p>
        </div>
      </div>
      <div id='service-div' className="col-lg-3 col-md-6 mb-4">
        <div id='service-head' className="service-item text-center mb-2 py-5 px-4">
        <BiDesktop style={{color:'#FFD333', marginBottom:'2rem', padding: '0.5rem', border: '2px Solid #FFD333', fontSize:'5rem'}}/>
          <h5 className="mb-2">Design</h5>
          <p className="m-0">Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore</p>
        </div>
      </div>
      <div id='service-div' className="col-lg-3 col-md-6 mb-4">
        <div id='service-head' className="service-item text-center mb-2 py-5 px-4">
        <BiCodeAlt style={{color:'#FFD333', marginBottom:'2rem', padding: '0.5rem', border: '2px Solid #FFD333', fontSize:'5rem'}}/>
          <h5 className="mb-2">Develop</h5>
          <p className="m-0">Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore</p>
        </div>
      </div>
      <div id='service-div' className="col-lg-3 col-md-6 mb-4">
        <div id='service-head' className="service-item text-center mb-2 py-5 px-4">
        <GiPaperClip style={{color:'#FFD333', marginBottom:'2rem', padding: '0.5rem', border: '2px Solid #FFD333', fontSize:'5rem'}}/>
          <h5 className="mb-2">Grow</h5>
          <p className="m-0">Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore.</p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Servicedetails