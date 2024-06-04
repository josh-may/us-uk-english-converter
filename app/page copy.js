"use client"

import React, { useState } from "react";
import Head from 'next/head';

function App() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const handleConvert = () => {
    const americanToBritishMap = {
      color: "colour",
      favorite: "favourite",
      humor: "humour",
      labor: "labour",
      center: "centre",
      neighbor: "neighbour",
      theater: "theatre",
      vocalize: "vocalise",
      westernize: "westernise",
      honor: "honour",
      analyze: "analyse",
      organize: "organise",
      realize: "realise",
      traveling: "travelling",
      defense: "defence",
      jewelry: "jewellery",
      program: "programme",
      dialog: "dialogue",
      enroll: "enrol",
      fulfill: "fulfil",
      gray: "grey",
      catalog: "catalogue",
      plow: "plough",
      whiskey: "whisky",
      check: "cheque",
      behavior: "behaviour",
      draft: "draught",
      tire: "tyre",
      apologize: "apologise",
      practice: "practise",
      ton: "tonne",
      harbor: "harbour",
      labeled: "labelled",
      defenseless: "defenceless",
      aging: "ageing",
      canceling: "cancelling",
      canceled: "cancelled",
      disc: "disc",
      fueled: "fuelled",
      judgment: "judgement",
      neighborhood: "neighbourhood",
      maneuver: "manoeuvre",
      flavor: "flavour",
      fiber: "fibre",
      aluminum: "aluminium",
      pajamas: "pyjamas",
      skeptic: "sceptic",
      meter: "metre",
      offense: "offence",
      paralyze: "paralyse",
      traveled: "travelled",
      traveler: "traveller",
      license: "licence",
      curb: "kerb",
      story: "storey",
      analog: "analogue",
      pediatric: "paediatric",
      sulfur: "sulphur",
      mold: "mould",
      mom: "mum",
      airplane: "aeroplane",
      caliber: "calibre",
      centered: "centred",
      counselor: "counsellor",
      empathize: "empathise",
      fetus: "foetus",
      normalize: "normalise",
      odor: "odour",
      rationalize: "rationalise",
      recognize: "recognise",
      signaled: "signalled",
      vaporize: "vaporise",
      vigor: "vigour",
      appetizer: "appetiser",
      authorize: "authorise",
      ax: "axe",
      criticized: "criticised",
      defense: "defence",
      donut: "doughnut",
      fantasize: "fantasise",
      fertilizer: "fertiliser",
      installment: "instalment",
      leaped: "leapt",
      licorice: "liquorice",
      mobilize: "mobilise",
      mustache: "moustache",
      panelist: "panellist",
      prioritize: "prioritise",
      serialized: "serialised",
      specialty: "speciality",
      sympathize: "sympathise",
      tranquilize: "tranquillise",
      vapor: "vapour",
      woolen: "woollen",
      accessorize: "accessorise",
      agonize: "agonise",
      amortize: "amortise",
      capitalization: "capitalisation",
      categorize: "categorise",
      characterize: "characterise",
      civilize: "civilise",
      colonize: "colonise",
      customize: "customise",
      digitize: "digitise",
      dependent: "dependant",
      dramatize: "dramatise",
      emphasize: "emphasise",
      energize: "energise",
      familiarize: "familiarise",
      generalize: "generalise",
      homogenize: "homogenise",
      hospitalize: "hospitalise",
      hypnotize: "hypnotise",
      idealize: "idealise",
      legalize: "legalise",
      lionize: "lionise",
      localize: "localise",
      marginalize: "marginalise",
      memorialize: "memorialise",
      mesmerize: "mesmerise",
      minimize: "minimise",
      modernize: "modernise",
      optimize: "optimise",
      ostracize: "ostracise",
      pasteurize: "pasteurise",
      patronize: "patronise",
      personalize: "personalise",
      plagiarize: "plagiarise",
      polarize: "polarise",
      popularize: "popularise",
      privatize: "privatise",
      publicize: "publicise",
      realize: "realise",
      recognize: "recognise",
      revolutionize: "revolutionise",
      sanitize: "sanitise",
      satirize: "satirise",
      scandalize: "scandalise",
      scrutinize: "scrutinise",
      sensitize: "sensitise",
      standardize: "standardise",
      sterilize: "sterilise",
      subsidize: "subsidise",
      summarize: "summarise",
      symbolize: "symbolise",
      synchronize: "synchronise",
      terrorize: "terrorise",
      utilize: "utilise",
      victimize: "victimise",
      visualize: "visualise",
      vocalize: "vocalise",
      westernize: "westernise",
      optimization: "optimisation",
      customizable: "customisable",
      penalizes: "penalises",
      centralized: "centralised",
      licensing: "licencing",
      customizations: "customisations",
      catalogs: "catalogues",
      organization: "organisation",
      idea: "idaea",
      stories: "storeys",
      specializes: "specialises",
      maximizing: "maximising",
    };

    let convertedText = inputText;
    for (const [american, british] of Object.entries(americanToBritishMap)) {
      const regex = new RegExp(
        `(?<!<[^>]*)(\\b${american}\\b)(?![^<]*>)`,
        "gi"
      );
      convertedText = convertedText.replace(regex, (match) => {
        if (match === match.toUpperCase()) {
          return `<span style="background-color: yellow;">${british.toUpperCase()}</span>`;
        } else if (match === match.toLowerCase()) {
          return `<span style="background-color: yellow;">${british.toLowerCase()}</span>`;
        } else {
          return `<span style="background-color: yellow;">${
            british.charAt(0).toUpperCase() + british.slice(1)
          }</span>`;
        }
      });
    }

    setOutputText(convertedText);
  };

  const handleCopy = () => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = outputText;
    document.body.appendChild(tempElement);

    const range = document.createRange();
    range.selectNodeContents(tempElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    document.execCommand("copy");

    window.getSelection().removeAllRanges();
    document.body.removeChild(tempElement);
  };

  return (
    <>
      <Head>
        <title>US to UK English Converter</title>
        <meta name="description" content="Convert American English to British English easily with our US to UK English converter." />
        <meta name="keywords" content="US to UK English converter, American to British English, English conversion tool" />
      </Head>
      <div className="max-w-3xl mx-auto p-5 mt-10 text-black">
        <h1 className="text-4xl mb-5 font-bold text-left">US to UK English Converter</h1>
        <div
          className="editable-content min-h-[250px] max-h-[550px] p-5 border-2 border-gray-400 rounded mb-5 shadow overflow-y-auto"
          contentEditable
          dangerouslySetInnerHTML={{ __html: inputText }}
          onInput={(e) => setInputText(e.target.innerHTML)}
        ></div>
        <div className="flex flex-col items-start mt-5 mb-10">
          <button className="px-6 py-3 text-lg font-bold text-white bg-blue-500 rounded mb-2 transition-colors duration-300 hover:bg-blue-700" onClick={handleConvert}>
            Convert to British English
          </button>
          <button className="px-6 py-3 text-lg font-bold text-white bg-green-500 rounded transition-colors duration-300 hover:bg-green-700" onClick={handleCopy}>
            Copy to Clipboard
          </button>
        </div>
        <h1 className="text-4xl mb-5 font-bold text-left">British Output</h1>
        <div
          className="editable-content min-h-[250px] max-h-[550px] p-5 border-2 border-gray-400 rounded mb-5 shadow overflow-y-auto"
          contentEditable
          dangerouslySetInnerHTML={{ __html: outputText }}
        ></div>
      </div>
    </>
  );
}

export default App;