import AIIMageClassificationSolutionWeProvide1 from '@/images/aiImageClassifacationSolution/solutionWeProvideSection/img1@2x.webp';
import AIIMageClassificationSolutionWeProvide2 from '@/images/aiImageClassifacationSolution/solutionWeProvideSection/img2@2x.webp';
import AIIMageClassificationSolutionWeProvide3 from '@/images/aiImageClassifacationSolution/solutionWeProvideSection/img3@2x.webp';
import AIIMageClassificationSolutionWeProvideMobile1 from '@/images/aiImageClassifacationSolution/solutionWeProvideSection/img1_mobile@2x.webp';
import AIIMageClassificationSolutionWeProvideMobile2 from '@/images/aiImageClassifacationSolution/solutionWeProvideSection/img2_mobile@2x.webp';
import AIIMageClassificationSolutionWeProvideMobile3 from '@/images/aiImageClassifacationSolution/solutionWeProvideSection/img3_mobile@2x.webp';
import AIIMageClassificationSolutionWeProvideTablet1 from '@/images/aiImageClassifacationSolution/solutionWeProvideSection/img1_tablet@2x.webp';
import AIIMageClassificationSolutionWeProvideTablet2 from '@/images/aiImageClassifacationSolution/solutionWeProvideSection/img2_tablet@2x.webp';
import AIIMageClassificationSolutionWeProvideTablet3 from '@/images/aiImageClassifacationSolution/solutionWeProvideSection/img3_tablet@2x.webp';

const solutionWeProvide = [
  {
    id: 1,
    title: 'Real-time edge classification with NCS2',
    text: [
      `Instead of relying on cloud servers or powerful local machines for image processing, the app leverages
        the power of the NCS2 for on-the-spot, real-time image classification. This ensures speedy results with
        minimal latency, making it ideal for situations that demand immediate feedback.`,
      `Our team integrated the Intel NCS2 with the core application, optimizing the machine-learning models
        with the OpenVINO toolkit. This ensures the models run efficiently on the NCS2, providing users
        instantaneous classifications. The backend seamlessly detects the presence of the NCS2 and reroutes
        image processing tasks directly to it.`,
    ],
    imgMobile: AIIMageClassificationSolutionWeProvideMobile1,
    imgTablet: AIIMageClassificationSolutionWeProvideTablet1,
    img: AIIMageClassificationSolutionWeProvide1,
  },
  {
    id: 2,
    title: 'Model optimization',
    text: [
      `Our specialists used the OpenVINO toolkit to optimize and adapt the machine learning models
        specifically for the NCS2. Multiple iterations ensured the models remained accurate and efficient.`,
    ],
    imgMobile: AIIMageClassificationSolutionWeProvideMobile2,
    imgTablet: AIIMageClassificationSolutionWeProvideTablet2,
    img: AIIMageClassificationSolutionWeProvide2,
  },
  {
    id: 3,
    title: 'Adaptive learning with user feedback',
    text: [
      `The application is not just static; it learns and adapts. If a user disagrees with a classification,
        they can provide feedback, and over time, this feedback is used to refine and improve the classification
        model.`,
      `Our team created an intuitive feedback mechanism in the UI, allowing users to flag incorrect
        classifications quickly.`,
    ],
    imgMobile: AIIMageClassificationSolutionWeProvideMobile3,
    imgTablet: AIIMageClassificationSolutionWeProvideTablet3,
    img: AIIMageClassificationSolutionWeProvide3,
  },
];

export default solutionWeProvide;
