import React from "react";
import { Helmet } from "react-helmet-async";

const Seo = ({
  title,
  description,
}) => {
  return (
    <Helmet>

      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="keywords"
        content="
        erzurum adak,
        erzurum adakçı,
        erzurum kurbanlık,
        erzurum koyun fiyatları,
        erzurum adaklık koyun,
        erzurum küçükbaş,
        erzurum kurban kesim,
        erzurum akika kurbanı,
        erzurum şükür kurbanı,
        erzurum vekaletle kesim
        "
      />

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:locale"
        content="tr_TR"
      />

    </Helmet>
  );
};

export default Seo;