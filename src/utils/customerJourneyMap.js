import sbjs from 'sourcebuster';

export const sourseBusterData = () => {
  sbjs.init();
  const { get } = sbjs;

  const firstSource = `${get?.first?.src || '(none)'} - `
    + `${get?.first?.mdm || '(none)'} - `
    + `${get?.first?.cmp || '(none)'} - `
    + `${get?.first?.trm || '(none)'}`;
  const firstPage = `${get?.first_add?.ep || '(none)'}`;
  const lastLandingPage = `${get?.current_add?.ep || '(none)'}`;

  return {
    firstSource,
    firstPage,
    lastLandingPage,
  };
};

export const clientIdGA = () => {
  const match = document.cookie.match('(?:^|;)\\s*_ga=([^;]*)');
  const gacid = match ? match[1] : null;
  return gacid || '(none)';
};
