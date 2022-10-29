import React from 'react'
import './PlanScreen.css'

const plans = [
  {
    id: 1,
    name: 'Basic',
    desc: '720p',
    active: true,
  },
  {
    id: 2,
    name: 'Standard',
    desc: '1080P',
  },
  {
    id: 3,
    name: 'Basic',
    desc: '4K + HDR',
  },
]
const PlanScreen = () => {
  return (
    <div className="planScreen">
      {plans.map(plan => {
        return (
          <div key={plan.id} className="planScreen__plan">
            <div className="planScreen__info">
              <h5>{plan.name}</h5>
              <h6>{plan.desc}</h6>
            </div>
            <button
              className={`${plan.active ? 'plan__btn-active' : 'plan__btn'}`}
            >
              {plan.active ? 'Current ' : 'Subscribe'}
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default PlanScreen
