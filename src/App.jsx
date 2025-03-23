import { useState } from 'react'

export default function App() {
  const [showBanner, setShowBanner] = useState(true)
  const [showCookieAlert, setShowCookieAlert] = useState(true)
  const [showCoolPopup, setShowCoolPopup] = useState(true)

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white border-b z-40">
        <nav className="max-w-7xl mx-auto px-4 w-full">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="h-8 w-24 bg-gray-200 rounded"></div>
              <div className="hidden md:flex ml-8 space-x-8">
                <a href="#" className="flex items-center text-black-500  font-bold">
                  Product
                  <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                <a href="#" className="text-black-500  font-bold">Enterprise</a>
                <a href="#" className="text-black-500  font-bold">Resources</a>
                <a href="#" className="text-black-500  font-bold">Pricing</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-900">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <a href="#" className="text-gray-500 hover:text-gray-900">Sign in</a>
              <a href="#" className="bg-white text-[#611f69] border border-[#611f69] px-4 py-2 rounded hover:bg-gray-50">
                TALK TO SALES
              </a>
              <a href="#" className="bg-[#611f69] text-white px-4 py-2 rounded hover:bg-[#4a1751]">
                TRY FOR FREE
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Top Banner */}
      {showBanner && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50">
          <div className="bg-[#1264A3] text-white px-6 py-3 rounded-full">
            <div className="flex items-center justify-between">
              <p className="text-sm">
                Slack is your digital HQ. Meet the new features keeping teams connected in a work-from-anywhere world.{' '}
                <a href="#" className="underline">Let's go →</a>
              </p>
              <button
                onClick={() => setShowBanner(false)}
                className="text-white hover:opacity-75 ml-4"
              >
                ×
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <main className="pt-40 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Slack is where the future works
            </h1>
            <p className="text-xl text-black-500 mb-8">
              Transform the way you work with one place for everyone and everything you need to get stuff done.
            </p>
            <div className="flex space-x-4">
              <button className="bg-[#611f69] text-white px-6 py-3 rounded hover:bg-[#4a1751]">
                TRY FOR FREE
              </button>
              <button className="flex items-center text-white rounded hover:opacity-90 overflow-hidden h-12">
                <div className="bg-white h-full flex items-center justify-center px-3 border-4 border-[#4285F4]">
                  <img src="/google-logo.svg" alt="Google" className="h-5 w-5" />
                </div>
                <div className="bg-[#4285F4] h-full flex items-center px-4">
                  <span className="text-sm font-medium">SIGN UP WITH GOOGLE</span>
                </div>
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-lg shadow-xl bg-[#4A154B] p-4 aspect-[4/3] relative">
              <div className="absolute top-2 left-2 flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              
              <div className="mt-4 flex h-full">
                <div className="w-1/4 bg-[#3F0E40] rounded-l-md p-2">
                  <div className="bg-[#350D36] rounded px-2 py-1 text-white text-xs mb-3">
                    Channels
                  </div>
                  <div className="text-white opacity-80 text-xs mb-2"># project-unicorn</div>
                  <div className="text-white opacity-60 text-xs"># general</div>
                </div>
                <div className="w-3/4 bg-white rounded-r-md p-2">
                  <div className="border-b pb-2 mb-2">
                    <div className="text-black font-medium text-xs"># project-unicorn</div>
                  </div>
                  <div className="flex items-start mb-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500 mr-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-xs font-medium">Zoe Maxwell</div>
                      <div className="text-xs text-gray-600">Are we ready for launch?</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-yellow-500 mr-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-xs font-medium">Matt Brewer</div>
                      <div className="text-xs text-gray-600">Here's the run of show:</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logos Section */}
        <div className="mt-24 w-full">
          <div className="grid grid-cols-2 md:grid-cols-7 gap-8 items-center justify-items-center opacity-60">
            <div className="h-8 w-16 bg-gray-200 rounded"></div>
            <div className="h-8 w-24 bg-gray-200 rounded"></div>
            <div className="h-8 w-16 bg-gray-200 rounded"></div>
            <div className="h-8 w-20 bg-gray-200 rounded"></div>
            <div className="h-8 w-12 bg-gray-200 rounded"></div>
            <div className="h-8 w-12 bg-gray-200 rounded"></div>
            <div className="h-8 w-16 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Video Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">
          <div className="relative aspect-video bg-[#611f69] rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-[#611f69]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 5v10l8-5-8-5z" />
                </svg>
              </button>
            </div>
            <div className="w-full h-full bg-gradient-to-br from-[#611f69] to-[#7c3085] opacity-75"></div>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Now is your moment to build a better tomorrow
            </h2>
            <p className="text-xl text-gray-500 mb-8">
              We've seen what the future holds. Now it's time to decide what it will be.
            </p>
            <button className="bg-transparent text-[#611f69] border-2 border-[#611f69] px-6 py-3 rounded hover:bg-gray-50">
              WATCH VIDEO
            </button>
          </div>
        </div>
      </main>

      {/* Cookie Alert Popup */}
      {showCookieAlert && (
        <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-xl p-4 max-w-sm border border-gray-200 z-50">
          <div className="flex items-start space-x-4">
            <div className="flex-1">
              <p className="text-sm text-gray-600 mb-4">
                This website uses cookies to enhance user experience and analyze website traffic. You also share information about your use of our site with our social media, advertising and analytics partners.{' '}
                <a href="#" className="text-purple-600 underline">More info</a>
              </p>
              <div className="w-full">
                <button 
                  onClick={() => setShowCookieAlert(false)}
                  className="w-full bg-[#611f69] text-white px-4 py-2 rounded text-sm hover:bg-[#4a1751]"
                >
                  ACCEPT ALL COOKIES
                </button>
              </div>
              
              {/* Wavy Hand Button and Cool Popup Container */}
              <div className="relative mt-2">
                {/* Cool Popup */}
                {showCoolPopup && (
                  <div className="bg-white rounded-lg shadow-xl p-3 border border-gray-200 z-50 absolute bottom-0 right-12 w-[calc(100%-60px)]">
                    <div className="relative">
                      <button 
                        onClick={() => setShowCoolPopup(false)}
                        className="absolute -top-3 -left-3 bg-gray-200 text-gray-600 hover:bg-gray-300 w-6 h-6 rounded-full flex items-center justify-center shadow-sm"
                      >
                        ×
                      </button>
                      <div className="pl-4">
                        <div className="flex items-center">
                          <p className="text-sm font-medium text-gray-800">Hey there,👋 want to know something cool?</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Wavy Hand Button */}
                <div className="flex justify-end">
                  <button 
                    onClick={() => setShowCoolPopup(!showCoolPopup)}
                    className="bg-[#4A154B] text-white px-3 py-1 rounded hover:bg-[#611f69] flex items-center justify-center"
                  >
                    <span className="text-xl animate-pulse">👋</span>
                  </button>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setShowCookieAlert(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
