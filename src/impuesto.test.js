import impuesto_total_ca from './impuesto_total_ca';
import porcentaje_descuento from './porcentaje_descuento';

describe("TOTALIZADOR",()=>{
    it("devuelve el impuesto",()=>{
        expect(impuesto_total_ca(10000,6.65)).toEqual(665);
    });
    it("devuelve el descuento",()=>{
        expect(porcentaje_descuento(7000,5)).toEqual(0.35);
    });
});