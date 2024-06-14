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
      revolutionizing: "revolutionising",
      personalizing: "personalising",
      organizations: "organisations",
      humanizes: "humanises",
      inquiries: "enquiries",
      favoring: "favouring",
      characterized: "characterised",
      modernized: "modernised",
      behaviours: "behaviors",
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

      <div className="max-w-5xl text-black mx-auto py-7 mt-10 bg-white border rounded-lg shadow-md">
        <h2 className="text-3xl text-center font-bold mb-8">
          FAQs about American to British English
        </h2>
        <div className="space-y-6 px-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              What is the difference between US and UK English?
            </h3>
            <p className="text-gray-700">
              The main differences between US and UK English are in vocabulary,
              spelling, and pronunciation. Some vocabulary distinctions include
              "truck" (US) vs. "lorry" (UK), and "elevator" (US) vs. "lift"
              (UK). Spelling differences include "color" (US) vs. "colour" (UK),
              and "organize" (US) vs. "organise" (UK). US English often uses "z"
              instead of "s" in words like "realize." Pronunciation varies, with
              US English generally being more rhotic (pronouncing "r" after
              vowels). Despite these differences, the two varieties are mutually
              intelligible, and the grammatical structure remains largely the
              same.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Is the service free to use, or are there any premium features?
            </h3>
            <p className="text-gray-700">Free to use :)</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              How accurate is the US to UK English converter?
            </h3>
            <p className="text-gray-700">
              The US to UK English converter aims to handle the majority of
              common differences between American and British English with a
              high degree of accuracy. However, some highly specialized
              vocabulary, slang terms, or obscure regional variations may not
              always be caught. If you notice any errors or have suggestions for
              improving the tool's accuracy, please email your feedback to
              me@joshmay.xyz. The converter is regularly updated based on user
              input to provide the most reliable and comprehensive US to UK
              English conversion possible.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Can the converter handle different file formats, such as .doc,
              .pdf, or .txt?
            </h3>
            <p className="text-gray-700">
              The converter works by copying and pasting your content directly
              into the tool. It does not support uploading or converting files
              in formats such as .doc, .pdf, or .txt. To use the converter, you
              must copy the desired text from your original document and paste
              it into the provided input field. This allows the tool to process
              and convert the text you've provided. For the best results, ensure
              that you are copying plain text without any formatting or special
              characters.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              How long does it take for the converter to process the text?
            </h3>
            <p className="text-gray-700">
              Processing time is almost instantaneous.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Is the converted text saved or stored anywhere?
            </h3>
            <p className="text-gray-700">No.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              How often is the converter updated to include new words or
              phrases?
            </h3>
            <p className="text-gray-700">
              When ever someone reaches out and asks!
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Is there a character or word limit for the text that can be
              converted?
            </h3>
            <p className="text-gray-700">
              No, there is no character or word limit for the text that can be
              converted. You can enter as much text as needed and the tool will
              process it all. The conversion is done on our servers, so the
              length of the text is not constrained by your device's
              capabilities. Feel free to input anything from short phrases to
              entire documents or articles. The tool is designed to handle text
              of any size while maintaining accuracy and formatting in the
              conversion process.
            </p>
          </div>
        </div>
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
