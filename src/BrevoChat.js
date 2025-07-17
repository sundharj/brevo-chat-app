// BrevoChat.js
import { useEffect } from 'react';

const BrevoChat = () => {
  useEffect(() => {
    if (!window.BrevoChatInjected) {
      const script = document.createElement('script');
      script.innerHTML = `
        (function(d, w, c) {
          w.BrevoConversationsID = '66daf1926736e757410c0fec';
          w[c] = w[c] || function() {
            (w[c].q = w[c].q || []).push(arguments);
          };
          var s = d.createElement('script');
          s.async = true;
          s.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';
          if (d.head) d.head.appendChild(s);

          w.addEventListener('load', function () {
            setTimeout(function () {
              if (typeof w.BrevoConversations !== 'undefined') {
                w.BrevoConversations('open');
              }
            }, 1500);
          });
        })(document, window, 'BrevoConversations');
      `;
      document.body.appendChild(script);
      window.BrevoChatInjected = true;
    }
  }, []);

  return null;
};

export default BrevoChat;
