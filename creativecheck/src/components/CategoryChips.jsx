import { useState } from 'react'
import { MAIN_CATEGORIES } from '../data/categories'
import { CHIP_ICONS } from './Icons'

export default function CategoryChips() {
  const [active, setActive] = useState('all')

  const handleCategoryClick = (id) => {
    setActive(id)

    const studiosSection = document.getElementById('studios')

    if (studiosSection) {
      studiosSection.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="max-w-[920px] mx-auto px-6 mb-12">
      <div className="flex flex-wrap gap-[9px] justify-center">
        {MAIN_CATEGORIES.map((cat) => {
          const Icon = cat.icon
            ? CHIP_ICONS[cat.icon]
            : null

          const isActive = active === cat.id

          return (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className={`chip-base inline-flex items-center gap-[7px] px-[17px] py-[9px] rounded-full border text-[13px] font-medium cursor-pointer transition-all ${
                isActive
                  ? 'chip-active scale-[1.03]'
                  : 'bg-white border-gray-200 text-gray-700 hover:border-violet-300 hover:-translate-y-[1px]'
              }`}
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}
            >
              {Icon && (
                <Icon
                  size={13}
                  color={isActive ? 'white' : '#6b7280'}
                  sw={1.7}
                />
              )}

              {cat.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
