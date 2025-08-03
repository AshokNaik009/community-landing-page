import React from 'react'
import Card from '../ui/Card'

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Born from a vision to unite tech professionals across the UAE and MENA region
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    From Virtual to Reality
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    What started as virtual meetups in 2023 has evolved into a thriving community 
                    that brings together the brightest minds in software engineering and quality assurance 
                    from across the UAE.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Building Connections
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Whether you're in Dubai's tech hub, Abu Dhabi's innovation district, or Sharjah's 
                    growing startup scene, UAE | MENA Software Dev Group is your gateway to meaningful professional 
                    relationships and career growth.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Every Weekend, Every Connection Counts
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our regular Saturday and Sunday meetups have become the go-to destination for 
                    tech professionals looking to collaborate, innovate, and shape the future of 
                    technology in the region.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Diverse Community</h4>
                <p className="text-sm text-gray-600">
                  Engineers, QA professionals, and tech enthusiasts from all backgrounds
                </p>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Fast Growing</h4>
                <p className="text-sm text-gray-600">
                  From startup to 100+ active members in less than a year
                </p>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">UAE-Wide</h4>
                <p className="text-sm text-gray-600">
                  Connecting professionals across all Emirates
                </p>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Regular Events</h4>
                <p className="text-sm text-gray-600">
                  Consistent weekend meetups you can count on
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About