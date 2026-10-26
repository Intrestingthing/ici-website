import Script from "next/script";
import { site } from "@/data/site";

// Microsoft Clarity (heatmaps + session recordings). Loads only when
// site.clarityId is set — otherwise renders nothing.
export default function ClarityScript() {
  if (!site.clarityId) return null;

  return (
    <Script id="ms-clarity" strategy="afterInteractive">
      {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "${site.clarityId}");`}
    </Script>
  );
}
