'use client';

import { useState } from 'react';

import { buildWhatsAppLink, siteConfig } from '@/app/lib/site';
import { whatsAppGradientStyle } from '@/app/lib/whatsapp-style';

import { MailIcon, SparkIcon, WhatsAppIcon } from './icons';

type FormState = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: '',
  phone: '',
  email: '',
  message: '',
};

export default function VariantContact() {
  const [form, setForm] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message ?? 'Unable to submit your message.');
      }

      setForm(initialState);
      setStatus('Thanks, your message has been sent successfully.');
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.',
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="text-3xl font-medium tracking-tight text-slate-900 md:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-500 md:text-[1.05rem] md:leading-[1.55]">
            Let&apos;s build your website together. Reach out via the form or
            WhatsApp.
          </p>

          <div className="mt-12 flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef1ff] text-[#5956e9]">
                <MailIcon className="h-7 w-7" />
              </div>
              <div>
                <p className="text-sm font-semibold tracking-[0.18em] text-slate-400 uppercase">
                  Email Us
                </p>
                <p className="mt-1 text-xl font-semibold text-slate-900 md:text-[1.05rem]">
                  {siteConfig.email}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-[#5fc274]">
                <WhatsAppIcon className="h-7 w-7" />
              </div>
              <div>
                <p className="text-sm font-semibold tracking-[0.18em] text-slate-400 uppercase">
                  WhatsApp
                </p>
                <p className="mt-1 text-xl font-semibold text-slate-900 md:text-[1.05rem]">
                  {siteConfig.phoneDisplay}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-[1.7rem] bg-[#eef1ff] px-7 py-6 text-[#4f4fc9]">
            <div className="flex items-center gap-4">
              <SparkIcon className="h-6 w-6" />
              <p className="text-base font-medium md:text-[0.95rem]">
                We usually respond within 24 hours. Looking forward to working
                with you!
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-gray-100 bg-white p-10 shadow-2xl shadow-indigo-100/50">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-gray-700">
                  Name
                </span>
                <input
                  type="text"
                  value={form.name}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, name: event.target.value }))
                  }
                  placeholder="John Doe"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-base text-slate-900 transition-all focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-gray-700">
                  Phone
                </span>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, phone: event.target.value }))
                  }
                  placeholder="+91 00000 00000"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-base text-slate-900 transition-all focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-sm font-bold text-gray-700">
                Email Address
              </span>
              <input
                type="email"
                value={form.email}
                onChange={(event) =>
                  setForm((current) => ({ ...current, email: event.target.value }))
                }
                placeholder="john@example.com"
                required
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-base text-slate-900 transition-all focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-bold text-gray-700">
                Message
              </span>
              <textarea
                value={form.message}
                onChange={(event) =>
                  setForm((current) => ({ ...current, message: event.target.value }))
                }
                placeholder="Tell us about your project..."
                required
                rows={4}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-base text-slate-900 transition-all focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
              />
            </label>

            {status ? (
              <p className="text-base font-medium text-[#5956e9]">{status}</p>
            ) : null}

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-xl bg-indigo-600 py-4 text-lg font-bold text-white shadow-lg shadow-indigo-600/20 transition-all hover:bg-indigo-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting ? 'Sending...' : 'Send Message'}
            </button>

            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-gray-100" />
              <span className="mx-4 flex-shrink text-sm text-gray-400">OR</span>
              <div className="flex-grow border-t border-gray-100" />
            </div>

            <a
              href={buildWhatsAppLink(
                `Hi ${siteConfig.name}, I want to discuss my website requirements.`,
              )}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center gap-3 rounded-xl py-4 text-lg font-bold text-white transition-all hover:shadow-xl active:scale-[0.98]"
              style={whatsAppGradientStyle}
            >
              <WhatsAppIcon className="h-6 w-6" />
              Chat on WhatsApp Now
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}
