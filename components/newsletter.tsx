'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Balancer from 'react-wrap-balancer';
import Link from 'next/link';
import { useLanguage } from '@/components/nav/nav-switcher';

export const Newsletter = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email_address: email,
          status: 'subscribed',
          tags: ['tregino']
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Subscription failed');
      }
      
      setStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setStatus('error'); 
    }
  };

  return (
    <section id="mail" className="py-16 relative overflow-y-clip">
      <div className="text-center mb-8">
        <Image
          src="/ikonka.svg"
          alt="Newsletter Icon"
          width={74}
          height={72}
          className="mx-auto mb-8"
        />
        <h2 className="text-4xl text-center font-bold pb-4 font-parkinsans leading-3 mt-0">
          <Balancer className="font-black">{t.newsletter.title} <span className="text-primary">spolupracovať</span></Balancer>
        </h2>
        <p className="text-gray-600 mb-8">
          {t.newsletter.description}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
        <div className="flex gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.newsletter.emailPlaceholder}
            required
            className="flex-1 px-4 text-sm py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <Button 
            type="submit"             
            disabled={status === 'loading'}
            asChild 
            className="rounded-full btnfix text-white prose-color:m-0 bg-primary font-parkinsans"
          >
            <Link className="color-white" href="#mail">
              {status === 'loading' ? t.newsletter.loading : t.newsletter.submit}
            </Link>
          </Button>
        </div>
        
        {status === 'success' && (
          <p className="mt-4 text-green-600 text-center">{t.newsletter.success}</p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-red-600 text-center">{t.newsletter.error}</p>
        )}
        <div className="mt-4 flex items-center gap-2">
          <input
            type="checkbox"
            id="gdpr-consent"
            required
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="gdpr-consent" className="text-sm text-gray-600">
            {t.newsletter.gdpr.consent}{" "}
            <a 
              href="/gdpr" 
              className="text-blue-600 underline hover:text-blue-800"
            >
              {t.newsletter.gdpr.link}
            </a>
          </label>
        </div>
      </form>
      <div className="absolute -z-10 -left-96 top-100 w-full h-0 hidden md:block" style={{ margin: 0, padding: 0 }}>
        <div className="w1 h-1 relative top-32 left-10 bg-[linear-gradient(180deg,#00BEA8_0%,#001454_79.67%)] transform rotate-45"></div>
        <div className="w2 relative top-20 -left-40 h-1 bg-[linear-gradient(180deg,#00BEA8_0%,#001454_79.67%)] transform rotate-45 mt-16"></div>
        <div className="w2 relative top-20 -left-48 h-1 bg-[linear-gradient(180deg,#00BEA8_0%,#001454_79.67%)] transform rotate-45 mt-16"></div>
        <div className="w1 relative top-20 -left-40 h-1 bg-[linear-gradient(180deg,#00BEA8_0%,#001454_79.67%)] transform rotate-45 mt-16"></div>
      </div>
    </section>
  );
};

export default Newsletter;
