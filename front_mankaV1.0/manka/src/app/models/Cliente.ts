export class Cliente {
    clieteid!: number; // ID del cliente
    clietipodocumento!: string; // Tipo de documento (DNI, Pasaporte, etc.)
    clienumdocumento!: string; // Número de documento
    clienombres!: string; // Nombres del cliente
    clieapellidos!: string; // Apellidos del cliente
    cliecelular!: string; // Número de celular
    cliecorreo!: string; // Correo electrónico
    cliedireccion!: string; // Dirección
    cliefnacimiento!: Date; // Fecha de nacimiento
    clieestado!: number; // Estado del cliente (Activo: 1, Inactivo: 0)
}