const INSTAGRAM_URL='https://www.instagram.com/creativecheck.app/'
const LINKEDIN_URL='https://www.linkedin.com/company/creativecheck/?viewAsMember=true'

function wireFooterSocial(){
  const social=document.querySelector('.cc-footer-premium .footer-social')
  if(!social) return
  const items=[...social.querySelectorAll('span')]
  if(items[0] && !items[0].querySelector('a')) items[0].innerHTML=`<a href="${INSTAGRAM_URL}" target="_blank" rel="noopener noreferrer">◎ Instagram</a>`
  if(items[1] && !items[1].querySelector('a')) items[1].innerHTML=`<a href="${LINKEDIN_URL}" target="_blank" rel="noopener noreferrer">in LinkedIn</a>`
}
function tidyFooterContact(){
  const note=document.querySelector('.cc-footer-premium .footer-note')
  if(note) note.textContent='For support, correction requests, partnerships or general enquiries.'
  const contact=document.querySelector('.cc-footer-premium .footer-contact-button')
  if(contact && !contact.dataset.emailBound){
    contact.dataset.emailBound='true'
    contact.addEventListener('click',()=>{window.location.href='mailto:info@creativecheck.app'})
  }
}
function init(){wireFooterSocial();tidyFooterContact();new MutationObserver(()=>{wireFooterSocial();tidyFooterContact()}).observe(document.body,{childList:true,subtree:true})}
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init()
