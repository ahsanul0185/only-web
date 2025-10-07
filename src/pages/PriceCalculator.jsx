import React, { useState } from "react";
import {
  Globe,
  Settings,
  FileText,
  Edit3,
  Gift,
  Wrench,
  ShoppingCart,
} from "lucide-react";
import { useTranslation } from "../context/useTranslation";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const CALCULATOR_CONFIG = {
  siteTypes: [
    { id: "vitrine", label: "Showcase Site***Site vitrine", basePrice: 200 },
    {
      id: "ecommerce",
      label: "E-commerce Site***Site e-commerce",
      basePrice: 300,
    },
  ],

  ecommerceProducts: {
    label:
      "Number of products to integrate + SEO product description***Nombre de produits à intégrer + description SEO des produits",
    options: [
      {
        id: "1-5",
        label: "1 to 5 products (included)***1 à 5 produits (inclus)",
        price: 0,
      },
      {
        id: "6-20",
        label: "6 to 20 products (+20€)***6 à 20 produits (+20€)",
        price: 20,
      },
      {
        id: "21-50",
        label: "21 to 50 products (+70€)***21 à 50 produits (+70€)",
        price: 70,
      },
      {
        id: "50+",
        label:
          "More than 50 products (custom quote)***Plus de 50 produits (devis personnalisé)",
        price: 0,
      },
    ],
  },

  additionalFeatures: [
    {
      id: "googleReviews",
      label: "Google Reviews Integration***Intégration des avis Google",
      price: 10,
    },
    {
      id: "contactForm",
      label: "Contact Form***Formulaire de contact",
      price: 5,
    },
    {
      id: "appointmentCalendar",
      label:
        "Appointment Booking Calendar***Calendrier de réservation de rendez-vous",
      price: 50,
    },
    { id: "liveChat", label: "Live Chat***Chat en direct", price: 40 },
    {
      id: "newsletter",
      label: "Newsletter / Emailing***Newsletter / E-mailing",
      price: 15,
    },
    { id: "onlineQuote", label: "Online Quote***Devis en ligne", price: 30 },
  ],

  numPages: {
    label: "Number of Pages***Nombre de pages",
    options: [
      {
        id: "1-3",
        label: "1 to 3 pages (included)***1 à 3 pages (inclus)",
        price: 0,
      },
      {
        id: "4-6",
        label: "4 to 6 pages (included)***4 à 6 pages (inclus)",
        price: 0,
      },
      {
        id: "7+",
        label: "7 pages or more (+100€)***7 pages ou plus (+100€)",
        price: 20,
      },
    ],
  },

  websiteTexts: {
    label: "Website Texts***Textes du site web",
    description:
      "Do you have your website texts?***Avez-vous les textes de votre site web ?",
    options: [
      {
        id: "yes",
        label: "Yes***Oui",
        price: 0,
        subOptions: [
          {
            id: "optimize",
            label:
              "I want them optimized for SEO***Je veux qu’ils soient optimisés pour le SEO",
            price: 30,
          },
          {
            id: "noModify",
            label: "I don't want to modify them***Je ne veux pas les modifier",
            price: 0,
            isFree: true,
          },
        ],
      },
    ],
  },

  bonusServices: [
    {
      id: "visualIdentity",
      label: "Visual Identity Creation***Création d’identité visuelle",
      price: 150,
    },
    {
      id: "googleBusiness",
      label:
        "Google Business Page Creation***Création de la fiche Google Business",
      price: 15,
    },
    {
      id: "socialMedia",
      label:
        "Profile photo + social media cover***Photo de profil + couverture pour les réseaux sociaux",
      price: 60,
    },
  ],

  maintenanceOptions: [
    {
      id: "maintenance",
      icon: "🔄",
      label:
        "Maintenance / Website updates (yearly)***Maintenance / Mises à jour du site (annuel)",
      description:
        "Yes, I want annual maintenance ℹ️***Oui, je souhaite une maintenance annuelle ℹ️",
      price: 100,
      priceLabel: "+100€/year",
    },
    {
      id: "guidedAutonomy",
      icon: "🎥",
      label: "Guided Autonomy***Autonomie guidée",
      description:
        "I prefer to manage it myself with a video tutorial ℹ️***Je préfère le gérer moi-même avec un tutoriel vidéo ℹ️",
      price: 20,
      priceLabel: "+20€",
    },
  ],
};

