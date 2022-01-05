import './App.css';
import { render } from "react-dom";
import Gallery from "react-photo-gallery";

const photos = [
  {
    src: "https://drive.google.com/uc?id=1XLOSpz0i_vLqEH_PJwlNZW__rmnniwd_",
    width: 4,
    height: 4
  }, {
    src: "https://drive.google.com/uc?id=1MDBMZc7FpHWyc6PkUfGNIKKSB2Br55dv",
    width: 4,
    height: 4
  }, {
    src: "https://drive.google.com/uc?id=1LYb9n3PAAiH3nBiKua5HmXSqMMBweFMa",
    width: 4,
    height: 4
  },
  {
    src: "https://drive.google.com/uc?id=1rvwfbJjoy7pw-976GhqUHnyrbs_sGdOa",
    width: 3,
    height: 3
  }, {
    src: "https://drive.google.com/uc?id=1MUIzznJuhzBuKyOOeMOgRRkU9Bn3yEHZ",
    width: 3,
    height: 3
  }, {
    src: "https://drive.google.com/uc?id=1tGLviA1NZsWPfwFn97OV3ZIOCQDlFFF8",
    width: 3,
    height: 3
  }, {
    src: "https://drive.google.com/uc?id=1Cn6JuqO37Qro1IJe81gVUsWOQ9VX2bRL",
    width: 3,
    height: 3
  }, {
    src: "https://drive.google.com/uc?id=1rqbICWdtyiJLQBo_wNjoXcEZ6XGUG-pI",
    width: 3,
    height: 3
  }, {
    src: "https://drive.google.com/uc?id=15YiDd-D9VZCLnFw47k08IhzIYVs0mI3B",
    width: 3,
    height: 3
  }, {
    src: "https://drive.google.com/uc?id=1_u9JoaLW5XlCA66CcST7Tfu6tAUsB_qN",
    width: 5,
    height: 5
  }, {
    src: "https://drive.google.com/uc?id=1-l6JpaoNUbwavM81l0LK2tSqfPAIeHob",
    width: 3,
    height: 3
  }, {
    src: "https://drive.google.com/uc?id=105HTi6SiZq0v7edfceT8POfDTFi1X1Yz",
    width: 3,
    height: 5
  }, {
    src: "https://drive.google.com/uc?id=1qOgY7K6iopbvKr0spMuIVqjp6NmX5o42",
    width: 3,
    height: 5
  }, {
    src: "https://drive.google.com/uc?id=1DRJ3mwdrmhkZyxUA16EtqTSOlkKl8cUt",
    width: 2,
    height: 3
  }, {
    src: "https://drive.google.com/uc?id=1oCdOcDNpS2MoKQ-0LfPQqBhV7eetX3LI",
    width: 3,
    height: 3
  }, {
    src: "https://drive.google.com/uc?id=1HjbFBBeYOTYUUojAI05TTshio04lf8AN",
    width: 3,
    height: 4
  }, {
    src: "https://drive.google.com/uc?id=1mSJGxQtc6ljTvUaRNbCRGFcCIjSyNMGC",
    width: 3,
    height: 4
  }
  /*
  {
    src: "https://drive.google.com/uc?id=",
    width: 3,
    height: 6
  }
  */
];
function DesignArt() {
  return (
    <div className="DesignArt">
      <div className="gallery-wrapper">
        <Gallery className="gallery" photos={photos} />
      </div>

      <p className="designart-intro">Or <a href="https://drive.google.com/drive/folders/1oprNRBUVfFHPnjJnyRBBTV7Pp-jg28oN?usp=sharing" target="_blank">here</a> is the google drive version!</p>

    </div>
  );
}

export default DesignArt;
