const About = () => {
  return (
    <div className="container about">
      <div className="image">
        <img src="./assets/about.png" alt="" />
      </div>
      <div className="contents">
        <p>About Us</p>
        <h2>
          Tayeenta Walidka Waa Asaaska bushooyinka{" "}
          <span className="color">Hormaray</span>
        </h2>
        <p>
          Waalidnimo, waa akadamiyad loogu talagalay wacyi gelinta iyo barista
          waalidka barbaarinta tolmoon ee ubadka. Akadamiyaddu waxay waalidiinta
          ku dhiirri gelisaa waalidnimada wanaagasan iyo baahida ubadku u qabaan
          waalinimo wanaagasan.
        </p>
        <h3>wax qabad geena</h3>
        <div className="cheker">
          <span className="tick">
            <img src="./assets/tick.png" alt="" />
            <p>Dhisada walid wanagsan</p>
          </span>
          <span className="tick">
            <img src="./assets/tick.png" alt="" />
            <p>Baraaru jinta bulshada </p>
          </span>
          <span className="tick">
            <img src="./assets/tick.png" alt="" />
            <p>U doorida ilmaha nolol wanagsan </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
