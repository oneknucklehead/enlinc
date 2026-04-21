import React from "react";
import Container from "../components/Container";

const TermsAndConditions = () => {
  return (
    <div>
      <div className="px-4 mt-[92px] py-24">
        <Container>
          <div>
            <h1 className="text-5xl text-center mb-12 font-bold">Terms and Conditions</h1>
            
            <p className="mb-8 italic text-gray-700">
              Your access to the EN-LINC website at https://www.en-linc.com signifies your agreement to these Terms and Conditions. 
              Your use of the website is subject to these Terms and Conditions at all times. If you do not agree to be bound by 
              these Terms and Conditions, you must refrain from accessing or using the website.
            </p>

            {/* Section 1 */}
            <div className="mb-8">
              <h2 className="font-semibold text-2xl mb-4">1. ABOUT THESE TERMS AND THE AGREEMENT</h2>
              <p className="mb-2">(i) This is EN-LINC’s standard customer terms for the purpose of section 479 of the Telecommunications Act 1997.</p>
              <p className="mb-2">(ii) Your Agreement with EN-LINC comprises these Terms within the Business Application Form, and the following documents if applicable:</p>
              <ul className="list-disc ml-12 mb-2">
                <li>the Order Specification,</li>
                <li>the Maintenance Service Schedule, and the</li>
                <li>Rate Sheet.</li>
              </ul>
              <p className="mb-2">(iii) If there is any inconsistency, the Customer Terms will prevail. The rights and obligations are subject to the Telecommunications Consumer Protections (TCP) Code for TCP Customers.</p>
              <p className="mb-2">(iv) Finance contracts, including Rental or Lease Agreements, are entirely separate legal contracts from this Network Agreement. Issues with network services or installation do not affect the operation of a Finance Agreement.</p>
              <p className="mb-2">(v) This Agreement constitutes the entire agreement between the parties.</p>
            </div>

            {/* Section 2 */}
            <div className="mb-8">
              <h2 className="font-semibold text-2xl mb-4">2. SERVICE TERM AND COMMENCEMENT</h2>
              <p className="mb-2">(i) The Agreement commences on the date your Business Application Form is accepted by EN-LINC.</p>
              <p className="mb-2">(ii) Duration of Service:</p>
              <p className="ml-8 mb-1">(a) Services will be provided for the Service Term specified in the Application Form.</p>
              <p className="ml-8 mb-2">(b) After the Initial Term, the Agreement continues on a month-to-month basis until terminated by either Party with not less than ninety (90) days' written notice.</p>
              <p className="mb-2">(iii) Commencement of Term Triggers:</p>
              <p className="ml-8 mb-1">(a) Network Services: The contract term commences on the date that porting of the services is successfully completed.</p>
              <p className="ml-8 mb-2">(b) Hardware: The contract term commences on the date the hardware installation is completed and commissioned at the Client’s site.</p>
              <p className="mb-2">(iv) The minimum network term duration is 24 months unless otherwise specified.</p>
            </div>

            {/* Section 3 */}
            <div className="mb-8">
              <h2 className="font-semibold text-2xl mb-4">3. CHANGING THE AGREEMENT</h2>
              <p className="mb-2">(i) EN-LINC may, on giving not less than 30 days’ notice, make changes to the terms and conditions.</p>
              <p className="mb-2">(ii) EN-LINC may increase Charges for a Fixed Term Plan if related to international services/roaming or changes required by law or tax.</p>
              <p className="mb-2">(iii) The Customer cannot make any changes to the Agreement without EN-LINC’s prior written consent.</p>
            </div>

            {/* Section 4 */}
            <div className="mb-8">
              <h2 className="font-semibold text-2xl mb-4">4. MANAGED SERVICES, SUPPORT, AND MONITORING</h2>
              <p className="mb-2">(i) EN-LINC will provide Managed Services during Business Hours on Business Days.</p>
              <p className="mb-2">(ii) Maintenance Support Conditions:</p>
              <p className="ml-8 mb-1">(a) Hardware: Support is provided for specified hardware; however, EN-LINC does not provide replacement equipment in the event of hardware failure.</p>
              <p className="ml-8 mb-1">(b) Software: Support is limited to genuine, vendor-supported software.</p>
              <p className="ml-16 mb-1">(1) As Microsoft no longer supports Windows 7 or 10, support is not provided for Windows 10 or below.</p>
              <p className="ml-8 mb-2">(c) Internet/VoIP Services: EN-LINC will address service-related issues but is not liable for outages caused by third-party providers.</p>
              <p className="mb-2">(iii) Monitoring Services: EN-LINC will continuously monitor critical devices and may provide health reports by request.</p>
              <p className="mb-2">(iv) Reporting: EN-LINC maintains a record of all Service Requests, accessible by the Client upon email request.</p>
            </div>

            {/* Section 5 */}
            <div className="mb-8">
              <h2 className="font-semibold text-2xl mb-4">5. SUPPORT INTERACTIONS AND ONSITE VISITS</h2>
              <p className="mb-2">(i) The preferred method for day-to-day communication is via support tickets. Formal notifications and job requests must be communicated via email.</p>
              <p className="mb-2">(ii) Onsite Visits (Excl. GST):</p>
              <p className="ml-8 mb-1">(a) Onsite visits are subject to additional charges, including travel time.</p>
              <p className="ml-8 mb-1">(b) Service Fee for onsite visits during operating hours is $240 per hour.</p>
              <p className="ml-8 mb-1">(c) Service Fee for Out of Hours support is $365 per hour.</p>
              <p className="ml-8 mb-2">(d) Remote Assistance is charged at $180 per hour.</p>
              <p className="mb-2">(iii) Regional Travel: Additional charges for regional travel are calculated at 50% of the relevant Service Charge for the duration of travel time.</p>
              <p className="mb-2">(iv) Service Level Agreement (SLA):</p>
              <p className="ml-8 mb-1">(a) Standard SLA: All Managed Services include a standard "First Response" guarantee of between twenty-four (24) and forty-eight (48) hours. This applies strictly during Standard Business Hours (9:00 AM to 5:00 PM, Monday to Friday, excluding Public Holidays).</p>
              <p className="ml-8 mb-1">(b) Guaranteed SLA Tiers: The Client may elect to purchase a "Guaranteed SLA" package for prioritized response times, charged at additional rates as specified in the Rate Sheet:</p>
              <div className="ml-16 mb-2">
                <p>(1) Tier 1: Two (2) Hour First Response.</p>
                <p>(2) Tier 2: Four (4) Hour First Response.</p>
                <p>(3) Tier 3: Eight (8) Hour First Response.</p>
                <p>(4) Tier 4: Twelve (12) Hour First Response.</p>
              </div>
              <p className="ml-8 mb-1">(c) Priority Classification: Guaranteed SLA response times (specifically Tier 1 and Tier 2) apply exclusively to issues classified as "Critical" or "High" priority.</p>
              <p className="ml-16 mb-1">(1) These priorities are strictly defined as a total loss of service ("Site Down") where primary network connectivity or phone lines are fully non-functional.</p>
              <p className="ml-16 mb-2">(2) All other service requests, including individual user issues or configuration changes, fall under the Standard SLA unless otherwise agreed in writing.</p>
              <p className="mb-2">(v) SLA Conditions and Exclusions:</p>
              <p className="ml-8 mb-1">(a) Priority Level: As noted in Section 5(iv)(c), Guaranteed SLAs apply only to "Critical" or "High" priority issues.</p>
              <p className="ml-8 mb-1">(b) Client Cooperation: Response times are contingent upon the Client providing remote access or onsite access as required by EN-LINC to investigate and repair the fault.</p>
              <p className="ml-8 mb-1">(c) Force Majeure and Outages: SLA guarantees are suspended during any event of Force Majeure or unplanned upstream provider outages beyond the Service Provider's reasonable control.</p>
              <p className="ml-8 mb-1">(d) Payment and Account Status: Guaranteed SLAs are only active and enforceable while the Client’s account is not in Default. Any suspension of services due to non-payment under Section 10 will nullify SLA obligations.</p>
              <p className="ml-8 mb-2">(e) Definition of First Response: A "First Response" is defined as a notification from an EN-LINC representative acknowledging receipt of the request and confirming that investigation of the issue has commenced.</p>
            </div>

            {/* Section 6 */}
            <div className="mb-8">
              <h2 className="font-semibold text-2xl mb-4">6. CLIENT RESPONSIBILITIES AND ENVIRONMENT</h2>
              <p className="mb-2">(i) Compliance: The Client's environment must comply with Standard Operating Environment Requirements.</p>
              <p className="mb-2">(ii) Client Actions: The Client agrees to:</p>
              <p className="ml-8 mb-1">(a) Appoint an authorized employee to approve work.</p>
              <p className="ml-8 mb-1">(b) Maintain updated employee security and software lists.</p>
              <p className="ml-8 mb-1">(c) Provide physical security access to equipment.</p>
              <p className="ml-8 mb-2">(d) Ensure data is stored on designated drives for backup purposes.</p>
              <p className="mb-2">(iii) Cyber Security: The Client must enforce the cyber security tools provided and is responsible for liabilities resulting from negligence or non-compliance.</p>
            </div>

            {/* Section 7 */}
            <div className="mb-8">
              <h2 className="font-semibold text-2xl mb-4">7. EQUIPMENT</h2>
              <p className="mb-2">(i) Ownership:</p>
              <p className="ml-8 mb-1">(a) Loaned equipment remains the property of EN-LINC at all times.</p>
              <p className="ml-8 mb-2">(b) Bundled equipment remains the property of EN-LINC until the term expires and all charges are paid in full.</p>
              <p className="mb-2">(ii) Installation: The Client must provide safe access and appropriate electrical supply.</p>
              <p className="ml-8 mb-2">(a) Cancellation of a booked installation with less than 2 days' notice incurs a 20% re-stocking fee of the agreement value.</p>
              <p className="mb-2">(iii) Outright Purchase: Requires a 50% non-refundable deposit prior to installation. Final balance is due within 2 business days of completion.</p>
            </div>

            {/* Section 8 */}
            <div className="mb-8">
              <h2 className="font-semibold text-2xl mb-4">8. TRANSFERS, PORTING, AND RELOCATIONS</h2>
              <p className="mb-2">(i) Relocations: A minimum of 2 months’ notice is required for relocations. The customer is liable for new line installation costs at the new site.</p>
              <p className="mb-2">(ii) Porting: Porting a number results in disconnection from the current provider and may incur early termination fees from them.</p>
              <p className="mb-2">(iii) Transfer from EN-LINC: If you transfer to another supplier, you must pay any transfer charges, accrued charges, and the value of charges for the remainder of the fixed term.</p>
            </div>

            {/* Section 9 */}
            <div className="mb-8">
              <h2 className="font-semibold text-2xl mb-4">9. BILLING AND PAYMENTS</h2>
              <p className="mb-2">(i) Frequency: EN-LINC bills monthly, either in advance or in arrears. Invoices are due on the 15th of each month.</p>
              <p className="mb-2">(ii) Methods: If a plan specifies "direct debit only," this is a precondition to service supply. Credit card payments (Amex, Diners, Mastercard, Visa) incur a surcharge.</p>
              <p className="mb-2">(iii) Payout Terms: Payout documentation must be provided within 90 days of installation. EN-LINC is no longer liable for any payout sum if documents are not received within 90 days of the Installation date.</p>
            </div>

            {/* Section 10 */}
            <div className="mb-8">
              <h2 className="font-semibold text-2xl mb-4">10. DEFAULT AND NON-PAYMENT</h2>
              <p className="mb-2">(i) Account Default (45 Days): If any invoice remains unpaid for forty-five (45) days, the account is in Default. EN-LINC reserves the right to:</p>
              <p className="ml-8 mb-1">(a) Suspend all services until the balance is paid.</p>
              <p className="ml-8 mb-2">(b) Report the default to relevant credit reporting agencies.</p>
              <p className="mb-2">(ii) Termination for Non-Payment (60 Days): If an invoice remains unpaid for sixty (60) days, EN-LINC may immediately terminate the Agreement.</p>
              <p className="mb-2">(iii) Consequences: Termination for non-payment triggers automatic cancellation of all services and a final invoice including all arrears and the Early Termination Fee (ETF).</p>
            </div>

            {/* Section 11 */}
            <div className="mb-8">
              <h2 className="font-semibold text-2xl mb-4">11. TERMINATION AND EARLY TERMINATION FEES (ETF)</h2>
              <p className="mb-2">(i) By the Client: Ninety (90) days' written notice is required.</p>
              <p className="ml-8 mb-2">(a) Early Termination Fee (ETF): If terminated before the expiration of the term, the Client is liable for an amount equal to the total remaining monthly service fees and/or hardware installments until the end of the term.</p>
              <p className="mb-2">(ii) Automatic Cancellation: Upon expiry of any notice period, all services not successfully ported out will be automatically cancelled without liability for business interruption.</p>
            </div>

            {/* Section 12 */}
            <div className="mb-8">
              <h2 className="font-semibold text-2xl mb-4">12. LIABILITIES AND WARRANTIES</h2>
              <p className="mb-2">(i) Limitation of Liability: EN-LINC’s total liability is limited to the re-supply of services or the cost of re-supply.</p>
              <p className="mb-2">(ii) Hardware Warranty: All hardware has a standard 12-month warranty. EN-LINC acts as a reseller only and accepts no liability for hardware faults.</p>
              <p className="mb-2">(iii) Third Parties: Use of any third-party technician to work on equipment voids all warranties.</p>
            </div>

            {/* Section 13 */}
            <div className="mb-8">
              <h2 className="font-semibold text-2xl mb-4">13. GENERAL PROVISIONS</h2>
              <p className="mb-2">(i) Privacy: Personal information is collected to supply products and may be shared with credit agencies or suppliers as necessary.</p>
              <p className="mb-2">(ii) Force Majeure: Neither party is liable for failure to perform due to events beyond reasonable control. If an event continues for 14+ days, either party may terminate.</p>
              <p className="mb-2">(iii) Logo Usage: By signing, you grant EN-LINC permission to use your company logo on its website and marketing materials.</p>
            </div>

            {/* Section 14 */}
            <div className="mb-8">
              <h2 className="font-semibold text-2xl mb-4">14. DISPUTE RESOLUTION</h2>
              <p className="mb-2">(i) A party claiming a dispute must provide written notice to the other party.</p>
              <p className="mb-2">(ii) Court proceedings may not be commenced until the parties have endeavoured to resolve the dispute via mediation in accordance with the Mediation Rules of New South Wales.</p>
            </div>

            {/* Section 15 */}
            <div className="mb-8">
              <h2 className="font-semibold text-2xl mb-4">15. CONFIDENTIALITY</h2>
              <p className="mb-2">(i) The Service Provider and its agents will not disclose the Client's confidential information except as required by law or to provide the Managed Services.</p>
            </div>

            {/* Section 16 */}
            <div className="mb-8">
              <h2 className="font-semibold text-2xl mb-4">16. GST AND OTHER TAXES</h2>
              <p className="mb-2">(i) GST will be added to each invoice. Amounts specified in this Agreement are exclusive of other taxes or levies.</p>
            </div>

            {/* Section 17 */}
            <div className="mb-8">
              <h2 className="font-semibold text-2xl mb-4">17. GOVERNING LAW</h2>
              <p className="mb-2">(i) This Agreement is governed by the laws of New South Wales.</p>
            </div>

            {/* Section 18 */}
            <div className="mb-8">
              <h2 className="font-semibold text-2xl mb-4">18. WHOLE AGREEMENT & VARIATION</h2>
              <p className="mb-2">(i) Any variations to the Service Fee or equipment must be agreed upon in writing.</p>
            </div>

            {/* Section 19 */}
            <div className="mb-8">
              <h2 className="font-semibold text-2xl mb-4">19. ASSIGNMENT</h2>
              <p className="mb-2">(i) The Service Provider may assign this Agreement to a third party at any time.</p>
              <p className="mb-2">(ii) The Service Provider will notify the Client in writing within seven (7) days of any assignment.</p>
            </div>

            {/* Section 20 */}
            <div className="mb-8">
              <h2 className="font-semibold text-2xl mb-4">20. DICTIONARY (DEFINITIONS)</h2>
              <p className="mb-2">(i) <strong>Agreement:</strong> Collectively the terms, Business Application Form, Order Specification, Maintenance Service Schedule, and Rate Sheet.</p>
              <p className="mb-2">(ii) <strong>Initial Term:</strong> The minimum period for a Plan as specified on the Business Application Form.</p>
              <p className="mb-2">(iii) <strong>TCP Customer:</strong> An individual or business with an annual spend with EN-LINC of no more than $20,000.</p>
              <p className="mb-2">(iv) <strong>ETF:</strong> Early Termination Fee.</p>
            </div>

          </div>
        </Container>
      </div>
    </div>
  );
};

export default TermsAndConditions;
