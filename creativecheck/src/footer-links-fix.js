// Footer link + contact copy fix — leaves the rest of the site untouched.
const fixCreativeCheckFooter = () => {
  const footer = document.querySelector('.cc-footer-premium')
  if (!footer) return

  const note = footer.querySelector('.footer-note')
  if (note) {
    note.textContent = 'For support, correction requests, partnerships or general enquiries.'
  }

  const social = footer.querySelector('.footer-social')
  if (social) {
    social.innerHTML = ''
    const links = [
      { label: '◎ Instagram', href: 'https://www.instagram.com/creativecheck.app/', external: true },
      { label: 'in LinkedIn', href: 'https://www.linkedin.com/company/creativecheck/?viewAsMember=true', external: true }
    ]
    links.forEach(({label, href}) => {
      const a = document.createElement('a')
      a.href = href
      a.target = '_blank'
      a.rel = 'noopener noreferrer'
      a.textContent = label
      a.setAttribute('aria-label', label.replace(/^◎ |^in /, ''))
      social.appendChild(a)
    })
  }
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fixCreativeCheckFooter)
else fixCreativeCheckFooter()
