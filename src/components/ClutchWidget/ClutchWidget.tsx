import { useEffect } from 'react';

import IClutchWidget from './interfaces/IClutchWidget';
import ICustomWindow from './interfaces/ICustomWindow';

function ClutchWidget({
  id, dataWidgetType, dataHeight, dataTheme, dataExpandifr, dataSnippets,
}: IClutchWidget) {
  useEffect(() => {
    const delayedInit = setTimeout(() => {
      const windowObject = window as ICustomWindow;
      if (windowObject.CLUTCHCO) {
        windowObject.CLUTCHCO.Init();
      }
    }, 1500);

    return () => {
      clearTimeout(delayedInit);
      const windowObject = window as ICustomWindow;
      if (windowObject.CLUTCHCO) {
        windowObject.CLUTCHCO.Destroy();
      }
    };
  }, []);

  return (
    <div
      id={id}
      className="clutch-widget"
      data-nofollow="true"
      data-url="https://widget.clutch.co"
      data-widget-type={dataWidgetType}
      data-height={dataHeight}
      data-theme={dataTheme}
      data-expandifr={dataExpandifr}
      data-snippets={dataSnippets}
      data-clutchcompany-id={process.env.NEXT_PUBLIC_CLUTCH_COMPANY_ID}
    />
  );
}

export default ClutchWidget;
