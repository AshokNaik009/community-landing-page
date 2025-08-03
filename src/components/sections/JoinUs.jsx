import React from 'react'
import Button from '../ui/Button'
import Card from '../ui/Card'

const JoinUs = () => {
  return (
    <section id="join" className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Join?
            </h2>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Whether you're in Dubai, Abu Dhabi, Sharjah, or anywhere else in the UAE, 
              all software engineers and QA professionals are welcome!
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold mb-8">Why Join UAE | MENA Software Dev Group?</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Network with Peers</h4>
                    <p className="text-primary-100">
                      Connect with 100+ like-minded professionals, share experiences, 
                      and build meaningful relationships that advance your career.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Learn & Grow</h4>
                    <p className="text-primary-100">
                      Stay updated with the latest technologies, best practices, 
                      and industry trends through knowledge sharing sessions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 002 2h2a2 2 0 002-2V6zM16 6a2 2 0 002 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Career Opportunities</h4>
                    <p className="text-primary-100">
                      Discover new opportunities, get mentorship, and accelerate 
                      your professional growth in the UAE's thriving tech scene.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Regular Meetups</h4>
                    <p className="text-primary-100">
                      Join our weekend gatherings every Saturday and Sunday. 
                      Consistent, reliable, and always worth your time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <Card.Content className="p-8 text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold mb-4">Get Started Today</h4>
                  <p className="text-primary-100 mb-6 leading-relaxed">
                    Joining is free and takes just a few clicks. 
                    Start your journey with the UAE's premier tech community.
                  </p>
                  <div className="space-y-4">
                    <Button 
                      variant="secondary" 
                      size="lg" 
                      className="w-full bg-white text-primary-600 hover:bg-gray-100"
                      onClick={() => window.open('https://www.linkedin.com/company/uae-mena-software-engineers-qa/', '_blank')}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      Follow on LinkedIn
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full border-white text-white hover:bg-white/10"
                      onClick={() => window.open('https://lu.ma/3newinli', '_blank')}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      View Events on Luma
                    </Button>
                  </div>
                </Card.Content>
              </Card>
              
              <div className="text-center">
                <p className="text-primary-200 mb-4">
                  🚀 Join 100+ professionals • 🌍 UAE-wide community • 📅 Weekly meetups
                </p>
                <p className="text-sm text-primary-300">
                  Free to join • Open to all experience levels • Building the future together
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                "Let's collaborate, innovate, and build the future of technology together!"
              </h3>
              <p className="text-primary-100 text-lg leading-relaxed">
                From every corner of the UAE - Dubai's innovation districts, Abu Dhabi's tech hubs, 
                Sharjah's startup ecosystem, and beyond - we're building something amazing together. 
                Your expertise, your passion, and your vision are exactly what we need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JoinUs