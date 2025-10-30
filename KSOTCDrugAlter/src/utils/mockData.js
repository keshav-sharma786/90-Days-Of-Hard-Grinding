const medList = [
  {
    name: "Crocin",
    generic: "Paracetamol (Acetaminophen)",
    disease_tags: ["fever", "pain", "headache", "toothache"],
    price_in_inr: "₹20 (10 tablets)",
    description:
      "Paracetamol is an analgesic and antipyretic used to reduce fever and relieve mild to moderate pain.",
    alternatives: ["Dolo 650", "Calpol", "Generic Paracetamol"],
    advantages: [
      "Well tolerated",
      "Suitable for most ages (dose dependent)",
      "Available OTC",
    ],
    disadvantages: [
      "Overdose can cause severe liver damage",
      "May be ineffective for severe pain",
    ],
    blog: "Paracetamol (marketed as Crocin, Dolo etc.) is the go-to medicine for fever and everyday pain. It's gentle on the stomach compared to NSAIDs but must be used within recommended doses to avoid liver problems.",
    youtube:
      "https://www.youtube.com/results?search_query=paracetamol+how+to+use",
  },
  {
    name: "Dolo 650",
    generic: "Paracetamol 650 mg",
    disease_tags: ["fever", "pain", "headache"],
    price_in_inr: "₹35 (10 tablets)",
    description:
      "Contains 650 mg paracetamol per tablet; for stronger pain or higher fevers.",
    alternatives: ["Crocin 500", "Calpol 650", "Generic Paracetamol 650mg"],
    advantages: ["Effective for stronger pain/fever", "OTC availability"],
    disadvantages: ["Higher dose increases liver risk if misused"],
    blog: "Dolo 650 is widely used for significant pain or fever spikes. Do not combine with other paracetamol-containing medicines.",
    youtube: "https://www.youtube.com/results?search_query=dolo+650+how+to+use",
  },
  {
    name: "Brufen",
    generic: "Ibuprofen",
    disease_tags: ["pain", "inflammation", "fever", "menstrual pain"],
    price_in_inr: "₹40 (10 tablets)",
    description:
      "A nonsteroidal anti-inflammatory drug (NSAID) for pain, inflammation and fever.",
    alternatives: ["Advil", "Generic Ibuprofen"],
    advantages: ["Good for inflammatory pain", "Available OTC in low doses"],
    disadvantages: [
      "May irritate stomach",
      "Not recommended for some with heart or kidney issues",
    ],
    blog: "Ibuprofen helps where inflammation is a major cause of pain (sprains, dental pain). Take with food to reduce stomach upset.",
    youtube:
      "https://www.youtube.com/results?search_query=ibuprofen+how+to+use",
  },
  {
    name: "Disprin",
    generic: "Aspirin (Acetylsalicylic acid)",
    disease_tags: ["pain", "fever", "cardiac prophylaxis (under doctor)"],
    price_in_inr: "₹25 (10 tablets)",
    description:
      "NSAID used for mild pain/fever; low doses can be used for cardio protection under medical advice.",
    alternatives: ["Easprin", "Generic Aspirin"],
    advantages: ["Analgesic and antipyretic", "Established history of use"],
    disadvantages: [
      "Can cause gastric irritation/bleeding",
      "Not for children with viral illness (Reye's syndrome risk)",
    ],
    blog: "Aspirin is a classic analgesic and has cardioprotective uses in low doses under supervision. Use cautiously and avoid in children with fever due to virus.",
    youtube: "https://www.youtube.com/results?search_query=aspirin+how+to+use",
  },
  {
    name: "Cetirizine",
    generic: "Cetirizine",
    disease_tags: ["allergy", "hay fever", "urticaria", "sneezing"],
    price_in_inr: "₹60 (10 tablets)",
    description:
      "A second-generation antihistamine used to relieve allergic symptoms with relatively low sedation.",
    alternatives: ["Zyrtec", "Loratadine", "Levocetirizine"],
    advantages: ["Effective for allergies", "Generally well tolerated"],
    disadvantages: [
      "May cause drowsiness in some",
      "Long-term use should be supervised if needed",
    ],
    blog: "Cetirizine balances efficacy and tolerability for many users with seasonal or chronic allergies.",
    youtube:
      "https://www.youtube.com/results?search_query=cetirizine+how+to+use",
  },
  {
    name: "Loratadine",
    generic: "Loratadine",
    disease_tags: ["allergy", "hay fever", "urticaria"],
    price_in_inr: "₹70 (10 tablets)",
    description:
      "A non-drowsy antihistamine effective for allergic rhinitis and hives.",
    alternatives: ["Claritin", "Cetirizine"],
    advantages: ["Minimal sedation", "Once-daily dosing"],
    disadvantages: [
      "May be less potent for some compared to cetirizine",
      "Not for acute severe allergic reactions",
    ],
    blog: "Loratadine is preferred by people needing daytime allergy relief without sleepiness.",
    youtube:
      "https://www.youtube.com/results?search_query=loratadine+how+to+use",
  },
  {
    name: "Levocetirizine",
    generic: "Levocetirizine",
    disease_tags: ["allergy", "chronic urticaria"],
    price_in_inr: "₹90 (10 tablets)",
    description:
      "An active enantiomer of cetirizine with potent antihistamine effects.",
    alternatives: ["Cetirizine", "Loratadine"],
    advantages: ["Effective for persistent hives", "Reliable symptom control"],
    disadvantages: [
      "May cause drowsiness",
      "Often costlier than generic cetirizine",
    ],
    blog: "Levocetirizine is chosen when stronger or longer-lasting allergy control is needed.",
    youtube:
      "https://www.youtube.com/results?search_query=levocetirizine+how+to+use",
  },
  {
    name: "Benadryl (Syrup)",
    generic: "Diphenhydramine",
    disease_tags: [
      "allergy",
      "cough (antitussive in some formulations)",
      "itching",
    ],
    price_in_inr: "₹95 (100 ml)",
    description:
      "A first-generation antihistamine used for allergy symptoms and sometimes in cough formulations; causes sedation.",
    alternatives: [
      "Dextromethorphan (for dry cough)",
      "Cetirizine (for allergy)",
    ],
    advantages: [
      "Effective antihistamine",
      "Useful short-term at night for allergic symptoms",
    ],
    disadvantages: [
      "Marked drowsiness",
      "Not ideal for children for sedative effects",
    ],
    blog: "Benadryl helps with allergic coughs and itching but causes sedation — best for night use or short-term relief.",
    youtube: "https://www.youtube.com/results?search_query=benadryl+how+to+use",
  },
  {
    name: "Dextromethorphan Syrup (DM)",
    generic: "Dextromethorphan hydrobromide",
    disease_tags: ["dry cough", "cough suppression"],
    price_in_inr: "₹120 (100 ml)",
    description:
      "A non-narcotic antitussive used to suppress dry, non-productive cough.",
    alternatives: [
      "Codeine-containing syrups (prescription in many regions)",
      "Honey (home remedy)",
    ],
    advantages: ["Effective for dry cough", "Non-narcotic at OTC doses"],
    disadvantages: [
      "Not for productive cough with phlegm",
      "Can interact with some antidepressants",
    ],
    blog: "DM is used for sleep-disrupting dry coughs; avoid mixing with MAOI or SSRIs without checking interactions.",
    youtube:
      "https://www.youtube.com/results?search_query=dextromethorphan+how+to+use",
  },
  {
    name: "Ambroxol (Mucolite)",
    generic: "Ambroxol",
    disease_tags: ["productive cough", "mucus clearance"],
    price_in_inr: "₹110 (100 ml)",
    description:
      "A mucolytic that thins mucus, making coughs more productive and easier to clear.",
    alternatives: ["Bromhexine", "Guaifenesin"],
    advantages: [
      "Helps clear phlegm",
      "Reduces cough frequency when mucus is present",
    ],
    disadvantages: [
      "Not useful for dry cough",
      "Possible gastric upset in some",
    ],
    blog: "Ambroxol aids expectoration and is helpful when mucus accumulation is the main problem.",
    youtube: "https://www.youtube.com/results?search_query=ambroxol+how+to+use",
  },
  {
    name: "Guaifenesin (Expectorant)",
    generic: "Guaifenesin",
    disease_tags: ["productive cough", "chest congestion"],
    price_in_inr: "₹250 (brand dependent)",
    description:
      "An expectorant that loosens and thins mucus to help clear chest congestion.",
    alternatives: ["Ambroxol", "Bromhexine"],
    advantages: ["Non-prescription expectorant", "Can ease chest congestion"],
    disadvantages: ["May cause nausea", "Effectiveness varies by patient"],
    blog: "Guaifenesin can help make coughs more productive when combined with good hydration.",
    youtube:
      "https://www.youtube.com/results?search_query=guaifenesin+how+to+use",
  },
  {
    name: "Strepsils",
    generic: "Amylmetacresol + Dichlorobenzyl alcohol (lozenge)",
    disease_tags: ["sore throat", "throat irritation"],
    price_in_inr: "₹50 (pack)",
    description:
      "Lozenges that soothe throat irritation and provide symptomatic relief from sore throat.",
    alternatives: ["Halls", "Local antiseptic lozenges"],
    advantages: ["Portable and convenient", "Provides local soothing effect"],
    disadvantages: ["Temporary relief only", "Not a cure for infection"],
    blog: "Lozenges help comfort the throat; persistent sore throat requires medical review.",
    youtube:
      "https://www.youtube.com/results?search_query=strepsils+how+to+use",
  },
  {
    name: "Digene",
    generic: "Antacid (Mg hydroxide + Al hydroxide + Simethicone)",
    disease_tags: ["acidity", "indigestion", "bloating"],
    price_in_inr: "₹80 (100 ml)",
    description:
      "Neutralizes stomach acid and relieves heartburn, dyspepsia and gas.",
    alternatives: ["ENO", "Gelusil"],
    advantages: ["Fast symptom relief", "OTC availability"],
    disadvantages: [
      "Not a long-term GERD solution",
      "May affect absorption of some drugs",
    ],
    blog: "Antacids like Digene give quick relief for heartburn; lifestyle changes are needed for chronic issues.",
    youtube: "https://www.youtube.com/results?search_query=digene+how+to+use",
  },
  {
    name: "ENO",
    generic: "Effervescent antacid (NaHCO3 + acids)",
    disease_tags: ["acidity", "indigestion"],
    price_in_inr: "₹40 (pack)",
    description:
      "Effervescent antacid providing quick relief from heartburn and gas.",
    alternatives: ["Digene", "Gelusil"],
    advantages: ["Very rapid relief", "Portable sachets"],
    disadvantages: ["Short duration", "Not for chronic reflux management"],
    blog: "ENO is a quick fix for sudden heartburn; frequent usage should prompt medical review.",
    youtube: "https://www.youtube.com/results?search_query=eno+how+to+use",
  },
  {
    name: "Gelusil",
    generic: "Aluminium hydroxide + Magnesium hydroxide + Simethicone",
    disease_tags: ["acidity", "gas", "bloating"],
    price_in_inr: "₹70 (100 ml)",
    description:
      "Combines antacid action with anti-foaming agent to relieve gas and heartburn.",
    alternatives: ["Digene", "ENO"],
    advantages: ["Relieves bloating and gas", "Fast acting"],
    disadvantages: ["Short-term relief only", "Not for chronic GERD"],
    blog: "Gelusil helps with symptomatic relief of indigestion; pair with dietary adjustments for long-term control.",
    youtube: "https://www.youtube.com/results?search_query=gelusil+how+to+use",
  },
  {
    name: "Pudin Hara",
    generic: "Mint + caraway oil blend (herbal digestive)",
    disease_tags: ["indigestion", "gas"],
    price_in_inr: "₹60 (100 ml)",
    description:
      "Herbal digestive used for relief from gas and mild indigestion.",
    alternatives: ["Ajwain water", "Hajmola"],
    advantages: ["Pleasant taste", "Herbal origin"],
    disadvantages: [
      "Limited strong clinical evidence",
      "Less effective for severe conditions",
    ],
    blog: "Pudin Hara is a popular household remedy for mild digestive discomfort in India.",
    youtube:
      "https://www.youtube.com/results?search_query=pudin+hara+how+to+use",
  },
  {
    name: "ORS (Oral Rehydration Salts)",
    generic: "Glucose + Electrolytes (sodium, potassium, citrate)",
    disease_tags: ["diarrhea", "dehydration"],
    price_in_inr: "₹10 (sachet)",
    description:
      "Replaces fluids and electrolytes lost during diarrhea and vomiting; prevents dehydration.",
    alternatives: ["Home-made sugar-salt solution (only if ORS not available)"],
    advantages: ["Life-saving therapy for dehydration", "Simple to prepare"],
    disadvantages: [
      "Does not treat underlying infection",
      "Requires clean water",
    ],
    blog: "ORS is essential in diarrhea management especially for children; always keep sachets handy during travel.",
    youtube: "https://www.youtube.com/results?search_query=how+to+prepare+ors",
  },
  {
    name: "Imodium (Loperamide)",
    generic: "Loperamide",
    disease_tags: ["acute diarrhea", "traveler's diarrhea"],
    price_in_inr: "₹120 (10 tablets)",
    description:
      "Reduces gut motility to control acute non-bloody diarrhea symptoms.",
    alternatives: ["Racecadotril (regional)", "ORS for rehydration"],
    advantages: ["Quick symptom control", "OTC in many countries for adults"],
    disadvantages: [
      "Not for bloody diarrhea or suspected infection without advice",
      "Risk of misuse",
    ],
    blog: "Loperamide can be useful during travel-related diarrhea, but hydration and medical advice are vital for severe cases.",
    youtube:
      "https://www.youtube.com/results?search_query=loperamide+how+to+use",
  },
  {
    name: "Vicks VapoRub",
    generic: "Camphor + Menthol + Eucalyptus oil (topical)",
    disease_tags: ["nasal congestion", "cold symptoms", "mild muscle pain"],
    price_in_inr: "₹110 (50 g)",
    description:
      "Topical ointment applied to chest and throat to relieve congestion and mild aches by vapor inhalation and warmth.",
    alternatives: ["Tiger Balm", "Amrutanjan Balm"],
    advantages: ["Soothing vapor effect", "Topical use"],
    disadvantages: ["Avoid in infants", "May irritate sensitive skin"],
    blog: "Vicks provides symptomatic comfort for congestion but does not treat the underlying infection.",
    youtube:
      "https://www.youtube.com/results?search_query=vicks+vaporub+how+to+use",
  },
  {
    name: "Tiger Balm",
    generic: "Menthol + Camphor + Methyl salicylate",
    disease_tags: ["muscle pain", "headache (topical)"],
    price_in_inr: "₹150 (small jar)",
    description:
      "Herbal topical analgesic for muscular aches and some types of headaches when applied externally.",
    alternatives: ["Iodex", "Volini"],
    advantages: ["Fast topical relief", "Portable"],
    disadvantages: ["Strong smell", "Potential skin irritation"],
    blog: "Tiger Balm is often used for quick relief of muscle soreness and tension headaches via topical application.",
    youtube:
      "https://www.youtube.com/results?search_query=tiger+balm+how+to+use",
  },
  {
    name: "Iodex Pain Balm",
    generic: "Methyl salicylate + Menthol (topical balm)",
    disease_tags: ["muscle pain", "sprain", "joint pain"],
    price_in_inr: "₹120 (30 g)",
    description:
      "Topical analgesic balm used to relieve localized muscle and joint pain.",
    alternatives: ["Volini", "Voltaren gel (topical NSAID)"],
    advantages: ["Easy topical application", "Provides warming relief"],
    disadvantages: ["Not for open wounds", "May cause local irritation"],
    blog: "Iodex provides symptomatic relief for everyday muscle aches and sprains; consult a doctor for severe injuries.",
    youtube: "https://www.youtube.com/results?search_query=iodex+how+to+use",
  },
  {
    name: "Volini Pain Relief Gel",
    generic: "Herbal blends or diclofenac topical depending on variant",
    disease_tags: ["muscle pain", "sprain", "joint pain"],
    price_in_inr: "₹120 (30 g)",
    description:
      "Topical product for relieving localized musculoskeletal pain; formulations vary between herbal and NSAID-based.",
    alternatives: ["Voltaren gel", "Iodex"],
    advantages: [
      "Local application reduces systemic exposure",
      "Useful for strains",
    ],
    disadvantages: ["Not for deep wounds", "Possible local sensitivity"],
    blog: "Volini is a commonly used topical for sprains and strains; follow instructions and avoid open skin.",
    youtube: "https://www.youtube.com/results?search_query=volini+how+to+use",
  },
  {
    name: "Voltaren Emulgel",
    generic: "Diclofenac topical",
    disease_tags: ["muscle pain", "inflammation", "sprain"],
    price_in_inr: "₹220 (20 g)",
    description:
      "A topical NSAID gel that reduces inflammation and relieves localized pain.",
    alternatives: ["Topical diclofenac generics", "Iodex (non-NSAID)"],
    advantages: ["Targets inflammation locally", "Useful for sports injuries"],
    disadvantages: ["Not for broken skin", "Possible local skin sensitivity"],
    blog: "Topical diclofenac provides anti-inflammatory action locally and is good for short-term management of sprains.",
    youtube: "https://www.youtube.com/results?search_query=voltaren+how+to+use",
  },
  {
    name: "Neosporin (Triple Antibiotic Ointment)",
    generic: "Neomycin + Bacitracin + Polymyxin B (topical)",
    disease_tags: [
      "minor cuts",
      "scrapes",
      "prevention of minor wound infection",
    ],
    price_in_inr: "₹180 (tube)",
    description:
      "Topical triple antibiotic ointment to prevent infection in superficial wounds.",
    alternatives: ["Savlon antiseptic cream", "Betadine topical"],
    advantages: ["Prevents minor wound infection", "Convenient topical use"],
    disadvantages: [
      "Allergy risk (neomycin allergy)",
      "Not for deep or serious wounds",
    ],
    blog: "Triple antibiotic ointments reduce infection risk in minor wounds; seek medical care for severe injuries.",
    youtube:
      "https://www.youtube.com/results?search_query=neosporin+how+to+use",
  },
  {
    name: "Savlon Antiseptic",
    generic: "Chlorhexidine + Cetrimide (varies by formulation)",
    disease_tags: ["wound cleaning", "minor cuts", "antiseptic care"],
    price_in_inr: "₹90 (100 ml)",
    description:
      "Household antiseptic used to clean and prevent infection in minor wounds.",
    alternatives: [
      "Betadine (povidone-iodine)",
      "Hydrogen peroxide (limited use)",
    ],
    advantages: ["Effective antiseptic", "Widely available"],
    disadvantages: [
      "May irritate sensitive skin",
      "Not a substitute for surgical care",
    ],
    blog: "Savlon is commonly used for basic first aid antisepsis in the home.",
    youtube: "https://www.youtube.com/results?search_query=savlon+how+to+use",
  },
  {
    name: "Betadine (Povidone-Iodine)",
    generic: "Povidone-iodine",
    disease_tags: ["wound antisepsis", "minor infections"],
    price_in_inr: "₹120 (100 ml)",
    description:
      "A broad-spectrum topical antiseptic for disinfecting skin and wounds.",
    alternatives: ["Savlon", "Chlorhexidine solutions"],
    advantages: [
      "Strong antiseptic action",
      "Useful pre-procedure skin cleaning",
    ],
    disadvantages: [
      "Can stain skin and clothes",
      "Not for prolonged large area use",
    ],
    blog: "Betadine is effective for antisepsis; avoid overuse and consult for deep or infected wounds.",
    youtube: "https://www.youtube.com/results?search_query=betadine+how+to+use",
  },
  {
    name: "Clotrimazole Cream (Canesten)",
    generic: "Clotrimazole (topical antifungal)",
    disease_tags: ["athlete's foot", "ringworm", "vaginal thrush (topical)"],
    price_in_inr: "₹150 (cream)",
    description:
      "Topical antifungal used for many common superficial fungal infections.",
    alternatives: ["Miconazole cream", "Terbinafine topical"],
    advantages: [
      "Effective for superficial fungal infections",
      "OTC topical availability",
    ],
    disadvantages: ["Requires full course", "Possible local irritation"],
    blog: "Clotrimazole is a first-line topical treatment for many skin fungal infections; keep area dry and complete the course.",
    youtube:
      "https://www.youtube.com/results?search_query=clotrimazole+how+to+use",
  },
  {
    name: "Terbinafine (Topical)",
    generic: "Terbinafine topical",
    disease_tags: ["athlete's foot", "ringworm"],
    price_in_inr: "₹180 (cream)",
    description:
      "Topical allylamine antifungal effective against dermatophyte infections.",
    alternatives: ["Clotrimazole", "Miconazole"],
    advantages: [
      "Often shorter course than some azoles",
      "High cure rates for some infections",
    ],
    disadvantages: [
      "Local irritation possible",
      "Oral terbinafine is prescription with systemic risks",
    ],
    blog: "Topical terbinafine works well for fungal skin infections and often cures athlete's foot with consistent use.",
    youtube:
      "https://www.youtube.com/results?search_query=terbinafine+how+to+use",
  },
  {
    name: "Miconazole",
    generic: "Miconazole (topical / vaginal formulations)",
    disease_tags: ["vaginal thrush", "skin fungal infections"],
    price_in_inr: "₹140 (cream / pessary)",
    description:
      "An antifungal used in creams and pessaries for skin and vaginal candidiasis.",
    alternatives: ["Clotrimazole", "Terbinafine (topical)"],
    advantages: ["Versatile formulations", "Widely used"],
    disadvantages: [
      "Local irritation possible",
      "Not for systemic fungal infections",
    ],
    blog: "Miconazole treats common superficial fungal conditions; follow product-specific instructions for use.",
    youtube:
      "https://www.youtube.com/results?search_query=miconazole+how+to+use",
  },
  {
    name: "Hydrocortisone Cream 1%",
    generic: "Hydrocortisone (low potency topical steroid)",
    disease_tags: ["eczema", "dermatitis", "insect bites", "itch"],
    price_in_inr: "₹95 (tube)",
    description:
      "A mild topical steroid for short-term reduction of inflammation and itch in mild dermatitis.",
    alternatives: ["Calamine lotion (for mild itch)"],
    advantages: [
      "Reduces inflammation and itching quickly",
      "OTC low-dose availability",
    ],
    disadvantages: ["Not for prolonged use", "Can thin skin if overused"],
    blog: "Low-strength hydrocortisone provides quick relief for itchy rashes but should be used for short periods unless directed by a clinician.",
    youtube:
      "https://www.youtube.com/results?search_query=hydrocortisone+cream+how+to+use",
  },
  {
    name: "Multivitamin (General)",
    generic: "Multivitamin + Minerals",
    disease_tags: ["supplement", "general health", "nutritional support"],
    price_in_inr: "₹400 (bottle)",
    description:
      "Combination vitamins and minerals to help fill dietary gaps where required.",
    alternatives: ["Targeted vitamin supplements (Vit D, B12, C)"],
    advantages: ["May help address dietary gaps", "Convenient single-pill"],
    disadvantages: [
      "Not substitute for balanced diet",
      "Excessive use may cause side effects",
    ],
    blog: "Multivitamins can supplement inadequate diets, but testing and targeted therapy are preferable when deficiency is suspected.",
    youtube:
      "https://www.youtube.com/results?search_query=multivitamin+how+to+use",
  },
  {
    name: "Vitamin C (Ascorbic Acid)",
    generic: "Ascorbic acid",
    disease_tags: ["immune support", "supplement"],
    price_in_inr: "₹120 (bottle)",
    description:
      "An antioxidant vitamin used as a supplement for immune support and general health.",
    alternatives: ["C-rich foods", "multivitamin containing vitamin C"],
    advantages: [
      "Supports immune health",
      "Generally safe at recommended doses",
    ],
    disadvantages: [
      "High doses may cause GI upset",
      "Limited evidence for cold prevention",
    ],
    blog: "Vitamin C is commonly used during colds and as a daily supplement; dietary sources are preferred when possible.",
    youtube:
      "https://www.youtube.com/results?search_query=vitamin+c+how+to+use",
  },
  {
    name: "Calamine Lotion",
    generic: "Calamine (zinc oxide/ferric oxide base)",
    disease_tags: ["itch", "insect bites", "mild rash"],
    price_in_inr: "₹60 (100 ml)",
    description:
      "Soothes skin, relieves itching and provides a cooling effect for mild skin irritations.",
    alternatives: [
      "Hydrocortisone (for stronger inflammation)",
      "Aloe vera gel (soothing)",
    ],
    advantages: [
      "Gentle for topical use",
      "Suitable for children in many cases",
    ],
    disadvantages: ["Limited effect for severe eczema or infections"],
    blog: "Calamine is a trusted remedy for insect bites and mild rashes and is often used in households.",
    youtube:
      "https://www.youtube.com/results?search_query=calamine+lotion+how+to+use",
  },
  {
    name: "Saline Nasal Spray",
    generic: "Isotonic saline solution",
    disease_tags: ["nasal congestion", "dry nasal passages", "sinus care"],
    price_in_inr: "₹150 (spray)",
    description:
      "Irrigates and moisturizes nasal passages to ease congestion and dryness.",
    alternatives: ["Neti pot (with sterile water)", "saline drops"],
    advantages: ["Safe, non-pharmacologic", "Useful daily nasal hygiene"],
    disadvantages: [
      "Use sterile water only for irrigation to avoid infection risk",
    ],
    blog: "Saline nasal irrigation is gentle and effective for congestion and sinus hygiene; follow instructions for safe use.",
    youtube:
      "https://www.youtube.com/results?search_query=saline+nasal+spray+how+to+use",
  },
  {
    name: "Gaviscon (Alginate Antacid)",
    generic: "Sodium alginate + antacid ingredients",
    disease_tags: ["reflux", "heartburn", "acid reflux after meals"],
    price_in_inr: "₹220 (bottle)",
    description:
      "Forms a physical barrier to reduce reflux and soothes heartburn after meals.",
    alternatives: ["Rennie", "Gelusil"],
    advantages: [
      "Forms protective raft",
      "Particularly useful post-prandial reflux",
    ],
    disadvantages: [
      "Short-term symptom control",
      "May be costlier than simple antacids",
    ],
    blog: "Alginate antacids like Gaviscon can be especially effective for reflux after eating by forming a protective layer.",
    youtube: "https://www.youtube.com/results?search_query=gaviscon+how+to+use",
  },
  {
    name: "Chlorhexidine Mouthwash",
    generic: "Chlorhexidine gluconate (0.2%/0.12%)",
    disease_tags: ["oral hygiene", "gingivitis", "post dental care"],
    price_in_inr: "₹150 (bottle)",
    description:
      "An antiseptic mouthwash used short-term to control plaque and gingival inflammation under dental advice.",
    alternatives: ["Salt-water rinses", "fluoride mouthwashes for daily use"],
    advantages: ["Reduces bacterial load and gingivitis short-term"],
    disadvantages: ["Tooth staining with prolonged use", "Taste alteration"],
    blog: "Chlorhexidine is valuable short-term after dental procedures but long-term routine use has drawbacks like staining.",
    youtube:
      "https://www.youtube.com/results?search_query=chlorhexidine+mouthwash+how+to+use",
  },
  {
    name: "Artificial Tears (Lubricant eye drops)",
    generic: "Carboxymethylcellulose / HPMC (varies)",
    disease_tags: ["dry eyes", "eye irritation"],
    price_in_inr: "₹120 (bottle)",
    description: "Lubricant eye drops for mild dryness and irritation.",
    alternatives: [
      "Preservative-free drops for frequent use",
      "warm compresses for blepharitis",
    ],
    advantages: [
      "Safe frequent use (preservative-free)",
      "Relieves mild dry eye symptoms",
    ],
    disadvantages: [
      "Not for infectious conjunctivitis",
      "Preserved drops limit frequent use",
    ],
    blog: "Artificial tears are first-line for dry eye symptoms; choose preservative-free formulations for frequent application.",
    youtube:
      "https://www.youtube.com/results?search_query=artificial+tears+how+to+use",
  },
  {
    name: "Calpol (Pediatric Paracetamol)",
    generic: "Paracetamol (pediatric syrup)",
    disease_tags: ["fever in children", "pain in children"],
    price_in_inr: "₹85 (100 ml)",
    description:
      "A syrup formulation of paracetamol for pediatric dosing in fever and mild pain.",
    alternatives: ["Crocin pediatric syrup", "Dolo baby syrup"],
    advantages: [
      "Child-appropriate dosing and flavor",
      "OTC availability in many markets",
    ],
    disadvantages: [
      "Risk of dosing errors by caregivers",
      "Avoid combining with other paracetamol products",
    ],
    blog: "Pediatric paracetamol is essential in home first-aid; use weight-based dosing and provided dosing device.",
    youtube: "https://www.youtube.com/results?search_query=calpol+how+to+use",
  },
  {
    name: "Pediatric ORS",
    generic: "ORS for children (reduced osmolarity)",
    disease_tags: ["paediatric dehydration", "diarrhea"],
    price_in_inr: "₹10 (sachet)",
    description:
      "ORS formulated to replace fluids and electrolytes in children with diarrhoea.",
    alternatives: [
      "Electral pediatric",
      "home rule sugar-salt solution in emergencies",
    ],
    advantages: ["Child-appropriate formula", "Easy to administer"],
    disadvantages: ["Does not treat underlying cause of diarrhea"],
    blog: "Pediatric ORS is life-saving in diarrheal dehydration and should be used promptly when needed.",
    youtube:
      "https://www.youtube.com/results?search_query=pediatric+ors+how+to+use",
  },
  {
    name: "Aloe Vera Gel (Topical)",
    generic: "Aloe vera extract gel",
    disease_tags: ["sunburn", "minor burns", "skin soothing"],
    price_in_inr: "₹150 (tube)",
    description:
      "Soothes sunburn and mild skin irritation with cooling and moisturizing effects.",
    alternatives: ["Calamine", "cooling gels"],
    advantages: ["Natural soothing effect", "Moisturizes skin"],
    disadvantages: ["Allergic reactions possible", "Not for deep burns"],
    blog: "Aloe vera is a simple home remedy for mild burns and sun exposure; seek care for severe burns.",
    youtube:
      "https://www.youtube.com/results?search_query=aloe+vera+gel+how+to+use",
  },
  {
    name: "Electrolyte / Hydration Tablets",
    generic: "Effervescent electrolyte tablets",
    disease_tags: ["exercise dehydration", "heat exhaustion"],
    price_in_inr: "₹200 (tube)",
    description:
      "Effervescent tablets to replenish electrolytes after exercise or heat stress.",
    alternatives: ["ORS", "sports drink powders"],
    advantages: ["Convenient for athletes", "Quick electrolyte replacement"],
    disadvantages: [
      "May contain sugars and flavorings",
      "Not for medical dehydration without ORS",
    ],
    blog: "Hydration tablets are handy for sports hydration but are not a substitute for medical ORS when ill.",
    youtube:
      "https://www.youtube.com/results?search_query=electrolyte+tablets+how+to+use",
  },
  {
    name: "Ciclopirox Nail Lacquer",
    generic: "Ciclopirox (topical nail lacquer)",
    disease_tags: ["nail fungus (onycomycosis) - mild cases"],
    price_in_inr: "₹700 (tube)",
    description:
      "Topical antifungal lacquer for mild nail infections; often less effective than oral therapy for severe cases.",
    alternatives: [
      "Topical terbinafine (limited efficacy)",
      "oral antifungals (prescription)",
    ],
    advantages: ["Avoids systemic exposure", "Useful early or mild cases"],
    disadvantages: [
      "Often prolonged treatment required",
      "Lower cure rates than oral therapy for nails",
    ],
    blog: "Topical nail antifungals can help early infections; realistic expectations and long-term application are needed.",
    youtube:
      "https://www.youtube.com/results?search_query=ciclopirox+nail+how+to+use",
  },
  {
    name: "Sunscreen (SPF 30+)",
    generic: "Physical or chemical sunscreen (zinc oxide, avobenzone etc.)",
    disease_tags: ["sun protection", "photoaging", "skin cancer prevention"],
    price_in_inr: "₹300 (tube)",
    description:
      "Protects skin from UV radiation; reduces sunburn and long-term skin damage.",
    alternatives: [
      "Higher SPF products",
      "physical protection (clothing, hats)",
    ],
    advantages: ["Prevents sunburn and photoaging", "OTC and widely available"],
    disadvantages: [
      "Requires correct application and reapplication",
      "Potential irritation in sensitive skin",
    ],
    blog: "Daily sunscreen is a cornerstone of skin protection; choose broad-spectrum SPF 30+ and reapply every 2 hours in direct sun.",
    youtube:
      "https://www.youtube.com/results?search_query=sunscreen+how+to+use",
  },
  {
    name: "Neem-based Antiseptic Cream",
    generic: "Neem extract topical cream",
    disease_tags: ["minor skin infections", "acne (mild)"],
    price_in_inr: "₹120 (tube)",
    description:
      "Herbal antiseptic cream used for minor skin complaints with traditional usage.",
    alternatives: ["Savlon", "Betadine (for antisepsis)"],
    advantages: ["Herbal appeal", "Mild antiseptic properties"],
    disadvantages: ["Variable evidence base", "Not for serious infections"],
    blog: "Neem creams are popular for gentle antiseptic care; consult a dermatologist for persistent acne or infections.",
    youtube:
      "https://www.youtube.com/results?search_query=neem+cream+how+to+use",
  },
  {
    name: "Throat Spray (Topical anesthetic / antiseptic)",
    generic: "Lidocaine + mild antiseptic (varies by brand)",
    disease_tags: ["severe sore throat", "local pain relief"],
    price_in_inr: "₹150 (spray)",
    description:
      "Provides short-term local anesthesia for severe throat pain and facilitates swallowing.",
    alternatives: ["Lozenges", "salt-water gargle"],
    advantages: [
      "Rapid local relief",
      "Useful prior to procedures or intense pain",
    ],
    disadvantages: ["Short duration", "Not for repeated unsupervised use"],
    blog: "Throat sprays offer targeted relief but do not replace antibiotics when indicated for bacterial infections.",
    youtube:
      "https://www.youtube.com/results?search_query=throat+spray+how+to+use",
  },
  {
    name: "Chewable Antacid Tablets (Rennie style)",
    generic: "Calcium carbonate (chewable)",
    disease_tags: ["heartburn", "acid reflux"],
    price_in_inr: "₹80 (pack)",
    description:
      "Chewable tablets that neutralize stomach acid for quick relief of heartburn.",
    alternatives: ["Rennie", "Gaviscon", "Gelusil"],
    advantages: ["Fast acting", "Pleasant flavored chewable"],
    disadvantages: [
      "Short-term relief",
      "May alter calcium intake if overused",
    ],
    blog: "Chewable antacids are handy for immediate relief; persistent reflux needs medical evaluation.",
    youtube:
      "https://www.youtube.com/results?search_query=chewable+antacid+how+to+use",
  },
  {
    name: "Antihistamine Eye Drops (Olopatadine / Ketotifen)",
    generic: "Olopatadine / Ketotifen (eye drops)",
    disease_tags: ["allergic conjunctivitis", "itchy red eyes"],
    price_in_inr: "₹250 (bottle)",
    description:
      "Eye drops targeting allergic itching and redness; rapid symptomatic relief for allergic eyes.",
    alternatives: ["Artificial tears for mild cases", "oral antihistamines"],
    advantages: ["Targeted ocular relief", "Quickly reduces itch"],
    disadvantages: [
      "Not for infectious conjunctivitis",
      "Consult ophthalmologist for persistent issues",
    ],
    blog: "Antihistamine eye drops give fast relief for seasonal allergic eye symptoms and are often recommended by eye specialists.",
    youtube:
      "https://www.youtube.com/results?search_query=olopatadine+eye+drops+how+to+use",
  },
  {
    name: "Antifungal Foot Powder",
    generic: "Tolnaftate / Miconazole powder",
    disease_tags: ["athlete's foot", "fungal foot infections"],
    price_in_inr: "₹120 (pack)",
    description:
      "Powder keeps feet dry and treats or prevents fungal infections in sweaty feet.",
    alternatives: ["Topical clotrimazole cream", "terbinafine topical"],
    advantages: ["Prevention-focused", "Convenient for shoes"],
    disadvantages: ["May not treat severe infections alone"],
    blog: "Antifungal powders combined with good foot hygiene help prevent and manage athlete's foot effectively.",
    youtube:
      "https://www.youtube.com/results?search_query=antifungal+powder+how+to+use",
  },
  {
    name: "Hydrogen Peroxide 3%",
    generic: "Hydrogen peroxide 3% solution",
    disease_tags: ["wound cleaning (minor)", "antiseptic (limited)"],
    price_in_inr: "₹60 (100 ml)",
    description:
      "Used for brief cleaning of minor wounds, though modern guidance limits routine use due to tissue irritation.",
    alternatives: ["Savlon", "Betadine"],
    advantages: [
      "Cleans debris by bubbling action",
      "Common household antiseptic",
    ],
    disadvantages: [
      "Can damage healthy tissue",
      "Not recommended for routine wound care",
    ],
    blog: "Hydrogen peroxide has historical use for wound cleaning but gentler antiseptics are often preferred now.",
    youtube:
      "https://www.youtube.com/results?search_query=hydrogen+peroxide+how+to+use",
  },
  {
    name: "Earwax Softening Drops (Carbamide peroxide)",
    generic: "Carbamide peroxide drops",
    disease_tags: ["earwax", "ear cleaning"],
    price_in_inr: "₹200 (bottle)",
    description:
      "Softens earwax for easier removal; avoid use if ear discharge or perforation is suspected.",
    alternatives: ["Warm mineral oil drops", "ENT cleaning"],
    advantages: ["Non-invasive home option", "Helpful for mild impaction"],
    disadvantages: [
      "Not for infected or perforated ears",
      "May cause local irritation",
    ],
    blog: "Earwax-softening drops are safe when instructions followed; consult ENT for persistent or symptomatic impaction.",
    youtube:
      "https://www.youtube.com/results?search_query=earwax+drops+how+to+use",
  },
  {
    name: "Clinical Strength Antiperspirant",
    generic: "Aluminium salt-based antiperspirant",
    disease_tags: ["excessive sweating", "body odour"],
    price_in_inr: "₹200 (stick)",
  },
  {
    name: "Topical Hemorrhoid Cream",
    generic: "Phenylephrine + soothing agents (varies)",
    disease_tags: ["hemorrhoids", "anal discomfort"],
    price_in_inr: "₹150 (tube)",
    description:
      "Topical creams to relieve pain, itching and swelling associated with hemorrhoids for short-term symptomatic relief.",
    alternatives: ["Sitz baths", "fiber supplements"],
    advantages: ["Rapid symptomatic relief", "Local application"],
    disadvantages: [
      "Not a definitive cure",
      "Avoid prolonged unsupervised use",
    ],
    blog: "Topical hemorrhoid treatments give temporary relief; addressing constipation is essential for long-term improvement.",
    youtube:
      "https://www.youtube.com/results?search_query=hemorrhoid+cream+how+to+use",
  },
  {
    name: "Antacid Chewables (Generic)",
    generic: "Calcium carbonate",
    disease_tags: ["heartburn", "indigestion"],
    price_in_inr: "₹80 (pack)",
    description:
      "Chewable antacid tablets neutralize stomach acid for quick heartburn relief.",
    alternatives: ["Rennie", "Gaviscon"],
    advantages: ["Fast acting", "Pleasant chewable formulations"],
    disadvantages: ["Short duration of action", "Avoid excessive use"],
    blog: "Chewable antacids are convenient for immediate heartburn relief; persistent reflux should be evaluated.",
    youtube:
      "https://www.youtube.com/results?search_query=chewable+antacid+how+to+use",
  },
  {
    name: "Mouth Ulcer Gel",
    generic: "Benzocaine + antiseptic topical gel",
    disease_tags: ["mouth ulcers", "oral pain"],
    price_in_inr: "₹140 (tube)",
    description:
      "Topical gel that temporarily relieves pain of mouth ulcers and protects the area.",
    alternatives: ["Salt-water rinses", "topical steroid gel (prescription)"],
    advantages: ["Rapid local relief", "Easy topical application"],
    disadvantages: ["Short-lived effect", "Not a cure for recurrent ulcers"],
    blog: "Mouth ulcer gels soothe pain but identify triggers (stress, nutritional deficiency) for recurrent ulcers.",
    youtube:
      "https://www.youtube.com/results?search_query=mouth+ulcer+gel+how+to+use",
  },
  {
    name: "Nasal Decongestant Spray (short-term)",
    generic: "Oxymetazoline / Xylometazoline",
    disease_tags: ["nasal congestion", "blocked nose"],
    price_in_inr: "₹160 (spray)",
    description:
      "Topical nasal decongestants give rapid relief from nasal congestion but should not be used for more than a few days to avoid rebound congestion.",
    alternatives: ["Saline nasal spray", "oral decongestants (with caution)"],
    advantages: ["Rapid nasal decongestion", "Easy to use"],
    disadvantages: [
      "Risk of rebound congestion (rhinitis medicamentosa) with prolonged use",
    ],
    blog: "Use nasal decongestant sprays short-term only; saline alternatives are safer for long-term management.",
    youtube:
      "https://www.youtube.com/results?search_query=nasal+decongestant+spray+how+to+use",
  },
  {
    name: "Antacid Effervescent Sachet (Generic)",
    generic: "Effervescent antacid powder",
    disease_tags: ["heartburn", "indigestion"],
    price_in_inr: "₹40 (sachet)",
    description:
      "Instant effervescent powder for prompt relief from heartburn and acidity.",
    alternatives: ["ENO", "Digene"],
    advantages: ["Fast acting", "Portable"],
    disadvantages: [
      "Short-lived effect",
      "Frequent use indicates need for medical review",
    ],
    blog: "Effervescent antacid sachets are a convenient travel solution for sudden heartburn episodes.",
    youtube:
      "https://www.youtube.com/results?search_query=antacid+sachet+how+to+use",
  },
  {
    name: "Glucose Gel (Oral)",
    generic: "Glucose gel",
    disease_tags: ["hypoglycemia", "low blood sugar emergency"],
    price_in_inr: "₹300 (tube)",
    description:
      "Provides rapid carbohydrate for conscious patients with symptomatic hypoglycemia.",
    alternatives: ["Glucose tablets", "juice or sugary snack in emergencies"],
    advantages: ["Fast action", "Easy to administer to conscious patient"],
    disadvantages: ["Not for unconscious patients (aspiration risk)"],
    blog: "Glucose gel is a practical first-aid for diabetics experiencing low blood sugar; follow with longer-acting carbs.",
    youtube:
      "https://www.youtube.com/results?search_query=glucose+gel+how+to+use",
  },
  {
    name: "Toothache Relief Gel (Topical benzocaine)",
    generic: "Benzocaine topical oral gel",
    disease_tags: ["toothache", "oral pain"],
    price_in_inr: "₹180 (tube)",
    description:
      "Topical gel to numb localized tooth pain temporarily until dental care is obtained.",
    alternatives: [
      "Clove oil (traditional remedy)",
      "systemic analgesics like paracetamol",
    ],
    advantages: ["Rapid local numbing", "Useful prior to dental visit"],
    disadvantages: [
      "Short duration",
      "Not a substitute for definitive dental care",
    ],
    blog: "Toothache gels provide temporary relief; see a dentist for underlying causes like cavity or infection.",
    youtube:
      "https://www.youtube.com/results?search_query=toothache+gel+how+to+use",
  },
  {
    name: "Antifungal Foot Powder (Tolnaftate)",
    generic: "Tolnaftate powder",
    disease_tags: ["athlete's foot", "fungal foot infection prevention"],
    price_in_inr: "₹120 (pack)",
    description:
      "Powder to keep feet dry and treat or prevent fungal infections.",
    alternatives: ["Topical antifungal creams", "proper foot hygiene"],
    advantages: [
      "Good preventive measure for sweaty feet",
      "Convenient use in shoes",
    ],
    disadvantages: [
      "May not suffice for active infections without cream therapy",
    ],
    blog: "Powder plus hygiene is effective for preventing fungal foot problems; treat active infections with appropriate topical therapy.",
    youtube:
      "https://www.youtube.com/results?search_query=antifungal+powder+how+to+use",
  },
  {
    name: "Hydrogen Peroxide 3% (first-aid)",
    generic: "Hydrogen peroxide solution 3%",
    disease_tags: ["wound cleaning (minor)"],
    price_in_inr: "₹60 (100 ml)",
    description:
      "Historically used to clean minor wounds; modern guidance recommends gentler antiseptics due to tissue irritation.",
    alternatives: ["Savlon", "Betadine"],
    advantages: ["Bubbles and cleans debris", "Commonly available"],
    disadvantages: [
      "May impede healing if overused",
      "Not recommended for routine wound care",
    ],
    blog: "Hydrogen peroxide is widely found in first-aid kits but should be used cautiously; many clinicians now prefer chlorhexidine or povidone-iodine.",
    youtube:
      "https://www.youtube.com/results?search_query=hydrogen+peroxide+how+to+use",
  },
  {
    name: "Earwax Drops (Carbamide Peroxide)",
    generic: "Carbamide peroxide drops",
    disease_tags: ["earwax", "impacted cerumen"],
    price_in_inr: "₹200 (bottle)",
    description:
      "Softens earwax for easier removal; avoid use if ear discharge or perforation is present.",
    alternatives: ["Warm mineral oil", "ENT professional cleaning"],
    advantages: ["Non-invasive home option", "Helps prevent impaction"],
    disadvantages: ["Not for infection or perforation", "May irritate"],
    blog: "Ear drops can safely manage wax impaction when used correctly; seek ENT care for persistent symptoms.",
    youtube:
      "https://www.youtube.com/results?search_query=earwax+drops+how+to+use",
  },
];

export default medList;