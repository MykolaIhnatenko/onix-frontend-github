import Script from 'next/script';
import { useEffect, useState } from 'react';

function ChatBot() {
  const [chatBot, setChatBot] = useState<JSX.Element | null>(null);

  const chatId = '#LeadboosterContainer';

  const chatBotScript = (
    <Script
      id="pipedrive_script_sourse"
      strategy="lazyOnload"
      src="https://leadbooster-chat.pipedrive.com/assets/loader.js"
      async
    />
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setChatBot(chatBotScript);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const iframe = document.querySelector(chatId);

      if (iframe && !iframe.parentElement?.classList.contains('chatbot-wrapper')) {
        const wrapper = document.createElement('div');
        wrapper.style.position = 'fixed';
        wrapper.style.zIndex = '400000';

        iframe.parentElement?.insertBefore(wrapper, iframe);
        wrapper.appendChild(iframe);

        observer.disconnect();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // eslint-disable-next-line consistent-return
    return () => observer.disconnect();
  }, []);

  return chatBot;
}

export default ChatBot;
