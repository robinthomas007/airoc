'use client';

import { useState } from 'react';
import { Alert, Button, TextInput, Textarea } from '@mantine/core';

import { buildWhatsAppLink, siteConfig } from '@/app/lib/site';

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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
        throw new Error(data.message ?? 'Unable to submit the form.');
      }

      setForm(initialState);
      setStatus({
        type: 'success',
        message:
          'Thanks, your enquiry has been received. We will get back to you shortly.',
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Something went wrong while submitting the form.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-slate-950 px-6 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="text-sm font-semibold tracking-[0.24em] text-indigo-200 uppercase">
            Contact
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">
            Let&apos;s build your next website.
          </h2>
          <p className="mt-4 max-w-xl text-lg text-slate-400">
            Share a few details about your business and what you want to launch.
            We&apos;ll help you shape the right package and next steps.
          </p>

          <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 text-slate-300">
            <p className="font-medium text-white">Prefer instant chat?</p>
            <p className="mt-2 text-slate-400">
              Reach out on WhatsApp for a quick discussion about timelines,
              pricing, and the type of website you need.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Button
                component="a"
                href={buildWhatsAppLink(
                  `Hi ${siteConfig.name}, I want to discuss my website requirements.`,
                )}
                target="_blank"
                rel="noreferrer"
                radius="xl"
                className="bg-cyan-400 text-slate-950 hover:bg-cyan-300"
              >
                Open WhatsApp
              </Button>
              <Button
                component="a"
                href="#top"
                radius="xl"
                variant="default"
                className="border border-white/10 bg-white/5 text-white hover:bg-white/10"
              >
                View Services First
              </Button>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <TextInput
              label="Your name"
              placeholder="Enter your full name"
              value={form.name}
              onChange={(event) => handleChange('name', event.currentTarget.value)}
              required
              radius="md"
              size="md"
            />
            <TextInput
              label="Email address"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={(event) => handleChange('email', event.currentTarget.value)}
              required
              radius="md"
              size="md"
            />
            <TextInput
              label="Phone / WhatsApp"
              placeholder="+91 98765 43210"
              value={form.phone}
              onChange={(event) => handleChange('phone', event.currentTarget.value)}
              radius="md"
              size="md"
            />
            <Textarea
              label="Project details"
              placeholder="Tell us about your business, goals, and required pages"
              value={form.message}
              onChange={(event) =>
                handleChange('message', event.currentTarget.value)
              }
              minRows={5}
              required
              radius="md"
              size="md"
            />

            {status ? (
              <Alert
                color={status.type === 'success' ? 'teal' : 'red'}
                radius="md"
              >
                {status.message}
              </Alert>
            ) : null}

            <Button
              type="submit"
              loading={submitting}
              radius="xl"
              size="md"
              className="bg-indigo-500 text-white hover:bg-indigo-400"
            >
              Send Enquiry
            </Button>

            <p className="text-sm text-slate-400">
              We usually respond within 24 hours
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
