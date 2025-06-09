import PageContainer from '../PageContainer/PageContainer';
import MainTitle from '../MainTitle/MainTitle';
import ContentText from '../ContentText/ContentText';
import { IOurInsights } from './interfaces/interfaces';
import { getOurInsightsContent } from '../../utils/blogsHelpers';
import OurInsightsBlogs from './components/OurInsightsBlogs';

function OurInsights({
  pageBlogs,
  text,
  title = 'Our Insights',
  classes,
}: IOurInsights) {
  return (
    <PageContainer
      tag="section"
      className={`py-[80px] overflow-hidden relative ${classes?.section || ''}`}
    >
      <MainTitle tag="h2" className={`pb-[40px] screen-md:pb-[20px] ${classes?.title || ''}`}>
        {title}
      </MainTitle>
      {text && (
        <ContentText tag="p" marginAbsent className={`pb-[40px] screen-lg:pb-[30px] ${classes?.text || ''}`}>
          {text}
        </ContentText>
      )}
      <OurInsightsBlogs
        blogs={getOurInsightsContent(pageBlogs)}
        classes={classes}
      />
    </PageContainer>
  );
}

export default OurInsights;
