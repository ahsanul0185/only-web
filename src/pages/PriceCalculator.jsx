import React, { useState } from 'react';
import { Globe, Settings, FileText, Edit3, Gift, Wrench, ShoppingCart } from 'lucide-react';

// CONFIGURATION DATA - Modify this to change the calculator
const CALCULATOR_CONFIG = {
  siteTypes: [
    { id: 'vitrine', label: 'Showcase Site', basePrice: 200 },
    { id: 'ecommerce', label: 'E-commerce Site', basePrice: 300 }
  ],
  
  ecommerceProducts: {
    label: 'Number of products to integrate + SEO product description',
    options: [
      { id: '1-5', label: '1 to 5 products (included)', price: 0 },
      { id: '6-20', label: '6 to 20 products (+20€)', price: 20 },
      { id: '21-50', label: '21 to 50 products (+70€)', price: 70 },
      { id: '50+', label: 'More than 50 products (custom quote)', price: 0 }
    ]
  },
  
  additionalFeatures: [
    { id: 'googleReviews', label: 'Google Reviews Integration', price: 10 },
    { id: 'contactForm', label: 'Contact Form', price: 5 },
    { id: 'appointmentCalendar', label: 'Appointment Booking Calendar', price: 50 },
    { id: 'liveChat', label: 'Live Chat', price: 40 },
    { id: 'newsletter', label: 'Newsletter / Emailing', price: 15 },
    { id: 'onlineQuote', label: 'Online Quote', price: 30 }
  ],
  
  numPages: {
    label: 'Number of Pages',
    options: [
      { id: '1-3', label: '1 to 3 pages (included)', price: 0 },
      { id: '4-6', label: '4 to 6 pages (included)', price: 0 },
      { id: '7+', label: '7 pages or more (+100€)', price: 20 }
    ]
  },
  
  websiteTexts: {
    label: 'Website Texts',
    description: 'Do you have your website texts?',
    options: [
      {
        id: 'yes',
        label: 'Yes',
        price: 0,
        subOptions: [
          { id: 'optimize', label: 'I want them optimized for SEO', price: 0, isFree: true },
          { id: 'noModify', label: "I don't want to modify them", price: 0, isFree: true }
        ]
      },
      // {
      //   id: 'no',
      //   label: 'No',
      //   description: 'I want WebLeague to create and optimize texts for SEO',
      //   price: 80
      // }
    ]
  },
  
  bonusServices: [
    { id: 'visualIdentity', label: 'Visual Identity Creation', price: 150 },
    // { id: 'communityManagement', label: 'Community Management 1 month', price: 150 },
    { id: 'googleBusiness', label: 'Google Business Page Creation', price: 15 },
    { id: 'socialMedia', label: 'Profile photo + social media cover', price: 60 },
    // { id: 'discordServer', label: 'Discord Server Creation', price: 50 }
  ],
  
  maintenanceOptions: [
    {
      id: 'maintenance',
      icon: '🔄',
      label: 'Maintenance / Website updates (yearly)',
      description: 'Yes, I want annual maintenance ℹ️',
      price: 100,
      priceLabel: '+100€/year'
    },
    {
      id: 'guidedAutonomy',
      icon: '🎥',
      label: 'Guided Autonomy',
      description: 'I prefer to manage it myself with a video tutorial ℹ️',
      price: 20,
      priceLabel: '+20€'
    }
  ]
};

