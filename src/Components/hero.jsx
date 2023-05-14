const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="content ">
          <h1>
            Barista Walidka Barbaarinta Ogu Haboon ee{" "}
            <span className="color">
              Ubadka <img src="./assets/blue.png" alt="" />{" "}
            </span>
          </h1>
          <div className="shape">
            <img src="./assets/shape.png" alt="" />
          </div>
          <p>
            Waalid walba oo raba in uu noqdo waalid wanaagsan ilamihiisana u
            horseeda nolol qiimo leh ,waxa uu ku qasban yahay in uu helo xirfado
            aqooneed oo ku hagta barbaarinta ubadkiisa
          </p>
          <button className="btn btn-primary">naku Soo Biir</button>
        </div>
        <div className="image">
          <img src="./assets/hero.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
