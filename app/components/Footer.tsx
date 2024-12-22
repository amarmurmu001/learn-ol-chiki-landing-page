import Link from 'next/link'
import { Mail, BookOpen, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="animate-fade-up" style={{ animationDelay: '100ms' }}>
            <h3 className="font-bold text-2xl mb-6 font-ohno-softie">Learn Ol Chiki</h3>
            <div className="flex flex-col gap-4">
              <Link href="#features" className="text-gray-600 hover:text-black font-ohno-softie font-normal text-lg hover:scale-105 transition-transform">Interactive Lessons</Link>
              <Link href="#dictionary" className="text-gray-600 hover:text-black font-ohno-softie font-normal text-lg hover:scale-105 transition-transform">Dictionary</Link>
              <Link href="#practice" className="text-gray-600 hover:text-black font-ohno-softie font-normal text-lg hover:scale-105 transition-transform">Practice Exercises</Link>
            </div>
          </div>
          <div className="animate-fade-up" style={{ animationDelay: '200ms' }}>
            <h3 className="font-bold text-2xl mb-6 font-ohno-softie">Resources</h3>
            <div className="flex flex-col gap-4">
              <Link href="#history" className="text-gray-600 hover:text-black font-ohno-softie font-normal text-lg hover:scale-105 transition-transform">History of Ol Chiki</Link>
              <Link href="#community" className="text-gray-600 hover:text-black font-ohno-softie font-normal text-lg hover:scale-105 transition-transform">Community</Link>
              <Link href="#downloads" className="text-gray-600 hover:text-black font-ohno-softie font-normal text-lg hover:scale-105 transition-transform">Downloads</Link>
            </div>
          </div>
          <div className="animate-fade-up" style={{ animationDelay: '300ms' }}>
            <h3 className="font-bold text-2xl mb-6 font-ohno-softie">About</h3>
            <div className="flex flex-col gap-4">
              <Link href="#mission" className="text-gray-600 hover:text-black font-ohno-softie font-normal text-lg hover:scale-105 transition-transform">Our Mission</Link>
              <Link href="#team" className="text-gray-600 hover:text-black font-ohno-softie font-normal text-lg hover:scale-105 transition-transform">Team</Link>
              <Link href="/privacy-policy" className="text-gray-600 hover:text-black font-ohno-softie font-normal text-lg hover:scale-105 transition-transform">Privacy Policy</Link>
            </div>
          </div>
          <div className="animate-fade-up" style={{ animationDelay: '400ms' }}>
            <h3 className="font-bold text-2xl mb-6 font-ohno-softie">Contact</h3>
            <div className="flex flex-col gap-4">
              <Link 
                href="mailto:contact@olchiki.learn" 
                className="text-gray-600 hover:text-black flex items-center gap-3 font-ohno-softie font-normal text-lg hover:scale-105 transition-transform"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </Link>
              <Link 
                href="https://play.google.com/store/apps/details?id=com.olchiki.learn"
                className="text-gray-600 hover:text-black flex items-center gap-3 font-ohno-softie font-normal text-lg hover:scale-105 transition-transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BookOpen className="w-5 h-5" />
                Download App
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/" className="flex items-center gap-2 animate-slide-in">
            <span className="font-bold text-2xl font-ohno-softie">Learn Ol Chiki</span>
            <span className="text-[#FFD600] text-2xl">ᱚᱞ</span>
          </Link>
          <div className="text-lg text-gray-600 flex items-center gap-3 font-ohno-softie font-normal animate-slide-in" style={{ animationDelay: '100ms' }}>
            Made with <Heart className="w-5 h-5 text-red-500" /> for the Santali Community
          </div>
          <div className="text-lg text-gray-600 font-ohno-softie font-normal animate-slide-in" style={{ animationDelay: '200ms' }}>
            © {new Date().getFullYear()} Learn Ol Chiki. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

