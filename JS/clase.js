class Restaurante {
    constructor(titulo, slogan, imagen, descripcion) {
        this.titulo = titulo;
        this.slogan = slogan;
        this.imagen = imagen;
        this.descripcion = descripcion;
    }

    mostrarRestaurante() {
        let article = document.createElement("article");
        article.classList.add("post");

        let h2 = document.createElement("h2");
        let p = document.createElement("p");
        let img = document.createElement("img");
        let p2 = document.createElement("p");

        h2.textContent = this.titulo;
        p.innerHTML = this.slogan;
        img.setAttribute('src', this.imagen);
        p2.innerHTML = this.descripcion;

        article.appendChild(h2);
        article.appendChild(p);
        article.appendChild(img);
        article.appendChild(p2);

        return article;
    }
}

const restaurante1 = new Restaurante(`Restaurante El Argentino`, `Distinguido restaurante con culinaria especializada 
en gustosos platos con ingrediente principal, la carne, la especialidad de la casa.`, `Images/R_Argentino.png`, 
`En este establecimiento nos sentimos orgullosos de hacerle degustar a nuestros comensales la jugosa experiencia de 
consumir la magnifica carne argentina que ha sido simpre tan distinguida, donde se sabe que cada gramo es una sensación 
inigualable.`);

const restaurante2 = new Restaurante(`Restaurante Elegante`, `Te mereces lo mejor de esta vida y tu apetito también.`, 
`Images/R_Elegante.PNG`, `La característica "cocina creativa" deja mucho qué pensar. Pues entrar a El Cielo es 
encontrarse literalmente con eso: platos nuevos, originales y creaciones del chef, quién crea sopas, carnes, pescados y 
postres con diferentes productos, como por ejemplo su postre de limón. El diseño de El Cielo te hará sentir tranquilo, 
ya que se encuentra decorado con árboles que le dan una sensación natural.`);

const restaurante3 = new Restaurante(`Restaurante Marino`, `El sabor inigualable de las aguas marinas.`, 
`Images/R_Marino.png`, `Con una larga trayectoria gastronómica internacional. Frutos del Mar Patrimonio 
gastronómico de la Ciudad es un lugar acogedor con un equipo de colaboradores profesionales idóneos en la empresa.
Este restaurante especializado en comida de mar, sobresale por sus exquisitos pescados en varias preparaciones, 
sus mariscos y sus vinos.`);

const restaurante4 = new Restaurante(`Restaurante Mexicano`, `Conoceras la delicia del picante.`,
`Images/R_Mexicano.png`, `La plaza mayor de la ciudad de México es la que le da el nombre a este restaurante 
que ofrece a sus visitantes la autentica tradición gastronómica de esta nación. Tampico, Puebla y Veracruz son 
algunos de los estados que inspiran las recetas (preparadas con ingredientes importados) y la decoración de sus 
espacios ambientados con zócalos, máscaras y cerámicas que evocan lo mejor del país de los mariachis y corridos.`);

export const listaRestaurantes = [restaurante1, restaurante2, restaurante3, restaurante4];