export default function PriceCalculator() {
  const [siteType, setSiteType] = useState('vitrine');
  const [features, setFeatures] = useState({});
  const [numProducts, setNumProducts] = useState('1-5');
  const [numPages, setNumPages] = useState('1-3');
  const [hasTexts, setHasTexts] = useState('yes');
  const [textOption, setTextOption] = useState('optimize');
  const [bonusServices, setBonusServices] = useState({});
  const [maintenanceServices, setMaintenanceServices] = useState({});

  const calculateTotal = () => {
    // Base price
    const selectedSiteType = CALCULATOR_CONFIG.siteTypes.find(type => type.id === siteType);
    let total = selectedSiteType.basePrice;

    // Additional features
    CALCULATOR_CONFIG.additionalFeatures.forEach(feature => {
      if (features[feature.id]) total += feature.price;
    });

    // E-commerce products
    if (siteType === 'ecommerce') {
      const selectedProduct = CALCULATOR_CONFIG.ecommerceProducts.options.find(opt => opt.id === numProducts);
      if (selectedProduct) total += selectedProduct.price;
    }

    // Number of pages
    const selectedPages = CALCULATOR_CONFIG.numPages.options.find(opt => opt.id === numPages);
    if (selectedPages) total += selectedPages.price;

    // Website texts
    if (hasTexts === 'yes') {
      const selectedOption = CALCULATOR_CONFIG.websiteTexts.options[0].subOptions.find(opt => opt.id === textOption);
      if (selectedOption) total += selectedOption.price;
    } else {
      const noOption = CALCULATOR_CONFIG.websiteTexts.options.find(opt => opt.id === 'no');
      total += noOption.price;
    }

    // Bonus services
    CALCULATOR_CONFIG.bonusServices.forEach(service => {
      if (bonusServices[service.id]) total += service.price;
    });

    // Maintenance options
    // CALCULATOR_CONFIG.maintenanceOptions.forEach(option => {
    //   if (maintenanceServices[option.id]) total += option.price;
    // });

    return total;
  };

  const total = calculateTotal();

  const RadioButton = ({ checked }) => (
    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
      checked ? 'border-black bg-black' : 'border-zinc-600'
    }`}>
      {checked && <div className="w-2 h-2 rounded-full bg-white"></div>}
    </div>
  );

  const Checkbox = ({ checked }) => (
    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
      checked ? 'bg-black border-black' : 'border-zinc-600'
    }`}>
      {checked && (
        <svg className="w-3 h-3 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M5 13l4 4L19 7"></path>
        </svg>
      )}
    </div>
  );

  

  return (
    <div className="min-h-screen bg-black p-4 md:p-8 pt-38 md:pt-38">

        <h2 className='text-5xl font-bold uppercase text-center mb-12'>Build Price Instantly</h2>

      <div className="max-w-4xl mx-auto">
        <div className="bg-zinc-950 rounded-2xl shadow-2xl border border-zinc-800 p-6 md:p-8 space-y-8">
          
          {/* Type of Site */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-6 h-6 text-white" />
              <h2 className="text-2xl font-bold text-white">Type of Site</h2>
            </div>
            <p className="text-gray-400 text-sm mb-4">Choose the type of site that corresponds to your project</p>
            
            <div className="space-y-3">
              {CALCULATOR_CONFIG.siteTypes.map((type) => (
                <label key={type.id} className={`flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  siteType === type.id 
                    ? 'bg-white border-white' 
                    : 'bg-zinc-900 border-zinc-800 hover:border-zinc-700'
                }`}>
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="siteType"
                      checked={siteType === type.id}
                      onChange={() => setSiteType(type.id)}
                      className="sr-only"
                    />
                    <RadioButton checked={siteType === type.id} />
                    <span className={`font-medium ${siteType === type.id ? 'text-black' : 'text-white'}`}>
                      {type.label}
                    </span>
                  </div>
                  <span className={siteType === type.id ? 'text-black' : 'text-gray-400'}>
                    from {type.basePrice}€
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* E-commerce Products */}
          {siteType === 'ecommerce' && (
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <ShoppingCart className="w-6 h-6 text-white" />
                <h2 className="text-2xl font-bold text-white">E-commerce Features</h2>
              </div>
              <p className="text-gray-400 text-sm mb-4">Configure options specific to your online store</p>
              
              <div>
                <label className="block text-white font-medium mb-2">
                  {CALCULATOR_CONFIG.ecommerceProducts.label}
                </label>
                <select
                  value={numProducts}
                  onChange={(e) => setNumProducts(e.target.value)}
                  className="w-full p-3 bg-zinc-900 text-white rounded-lg border-2 border-zinc-800 focus:border-white focus:outline-none transition"
                >
                  {CALCULATOR_CONFIG.ecommerceProducts.options.map(option => (
                    <option key={option.id} value={option.id}>{option.label}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Additional Features */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <Settings className="w-6 h-6 text-white" />
              <h2 className="text-2xl font-bold text-white">Additional Features</h2>
            </div>
            <p className="text-gray-400 text-sm mb-4">Select options that will enrich your site</p>
            
            <div className="space-y-3">
              {CALCULATOR_CONFIG.additionalFeatures.map((feature) => (
                <label key={feature.id} className={`flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  features[feature.id] 
                    ? 'bg-white border-white' 
                    : 'bg-zinc-900 border-zinc-800 hover:border-zinc-700'
                }`}>
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={features[feature.id] || false}
                      onChange={(e) => setFeatures({ ...features, [feature.id]: e.target.checked })}
                      className="sr-only"
                    />
                    <Checkbox checked={features[feature.id]} />
                    <span className={features[feature.id] ? 'text-black' : 'text-white'}>
                      {feature.label}
                    </span>
                  </div>
                  <span className={features[feature.id] ? 'text-black' : 'text-gray-400'}>
                    +{feature.price}€
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Number of Pages */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-white" />
              <h2 className="text-2xl font-bold text-white">{CALCULATOR_CONFIG.numPages.label}</h2>
            </div>
            <p className="text-gray-400 text-sm mb-4">Define the size of your site</p>
            
            <select
              value={numPages}
              onChange={(e) => setNumPages(e.target.value)}
              className="w-full p-3 bg-zinc-900 text-white rounded-lg border-2 border-zinc-800 focus:border-white focus:outline-none transition"
            >
              {CALCULATOR_CONFIG.numPages.options.map(option => (
                <option key={option.id} value={option.id}>{option.label}</option>
              ))}
            </select>
          </div>

          {/* Website Texts */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <Edit3 className="w-6 h-6 text-white" />
              <h2 className="text-2xl font-bold text-white">{CALCULATOR_CONFIG.websiteTexts.label}</h2>
            </div>
            <p className="text-gray-400 text-sm mb-4">{CALCULATOR_CONFIG.websiteTexts.description}</p>
            
            <div className="space-y-4">
              {CALCULATOR_CONFIG.websiteTexts.options.map((option) => (
                <div key={option.id} className="space-y-3">
                  <label className={`flex items-center ${option.description ? 'justify-between' : 'gap-3'} p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    hasTexts === option.id 
                      ? 'bg-white border-white' 
                      : 'bg-zinc-900 border-zinc-800 hover:border-zinc-700'
                  }`}>
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="hasTexts"
                        checked={hasTexts === option.id}
                        onChange={() => setHasTexts(option.id)}
                        className="sr-only"
                      />
                      <RadioButton checked={hasTexts === option.id} />
                      <div>
                        <span className={`font-medium block ${hasTexts === option.id ? 'text-black' : 'text-white'}`}>
                          {option.label}
                        </span>
                        {option.description && (
                          <span className={`text-sm ${hasTexts === option.id ? 'text-black/70' : 'text-gray-400'}`}>
                            {option.description}
                          </span>
                        )}
                      </div>
                    </div>
                    {option.price > 0 && (
                      <span className={hasTexts === option.id ? 'text-black' : 'text-gray-400'}>
                        +{option.price}€
                      </span>
                    )}
                  </label>

                  {hasTexts === option.id && option.subOptions && (
                    <div className="ml-8 space-y-2">
                      {option.subOptions.map((subOption) => (
                        <label key={subOption.id} className={`flex items-center justify-between p-3 rounded-lg border-2 cursor-pointer transition-all ${
                          textOption === subOption.id 
                            ? 'bg-zinc-800 border-zinc-700' 
                            : 'bg-zinc-900 border-zinc-800 hover:border-zinc-700'
                        }`}>
                          <div className="flex items-center gap-3">
                            <input
                              type="radio"
                              name="textOption"
                              checked={textOption === subOption.id}
                              onChange={() => setTextOption(subOption.id)}
                              className="sr-only"
                            />
                            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                              textOption === subOption.id 
                                ? 'border-white bg-white' 
                                : 'border-zinc-600'
                            }`}>
                              {textOption === subOption.id && (
                                <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                              )}
                            </div>
                            <span className="text-gray-200 text-sm">{subOption.label}</span>
                          </div>
                          <span className={`text-sm ${subOption.isFree ? 'text-green-400' : 'text-gray-400'}`}>
                            {subOption.isFree ? 'free' : `+${subOption.price}€`}
                          </span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bonus Services */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <Gift className="w-6 h-6 text-white" />
              <h2 className="text-2xl font-bold text-white">BONUS Services</h2>
            </div>
            <p className="text-gray-400 text-sm mb-4">Complete your project with additional services</p>
            
            <div className="space-y-3">
              {CALCULATOR_CONFIG.bonusServices.map((service) => (
                <label key={service.id} className={`flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  bonusServices[service.id] 
                    ? 'bg-white border-white' 
                    : 'bg-zinc-900 border-zinc-800 hover:border-zinc-700'
                }`}>
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={bonusServices[service.id] || false}
                      onChange={(e) => setBonusServices({ ...bonusServices, [service.id]: e.target.checked })}
                      className="sr-only"
                    />
                    <Checkbox checked={bonusServices[service.id]} />
                    <span className={bonusServices[service.id] ? 'text-black' : 'text-white'}>
                      {service.label}
                    </span>
                  </div>
                  <span className={bonusServices[service.id] ? 'text-black' : 'text-gray-400'}>
                    +{service.price}€
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Maintenance & Autonomy */}
          {/* <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <Wrench className="w-6 h-6 text-white" />
              <h2 className="text-2xl font-bold text-white">Maintenance & Autonomy</h2>
            </div>
            <p className="text-gray-400 text-sm mb-4">Choose how you want to manage your site after creation</p>
            
            <div className="space-y-3">
              {CALCULATOR_CONFIG.maintenanceOptions.map((option) => (
                <label key={option.id} className={`flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  maintenanceServices[option.id] 
                    ? 'bg-white border-white' 
                    : 'bg-zinc-900 border-zinc-800 hover:border-zinc-700'
                }`}>
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={maintenanceServices[option.id] || false}
                      onChange={(e) => setMaintenanceServices({ ...maintenanceServices, [option.id]: e.target.checked })}
                      className="sr-only"
                    />
                    <Checkbox checked={maintenanceServices[option.id]} />
                    <div>
                      <span className={`block ${maintenanceServices[option.id] ? 'text-black' : 'text-white'}`}>
                        {option.icon} {option.label}
                      </span>
                      <span className={`text-sm ${maintenanceServices[option.id] ? 'text-black/70' : 'text-gray-400'}`}>
                        {option.description}
                      </span>
                    </div>
                  </div>
                  <span className={maintenanceServices[option.id] ? 'text-black' : 'text-gray-400'}>
                    {option.priceLabel}
                  </span>
                </label>
              ))}
            </div>
          </div> */}

          {/* Total Price */}
          <div className="mt-8 p-6 bg-white rounded-xl border-2 border-white">
            <div className="text-center space-y-2">
              <h3 className="text-xl font-bold text-black flex items-center justify-center gap-2">
                💰 Estimated Total Price
              </h3>
              <div className="text-5xl font-bold text-black">
                {total} €
              </div>
              <p className="text-gray-600 text-sm">Indicative price including VAT</p>
              <button className="mt-4 px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-zinc-800 transition shadow-lg">
                Request a Custom Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}