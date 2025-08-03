import React from 'react'
import Badge from '../ui/Badge'

const Stats = () => {
  const stats = [
    {
      number: '100+',
      label: 'Active Members',
      description: 'Growing community of passionate professionals',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      number: '2023',
      label: 'Founded',
      description: 'Started with a vision to unite UAE tech talent',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      number: '7',
      label: 'Emirates',
      description: 'Connecting professionals across all UAE regions',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      number: 'Weekly',
      label: 'Meetups',
      description: 'Regular Saturday/Sunday networking sessions',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ]

  const achievements = [
    { text: 'From Virtual to In-Person', badge: 'Evolution' },
    { text: 'Multi-Emirate Presence', badge: 'Growth' },
    { text: 'Software & QA Focus', badge: 'Specialized' },
    { text: 'MENA Region Impact', badge: 'Regional' }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-700 text-white">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Community by the Numbers
            </h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Our rapid growth reflects the strong demand for tech community in the UAE
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:bg-white/20 transition-all duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-white">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold mb-2 text-primary-100">
                  {stat.label}
                </div>
                <div className="text-primary-200 text-sm leading-relaxed">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-center mb-8">Our Journey</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <Badge variant="primary" className="bg-white/20 text-white border-white/30 mb-2">
                    {achievement.badge}
                  </Badge>
                  <p className="text-white font-medium">{achievement.text}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <div className="max-w-3xl mx-auto">
                <h4 className="text-2xl font-bold mb-4">The Growth Story</h4>
                <p className="text-primary-100 leading-relaxed mb-6">
                  What started as a small group of tech enthusiasts meeting virtually has evolved 
                  into the UAE's fastest-growing software engineering and QA community. Our journey 
                  from virtual meetups to regular in-person gatherings reflects the genuine need 
                  for connection and collaboration in the region's tech ecosystem.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-2xl font-bold text-primary-200 mb-1">2023</div>
                    <div className="text-sm text-primary-300">Virtual Start</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-2xl font-bold text-primary-200 mb-1">2024</div>
                    <div className="text-sm text-primary-300">In-Person Growth</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-2xl font-bold text-primary-200 mb-1">Future</div>
                    <div className="text-sm text-primary-300">Regional Expansion</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats