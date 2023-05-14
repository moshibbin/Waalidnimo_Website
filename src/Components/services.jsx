const WhatWeDo = () => {
  return (
    <div className="container ser">
      <div className="title">
        <h2>What We Do</h2>
        <img src="./assets/shape1.png" alt=" small shape " />
        <p>Waalidnimo Waxay Bulshada U Qabato waxa kamida </p>
      </div>
      <div className="whatdo">
        {/* 1 */}

        <article className="boxes primary">
          <span className="box">
            <img className="img" src="./assets/one.png" alt="" />
          </span>
          <div className="content">
            <h3 className="primary-text">wacyigelinta waalidka</h3>
            <p>
              waxaanu waalidka siinaa wacyigelin iyo hogo-tusalaayn, annagoo ku
              wacyi gelinaa mawduucyada iyo xaaladaha ay qasabka ku tahay in uu
              waalidku ku baraarugsanaado
            </p>
          </div>
        </article>

        {/* 2 */}

        <article className="boxes secondary">
          <span className="box">
            <img className="img" src="./assets/two.png" alt="" />
          </span>
          <div className="content">
            <h3 className="primary-text">barista waalidka xirfado cusub</h3>
            <p>
              waxaannu waalidka barnaa xirfado cusub oo u sahlaaya in ay helaan
              awoodda iyo kartida ay ku barbarin lahaayen ilmahooda.
              Tababarradaasi waalidka noloshooda waxay ku biirinayaan
              waaya-aragnimo iyo xirfado ay ubadku u aayaan.
            </p>
          </div>
        </article>

        {/* 3 */}

        <article className="boxes secondary">
          <span className="box">
            <img className="img" src="./assets/three.png" alt="" />
          </span>
          <div className="content">
            <h3 className="primary-text">
              La talin gaar ah oo waalidka anu la yeelo
            </h3>
            <p>
              waxaannu waalidiinta qaar siinaa kal-fadhiyo garaa ah, oo aannu
              kala sheekaysanno xaaladaha uu barbaarinta ubadka la maro iyo
              caqabadaha uu la kulmo inta uu ku jiro barbaarinta ubadka .
            </p>
          </div>
        </article>

        {/* 4 */}

        <article className="boxes primary">
          <span className="box">
            <img className="img" src="./assets/four.png" alt="" />
          </span>
          <div className="content">
            <h3 className="primary-text">Barnamijo Aqoon is waydaarsi ah </h3>
            <p>
              waalidnimo waxay bulshada u qabataa barnamij-yo ay ugu talagashay
              oo xoogga saaraaya sidii loo xallin lahaa dhibaayoonka waalidka ka
              haysta xallinta baahiyaha ubadka Barnaamijyadaas waxay waalidnimo
              xoogga ku saartaa mawduucyada la xidhiidha xaaladaha gaarka ah iyo
              kuwa guud ee ay waalidku la kulmaan.
            </p>
          </div>
        </article>

        {/* 5 */}

        <article className="boxes primary">
          <span className="box">
            <img className="img" src="./assets/five.png" alt="" />
          </span>
          <div className="content">
            <h3 className="primary-text">kulan aqoonedyo </h3>
            <p>
              waxaannu qabanaa kulan aqoonedyo kooban oo aannu waalidka u ga
              faa’iidayno aqoon iyo waaya-aragnimo uu ubadkiisa ku koriyo.
            </p>
          </div>
        </article>

        {/* 6 */}

        <article className="boxes secondary">
          <span className="box">
            <img className="img" src="./assets/six.png" alt="" />
          </span>
          <div className="content">
            <h3 className="primary-text">Book soo koobis</h3>
            <p>
              Waalidnimo waxay waalidka u soo bandhigtaa buuggaagta iyo
              qormo-aqooneedyada ugu mudan ee ka hadlaaya waalidnimada wanaagsan
              iyo barbaarinta ubadka
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default WhatWeDo;
