const instagramSvg='<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5ZM17.5 6.5a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 17.5 6.5Z"/></svg>';
const facebookSvg='<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.5 22v-8h2.75l.5-3h-3.25V9.05c0-.87.29-1.55 1.62-1.55H17V4.82c-.33-.04-1.47-.14-2.73-.14-2.7 0-4.55 1.65-4.55 4.68V11H7v3h2.72v8h3.78Z"/></svg>';
const linkedinSvg='<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.85c0-3.77-2.01-5.53-4.69-5.53-2.16 0-3.13 1.19-3.67 2.03V8.5H9.15V21h3.49v-6.2c0-1.63.31-3.21 2.33-3.21 1.99 0 2.02 1.87 2.02 3.33V21H21v-7.15Z"/></svg>';
function fixSocial(){
  const box=document.querySelector('.footer-social');
  if(!box || box.dataset.fixed==='1') return;
  box.dataset.fixed='1';
  const links=[...box.querySelectorAll('a')];
  if(links[0]){links[0].href='https://www.instagram.com/creativecheck.app/';links[0].target='_blank';links[0].rel='noreferrer';links[0].ariaLabel='CreativeCheck on Instagram';links[0].innerHTML=instagramSvg;}
  if(links[1]){links[1].href='https://www.linkedin.com/company/creativecheck/';links[1].target='_blank';links[1].rel='noreferrer';links[1].ariaLabel='CreativeCheck on LinkedIn';links[1].innerHTML=linkedinSvg;}
  if(links[2]){links[2].href='https://www.facebook.com/creativecheck.app/';links[2].target='_blank';links[2].rel='noreferrer';links[2].ariaLabel='CreativeCheck on Facebook';links[2].innerHTML=facebookSvg;}
  if(!links[2]){const a=document.createElement('a');a.className='footer-social-icon';a.href='https://www.facebook.com/creativecheck.app/';a.target='_blank';a.rel='noreferrer';a.ariaLabel='CreativeCheck on Facebook';a.innerHTML=facebookSvg;box.appendChild(a);}
}
new MutationObserver(fixSocial).observe(document.documentElement,{childList:true,subtree:true});
fixSocial();
