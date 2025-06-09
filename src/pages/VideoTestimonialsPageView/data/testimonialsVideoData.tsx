import Clubhouse from '../../../assets/images/videoTestimonials/testimonials/img_clubhouse.webp';
import GolfLive from '../../../assets/images/videoTestimonials/testimonials/img_golf_live.webp';
import Adoric from '../../../assets/images/videoTestimonials/testimonials/img_adoric.webp';
import NowWhat from '../../../assets/images/videoTestimonials/testimonials/img_now_what.webp';
import Vyra from '../../../assets/images/videoTestimonials/testimonials/img_vyra.webp';
import Phlex from '../../../assets/images/videoTestimonials/testimonials/img_phlex.webp';

const TestimonialsVideoData = [
  {
    id: 1,
    poster: Clubhouse,
    videoSrc: '/static/video/clubhouse.mp4',
    title: 'Eric Roberts, Clubhouse',
    description: 'The Clubhouse is an innovative online platform '
      + 'offering premium virtual fitness classes and workout videos.',
    country: 'USA',
    specification: 'Sport & Fitness',
  },
  {
    id: 2,
    poster: NowWhat,
    videoSrc: '/static/video/now-what.mp4',
    title: 'Will Golder, NowWhat',
    description: 'Platform for prostate cancer patients, survivors, and'
      + ' families to share experiences and find mutual support.',
    country: 'United Kingdom',
    specification: 'Healthcare',
  },
  {
    id: 3,
    poster: Adoric,
    videoSrc: '/static/video/tal-revivo.mp4',
    title: 'Tal Revivo, Adoric',
    description: 'Unobtrusive and straightforward SaaS product for setting up marketing campaigns.',
    country: 'Israel',
    specification: 'Advertising',
  },
  {
    id: 4,
    poster: Phlex,
    videoSrc: '/static/video/phlex.mp4',
    title: 'Ryan Rosenbaum, Phlex',
    description: 'Innovative fitness tracker for swimming workouts and developing smart training plans.',
    country: 'USA',
    specification: 'Sport & Fitness',
  },
  {
    id: 5,
    poster: GolfLive,
    videoSrc: '/static/video/golf-live.mp4',
    title: 'Keith Scioli, Golf Live',
    description: 'Golf Live offers premier virtual golf lessons taught by certified professional coaches.',
    country: 'USA',
    specification: 'Sport & Fitness',
  },
  {
    id: 6,
    poster: Vyra,
    videoSrc: '/static/video/vyra.mp4',
    title: 'Jack Dwyer, Eoin Le Masney, Vyra',
    description: 'B2B platform by Onix for reducing emissions and boosting '
      + 'sustainability with seamless learning and insights.',
    country: 'Ireland',
    specification: 'EdTech',
  },
];

export default TestimonialsVideoData;
