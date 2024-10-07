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

// ProductCardPersonalFull Component
export const ProductCardPersonalFull: React.FC = () => {
  const personalProducts: Product[] = [
    {
      title: "EXPENSE TRACKER",
      description: "Keep an eye on all your spending in one place.",
      src: ExpenseTracker,
      details: "Track expenses daily, weekly, or monthly to manage your budget effectively.",
      textColor: "text-white",
      bgColor: "bg-black",
      alt: "Expense Tracker",
    },
    {
      title: "PERSONAL GOAL TRACKER",
      description: "Set personal savings goals.",
      src: PersonalGoalTracker,
      details: "Combine multiple accounts to separate budgets or isolate expenses.",
      textColor: "text-black",
      bgColor: "bg-white",
      alt: "Personal Goal Tracker",
    },
    {
      title: "INVESTMENT PORTFOLIO MANAGER",
      description: "Grow your savings.",
      src: BudgetPlanner,
      details: "Get personalized suggestions based on your financial goals and risk appetite.",
      textColor: "text-black",
      bgColor: "bg-white",
      alt: "Investment Portfolio Manager",
    },
    {
      title: "MULTI ACCOUNT SUPPORT",
      description: "Organize all your cards in one place.",
      src: MultiAccountSupport,
      details: "From checking accounts to savings and even credit cards. Simplify how you view and control your money.",
      textColor: "text-white",
      bgColor: "bg-black",
      alt: "Multi Account Support",
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
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="p-4 h-56 overflow-auto">
              <h3
                className={`text-xs font-semibold text-custom-light-green mb-2`}
              >
                {product.title}
              </h3>
              <p className={`text-xl font-normal ${product.textColor} mb-4`}>
                {product.description}
              </p>
              <p className={`${product.textColor} text-sm mb-6`}>
                {product.details}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// ProductCardBusinessFull Component
export const ProductCardBusinessFull: React.FC = () => {
  const businessProducts: Product[] = [
    {
      title: "TAX TRACKING & INVOICING",
      description: "Simplify your business finances.",
      src: TaxInvoice,
      details: "With built-in tax-tracking tools and professional invoicing. Stay compliant with less hassle.",
      textColor: "text-black",
      bgColor: "bg-white",
      alt: "Tax Tracking and Invoicing",
    },
    {
      title: "SWIFT PAYMENT",
      description: "Wire money in 20+ currencies.",
      src: WireMoney,
      details: "Send and receive transfers hassle-free inside and beyond via SWIFT.",
      textColor: "text-white",
      bgColor: "bg-custom-dark-green",
      alt: "SWIFT Payment",
    },
    {
      title: "ADVANCED BUDGET PLANNER",
      description: "Create custom budgets for each department or business project.",
      src: AdvancedBudget,
      details: "Stay on top of your expenses and ensure you're meeting your financial targets.",
      textColor: "text-white",
      bgColor: "bg-custom-dark-green",
      alt: "Advanced Budget Planner",
    },
    {
      title: "ANALYTICS & REPORT",
      description: "Access detailed financial reports tailored for business owners.",
      src: AnalyticsReport,
      details: "Gain insights into profit margins, expenses, and future projections.",
      textColor: "text-black",
      bgColor: "bg-white",
      alt: "Analytics and Report",
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
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="p-4 h-56 overflow-auto">
              <h3
                className={`text-xs font-semibold text-custom-light-green mb-2`}
              >
                {product.title}
              </h3>
              <p className={`text-xl font-normal ${product.textColor} mb-4`}>
                {product.description}
              </p>
              <p className={`${product.textColor} text-sm mb-6`}>
                {product.details}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default { ProductCardPersonalFull, ProductCardBusinessFull };