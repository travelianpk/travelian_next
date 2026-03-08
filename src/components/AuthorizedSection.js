"use client";

import Image from "next/image";

export default function AuthorizedSection() {
  return (
    <section className="authorized-section">
      <div className="authorized-container">

        <h2 className="authorized-title">
          Officially Registered & <span>Accredited</span>
        </h2>

        <div className="authorized-grid">

          <div className="authorized-card">
            <Image src="/images/SECP.webp" alt="SECP" width={140} height={140} />
          </div>

          <div className="authorized-card">
            <Image src="/images/FBR-Logo.png" alt="FBR Pakistan" width={140} height={140} />
          </div>

          <div className="authorized-card">
            <Image src="/images/dts.jpeg" alt="DTS Tourism" width={140} height={140} />
            
          </div>

          <div className="authorized-card">
            <Image src="/images/iata-logo-header.svg" alt="IATA" width={140} height={140} />
            
          </div>

          <div className="authorized-card">
            <Image src="/images/taap-travel.png" alt="TAAP" width={140} height={140} />
           
          </div>

        </div>

      </div>
    </section>
  );
}