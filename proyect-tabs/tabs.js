
const contenidoBooks = [
    {   id: 1,
        author:"Edgar Allan Poe",
        parrad:`Es reconocido como uno de los maestros universales del relato corto. Entre sus cuentos más famosos, se destacan "El gato negro" y "Manuscrito encontrado en una botella"`,
        imagen:"../proyect-tabs/imagenes-libros/81LlynrwyzL._UF1000,1000_QL80_.jpg",
        frase:"Sumerge al lector en la mentalidad de un asesino y cuenta una historia que traspasa las fronteras del tiempo al tratar un tema universal: la culpa",
    },
    {   id: 2,
        author:"H.P Lovecradt",
        parrad:`Creó su propio universo mitológico (horror cósmico), el cual es gobernado por deidades que permanecen ocultas. llamadas dioses primigenios, seres sobrenaturales que habitaron la Tierra antes de que la humanidad llegara.
                Cthulhu es un refrente a la literatura de horror hoy en día.`,
        imagen:"../proyect-tabs/imagenes-libros/31035075.jpg",
        frase:"La gente de Ulthar se preocupaba mucho de que sus gatos no se acercaran a esa pequeña cabaña vieja rodeada de arboles y si sus gatos se perdían y no llegaban al día siguiente ya sabían el terrible destino que habrían sufrido.",
    },
    {   id: 3,
        author:"Gut de Maupassant",
        parrad:`Escribió uno de los cuentos más impresionantes dentro del género de horror`,
        imagen:"../proyect-tabs/imagenes-libros/Guy_de_Maupassant_le_Horla-edition1908.jpg",
        frase:"Esta narrada en forma de diario la progresiva caída en la locura de un hombre que, tras un suceso aparentemente inocente, comienza a sentir y a percibir una presencia invisible, el Horla",
    },
    {   id: 4,
        author:"Horacio Quiroga",
        parrad:`Sus relatos a menudo retratan a la naturaleza con rasgos temibles y horrorosos, como enemiga de las circunstancias del ser humano.`,
        imagen:"../proyect-tabs/imagenes-libros/page_1_thumb_large.webp",
        frase:`Sin duda uno de los cuentos más sorprendentes es "El almohadón de plumas". que si bien no es considerado de horror, es un cuento que absorbe la sangre"`,
    }
]   

const title = document.getElementById("title");
const photo = document.getElementById("imag-book");
const parraf = document.getElementById("parraf");
const frase = document.getElementById("frase");

const botones = document.querySelectorAll(".escritores button");

botones.forEach((btn, index)=>{
    btn.addEventListener("click", () => {
            const escritor = contenidoBooks[index]

    title.textContent = escritor.author
    parraf.textContent = escritor.parrad
    photo.src = escritor.imagen;
    frase.textContent = escritor.frase

    botones.forEach(boton => boton.classList.remove("activo"))
    btn.classList.add("activo")

    })
})
