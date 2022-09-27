import PropTypes from "prop-types";

// sito components
import SitoContainer from "sito-container";

// images
import CineServiceWebLogo from "../../assets/images/cineserviceweb.webp";
import ConservadorLogo from "../../assets/images/conservador.webp";
import InsectareLogo from "../../assets/images/insectare.webp";
import OchoHorasLogo from "../../assets/images/ochohoras.webp";
import InmersoftLogo from "../../assets/images/inmersoft.webp";
import TrinidadLogo from "../../assets/images/trinidad.webp";
import IncinesLogo from "../../assets/images/incines.webp";
import ZunseoLogo from "../../assets/images/zunseo.webp";

// animation
import "./animation.css";

// style
import "./style.css";

const LogoMarquee = (props) => {
  const { selected, direction, top } = props;

  const images = [
    {
      src: CineServiceWebLogo,
      alt: "cine-service-web",
    },
    {
      src: ConservadorLogo,
      alt: "conservador",
    },
    {
      src: InsectareLogo,
      alt: "insectare",
    },
    {
      src: InmersoftLogo,
      alt: "inmersoft",
    },
    {
      src: TrinidadLogo,
      alt: "trinidad",
    },
    {
      src: OchoHorasLogo,
      alt: "8horas",
    },
    {
      src: IncinesLogo,
      alt: "incines",
    },
    {
      src: ZunseoLogo,
      alt: "zunseo",
    },
  ];

  return (
    <SitoContainer
      sx={{
        position: "fixed",
        transform: "rotate(-45deg)",
        gap: "50px",
        top,
        width: "100vh",
      }}
    >
      <section className="logoMarqueeSection">
        <div className="container" id="logoMarqueeSection">
          <div className="default-content-container flex items-center">
            <div className="default-content-container-inner marquee-wrapper relative overflow-hidden inline-block">
              <div
                className={`marquee-${direction}`}
                style={{ animationDuration: "30s" }}
              >
                {images.map((item) => (
                  <img
                    className={
                      item.alt === selected
                        ? "selected-logo marqueelogo"
                        : "image-marquee marqueelogo"
                    }
                    style={{ width: "auto", maxWidth: "none" }}
                    src={item.src}
                    alt={item.alt}
                  />
                ))}
              </div>
              <div
                className={`marquee-${direction}`}
                style={{ animationDuration: "30s" }}
              >
                {images.map((item) => (
                  <img
                    className={
                      item.alt === selected
                        ? "selected-logo marqueelogo"
                        : "image-marquee marqueelogo"
                    }
                    style={{ width: "auto", maxWidth: "none" }}
                    src={item.src}
                    alt={item.alt}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SitoContainer>
  );
};

LogoMarquee.defaultProps = {
  selected: "inmersoft",
  direction: "left",
  top: "inherit",
};

LogoMarquee.propTypes = {
  selected: PropTypes.string,
  direction: PropTypes.string,
  top: PropTypes.string,
};

export default LogoMarquee;
