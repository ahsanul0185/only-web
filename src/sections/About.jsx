import React from 'react'
import FAQs from '../components/FAQ'
import SectionTitle from '../components/SectionTitle'
import { useTranslation } from '../context/useTranslation'

const About = () => {
  const {t} = useTranslation();
  return (
    <div id="about" className="section-y-padding">

    <SectionTitle>Who Are We?***Qui somme nous ?</SectionTitle>
      <div className='default-padding pt-12'>
        <div className='text-base md:text-lg mb-12 text-white/95'>
          <p className='inline'>
            {t("We are a French company specialized in creating modern, high-performance, and fully customized websites.***Nous sommes une entreprise française spécialisée dans la création de sites web modernes, performants et sur mesure.")}
          </p>
          <p className='inline ml-2'>{t("Our team is made up of creative designers and experienced developers who master web technologies.***Notre équipe est composée de designers créatifs et de développeurs expérimentés qui maîtrisent les technologies du web.")}</p>
          <p className='inline ml-2'>{t("We design unique websites built to attract, convert, and enhance your brand image. From design conception to launch, we support you every step of the way to create a website that reflects your identity and goals.***Nous concevons des sites uniques, pensés pour attirer, convertir et valoriser votre image de marque. De la conception du design à la mise en ligne, nous vous accompagnons à chaque étape pour créer un site qui reflète votre identité et vos objectifs.")}</p>
        </div>
        <FAQs/>
      </div>

    </div>
  )
}

export default About