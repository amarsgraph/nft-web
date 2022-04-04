
import StepSidebar from '../../../components/collections/steps/stepsidebar';
import StepTheme from '../../../components/collections/steps/steptheme';
import StepCollectionInfo from '../../../components/collections/steps/stepcollectioninfo';
import StepCollectionThumbnail from '../../../components/collections/steps/stepcollectionthumbnail';
import StepCollectionAssets from '../../../components/collections/steps/stepcollectionassets';
import StepCustomizeStyle from '../../../components/collections/steps/stepcustomizestyle';
import classes from '../../../public/collections/create/create.module.scss';


import React, { useState } from "react";

export default function Index() {
  const [page, setPage] = useState(3);
  const FormTitles = ["step 1", "step 2", "step 3", "step 4", "step 5"]
  const StepDisplay = () => {
    if (page === 0) {
      return <StepTheme />;
    } 
    else if (page === 1) {
      return <StepCollectionInfo  />;
    } 
    else if (page === 2) {
      return <StepCollectionThumbnail  />;
    } 
    else if (page === 3) {
      return <StepCollectionAssets  />;
    } 
    else {
      return <StepCustomizeStyle />;
    }
  };
  return ( 
    <>  
       
        <div className={classes.progressbar}>
          <div className='container'>
            <div className={classes.progressInner}>
              <button className='btn btn-default'
                disabled={page == 0}
                onClick={() => {
                  setPage((currPage) => currPage - 1);
                }}
              >
                Prev
              </button>
              
              <div className={`progress` + ' ' + classes.progress} >           
                <div className={`progress-bar bg-success` + ' ' + classes.progressBarbg} style={{ width: page === 0 ? "0%" : page === 1 ? "25%" : page === 2 ? "50%" : page === 3 ? "75%"  : "100%" }}></div>
                
              </div>

              <button className='btn btn-primary'
                onClick={() => {
                  if (page === FormTitles.length - 1) {
                    alert("Finished");
                    console.log("formData");
                  } else {
                    setPage((currPage) => currPage + 1);
                  }
                }}
              >
                {page === FormTitles.length - 1 ? "Submit" : "Next"}
              </button>
            </div>
          </div>          
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <StepSidebar />
            </div>
            <div className='col-md-9'>
              
              <div className='form'>

                {/* <div className='header'>
                  <h1>{FormTitles[page]}</h1>
                </div> */}
                <div className='boty'>
                  {StepDisplay()}
                </div>
                
                
              </div>
              {/* <StepTheme /> */}
               {/* <StepCollectionInfo /> 
              <StepCollectionThumbnail />
              <StepCollectionAssets />
              <StepCustomizeStyle/> */}
            </div>
          </div>
        </div>
      
        
    </>
  );
}
