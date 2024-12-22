import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 text-center relative">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Top Left */}
          <div className="absolute top-0 left-10 w-24 h-24 bg-[#FFD600]/10 rounded-full floating-slow"></div>
          <div className="absolute top-20 left-20 w-16 h-16 bg-[#FFD600]/20 rounded-full floating"></div>
          
          {/* Top Right */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-[#FFD600]/10 rounded-full floating-reverse"></div>
          <div className="absolute top-40 right-20 w-20 h-20 bg-[#FFD600]/20 rounded-full floating-slow"></div>
          
          {/* Ol Chiki Characters */}
          <div className="absolute top-1/4 left-10 text-4xl text-[#FFD600]/40 floating-slow">ᱚ</div>
          <div className="absolute top-1/3 right-10 text-5xl text-[#FFD600]/40 floating">ᱞ</div>
          <div className="absolute bottom-1/4 left-20 text-6xl text-[#FFD600]/30 floating-reverse">ᱪ</div>
          <div className="absolute bottom-1/3 right-20 text-4xl text-[#FFD600]/30 floating">ᱤ</div>
          
          {/* Additional Shapes */}
          <div className="absolute bottom-20 left-10 w-40 h-40 border-4 border-[#FFD600]/10 rounded-full floating"></div>
          <div className="absolute bottom-40 right-10 w-32 h-32 border-4 border-[#FFD600]/10 rounded-full floating-reverse"></div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-12 leading-tight font-ohno-softie tracking-tight animate-fade-up relative">
          Learn Ol Chiki<br />
          <span className="text-5xl md:text-7xl animate-fade-up animate-delay-100">Anytime, Anywhere.</span>
        </h1>
        <p className="text-gray-600 mb-12 max-w-4xl mx-auto text-xl md:text-2xl font-ohno-softie font-normal animate-fade-up animate-delay-300 relative">
          The Ol Chiki script, designed by Pandit Raghunath Murmu in 1925, is the cornerstone of Santali language and culture. It provides a unique way to write and preserve the language spoken by millions of Santals across India, Bangladesh, and Nepal.
        </p>
        <div className="flex flex-col items-center gap-6 animate-fade-up animate-delay-400 relative">
          <Link 
            href="#features"
            className="inline-flex items-center gap-3 px-12 py-6 bg-[#FFD600] text-black rounded-full hover:bg-[#FFD600]/90 font-ohno-softie text-2xl shadow-lg transition-all hover:scale-105 hover:-rotate-2 floating-pulse"
          >
            Start Learning
          </Link>
          <p className="text-gray-500 font-ohno-softie text-xl">It&apos;s 100% free!</p>
        </div>

        {/* Main Image */}
        <div className="mt-24 relative animate-scale-in animate-delay-300">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white z-10" />
          <Image
            src="https://placehold.co/1200x800/png?text=Ol+Chiki+Learning"
            alt="Ol Chiki script examples and learning materials"
            width={1200}
            height={800}
            className="mx-auto rounded-3xl shadow-2xl"
            priority
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-24 md:py-32">
        <h2 className="text-5xl md:text-7xl font-bold text-center mb-8 font-ohno-softie tracking-tight animate-fade-up">
          Features of Learn Chiki
        </h2>
        <p className="text-center mb-20 max-w-3xl mx-auto text-xl md:text-2xl text-gray-600 font-ohno-softie font-normal animate-fade-up animate-delay-100">
          Learn Chiki is a platform designed to bridge this gap. It aims to make learning Ol Chiki fun, accessible, and engaging for learners of all ages.
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              title: "Interactive Quizzes",
              description: "Test your knowledge with quizzes that reinforce the fundamentals of Ol Chiki. From recognizing letters to forming words, the quizzes are designed to make learning enjoyable and memorable.",
              icon: "📝"
            },
            {
              title: "Comprehensive Dictionary",
              description: "The integrated dictionary allows you to explore the meaning and usage of Santali words, making it easier to expand your vocabulary while understanding their cultural significance.",
              icon: "📚"
            },
            {
              title: "Word Games",
              description: "Learning through play is always effective. Our word games challenge you to solve puzzles, match letters, and build words using the Ol Chiki script. It&apos;s an exciting way to stay motivated!",
              icon: "🎮"
            },
            {
              title: "Translation Tool",
              description: "Seamlessly translate words and phrases between Santali and other languages. Whether you&apos;re a beginner or an advanced learner, this tool simplifies communication and comprehension.",
              icon: "🔄"
            }
          ].map((feature, i) => (
            <div 
              key={i}
              className="p-8 bg-gray-50 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4 font-ohno-softie">{feature.title}</h3>
              <p className="text-gray-600 font-ohno-softie font-normal text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How Learn Chiki Stands Out Section */}
      <section className="bg-gray-50 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-7xl font-bold text-center mb-16 font-ohno-softie tracking-tight animate-fade-up">
            How Learn Chiki Stands Out
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "User-Friendly Design",
                description: "Learn Chiki has been designed keeping in mind both first-time learners and fluent speakers. Its intuitive interface ensures a smooth learning experience."
              },
              {
                title: "Cultural Relevance",
                description: "Beyond just teaching the script, the app celebrates the history and culture of the Santali people through its design, content, and features."
              },
              {
                title: "Accessible Anytime",
                description: "Whether you&apos;re on a smartphone or tablet, Learn Chiki is available wherever you are, making learning flexible and convenient."
              }
            ].map((feature, i) => (
              <div 
                key={i}
                className="bg-white p-8 rounded-3xl hover:shadow-xl transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <h3 className="text-2xl font-bold mb-4 font-ohno-softie">{feature.title}</h3>
                <p className="text-gray-600 font-ohno-softie font-normal text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Movement Section */}
      <section className="container mx-auto px-4 py-24 md:py-32 text-center">
        <h2 className="text-5xl md:text-7xl font-bold mb-12 font-ohno-softie tracking-tight animate-fade-up">
          Join the Movement
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-600 mb-12 font-ohno-softie font-normal text-xl md:text-2xl animate-fade-up animate-delay-100">
            Learning Ol Chiki isn&apos;t just about mastering a script; it&apos;s about reconnecting with a heritage that deserves recognition in today&apos;s globalized world. Whether you&apos;re a part of the Santali community or an enthusiast of indigenous languages, Learn Chiki offers you an opportunity to contribute to the preservation and growth of this beautiful language.
          </p>
          <p className="text-3xl md:text-4xl font-ohno-softie text-black mt-16 animate-fade-up animate-delay-200">
            Let&apos;s celebrate diversity in communication and keep the spirit of Ol Chiki alive for generations to come!
          </p>
        </div>
      </section>

     
    </div>
  )
}

