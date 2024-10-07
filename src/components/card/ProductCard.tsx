import Image, { StaticImageData } from "next/image";
import ExpenseTracker from "/public/images/products/ExpenseTracker.webp";
import PersonalGoalTracker from "/public/images/products/PersonalGoalTracker.webp";
import BudgetPlanner from "/public/images/products/BudgetPlanner.webp";
import MultiAccountSupport from "/public/images/products/MultiAccountSupport.webp";
import TaxInvoice from "/public/images/products/TaxInvoice.webp";
import WireMoney from "/public/images/products/WireMoney.webp";
import AdvancedBudget from "/public/images/products/AdvancedBudget.webp";
import AnalyticsReport from "/public/images/products/Analytics.webp";

// Interface Product
interface Product {
  title: string;
  description: string;
  src: StaticImageData;
  details: string;
  textColor: string;
  bgColor: string;
  alt: string;

}

// ProductCardPersonal Component
export const ProductCardPersonal: React.FC = () => {
  const personalProducts: Product[] = [
    {
      src: ExpenseTracker,
      alt: "Expense Tracker",
      title: "EXPENSE TRACKER",
      description: "Keep an eye on all your spending in one place.",
      details: "Track expenses daily, weekly, or monthly to manage your budget effectively.",
      textColor: "text-white",
      bgColor: "bg-black",
    },
    {
      src: PersonalGoalTracker,
      alt: "Personal Goal Tracker",
      title: "PERSONAL GOAL TRACKER",
      description: "Set personal savings goals.",
      details: "Combine multiple accounts to separate budgets or isolate expenses.",
      textColor: "text-black",
      bgColor: "bg-white",
    },
    {
      src: BudgetPlanner,
      alt: "Investment Portfolio Manager",
      title: "INVESTMENT PORTFOLIO MANAGER",
      description: "Grow your savings.",
      details: "Get personalized suggestions based on your financial goals and risk appetite.",
      textColor: "text-black",
      bgColor: "bg-white",
    },
    {
      src: MultiAccountSupport,
      alt: "Multi Account Support",
      title: "MULTI ACCOUNT SUPPORT",
      description: "Organize all your cards in one place.",
      details: "From checking accounts to savings and even credit cards. Simplify how you view and control your money.",
      textColor: "text-white",
      bgColor: "bg-black",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center items-center px-4 lg:px-20">
      {personalProducts.map((product, index) => (
        <div key={index} className={`flex justify-center`}>
          <div
            className={`max-w-xs ${product.bgColor} rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105`}
          >
            <div className="flex justify-center pt-4">
              <div className="w-72 h-40 relative">
                <Image
                  src={product.src}
                  alt={product.alt}
                  className="rounded-lg"
                  layout="fill"
                />
              </div>
            </div>
            <div className="p-4 h-56 overflow-auto">
              <h3 className={`text-xs font-semibold text-custom-light-green mb-2`}>
                {product.title}
              </h3>
              <p className={`text-xl font-normal ${product.textColor} mb-4`}>
                {product.description}
              </p>
              <p className={`${product.textColor} text-sm mb-6`}>{product.details}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// ProductCardBusiness Component
export const ProductCardBusiness: React.FC = () => {
  const businessProducts: Product[] = [
    {
      src: TaxInvoice,
      alt: "Tax Tracking and Invoicing",
      title: "TAX TRACKING & INVOICING",
      description: "Simplify your business finances.",
      details: "With built-in tax-tracking tools and professional invoicing. Stay compliant with less hassle.",
      textColor: "text-black",
      bgColor: "bg-white",
    },
    {
      src: WireMoney,
      alt: "SWIFT Payment",
      title: "SWIFT PAYMENT",
      description: "Wire money in 20+ currencies.",
      details: "Send and receive transfers hassle-free inside and beyond via SWIFT.",
      textColor: "text-white",
      bgColor: "bg-custom-dark-green",
    },
    {
      src: AdvancedBudget,
      alt: "Advanced Budget Planner",
      title: "ADVANCED BUDGET PLANNER",
      description: "Create custom budgets for each department or business project.",
      details: "Stay on top of your expenses and ensure you're meeting your financial targets.",
      textColor: "text-white",
      bgColor: "bg-custom-dark-green",
    },
    {
      src: AnalyticsReport,
      alt: "Analytics and Report",
      title: "ANALYTICS & REPORT",
      description: "Access detailed financial reports tailored for business owners.",
      details: "Gain insights into profit margins, expenses, and future projections.",
      textColor: "text-black",
      bgColor: "bg-white",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center items-center px-4 lg:px-20">
      {businessProducts.map((product, index) => (
        <div key={index} className={`flex justify-center`}>
          <div
            className={`max-w-xs ${product.bgColor} rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105`}
          >
            <div className="flex justify-center pt-4">
              <div className="w-72 h-40 relative">
                <Image
                  src={product.src}
                  alt={product.alt}
                  className="rounded-lg"
                  layout="fill"
                />
              </div>
            </div>
            <div className="p-4 h-56 overflow-auto">
              <h3 className={`text-xs font-semibold text-custom-light-green mb-2`}>
                {product.title}
              </h3>
              <p className={`text-xl font-normal ${product.textColor} mb-4`}>
                {product.description}
              </p>
              <p className={`${product.textColor} text-sm mb-6`}>{product.details}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default { ProductCardPersonal, ProductCardBusiness };