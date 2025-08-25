import React from 'react';

import HotJobs from './components/HotJobs';
import WhatWeOfferBlock from './components/WhatWeOfferBlock';
import ICareersView from './interfaces/ICareersView';
import MainSectionCareers from './components/MainSectionCareers';

function CareersView({
  departmentList, setChosenDepartment, chosenDepartment, careerList,
}: ICareersView) {
  return (
    <div>
      <MainSectionCareers />
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
