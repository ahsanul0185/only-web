import React from "react";
import { useTranslation } from "../context/useTranslation";

export default function PolicyPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12 pt-32 md:pt-32">
      <div className="default-padding mx-auto bg-black/90  space-y-8">


    
          <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-4 pb-8 border-b border-gray-200/40">{t("Legal Notices & Policy***Mentions légales & Politique")}</h1>



        <p className="text-gray-300">
          {t(
            "In accordance with Articles 6-III and 19 of Law No. 2004-575 of June 21, 2004 on Confidence in the Digital Economy (LCEN), we provide the following information to visitors of ***Conformément aux articles 6-III et 19 de la loi n°2004-575 du 21 juin 2004 relative à la confiance dans l'économie numérique (LCEN), nous fournissons les informations suivantes aux visiteurs de "
          )}{" "}
          <strong>Only Web</strong>.
        </p>

        {/* 1. Legal Information */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold border-l-4 border-gray-200/40 pl-4">
            {t("1. Legal Information***1. Informations légales")}
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>{t("Site Owner***Propriétaire du site")}: Only Web</li>
            <li>
              {t("Email***E-mail")}:{" "}
              <a
                href="mailto:onlywebco.com@gmail.com"
                className="text-white underline"
              >
                onlywebco.com@gmail.com
              </a>
            </li>
            <li>{t("Region***Région")}: </li>
            <li>{t("Telephone***Téléphone")}: </li>
            <li>{t("SIREN***SIREN")}: </li>
          </ul>

          <h3 className="text-xl font-semibold mt-2">
            {t("Publication Manager***Responsable de la publication")}
          </h3>
          <p className="text-gray-300">
            {t("Only Web Team***Équipe Only Web")} -{" "}
            <a
              href="mailto:onlywebco.com@gmail.com"
              className="text-white underline"
            >
              onlywebco.com@gmail.com
            </a>
          </p>

          <h3 className="text-xl font-semibold mt-2">
            {t("Hosting***Hébergement")}
          </h3>
          <p className="text-gray-300">
            {t("Host***Hébergeur")}: <br />
            {t("Address***Adresse")}: <br />
            {t("Phone***Téléphone")}: 09 70 80 89 11
          </p>
        </div>

        {/* 2. Intellectual Property */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold border-l-4 border-gray-200/40 pl-4">
            {t("2. Intellectual Property***2. Propriété intellectuelle")}
          </h2>
          <p className="text-gray-300">
            {t(
              "All elements of the Only Web website—including text, images, graphics, logos, icons, and other content—are the exclusive property of Only Web or its partners. They are protected by French and international intellectual property laws.***Tous les éléments du site Only Web—y compris les textes, images, graphiques, logos, icônes et autres contenus—sont la propriété exclusive d’Only Web ou de ses partenaires. Ils sont protégés par les lois françaises et internationales sur la propriété intellectuelle."
            )}
          </p>
        </div>

        {/* 3. Limitations of Liability */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold border-l-4 border-gray-200/40 pl-4">
            {t("3. Limitations of Liability***3. Limitation de responsabilité")}
          </h2>
          <p className="text-gray-300">
            {t(
              "Only Web cannot be held liable for direct or indirect damage to your equipment when accessing this website. We decline responsibility for the use that may be made of information and content available on this site.***Only Web ne peut être tenu responsable des dommages directs ou indirects causés à votre équipement lors de l'accès à ce site. Nous déclinons toute responsabilité quant à l'utilisation qui pourrait être faite des informations et contenus disponibles sur ce site."
            )}
          </p>
        </div>

        {/* 4. Hypertext Links */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold border-l-4 border-gray-200/40 pl-4">
            {t("4. Hypertext Links***4. Liens hypertextes")}
          </h2>
          <p className="text-gray-300">
            {t(
              "This website may include links to external websites. Only Web has no control over these sites and is not responsible for their content.***Ce site peut inclure des liens vers des sites externes. Only Web n’a aucun contrôle sur ces sites et n’est pas responsable de leur contenu."
            )}
          </p>
        </div>

        {/* 5. Protection of Personal Data */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold border-l-4 border-gray-200/40 pl-4">
            {t(
              "5. Protection of Personal Data***5. Protection des données personnelles"
            )}
          </h2>
          <p className="text-gray-300">
            {t(
              "For information on the collection and processing of your personal data, please consult our***Pour obtenir des informations sur la collecte et le traitement de vos données personnelles, veuillez consulter notre"
            )}{" "}
            <a href="/privacy-policy" className="text-white underline">
              {t("Privacy Policy***Politique de confidentialité")}
            </a>
            .
          </p>
        </div>

        {/* 6. Applicable Law */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold border-l-4 border-gray-200/40 pl-4">
            {t(
              "6. Applicable Law and Jurisdiction***6. Loi applicable et juridiction"
            )}
          </h2>
          <p className="text-gray-300">
            {t(
              "Any disputes relating to the use of the Only Web website are governed by French law. Exclusive jurisdiction is granted to the competent courts of [Your City], except where prohibited by law.***Tout litige relatif à l'utilisation du site Only Web est régi par le droit français. La compétence exclusive est accordée aux tribunaux compétents de [Votre Ville], sauf interdiction légale."
            )}
          </p>
        </div>

        <p className="text-gray-400 text-sm text-right">
          {t("Updated: October 6, 2025***Mis à jour : 6 octobre 2025")}
        </p>
      </div>
    </div>
  );
}
