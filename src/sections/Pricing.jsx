import { motion } from "motion/react";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import PriceSlider from "../components/PriceSlider";
import { useTranslation } from "../context/useTranslation";
import { useNavigate } from "react-router-dom";


const Pricing = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div id="price" className="section-y-padding">
      <SectionTitle>Pricing***Tarification</SectionTitle>

      <div className="default-padding pt-6">
        <PriceSlider />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="mt-12 flex justify-center"
        >
          <Button onClick={() => navigate("/quote")}>
            {t("Calculate Price***Calculer le prix")}
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
