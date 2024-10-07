import React from 'react';
import Image from "next/image";
import MastercardImage from "/public/images/company/Mastercard.webp";
import StripeImage from "/public/images/company/Stripe.webp";
import VisaImage from "/public/images/company/Visa.webp";
import DeloitteImage from "/public/images/company/Deloitte.webp";
import KpmgImage from "/public/images/company/Kpmg.webp";
import SapImage from "/public/images/company/Sap.webp";

export function CompanyTestimony() {
  return (
    <div className="flex flex-col items-center justify-center py-7 bg-custom-dark-green">
      <h3 className="text-normal text-white font-bold text-center mb-4">
        The fastest-growing companies use MoneyTree.
      </h3>
      <div className="grid grid-cols-3 gap-x-8 sm:grid-cols-6 sm:gap-12 lg:grid-cols-6 lg:gap-12">
        <div className="transform transition-transform duration-200 hover:scale-110 active:scale-95">
          <Image src={DeloitteImage} alt="Deloitte" className="h-16 w-16 object-contain" />
        </div>
        <div className="transform transition-transform duration-200 hover:scale-110 active:scale-95">
          <Image src={KpmgImage} alt="KPMG" className="h-16 w-16 object-contain" />
        </div>
        <div className="transform transition-transform duration-200 hover:scale-110 active:scale-95">
          <Image src={StripeImage} alt="Stripe" className="h-16 w-16 object-contain" />
        </div>
        <div className="transform transition-transform duration-200 hover:scale-110 active:scale-95">
          <Image src={SapImage} alt="Sap" className="h-16 w-16 object-contain" />
        </div>
        <div className="transform transition-transform duration-200 hover:scale-110 active:scale-95">
          <Image src={MastercardImage} alt="Mastercard" className="h-16 w-16  object-contain" />
        </div>
        <div className="transform transition-transform duration-200 hover:scale-110 active:scale-95">
          <Image src={VisaImage} alt="Visa" className="h-16 w-16 object-contain" />
        </div>
      </div>
    </div>
  );
}

export default CompanyTestimony;