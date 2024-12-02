'use client';
import { Main, Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import "./globals.css";
import { useEffect, useState } from 'react';
import Newsletter from "@/components/newsletter";
import Image from "next/image";

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
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
      {/* Left Text Section */}
      <div className="flex-1 text-left">
        <h1 className="text-4xl font-bold mb-4">
          <Balancer>Trnava Region Innovates</Balancer>
        </h1>
        <p>
        Budujeme inovačný ekosystém Trnavského kraja, ktorý podporuje zelenú, digitálnu a udržateľnú transformáciu. Prepájame verejný, akademický a podnikateľský sektor, aby sme priniesli nové technológie a príležitosti pre región.</p>
      </div>

      {/* Right Image Section */}
      <div className="flex-1">
        {/* eslint-disable-next-line */}
        <div className="relative">
          <div className="absolute -z-10 right-100 top-8 w-full h-96 hidden md:block">
            <div className="w1 h-1 relative top-32 left-10 bg-gradient-to-r from-[rgba(0,123,255,1)] to-[rgba(0,20,84,1)] transform rotate-45"></div>
            <div className="w2 relative top-20 -left-40 h-1 bg-gradient-to-r from-[rgba(0,123,255,1)] to-[rgba(0,20,84,1)] transform rotate-45 mt-16"></div>
            <div className="w2 relative top-20 -left-48 h-1 bg-gradient-to-r from-[rgba(0,123,255,1)] to-[rgba(0,20,84,1)] transform rotate-45 mt-16"></div>
            <div className="w1 relative top-20 -left-40 h-1 bg-gradient-to-r from-[rgba(0,123,255,1)] to-[rgba(0,20,84,1)] transform rotate-45 mt-16"></div>
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
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-12">
      <b>Bude</b> súčasťou projektu:
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Feature 1 */}
        <div className="flex-1 text-center p-2">
          <Image src="/Ikona1.svg" alt="Innovation Icon" width={150} height={150} className="mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Mapovanie a plánovanie inovácií</h3>
          <p className="text-sm">
          Pomáhame firmám a organizáciám identifikovať nové príležitosti v oblasti inovácií prostredníctvom analýzy dát, trendov a regionálnych potrieb. Spoločne plánujeme strategické kroky na podporu technologického rozvoja.
          </p>
        </div>
        {/* Feature 2 */}
        <div className="flex-1 text-center p-2">
        <Image src="/Ikona2.svg" alt="Innovation Icon" width={150} height={150} className="mx-auto mb-4" />
        <h3 className="text-2xl font-semibold mb-2">Budovanie infraštruktúry a technológií</h3>
          <p className="text-sm">
          Vytvárame moderné priestory pre prototypovanie a vývoj, vybavené 3D tlačiarňami, VR/AR riešeniami a ďalšími technológiami. Firmy tak získajú prístup k pokročilému vybaveniu priamo v regióne.
          </p>
        </div>
        {/* Feature 3 */}
        <div className="flex-1 text-center p-2">
        <Image src="/Ikona3.svg" alt="Innovation Icon" width={150} height={150} className="mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Prepájanie partnerov a zdieľanie znalostí</h3>
          <p className="text-sm">
          Organizujeme networkingové podujatia, workshopy a programy zamerané na spoluprácu medzi firmami, školami a výskumnými inštitúciami. Zdieľame know-how a pomáhame vytvárať partnerstvá, ktoré posúvajú región dopredu.
          </p>
        </div>
      </div>
    </section>
  );
};

// Stats Section Component
const StatsSection = () => {
  return (
    <section className="bg-blue-600 py-16 text-white">
      <Container>
      <div className="flex flex-col md:flex-row container mx-auto text-center divide-y md:divide-y-0 md:divide-x divide-white">
        {/* Stat 1 */}
        <div className="flex-1 px-8 py-8">
          <div className="text-6xl font-bold mb-4">
            <CountUp end={6} duration={2500} suffix="+" />
          </div>
          <div className="text-5xl mb-4 animate-bounce">milónov</div>
          <p>
          Rozpočet projektu na rozvoj inovácií
          </p>
        </div>
        {/* Stat 2 */}
        <div className="flex-1 px-8 py-8">
          <div className="text-6xl font-bold mb-4">
            <CountUp end={63} duration={2000}/>
          </div>
          <div className="text-5xl mb-4 animate-bounce">mesiacov</div>
          <p>
          Trvanie projektu od roku 2024 do 2029
          </p>
        </div>
        {/* Stat 3 */}
        <div className="flex-1 px-8 py-8">
          <div className="text-6xl font-bold mb-4">
            <CountUp end={50} duration={2300} suffix="+" />
          </div>
          <div className="text-5xl mb-4 animate-bounce">partnerov</div>
          <p>
          Prepojenie verejného, akademického a podnikateľského sektora
          </p>
        </div>
      </div>
      </Container>
    </section>
  );
};
