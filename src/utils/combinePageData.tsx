import Link from 'next/link';

import { IData } from '../pages/CombinedPage/interfaces/IData';
import videoSectionContent from '../pages/CombinedPage/data/videoSectionContent';
import imagesData from '../pages/CombinedPage/data/imagesData';
import cardsData from '../pages/CombinedPage/data/cardsData';
import cards from '../pages/CombinedPage/data/cards';

const PATH = process.env.NEXT_PUBLIC_BASE_URL as string;

const getVideoSectionContent = (path: string) => [
  { description: 'Industry', className: 'industry' },
  { description: 'Team size', className: 'teamSize' },
  { description: 'Location', className: 'location' },
  { description: 'Project duration', className: 'projectDuration' },
].map(({ description, className }, index) => ({
  id: index,
  title: videoSectionContent[path][index],
  description,
  className,
}));

const getImages = (path: string) => {
  const basePath = '/static/images/Pages/CombinedPage';
  const mainSectionPath = '/mainSection';
  const ourSolutionsPath = '/ourSolutionsSection';
  const resultPath = '/resultSection';

  return {
    mainBackgroundMobile: {
      src: `${basePath}${imagesData[path]?.fileNameKey}${mainSectionPath}${imagesData[path]?.fileNames[0]}`,
      alt: imagesData[path]?.mainBackgroundAlt,
    },
    mainBackgroundTablet: {
      src: `${basePath}${imagesData[path]?.fileNameKey}${mainSectionPath}${imagesData[path]?.fileNames[1]}`,
      alt: imagesData[path]?.mainBackgroundAlt,
    },
    mainBackgroundDesktop: {
      src: `${basePath}${imagesData[path]?.fileNameKey}${mainSectionPath}${imagesData[path]?.fileNames[2]}`,
      alt: imagesData[path]?.mainBackgroundAlt,
    },
    videoIcon: {
      src: `${basePath}${imagesData[path]?.fileNameKey}/img_video@2x.webp`,
      width: 250,
      height: 250,
      alt: 'video-cover',
    },
    solutionsBg: {
      src: `${basePath}/BanskaStavnica/img_solution@2x.webp`,
      alt: 'solutions',
    },
    ourSolutionsDesktopBig: {
      src: `${basePath}${imagesData[path]?.fileNameKey}${ourSolutionsPath}${imagesData[path]?.fileNames[3]}`,
      alt: 'Our solutions',
    },
    ourSolutionsDesktop: {
      src: `${basePath}${imagesData[path]?.fileNameKey}${ourSolutionsPath}${imagesData[path]?.fileNames[4]}`,
      alt: 'Our solutions',
    },
    ourSolutionsTablet: {
      src: `${basePath}${imagesData[path]?.fileNameKey}${ourSolutionsPath}${imagesData[path]?.fileNames[5]}`,
      alt: 'Our solutions',
    },
    ourSolutionsMobile: {
      src: `${basePath}${imagesData[path]?.fileNameKey}${ourSolutionsPath}${imagesData[path]?.fileNames[6]}`,
      alt: 'Our solutions',
    },
    challengesImg: {
      src: `${basePath}${imagesData[path]?.fileNameKey}/img_challenges@2x.webp`,
      width: imagesData[path]?.challengesImgDimensions.width,
      height: imagesData[path]?.challengesImgDimensions.height,
      alt: 'challenges',
    },
    resultsImgDesktop: {
      src: `${basePath}${imagesData[path]?.fileNameKey}${resultPath}${imagesData[path]?.fileNames[7]}`,
      alt: 'Results',
    },
    resultsImgMobile: {
      src: `${basePath}${imagesData[path]?.fileNameKey}${resultPath}${imagesData[path]?.fileNames[8]}`,
      alt: 'Results',
    },
  };
};

const getCards = (path: string) => {
  const basePath = '/static/images/Pages/CombinedPage';

  return cardsData[path]?.contents.map((content, index) => ({
    id: index,
    icon: `${basePath}${cardsData[path].fileNameKey}/offerSection/ic_card${index + 1}.svg`,
    content,
    bg: `${basePath}${cardsData[path].fileNameKey}/offerSection/img_card${index + 1}.webp`,
  }));
};

const getTechnologyCards = (cardsName: string[]) => cardsName.map((name) => ({ ...cards[name] }));

