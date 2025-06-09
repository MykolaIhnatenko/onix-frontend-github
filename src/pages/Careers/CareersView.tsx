import React from 'react';

import HotJobs from './components/HotJobs';
import WhatWeOfferBlock from './components/WhatWeOfferBlock';
import ICareersView from './interfaces/ICareersView';
import MainSectionCareers from './components/MainSectionCareers';
import HotVacantion from './components/HotVacantion';

function CareersView({
  departmentList, setChosenDepartment, chosenDepartment, careerList, hotJobs,
}: ICareersView) {
  return (
    <div>
      <MainSectionCareers />
      {hotJobs.length > 0 && <HotVacantion hotJobs={hotJobs} />}
      {careerList.length > 0 && (
        <HotJobs
          departmentList={departmentList}
          chosenDepartment={chosenDepartment}
          setChosenDepartment={setChosenDepartment}
          careerList={careerList}
        />
      )}
      <WhatWeOfferBlock />
    </div>
  );
}

export default CareersView;
