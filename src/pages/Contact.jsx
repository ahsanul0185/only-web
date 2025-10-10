import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Button from "../components/Button";
import { useTranslation } from "../context/useTranslation";
import Loader from "../components/Loader";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  const { t } = useTranslation();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);

    formData.append("access_key", "fd187ebd-a5e1-4151-88c7-d4c36f58adb0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setSubmitted(true);
      setIsLoading(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } else {
      setIsLoading(false);
      console.log("Error", data);
    }
  };

  return (
    <div className="min-h-screen  text-white">
      <div className="default-padding">
        {/* Header */}
        <div className="pb-20 pt-32">
          <div className="mb-10 md:mb-20">
            <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-4">
              {t("Get in Touch***Entrer en contact")}
            </h1>
            <p className="md:text-lg text-gray-400">
              {t(
                "We'd love to hear from you***Nous serions ravis d'avoir de vos nouvelles"
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-16">
            {/* Contact Form */}
            <div className="md:col-span-3">
             

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm text-gray-400 mb-2"
                    >
                      {t("Name***Nom")}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-transparent border border-gray-200/40 rounded-lg focus:outline-none focus:border-white/60 transition-colors text-white placeholder-gray-600"
                      placeholder={t("Your name***Votre nom")}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-gray-400 mb-2"
                    >
                      {t("Email***E-mail")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-transparent border border-gray-200/40 rounded-lg focus:outline-none focus:border-white/60 transition-colors text-white placeholder-gray-600"
                      placeholder={t("your@email.com***votre@email.com")}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm text-gray-400 mb-2"
                  >
                    {t("Subject***Sujet")}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border border-gray-200/40 rounded-lg focus:outline-none focus:border-white/60 transition-colors text-white placeholder-gray-600"
                    placeholder={t(
                      "How can we help?***Comment pouvons-nous vous aider ?"
                    )}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-gray-400 mb-2"
                  >
                    {t("Message***Message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 bg-transparent border border-gray-200/40 rounded-lg focus:outline-none focus:border-white/60 transition-colors resize-none text-white placeholder-gray-600"
                    placeholder={t(
                      "Tell us more about your project...***Parlez-nous davantage de votre projet..."
                    )}
                  ></textarea>
                </div>

                {submitted && (
                <div className="mb-6 p-4 border border-white/20 rounded-lg bg-white/5">
                  <p className="text-sm">
                    {t(
                      "Message sent successfully. We'll be in touch soon.***Message envoyé avec succès. Nous vous contacterons bientôt."
                    )}
                  </p>
                </div>
              )}

                <div className="flex justify-end">
                  <Button type="submit" disabled={isLoading}>
                    {isLoading && <Loader/> }
                    <span>{t(isLoading? "Sending***Envoi" : "Send Message***Envoyer le message")}</span>
                    {!isLoading && <Send className="w-4 h-4 group-hover:translate-x-2 transition-transform" />}
                  </Button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="md:col-span-2">
              <div className="grid grid-cols-1 gap-8">
                <div className="space-y-2 bg-dark p-5 rounded-lg">
                  <div className="flex items-center space-x-2 text-gray-500 text-sm mb-3">
                    <Mail className="w-4 h-4" />
                    <span>{t("EMAIL *** COURRIEL")}</span>
                  </div>
                  <p className="text-lg">contact@onlywebco.com </p>
                </div>

                {/* <div className="space-y-2 bg-dark p-5 rounded-lg">
      <div className="flex items-center space-x-2 text-gray-500 text-sm mb-3">
        <Phone className="w-4 h-4" />
        <span>{t("PHONE *** TÉLÉPHONE")}</span>
      </div>
      <p className="text-lg">+1 (555) 123-4567</p>
    </div> */}

                <div className="space-y-2 bg-dark p-5 rounded-lg">
                  <div className="flex items-center space-x-2 text-gray-500 text-sm mb-3">
                    <MapPin className="w-4 h-4" />
                    <span>{t("LOCATION *** EMPLACEMENT")}</span>
                  </div>
                  <p className="text-lg">Paris, France</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
