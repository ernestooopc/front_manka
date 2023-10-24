export class Producto {
    prodid!: number;
    codmenu!: string;
    prodnombre!: string;
    proddescripcion!: string;
    prodimagen!:  Uint8Array | any; // Puedes ajustar el tipo según tus necesidades
    prodprecio!: number;
    prodfregistro!: Date; // Puedes ajustar el tipo a 'string' o 'Date' según tus necesidades
    tipoproducto!: TipoProducto;
    prodestado!: number;

    
  }
  
  export class TipoProducto {
    tproid!: number;
    tpronombretipo!: string;
    tprocreatdat!: Date; // Puedes ajustar el tipo a 'string' o 'Date' según tus necesidades
    tproestado!: number;
  }