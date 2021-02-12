// init google analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-BJ5GX8H4Z0', {
  'send_page_view': false
});

gtag('set', {
  'country': 'BR',
});


function articleClicked(articleName) {
  console.log("article clicked")

  gtag('event', `Article Clicked: ${articleName}`);
}

function contactClicked(contactName) {
  console.log("contact clicked")

  gtag('event', `Contact Clicked: ${contactName}`);
}