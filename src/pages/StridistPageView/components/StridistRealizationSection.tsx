import realizationContent from '../data/realizationContent';
import StridistRealizationBlock from './StridistRealizationBlock';

function StridistRealizationSection() {
  return (
    <section>
      <div className="realizationContainer stridistContainer">
        <p className="technicalTitle">
          Taking into account the client&apos;s requirements, Onix has developed a comprehensive platform where
          fitness and nutrition experts can offer personalized coaching experience, fully control their business,
          and help their clients reach desired results.
        </p>
        <div>
          {realizationContent.map(({
            id, title, content, imgSrc, imgWidth, imgHeight,
          }) => (
            <StridistRealizationBlock
              key={id}
              title={title}
              content={content}
              imgSrc={imgSrc}
              imgWidth={imgWidth}
              imgHeight={imgHeight}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StridistRealizationSection;
