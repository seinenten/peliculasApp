export interface Pelicula {
    id?:                string;
    nombre:            string;
    Pais:              string;
    Genero:            Genero;
    TituloOriginal:   string;
    Sinopsis:          string;
    alt_img?:         string;
}

export enum Genero {
    Accion = "Accion",
    Terror = "Terror",
}