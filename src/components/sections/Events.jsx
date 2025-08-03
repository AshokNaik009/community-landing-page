import React from 'react'
import Card from '../ui/Card'
import Button from '../ui/Button'
import Badge from '../ui/Badge'

const Events = () => {
  const upcomingEvents = [
    {
      title: 'Weekend Tech Meetup',
      date: 'Every Saturday & Sunday',
      time: 'Various Times',
      location: 'UAE-wide',
      description: 'Regular networking sessions for software engineers and QA professionals across the Emirates.',
      type: 'Recurring',
      image: 'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/event-covers/5q/c295f9b2-3c77-4eb6-b9fa-997838709771.jpg'
    }
  ]

  return (
    <section id="events" className="section-padding bg-gray-50">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Events & Meetups
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our regular gatherings and be part of the UAE's most active tech community
            </p>
          </div>
          
          <div className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Regular Community Meetups
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Weekend Schedule</h4>
                      <p className="text-gray-600">
                        Every Saturday and Sunday, we host meetups across different Emirates, 
                        making it convenient for everyone to participate.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Multiple Locations</h4>
                      <p className="text-gray-600">
                        From Dubai's tech districts to Abu Dhabi's innovation hubs and beyond, 
                        we bring the community to you.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Diverse Community</h4>
                      <p className="text-gray-600">
                        Meet fellow software engineers, QA professionals, tech leads, and 
                        industry experts from various backgrounds and experience levels.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                {upcomingEvents.map((event, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-primary-500 to-primary-600 relative overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover mix-blend-overlay"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="primary" className="bg-white text-primary-600">
                          {event.type}
                        </Badge>
                      </div>
                    </div>
                    
                    <Card.Content className="p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">
                        {event.title}
                      </h4>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-gray-600">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {event.date}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {event.time}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {event.location}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-6">
                        {event.description}
                      </p>
                    </Card.Content>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Stay Updated with Our Events
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              All our events are hosted on Luma, where you can see detailed information, 
              RSVP, and get updates about upcoming meetups and special events.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                onClick={() => window.open('https://lu.ma/3newinli', '_blank')}
                className="text-lg px-8 py-4"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                View Events on Luma
              </Button>
              
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => window.open('https://www.linkedin.com/company/uae-mena-software-engineers-qa/', '_blank')}
                className="text-lg px-8 py-4"
              >
                Follow on LinkedIn
              </Button>
            </div>
            
            <div className="mt-8 text-sm text-gray-500">
              <p>Events are updated regularly • Free to attend • Open to all tech professionals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events