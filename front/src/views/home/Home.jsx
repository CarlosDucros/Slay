import classes from "./home.module.css";
import manicura_1 from "../../assets/manicura_1.jpg";
import manicura_2 from "../../assets/manicura_2.jpg";

const Home = () => {
  return (
    <>
      <div>
        <div className={classes.home_content}>
          <h1>Bienvenidos a Slay</h1>
          <h4>
            Descubre el arte de la manicura en un ambiente único y relajante.
          </h4>
          <div className={classes.imgText}>
            <p>
              En Slay, nos enorgullece ofrecerte una experiencia excepcional en
              cuidado de uñas y belleza. Nuestro compromiso con la excelencia y
              la atención al detalle se refleja en cada aspecto de nuestro
              servicio. Con una amplia gama de opciones, desde manicuras
              clásicas hasta diseños personalizados y tratamientos
              especializados, estamos aquí para satisfacer todas tus necesidades
              de cuidado de manos y belleza.
            </p>
            <img className={classes.img} src={manicura_1} alt="" />
          </div>
          <div className={classes.imgText}>
            <img className={classes.img} src={manicura_2} alt="" />
            <p>
              Nuestro equipo de talentosos manicuristas está dedicado a
              proporcionarte resultados impecables. Utilizamos solo los mejores
              productos y técnicas para garantizar que cada visita a Slay sea
              una experiencia memorable y satisfactoria. En Slay, entendemos que
              tus manos son una expresión de tu estilo y personalidad. Por eso,
              nos esforzamos por ofrecerte servicios que resalten tu belleza
              única y te hagan sentir segura y radiante.
            </p>
          </div>
          <p>
            Además de nuestras excepcionales habilidades en manicura, también
            nos preocupamos por tu bienestar general. Ofrecemos una variedad de
            tratamientos para el cuidado de las manos y masajes relajantes para
            que te sientas renovada y rejuvenecida.
          </p>
          <p>
            ¡Ven y descubre por qué somos el destino preferido de aquellos que
            buscan lo mejor en cuidado de uñas y belleza! Reserva tu cita hoy
            mismo y déjanos consentirte en Slay.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
