import React from "react";
import Container from "../components/Container";

const FinancePolicy = () => {
  return (
    <div>
      <div className="px-4 mt-[92px] py-24">
        <Container>
          <div>
            <h1 className="text-5xl text-center mb-8">Finance Policy</h1>
            <div>
              <p className="text-lg font-bold">WHY LEASE</p>
              <div>
                <ul className="list-disc ml-8">
                  <li>
                    <h4 className="text-lg font-semibold">No Upfront Pay</h4>
                    <p>
                      When you're leasing the equipment, you avoid the need to
                      pay any upfront costs or fork out a large lump sum which
                      will allow you to allocate your resources and spending
                      more efficiently. Giving you the flexibility to portion
                      your funds to other areas if need be.
                    </p>
                  </li>
                  <li>
                    <h4 className="text-lg font-semibold">
                      100% Tax-Deductible
                    </h4>
                    <p>
                      As with any Lease Payments for your business, all lease
                      expenses are fully tax-deductible and will more likely
                      than not save you money in the long run.
                    </p>
                  </li>
                  <li>
                    <h4 className="text-lg font-semibold">Maintenance</h4>
                    <p>
                      When you sign onto our Maintenance packages as part of
                      your Lease, we will replace certain equipment without
                      further costs if your maintenance schedules have been all
                      met.
                    </p>
                  </li>
                  <li>
                    <h4 className="text-lg font-semibold">End of Term</h4>
                    <p>
                      Once you reach the end of your lease term, you have the
                      option to keep your current equipment or look at upgrading
                      to the Latest Technology with the newest features and
                      hardware.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <br />
            <div>
              <p className="font-semibold mb-2">
                Not happy with your existing provider? Want out of your Contract
                without having to Fork Out the Fees?
              </p>
              <div className="ml-2">
                <p className="mb-2">
                  If you want a better deal or value from your Telco provider
                  but your request is falling on deaf ears, it might be time to
                  consider making the switch. ​
                </p>
                <p className="mb-2">
                  If your situation meets our Payout Requirements, EN-Linc will
                  ensure a seamless transition to switch over to our services
                  while paying out any outstanding amounts you may have with
                  your current provider.
                </p>
                <p className="mb-2">
                  When you switch over to EN-Linc, you are choosing a company
                  that truly cares about your concerns. Our dedicated Account
                  Managers will only handle your business from Start To Finish.
                  Ensuring that you're always speaking with someone that knows
                  your business.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default FinancePolicy;
