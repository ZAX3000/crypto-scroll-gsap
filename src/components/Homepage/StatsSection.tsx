import React from 'react';

const stats = [
  { id: 1, value: 1200, label: 'Clients Served', plus: true },
  { id: 2, value: 85,   label: 'Countries Mined', plus: true },
  { id: 3, value: 4.7,  label: '★ Average Rating', plus: false },
];

const StatsSection: React.FC = () => (
  <section className="
    stats-section
    py-20
    relative       /* creates new stacking context */
    z-10           /* pulls it above the fixed mosaic */
    bg-white       /* or whatever bg your design needs */">
    <div className="container mx-auto flex justify-around">
      {stats.map(({ id, value, label, plus }) => (
        <div key={id} className="stat-item text-center">
          {/* Number */}
          <div
            className="
              stat-number
              text-6xl md:text-7xl
              font-extrabold
              leading-tight
            "
            data-target={value}
            data-plus={plus}
          >
            {/* initial display 0 or 0+ */}
            0{plus ? '+' : ''}
          </div>

          {/* Label */}
          <div
            className="
              stat-label
              mt-2
              text-base md:text-lg
              text-gray-400
              opacity-0
              transform -translate-y-2
              transition-all duration-500 ease-out
            "
          >
            {label}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default StatsSection;