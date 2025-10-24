
import React from "react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="bg-white text-[#0d2b2b] font-primary">
      
      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden xl:block">
        <div className="bg-[#0c3c3f] text-center text-white py-[8%]">
          <h1 className="text-[450%] font-bold mb-2 font-primary">Privacy Policy</h1>
        </div>

        <div className="max-w-6xl mx-auto px-[5%] py-[6%] text-[110%] leading-[180%] space-y-[5%]">
          
          {/* 1. Introduction */}
          <div>
            <h2 className="font-bold text-[170%] mb-[1%] font-primary text-[#305658]">1. Introduction</h2>
            <p>
              <span className="font-semibold font-sencondary text-[#305658]">SRI VELAN CONSTRUCTION</span> is committed to protecting the privacy of our clients and website users. This policy outlines how we collect, use, and safeguard your information.
            </p>
          </div>

          {/* 2. Information Collection */}
          <div>
            <h2 className="font-bold text-[170%] mb-[1%] font-primary text-[#305658]">2. Information Collection</h2>
            <ul className="list-disc ml-[4%] font-sencondary text-[#305658] space-y-[0.8%]">
              <li>Name, contact number, email address, and address.</li>
              <li>Project details, requirements, and preferences.</li>
            </ul>
          </div>

          {/* 3. Use of Information */}
          <div>
            <h2 className="font-bold text-[170%] mb-[1%] font-primary">3. Use of Information</h2>
            <ul className="list-disc ml-[4%] font-sencondary text-[#305658] space-y-[0.8%]">
              <li>Provide and improve our construction services.</li>
              <li>Respond to inquiries and service requests.</li>
              <li>Communicate project updates, billing, and contractual obligations.</li>
            </ul>
          </div>

          {/* 4. Sharing of Information */}
          <div>
            <h2 className="font-bold text-[170%] font-primary mb-[1%]">4. Sharing of Information</h2>
            <ul className="list-disc ml-[4%] font-sencondary text-[#305658] space-y-[0.8%]">
              <li>We do not sell or rent your information to third parties.</li>
              <li>Information may be shared with trusted service providers or contractors strictly for project execution purposes.</li>
              <li>Legal obligations may require disclosure of information if mandated by law.</li>
            </ul>
          </div>

          {/* 5. Data Security */}
          <div>
            <h2 className="font-bold text-[170%] font-primary mb-[1%] text-[#305658]">5. Data Security</h2>
            <p className="text-[120%] font-sencondary text-[#305658] ">
              We implement reasonable technical and administrative measures to protect personal data. Access to personal information is restricted to authorized personnel only.
            </p>
          </div>

          {/* 6. Cookies and Tracking */}
          <div>
            <h2 className="font-bold text-[170%] font-primary mb-[1%] text-[#305658]">6. Cookies and Tracking</h2>
            <p className="text-[100%] font-sencondary text-[#305658] ">
              Our website may use cookies to enhance user experience. Cookies do not collect personal information unless voluntarily provided.
            </p>
          </div>

          {/* 7. User Rights */}
          <div>
            <h2 className="font-bold text-[170%] font-primary mb-[1%] text-[#305658]">7. User Rights</h2>
            <p className="text-[100%] font-c2a text-[#305658] ">
              Users can request access, correction, or deletion of their personal information. Contact us at{" "}
              <Link href="https://mail.google.com/mail/u/0/?to=srivelamconstruction@gmail.com&su=Enquiry+Regarding+Construction+Services&fs=1&tf=cm"
                  target="_blank" className="text-green-700 underline">
                srivelanconstruction@gmail.com
              </Link>
              for any privacy-related requests.
            </p>
          </div>

          {/* 8. Updates */}
          <div>
            <h2 className="font-bold text-[170%] font-primary mb-[1%] text-[#305658]">8. Updates to Privacy Policy</h2>
            <p className="text-[100%] font-sencondary text-[#305658] ">
              We may update this privacy policy from time to time. Updated policies will be posted on our website with the effective date.
            </p>
          </div>

          {/* 9. Contact */}
          <div>
            <h2 className="font-bold text-[170%] font-primary mb-[1%] text-[#305658]">9. Contact</h2>
            <p className="text-[100%] font-sencondary text-[#305658] ">For any questions regarding terms, conditions, or privacy, contact:</p>
            <p className="mt-[1%] font-semibold font-sencondary text-[#305658]">SRI VELAN CONSTRUCTION</p>
            <p className="text-[100%] font-sencondary text-[#305658] ">Phone: 8248501872</p>
            <p className="text-[100%] font-c2a text-[#305658]">
              Email:{" "}
             <Link href="https://mail.google.com/mail/u/0/?to=srivelamconstruction@gmail.com&su=Enquiry+Regarding+Construction+Services&fs=1&tf=cm"
                  target="_blank" className="text-green-700 underline">
                srivelanconstruction@gmail.com
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* ================= LAPTOP VIEW ================= */}
      <div className="hidden lg:block xl:hidden">
        <div className="bg-[#0c3c3f] text-center text-white py-[10%]">
          <h1 className="text-[450%] font-bold font-primary mb-2">Privacy Policy</h1>
        </div>

        <div className="max-w-5xl mx-auto px-[8%] py-[7%] text-[100%] leading-[170%] space-y-[5%]">
          <div>
            <h2 className="font-bold text-[170%] font-primary mb-[1%] text-[#305658]">1. Introduction</h2>
            <p className="text-[110%] pt-[3%] font-sencondary text-[#305658] ">
              <span className="font-semibold font-sencondary">SRI VELAN CONSTRUCTION</span> is committed to protecting the privacy of our clients and website users. This policy outlines how we collect, use, and safeguard your information.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-[170%] font-primary mb-[1%] text-[#305658]">2. Information Collection</h2>
            <ul className="list-disc ml-[4%] space-y-[0.8%]">
              <li className="text-[110%] font-sencondary text-[#305658] ">Name, contact number, email address, and address.</li>
              <li className="text-[110%] font-sencondary text-[#305658]">Project details, requirements, and preferences.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-[150%] font-primary mb-[1%] text-[#305658]">3. Use of Information</h2>
            <ul className="list-disc ml-[4%] space-y-[0.8%]">
              <li className="text-[110%] font-sencondary text-[#305658] ">Provide and improve our construction services.</li>
              <li className="text-[110%] font-sencondary text-[#305658] ">Respond to inquiries and service requests.</li>
              <li className="text-[110%] font-sencondary text-[#305658]">Communicate project updates, billing, and contractual obligations.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-[150%] font-primary mb-[1%] text-[#305658]">4. Sharing of Information</h2>
            <ul className="list-disc ml-[4%] space-y-[0.8%]">
              <li className="text-[110%] font-sencondary text-[#305658]">We do not sell or rent your information to third parties.</li>
              <li className="text-[110%] font-sencondary text-[#305658]">Information may be shared with trusted service providers or contractors strictly for project execution purposes.</li>
              <li className="text-[110%] font-sencondary text-[#305658]">Legal obligations may require disclosure of information if mandated by law.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-[150%] font-primary mb-[1%] text-[#305658]">5. Data Security</h2>
            <p className="text-[110%] font-sencondary text-[#305658]">
              We implement reasonable technical and administrative measures to protect personal data. Access to personal information is restricted to authorized personnel only.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-[150%] font-primary mb-[1%] text-[#305658]">6. Cookies and Tracking</h2>
            <p className="text-[110%] font-sencondary text-[#305658]">
              Our website may use cookies to enhance user experience. Cookies do not collect personal information unless voluntarily provided.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-[150%] font-primary mb-[1%] text-[#305658]">7. User Rights</h2>
            <p className="text-[110%] font-sencondary text-[#305658] ">
              Users can request access, correction, or deletion of their personal information. Contact us at{" "}
              <Link href="https://mail.google.com/mail/u/0/?to=srivelamconstruction@gmail.com&su=Enquiry+Regarding+Construction+Services&fs=1&tf=cm"
                  target="_blank" className="text-green-700 font-c2a underline">
                srivelanconstruction@gmail.com
              </Link>
              for any privacy-related requests.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-[150%] font-primary mb-[1%] text-[#305658]">8. Updates to Privacy Policy</h2>
            <p className="text-[110%] font-sencondary text-[#305658] ">
              We may update this privacy policy from time to time. Updated policies will be posted on our website with the effective date.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-[150%] font-primary mb-[1%] text-[#305658]">9. Contact</h2>
            <p className="text-[110%] font-sencondary text-[#305658]">For any questions regarding terms, conditions, or privacy, contact:</p>
            <p className="mt-[1%] font-semibold font-secondary text-[#305658]">SRI VELAN CONSTRUCTION</p>
            <p className="text-[110%] font-sencondary text-[#305658]">Phone: 8248501872</p>
            <p className="text-[110%] font-sencondary text-[#305658]">
              Email:{" "}
              <Link href="https://mail.google.com/mail/u/0/?to=srivelamconstruction@gmail.com&su=Enquiry+Regarding+Construction+Services&fs=1&tf=cm"
                  target="_blank" className="text-green-700 font-c2a underline">
                srivelanconstruction@gmail.com
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* ================= TABLET VIEW ================= */}
      <div className="hidden md:block lg:hidden">
        <div className="bg-[#0c3c3f] text-center text-white py-[12%]">
          <h1 className="text-[350%] font-primary font-bold mb-2">Privacy Policy</h1>
        </div>

        <div className="max-w-4xl mx-auto px-[8%] py-[8%] text-[95%] leading-[165%] space-y-[5%]">
         <div>
            <h2 className="font-bold text-[170%] font-primary mb-[1%] text-[#305658]">1. Introduction</h2>
            <p className="text-[110%] pt-[3%] font-sencondary text-[#305658]">
              <span className="font-semibold font-sencondary">SRI VELAN CONSTRUCTION</span> is committed to protecting the privacy of our clients and website users. This policy outlines how we collect, use, and safeguard your information.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-[170%] font-primary mb-[1%] text-[#305658]">2. Information Collection</h2>
            <ul className="list-disc ml-[4%] space-y-[0.8%]">
              <li className="text-[110%] font-sencondary text-[#305658] ">Name, contact number, email address, and address.</li>
              <li className="text-[110%] font-sencondary text-[#305658]">Project details, requirements, and preferences.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-[150%] font-primary mb-[1%] text-[#305658]">3. Use of Information</h2>
            <ul className="list-disc ml-[4%] space-y-[0.8%]">
              <li className="text-[110%] font-sencondary text-[#305658] ">Provide and improve our construction services.</li>
              <li className="text-[110%] font-sencondary text-[#305658]">Respond to inquiries and service requests.</li>
              <li className="text-[110%] font-sencondary text-[#305658]">Communicate project updates, billing, and contractual obligations.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-[150%] font-primary mb-[1%] text-[#305658]">4. Sharing of Information</h2>
            <ul className="list-disc ml-[4%] space-y-[0.8%]">
              <li className="text-[110%] font-sencondary text-[#305658] ">We do not sell or rent your information to third parties.</li>
              <li className="text-[110%] font-sencondary text-[#305658]">Information may be shared with trusted service providers or contractors strictly for project execution purposes.</li>
              <li className="text-[110%] font-sencondary text-[#305658]">Legal obligations may require disclosure of information if mandated by law.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-[150%] font-primary mb-[1%] text-[#305658]">5. Data Security</h2>
            <p className="text-[110%] font-sencondary text-[#305658]">
              We implement reasonable technical and administrative measures to protect personal data. Access to personal information is restricted to authorized personnel only.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-[150%] font-primary mb-[1%]">6. Cookies and Tracking</h2>
            <p className="text-[110%] font-sencondary ">
              Our website may use cookies to enhance user experience. Cookies do not collect personal information unless voluntarily provided.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-[150%] font-primary mb-[1%] text-[#305658]">7. User Rights</h2>
            <p className="text-[110%] font-sencondary text-[#305658]">
              Users can request access, correction, or deletion of their personal information. Contact us at{" "}
              <Link href="https://mail.google.com/mail/u/0/?to=srivelamconstruction@gmail.com&su=Enquiry+Regarding+Construction+Services&fs=1&tf=cm"
                  target="_blank" className="text-green-700 font-c2a underline">
                srivelanconstruction@gmail.com
              </Link>
              for any privacy-related requests.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-[150%] font-primary mb-[1%] text-[#305658]">8. Updates to Privacy Policy</h2>
            <p className="text-[110%] font-sencondary text-[#305658]">
              We may update this privacy policy from time to time. Updated policies will be posted on our website with the effective date.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-[150%] font-primary mb-[1%] text-[#305658]">9. Contact</h2>
            <p className="text-[110%] font-sencondary text-[#305658] ">For any questions regarding terms, conditions, or privacy, contact:</p>
            <p className="mt-[1%] font-semibold font-secondary text-[#305658]">SRI VELAN CONSTRUCTION</p>
            <p className="text-[110%] font-sencondary text-[#305658]">Phone: 8248501872</p>
            <p className="text-[110%] font-sencondary text-[#305658]">
              Email:{" "}
              <Link href="https://mail.google.com/mail/u/0/?to=srivelamconstruction@gmail.com&su=Enquiry+Regarding+Construction+Services&fs=1&tf=cm"
                  target="_blank" className="text-green-700 font-c2a underline">
                srivelanconstruction@gmail.com
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="block md:hidden">
        <div className="bg-[#0c3c3f] text-center text-white py-[20%]">
          <h1 className="text-[200%] font-primary font-bold mb-2">Privacy Policy</h1>
        </div>

        <div className="max-w-3xl mx-auto px-[8%] py-[10%] text-[90%] leading-[160%] space-y-[7%]">
          <div>
            <h2 className="font-bold text-[170%] font-primary mb-[1%] text-[#305658]">1. Introduction</h2>
            <p className="text-[110%] pt-[3%] font-sencondary text-[#305658] ">
              <span className="font-semibold font-sencondary">SRI VELAN CONSTRUCTION</span> is committed to protecting the privacy of our clients and website users. This policy outlines how we collect, use, and safeguard your information.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-[170%] font-primary mb-[1%] text-[#305658] ">2. Information Collection</h2>
            <ul className="list-disc ml-[4%] space-y-[0.8%]">
              <li className="text-[110%] font-sencondary text-[#305658]">Name, contact number, email address, and address.</li>
              <li className="text-[110%] font-sencondary text-[#305658]">Project details, requirements, and preferences.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-[150%] font-primary mb-[1%] text-[#305658]">3. Use of Information</h2>
            <ul className="list-disc ml-[4%] space-y-[0.8%]">
              <li className="text-[110%] font-sencondary text-[#305658]">Provide and improve our construction services.</li>
              <li className="text-[110%] font-sencondary text-[#305658]">Respond to inquiries and service requests.</li>
              <li className="text-[110%] font-sencondary text-[#305658]">Communicate project updates, billing, and contractual obligations.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-[150%] font-primary mb-[1%] text-[#305658]">4. Sharing of Information</h2>
            <ul className="list-disc ml-[4%] space-y-[0.8%]">
              <li className="text-[110%] font-sencondary text-[#305658]">We do not sell or rent your information to third parties.</li>
              <li className="text-[110%] font-sencondary text-[#305658]">Information may be shared with trusted service providers or contractors strictly for project execution purposes.</li>
              <li className="text-[110%] font-sencondary text-[#305658]">Legal obligations may require disclosure of information if mandated by law.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-[150%] font-primary mb-[1%] text-[#305658]">5. Data Security</h2>
            <p className="text-[110%] font-sencondary text-[#305658]">
              We implement reasonable technical and administrative measures to protect personal data. Access to personal information is restricted to authorized personnel only.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-[150%] font-primary mb-[1%] text-[#305658]">6. Cookies and Tracking</h2>
            <p className="text-[110%] font-sencondary text-[#305658]">
              Our website may use cookies to enhance user experience. Cookies do not collect personal information unless voluntarily provided.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-[150%] font-primary mb-[1%] text-[#305658]">7. User Rights</h2>
            <p className="text-[110%] font-sencondary  text-[#305658]">
              Users can request access, correction, or deletion of their personal information. Contact us at{" "}
              <Link href="https://mail.google.com/mail/u/0/?to=srivelamconstruction@gmail.com&su=Enquiry+Regarding+Construction+Services&fs=1&tf=cm"
                  target="_blank" className="text-green-700 font-c2a underline">
                srivelanconstruction@gmail.com
              </Link>
              for any privacy-related requests.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-[150%] font-primary mb-[1%] text-[#305658]">8. Updates to Privacy Policy</h2>
            <p className="text-[110%] font-sencondary text-[#305658]">
              We may update this privacy policy from time to time. Updated policies will be posted on our website with the effective date.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-[150%] font-primary mb-[1%] text-[#305658]">9. Contact</h2>
            <p className="text-[110%] font-sencondary text-[#305658]">For any questions regarding terms, conditions, or privacy, contact:</p>
            <p className="mt-[1%] font-semibold font-secondary text-[#305658]">SRI VELAN CONSTRUCTION</p>
            <p className="text-[110%] font-sencondary text-[#305658]">Phone: 8248501872</p>
            <p className="text-[110%] font-sencondary text-[#305658]">
              Email:{" "}
              <Link href="https://mail.google.com/mail/u/0/?to=srivelamconstruction@gmail.com&su=Enquiry+Regarding+Construction+Services&fs=1&tf=cm"
                  target="_blank" className="text-green-700 font-c2a underline">
                srivelanconstruction@gmail.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
