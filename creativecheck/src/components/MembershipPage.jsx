import { useState } from 'react'

const PLANS = [
  {
    key: 'free',
    label: 'FREE ACCOUNT',
    title: 'Create your free account',
    price: '£0',
    description: 'Create your professional CreativeCheck presence and be discovered.',
    features: [
      'Professional Profile',
      'Professional Identity',
      'Public Discovery',
      'Connect your existing professional links'
    ],
    button: 'Create Your Free Account',
    href: '#add-profile-form'
  },
  {
    key: 'individual',
    label: 'INDIVIDUAL PREMIUM',
    title: 'Premium Individual · £6/month',
    price: '£6',
    description: 'Build your presence. Connect globally. Get discovered.',
    features: [
      'Professional Profile',
      'Professional Connections',
      'Global Reach',
      'Increased Visibility',
      'Promote Your Profile'
    ],
    button: 'Choose Premium Individual'
  },
  {
    key: 'business',
    label: 'BUSINESS PREMIUM',
    title: 'Premium Business · £39/month',
    price: '£39',
    description: 'Discover creative talent. Build your business presence. Reach further.',
    features: [
      'Business Profile',
      'Creative Talent Discovery',
      'Creative Connections',
      'Global Reach',
      'Increased Visibility',
      'Promote Your Business'
    ],
    button: 'Choose Premium Business'
  }
]

function PlanCard({plan,onAction}){
  return <article className={`membership-card premium membership-card-${plan.key}`}>
    <div className="membership-card-topline">
      <span className="membership-kicker">{plan.label}</span>
      {plan.key !== 'free' && <span className="membership-status">PREMIUM</span>}
    </div>
    <h3>{plan.title}</h3>
    <p>{plan.description}</p>
    <ul>{plan.features.map(feature=><li key={feature}>{feature}</li>)}</ul>
    <div className="membership-action-row">
      <span className="membership-price">{plan.price}{plan.key !== 'free' && <span>/month</span>}</span>
      {plan.href
        ? <a className="membership-button" href={plan.href}>{plan.button}</a>
        : <button type="button" className="membership-button" onClick={()=>onAction(plan.key)}>{plan.button}</button>}
    </div>
    {plan.key !== 'free' && <small className="membership-note">Payments are not connected yet — this is a product preview.</small>}
  </article>
}

export default function MembershipPage(){
  const [message,setMessage]=useState('')
  function handleAction(type){
    setMessage(type==='individual'
      ? 'Individual Premium selected — payment will be connected here next.'
      : 'Business Premium selected — payment will be connected here next.')
  }

  return <section className="membership-shell" id="membership">
    <div className="membership-intro">
      <span className="section-label">CREATIVECHECK · MEMBERSHIP</span>
      <h2>Choose your<br/><em>CreativeCheck account.</em></h2>
      <p>Start free. Upgrade when you are ready.</p>
    </div>

    <div className="membership-grid membership-grid-three">
      {PLANS.map(plan=><PlanCard key={plan.key} plan={plan} onAction={handleAction}/>)}
    </div>

    {message&&<div className="membership-preview-banner"><strong>{message}</strong><span>No payment has been taken.</span></div>}
  </section>
}
