import Deal from "../Deal";

class DealToOrderAdapter{
  adapt(deal: Deal) {
    let adaptDeal: any =  {
      "pedido": {
        "cliente": {
          "nome": deal.org_name,
        },
        "itens" : {
          "item" : []
        },
        "obs": deal.title,
        "obs_internas": `Solicitado por: ${deal.person_name}, Valor Proposto: ${deal.value}`
      }
    };

    adaptDeal.pedido.itens.item.push({
      codigo: 1,
      descricao: "Produto a ser inserido",
      qtde: 1,
      vlr_unit: deal.value
    });

    return adaptDeal;
  }
}

export = new DealToOrderAdapter();