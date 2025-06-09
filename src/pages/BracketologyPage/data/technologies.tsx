import aws from '@/images/bracketology/technologiesSectin/img_aws@2x.webp';
import ruby from '@/images/bracketology/technologiesSectin/img_ruby@2x.webp';
import vue from '@/images/bracketology/technologiesSectin/img_vue@2x.webp';
import wordPress from '@/images/bracketology/technologiesSectin/img_word_press@2x.webp';

const technologies = [
  {
    id: 0,
    imgSrc: ruby,
    title: 'Ruby',
    content: 'Servers and back-end',
  },
  {
    id: 1,
    imgSrc: vue,
    title: 'Vue.JS',
    content: 'Internal part of the web application and front-end',
  },
  {
    id: 2,
    imgSrc: wordPress,
    title: 'Word Press',
    content: 'Landings',
  },
  {
    id: 3,
    imgSrc: aws,
    title: 'Amazon Web Service',
    content: 'Hosting and deployment of the project infrastructure',
  },
];

export default technologies;
