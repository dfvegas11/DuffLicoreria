interface IChat{
    seguimientoDelPedido(): void;
    limpiarHistorial(): void;
}

interface IClientes{
    regresarInicio(): void;
}

interface IRecaudo{
    confirmarPago(): void
}

interface IInventariable{
    mostrarTipos(): void;
    mostrarSinAlcohol(): void;
    mostrarLicores(): void;
    mostrarCervezas(): void;
}

interface IModerador{
    moderarComponentes(): void
}

export {IChat, IClientes, IRecaudo, IInventariable, IModerador}