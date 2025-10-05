import React from "react";

export default function PolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12 pt-38 md:pt-38">
      <div className="max-w-4xl mx-auto bg-black/90 border border-gray-200/40 rounded-2xl shadow-xl p-8 space-y-8">
        <h1 className="text-4xl font-bold text-white border-b border-gray-200/40 pb-4">
          Legal Notices & Policy
        </h1>

        <p className="text-gray-300">
          In accordance with Articles 6-III and 19 of Law No. 2004-575 of June 21, 2004 on Confidence in the Digital Economy (LCEN), we provide the following information to visitors of <strong>Only Web</strong>.
        </p>

        {/* 1. Legal Information */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold border-l-4 border-gray-200/40 pl-4">
            1. Legal Information
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Site Owner: Only Web</li>
            <li>Email: <a href="mailto:onlywebco.com@gmail.com" className="text-white underline">onlywebco.com@gmail.com</a></li>
            <li>Region: </li>
            <li>Telephone: </li>
            <li>SIREN: </li>
          </ul>

          <h3 className="text-xl font-semibold mt-2">Publication Manager</h3>
          <p className="text-gray-300">Only Web Team - <a href="mailto:onlywebco.com@gmail.com" className="text-white underline">onlywebco.com@gmail.com</a></p>

          <h3 className="text-xl font-semibold mt-2">Hosting</h3>
          <p className="text-gray-300">
            Host: <br />
            Address: <br />
            Phone: 09 70 80 89 11
          </p>
        </div>

        {/* 2. Intellectual Property */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold border-l-4 border-gray-200/40 pl-4">
            2. Intellectual Property
          </h2>
          <p className="text-gray-300">
            All elements of the <strong>Only Web</strong> website—including text, images, graphics, logos, icons, and other content—are the exclusive property of Only Web or its partners. They are protected by French and international intellectual property laws.
          </p>
        </div>

        {/* 3. Limitations of Liability */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold border-l-4 border-gray-200/40 pl-4">
            3. Limitations of Liability
          </h2>
          <p className="text-gray-300">
            Only Web cannot be held liable for direct or indirect damage to your equipment when accessing this website. We decline responsibility for the use that may be made of information and content available on this site.
          </p>
        </div>

        {/* 4. Hypertext Links */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold border-l-4 border-gray-200/40 pl-4">
            4. Hypertext Links
          </h2>
          <p className="text-gray-300">
            This website may include links to external websites. Only Web has no control over these sites and is not responsible for their content.
          </p>
        </div>

        {/* 5. Protection of Personal Data */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold border-l-4 border-gray-200/40 pl-4">
            5. Protection of Personal Data
          </h2>
          <p className="text-gray-300">
            For information on the collection and processing of your personal data, please consult our <a href="/privacy-policy" className="text-white underline">Privacy Policy</a>.
          </p>
        </div>

        {/* 6. Applicable Law */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold border-l-4 border-gray-200/40 pl-4">
            6. Applicable Law and Jurisdiction
          </h2>
          <p className="text-gray-300">
            Any disputes relating to the use of the <strong>Only Web</strong> website are governed by French law. Exclusive jurisdiction is granted to the competent courts of [Your City], except where prohibited by law.
          </p>
        </div>

        <p className="text-gray-400 text-sm text-right">Updated: October 6, 2025</p>
      </div>
    </div>
  );
}
