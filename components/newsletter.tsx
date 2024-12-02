'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";

export const Newsletter = () => {
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
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error('Subscription failed');
      
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="mail" className="py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Poďte s nami spolupracovať</h2>
        <p className="text-gray-600 mb-8">
        Či ste firma, organizácia, alebo jednotlivec, vaše nápady môžu byť súčasťou veľkých zmien. Zapojením do Trnava Region Innovates získate prístup k moderným technológiám, odborným znalostiam a možnosť formovať inovácie v regióne
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
        <div className="flex gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Vaša emailová adresa"
            required
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button 
            type="submit"
            disabled={status === 'loading'}
            className="relative top-1 text-blue-600 bg-transparent border-none text-lg underline hover:bg-transparent"
          >
            {status === 'loading' ? 'Registrovanie...' : 'Odoslať'}
          </Button>
        </div>
        
        {status === 'success' && (
          <p className="mt-4 text-green-600 text-center">Ďakujeme za vašu registráciu!</p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-red-600 text-center">Nastala chyba. Skontrolujte vašu emailovú adresu.</p>
        )}
      <div className="mt-4 flex items-center gap-2">
        <input
          type="checkbox"
          id="gdpr-consent"
          required
          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
        <label htmlFor="gdpr-consent" className="text-sm text-gray-600">
          Súhlasím s{" "}
          <a 
            href="/gdpr" 
            className="text-blue-600 underline hover:text-blue-800"
          >
            ochranou osobných údajov
          </a>
        </label>
      </div>
      </form>
    </section>
  );
};

export default Newsletter;
