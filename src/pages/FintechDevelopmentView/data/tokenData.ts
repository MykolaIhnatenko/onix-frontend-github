import { StaticImageData } from 'next/image';

import ALML from '@/images/fintech/img_ALML.webp';
import Ethereum from '@/images/fintech/img_Ethereum.webp';
import Cloud from '@/images/fintech/img_Cloud.webp';
import Crypto from '@/images/fintech/img_Crypto.webp';
import NFT from '@/images/fintech/img_NFT.webp';
import DeFi from '@/images/fintech/img_DeFi.webp';
import Cybersecurity from '@/images/fintech/img_Cybersecurity.webp';
import WhiteLabel from '@/images/fintech/img_WhiteLabel.webp';

interface ITokenItem {
  id: string;
  title: string;
  image: string | StaticImageData;
}

export const tokenData: ITokenItem[] = [
  {
    id: '01',
    title: 'AL/ML',
    image: ALML,
  },
  {
    id: '02',
    title: 'Ethereum',
    image: Ethereum,
  },
  {
    id: '03',
    title: 'Cloud-computing',
    image: Cloud,
  },
  {
    id: '04',
    title: 'Crypto',
    image: Crypto,
  },
];

export const tokenData2: ITokenItem[] = [
  {
    id: '05',
    title: 'NFT',
    image: NFT,
  },
  {
    id: '06',
    title: 'DeFi',
    image: DeFi,
  },
  {
    id: '07',
    title: 'Cybersecurity',
    image: Cybersecurity,
  },
  {
    id: '08',
    title: 'White Label',
    image: WhiteLabel,
  },
];
