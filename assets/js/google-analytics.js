// init google analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-BJ5GX8H4Z0', {
  'send_page_view': false
});

function articleClicked(articleName) {
  gtag('event', `Article Clicked: ${articleName}`);
}

function contactClicked(contactName) {
  gtag('event', `Contact Clicked: ${contactName}`);
}