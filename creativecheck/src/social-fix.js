const instagramSvg='<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5ZM17.5 6.5a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 17.5 6.5Z"/></svg>';
const facebookSvg='<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.5 22v-8h2.75l.5-3h-3.25V9.05c0-.87.29-1.55 1.62-1.55H17V4.82c-.33-.04-1.47-.14-2.73-.14-2.7 0-4.55 1.65-4.55 4.68V11H7v3h2.72v8h3.78Z"/></svg>';
const linkedinSvg='<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.85c0-3.77-2.01-5.53-4.69-5.53-2.16 0-3.13 1.19-3.67 2.03V8.5H9.15V21h3.49v-6.2c0-1.63.31-3.21 2.33-3.21 1.99 0 2.02 1.87 2.02 3.33V21H21v-7.15Z"/></svg>';
function fixSocial(){
  const box=document.querySelector('.footer-social');
  if(!box) return;
  const links=[...box.querySelectorAll('a')];
  const data=[
    ['https://www.instagram.com/creativecheck.app/','CreativeCheck on Instagram',instagramSvg],
    ['https://www.linkedin.com/company/creativecheck/','CreativeCheck on LinkedIn',linkedinSvg],
    ['https://www.facebook.com/creativecheck.app/','CreativeCheck on Facebook',facebookSvg]
  ];
  data.forEach(([href,label,svg],i)=>{
    let a=links[i];
    if(!a){a=document.createElement('a');a.className='footer-social-icon';box.appendChild(a);}
    a.href=href;a.target='_blank';a.rel='noreferrer';a.ariaLabel=label;a.innerHTML=svg;
  });
}
new MutationObserver(fixSocial).observe(document.documentElement,{childList:true,subtree:true});
fixSocial();
