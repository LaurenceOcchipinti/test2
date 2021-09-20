import React from 'react';
import Job from '../Job';
import './jobs.scss'


const Jobs = () => {
return (

    <div className="job">

    
         <div className="bloc1">
                <div className="div1">
                    <Job className="FullTimeSales" title="Associate - Sydney Boutique" contactType="CDI" country="Australie" city="Sydney" />
                </div>          

                <div className="div2">
                    <Job className="Agent de sécurité" title="Pantin" contactType="CDI" country="France" city="Pantin"/>
              </div>

                <div className="div3">
                    <Job className="Responsable d'atelier" title=" " contactType="CDD" country="France" city="Paris"/>
                </div>
          </div>




          <div className="bloc2">
                <div className="div4">          
                    <Job className="Chef de projets" title=" " contactType="CDD" country="France" city="Paris"/>
                </div>

                <div className="div5"> 
                    <Job className="Développeur React.js" title=" " contactType="CDI" country="France" city="Paris"/>
                </div>

                <div className="div6"> 
                    <Job className="Sales Associate Stokholm" title=" " contactType="CDI" country="Suède" city="Stokholm"/>
                </div>   
          </div>



          <div className="bloc3">
                <div className="div7"> 
                  <Job className="Vendeur" title="Crans Montana " contactType="CDI" country="Crans Montana" city="Stokholm"/>
                </div>
          
                <div className="div8">  
                  <Job className="CRM & Data Quality Analyst" title="Crans Montana" contactType="CDI" country="USA" city="New York"/>
                </div>

                <div className="div9">  
                  <Job className="Infirmier" title=" " contactType="CDI" country="France" city="Pantin"/>
                </div>
          </div>
   

</div>

)


}


export default Jobs;
