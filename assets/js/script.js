class Propietario {
  constructor(nombrePropietario, direccion, telefono) {
    this.nombrePropietario = nombrePropietario;
    this.direccion = direccion;
    this.telefono = telefono;
  }
  get nombre() {
    return this.nombrePropietario;
  }
  datosPropietario() {
    return `<p>DATOS DEL DUEÑO DE MASCOTA:</p>
            <br> Dueño Mascota: ${this.nombrePropietario}.
            <br> Domicilio: ${this.direccion}. 
            <br> Teléfono Contacto: ${this.telefono}.<br><hr>`;
  }
}

class Animal extends Propietario {
  constructor(nombrePropietario, direccion, telefono, tipo) {
    super(nombrePropietario, direccion, telefono);
    this._tipo = tipo;
  }

  get tipo() {
    return `<p><br>DATOS DE MASCOTA:</p>
            <br> Tipo de Mascota: ${this._tipo} <br>`;
  }
}

class Mascota extends Animal {
  constructor(
    nombrePropietario,
    direccion,
    telefono,
    tipo,
    nombreMascota,
    enfermedad
  ) {
    super(nombrePropietario, direccion, telefono, tipo);
    this._nombreMascota = nombreMascota;
    this._enfermedad = enfermedad;
  }
  get nombre() {
    return this._nombreMascota;
  }
  set nombre(nuevoNombre) {
    this._nombreMascota = nuevoNombre;
  }
  get enfermedad() {
    return this._enfermedad;
  }
  set enfermedad(nuevaEnfermedad) {
    this._enfermedad = nuevaEnfermedad;
  }
}

const crearMensaje = (Mascota) => {
  let mensajeDatosPropietario = Mascota.datosPropietario();
  console.log(mensajeDatosPropietario);
  let mensajeHTML = `${mensajeDatosPropietario}
      ${Mascota.tipo} Nombre de Mascota: ${Mascota.nombre}. <br>Enfermedad o Sintomas: ${Mascota.enfermedad}.`;
  return mensajeHTML;
};

const form = document.getElementsByTagName("form")[0];
const ulResultado = document.getElementById("ulResultado");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let arregloInputs = Array.from(
    document.getElementsByClassName("form-control")
  );

  arregloInputs = arregloInputs.map((input) => input.value);

  let [
    nombrePropietario,
    telefono,
    direccion,
    nombreMascota,
    tipo,
    enfermedad,
  ] = arregloInputs;
  // Validaciones
  if (tipo == "perro") {
    const perro = new Mascota(
      nombrePropietario,
      direccion,
      telefono,
      tipo,
      nombreMascota,
      enfermedad
    );
    let mensajeHTML = crearMensaje(perro);
    console.log(mensajeHTML);
    ulResultado.innerHTML = mensajeHTML;
  } else if (tipo == "gato") {
    const gato = new Mascota(
      nombrePropietario,
      direccion,
      telefono,
      tipo,
      nombreMascota,
      enfermedad
    );
    let mensajeHTML = crearMensaje(gato);
    ulResultado.innerHTML = mensajeHTML;
  } else if (tipo == "conejo") {
    const conejo = new Mascota(
      nombrePropietario,
      direccion,
      telefono,
      tipo,
      nombreMascota,
      enfermedad
    );
    let mensajeHTML = crearMensaje(conejo);
    ulResultado.innerHTML = mensajeHTML;
  }
});
