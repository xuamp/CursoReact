import "../../src/App.css";
import { Link } from "react-router-dom";

const Servicios4 = (props) => {
  return (
    <div>
      <section className="Presentacion">
        <div className="PresentacionFoto">
          <div className="PresentacionTitulo">
            <h1>SERVICIOS</h1>
          </div>
        </div>
      </section>
      <section className="serviciosCuerpo">
        <div className="serviciosCuerpo-1">
          <Link to="/Servicios">CARGAS EN TRANSITO</Link>
          <Link to="/Servicios1">IMPORT. POR CUENTA DE TERCEROS</Link>
          <Link to="/Servicios2">IMPORTACION</Link>
          <Link to="/Servicios3">PARQUEO</Link>
          <Link to="/Servicios4">LEGISLACION</Link>
          <Link to="/Servicios5">PROCESOS MENORES</Link>
        </div>
        <div class="serviciosCuerpo-2">
          <h2>Legislacion</h2>
          <p>
            De acuerdo con la Res. ex-SIC Nº 130/92 y su modificatoria Res.
            ex-SIC Nº 240/92, los cementos empleados para la construcción, sean
            éstos nacionales o importados, deberán cumplir con los requisitos
            establecidos por las normas del IRAM. En el caso de importaciones
            provenientes de los países del Mercosur o de países con los que la
            República Argentina firme acuerdos de reciprocidad, se aceptarán las
            normas técnicas que rijan en el país de origen del producto. En lo
            referente a los envases, el tipo de papel y los impresos que deben
            llevar deberán ajustarse a la citada Resolución . Para el caso de
            los cementos que se comercialicen a granel deberán tenerse presente
            los datos a incluir en la factura o remito que amparen el transporte
            de la mercadería.
          </p>
          <p>
            {" "}
            La Res. ANA Nº 3141/93 y su modificatoria Res. ANA Nº 449/96
            establece que los importadores de cemento Portland de las posiciones
            arancelarias 2523.21.00, 2523.29.10 y 2523.29.90 deberán agregar en
            ocasión de la presentación del despacho de importación la siguiente
            declaración jurada: "El cemento Portland declarado en este Despacho
            cumple con las normas IRAM establecidas en la Res. ex-SIC Nº 130/92
            comprometiéndome a presentar ante la Dirección de Defensa al
            Consumidor y Lealtad Comercial, previo a la comercialización, una
            copia de las normas técnicas y una certificación de calidad y ensayo
            de cumplimiento de las mismas de acuerdo con el artículo 5º de la
            citada Resolución . Asimismo, declaró conocer que las infracciones a
            la Res. ex-SIC Nº 130/92 serán sancionadas con arreglo a la Ley Nº
            22.802.
          </p>
          <p>
            {" "}
            La Res. SICM Nº 799/99 aprueba el símbolo que será aplicado en los
            productos alcanzados por los regímenes de certificación obligatoria,
            y que deberá ser exhibido por cada una de las unidades de los
            productos alcanzados, sus envases o etiquetas.
          </p>
          <ul>
            <li>Normas aplicables:</li>
            <li>Ley Nº 22.802 Ley de Lealtad Comercial.</li>
            <li>
              Res. ex-SIC Nº 130/92 Cemento para la construcción. Normas de
              comercialización.
            </li>
            <li>Res. ex-SIC Nº 240/92 Modifica la Res. ex-SIC Nº 130/92.</li>
            <li>Res. ANA Nº 3141/93 Cemento portland. Declaración jurada.</li>
            <li>Res. ANA Nº 449/96 Modifica la Res. ANA Nº 3141/93.</li>
            <li>
              Res. SICM Nº 799/99 Símbolo aplicable en regímenes de
              certificación obligatoria.
            </li>
            <li>
              Res Nº 101/01 SCDDC se difiere hasta el 01/04/02 la obligatoriedad
              de la identificación mediante el símbolo de seguridad.
            </li>
            <li>
              Res. SCT N° 124/05 Pautas a las que deberá ajustarse la Asociación
              de Fabricantes de Cemento Portland.
            </li>
            <li>
              Instr. Gral. DGA N° 10/2011 Régimen de Envíos Postales. Muestras.
            </li>
          </ul>
          <p>
            {" "}
            Esta tarifa corresponde al cobro unitario, expresado en dolares, por
            cada dia de permanencia del vehiculo
          </p>
        </div>
      </section>
    </div>
  );
};

export default Servicios4;
