import NetstatMainScreen from './components/NetstatMainScreen';
import NetstatIntro from './components/NetstatIntro';
import NetstatProduct from './components/NetstatProduct';
import NetstatDesigned from './components/NetstatDesigned';
import NetstatHelps from './components/NetstatHelps';
import NetstatWorks from './components/NetstatWorks';
import NetstatWorksScreens from './components/NetstatWorksScreens';
import NetstatPrice from './components/NetstatPrice';
import NetstatProspects from './components/NetstatProspects';
import IPageStatus from '../../interfaces/IPageStatus';

import netstatStyles from './sass/netstat.module.scss';

function NetstatPageView({ saleUrl }: IPageStatus) {
  return (
    <div className={netstatStyles.netstat}>
      <NetstatMainScreen saleUrl={saleUrl} />
      <NetstatIntro />
      <NetstatProduct />
      <NetstatDesigned />
      <NetstatHelps />
      <NetstatWorks />
      <NetstatWorksScreens />
      <NetstatPrice />
      <NetstatProspects saleUrl={saleUrl} />
    </div>
  );
}

export default NetstatPageView;
