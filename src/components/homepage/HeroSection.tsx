import React from 'react';
import Link from '@docusaurus/Link';
import ThemedImage from '@theme/ThemedImage';

export default function HeroSection() {
  return (
      <>
        <section className="no-underline-links">
          <div className="flex flex-col items-center justify-between py-14 sm:px-14 text-white">
            <h2 className="mb-4 lg:text-8xl sm:text-7xl text-center text-white pt-40">
              Enterprise-ready commerce
            </h2>
            <p className="max-w-6xl text-center text-2xl pt-8">
              Launch faster, solve complex problems, and build world-class experiences with our suite of interconnected <b><a href="#" className="underline decoration-primary-100 decoration-4 font-extrabold underline-offset-8 text-white">e-Commerce
              Apps</a></b>, <b><a href="/api" className="underline decoration-primary-100 decoration-4 font-extrabold underline-offset-8 text-white">
                    APIs
              </a></b> & <b>
                <a href="/docs/developer-tools" className="underline decoration-primary-100 decoration-4 font-extrabold underline-offset-8 text-white">tools
              for developers</a></b>.
            </p>
            <div className="pt-10">
              <ThemedImage
                  sources={{
                    light: '/icons/homepage/downarrow.svg',
                    dark: '/icons/homepage/downarrow.svg',
                  }}
                  alt="View More"
                  loading="lazy"
              />
            </div>
          </div>
        </section>
      </>
  );
}
