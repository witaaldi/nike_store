import axios from "axios";
import Jordan_Delta from "../assets/images/Jordan_Delta.svg";
import KD_Trey_5_VII_EP from "../assets/images/KD_Trey_5_VII_EP.svg";
import KD13_EP from "../assets/images/KD13_EP.svg";
import Kyrie_7_EP from "../assets/images/Kyrie_7_EP.svg";
import Nike_Air_Edge_270 from "../assets/images/Nike_Air_Edge_270.png";
import Nike_Air_Force_1 from "../assets/images/Nike_Air_Force_1.svg";
import Nike_Air_Zoom_BB_NXT from "../assets/images/Nike_Air_Zoom_BB_NXT.svg";
import Zoom_Freak_2 from "../assets/images/Zoom_Freak_2.svg";

const rootPath =
  "https://gist.githubusercontent.com/megasuartika/35701b24f0790eeb7ab7f52038b132d4/raw/8f3967001b864f3ec5154101ffccc06f61fee132/shoes.json";

const Get = (path) => (id = "") => {
  const promise = new Promise((resolve, reject) => {
    axios.get(rootPath).then(
      (result) => {
        if (id === "") {
          resolve(result.data.data);
          //   console.log(result.data.data);
        } else {
          const data = result.data.data;
          resolve(data.find((x) => x.name === id));
          //   console.log(data);
        }
      },
      (err) => {
        reject(err);
      }
    );
  });
  return promise;
};

const getShoesData = Get();

export const API = {
  getShoesData,
};

export const images = {
  Jordan_Delta,
  KD_Trey_5_VII_EP,
  KD13_EP,
  Kyrie_7_EP,
  Nike_Air_Edge_270,
  Nike_Air_Force_1,
  Nike_Air_Zoom_BB_NXT,
  Zoom_Freak_2,
};
