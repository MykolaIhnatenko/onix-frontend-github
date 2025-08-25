import TestimonialsCard from 'components/TestimonialsSlider/components/TestimonialsCard';
import Icon from '../../../assets/icon';

const testimonialsSliderData = [
  {
    id: 1,
    content: (
      <TestimonialsCard
        text="Post-refactoring, the codebase became maintainable and scalable, leading to a 30%
         reduction in bug reports related to legacy code problems. Through proactive bug fixing,
         the number of critical post-launch issues was reduced by 35%, resulting in a smooth
         UX and fewer support requests."
        name="Ryan Rosenbaum"
        position="CPO, Phlex Sports Co"
        logo={
          <Icon.IconTestimonialsPhlex className="w-[105px] h-[39px] screen-md:w-[81px] screen-md:h-[31px]" />
        }
      />
    ),
  },
  {
    id: 2,
    content: (
      <TestimonialsCard
        text="Onix's work improved user engagement and functionality and reduced the number
         of reported bugs and downtime. The team was reliable and responsive, managed deadlines
         effectively, and aligned with the expectations."
        name="Yaneev Lanis"
        position="Founder, Secret Flights Ltd"
        logo={
          <Icon.IconTestimonialsSecretFlights className="w-[160px] h-[30px] screen-md:w-[146px] screen-md:h-[27px]" />
        }
      />
    ),
  },
  {
    id: 3,
    content: (
      <TestimonialsCard
        text="We hired them to do a full website/web app overhaul, including documentation,
         development, design, and testing. They always went above and beyond and really
         viewed themselves as an extension of our company's team."
        name="Jonah Fialkow"
        position="CEO, Bracketology, LLC"
        logo={
          <Icon.IconTestimonialsBracketology className="w-[153px] h-[36px] screen-md:w-[125px] screen-md:h-[30px]" />
        }
      />
    ),
  },
  {
    id: 4,
    content: (
      <TestimonialsCard
        text="We needed a new website that would automate most of the backend tasks. Onix
         offered a very thorough description of what they were going to do and a competitive
         budget. They delivered a very sleek and easy-to-navigate website within budget."
        name="Heberto Limas-Villers"
        position="President, Colorado Sports Video"
        logo={
          <Icon.IconTestimonialsColoradoSports className="w-[144px] h-[41px] screen-md:w-[106px] screen-md:h-[30px]" />
        }
      />
    ),
  },
  {
    id: 5,
    content: (
      <TestimonialsCard
        text="They took the time to make suggestions to improve my project. They are very
         talented and worked quickly to achieve my desired outcomes. When requesting
         further changes, they were very helpful and took on board what I was saying."
        name="James Harrison"
        position="CEO, Blueberry Bagel Publishing"
        logo={
          <Icon.IconTestimonialsBlueberryBagel className="w-[108px] h-[56px] screen-md:w-[65px] screen-md:h-[35px]" />
        }
      />
    ),
  },
  {
    id: 6,
    content: (
      <TestimonialsCard
        text="Onix has successfully reduced the number of issues in Crashlytics and
         improved the app's stability, earning positive feedback from end customers.
         The level of communication felt as though they were an extension of our team."
        name="Peter Altholz"
        position="CEO, Bar Crawl Nation LLC"
        logo={
          <Icon.IconTestimonialsBarCrawlNation className="w-[160px] h-[54px] screen-md:w-[81px] screen-md:h-[27px]" />
        }
      />
    ),
  },
];

export default testimonialsSliderData;
