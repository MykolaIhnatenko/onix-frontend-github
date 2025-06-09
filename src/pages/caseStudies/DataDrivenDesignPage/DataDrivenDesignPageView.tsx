import ContactUs from './components/ContactUs';
import DataDrivenDesignExamples from './components/DataDrivenDesignExamples';
import DataDrivenDesignIntro from './components/DataDrivenDesignIntro';
import DataDrivenDesignSolution from './components/DataDrivenDesignSolution';
import InterFont from '../../../fonts/InterFont';
import IPageStatus from 'interfaces/IPageStatus';
import DataDrivenDesignLetsStarted from './components/DataDrivenDesignLetsStarted';

function DataDrivenDesignPageView({ saleUrl }: IPageStatus) {
  return (
    <div className={InterFont.className}>
      <DataDrivenDesignIntro />
      {!saleUrl && (
        <ContactUs>
          If you are interested in data-driven improvements to your
          website or application, please don’t hesitate to contact Onix.
          We may discuss the unique needs of your organization and suggest
          ways to meet them using data-driven design.
        </ContactUs>
      )}
      <DataDrivenDesignSolution />
      {!saleUrl && (
        <ContactUs>
          Do you need a product redesign? We can perform a thorough
          UX review of your existing system using more methods,
          formulate data-driven recommendations, implement them to improve
          its performance, or create an appealing brand-new UI for your
          website or mobile app.
        </ContactUs>
      )}
      <DataDrivenDesignExamples />
      {!saleUrl && (
        <ContactUs>
          Do you wish to transform your business through the power of UX metrics?
          Do you feel it’s time to redesign your product? Are you disappointed
          with recent changes to its look-and-feel? Are the cart abandonment
          or user churn rates growing lately?
        </ContactUs>
      )}
      <DataDrivenDesignLetsStarted saleUrl={saleUrl} />
    </div>
  );
}

export default DataDrivenDesignPageView;
