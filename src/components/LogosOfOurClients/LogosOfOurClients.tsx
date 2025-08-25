import logosList from 'components/LogosOfOurClients/data/logosList';
import PageContainer from 'components/PageContainer/PageContainer';
import LogosOfOurClientsMobile from 'components/LogosOfOurClients/components/LogosOfOurClientsMobile';
import VRARContent from 'components/VRARContent/VRARContent';

function LogosOfOurClients() {
  return (
    <PageContainer className="bg-white py-[80px] screen-lg:py-[60px] screen-md:py-[40px]">
      <div className="hidden min-xxl:flex flex-col items-center gap-[40px_75px]">
        {logosList.map((row, rowIndex) => (
          <div
            key={[rowIndex, 'rowIndex'].join('_')}
            className={`flex justify-center gap-x-[75px] flex-wrap ${rowIndex === 1 ? '!gap-x-[20px]' : ''}`}
          >
            {row.map((Logo, index) => (
              <VRARContent key={[index, 'itemKey'].join('_')} className="flex items-center">
                {Logo}
              </VRARContent>
            ))}
          </div>
        ))}
      </div>
      <LogosOfOurClientsMobile />
    </PageContainer>
  );
}

export default LogosOfOurClients;
