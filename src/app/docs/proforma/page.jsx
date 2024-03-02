"use client";
import React, { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const Produit = () => {
  const uniteOptions = [
    { value: "KG", label: "KG" },
    { value: "l", label: "L" },
    { value: "TON", label: "T" },
  ];

  const [designation, setDesignation] = useState("");
  const [selectedUnite, setSelectedUnite] = useState(uniteOptions[0]);
  const [quantite, setQuantite] = useState("");
  const [pu, setPu] = useState("");

  const handleSelectUnite = (selected) => {
    setSelectedUnite(selected);
  };

  return (
    <div className="grid grid-cols-[2fr,1.5fr,1fr,1fr] gap-[30px] items-center justify-center w-full ">
      <input
        placeholder="Désignation"
        type="text"
        value={designation}
        onChange={(e) => setDesignation(e.target.value)}
        className="border-light-blue border-[1px] rounded-[5px] w-[100%] py-[10px] px-[20px] my-[20px]"
      />
      <Dropdown
        options={uniteOptions}
        onChange={handleSelectUnite}
        value={selectedUnite}
        placeholder="Unité De Mesure"
      />
      <input
        placeholder="Quantité"
        type="text"
        value={quantite}
        onChange={(e) => setQuantite(e.target.value)}
        className="border-light-blue border-[1px] rounded-[5px] w-[100%] py-[10px] px-[20px] my-[20px]"
      />
      <input
        placeholder="PU"
        type="text"
        value={pu}
        onChange={(e) => setPu(e.target.value)}
        className="border-light-blue border-[1px] rounded-[5px] w-[100%] py-[10px] px-[20px] my-[20px]"
      />
    </div>
  );
};

const ProformaTemplate = () => {
  const countryOptions = [
    { value: "Algeria", label: "Algeria" },
    { value: "Tunisia", label: "Tunisia" },
    { value: "Spain", label: "Spain" },
  ];
  const stateOptions = [
    { value: "Algiers", label: "Algiers" },
    { value: "Tokyo", label: "Tokyo" },
    { value: "Paris", label: "Paris" },
  ];

  const [nom, setNom] = useState("");
  const [adresse, setAdresse] = useState("");
  const [country, setCountry] = useState(countryOptions[0]);
  const [state, setState] = useState(stateOptions[0]);
  const [adresseLivraison, setAdresseLivraison] = useState("");
  const [livraisonCountry, setLivraisonCountry] = useState(countryOptions[0]);
  const [livraisonState, setLivraisonState] = useState(stateOptions[0]);
  const [facturationSameAsLivraison, setFacturationSameAsLivraison] =
    useState(true);
  const [numeroFacture, setNumeroFacture] = useState("");
  const [products, setProducts] = useState([]);

  const handleSelectCountry = (selected) => {
    setCountry(selected);
  };

  const handleSelectState = (selected) => {
    setState(selected);
  };

  const handleSelectLivraisonCountry = (selected) => {
    setLivraisonCountry(selected);
  };

  const handleSelectLivraisonState = (selected) => {
    setLivraisonState(selected);
  };

  const addProduct = () => {
    setProducts([...products, <Produit key={products.length} />]);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-[7%]">
      <h1 className="font-bold text-3xl text-start w-full py-[20px]">
        Generate Proforma Invoice ( bon de commande )
      </h1>
      <div className="w-full px-[8%] font-lora">
        {/* Other form elements */}
        <h2 className="text-3xl">Produits</h2>
        {products.map((product, index) => (
          <div key={index}>{product}</div>
        ))}
        <div className="flex items-end justify-end my-[15px]">
          <button className="bg-light-blue text-white" onClick={addProduct}>
            Ajouter Un Produit
          </button>
        </div>
        {/* Other form elements */}
      </div>
    </div>
  );
};

export default ProformaTemplate;
