let data;

const form = document.getElementById("myForm");
//peticion al backend asignacion de datos segun evento submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://localhost:7049/api/registros/enviar");
  xhr.onload = () => {
    if (xhr.status === 200) {
      response = xhr.response;
      data = JSON.parse(response);
      console.log(data);

      crearGraficos(data);
    } else {
      console.error(xhr.statusText);
    }
  };

  xhr.onerror = () => {
    console.error(xhr.statusText);
  };

  xhr.send(formData);
});
//colores random para los graficos

function getRandomColor(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}
//convertir formato MMAAAA a mes/anio

function convertirMes(mes) {
  const meses = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];
  const mesNumero = mes.substring(0, 2);
  const anio = mes.substring(2);
  return `${meses[mesNumero - 1]}/${anio}`;
}
//ocultar todos los graficos

function ocultarElementos() {
  const elementos = document.getElementsByClassName("col2");
  for (let i = 0; i < elementos.length; i++) {
    elementos[i].style.display = "none";
  }
}
  //Seleccion de graficos 

function seleccionarElemento(index) {
  ocultarElementos(); // oculta todos los elementos

  // muestra el elemento seleccionado
  const elementos = document.getElementsByClassName("col2");
  elementos[index].style.display = "block";
}
  //Toda la logica de los graficos

function crearGraficos(data) {
  const colorsPromedio = Object.keys(
    data.promedioPeliculasVistasPorPeriodo
  ).map(
    (e) =>
      `rgba(${getRandomColor(255, 0)},${getRandomColor(
        255,
        0
      )},${getRandomColor(255, 0)}, 1)`
  );

  const labelsPromedio = Object.keys(
    data.promedioPeliculasVistasPorPeriodo
  ).map((key) => convertirMes(key.toString().padStart(6, "0")));

  const dataPromedio = Object.values(
    data.promedioPeliculasVistasPorPeriodo
  ).map((key) => key);

  new Chart(document.getElementById("periodo"), {
    type: "pie",
    data: {
      labels: labelsPromedio,
      datasets: [
        {
          backgroundColor: colorsPromedio,
          data: dataPromedio,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Promedio de Peliculas vistas dividido en periodos",
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 2,
      },
    },
  });

  const colorsPromedioM = Object.keys(
    data.promedioPeliculasVistasPorPeriodoMasculino
  ).map(
    (e) =>
      `rgba(${getRandomColor(255, 0)},${getRandomColor(
        255,
        0
      )},${getRandomColor(255, 0)}, 1)`
  );

  const labelsPromedioM = Object.keys(
    data.promedioPeliculasVistasPorPeriodoMasculino
  ).map((key) => convertirMes(key.toString().padStart(6, "0")));

  const dataPromedioM = Object.values(
    data.promedioPeliculasVistasPorPeriodoMasculino
  ).map((key) => key);

  new Chart(document.getElementById("periodoM"), {
    type: "pie",
    data: {
      labels: labelsPromedioM,
      datasets: [
        {
          backgroundColor: colorsPromedioM,
          data: dataPromedioM,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Promedio de Peliculas vistas por hombres dividido en periodos",
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 2,
      },
    },
  });

  const colorsPromedioF = Object.keys(
    data.promedioPeliculasVistasPorPeriodoFemenino
  ).map(
    (e) =>
      `rgba(${getRandomColor(255, 0)},${getRandomColor(
        255,
        0
      )},${getRandomColor(255, 0)}, 1)`
  );

  const labelsPromedioF = Object.keys(
    data.promedioPeliculasVistasPorPeriodoFemenino
  ).map((key) => convertirMes(key.toString().padStart(6, "0")));

  const dataPromedioF = Object.values(
    data.promedioPeliculasVistasPorPeriodoFemenino
  ).map((key) => key);

  new Chart(document.getElementById("periodoF"), {
    type: "pie",
    data: {
      labels: labelsPromedioF,
      datasets: [
        {
          backgroundColor: colorsPromedioF,
          data: dataPromedioF,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Promedio de Peliculas vistas por mujeres dividido en periodos",
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 2,
      },
    },
  });

  const colorsSexo = Object.keys(data.promedioPeliculasPorSexo).map(
    (e) =>
      `rgba(${getRandomColor(255, 0)},${getRandomColor(
        255,
        0
      )},${getRandomColor(255, 0)}, 1)`
  );

  const labelsSexo = Object.keys(data.promedioPeliculasPorSexo).map((key) =>
    key.toString()
  );

  const dataSexo = Object.values(data.promedioPeliculasPorSexo).map(
    (key) => key
  );

  new Chart(document.getElementById("sexo"), {
    type: "pie",
    data: {
      labels: labelsSexo,
      datasets: [
        {
          backgroundColor: colorsSexo,
          data: dataSexo,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Promedio de Peliculas vistas dividido por Sexo",
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 2,
      },
    },
  });

  const colorsEdad = Object.keys(data.promedioPeliculasPorRangoEdad).map(
    (e) =>
      `rgba(${getRandomColor(255, 0)},${getRandomColor(
        255,
        0
      )},${getRandomColor(255, 0)}, 1)`
  );

  const labelsEdad = Object.keys(data.promedioPeliculasPorRangoEdad).map(
    (key) => key.toString()
  );

  const dataEdad = Object.values(data.promedioPeliculasPorRangoEdad).map(
    (key) => key
  );

  new Chart(document.getElementById("edad"), {
    type: "pie",
    data: {
      labels: labelsEdad,
      datasets: [
        {
          backgroundColor: colorsEdad,
          data: dataEdad,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Promedio de Peliculas vistas dividido por edad",
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 2,
      },
    },
  });

  const dataVistas = [data.promedioPeliculasVistas];

  new Chart(document.getElementById("vistas"), {
    type: "bar",
    data: {
      labels: ["Promedio peliculas vistas"],
      datasets: [
        {
          label: "Promedio peliculas vistas",
          backgroundColor: "#c45850",
          borderColor: "#c45850",
          data: dataVistas,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Promedio de Peliculas vistas",
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 2,
      },
    },
  });
}
//Iniciar el programa

ocultarElementos();
