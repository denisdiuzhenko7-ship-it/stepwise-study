// Add lessons for any school subject here. Keep each lesson's id stable so saved progress stays linked to it.
window.LESSONS = [
  {
    id: 'present-simple',
    subjectId: 'english',
    subject: 'Angličtina',
    title: 'Present Simple',
    subtitle: 'Návyky, fakta a rozvrhy',
    level: 'A1',
    minutes: 10,
    goal: 'Naučíš se mluvit o pravidelných činnostech a jednoduchých faktech.',
    ruleIntro: 'Present Simple používáme, když mluvíme o tom, co se pravidelně opakuje, co platí obecně nebo co je fakt.',
    rules: [
      {label: 'Oznamovací věta', pattern: 'I / you / we / they + sloveso', detail: 'I study English. — Učím se anglicky.'},
      {label: 'He / she / it', pattern: 'sloveso + s / es', detail: 'She works. · He watches TV. · Anna studies. U he / she / it přidáme -s nebo -es.'},
      {label: 'Zápor', pattern: "don't / doesn't + sloveso", detail: "I don't drive. · He doesn't drive. Po doesn't následuje sloveso bez koncovky -s."},
      {label: 'Otázka', pattern: 'Do / Does + podmět + sloveso?', detail: 'Do you live here? · Does she live here? Hlavní sloveso je v otázce bez -s.'}
    ],
    examples: [
      {content: 'I walk to school every day.', result: 'Každý den chodím do školy pěšky.', note: 'pravidelná činnost'},
      {content: 'Marek works in Prague.', result: 'Marek pracuje v Praze.', note: 'he / she / it → works'},
      {content: "We don't eat meat.", result: 'Nejíme maso.', note: "don't + základní tvar"},
      {content: 'Does your sister speak English?', result: 'Mluví tvoje sestra anglicky?', note: 'Does + she + speak'},
      {content: 'Water boils at 100°C.', result: 'Voda vře při 100 °C.', note: 'obecně platný fakt'}
    ],
    vocabulary: [
      {term: 'always', explanation: 'vždy'}, {term: 'usually', explanation: 'obvykle'}, {term: 'often', explanation: 'často'}, {term: 'sometimes', explanation: 'někdy'}, {term: 'never', explanation: 'nikdy'}
    ],
    quiz: [
      {question: 'He ___ football every weekend.', options: ['play', 'plays', 'playing'], answer: 1, explain: 'U he přidáme ke slovesu -s: he plays.'},
      {question: 'I ___ coffee.', options: ["doesn't like", "don't like", 'not like'], answer: 1, explain: "S I použijeme don't a základní tvar slovesa."},
      {question: '___ she work here?', options: ['Do', 'Does', 'Is'], answer: 1, explain: 'V otázce se she použijeme Does. Hlavní sloveso zůstává work.'},
      {question: 'We ___ English on Mondays.', options: ['study', 'studies', 'studying'], answer: 0, explain: 'S we použijeme základní tvar: we study.'},
      {question: 'Co znamená usually?', options: ['nikdy', 'někdy', 'obvykle'], answer: 2, explain: 'Usually znamená „obvykle“. Často stojí před hlavním slovesem.'}
    ]
  },
  {
    id: 'stm-rozdeleni-vlastnosti', subjectId: 'construction', subject: 'Stavební materiály',
    sourceFolder: '20261A / STM / Výukové materiály', collection: 'Rozdělení vlastností',
    title: 'Jak se dělí vlastnosti stavebních látek', subtitle: 'Přehled kategorií a příkladů', level: '1. ročník', minutes: 10,
    goal: 'Rozpoznáš hlavní skupiny vlastností materiálů a přiřadíš k nim příklady ze stavebnictví.',
    ruleIntro: 'Vlastnost látky je kvalitativní nebo kvantitativní znak, který popisuje, jak se materiál projevuje a jak reaguje na své okolí. Jedna stavební látka má obvykle mnoho vlastností; některé změříme, jiné určujeme zkušeností nebo odborným odhadem.',
    rules: [
      {label:'Vzhledové a rozměrové',pattern:'tvar · barva · povrch · délka · plocha · objem',detail:'Popisují, jak materiál vypadá a jaké má rozměry. Rozměry se posuzují také s ohledem na povolené tolerance.'},
      {label:'Hmotnostní',pattern:'hmotnost · hustota · pórovitost · mezerovitost',detail:'Patří sem měrná, objemová a sypná hmotnost i vlastnosti odvozené od pórů a mezer.'},
      {label:'Mechanické a technologické',pattern:'pevnost · tvrdost · pružnost · opracovatelnost',detail:'Mechanické vlastnosti popisují chování při zatížení; technologické říkají, jak se materiál zpracovává nebo spojuje.'},
      {label:'Prostředí a bezpečnost',pattern:'teplo · voda · zvuk · chemikálie · oheň',detail:'Další skupiny zahrnují tepelné, vlhkostní, akustické, chemické, biologické a bezpečnostní vlastnosti.'}
    ],
    examples: [
      {content:'Barva a hladkost omítky',result:'Vzhledové vlastnosti',note:'jak materiál vypadá'},
      {content:'Pevnost betonu v tlaku',result:'Mechanické vlastnosti',note:'chování při zatížení'},
      {content:'Tepelná vodivost izolace',result:'Tepelnětechnické vlastnosti',note:'přenos tepla'},
      {content:'Nasákavost cihly',result:'Vlastnosti při působení vody',note:'vliv vlhkosti'},
      {content:'Možnost řezání nebo broušení',result:'Technologické vlastnosti',note:'zpracovatelnost'}
    ],
    vocabulary: [
      {term:'vlastnost',explanation:'znak popisující materiál nebo jeho chování'},
      {term:'měřitelná vlastnost',explanation:'lze ji určit měřením, například hmotnost'},
      {term:'mechanická vlastnost',explanation:'popisuje reakci na sílu nebo jiné zatížení'},
      {term:'technologická vlastnost',explanation:'popisuje možnosti zpracování a spojování'}
    ],
    quiz: [
      {question:'Do které skupiny patří pórovitost?',options:['Hmotnostní','Vzhledové','Akustické'],answer:0,explain:'Pórovitost vyjadřuje podíl pórů v materiálu, proto se řadí mezi hmotnostní vlastnosti.'},
      {question:'Pevnost betonu v tlaku je vlastnost…',options:['mechanická','vzhledová','biologická'],answer:0,explain:'Pevnost popisuje chování materiálu při mechanickém zatížení.'},
      {question:'Nasákavost popisuje hlavně…',options:['působení vody na materiál','barvu materiálu','jeho délku'],answer:0,explain:'Nasákavost patří mezi vlastnosti související s vlhkostí a vodou.'},
      {question:'Který příklad je technologická vlastnost?',options:['Možnost materiál řezat a brousit','Objemová hmotnost','Odstín povrchu'],answer:0,explain:'Technologické vlastnosti říkají, jak lze materiál opracovat, spojit nebo jinak zpracovat.'}
    ]
  },
  {
    id: 'stm-objemova-merna-hmotnost', subjectId: 'construction', subject: 'Stavební materiály',
    sourceFolder: '20261A / STM / Výukové materiály', collection: 'Hmotnostní vlastnosti',
    title: 'Objemová a měrná hmotnost', subtitle: 'Základní veličiny, jednotky a výpočty', level: '1. ročník', minutes: 12,
    goal: 'Použiješ vzorec pro objemovou hmotnost, upravíš ho pro výpočet hmotnosti nebo objemu a vysvětlíš vliv pórů.',
    ruleIntro: 'Hmotnostní vlastnosti pomáhají porovnávat stavební materiály a počítat jejich hmotnost. V zápisu z výuky je objemová hmotnost označena ρᵥ. Její objem zahrnuje i póry uvnitř vzorku, ale nezahrnuje mezery mezi volně nasypanými zrny.',
    rules: [
      {label:'Objemová hmotnost',pattern:'ρᵥ = m / V',detail:'m je hmotnost vzorku a V jeho celkový objem včetně vnitřních pórů. Jednotka je kg/m³.'},
      {label:'Výpočet hmotnosti',pattern:'m = ρᵥ · V',detail:'Vynásob objemovou hmotnost objemem materiálu. Výsledek hmotnosti vyjde v kilogramech.'},
      {label:'Výpočet objemu',pattern:'V = m / ρᵥ',detail:'Hmotnost vyděl objemovou hmotností. Před dosazením zkontroluj jednotky.'},
      {label:'Měrná hmotnost',pattern:'ρ = hmotnost / objem pevné látky',detail:'Popisuje samotnou pevnou fázi bez objemu jejích pórů. Proto bývá u pórovitého materiálu vyšší než objemová hmotnost.'}
    ],
    examples: [
      {content:'m = 12 kg, V = 0,008 m³',result:'ρᵥ = 1 500 kg/m³',note:'12 ÷ 0,008'},
      {content:'ρᵥ = 500 kg/m³, V = 0,12 m³',result:'m = 60 kg',note:'500 × 0,12'},
      {content:'m = 90 kg, ρᵥ = 1 800 kg/m³',result:'V = 0,05 m³',note:'90 ÷ 1 800'},
      {content:'Vzorek se suší do ustálené hmotnosti',result:'Měří se suchá hmotnost',note:'podle školního zápisu'}
    ],
    vocabulary: [
      {term:'m',explanation:'hmotnost vzorku, běžně v kg'},
      {term:'V',explanation:'objem, v tomto vzorci v m³'},
      {term:'ρᵥ',explanation:'objemová hmotnost v kg/m³'},
      {term:'pór',explanation:'dutina uvnitř kusu materiálu'}
    ],
    quiz: [
      {question:'Jaký vzorec použiješ pro objemovou hmotnost?',options:['ρᵥ = m / V','ρᵥ = V / m','ρᵥ = m · V'],answer:0,explain:'Objemovou hmotnost vypočítáme jako hmotnost dělenou objemem.'},
      {question:'Vzorek má m = 20 kg a V = 0,01 m³. Jaká je ρᵥ?',options:['200 kg/m³','2 000 kg/m³','20 000 kg/m³'],answer:1,explain:'ρᵥ = 20 ÷ 0,01 = 2 000 kg/m³.'},
      {question:'Co zahrnuje objem V u objemové hmotnosti?',options:['Materiál i jeho vnitřní póry','Pouze samotnou pevnou látku','Mezery mezi různými kusy ve skládce'],answer:0,explain:'Objemový vzorek zahrnuje jeho vnitřní póry, ale ne mezery mezi volně nasypanými zrny.'},
      {question:'Jak vypočítáš hmotnost z objemové hmotnosti a objemu?',options:['m = ρᵥ · V','m = V / ρᵥ','m = ρᵥ / V'],answer:0,explain:'Upravíme ρᵥ = m/V: hmotnost získáme jako součin ρᵥ a V.'}
    ]
  },
  {
    id: 'stm-sypna-hmotnost', subjectId: 'construction', subject: 'Stavební materiály',
    sourceFolder: '20261A / STM / Výukové materiály', collection: 'Hmotnostní vlastnosti',
    title: 'Sypná hmotnost', subtitle: 'Volně sypaný a zhutněný materiál', level: '1. ročník', minutes: 10,
    goal: 'Rozlišíš sypnou a objemovou hmotnost a vysvětlíš, proč se sypná hmotnost mění podle zhutnění.',
    ruleIntro: 'Sypná hmotnost ρₛ se používá u zrnitého materiálu, který vyplňuje nádobu nebo určitý prostor. Do jeho celkového objemu se počítá materiál i mezery mezi zrny. Proto výsledek závisí na tom, jak byl materiál nasypán a zhutněn.',
    rules: [
      {label:'Sypná hmotnost',pattern:'ρₛ = m / V',detail:'m je hmotnost suchého sypkého materiálu a V objem nádoby vyplněné materiálem včetně mezer mezi zrny.'},
      {label:'Volně sypaný stav',pattern:'zrní se jen nasype',detail:'V mezerách mezi zrny zůstává více volného prostoru, takže stejná hmotnost může zabrat větší objem.'},
      {label:'Zhutněný stav',pattern:'zrní se setřese nebo zhutní',detail:'Část mezer se zmenší. Ve stejném objemu je více materiálu, a proto sypná hmotnost obvykle vzroste.'},
      {label:'Není to stálá hodnota',pattern:'záleží na úpravě a zrnitosti',detail:'U konkrétního sypkého materiálu se proto mohou uvádět hodnoty pro volně sypaný i zhutněný stav.'}
    ],
    examples: [
      {content:'8 kg kameniva zabírá v nádobě 0,01 m³',result:'ρₛ = 800 kg/m³',note:'8 ÷ 0,01'},
      {content:'Stejné zrno po setřesení',result:'Zabere menší objem',note:'mezery se zmenší'},
      {content:'Sypný materiál v pytli',result:'Započítej mezery mezi zrny',note:'celý objem výplně'},
      {content:'Hodnoty v tabulce',result:'Zkontroluj stav materiálu',note:'volný či zhutněný'}
    ],
    vocabulary: [
      {term:'sypná hmotnost',explanation:'hmotnost sypkého materiálu dělená objemem včetně mezer'},
      {term:'zrnitost',explanation:'velikostní složení zrn materiálu'},
      {term:'zhutnění',explanation:'uspořádání částic tak, aby zabíraly méně prostoru'},
      {term:'kamenivo',explanation:'zrnitý materiál používaný například do betonu'}
    ],
    quiz: [
      {question:'Co se zahrnuje do objemu při měření sypné hmotnosti?',options:['I mezery mezi zrny','Jen pevná látka bez mezer','Pouze objem jedné částice'],answer:0,explain:'Sypná hmotnost používá objem celé sypké výplně v nádobě včetně prostoru mezi zrny.'},
      {question:'Co se obvykle stane se sypnou hmotností po zhutnění?',options:['Zvýší se','Vždy klesne na nulu','Zůstane vždy stejná'],answer:0,explain:'Po zhutnění se zmenší mezery a do stejného objemu se vejde více hmoty.'},
      {question:'ρₛ = 600 kg/m³ a objem výplně je 0,2 m³. Jaká je hmotnost?',options:['120 kg','3 000 kg','0,003 kg'],answer:0,explain:'m = ρₛ · V = 600 × 0,2 = 120 kg.'},
      {question:'Proč mohou být u jednoho sypkého materiálu dvě tabulkové hodnoty?',options:['Jedna pro volný a druhá pro zhutněný stav','Protože kg/m³ má dvě různé definice','Protože hmotnost se mění podle barvy'],answer:0,explain:'Nasypání a zhutnění mění objem mezer, a tím i sypnou hmotnost.'}
    ]
  },
  {
    id: 'stm-porovitost-mezerovitost', subjectId: 'construction', subject: 'Stavební materiály',
    sourceFolder: '20261A / STM / Výukové materiály', collection: 'Hmotnostní vlastnosti',
    title: 'Pórovitost, hutnost a mezerovitost', subtitle: 'Dutiny uvnitř materiálu a mezery mezi zrny', level: '1. ročník', minutes: 12,
    goal: 'Rozlišíš póry v kusu materiálu od mezer mezi zrny a vypočítáš jejich objemový podíl.',
    ruleIntro: 'Pór je dutina uvnitř materiálu. Mezera je volný prostor mezi zrny sypkého materiálu. Tyto prostory nejsou totéž: například kámen může být pórovitý a zároveň může být nasypán tak, že kolem něj zůstávají mezery.',
    rules: [
      {label:'Pórovitost P',pattern:'P = Vₚ / V · 100 %',detail:'Vₚ je objem pórů a V celkový objem kusu materiálu. Póry mohou být otevřené nebo uzavřené.'},
      {label:'Hutnost h',pattern:'h = Vₕ / V',detail:'Vyjadřuje podíl pevné fáze v celkovém objemu. U suchého materiálu bez dalších složek platí přibližně h = 1 − P.'},
      {label:'Mezerovitost M',pattern:'M = Vₘ / V · 100 %',detail:'Vₘ je objem mezer mezi zrny a V objem celé sypké výplně, včetně zrn i mezer.'},
      {label:'Vliv na materiál',pattern:'póry a mezery mění chování',detail:'Pórovitost souvisí například s hmotností, pevností a působením vody či mrazu; mezery v sypkém materiálu závisejí na jeho zrnitosti a zhutnění.'}
    ],
    examples: [
      {content:'Póry mají 0,2 m³ z celkových 1 m³',result:'P = 20 %',note:'0,2 ÷ 1 × 100'},
      {content:'P = 25 % u suchého vzorku',result:'h ≈ 0,75 = 75 %',note:'1 − 0,25'},
      {content:'Mezery mezi zrny jsou 0,3 m³ z 1 m³',result:'M = 30 %',note:'0,3 ÷ 1 × 100'},
      {content:'Zrnitý vzorek se setřese',result:'Mezerovitost obvykle klesne',note:'zrna se přiblíží'}
    ],
    vocabulary: [
      {term:'pór',explanation:'dutina uvnitř jednoho kusu látky'},
      {term:'otevřený pór',explanation:'pór spojený s povrchem materiálu'},
      {term:'uzavřený pór',explanation:'pór, který není spojen s povrchem'},
      {term:'mezera',explanation:'volný prostor mezi jednotlivými zrny'}
    ],
    quiz: [
      {question:'Co popisuje pórovitost?',options:['Podíl dutin uvnitř materiálu','Podíl mezer mezi volně nasypanými zrny','Barvu povrchu'],answer:0,explain:'Póry se nacházejí uvnitř materiálu; jejich podíl vyjadřuje pórovitost.'},
      {question:'Co popisuje mezerovitost?',options:['Volný prostor mezi zrny sypkého materiálu','Dutiny uvnitř každého zrna','Hmotnost jednoho zrna'],answer:0,explain:'Mezerovitost se týká prostoru mezi zrny v celé sypké výplni.'},
      {question:'Póry mají 0,15 m³ z celkového 0,6 m³. Jaká je pórovitost?',options:['25 %','40 %','90 %'],answer:0,explain:'P = 0,15 ÷ 0,6 × 100 = 25 %.'},
      {question:'Který vztah přibližně platí pro hutnost a pórovitost suchého materiálu?',options:['h = 1 − P','h = P + 100','h = P²'],answer:0,explain:'Hutnost vyjadřuje pevnou fázi, pórovitost póry; jejich podíly se doplňují do celku.'}
    ]
  },
  {
    id: 'stm-struktura-krystalicke-amorfni', subjectId: 'construction', subject: 'Stavební materiály',
    sourceFolder: '20261A / STM / Výukové materiály', collection: 'Struktura pevných látek',
    title: 'Krystalické, amorfní a koloidní látky', subtitle: 'Jak jsou částice uspořádány', level: '1. ročník', minutes: 12,
    goal: 'Vysvětlíš rozdíl mezi pravidelnou krystalickou strukturou, amorfní látkou a koloidní soustavou.',
    ruleIntro: 'Vlastnosti pevné látky souvisejí s tím, jak jsou uspořádány její částice. Krystalické látky mají pravidelnou strukturu; amorfní ji nemají. Koloidní soustavy tvoří velmi drobné částice rozptýlené v jiné látce.',
    rules: [
      {label:'Krystalická látka',pattern:'pravidelná krystalová mřížka',detail:'Atomy, ionty nebo molekuly se v prostoru pravidelně opakují. Krystaly mají uspořádaný tvar a mohou se dělit podle souměrnosti do sedmi krystalografických soustav.'},
      {label:'Typy krystalové mřížky',pattern:'iontová · atomová · molekulová · kovová',detail:'Typ závisí na částicích a vazbách. Například NaCl má iontovou mřížku; kovy mají kovovou mřížku.'},
      {label:'Amorfní látka',pattern:'bez pravidelné prostorové mřížky',detail:'Částice nejsou dlouhodobě pravidelně uspořádané. Příklady z materiálu: sklo a pryskyřice.'},
      {label:'Koloidní soustava',pattern:'velmi malé rozptýlené částice',detail:'Částice jsou rozptýlené v jiné fázi. Chování souvisí s jejich velikostí a s prostředím v pórech a mezerách.'}
    ],
    examples: [
      {content:'Krystal soli NaCl',result:'Krystalická látka s iontovou mřížkou',note:'částice jsou pravidelné'},
      {content:'Sklo',result:'Amorfní látka',note:'bez pravidelné mřížky'},
      {content:'Cementový tmel',result:'Příklad koloidní soustavy',note:'podle školního materiálu'},
      {content:'Kovový materiál',result:'Kovová krystalová mřížka',note:'kovová vazba'}
    ],
    vocabulary: [
      {term:'krystalová mřížka',explanation:'pravidelné prostorové uspořádání částic'},
      {term:'elementární buňka',explanation:'základní prostorový útvar, jehož opakováním vzniká mřížka'},
      {term:'amorfní',explanation:'bez pravidelného uspořádání částic v mřížce'},
      {term:'koloid',explanation:'soustava s velmi drobnými rozptýlenými částicemi'}
    ],
    quiz: [
      {question:'Jak jsou uspořádány částice v krystalické látce?',options:['Pravidelně v krystalové mřížce','Bez jakéhokoli uspořádání v prostoru','Pouze v rovnoběžných řadách na povrchu'],answer:0,explain:'Krystalickou látku charakterizuje pravidelné uspořádání částic v mřížce.'},
      {question:'Který příklad je ve školním materiálu uveden jako amorfní?',options:['Sklo','Kuchyňská sůl','Ocel'],answer:0,explain:'Sklo je uvedeno jako příklad amorfní látky bez pravidelné mřížky.'},
      {question:'NaCl je v materiálu uveden jako příklad látky s…',options:['iontovou krystalovou mřížkou','amorfní strukturou','volně nasypanou strukturou'],answer:0,explain:'NaCl je tvořen ionty, a proto je příkladem iontové mřížky.'},
      {question:'Co nejlépe vystihuje koloidní soustavu?',options:['Velmi drobné částice rozptýlené v jiné fázi','Velký kus homogenního kovu','Pravidelný tvar krystalu'],answer:0,explain:'Koloidní soustava obsahuje velmi drobné částice rozptýlené v jiné látce.'}
    ]
  },
  {
    id: 'stm-smesi-vyztuzene-multifazove', subjectId: 'construction', subject: 'Stavební materiály',
    sourceFolder: '20261A / STM / Výukové materiály', collection: 'Struktura pevných látek',
    title: 'Pevné směsi, výztuž a vícefázové látky', subtitle: 'Složení stavebních materiálů', level: '1. ročník', minutes: 12,
    goal: 'Rozeznáš homogenní a heterogenní směs, vysvětlíš úlohu výztuže a popíšeš pórovité i sypké látky.',
    ruleIntro: 'Mnohé stavební materiály se skládají z několika pevných nebo různých fází. Jejich výsledné vlastnosti závisí na vlastnostech složek, jejich poměru, uspořádání a na tom, jak dobře jsou spolu spojeny.',
    rules: [
      {label:'Homogenní a heterogenní směs',pattern:'rovnoměrná × oddělené oblasti',detail:'Je-li jedna složka rovnoměrně rozptýlená, směs je homogenní. Jsou-li složky soustředěné v oddělitelných oblastech, je heterogenní.'},
      {label:'Pojivo a plnivo',pattern:'pojivo spojuje · plnivo tvoří kostru',detail:'U hmot spojených pojivem zajišťuje pojivo soudržnost a plnivo vytváří základní strukturu.'},
      {label:'Vyztužená látka',pattern:'nosná výztuž + spojovací složka',detail:'Výztuž vytváří nosný systém; druhá složka zajišťuje soudržnost a pomáhá přenášet vnitřní síly. Příkladem je železobeton.'},
      {label:'Vícefázové látky',pattern:'pórovité · sypké · s výplní pórů',detail:'Pórovitá látka má pevnou kostru s dutinami, sypká látka se skládá ze zrn a její odpor proti posunu souvisí s vnitřním třením.'}
    ],
    examples: [
      {content:'Železobeton',result:'Vyztužená látka',note:'beton a výztuž'},
      {content:'Zrnitý materiál v násypu',result:'Sypká látka',note:'částice se mohou posouvat'},
      {content:'Kostra materiálu s dutinami',result:'Pórovitá látka',note:'póry vyplňuje plyn či kapalina'},
      {content:'Rovnoměrně rozptýlené složky',result:'Homogenní směs',note:'stejnoměrné složení'}
    ],
    vocabulary: [
      {term:'homogenní',explanation:'složky jsou rovnoměrně rozptýlené'},
      {term:'heterogenní',explanation:'složky jsou soustředěné v oddělitelných oblastech'},
      {term:'pojivo',explanation:'složka, která spojuje zrna nebo části materiálu'},
      {term:'výztuž',explanation:'nosná složka vyztuženého materiálu'}
    ],
    quiz: [
      {question:'Která složka hmoty spojené pojivem vytváří její základní kostru?',options:['Plnivo','Pojivo','Pór'],answer:0,explain:'Podle školního materiálu pojivo zajišťuje soudržnost a plnivo tvoří základní strukturu.'},
      {question:'Železobeton je příklad…',options:['vyztužené látky','amorfní látky','sypké látky'],answer:0,explain:'Beton s výztuží je vyztužená látka: výztuž tvoří nosný systém.'},
      {question:'Kdy je pevná směs heterogenní?',options:['Když jsou složky soustředěny do oddělitelných oblastí','Když jsou částice vždy stejně velké','Když neobsahuje žádné póry'],answer:0,explain:'Heterogenní směs má složky v oblastech, které lze mechanicky oddělit.'},
      {question:'Co pomáhá sypkému materiálu odolávat vzájemnému posunu zrn?',options:['Vnitřní tření','Barva zrn','Uzavřené póry v každém zrnu'],answer:0,explain:'Materiál popisuje odpor proti posunu zrn jako vnitřní tření.'}
    ]
  }
];
