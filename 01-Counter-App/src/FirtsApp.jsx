// Importa la librería PropTypes, que se utiliza para validar las propiedades en componentes de React.
import PropTypes from "prop-types";

export const FirtsApp = ({ title, subTitle }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </>
  );
};

// Define PropTypes para el componente FirtsApp para validar las propiedades.
FirtsApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

// Define las propiedades que tendrá por defecto las props en caso de que no se le pasen al momento de ser usado dicho componente
FirtsApp.defaultProps = {
  title: "No se ha definido el título",
  subTitle: "No se ha definido un subtítulo",
};
