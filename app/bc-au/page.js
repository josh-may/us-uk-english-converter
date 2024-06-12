"use client";

import React, { useState } from "react";
import Head from "next/head";

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
      personalized: "personalised",
      analyzing: "analysing",
      optimizing: "optimising",
      hiccup: "hiccough",
      installments: "instalments",
      practices: "practises",
      personalization: "personalisation",
      modernizing: "modernising",
      customized: "customised",
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

    // Convert BigCommerce internal links to .co.uk
    convertedText = convertedText.replace(
      /https:\/\/www\.bigcommerce\.com/g,
      "https://www.bigcommerce.com.au"
    );

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
        <title>
          US to UK English Converter - Convert American English to British
          English
        </title>
        <meta
          name="description"
          content="Easily convert American English to British English with our powerful US to UK English converter tool. Get accurate translations instantly!"
        />
        <meta
          name="keywords"
          content="US to UK English converter, American to British English, English conversion tool, convert American English, American English to British English"
        />
      </Head>
      <div className="max-w-5xl mx-auto py-7 mt-10 bg-white border rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-left ml-8 text-black">
          US to UK English Converter
        </h1>
      </div>
      <div className="max-w-5xl mx-auto p-8 mt-5 bg-white border rounded-lg shadow-xl">
        <h2 className="text-3xl mb-4 font-semibold text-gray-800">
          American Input
        </h2>
        <div
          className="editable-content min-h-[250px] max-h-[550px] p-6 border-2 border-gray-300 rounded-lg mb-6 shadow-md overflow-y-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
          contentEditable
          dangerouslySetInnerHTML={{ __html: inputText }}
          onInput={(e) => setInputText(e.target.innerHTML)}
        ></div>
        <div className="flex flex-col space-y-4 mb-8 w-1/3">
          <button
            className="w-full px-4 py-2 text-lg font-semibold text-white bg-blue-600 rounded-lg transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={handleConvert}
          >
            Convert to British English
          </button>
          <button
            className="w-full px-4 py-2 text-lg font-semibold text-white bg-green-600 rounded-lg transition-colors duration-300 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            onClick={handleCopy}
          >
            Copy to Clipboard
          </button>
        </div>
        <h2 className="text-3xl mb-4 font-semibold text-gray-800">
          British Output
        </h2>
        <div
          className="editable-content min-h-[250px] max-h-[550px] p-6 border-2 border-gray-300 rounded-lg mb-6 shadow-md overflow-y-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
          contentEditable
          dangerouslySetInnerHTML={{ __html: outputText }}
        ></div>
      </div>

      <footer className="text-center mt-12 my-10">
        <p className="text-gray-600">
          Created by{" "}
          <a
            href="https://joshmay.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Josh May
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
