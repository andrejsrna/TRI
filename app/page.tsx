'use client';
import { Main, Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import "./globals.css";
import { useEffect, useState } from 'react';
import Newsletter from "@/components/newsletter";
import Image from "next/image";
import { useLanguage } from "@/components/nav/nav-switcher";

const CountUp = ({ end, duration = 5000, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};


export default function Home() {
  return (
    <Main>
      <Section>
        <Container>
          <HeroSection />
          <FeaturesSection />
        </Container>
        <Container>
          <DividerSection />
        </Container>
        <StatsSection />
        <Container>
          <Newsletter/>
        </Container>
      </Section>
    </Main>
  );
}

// Hero Section Component
const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col md:flex-row items-center mb-16 justify-between gap-8">
      {/* Left Text Section */}
      <div className="flex-1 text-left">
        <h1 className="text-4xl font-bold mb-4 font-parkinsans leading-tight">
          <Balancer className="font-black">{t.hero.title} <span className="text-primary">Innovates</span></Balancer>
        </h1>
        <p className="font-barlow leading-tight leading-3">
          {t.hero.description}
        </p>
        <div className="flex mt-16 flex-col gap-4">
          <div>
            <Button asChild className="rounded-full btnfix mb-16 text-white prose-color:m-0 bg-primary font-parkinsans">
              <Link className="color-white" href="#mail">{t.hero.cta}</Link>
            </Button>
          </div>
          <Image 
            src="/kira.png"
            alt="Secondary Hero Image"
            width={120}
            height={90}
            className="h-auto mt-16"
          />
        </div>
      </div>


      {/* Right Image Section */}
      <div className="flex-1">
        {/* eslint-disable-next-line */}
        <div className="relative">
          <div className="absolute -z-10 right-100 top-8 w-full h-96 hidden md:block">
            <div className="w1 h-1 relative top-32 left-10 bg-[linear-gradient(180deg,#00BEA8_0%,#001454_79.67%)] transform rotate-45"></div>
            <div className="w2 relative top-20 -left-40 h-1 bg-[linear-gradient(180deg,#00BEA8_0%,#001454_79.67%)] transform rotate-45 mt-16"></div>
            <div className="w2 relative top-20 -left-48 h-1 bg-[linear-gradient(180deg,#00BEA8_0%,#001454_79.67%)] transform rotate-45 mt-16"></div>
            <div className="w1 relative top-20 -left-40 h-1 bg-[linear-gradient(180deg,#00BEA8_0%,#001454_79.67%)] transform rotate-45 mt-16"></div>
          </div>
          <Image
            src="/hero.png"
            alt="Hero Image"
            width={500}
            height={300}
            className="w-full h-auto rounded-md relative"
          />
        </div>

      </div>
    </div>
  );
};

// Features Section Component
const FeaturesSection = () => {
  const { t } = useLanguage();
  
  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-12 font-parkinsans">
        <b>{t.features.title}</b>
      </h2>
      <div className="flex flex-col md:flex-row gap-16">
        {t.features.cards.map((card, index) => (
          <div key={index} className="flex-1 text-center p-2">
            <Image 
              src={`/Ikona${index + 1}.svg`} 
              alt="Innovation Icon" 
              width={150} 
              height={150} 
              className="mx-auto mb-4" 
            />
            <h3 className="text-2xl font-semibold mb-2 font-parkinsans">{card.title}</h3>
            <p className="text-sm font-barlow">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Divider Section Component
const DividerSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="mb-16">
      <h2 className="text-4xl text-center font-bold pb-16 font-parkinsans leading-3 mt-0">
        <Balancer className="font-black">{t.partners.title}</Balancer>
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 relative h-[450px]">
          <Image
            src="/obr1.jpg"
            alt="Innovation Hub"
            layout="fill"
            className="rounded-lg fiximg my-0 object-cover"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="flex-1">
          <div className="space-y-4 font-barlow">
            {Object.entries(t.partners.sections).map(([key, section]) => (
              <p key={key} className="text-lg">
                <strong className="font-parkinsans">{section.title}:</strong><br/>
                {section.description}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Stats Section Component
const StatsSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="bg-primary text-white py-4 relative">
      <Container>
        <div className="flex leading-tight flex-col md:flex-row relative h-full w-full">
          <div className="flex-1 centered px-8 py-8 flex flex-col items-center relative before:content-[''] before:absolute before:top-0 before:left-0 before:bottom-0 before:w-px before:bg-white">
            <div className="text-6xl center mb-4 font-bold font-parkinsans">
              <CountUp end={6} duration={2500} suffix="+" />
            </div>
            <div className="text-xl font-bold mb-8 animate-bounce font-parkinsans">{t.stats.millions}</div>
            <p className="text-center font-barlow">{t.stats.descriptions.budget}</p>
          </div>
          <div className="flex-1 px-8 py-8 flex flex-col items-center relative before:content-[''] before:absolute before:top-0 before:left-0 before:bottom-0 before:w-px before:bg-white">
            <div className="text-6xl mb-4 font-bold font-parkinsans">
              <CountUp end={63} duration={2000} />
            </div>
            <div className="text-xl mb-8 font-bold animate-bounce font-parkinsans">{t.stats.months}</div>
            <p className="text-center font-barlow">{t.stats.descriptions.duration}</p>
          </div>
          <div className="flex-1 px-8 py-8 flex flex-col items-center relative before:content-[''] before:absolute before:top-0 before:left-0 before:bottom-0 before:w-px before:bg-white after:content-[''] after:absolute after:top-0 after:right-0 after:bottom-0 after:w-px after:bg-white">
            <div className="text-6xl font-bold mb-4 font-parkinsans">
              <CountUp end={50} duration={2300} suffix="+" />
            </div>
            <div className="text-xl font-bold animate-bounce mb-8 center text-center font-parkinsans">{t.stats.partners}</div>
            <p className="text-center font-barlow">{t.stats.descriptions.collaboration}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};
