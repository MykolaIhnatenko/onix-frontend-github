/* eslint-disable no-console */
import { HOSTS } from 'constants/constants';

export interface IpApiResponse {
  ip: string;
}

export interface CountryApiResponse {
  country: string;
}
let cachedCheckBlocking: boolean | null = null;
const blockedCountries = ['PK', 'NG', 'ZA', 'KE'];
const IPINFO_TOKEN = process.env.NEXT_PUBLIC_IPINFO_API_KEY ?? '';

const getCheckBlocking = async (hostname:string, clientIp:string): Promise<boolean> => {
  if (cachedCheckBlocking !== null) {
    return cachedCheckBlocking;
  }

  try {
    const ipRes = await fetch('https://api.ipify.org?format=json');
    const ipData: IpApiResponse = await ipRes.json() as IpApiResponse;
    const ipAddress = ipData?.ip ?? '';
    const ipUser = clientIp && clientIp !== '::1' ? clientIp : ipAddress;
    console.log('ipUser', ipUser);
    const countryRes = await fetch(`https://ipinfo.io/${ipUser}/json?token=${IPINFO_TOKEN}`);
    const countryData: CountryApiResponse = await countryRes.json() as CountryApiResponse;
    const country = countryData?.country ?? null;
    if (!country) return false;
    const blockCountry = (country === 'IN' || blockedCountries.includes(country))
    && (hostname.includes('localhost') || hostname.includes(HOSTS.PRODUCTION));
    const blockSale = (blockedCountries.includes(country) && hostname.includes(HOSTS.SALE));
    cachedCheckBlocking = blockCountry || blockSale;
    return cachedCheckBlocking;
  } catch (error) {
    return false;
  }
};

export default getCheckBlocking;
