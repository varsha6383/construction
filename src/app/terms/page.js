import React from "react";

export default function TermsConditions() {
  return (
    <main>
      {/* Desktop responsive */}
      <div className="bg-white h-full w-full hidden xl:block ">
        <div className="bg-[#0c3c3f] text-center text-white py-[10%]">
          <p className="font-semibold  text-[3vw]  font-primary">Terms & Conditions</p>
        </div>
        {/* Section */}
        <div className="px-[8%] py-[5%]">
          <ol className="space-y-8">

            <li>
              <h2 className="font-semibold text-[2vw]  font-primary text-[#063231]">1. Introduction</h2>
              <p className="font-sencondary text-[#305658] text-[1.2vw]">
                Welcome to <strong className="text-[#063231]">SRI VELAN CONSTRUCTION</strong>. By using our services or website,
                you agree to comply with and be bound by the following terms and conditions.
              </p>
            </li>

            <li>
              <h2 className="font-semibold   text-[2vw]  font-primary text-[#063231]">2. Scope of Work</h2>
              <p className="font-sencondary text-[1.2vw] text-[#305658]">
                All construction work carried out by SRI VELAN CONSTRUCTION will adhere to the contract specifications,
                approved plans, and drawings. Work includes civil construction, flooring, roofing, plumbing, electrical,
                painting, and finishing as per agreed specifications.
              </p>
            </li>

            <li>
              <h2 className="font-semibold  text-[2vw]  font-primary text-[#063231]">3. Payment Terms</h2>
              <ul className="list-disc ml-5">
                <li className="font-sencondary text-[1.2vw] text-[#305658]">Payment shall be made as agreed in the contract, typically per square foot or per item of work completed.</li>
                <li className="font-sencondary text-[1.2vw] text-[#305658]" >Service tax, labor welfare contributions, or other applicable taxes will be borne by the client.</li>
                <li className="font-sencondary text-[1.2vw] text-[#305658]">Payment for extra items or alterations will be mutually agreed in writing.</li>
              </ul>
            </li>

            <li>
              <h2 className="font-semibold  text-[2vw]  font-primary text-[#063231]">4. Completion and Timeline</h2>
              <ul className="list-disc ml-5 ">
                <li className="font-sencondary text-[1.2vw] text-[#305658]">Work will commence within seven days of confirmed work order and drawings.</li>
                <li className="font-sencondary text-[1.2vw] text-[#305658]">The agreed completion period is specified in the contract. Timely completion is essential.</li>
                <li className="font-sencondary text-[1.2vw] text-[#305658]">Completion is recognized upon issuance of the Owner’s completion certificate.</li>
              </ul>
            </li>

            <li>
              <h2 className="font-semibold  text-[2vw]  font-primary text-[#063231]">5. Contractor Responsibilities</h2>
              <ul className="list-disc ml-5">
                <li className="font-sencondary text-[1.2vw] text-[#305658]">Execution of work with high-quality materials and workmanship.</li>
                <li className="font-sencondary text-[1.2vw] text-[#305658]">Compliance with approved drawings, plans, and specifications.</li>
                <li className="font-sencondary text-[1.2vw] text-[#305658]">Hiring and management of workers, including payment of wages and amenities.</li>
                <li className="font-sencondary text-[1.2vw] text-[#305658]">Insurance coverage for workers and contract work.</li>
              </ul>
            </li>

            <li>
              <h2 className="font-semibold  text-[2vw]  font-primary text-[#063231]">6. Owner Responsibilities</h2>
              <ul className="list-disc ml-5">
                <li className="font-sencondary text-[1.2vw] text-[#305658]">Timely payment as per contract terms.</li>
                <li className="font-sencondary text-[1.2vw] text-[#305658]">Providing necessary approvals, access, and support for project execution.</li>
              </ul>
            </li>

            <li>
              <h2 className="font-semibold  text-[2vw]  font-primary text-[#063231]">7. Liability and Risk</h2>
              <ul className="list-disc ml-5">
                <li className="font-sencondary text-[1.2vw] text-[#305658]">Contractor is responsible for all risks, damages, or accidents during project execution.</li>
                <li className="font-sencondary text-[1.2vw] text-[#305658]">Owner is not liable for worker injuries, damages, or delays caused by unforeseen circumstances.</li>
              </ul>
            </li>

            <li>
              <h2 className="font-semibold  text-[2vw]  font-primary text-[#063231]">8. Defects and Rectification</h2>
              <p className="font-sencondary text-[1.2vw] text-[#305658]">
                Contractor shall rectify defects identified by the Owner within a reasonable time. Rectifications should
                be completed within four months from project completion.
              </p>
            </li>

            <li>
              <h2 className="font-semibold  text-[2vw]  font-primary text-[#063231]">9. Termination</h2>
              <p className="font-sencondary text-[1.2vw] text-[#305658]">
                Owner may terminate the contract for breach, stoppage of work over 30 days without authorization,
                unacceptable quality, or failure to rectify defects.
              </p>
            </li>

            <li>
              <h2 className="font-semibold  text-[2vw] font-primary text-[#063231]">10. Dispute Resolution</h2>
              <p className="font-sencondary text-[1.2vw] text-[#305658]">
                Any disputes arising from the contract will be resolved through arbitration under the Arbitration and Conciliation Act, 1996.
              </p>
            </li>

            <li>
              <h2 className="font-semibold  text-[2vw]  font-primary text-[#063231]">11. Governing Law</h2>
              <p className="font-sencondary text-[1.2vw] text-[#305658]">
                The contract shall be governed by and construed in accordance with the laws of India.
              </p>
            </li>

          </ol>
        </div>
      </div>
        {/* Desktop responsive */}

      {/* Laptop Responsive */}

      <div className="bg-white h-full w-full hidden lg:block xl:hidden ">
        <div className="h-[40vh] w-full flex flex-col justify-center items-center bg-[#063231] text-white gap-2">
          <p className="font-semibold  text-[4.5vw]  font-primary">Terms & Conditions</p>
        </div>
        {/* Section */}
        <div className="px-[8%] py-[5%]">
          <ol className="space-y-8">

            <li>
              <h2 className="font-semibold  text-[3vw]  font-primary text-[#063231]">1. Introduction</h2>
              <p className="font-sencondary text-[2vw] text-[#305658]">
                Welcome to <strong className="text-black">SRI VELAN CONSTRUCTION</strong>. By using our services or website,
                you agree to comply with and be bound by the following terms and conditions.
              </p>
            </li>

            <li>
              <h2 className="font-semibold  text-[3vw]  font-primary text-[#063231]">2. Scope of Work</h2>
              <p className="font-sencondary text-[2vw] text-[#305658]">
                All construction work carried out by SRI VELAN CONSTRUCTION will adhere to the contract specifications,
                approved plans, and drawings. Work includes civil construction, flooring, roofing, plumbing, electrical,
                painting, and finishing as per agreed specifications.
              </p>
            </li>

            <li>
              <h2 className="font-semibold  text-[3vw]  font-primary text-[#063231]">3. Payment Terms</h2>
              <ul className="list-disc ml-5">
                <li className="font-sencondary text-[2vw] text-[#305658]">Payment shall be made as agreed in the contract, typically per square foot or per item of work completed.</li>
                <li className="font-sencondary text-[2vw] text-[#305658]">Service tax, labor welfare contributions, or other applicable taxes will be borne by the client.</li>
                <li className="font-sencondary text-[2vw] text-[#305658]">Payment for extra items or alterations will be mutually agreed in writing.</li>
              </ul>
            </li>

            <li>
              <h2 className="font-semibold  text-[3vw]  font-primary text-[#063231]">4. Completion and Timeline</h2>
              <ul className="list-disc ml-5">
                <li className="font-sencondary text-[2vw] text-[#305658]">Work will commence within seven days of confirmed work order and drawings.</li>
                <li className="font-sencondary text-[2vw] text-[#305658]">The agreed completion period is specified in the contract. Timely completion is essential.</li>
                <li className="font-sencondary text-[2vw] text-[#305658]">Completion is recognized upon issuance of the Owner’s completion certificate.</li>
              </ul>
            </li>

            <li>
              <h2 className="font-semibold  text-[3vw]  font-primary text-[#063231]">5. Contractor Responsibilities</h2>
              <ul className="list-disc ml-5">
                <li className="font-sencondary text-[2vw] text-[#305658]">Execution of work with high-quality materials and workmanship.</li>
                <li className="font-sencondary text-[2vw] text-[#305658]">Compliance with approved drawings, plans, and specifications.</li>
                <li className="font-sencondary text-[2vw] text-[#305658]">Hiring and management of workers, including payment of wages and amenities.</li>
              </ul>
            </li>

            <li>
              <h2 className="font-semibold  text-[3vw]  font-primary text-[#063231]">6. Owner Responsibilities</h2>
              <ul className="list-disc ml-5">
                <li className="font-sencondary text-[2vw] text-[#305658]">Timely payment as per contract terms.</li>
                <li className="font-sencondary text-[2vw] text-[#305658]">Providing necessary approvals, access, and support for project execution.</li>
              </ul>
            </li>

            <li>
              <h2 className="font-semibold  text-[3vw]  font-primary text-[#063231]">7. Liability and Risk</h2>
              <ul className="list-disc ml-5">
                <li className="font-sencondary text-[2vw] text-[#305658]">Contractor is responsible for all risks, damages, or accidents during project execution.</li>
                <li className="font-sencondary text-[2vw] text-[#305658]">Owner is not liable for worker injuries, damages, or delays caused by unforeseen circumstances.</li>
              </ul>
            </li>

            <li>
              <h2 className="font-semibold  text-[3vw]  font-primary text-[#063231]">8. Defects and Rectification</h2>
              <p className="font-sencondary text-[2vw] text-[#305658]">
                Contractor shall rectify defects identified by the Owner within a reasonable time. Rectifications should
                be completed within four months from project completion.
              </p>
            </li>

            <li>
              <h2 className="font-semibold  text-[3vw]  font-primary text-[#063231]">9. Termination</h2>
              <p className="font-sencondary text-[2vw] text-[#305658]">
                Owner may terminate the contract for breach, stoppage of work over 30 days without authorization,
                unacceptable quality, or failure to rectify defects.
              </p>
            </li>

            <li>
              <h2 className="font-semibold  text-[3vw]  font-primary text-[#063231]">10. Dispute Resolution</h2>
              <p className="font-sencondary text-[2vw] text-[#305658]">
                Any disputes arising from the contract will be resolved through arbitration under the Arbitration and Conciliation Act, 1996.
              </p>
            </li>

            <li>
              <h2 className="font-semibold  text-[3vw]  font-primary text-[#063231]">11. Governing Law</h2>
              <p className="font-sencondary text-[2vw] text-[#305658]">
                The contract shall be governed by and construed in accordance with the laws of India.
              </p>
            </li>

          </ol>
        </div>
      </div>
        {/* Laptop responsive */}

      {/* Tab responsive */}

      <div className="bg-white h-full w-full hidden lg:hidden md:block text-lg text-black">
        <div className="h-[30vh] w-full flex flex-col justify-center items-center bg-[#063231] text-white gap-2">
          <p className="font-semibold  text-[5vw] font-primary">Terms & Conditions</p>
        </div>

        {/* Section*/}
        <div className="px-[10%] py-[10%] ">

          <ol className="space-y-8">

            <li>
              <h2 className="font-semibold  text-[4vw] font-primary text-[#305658]">1. Introduction</h2>
              <p className="font-sencondary text-[2.7vw] text-[#305658]">
                Welcome to <strong className="text-black">SRI VELAN CONSTRUCTION</strong>. By using our services or website,
                you agree to comply with and be bound by the following terms and conditions.
              </p>
            </li>

            <li>
              <h2 className="font-semibold  text-[4vw] font-primary text-[#305658]">2. Scope of Work</h2>
              <p className="font-sencondary text-[2.7vw] text-[#305658]">
                All construction work carried out by <strong className="text-black">SRI VELAN CONSTRUCTION</strong> will adhere to the contract specifications,
                approved plans, and drawings. Work includes civil construction, flooring, roofing, plumbing, electrical,
                painting, and finishing as per agreed specifications.
              </p>
            </li>

            <li>
              <h2 className="font-semibold  text-[4vw] font-primary text-[#305658]">3. Payment Terms</h2>
              <ul className="list-disc ml-5">
                <li className="font-sencondary text-[2.7vw] text-[#305658]">Payment shall be made as agreed in the contract, typically per square foot or per item of work completed.</li>
                <li className="font-sencondary text-[2.7vw] text-[#305658]">Service tax, labor welfare contributions, or other applicable taxes will be borne by the client.</li>
                <li className="font-sencondary text-[2.7vw] text-[#305658]">Payment for extra items or alterations will be mutually agreed in writing.</li>
              </ul>
            </li>

            <li>
              <h2 className="font-semibold  text-[4vw] font-primary text-[#305658]">4. Completion and Timeline</h2>
              <ul className="list-disc ml-5">
                <li className="font-sencondary text-[2.7vw] text-[#305658]">Work will commence within seven days of confirmed work order and drawings.</li>
                <li className="font-sencondary text-[2.7vw] text-[#305658]">The agreed completion period is specified in the contract. Timely completion is essential.</li>
                <li className="font-sencondary text-[2.7vw] text-[#305658]">Completion is recognized upon issuance of the Owner’s completion certificate.</li>
              </ul>
            </li>

            <li>
              <h2 className="font-semibold  text-[4vw] font-primary text-[#305658]">5. Contractor Responsibilities</h2>
              <ul className="list-disc ml-5">
                <li className="font-sencondary text-[2.7vw] text-[#305658]">Execution of work with high-quality materials and workmanship.</li>
                <li className="font-sencondary text-[2.7vw] text-[#305658]">Compliance with approved drawings, plans, and specifications.</li>
                <li className="font-sencondary text-[2.7vw] text-[#305658]">Hiring and management of workers, including payment of wages and amenities.</li>
                <li className="font-sencondary text-[2.7vw] text-[#305658]">Insurance coverage for workers and contract work.</li>
              </ul>
            </li>

            <li>
              <h2 className="font-semibold  text-[4vw] font-primary text-[#305658]">6. Owner Responsibilities</h2>
              <ul className="list-disc ml-5">
                <li className="font-sencondary text-[2.7vw] text-[#305658]">Timely payment as per contract terms.</li>
                <li className="font-sencondary text-[2.7vw] text-[#305658]">Providing necessary approvals, access, and support for project execution.</li>
              </ul>
            </li>

            <li>
              <h2 className="font-semibold  text-[4vw] font-primary text-[#305658]">7. Liability and Risk</h2>
              <ul className="list-disc ml-5">
                <li className="font-sencondary text-[2.7vw] text-[#305658]">Contractor is responsible for all risks, damages, or accidents during project execution.</li>
                <li className="font-sencondary text-[2.7vw] text-[#305658]">Owner is not liable for worker injuries, damages, or delays caused by unforeseen circumstances.</li>
              </ul>
            </li>

            <li>
              <h2 className="font-semibold  text-[4vw] font-primary text-[#305658]">8. Defects and Rectification</h2>
              <p className="font-sencondary text-[2.7vw] text-[#305658]">
                Contractor shall rectify defects identified by the Owner within a reasonable time. Rectifications should
                be completed within four months from project completion.
              </p>
            </li>

            <li>
              <h2 className="font-semibold  text-[4vw] font-primary text-[#305658]">9. Termination</h2>
              <p className="font-sencondary text-[2.7vw] text-[#305658]">
                Owner may terminate the contract for breach, stoppage of work over 30 days without authorization,
                unacceptable quality, or failure to rectify defects.
              </p>
            </li>

            <li>
              <h2 className="font-semibold  text-[4vw] font-primary text-[#305658]">10. Dispute Resolution</h2>
              <p className="font-sencondary text-[2.7vw] text-[#305658]">
                Any disputes arising from the contract will be resolved through arbitration under the Arbitration and Conciliation Act, 1996.
              </p>
            </li>

            <li>
              <h2 className="font-semibold  text-[4vw] font-primary text-[#305658]">11. Governing Law</h2>
              <p className="font-sencondary text-[2.7vw] text-[#305658]">
                The contract shall be governed by and construed in accordance with the laws of India.
              </p>
            </li>

          </ol>
        </div>
      </div>
      {/* Tab responsive */}


      {/* Mobile Responsive*/}

      <div className="bg-white h-full w-full block md:hidden text-lg text-black">
        <div className="h-[30vh] w-full flex flex-col justify-center items-center bg-[#063231] text-white gap-2">
          <p className="font-semibold  text-[7vw] font-primary">Terms & Conditions</p>
        </div>

        {/* Section*/}
        <div className="px-[8%] py-[5%] ">

          <ol className="space-y-8">

            <li>
              <h2 className="font-semibold  text-[6vw] font-primary text-[#063231]">1. Introduction</h2>
              <p className="font-sencondary text-[4vw] text-[#305658]">
                Welcome to <strong className="text-[#063231]">SRI VELAN CONSTRUCTION</strong>. By using our services or website,
                you agree to comply with and be bound by the following terms and conditions.
              </p>
            </li>

            <li>
              <h2 className="font-semibold  text-[6vw] font-primary text-[#063231]">2. Scope of Work</h2>
              <p className="font-sencondary text-[4vw] text-[#305658]">
                All construction work carried out by SRI VELAN CONSTRUCTION will adhere to the contract specifications,
                approved plans, and drawings. Work includes civil construction, flooring, roofing, plumbing, electrical,
                painting, and finishing as per agreed specifications.
              </p>
            </li>

            <li>
              <h2 className="font-semibold  text-[6vw] font-primary text-[#063231]">3. Payment Terms</h2>
              <ul className="list-disc ml-5">
                <li className="font-sencondary text-[4vw] text-[#305658]">Payment shall be made as agreed in the contract, typically per square foot or per item of work completed.</li>
                <li className="font-sencondary text-[4vw] text-[#305658]">Service tax, labor welfare contributions, or other applicable taxes will be borne by the client.</li>
                <li className="font-sencondary text-[4vw] text-[#305658]">Payment for extra items or alterations will be mutually agreed in writing.</li>
              </ul>
            </li>

            <li>
              <h2 className="font-semibold  text-[6vw] font-primary text-[#063231]">4. Completion and Timeline</h2>
              <ul className="list-disc ml-5">
                <li className="font-sencondary text-[4vw] text-[#305658]">Work will commence within seven days of confirmed work order and drawings.</li>
                <li className="font-sencondary text-[4vw] text-[#305658]">The agreed completion period is specified in the contract. Timely completion is essential.</li>
                <li className="font-sencondary text-[4vw] text-[#305658]">Completion is recognized upon issuance of the Owner’s completion certificate.</li>
              </ul>
            </li>

            <li>
              <h2 className="font-semibold  text-[6vw] font-primary text-[#063231]">5. Contractor Responsibilities</h2>
              <ul className="list-disc ml-5">
                <li className="font-sencondary text-[4vw] text-[#305658]">Execution of work with high-quality materials and workmanship.</li>
                <li className="font-sencondary text-[4vw] text-[#305658]">Compliance with approved drawings, plans, and specifications.</li>
                <li className="font-sencondary text-[4vw] text-[#305658]">Hiring and management of workers, including payment of wages and amenities.</li>
                <li className="font-sencondary text-[4vw] text-[#305658]">Insurance coverage for workers and contract work.</li>
              </ul>
            </li>

            <li>
              <h2 className="font-semibold  text-[6vw] font-primary text-[#063231]">6. Owner Responsibilities</h2>
              <ul className="list-disc ml-5">
                <li className="font-sencondary text-[4vw] text-[#305658]">Timely payment as per contract terms.</li>
                <li className="font-sencondary text-[4vw] text-[#305658]">Providing necessary approvals, access, and support for project execution.</li>
              </ul>
            </li>

            <li>
              <h2 className="font-semibold  text-[6vw]  font-primary text-[#063231]">7. Liability and Risk</h2>
              <ul className="list-disc ml-5">
                <li className="font-sencondary text-[4vw] text-[#305658]">Contractor is responsible for all risks, damages, or accidents during project execution.</li>
                <li className="font-sencondary text-[4vw] text-[#305658]">Owner is not liable for worker injuries, damages, or delays caused by unforeseen circumstances.</li>
              </ul>
            </li>

            <li>
              <h2 className="font-semibold  text-[6vw]  font-primary text-[#063231]">8. Defects and Rectification</h2>
              <p className="font-sencondary text-[4vw] text-[#305658]">
                Contractor shall rectify defects identified by the Owner within a reasonable time. Rectifications should
                be completed within four months from project completion.
              </p>
            </li>

            <li>
              <h2 className="font-semibold  text-[6vw] font-primary text-[#063231]">9. Termination</h2>
              <p className="font-sencondary text-[4vw] text-[#305658]">
                Owner may terminate the contract for breach, stoppage of work over 30 days without authorization,
                unacceptable quality, or failure to rectify defects.
              </p>
            </li>

            <li>
              <h2 className="font-semibold  text-[6vw] font-primary text-[#063231]">10. Dispute Resolution</h2>
              <p className="font-sencondary text-[4vw] text-[#305658]">
                Any disputes arising from the contract will be resolved through arbitration under the Arbitration and Conciliation Act, 1996.
              </p>
            </li>

            <li>
              <h2 className="font-semibold  text-[6vw] font-primary text-[#063231]">11. Governing Law</h2>
              <p className="font-sencondary text-[4vw] text-[#305658]">
                The contract shall be governed by and construed in accordance with the laws of India.
              </p>
            </li>

          </ol>

        </div>
      </div>
      {/* Mobile Responsive */}

    </main>
  )
}