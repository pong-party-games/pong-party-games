import { Clock, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import LogoImage from '../../app/assets/images/logo.png';
import UsaFlagFooter from '../../app/assets/images/usa-flag-footer.png';

const officeHours = [
  { day: 'Monday', hours: '9am – 5pm' },
  { day: 'Tuesday', hours: '9am – 5pm' },
  { day: 'Wednesday', hours: '9am – 5pm' },
  { day: 'Thursday', hours: '9am – 5pm' },
  { day: 'Friday', hours: '9am – 5pm' },
  { day: 'Saturday', hours: '9am – 1pm' },
  { day: 'Sunday', hours: 'Closed' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');

  return (
    <footer className="bg-[#1a2b4a] text-white">
      {/* Main Footer Content */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image
                src={LogoImage}
                alt="Pong Party Games"
                width={70}
                height={70}
                className="rounded-none"
              />
            </Link>
            <p className="font-body text-[15px] leading-relaxed text-gray-300 mb-2">
              The ultimate baseball party game for all ages. Handcrafted in the USA with premium quality materials.
            </p>
            <Image
              src={UsaFlagFooter}
              alt="Made in USA"
              width={120}
              height={40}
              className="rounded-none"
            />
          </div>

          {/* Location & Contact */}
          <div>
            <h3 className="font-display text-[18px] font-semibold mb-5">Contact Us</h3>
            <div className="space-y-4 font-body text-[15px]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#0066cc] mt-0.5 flex-shrink-0" strokeWidth={2} />
                <div>
                  <p className="text-gray-200">131 Wallace Ave, Unit 8</p>
                  <p className="text-gray-200">Downingtown, PA 19335</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#0066cc] flex-shrink-0" strokeWidth={2} />
                <a href="tel:484-356-4377" className="text-gray-200 hover:text-white transition-colors">
                  484-356-4377
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#0066cc] flex-shrink-0" strokeWidth={2} />
                <a href="mailto:info@pongpartygames.com" className="text-gray-200 hover:text-white transition-colors">
                  info@pongpartygames.com
                </a>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="font-display text-[18px] font-semibold mb-5 flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#0066cc]" strokeWidth={2} />
              Office Hours
            </h3>
            <div className="space-y-2 font-body text-[14px]">
              {officeHours.map((schedule) => (
                <div key={schedule.day} className="flex gap-4">
                  <span className="text-gray-300 min-w-[90px]">{schedule.day}:</span>
                  <span className={schedule.hours === 'Closed' ? 'text-gray-300' : 'text-gray-200'}>
                    {schedule.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links & Social */}
          <div>
            <h3 className="font-display text-[18px] font-semibold mb-5">Quick Links</h3>
            <nav className="space-y-3 font-body text-[15px] mb-8">
              <Link href="/how-to-play" className="block text-gray-200 hover:text-white transition-colors">
                How To Play
              </Link>
              <Link href="/about-us" className="block text-gray-200 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/reviews" className="block text-gray-200 hover:text-white transition-colors">
                Reviews
              </Link>
              <Link href="/custom-games" className="block text-gray-200 hover:text-white transition-colors">
                Custom Games
              </Link>
              <Link href="/refund-policy" className="block text-gray-200 hover:text-white transition-colors">
                Refund Policy
              </Link>
              <a
                href="https://ah2s1r-3i.myshopify.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-200 hover:text-white transition-colors"
              >
                Shop Now
              </a>
            </nav>

            <h4 className="font-display text-[16px] font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/pongpartygames"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0066cc] flex items-center justify-center hover:bg-[#0052a3] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" strokeWidth={2} />
              </a>
              <a
                href="https://instagram.com/pongpartygames"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0066cc] flex items-center justify-center hover:bg-[#0052a3] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" strokeWidth={2} />
              </a>
              <a
                href="https://tiktok.com/@pongpartygames"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0066cc] flex items-center justify-center hover:bg-[#0052a3] transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[14px] text-gray-400">
            <p className="font-body">
              &copy; {copyrightDate} Pong Party Games. All rights reserved.
            </p>
            <div>
              <Link href="/refund-policy" className="hover:text-white transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