export default function PriceCalculator() {
  const [siteType, setSiteType] = useState("vitrine");
  const [features, setFeatures] = useState({});
  const [numProducts, setNumProducts] = useState("1-5");
  const [numPages, setNumPages] = useState("1-3");
  const [hasTexts, setHasTexts] = useState("yes");
  const [textOption, setTextOption] = useState("optimize");
  const [bonusServices, setBonusServices] = useState({});
  const [maintenanceServices, setMaintenanceServices] = useState({});

  const { t } = useTranslation();
  const navigate = useNavigate();

  const calculateTotal = () => {
    // Base price
    const selectedSiteType = CALCULATOR_CONFIG.siteTypes.find(
      (type) => type.id === siteType
    );
    let total = selectedSiteType.basePrice;

    // Additional features
    CALCULATOR_CONFIG.additionalFeatures.forEach((feature) => {
      if (features[feature.id]) total += feature.price;
    });

    // E-commerce products
    if (siteType === "ecommerce") {
      const selectedProduct = CALCULATOR_CONFIG.ecommerceProducts.options.find(
        (opt) => opt.id === numProducts
      );
      if (selectedProduct) total += selectedProduct.price;
    }

    // Number of pages
    const selectedPages = CALCULATOR_CONFIG.numPages.options.find(
      (opt) => opt.id === numPages
    );
    if (selectedPages) total += selectedPages.price;

    // Website texts
    if (hasTexts === "yes") {
      const selectedOption =
        CALCULATOR_CONFIG.websiteTexts.options[0].subOptions.find(
          (opt) => opt.id === textOption
        );
      if (selectedOption) total += selectedOption.price;
    } else {
      const noOption = CALCULATOR_CONFIG.websiteTexts.options.find(
        (opt) => opt.id === "no"
      );
      total += noOption.price;
    }

    // Bonus services
    CALCULATOR_CONFIG.bonusServices.forEach((service) => {
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
    <div
      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
        checked ? "border-black bg-black" : "border-zinc-600"
      }`}
    >
      {checked && <div className="w-2 h-2 rounded-full bg-white"></div>}
    </div>
  );

  const Checkbox = ({ checked }) => (
    <div
      className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
        checked ? "bg-black border-black" : "border-zinc-600"
      }`}
    >
      {checked && (
        <svg
          className="w-3 h-3 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M5 13l4 4L19 7"></path>
        </svg>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-black p-4 md:p-8 pt-38 md:pt-38">
      <h2 className="text-5xl font-bold uppercase text-center mb-12">
        {t("Build Price Instantly***Obtenez le prix instantanément")}
      </h2>

      <div className="max-w-4xl mx-auto">
        <div className="bg-zinc-950 rounded-2xl shadow-2xl border border-zinc-800 p-6 md:p-8 space-y-8">
          {/* Type of Site */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-6 h-6 text-white" />
              <h2 className="text-2xl font-bold text-white">
                {t("Type of Site***Type de site")}
              </h2>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              {t(
                "Choose the type of site that corresponds to your project***Choisissez le type de site qui correspond à votre projet"
              )}
            </p>

            <div className="space-y-3">
              {CALCULATOR_CONFIG.siteTypes.map((type) => (
                <label
                  key={type.id}
                  className={`flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    siteType === type.id
                      ? "bg-white border-white"
                      : "bg-zinc-900 border-zinc-800 hover:border-zinc-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="siteType"
                      checked={siteType === type.id}
                      onChange={() => setSiteType(type.id)}
                      className="sr-only"
                    />
                    <RadioButton checked={siteType === type.id} />
                    <span
                      className={`font-medium ${
                        siteType === type.id ? "text-black" : "text-white"
                      }`}
                    >
                      {t(type.label)}
                    </span>
                  </div>
                  <span
                    className={
                      siteType === type.id ? "text-black" : "text-gray-400"
                    }
                  >
                    from {type.basePrice}€
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* E-commerce Products */}
          {siteType === "ecommerce" && (
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <ShoppingCart className="w-6 h-6 text-white" />
                <h2 className="text-2xl font-bold text-white">
                  {t("E-commerce Features***Fonctionnalités E-commerce")}
                </h2>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                {t(
                  "Configure options specific to your online store***Configurez les options spécifiques à votre boutique en ligne"
                )}
              </p>

              <div>
                <label className="block text-white font-medium mb-2">
                  {t(CALCULATOR_CONFIG.ecommerceProducts.label)}
                </label>
                <select
                  value={numProducts}
                  onChange={(e) => setNumProducts(e.target.value)}
                  className="w-full p-3 bg-zinc-900 text-white rounded-lg border-2 border-zinc-800 focus:border-white focus:outline-none transition"
                >
                  {CALCULATOR_CONFIG.ecommerceProducts.options.map((option) => (
                    <option key={option.id} value={option.id}>
                      {t(option.label)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Additional Features */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <Settings className="w-6 h-6 text-white" />
              <h2 className="text-2xl font-bold text-white">
                {t("Additional Features***Fonctionnalités Supplémentaires")}
              </h2>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              {t(
                "Select options that will enrich your site***Sélectionnez les options qui enrichiront votre site"
              )}
            </p>

            <div className="space-y-3">
              {CALCULATOR_CONFIG.additionalFeatures.map((feature) => (
                <label
                  key={feature.id}
                  className={`flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    features[feature.id]
                      ? "bg-white border-white"
                      : "bg-zinc-900 border-zinc-800 hover:border-zinc-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={features[feature.id] || false}
                      onChange={(e) =>
                        setFeatures({
                          ...features,
                          [feature.id]: e.target.checked,
                        })
                      }
                      className="sr-only"
                    />
                    <Checkbox checked={features[feature.id]} />
                    <span
                      className={
                        features[feature.id] ? "text-black" : "text-white"
                      }
                    >
                      {t(feature.label)}
                    </span>
                  </div>
                  <span
                    className={
                      features[feature.id] ? "text-black" : "text-gray-400"
                    }
                  >
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
              <h2 className="text-2xl font-bold text-white">
                {t(CALCULATOR_CONFIG.numPages.label)}
              </h2>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              {t(
                "Define the size of your site***Définissez la taille de votre site"
              )}
            </p>

            <select
              value={numPages}
              onChange={(e) => setNumPages(e.target.value)}
              className="w-full p-3 bg-zinc-900 text-white rounded-lg border-2 border-zinc-800 focus:border-white focus:outline-none transition"
            >
              {CALCULATOR_CONFIG.numPages.options.map((option) => (
                <option key={option.id} value={option.id}>
                  {t(option.label)}
                </option>
              ))}
            </select>
          </div>

          {/* Website Texts */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <Edit3 className="w-6 h-6 text-white" />
              <h2 className="text-2xl font-bold text-white">
                {t(CALCULATOR_CONFIG.websiteTexts.label)}
              </h2>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              {t(CALCULATOR_CONFIG.websiteTexts.description)}
            </p>

            <div className="space-y-4">
              {CALCULATOR_CONFIG.websiteTexts.options.map((option) => (
                <div key={option.id} className="space-y-3">
                  <label
                    className={`flex items-center ${
                      option.description ? "justify-between" : "gap-3"
                    } p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      hasTexts === option.id
                        ? "bg-white border-white"
                        : "bg-zinc-900 border-zinc-800 hover:border-zinc-700"
                    }`}
                  >
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
                        <span
                          className={`font-medium block ${
                            hasTexts === option.id ? "text-black" : "text-white"
                          }`}
                        >
                          {t(option.label)}
                        </span>
                        {option.description && (
                          <span
                            className={`text-sm ${
                              hasTexts === option.id
                                ? "text-black/70"
                                : "text-gray-400"
                            }`}
                          >
                            {t(option.description)}
                          </span>
                        )}
                      </div>
                    </div>
                    {option.price > 0 && (
                      <span
                        className={
                          hasTexts === option.id
                            ? "text-black"
                            : "text-gray-400"
                        }
                      >
                        +{option.price}€
                      </span>
                    )}
                  </label>

                  {hasTexts === option.id && option.subOptions && (
                    <div className="ml-8 space-y-2">
                      {option.subOptions.map((subOption) => (
                        <label
                          key={subOption.id}
                          className={`flex items-center justify-between p-3 rounded-lg border-2 cursor-pointer transition-all ${
                            textOption === subOption.id
                              ? "bg-zinc-800 border-zinc-700"
                              : "bg-zinc-900 border-zinc-800 hover:border-zinc-700"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <input
                              type="radio"
                              name="textOption"
                              checked={textOption === subOption.id}
                              onChange={() => setTextOption(subOption.id)}
                              className="sr-only"
                            />
                            <div
                              className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                                textOption === subOption.id
                                  ? "border-white bg-white"
                                  : "border-zinc-600"
                              }`}
                            >
                              {textOption === subOption.id && (
                                <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                              )}
                            </div>
                            <span className="text-gray-200 text-sm">
                              {t(subOption.label)}
                            </span>
                          </div>
                          <span
                            className={`text-sm ${
                              subOption.isFree
                                ? "text-green-400"
                                : "text-gray-400"
                            }`}
                          >
                            {subOption.isFree ? "free" : `+${subOption.price}€`}
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
              <h2 className="text-2xl font-bold text-white">
                {t("BONUS Services***Services BONUS")}
              </h2>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              {t(
                "Complete your project with additional services***Complétez votre projet avec des services supplémentaires"
              )}
            </p>

            <div className="space-y-3">
              {CALCULATOR_CONFIG.bonusServices.map((service) => (
                <label
                  key={service.id}
                  className={`flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    bonusServices[service.id]
                      ? "bg-white border-white"
                      : "bg-zinc-900 border-zinc-800 hover:border-zinc-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={bonusServices[service.id] || false}
                      onChange={(e) =>
                        setBonusServices({
                          ...bonusServices,
                          [service.id]: e.target.checked,
                        })
                      }
                      className="sr-only"
                    />
                    <Checkbox checked={bonusServices[service.id]} />
                    <span
                      className={
                        bonusServices[service.id] ? "text-black" : "text-white"
                      }
                    >
                      {t(service.label)}
                    </span>
                  </div>
                  <span
                    className={
                      bonusServices[service.id] ? "text-black" : "text-gray-400"
                    }
                  >
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
          <div className="mt-8 p-6 bg-  rounded-xl border-2 border-gray-200/40">
            <div className="text-center space-y-2">
              <h3 className="text-xl font-bold text- black flex items-center justify-center gap-2">
                {t("💰 Estimated Total Price***💰 Prix total estimé")}
              </h3>
              <div className="text-5xl font-bold text- black">{total} €</div>
              <p className="text-gray-300 text-sm">
                {t("Indicative price including VAT***Prix indicatif TTC")}
              </p>
              <Button
                onClick={() => navigate("/contact")}
                className="mt-4 px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-zinc-800 transition shadow-lg"
              >
                {t("Contact us *** Contactez-nous")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
