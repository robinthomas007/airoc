import { siteConfig } from '@/app/lib/site';

import { MailIcon, SocialIcon, WhatsAppIcon } from './icons';

const quickLinks = ['Home', 'Services', 'Portfolio', 'Contact'];
const footerServices = [
  'Web Development',
  'Business Email',
  'Domain & Hosting',
  'Maintenance',
];

export default function VariantFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 pt-24 pb-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr_1fr_1.1fr]">
          <div>
            <div className="h-12 w-[210px]">
              <img
                src="/airoc-logo.png"
                alt={siteConfig.name}
                className="h-full w-full object-contain object-left"
              />
            </div>
            <p className="mt-7 text-[1.1rem] italic text-slate-500 md:text-[1.15rem]">
              &ldquo;Reactive. Creative. Adaptive.&rdquo;
            </p>

            <div className="mt-8 flex gap-4">
              {(['facebook', 'instagram', 'twitter'] as const).map((item) => (
                <a
                  key={item}
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:-translate-y-1 hover:border-[#5956e9] hover:text-[#5956e9]"
                >
                  <SocialIcon label={item} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[1.1rem] font-semibold text-slate-900 md:text-[1.15rem]">
              Quick Links
            </h3>
            <div className="mt-7 flex flex-col gap-5 text-[1rem] text-slate-500 md:text-[1.05rem]">
              {quickLinks.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-slate-900">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[1.1rem] font-semibold text-slate-900 md:text-[1.15rem]">
              Services
            </h3>
            <div className="mt-7 flex flex-col gap-5 text-[1rem] text-slate-500 md:text-[1.05rem]">
              {footerServices.map((item) => (
                <a key={item} href="#services" className="transition hover:text-slate-900">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[1.1rem] font-semibold text-slate-900 md:text-[1.15rem]">
              Contact Us
            </h3>
            <div className="mt-7 flex flex-col gap-5 text-[1rem] text-slate-500 md:text-[1.05rem]">
              <div className="flex items-center gap-4">
                <div className="text-[#5956e9]">◎</div>
                <span>{siteConfig.location}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-[#5956e9]">
                  <WhatsAppIcon className="h-5 w-5" />
                </div>
                <span>{siteConfig.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-[#5956e9]">
                  <MailIcon className="h-5 w-5" />
                </div>
                <span>{siteConfig.email}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-200 pt-10">
          <div className="flex flex-col gap-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between md:text-[0.95rem]">
            <p>© 2024 AiRoc Solutions. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="transition hover:text-slate-900">
                Privacy Policy
              </a>
              <a href="#" className="transition hover:text-slate-900">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
