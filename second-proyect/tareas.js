const cuaderno = document.getElementById("cuaderno")
const btnMuestra= document.getElementById("mostrarOcultar")
let lista = JSON.parse(localStorage.getItem("tareas")) || [] 

lista.forEach(tarea => mostrarTarea(tarea))

if (lista.length > 0) {
    btnMuestra.style.display = "block"
}

function listaTareas() {
  const input = document.getElementById("lista")
  const ingreso = input.value.trim()

  if (ingreso === "") return  

  const nuevaTarea = { texto: ingreso, completado: false }
  lista.push(nuevaTarea)
  localStorage.setItem("tareas", JSON.stringify(lista))


  mostrarTarea(nuevaTarea)

    btnMuestra.style.display = "block"

  input.value = ""
}


function mostrarTarea(tarea) {
  const li = document.createElement("li")
  li.textContent = tarea.texto

  if (tarea.completado) {
    li.classList.add("completado")
  }

  li.addEventListener("click", () => {
    tarea.completado = !tarea.completado 
    localStorage.setItem("tareas", JSON.stringify(lista))

    li.classList.toggle("completado")
  })

  cuaderno.appendChild(li)
}

btnMuestra.addEventListener("click", () => {
  lista.pop();
  localStorage.setItem("tareas", JSON.stringify(lista));
  cuaderno.removeChild(cuaderno.lastChild);

  if (lista.length === 0) {
    btnMuestra.style.display = "none";
  }
});