const getResponsibilityCards = (path: string, content: string[]) => {
  const basePath = '/static/images/Pages/CombinedPage';
  const fileNameKeys: { [key: string]: string } = {
    '/banska-stiavnica': '/BanskaStavnica',
    '/construction-vr-mr': '/VRMicroCase',
    '/onix-ar-app': '/OnixARMicroCase',
    '/one-touch-vr': '/CinematicVRMicroCase',
    '/timescope': '/Timescope',
    '/unreal-space': '/UnrealSpace',
    '/mixed-reality-holokit': '/HolokitMicroCase',
    '/unity-dsm': '/UnityDSM',
  };

  return content.map((text, index) => ({
    id: index,
    img: `${basePath}${fileNameKeys[path]}/responsibilitySection/ic_responsibility${index + 1}.svg`,
    text,
  }));
};
const combinePageData = (path: string, saleUrl: boolean | undefined) => {
  const data: IData = {
    '/banska-stiavnica': {
      stylesName: 'banskaStiavnica',
      videoSectionContent: getVideoSectionContent(path),
      cards: getCards(path),
      responsibilityCards: getResponsibilityCards(path, [
        'Setting up the fine-tuned development process',
        'Building a fully functional VR application to provide a historical tour',
        'Digitizing items from the local museum',
        'Conveying emotions and phrases of the characters through the animation of body movements',
        'Aligning the 3D scan of the city with the ground surface obtained using geodata',
        'Providing realistic simulation of water',
      ]),
      technologyCards: getTechnologyCards([
        'unity', 'blender', 'substance', 'substanceP', 'ps', 'houdini', 'logo12', 'av', 'logo10', 'amplify', 'openVR',
        'lipsync',
      ]),
      videoSrc: 'https://www.youtube.com/embed/dCjMqgwUM1M?autoplay=1&controls=0',
      images: getImages(path),
      content: {
        mainTitle: 'Banská Štiavnica Historical VR Tour',
        mainDescription: 'How Onix transformed historical tour of Banská Štiavnica with VR implementation',
        videoSection: {
          descriptionText: 'The Onix team was privileged to work with the museum Banská Štiavnica, a completely'
            + ' preserved medieval town of historical value (an official UNESCO World Heritage Site)'
            + " in Slovakia. We've completed a project that allows the museum to open its doors to"
            + ' visitors and experience ',
          spanContent: 'a fully-immersive virtual tour.',
          color: 'banskaStavnicaColor',
          shadowColor: 'shadowBanskaStavnica',
          bgColor: 'banskaStavnicaBg',
        },
        challengesSection: {
          description: (
            <>
              With the advent of new technologies, it’s hard for traditional museums to engage various audiences and
              meet visitors’ demand for modern innovative experiences. Our clients wanted to demonstrate Banská
              Štiavnica’s incredible history in a unique way by implementing VR technology. That’s how they came
              up with the idea of a historical VR tour and turned to Onix for assistance with the realization of
              their idea.
              <br />
              <br />
              Our team needed to build an innovative and realistic virtual tour for a museum from Banská
              Štiavnica to provide a satisfying visitor experience allowing them to immerse themselves in what
              the museum has to offer in real life.
            </>
          ),
        },
        responsibilitySection: {
          title: 'The Onix team was responsible for :',
        },
        solutionSection: {
          title: 'Need a fully immersive AR & VR solution for your specific industry?',
          salesChannel: 'Historical VR Tour',
        },
        ourSolutionsSection: {
          description: (
            <>
              We conducted an exhaustive analysis and came up with a VR solution to bring a historical tour of
              Banská Štiavnica to a new level.&nbsp;
              <br />
              &nbsp;
              <br />
              Our team implemented the vital functionality that allows taking
              users to a virtual world where Banská Štiavnica is a living town comprising many innovative and
              immersive scenes, exhibitions, and historical items. The main goal was to&nbsp;
              <span>
                demonstrate important
                historical events of Banská Štiavnica.
              </span>
              &nbsp;
              That’s why we paid great attention to creating 3D environments
              and characters.
            </>
          ),
        },
        offerSection: {
          title: 'The Onix team offered the following solutions:',
          shadowColor: 'cardShadowBanskaStavnica',
          circleColor: 'circleColorBanskaStavnica',
        },
        testimonialSection: {
          description: (
            <>
              “We have been cooperating with Onix for several years. Onix team has proven their reliability,
              creativity, professionalism and passion to sort out every task as a highest priority. Delivering
              excellent performance and quality, alongside great communication made this cooperation very smooth.
              <br />
              This is the reason why we highly recommend Onix and will use their services for us
              and our customers needs certainty again.”
            </>
          ),
          author: (
            <>
              <span>Peter Marek, </span>
              <br />
              CEO at V.I.S.I.O.N. s.r.o.
            </>
          ),
        },
        resultSection: {
          description: (
            <>
              The Onix team helped our client to build a reliable VR app that allows visitors to discover much more
              about Banská Štiavnica in an engaging and informative manner.
              <br />
              <br />
              Leveraging VR technology, our team built realistic graphics with historically accurate models that
              immerse users in the necessary atmosphere. We created a historical VR tour that differentiates the
              museum visit, provides a unique experience and increases engagement.
            </>
          ),
        },
        latestBlogsComponent: {
          page: 'banskaStiavnica',
          header: 'Other latest blog posts',
          color: 'text-color-blue-banska-stiavnica',
        },
        contactUsSection: {
          title: 'Need a fully immersive AR or VR solution for your specific business idea?',
          salesChannel: 'Historical VR Tour',
        },
      },
    },
    '/construction-vr-mr': {
      stylesName: 'constructionVr',
      videoSectionContent: getVideoSectionContent(path),
      cards: getCards(path),
      responsibilityCards: getResponsibilityCards(path, [
        'Setting up the fine-tuned development process',
        'Collect requirements to define the main product features and goals',
        'Provide innovative VR construction training for workers',
        'Create an intuitive interface that drives engagement with users',
        'Prepare training content that provides information to acquire both theoretical and practical knowledge',
        'Build realistic graphics to offer a fully-immersive experience',
      ]),
      technologyCards: getTechnologyCards([
        'unity', 'vrtk', 'logo10', 'amplify', 'logo5', 'blender',
      ]),
      images: getImages(path),
      videoSrc: 'https://www.youtube.com/embed/abbAuyw6bwY?autoplay=1&controls=0',
      content: {
        mainTitle: 'Next-generation VR simulation for the skyscraper construction site',
        mainDescription: 'Building the future of the construction industry by implementing VR into the training'
          + ' process to increase staff safety and improve work performance',
        videoSection: {
          descriptionText: 'This case study shares how the Onix team built a VR simulation of the skyscraper'
            + ' construction site for testing and training workers. Our solution provides risk-free construction'
            + ' training, boosts professional skills, reduces human error, and cuts extra costs.',
          color: 'vrColorStyle',
          shadowColor: 'shadowVR',
          bgColor: 'vrBg',
        },
        challengesSection: {
          description: (
            <>
              Since the construction industry works in high-risk zones, even experienced professionals must train from
              time to time. This also includes interns. Our client wanted to help builders stay safe and productive by
              providing an effective and risk-free way for their training. He decided to build a VR construction
              simulator that enables trainees to simulate real-life situations in a fully immersive risk-free
              environment. This is how our collaboration began.
              <br />
              <br />
              Our team needed to develop a VR training simulator that enables construction workers to simulate complex
              and dangerous real-life scenarios and operate hazardous equipment without risks.
            </>
          ),
        },
        responsibilitySection: {
          title: 'The Onix team needed to:',
        },
        solutionSection: {
          title: 'Need a fully immersive AR & VR solution for your specific industry?',
          salesChannel: 'Construction VR/MR',
        },
        ourSolutionsSection: {
          description: (
            <>
              In order to create a solution that would completely meet our client’s requirements, we decided to analyze
              the construction industry and define the target audience&apos;s pain points.
              <br />
              <br />
              We&apos;ve carefully considered essential functionality to build a VR construction safety training
              simulation that lets employees reproduce their work on construction sites, train their skills,
              and enhance safety knowledge.
              <br />
              <br />
              Since the main goal was a simulation of complex and dangerous working conditions, we gave high priority
              to creating graphics, highly detailed 3D models, and real-life VR training scenarios with a useful hint
              system. We built an app to teach construction workers how to appropriately prepare for work shifts,
              correctly use harnesses, and properly follow the sequence of actions when working at height.
            </>
          ),
        },
        offerSection: {
          title: 'The Onix team offered the following solutions:',
          shadowColor: 'cardShadowVR',
          circleColor: 'circleColorVR',
        },
        resultSection: {
          description: (
            <>
              Leveraging VR technology and 3D imitation, we’ve managed to create an app with excellent responsiveness,
              realistic computer graphics, an interactive scene system, an intuitive interface, and special sound
              effects that provide deeper immersion.
              <br />
              <br />
              The Onix team helped our client build a virtual reality construction training simulator that allows
              construction workers to reproduce dangerous situations, train their professional skills in a completely
              safe learning environment, and gain on-hand experience to be prepared for real-life emergencies.
            </>
          ),
        },
        contactUsSection: {
          title: 'Ready to modernize your construction business by implementing AR/VR?',
          salesChannel: 'Construction VR/MR',
        },
        latestBlogsComponent: {
          page: 'vrMicroCase',
          header: 'Other latest blog posts',
          color: 'text-color-blue-vr-microcase',
        },
      },
    },
    '/onix-ar-app': {
      stylesName: 'onixArApp',
      videoSectionContent: getVideoSectionContent(path),
      cards: getCards(path),
      responsibilityCards: getResponsibilityCards(path, [
        'Gathering requirements to define the main app features and goals',
        'Building a fully functional AR application to provide a company’s promotional materials in a unique'
            + ' and entertaining manner',
        "Enabling viewing a detailed company's information by pointing camera over a brochure",
        'Providing 3D effects and 360-degree view to achieve full users engagement',
        'Creating a stunning and intuitive design to provide an excellent AR experience',
      ]),
      technologyCards: getTechnologyCards([
        'unity', 'vuforia', 'blender', 'houdini', 'figma', 'c_logo', 'arkit', 'ios', 'android',
      ]),
      videoSrc: 'https://www.youtube.com/embed/NUkW9sVv9wY?autoplay=1&controls=0',
      images: getImages(path),
      content: {
        mainTitle: (
          <>
            AR mobile app
            <br />
            to enhance
            <br />
            Onix promotional materials
          </>
        ),
        mainDescription: 'How we enriched our printed booklets with an educational, entertaining, marketing,'
          + ' and promotional experience using AR',
        videoSection: {
          descriptionText: 'This case study shares how we built an AR mobile app that reveals vivid details'
            + " of Onix printed booklets, allowing us to tell the company's exciting story in a corresponding format.",
          color: 'onixARColor',
          shadowColor: 'shadowOnixAR',
          bgColor: 'onixARBg',
        },
        challengesSection: {
          description: (
            <>
              Since the time when companies introduced their business with presentations and charts is in the past, we
              needed to provide a whole new format of promotional materials. A printed booklet provides a lot of
              details about the company, but it would never be complete without the extra details that you can
              exclusively get with the AR feature.
              <br />
              <br />
              Our team came up with the idea to
              {' '}
              {saleUrl ? (
                <>
                  build an augmented reality app
                </>
              ) : (
                <Link
                  prefetch={false}
                  target="_parent"
                  href={{
                    pathname: `${PATH}/blog/augmented-reality-app-development`,
                  }}
                  className="!underline !decoration-[var(--color-blue-onix-ar)] !underline-offset-5"
                >
                  build an augmented reality app
                </Link>
              )}
              {' '}
              to show the company&apos;s story in a
              modern and engaging way. AR was a ideal opportunity for us to change our clients&apos; minds about what
              a great business presentation was.
            </>
          ),
        },
        responsibilitySection: {
          title: 'The Onix team was responsible for :',
        },
        solutionSection: {
          title: 'Need a fully immersive AR & VR solution for your specific industry?',
          salesChannel: 'OnixAR',
        },
        ourSolutionsSection: {
          description: (
            <>
              Using AR technology, we connected a mobile application with an advertising brochure and described the
              Onix company in detail. The typical brochure had a limited amount of information, but using the AR app,
              users could get comprehensive information about the company, its products, employees, and also see the
              place where they work.
              <br />
              <br />
              We&apos;ve created a marker on each brochure page with which the AR system can determine and display the
              required interactivity. To replace the real picture with the virtual one, we used smooth animations, 3D
              effects, and 360-degree panoramic office views shot in high definition.
            </>
          ),
        },
        offerSection: {
          title: 'We provided the following solutions:',
          shadowColor: 'cardShadowOnixAR',
          circleColor: 'circleColorOnixAR',
        },
        resultSection: {
          description: (
            <>
              We believe that associations between a brand and creative and innovative experiences are likely to
              increase positive brand perception.
              <br />
              <br />
              Thus, by leveraging AR technology we built an Onix mobile app that allows users to move the camera over
              a brochure, and it reveals the company’s stats, an overview of projects, and a 3D model of the
              headquarters.
              <br />
              <br />
              Now our clients and anyone interested can know more about the company Onix in a unique, engaging,
              and enhanced way simply pointing their mobile device at a page – and it goes live.
            </>
          ),
        },
        contactUsSection: {
          title: 'Ready to modernize your business by implementing AR/VR?',
          salesChannel: 'OnixAR',
        },
        latestBlogsComponent: {
          page: 'arApp',
          header: 'Other latest blog posts',
          color: 'text-color-blue-onix-ar',
        },
      },
    },
    '/one-touch-vr': {
      stylesName: 'oneTouchVr',
      videoSectionContent: getVideoSectionContent(path),
      cards: getCards(path),
      responsibilityCards: getResponsibilityCards(path, [
        'Set up the fine-tuned development process',
        'Gather requirements to define product functionality and objectives',
        'Build a custom-themed multi-format movie experience app that teleports users to the exclusive VR '
            + 'movie lounge to enjoy the rich selection of content',
        "Satisfy users' expectations by delivering a unique movie experience",
        'Enable VR movie experience on as many platforms as possible',
        'Create phenomenal 360-degree stories for users to achieve full engagement',
      ]),
      technologyCards: getTechnologyCards([
        'unity', 'blender', 'houdini', 'substance', 'oculus', 'logo_6', 'daydream', 'logo_8', 'vive_logo', 'av',
        'logo10', 'amplify',
      ]),
      videoSrc: 'https://www.youtube.com/embed/3LRDFLJUVdE?autoplay=1&controls=0',
      images: getImages(path),
      content: {
        mainTitle: 'Cinematic Virtual Reality Distribution',
        mainDescription: 'A custom-themed multi-format movie distribution app',
        videoSection: {
          descriptionText: 'In this case study, we will show you how the Onix team created the ultimate VR'
            + ' cinematic experience on various platforms by teleporting users in a fully-immersive movie reality.',
          color: 'cinematicVrColorStyle',
          shadowColor: 'shadowCinematicVR',
          bgColor: 'cinematicVrBg',
        },
        challengesSection: {
          description: (
            <>
              Cinematic VR is rapidly evolving as a medium technology and changing how we view and perceive media
              content. Because it’s still advancing,  there is a lack of standardized practices to create outstanding
              VR movie experiences.
              <br />
              <br />
              Our client, VR producer and entrepreneur,  reached out to the Onix team with the idea of creating a new VR
              medium solution where viewers could enjoy an immersive 360 movie experience involving big-screen actors in
              various formats.
              <br />
              <br />
              We faced the task of developing a VR app that could provide an engaging VR movie experience while offering
              original video content in an exclusive VR format and serving as a powerful marketing tool for traditional
              film distribution.
            </>
          ),
        },
        responsibilitySection: {
          title: 'The Onix team was responsible for :',
        },
        solutionSection: {
          title: 'Need a fully immersive AR & VR solution for your specific industry?',
          salesChannel: 'OneTouch',
        },
        ourSolutionsSection: {
          description: (
            <>
              First and foremost, we conducted a thorough analysis to build a valuable and viable VR movie app with
              a range of advanced features.
              <br />
              <br />
              Our goal was to provide a fully immersive cinematic VR solution that is specifically designed for taking
              users&apos; VR viewing experience to the next level. We created an ultra-realistic movie experience in
              various formats to produce a new VR medium solution: 360-degree, 2d-widescreen, 3D, Barco Escape 3-screen
              video format. Such detailed graphics allowed us to immerse users deeper in a movie reality.
              <br />
              <br />
              We enabled a VR movie experience on various platforms, ensuring all app features&apos; proper functioning
              on the selected VR platforms.
            </>
          ),
        },
        offerSection: {
          title: 'The Onix team offered the following solutions:',
          shadowColor: 'cardShadowCinematicVR',
          circleColor: 'circleColorCinematicVR',
        },
        resultSection: {
          description: (
            <>
              The Onix team helped our client to build a custom-themed multi-movie distribution and library apps.
              Users can watch the Cinematic VR premieres of movies like The Humanity Bureau VR featuring Academy Award
              winner Nicolas Cage and The Recall VR Abduction featuring Wesley Snipes and RJ Mitte.
              <br />
              <br />
              Using our solution, people teleport and immerse into the exclusive VR movie lounge to enjoy a rich
              content selection in various video formats. Additionally, the VR movie app offers an innovative approach
              to multimedia marketing since the way it provides content is different from standard awareness methods.
              It can serve as a robust monetization tool for presenting media content to new markets and in a new
              format.
            </>
          ),
        },
        contactUsSection: {
          title: 'Ready to provide a fully-immersive user experience by applying state-of-the-art AR/VR technology?',
          salesChannel: 'OneTouch',
        },
        latestBlogsComponent: {
          page: 'cinematicVr',
          header: 'Other latest blog posts',
          color: 'text-color-blue-cinematic-vr',
        },
      },
    },
    '/timescope': {
      stylesName: 'timescope',
      videoSectionContent: getVideoSectionContent(path),
      cards: getCards(path),
      responsibilityCards: getResponsibilityCards(path, [
        'Follow a proven development process to ensure high-quality and productive work',
        'Collect and analyze requirements to deliver top-tier VR solution',
        'Develop a VR solution that allows viewing stereoscopic photos in a fully-immersive environment',
        'Create a separate rendering technique for the left and right eye that uses the same photo',
        'Enable viewing stereograph photos using VR on as many platforms as possible',
        'Preserve the style of antique photos',
      ]),
      videoSrc: 'https://www.youtube.com/embed/jcDoWLPBDIc?autoplay=1&controls=0',
      images: getImages(path),
      technologyCards: getTechnologyCards([
        'unity', 'blender', 'ps', 'logo12', 'logo10', 'mrtk', 'oculus', 'logo_8', 'daydream',
      ]),
      content: {
        mainTitle: 'VR application for viewing stereoscope photos',
        mainDescription: 'How Onix brought history to life using VR technology',
        videoSection: {
          descriptionText: 'The Onix team was tasked to build a VR solution that would fully immerse users in history '
          + "by allowing them to view 19th-century stereoscope images. This case study highlights how we've managed to "
          + 'bring history to life by preserving style and depth effects of antique photos that people can view '
          + 'on various platforms.',
          color: 'timescopeColor',
          shadowColor: 'shadowTimescope',
          bgColor: 'timescopeBg',
        },
        challengesSection: {
          description: (
            <>
              In the last century it was common to spend an evening viewing stereographs or stereoscope images
              (3D pictures) of various locations, events, and people. Our client discovered that the local library
              revealed a collection of these in its archives including stereoscope photos. He wanted to create an
              application that would allow people to view antique pictures and got in touch with us with this idea.
              <br />
              <br />
              Our team was faced with the task to bring viewing stereoscope photos experience into a VR environment
              and thus bring history to life.
            </>
          ),
        },
        responsibilitySection: {
          title: 'The Onix team was responsible for :',
        },
        solutionSection: {
          title: 'Need a fully immersive AR & VR solution for your specific industry?',
          salesChannel: 'Timescope',
        },
        ourSolutionsSection: {
          description: (
            <>
              Our goal was to create more than just a photo viewer VR application. We built the VR solution that
              contains hundreds of antique photos, several review modes, and historical references that are educational
              and entertaining. We also enabled a VR viewing photo experience on various platforms, guaranteeing
              correct app operation on the selected VR platforms.
              <br />
              <br />
              The Onix team developed special shaders for the VR rendering process and created an optimized pipeline
              for 3D models to ensure high performance on all devices. We created a unique 3D environment that allowed
              us to preserve the photos&apos; depth effect and style. Moreover, our specialists had to retouch the
              images by hand, which was quite a painstaking process. Preserving the unique visual style of those
              times allowed us to bring history to life and fully immerse users in the 19th century.
            </>
          ),
        },
        offerSection: {
          title: 'The Onix team offered the following solutions:',
          shadowColor: 'cardShadowTimescope',
          circleColor: 'circleColorTimescope',
        },
        resultSection: {
          description: (
            <>
              We helped our client bring historical places into a new dimension by creating an excellent application
              for viewing not just historical photos, but stereoscopic ones.
              <br />
              <br />
              The Onix team has managed to preserve the unique style of photographs from the Wild West, World War I,
              Prim London, the American Civil War, and many more. Now the app contains hundreds of photos that are
              placed in specific categories. Users can play the app on various devices using the 360-degree view.
              Using our solution, users can fully immerse themselves in the era of those times by viewing antique
              photos, reading historical references, and listening to related music.
            </>
          ),
        },
        contactUsSection: {
          title: 'Need help building an AR or VR solution?',
          salesChannel: 'Timescope',
        },
        latestBlogsComponent: {
          page: 'timescope',
          header: 'Other latest blog posts',
          color: 'text-color-blue-timescope',
        },
      },
    },
    '/unreal-space': {
      stylesName: 'unrealSpace',
      videoSectionContent: getVideoSectionContent(path),
      cards: getCards(path),
      responsibilityCards: getResponsibilityCards(path, [
        'Set up a transparent development process to ensure productive work',
        'Collect and specify project requirements to build a superior VR solution',
        'Develop a coworking platform to book virtual spaces and hold video conferences in a VR environment',
        'Provide various realistic spaces for holding virtual conferences just like in person',
        'Build an avatar system where each user can personalize themselves',
        'Create realistic graphics to deliver a fully-immersive experience',
      ]),
      technologyCards: getTechnologyCards([
        'unity', 'photon', 'blender', 'houdini', 'ps', 'substanceP', 'oculus', 'vive_logo', 'av', 'logo10', 'amplify',
      ]),
      videoSrc: 'https://www.youtube.com/embed/xr2pB0Km4P8?autoplay=1&controls=0',
      images: getImages(path),
      content: {
        mainTitle: 'Virtual spaces: our future way of coworking',
        mainDescription: 'VR solution to stay connected and share ideas in an immersive and interactive environment',
        videoSection: {
          descriptionText: "We'll talk about the coworking/virtual office system that allows users to book conference "
          + 'halls in a VR environment where they can meet with their friends and colleagues. This case study '
          + 'highlights how the Onix team built a VR solution that takes the coworking experience to a new level.',
          color: 'unrealSpaceColor',
          shadowColor: 'shadowUnrealSpace',
          bgColor: 'unrealSpaceBg',
        },
        challengesSection: {
          description: (
            <>
              The last couple of pandemic years have significantly changed the way today’s companies collaborate.
              Instead of face-to-face interaction, most distributed teams and workers use chat, video, and calls.
              And though these communication tools help bring people together for better coworking, there&apos;s still
              a lack of presence and engagement compared to in-person meetings. Our client wanted to bridge that gap
              between people and build a platform that would provide virtual spaces for great conferencing experiences.
              <br />
              <br />
              Using VR technology, we needed to develop a coworking system that would enable team members to book and
              meet in the virtual spaces for holding video conferences, presentations, and sharing their ideas in an
              interactive and engaging manner.
            </>
          ),
        },
        responsibilitySection: {
          title: 'The Onix team needed to:',
        },
        solutionSection: {
          title: 'Need a fully immersive AR & VR solution for your specific industry?',
          salesChannel: 'Unreal Space',
        },
        ourSolutionsSection: {
          description: (
            <>
              The development process began with ensuring a smooth live stream from a user&apos;s computer. This feature
              allows colleagues to share their desktops with everyone in a virtual room, show presentations, and enjoy
              synced video/audio playback.
              <br />
              <br />
              Also, it was essential to create a variety of locations where users will meet. We&apos;ve managed to
              ensure realistic, rich detailed graphics to deliver the effect of presence and a fully-immersive
              experience. Moreover, users can book or even buy a location where they want to hold conferences.
              <br />
              <br />
              Using VR technology, we made it easy for users to collaborate with their colleagues as avatars and
              share their ideas as quickly and simply as possible in realistic, immersive environments.
            </>
          ),
        },
        offerSection: {
          title: 'The Onix team offered the following solutions:',
          shadowColor: 'cardShadowUnrealSpace',
          circleColor: 'circleColorUnrealSpace',
        },
        resultSection: {
          description: (
            <>
              The Onix team helped our client build a robust VR app that brings people together and provides shared
              virtual spaces for collaboration, conferencing, and presentations.
              <br />
              <br />
              Team members meet in an effective and realistic environment where they create a team call, share their
              desktops with everyone in this location, and discuss urgent issues using voice chat. Moreover, our
              solution opens up new creative possibilities allowing users to create their avatars to represent team
              members and make communication more personal.
              <br />
              <br />
              As a result, we&apos;ve managed to create a simple but effective app where people anywhere in the world
              can communicate and collaborate in one virtual workspace. Using our advanced functionality, people can
              significantly boost their productivity and engage participants from beginning to end.
            </>
          ),
        },
        contactUsSection: {
          title: 'Need help with building a fully immersive AR or VR solution?',
          salesChannel: 'Unreal Space',
        },
        latestBlogsComponent: {
          page: 'unrealSpace',
          header: 'Other latest blog posts',
          color: 'text-color-blue-unreal-space',
        },
      },
    },
    '/mixed-reality-holokit': {
      stylesName: 'holokit',
      videoSectionContent: getVideoSectionContent(path),
      cards: getCards(path),
      responsibilityCards: getResponsibilityCards(path, [
        'Provide effective and transparent development process',
        'Identify and collect requirements to meet project, and business goals',
        'Build an MR solution that would enable people to place virtual objects in the real world',
        "Meet users' expectations by delivering a fantastic experience",
        'Enable MR experience on both platforms iOS and Android',
        'Ensure super-sharp optics quality',
      ]),
      technologyCards: getTechnologyCards([
        'unity', 'arkit', 'c_logo', 'blender', 'arFoundation', 'mirror', 'finch', 'group', 'views4d',
      ]),
      videoSrc: 'https://www.youtube.com/embed/Imy8vwO-4mo?autoplay=1&controls=0',
      images: getImages(path),
      content: {
        mainTitle: 'Mixed reality experience for everyone',
        mainDescription: 'How the Onix team merged the real and virtual worlds in an intelligent way',
        videoSection: {
          descriptionText: "This case study highlights how we've managed to build a robust mixed reality "
          + ' environment that provides users with incredible experience just by using headsets and smartphones.',
          color: 'holokitColor',
          shadowColor: 'shadowHolokit',
          bgColor: 'holokitBg',
        },
        challengesSection: {
          description: (
            <>
              Our client approached the Onix team with the idea of creating a set of different activities for a new
              mixed reality solution (technology presentation at exhibitions and users/developers). He wanted to
              create an official app that could showcase the new, low-cost HoloKit XR solution. There was also a
              need to develop several SDK modules for open source mixed reality package where developers could
              integrate the package to translate their applications into mixed reality mode.
              <br />
              <br />
              Hence, our team needed to develop a new version of mixed reality for Android and iOS devices in a short
              time. Our solution would allow people to see virtual objects blended into the real world.
            </>
          ),
        },
        responsibilitySection: {
          title: 'The Onix team needed to:',
        },
        solutionSection: {
          title: 'Need a fully immersive AR & VR solution for your specific industry?',
          salesChannel: 'HoloKit X',
        },
        ourSolutionsSection: {
          description: (
            <>
              The development process began with the creation of separate scenes for augmented reality modes which
              included 4D scanning technology, part of the 3D model of the New York city, and the presentation of
              several art installations. Many developments have been included in the official application which is
              available on iOS and Android platforms. We also worked on the profile system for the SDK, user interface,
              and collaboration system. Our specialists took care of the convenient AR/MR mode, control system, quick
              setup, and support for a set of basic devices.
              <br />
              <br />
              Moreover, pairing with a smartphone, the MR solution can perform an inside-out tracking function that
              uses the changing perspective on the outside world to note changes in its own position.
              <br />
              <br />
              So, we&apos;ve managed to merge the real and the virtual worlds in a very promising way. This open-source
              mixed reality solution allows people to use a low-cost MR solution, and for developers it’s an easy SDK
              integration.
            </>
          ),
        },
        offerSection: {
          title: 'We provided the following solutions:',
          shadowColor: 'cardShadowHolokit',
          circleColor: 'circleColorHolokit',
        },
        resultSection: {
          description: (
            <>
              Using robust and top-tier technology, the Onix team helped our client build a reliable open-sourced
              mixed reality solution that inspires developers and AR/MR enthusiasts with unlimited possibilities.
              <br />
              <br />
              We&apos;ve seen excellent results from merging the real and virtual worlds. Users run the mobile app
              on their smartphones, place it into the augmented reality helmets, and enjoy the mixed reality
              environment through the lenses. Now, placing virtual objects into the real world is easier and more
              accessible than ever.
            </>
          ),
        },
        contactUsSection: {
          title: 'Need help building an AR or VR solution?',
          salesChannel: 'HoloKit X',
        },
        latestBlogsComponent: {
          page: 'holokit',
          header: 'Other latest blog posts',
          color: 'text-color-blue-holokit',
        },
      },
    },
    '/unity-dsm': {
      stylesName: 'unityDSM',
      cards: getCards(path),
      videoSectionContent: getVideoSectionContent(path),
      responsibilityCards: getResponsibilityCards(path, [
        'Set up effective management and transparent development process',
        'Identify and gather requirements to meet project objectives',
        'Develop a VR solution that would allow experiencing the world of sustainable agriculture in virtual reality',
        'Enable viewing VR presentations on mobile devices and VR platforms',
        'Create a basic application template, as well as implement a service integration for content administration',
        'Create an intuitive user interface to achieve full engagement',
      ]),
      technologyCards: getTechnologyCards([
        'unity', 'headjack', 'logo10', 'av', 'pico', 'logo_8',
      ]),
      videoSrc: 'https://www.youtube.com/embed/2DCYdq_riZs?autoplay=1&controls=0',
      images: getImages(path),
      content: {
        mainTitle: (
          <>
            VR app for learning how animal farming can become
            <br />
            more sustainable
          </>
        ),
        mainDescription: 'How Onix built VR presentations to demonstrate sustainable consumption of animal protein',
        videoSection: {
          descriptionText: 'In this case study, we will show you how the Onix team created VR presentations on '
          + "various platforms that affect the user's view regarding the utilization and consumption of products.",
          color: 'unityDSMColor',
          shadowColor: 'shadowUnityDSM',
          bgColor: 'unityDSMBg',
        },
        challengesSection: {
          description: (
            <>
              It&apos;s projected that the world&apos;s population will continue to grow and reach nearly 10 billion
              by 2050. To provide all these people with nutritious food within the boundaries of our planet, we need
              to produce this food in a sustainable way. The growing demand for animal protein is driving up greenhouse
              gas emissions, putting pressure on our natural resources. This is an urgent issue.
              <br />
              <br />
              That&apos;s why our client came to us with the idea of building a VR presentation that would help people
              to learn more about how animal farming can become more sustainable and at the same time keep our planet
              healthy.
            </>
          ),
        },
        responsibilitySection: {
          title: 'The Onix team needed to:',
        },
        solutionSection: {
          title: 'Need a fully immersive AR & VR solution for your specific industry?',
          salesChannel: 'UnityDSM',
        },
        ourSolutionsSection: {
          description: (
            <>
              Our development team conducted a detailed analysis and came up with a solution that contains VR
              presentations on how to help animal farming become more sustainable. In a short time, we developed an
              application for several platforms. At the same time, mobile devices should support both Cardboard(VR)
              and 360/2D projection modes.
              <br />
              <br />
              We’ve provided the possibility of a cloud assets configuration. For example, using the service console,
              an operator can change the 360 panorama image or video file in one of the menu screens, and this change
              is automatically applied to all users. To power our 360 video app, we used Headjack, an app creation and
              content management system.
              <br />
              <br />
              To implement VR applications, we created Unity projects templates, in which we provided support for
              dynamic assets and video content. A set of these templates will be helpful for similar applications in
              the future without the need to develop such applications from scratch.
            </>
          ),
        },
        offerSection: {
          title: 'We provided the following solutions:',
          shadowColor: 'cardShadowUnityDSM',
          circleColor: 'circleColorUnityDSM',
        },
        resultSection: {
          description: (
            <>
              The Onix team helped our client build a set of reliable VR applications on various platforms that contain
              presentations on how animal farming can become more sustainable. Leveraging VR technology, our team
              created 360-degree and 2D user interfaces to provide an excellent user experience.
              <br />
              <br />
              Now the client can successfully speak at conferences and use our VR presentations to demonstrate to
              people how to make animal protein production more sustainable and affect their view regarding the
              utilization and consumption of products. Moreover, he can create other applications based on our
              templates without the need for development.
            </>
          ),
        },
        contactUsSection: {
          title: 'Need a fully immersive AR or VR solution for your specific business idea?',
          salesChannel: 'UnityDSM',
        },
        latestBlogsComponent: {
          page: 'unityDSM',
          header: 'Other latest blog posts',
          color: 'text-color-blue-unity-dsm',
        },
      },
    },
  };

  return data[path];
};

export default combinePageData;
