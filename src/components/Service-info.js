import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BiStar, BiDesktop, BiCodeAlt } from 'react-icons/bi'
import { GiPaperClip } from 'react-icons/gi'


const Serviceinfo = () => {
  return (
    <div className="container-fluid pt-5 bg-dark">
  <div className="row px-xl-5 pb-3">
    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
      <div className="d-flex align-items-center mb-4" style={{padding: 30}}>
        <BiStar style={{color:'#FFD333', marginRight:'1.5rem', fontSize:'3rem'}}/>
        <h5 className="font-weight-semi-bold mr-0 text-white">Concept</h5>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
      <div className="d-flex align-items-center mb-4" style={{padding: 30}}>
      <BiDesktop style={{color:'#FFD333', marginRight:'1.5rem', fontSize:'3rem'}}/>
        <h5 className="font-weight-semi-bold m-0 text-white">Design</h5>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
      <div className="d-flex align-items-center mb-4" style={{padding: 30}}>
      <BiCodeAlt style={{color:'#FFD333', marginRight:'1.5rem', fontSize:'3rem'}}/>
        <h5 className="font-weight-semi-bold m-0 text-white">Develop</h5>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
      <div className="d-flex align-items-center mb-4" style={{padding: 30}}>
      <GiPaperClip style={{color:'#FFD333', marginRight:'1.5rem', fontSize:'3rem'}}/>
        <h5 className="font-weight-semi-bold m-0 text-white">Grow</h5>
      </div>
    </div>
  </div>
</div>
  )
}

export default Serviceinfo