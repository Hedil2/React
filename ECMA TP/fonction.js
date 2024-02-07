function Search(tab, id) {
    const objetTrouve = tab.find((objet) => objet.id === id);
    return objetTrouve ? objetTrouve : "Objet non trouvé";
  }
  