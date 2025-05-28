import { useEffect } from 'react';

export const Analytics = () => {
    useEffect(() => {
        // Google Analytics
        const gaScript = document.createElement('script');
        gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-XEG9WRLXBY';
        gaScript.async = true;
        document.head.appendChild(gaScript);

        const gaConfig = document.createElement('script');
        gaConfig.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XEG9WRLXBY');
    `;
        document.head.appendChild(gaConfig);

        // Yandex Metrika
        const ymScript = document.createElement('script');
        ymScript.innerHTML = `
      (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){
      (m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();
      for (var j = 0; j < document.scripts.length; j++) {
        if (document.scripts[j].src === r) return;
      }
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],
      k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

      ym(102220179, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
      });
    `;
        document.body.appendChild(ymScript);
    }, []);

    return null;
};
