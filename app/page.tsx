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
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
      {/* Left Text Section */}
      <div className="flex-1 text-left">
        <h1 className="text-4xl font-bold mb-4 font-parkinsans">
          <Balancer className="font-black">Trnava Region <span className="text-primary">Innovates</span></Balancer>
        </h1>
        <p className="font-barlow">
        Budujeme inovačný ekosystém Trnavského kraja, ktorý podporuje zelenú, digitálnu a udržateľnú transformáciu. Prepájame verejný, akademický a podnikateľský sektor, aby sme priniesli nové technológie a príležitosti pre región.</p>
        <div className="flex mt-16 flex-col gap-4">
          <div>
            <Button asChild className="rounded-full btnfix mb-16 text-white prose-color:m-0 bg-primary font-parkinsans">
              <Link className="color-white" href="#mail">Chcem byť súčasťou</Link>
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
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-12 font-parkinsans">
      <b>Bude</b> súčasťou projektu:
      </h2>
      <div className="flex flex-col md:flex-row gap-16">
        {/* Feature 1 */}
        <div className="flex-1 text-center p-2">
          <Image src="/Ikona1.svg" alt="Innovation Icon" width={150} height={150} className="mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2 font-parkinsans">Mapovanie a plánovanie inovácií</h3>
          <p className="text-sm font-barlow">
          Pomáhame firmám a organizáciám identifikovať nové príležitosti v oblasti inovácií prostredníctvom analýzy dát, trendov a regionálnych potrieb. Spoločne plánujeme strategické kroky na podporu technologického rozvoja.
          </p>
        </div>
        {/* Feature 2 */}
        <div className="flex-1 text-center p-2">
        <Image src="/ikona2.svg" alt="Innovation Icon" width={150} height={150} className="mx-auto mb-4" />
        <h3 className="text-2xl font-semibold mb-2 font-parkinsans">Budovanie infraštruktúry a technológií</h3>
          <p className="text-sm font-barlow">
          Vytvárame moderné priestory pre prototypovanie a vývoj, vybavené 3D tlačiarňami, VR/AR riešeniami a ďalšími technológiami. Firmy tak získajú prístup k pokročilému vybaveniu priamo v regióne.
          </p>
        </div>
        {/* Feature 3 */}
        <div className="flex-1 text-center p-2">
        <Image src="/ikona3.svg" alt="Innovation Icon" width={150} height={150} className="mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2 font-parkinsans">Prepájanie partnerov a zdieľanie znalostí</h3>
          <p className="text-sm font-barlow">
          Organizujeme networkingové podujatia, workshopy a programy zamerané na spoluprácu medzi firmami, školami a výskumnými inštitúciami. Zdieľame know-how a pomáhame vytvárať partnerstvá, ktoré posúvajú región dopredu.
          </p>
        </div>
      </div>
    </section>
  );
};

// Divider Section Component
const DividerSection = () => {
  return (
    <section className="py-16">
      <div className="flex justify-center mb-16">
        <Image src="/divider.svg" alt="Divider" width={72} height={24} />
      </div>
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 relative h-[450px]">
        <Image
    src="/obr1.jpg"
    alt="Innovation Hub"
    layout="fill" // Use Next.js layout prop for responsive images
    className="rounded-lg fiximg my-0 object-cover"
    style={{ objectFit: 'cover' }}
  />
        </div>
        <div className="flex-1">
          <div className="space-y-4 font-barlow">
            <p className="text-lg">
              <strong className="font-parkinsans">Firmy:</strong><br/>
              Staňte sa súčasťou siete inovácií. Objavte nové technológie, získajte prístup k talentom a posuňte svoje produkty na vyššiu úroveň.
            </p>
            <p className="text-lg">
              <strong className="font-parkinsans">Školy a univerzity:</strong><br/>
              Využite naše vybavenie a prepojte teóriu s praxou. Pripravte svojich študentov na úspešnú kariéru v inovačných odboroch.
            </p>
            <p className="text-lg">
              <strong className="font-parkinsans">Mestá a obce:</strong><br/>
              Spolupracujte na riešeniach, ktoré zlepšia kvalitu života vo vašej komunite. Podporte udržateľnosť a rozvoj vášho regiónu.
            </p>
            <p className="text-lg">
              <strong className="font-parkinsans">Mladí ľudia:</strong><br/>
              Zapojte sa do reálnych projektov, rozvíjajte svoje zručnosti a tvorte budúcnosť inovácií v regióne.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Stats Section Component
const StatsSection = () => {
  return (
<section className="bg-primary text-white py-16 relative">
  <Container>
    <div className="flex flex-col md:flex-row relative h-full w-full">
      {/* Stat 1 */}
      <div className="flex-1 centered px-8 py-8 flex flex-col items-center relative before:content-[''] before:absolute before:top-0 before:left-0 before:bottom-0 before:w-px before:bg-white">
        <div className="text-6xl center mb-4 font-bold font-parkinsans">
          <CountUp end={6} duration={2500} suffix="+" />
        </div>
        <div className="text-xl font-bold mb-8 animate-bounce font-parkinsans">milónov</div>
        <p className="text-center font-barlow">Rozpočet projektu na rozvoj inovácií</p>
      </div>
      {/* Stat 2 */}
      <div className="flex-1 px-8 py-8 flex flex-col items-center relative before:content-[''] before:absolute before:top-0 before:left-0 before:bottom-0 before:w-px before:bg-white">
        <div className="text-6xl mb-4 font-bold font-parkinsans">
          <CountUp end={63} duration={2000} />
        </div>
        <div className="text-xl mb-8 font-bold animate-bounce font-parkinsans">mesiacov</div>
        <p className="text-center font-barlow">Trvanie projektu od roku 2024 do 2029</p>
      </div>
      {/* Stat 3 */}
      <div className="flex-1 px-8 py-8 flex flex-col  items-center relative before:content-[''] before:absolute before:top-0 before:left-0 before:bottom-0 before:w-px before:bg-white after:content-[''] after:absolute after:top-0 after:right-0 after:bottom-0 after:w-px after:bg-white">
        <div className="text-6xl font-bold mb-4 font-parkinsans">
          <CountUp end={50} duration={2300} suffix="+" />
        </div>
        <div className="text-xl font-bold animate-bounce mb-8 center text-center font-parkinsans">partnerov</div>
        <p className="text-center font-barlow">Prepojenie verejného, akademického a podnikateľského sektora</p>
      </div>
    </div>
  </Container>
</section>

  
  );
};
