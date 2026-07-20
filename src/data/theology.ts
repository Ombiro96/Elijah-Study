export interface InterpretivePerspective {
  view: string;
  summary: string;
  support: string;
  considerations: string;
}

export interface TheologyTopic {
  slug: string;
  title: string;
  summary: string;
  sections: { heading: string; body: string[] }[];
  scriptureRefs: string[];
  interpretivePerspectives?: InterpretivePerspective[];
}

export const theologyTopics: TheologyTopic[] = [
  {
    slug: "law-and-prophets",
    title: "The Law and the Prophets",
    summary:
      "\"The Law and the Prophets\" was shorthand in first-century Judaism for the whole Hebrew Scriptures, and Jesus claims to fulfill, not abolish, both.",
    sections: [
      {
        heading: "What 'the Law and the Prophets' means",
        body: [
          "By Jesus' day, the Hebrew Scriptures were commonly grouped in three parts: the Law (Torah, the five books of Moses), the Prophets (the Former Prophets — Joshua through Kings — and the Latter Prophets — Isaiah through Malachi), and the Writings (Psalms, Proverbs, and the rest). 'The Law and the Prophets' functions as a shorthand for the whole body of authoritative Scripture (see also Luke 24:44, which adds 'the Psalms' for full precision).",
          "This is why Elijah — a Former Prophet's central figure — and Moses can together, at the Transfiguration, represent essentially the entire Old Testament witness.",
        ],
      },
      {
        heading: "Jesus' claim in Matthew 5:17",
        body: [
          "'Do not think that I have come to abolish the Law or the Prophets; I have not come to abolish them but to fulfill them.' Jesus does not set himself against the Old Testament but presents himself as its intended goal — the one toward whom the Law's demands and the Prophets' promises were always pointing.",
          "This has direct bearing on how to read the Elijah narrative: it is not an isolated moral story but part of a single storyline whose ending is Jesus Christ.",
        ],
      },
    ],
    scriptureRefs: ["Matthew 5:17", "Luke 24:27", "Luke 24:44", "Hebrews 1:1-2"],
  },
  {
    slug: "prophetic-office",
    title: "The Role of Prophets",
    summary: "Prophets were covenant messengers first, and predictors of the future only in service of that role.",
    sections: [
      {
        heading: "Covenant enforcement, not fortune-telling",
        body: [
          "Deuteronomy 18:15-22 establishes the prophetic office as a continuation of Moses' own role in mediating God's word to the people. A prophet's core task is to hold Israel to the covenant Moses already delivered — announcing blessing for obedience and curses for unfaithfulness, exactly as Moses himself had outlined in Deuteronomy 28.",
          "The basic pattern across the historical books is: Moses gives the covenant; kings and the people violate it; prophets are raised up to call Israel back. Prediction (as in Ahijah's word to Jeroboam, or Elijah's to Ahab) is one tool prophets use, but it always serves this larger covenant-enforcement purpose rather than existing for its own sake.",
        ],
      },
    ],
    scriptureRefs: ["Deuteronomy 18:15-22", "Deuteronomy 28", "1 Kings 13", "1 Kings 19:15-16"],
  },
  {
    slug: "transfiguration",
    title: "Why Moses and Elijah Appear at the Transfiguration",
    summary: "Moses represents the Law, Elijah the Prophets — both converge on Jesus and are subordinated to him.",
    sections: [
      {
        heading: "Law and Prophets in one scene",
        body: [
          "At the Transfiguration (Matthew 17:1-13; Mark 9:2-13; Luke 9:28-36), Moses and Elijah appear talking with Jesus about his coming 'departure' (Greek exodus) that he was about to accomplish in Jerusalem — his death and resurrection (Luke 9:31). The two figures who most compactly represent 'the Law and the Prophets' are shown discussing the very event that fulfills both.",
          "Both Moses and Elijah also have unusual departures from ordinary life — Moses' death and burial are shrouded in mystery (Deuteronomy 34:5-6; see also Jude 9), and Elijah does not die at all but is taken up in a whirlwind (2 Kings 2:11) — which may be part of why later Jewish tradition anticipated the return of figures like them.",
        ],
      },
      {
        heading: "'Listen to him'",
        body: [
          "Peter's suggestion to build three tents treats Jesus, Moses, and Elijah as equals. The Father's voice from the cloud corrects this immediately: 'This is my beloved Son, with whom I am well pleased; listen to him' (Matthew 17:5) — a near-quotation of Deuteronomy 18:15's promise of a prophet like Moses whom Israel must heed. Moses and Elijah, having served their roles, disappear, and Jesus alone remains.",
        ],
      },
    ],
    scriptureRefs: ["Matthew 17:1-13", "Luke 9:28-36", "Luke 9:31", "Deuteronomy 18:15", "Deuteronomy 34:5-6"],
  },
  {
    slug: "john-the-baptist-and-elijah",
    title: "John the Baptist and Elijah",
    summary: "John fulfills Malachi's promise of Elijah's return 'in spirit and power,' without being a literal reincarnation.",
    sections: [
      {
        heading: "Malachi's promise",
        body: [
          "Malachi 4:5-6, the Old Testament's closing words, promises that the LORD will send 'Elijah the prophet before the great and awesome day of the LORD' to turn hearts and avert a curse on the land. This promise sat unresolved for roughly four centuries between the Testaments.",
        ],
      },
      {
        heading: "The angel's announcement and Jesus' explanation",
        body: [
          "The angel Gabriel tells Zechariah that his son John will go before the Lord 'in the spirit and power of Elijah' (Luke 1:17) — deliberately echoing Malachi's language while carefully avoiding a claim of literal identity. Jesus later states, 'if you are willing to accept it, he is Elijah who is to come' (Matthew 11:14), and after the Transfiguration tells the disciples plainly that 'Elijah has already come' in reference to John (Matthew 17:11-13).",
          "Yet when religious leaders ask John directly whether he is Elijah, he answers, 'I am not' (John 1:21) — denying that he is Elijah returned bodily. The resolution: John fulfills the promised Elijah role and empowerment ('in the spirit and power of'), not a reincarnation of Elijah's actual person. Both statements are held together in Scripture without contradiction once the distinction is made clear.",
        ],
      },
    ],
    scriptureRefs: ["Malachi 4:5-6", "Luke 1:17", "Matthew 11:14", "Matthew 17:11-13", "John 1:21"],
  },
  {
    slug: "james-5",
    title: "James 5 and the Power of Prayer",
    summary: "James grounds Elijah's extraordinary ministry in ordinary human prayer, as an encouragement to every believer.",
    sections: [
      {
        heading: "\"A man with a nature like ours\"",
        body: [
          "James 5:17-18 cites Elijah's prayer for drought and then for rain as an example for believers: 'Elijah was a man with a nature like ours, and he prayed fervently that it might not rain, and for three years and six months it did not rain on the earth. Then he prayed again, and heaven gave rain.'",
          "This is a deliberately humanizing move: Elijah's power did not come from some innate spiritual superiority but from earnest, believing prayer available to any believer. James uses this to encourage ordinary Christians toward bold, persistent prayer, especially in the context of the preceding verses about prayer for the sick and for one another's sin (James 5:13-16).",
        ],
      },
    ],
    scriptureRefs: ["James 5:13-18", "1 Kings 17:1", "1 Kings 18:41-45"],
  },
  {
    slug: "romans-11",
    title: "Romans 11 and the Remnant",
    summary: "Paul cites the 7,000 who had not bowed to Baal as a pattern for understanding God's ongoing faithfulness to a believing remnant.",
    sections: [
      {
        heading: "Paul's argument",
        body: [
          "In Romans 11, wrestling with why many in Israel had not believed in Jesus, Paul asks whether God has rejected his people and answers, 'By no means!' He points to himself as a believing Israelite, then to Elijah's complaint that he alone remained faithful — and God's correction that 7,000 had not bowed to Baal (1 Kings 19:14-18) — as evidence of a recurring pattern: God always preserves 'a remnant, chosen by grace' (Romans 11:5), even when it is invisible to the prophet's own eyes.",
          "Paul's larger argument in the chapter concerns Israel's partial hardening and the ingrafting of Gentile believers, culminating in hope for Israel's future restoration (Romans 11:25-32). The Elijah citation is a supporting illustration within that broader argument, not its entirety.",
        ],
      },
    ],
    scriptureRefs: ["Romans 11:1-6", "1 Kings 19:14-18", "Romans 11:25-32"],
  },
  {
    slug: "davidic-covenant",
    title: "God's Covenant with David",
    summary: "The promise of an eternal dynasty in 2 Samuel 7 is the theological backbone behind every king's evaluation in Kings, and the root of messianic hope.",
    sections: [
      {
        heading: "The promise",
        body: [
          "In 2 Samuel 7:12-16, God promises David that his 'house and kingdom shall be made sure forever,' even while disciplining individual sons for their sin. This unconditional element (the dynasty's permanence) alongside a conditional element (individual kings' blessing or discipline) shapes the entire narrative of Kings.",
          "It is why Judah's kings are always evaluated against David specifically, why the near-extinction of the Davidic line under Athaliah (2 Kings 11) is such a dramatic crisis point, and why the New Testament can present Jesus as the permanent fulfillment of a promise that outlasted every human failure in between (Luke 1:32-33).",
        ],
      },
    ],
    scriptureRefs: ["2 Samuel 7:12-16", "2 Kings 11", "Luke 1:32-33"],
  },
  {
    slug: "divided-kingdom",
    title: "The Divided Kingdom",
    summary: "The kingdom's split under Rehoboam is presented as both human folly and the outworking of divine judgment on Solomon's idolatry.",
    sections: [
      {
        heading: "Two causes held together",
        body: [
          "1 Kings 11:9-13 traces the coming division directly to Solomon's own unfaithfulness; 1 Kings 12 then narrates it as the result of Rehoboam's specific, foolish decision to threaten harsher treatment than his father. The text holds both causes together without treating them as contradictory: human choices are real and blameworthy, and God's sovereign purposes are accomplished through them, not around them.",
        ],
      },
    ],
    scriptureRefs: ["1 Kings 11:9-13", "1 Kings 12"],
  },
  {
    slug: "baal-worship",
    title: "Baal Worship in Ancient Israel",
    summary: "Historical and religious background on Canaanite Baal worship, distinguished from the biblical text's own theological verdict on it.",
    sections: [
      {
        heading: "Historical background",
        body: [
          "Extra-biblical texts recovered from the ancient city of Ugarit (mid-20th century excavations) describe Baal as a leading Canaanite storm and fertility deity, locked in mythic conflict with rival gods representing sea and death. This is historical background supplied by archaeology, not biblical text, but it usefully explains why the Bible so often pairs Baal worship with fertility, rain, and agricultural themes.",
        ],
      },
      {
        heading: "The Bible's verdict",
        body: [
          "Scripture never treats Baal as a real rival deity with actual power — the term 'idol' (Hebrew elilim, 'worthless things') captures the biblical assessment. Elijah's Carmel challenge is designed to expose this directly and publicly: a god who cannot answer, even when his own prophets cut themselves in a frenzy, is no god (1 Kings 18:26-29).",
        ],
      },
    ],
    scriptureRefs: ["1 Kings 16:31-33", "1 Kings 18:20-40"],
  },
  {
    slug: "sovereignty-over-nations",
    title: "The Sovereignty of God over the Nations",
    summary: "The LORD directs the destinies of Aram, Assyria, and Babylon as much as Israel's, using foreign kings as instruments of judgment and deliverance alike.",
    sections: [
      {
        heading: "Elijah's commission to anoint a foreign king",
        body: [
          "At Horeb, Elijah is told to anoint Hazael as king over Aram (1 Kings 19:15) — a striking instruction, since Hazael is a foreign king with no covenant relationship to Israel, yet is raised up specifically as an instrument of the LORD's judgment on His own people (2 Kings 8:12-13; 2 Kings 13:1-7).",
          "This pattern recurs throughout Kings: Assyria and Babylon later serve the same function on a larger scale, judged themselves in turn (as the prophets often note) for exceeding their appointed role. It anticipates the New Testament's wider vision of God's rule over all nations, not merely Israel.",
        ],
      },
    ],
    scriptureRefs: ["1 Kings 19:15", "2 Kings 8:7-15", "2 Kings 13:1-7", "Isaiah 10:5-19"],
  },
  {
    slug: "revelation-11",
    title: "Revelation 11 and the Two Witnesses",
    summary:
      "Scripture does not explicitly name the two witnesses of Revelation 11. Evangelical interpreters hold a range of views; Elijah is one significant candidate because of details the text itself supplies.",
    sections: [
      {
        heading: "What the text says",
        body: [
          "Revelation 11:3-13 describes two witnesses who prophesy for 1,260 days, have power to shut the sky so that no rain falls, turn water to blood, and strike the earth with plagues, and can devour their enemies with fire from their mouths. They are eventually killed by 'the beast,' lie unburied for three and a half days while the world celebrates, and are then raised and taken up to heaven in a cloud.",
          "The text does not name them. Any identification is an interpretive inference from the details given, not a direct biblical statement — which is why this section is clearly labeled as presenting interpretive views rather than settled fact.",
        ],
      },
    ],
    scriptureRefs: ["Revelation 11:3-13"],
    interpretivePerspectives: [
      {
        view: "Moses and Elijah",
        summary: "The two witnesses are commonly identified with Moses and Elijah, or figures functioning like them.",
        support:
          "The powers described map closely onto both men: shutting the sky/withholding rain recalls Elijah's drought (1 Kings 17:1); turning water to blood and striking the earth with plagues recalls Moses' plagues on Egypt (Exodus 7-11). This is the view many interpreters find most textually supported, since it draws on two distinct sets of miracles rather than doubling one figure's.",
        considerations:
          "This view fits especially well with the Transfiguration's pairing of Moses and Elijah as representing the Law and the Prophets, read typologically forward into Revelation. Held by many futurist and some idealist interpreters.",
      },
      {
        view: "Enoch and Elijah",
        summary: "Some interpreters propose Enoch and Elijah specifically, based on the tradition that neither died an ordinary death.",
        support:
          "Enoch (Genesis 5:24) and Elijah (2 Kings 2:11) are the two Old Testament figures traditionally understood not to have died, making them fitting candidates to return and 'die' for the first time as the two witnesses (Revelation 11:7-9 emphasizes that they do die).",
        considerations:
          "This view leans on Hebrews 9:27 ('it is appointed for man to die once') as a reason these two specifically — rather than others — might be in view, though this reasoning is itself an inference rather than a direct textual claim.",
      },
      {
        view: "Elijah as one of the two (paired with a variable second figure)",
        summary: "Elijah specifically, on the strength of the fire and rain details, paired more loosely with another figure or left unspecified.",
        support:
          "The description of the witnesses' power to 'shut the sky, that no rain may fall' and to 'consume their foes' with fire directly echoes the two most famous public acts of Elijah's own ministry (1 Kings 17:1; 2 Kings 1:10-12), making him the figure most interpreters agree is in view for at least one of the two witnesses.",
        considerations:
          "This is the reason Elijah is highlighted in this study specifically, without claiming certainty about the second witness's identity.",
      },
      {
        view: "Symbolic / representative interpretation",
        summary: "The two witnesses represent the church's prophetic witness (Law and Prophets, or the sufficiency of two witnesses under Mosaic law) rather than two individual end-times persons.",
        support:
          "Revelation's genre is highly symbolic throughout, and 'two witnesses' may deliberately invoke Deuteronomy 19:15's requirement of two witnesses to establish truth, portraying the church's corporate prophetic testimony to the world rather than naming specific individuals.",
        considerations:
          "This is the preferred reading among many idealist and amillennial interpreters, who read much of Revelation's imagery as symbolic of realities recurring throughout the church age rather than as a strict predictive sequence.",
      },
    ],
  },
];

export function getTheologyTopic(slug: string): TheologyTopic | undefined {
  return theologyTopics.find((t) => t.slug === slug);
}
