import { Producto } from '../types/menu';

export const formatearProducto = (prod: Producto) => {
  const moneda = "L. "; // Si cambia de país, solo se edita aquí
  const descuentoValor = prod.descuento ?? 0;
  const tieneDescuento = descuentoValor > 0;
  const precioFinal = tieneDescuento ? prod.precio - descuentoValor : prod.precio;

  return {
    ...prod,
    precioOriginalFormateado: `${moneda}${prod.precio.toFixed(2)}`,
    precioFinalFormateado: `${moneda}${precioFinal.toFixed(2)}`,
  };
};