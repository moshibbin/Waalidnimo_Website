import { FaRegUser, FaBrain, FaHandsHelping } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { SiGotomeeting } from "react-icons/si";

const Services2 = () => {
  return (
    // <div className="service2  ">
    //   <div className=" servs container">
    //     <div className="ser">
    //       <span className="icon">
    //         <FaRegUser />
    //       </span>
    //       <h3>Barista xirfado cusub dhanka barbaarinta wanaagsan</h3>
    //       <p>
    //         tababarka Hooyoinka iyo habbarayaasha ,talaabooyin wax qabad iyo
    //         qaacidooyin barbaarineed oo u fudaydinaya inay kula noolaadan nolol
    //         wanaagsan caruurtooda .
    //       </p>
    //     </div>
    //     <div className="ser">
    //       <span className="icon icon-sc">
    //         <FaRegUser />
    //       </span>
    //       <h3>caawinta Waalididiinta</h3>
    //       <p>
    //         si loogu dhaweeyo fahanka iyo fudaydinta xidhiidhka waalidnimo iyo
    //         caruurta iyo si ay u waajahaan caqabadaha maalin laha ah iyo dhisida
    //         dabeecadaha caruur kalsooni leh awood maskaxeed iyo akhlaaq toosan
    //         leh .
    //       </p>
    //     </div>
    //     <div className="ser">
    //       <span className="icon">
    //         <FaRegUser />
    //       </span>
    //       <h3>Kor u qaadida wacyigalinta waalidka iyo hab-barayaasha</h3>
    //       <p>
    //         iyadoo dareenkooda lagu wanaajinayo qaab kor uqaadaya caafimadkooda
    //         shakhsi ahaaneed iyo in loo suuro galiyo inay ku caawiyaan
    //         caruurtooda guusha nololeed
    //       </p>
    //     </div>
    //     <div className="ser">
    //       <span className="icon icon-sc">
    //         <FaRegUser />
    //       </span>
    //       <h3>Kal fadhi gaara iyo tilmaamo oo waalidka lagu hago </h3>
    //       <p>
    //         Kal fadhi gaara iyo tilmaamo oo waalidka lagu hago si loo hagaajiyo
    //         hab dhaqanka caruurta loo fidiyo taageero iyo caawimaad waalidka iyo
    //         hab-barayaasha iyado loosamayn doono kal fadhi gaara waalidka iyo
    //         tilmaamo lagu hagayo si loo hagaajiyo hab dhaqanka caruurta
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div className="services2 container">
      Features
      <div className="header">
        <h2>Tilmaamahayaga</h2>
        <p>
          walidnimo waxay waalidka ka caawisaa ku dhaqanka iyo wacyigalinta
          walidnimida wanagsan iyo bandhiga aqooneedyo iyo dhiri galin kusaabsan
          barbarinta tolmoon
        </p>
      </div>
      <div className="sers">
        <div className="active">
          <div className="item ">
            <div className="icon">
              <FaBrain />
            </div>
            <h3>Barista xirfado cusub </h3>
            <p>
              barista waalidka iyo barayasha talabooyin iyo xeelado u sahlaya
              inay si haboon ola dhaqmaan u badka, taas oo u horsedaysa bar
              baarina tolomon
            </p>
          </div>
        </div>
        <div className="item ">
          <div className="icon">
            <FaHandsHelping />
          </div>
          <h3>caawinta Waalididiinta</h3>
          <p>
            Waxaanu ka caawina walidka sidi ay ola fal gali lahayen dhaqamada
            ubadkooda una xali lahayen carqaladaha soo wajaha marxaladaha
            gorriinimada
          </p>
        </div>
        <div className="item ">
          <div className="icon">
            <GiNetworkBars />
          </div>
          <h3>wacyigalinta waalidka</h3>
          <p>
            wacyi galinta waalidka waxay kor u qaada caafimadkooda iyo
            dareenkooda shakhsi ahaaneed taas oo ka dhigta barbaariyal ku haboon
            caruurtooda
          </p>
        </div>
        <div className="item ">
          <div className="icon">
            <SiGotomeeting />
          </div>
          <h3>Kal fadhi gaara ah </h3>
          <p>
            waxaanu siina tilmaamo oo waalidka sii loo hagaajiyo hab dhaqanka
            caruurta loona fidiyo taageero iyo caawimaad waalidka iyo
            barbaariyaasha
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services2;
