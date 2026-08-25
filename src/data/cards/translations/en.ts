import type { CardTranslationMap } from "./types";

/** English card translations, keyed by card id. Filled in incrementally -- see types.ts. */
export const en: CardTranslationMap = {
  // ---- Major Arcana ----
  "major-00-fool": {
    name: "The Fool",
    summary: "A card of pure beginnings, standing before a road not yet written.",
    keywords: {
      upright: ["new beginnings", "freedom", "adventure", "innocence"],
      reversed: ["recklessness", "lack of preparation", "instability", "rashness"],
    },
    interpretation: {
      upright:
        "A new journey begins on a blank page where nothing has been decided yet. This is a moment to follow curiosity rather than fear and take that first step -- simple faith carries more power now than a perfect plan.",
      reversed:
        "You may be rushing in without preparation, or so gripped by fear that you can't take a single step. It's time to pause any reckless decisions and take stock of where you actually stand.",
    },
  },
  "major-01-magician": {
    name: "The Magician",
    summary: "A card of creation, shaping reality through will and talent.",
    keywords: {
      upright: ["ability", "creation", "action", "focus"],
      reversed: ["deception", "wasted talent", "manipulation", "lack of confidence"],
    },
    interpretation: {
      upright:
        "The tools and talent you need are already in your hands. Gather your will and act -- this is a time when you can turn what you want into reality.",
      reversed:
        "Watch for talent going unused, or a gap opening up between words and actions. Someone's smooth talk could cloud your judgment right now.",
    },
  },
  "major-02-high-priestess": {
    name: "The High Priestess",
    summary: "A card of intuition, sensing truth in stillness.",
    keywords: {
      upright: ["intuition", "mystery", "inner wisdom", "silence"],
      reversed: ["secrets", "suppressed intuition", "surface understanding", "confusion"],
    },
    interpretation: {
      upright:
        "This is a time when instinct knows the answer before logic does. Don't rush -- listen quietly to your inner voice, and hidden truths will slowly reveal themselves.",
      reversed:
        "You may be doubting your own intuition, or important information may still be kept from you. Be careful not to judge too quickly by what's visible on the surface.",
    },
  },
  "major-03-empress": {
    name: "The Empress",
    summary: "A card of growth, where natural abundance and nurturing take root.",
    keywords: {
      upright: ["abundance", "growth", "nurturing", "creativity"],
      reversed: ["stagnation", "overprotection", "creative burnout", "dependence"],
    },
    interpretation: {
      upright:
        "Like a seed taking root and growing naturally, this is an abundant season where effort ripens into results. Caring for yourself and those around you invites good things.",
      reversed:
        "Excessive caretaking may have become a burden, or you may be neglecting your own needs -- take a moment to check. The flow of growth may have quietly stalled.",
    },
  },
  "major-04-emperor": {
    name: "The Emperor",
    summary: "A card of stability, governing circumstances through order and principle.",
    keywords: {
      upright: ["stability", "order", "leadership", "responsibility"],
      reversed: ["rigidity", "dogmatism", "loss of control", "abuse of authority"],
    },
    interpretation: {
      upright:
        "You have the strength to steady a situation by establishing structure and principle. Trust builds when you stop avoiding responsibility and set clear standards.",
      reversed:
        "An overly controlling or inflexible attitude may be stiffening your relationships and circumstances. Be careful not to lose your flexibility by clinging too tightly to principle.",
    },
  },
  "major-05-hierophant": {
    name: "The Hierophant",
    summary: "A card of conviction, finding your path through tradition and teaching.",
    keywords: {
      upright: ["tradition", "teaching", "guidance", "conviction"],
      reversed: ["rigid formality", "rebellion against convention", "self-righteousness", "bad advice"],
    },
    interpretation: {
      upright:
        "Tried-and-true methods and the advice of someone experienced light the way ahead. Respecting tradition and established principle serves you well now.",
      reversed:
        "Check whether you're bound by outdated rules or forcing yourself to fit someone else's standard. You may need to step outside the given framework and find your own way.",
    },
  },
  "major-06-lovers": {
    name: "The Lovers",
    summary: "A card of love, where the heart's pull and a meaningful choice meet.",
    keywords: {
      upright: ["love", "harmony", "choice", "aligned values"],
      reversed: ["imbalance", "conflict", "wrong choice", "clashing values"],
    },
    interpretation: {
      upright:
        "This card symbolizes a genuine connection led by the heart, and a moment of meaningful choice. A relationship deepens when your values truly align.",
      reversed:
        "An imbalance within a relationship, or a lack of communication, may be leading to conflict. Be careful that a choice made in the heat of emotion doesn't leave you with regret.",
    },
  },
  "major-07-chariot": {
    name: "The Chariot",
    summary: "A card of willpower, gathering scattered forces to drive toward a goal.",
    keywords: {
      upright: ["willpower", "victory", "momentum", "self-control"],
      reversed: ["loss of direction", "conflict", "overconfidence", "loss of control"],
    },
    interpretation: {
      upright:
        "Victory follows when you gather opposing forces into a single direction and push forward. Strong will and focus carry your goal into reality.",
      reversed:
        "Your goal and direction may be wavering, or an inner conflict is draining your forward momentum. It's time to slow down and check your bearings again.",
    },
  },
  "major-08-strength": {
    name: "Strength",
    summary: "A card of courage, taming rough circumstances through gentleness.",
    keywords: {
      upright: ["courage", "patience", "gentle strength", "self-belief"],
      reversed: ["self-doubt", "impatience", "loss of emotional control", "weakness"],
    },
    interpretation: {
      upright:
        "Not brute force, but gentle and steady courage, is what masters a difficult situation now. Believing in yourself becomes your most powerful weapon.",
      reversed:
        "Your confidence may be shaking, or unchecked emotions could throw things off course. Rather than forcing your way through impatiently, take a moment to catch your breath.",
    },
  },
  "major-09-hermit": {
    name: "The Hermit",
    summary: "A card of reflection, lighting a solitary lamp to illuminate the self within.",
    keywords: {
      upright: ["reflection", "solitude", "inner exploration", "wisdom"],
      reversed: ["isolation", "avoidance", "loneliness", "losing your way"],
    },
    interpretation: {
      upright:
        "It's time to step back from the noise of the world, light your own lamp, and look within. The insight gained in solitude will point you toward your next step.",
      reversed:
        "You may be isolating yourself more than necessary, or avoiding reality altogether. Be careful not to get so lost in your own thoughts that you lose your way.",
    },
  },
  "major-10-wheel-of-fortune": {
    name: "Wheel of Fortune",
    summary: "A card of turning points, where the wheel of life spins in a new direction.",
    keywords: {
      upright: ["turning point", "fate", "change", "opportunity"],
      reversed: ["misfortune", "resistance", "stalled momentum", "recurring problems"],
    },
    interpretation: {
      upright:
        "You stand at a major turning point where life's currents are shifting. An unexpected opportunity may arrive, so try flowing with the change rather than resisting it.",
      reversed:
        "You may feel stuck, as though things keep drifting the wrong way, or as though you're facing the same difficulty again and again. Rather than fighting the current, this calls for the wisdom to wait.",
    },
  },
  "major-11-justice": {
    name: "Justice",
    summary: "A card of fairness, weighing cause and effect until they find balance.",
    keywords: {
      upright: ["fairness", "balance", "cause and effect", "decisiveness"],
      reversed: ["unfairness", "bias", "avoiding responsibility", "imbalance"],
    },
    interpretation: {
      upright:
        "The results owed to your past choices and actions now come to rest on the scale. This is a time to set emotion aside and make a fair decision based on facts.",
      reversed:
        "A one-sided judgment or an attitude of avoiding responsibility could make matters worse. Check whether you're viewing the situation only from an angle that favors you.",
    },
  },
  "major-12-hanged-man": {
    name: "The Hanged Man",
    summary: "A card of waiting, gaining a new perspective through stillness.",
    keywords: {
      upright: ["pause", "new perspective", "waiting", "letting go"],
      reversed: ["stagnation", "pointless sacrifice", "resistance", "impatience with delay"],
    },
    interpretation: {
      upright:
        "Rather than pushing forward, this is a time to pause and view the situation from a different angle. Letting go of the urge to control opens the door to unexpected insight.",
      reversed:
        "You may be dragging out a situation for no reason, or forcing yourself to hold on when it's time to stop. Take another look, so the sacrifice doesn't end up meaningless.",
    },
  },
  "major-13-death": {
    name: "Death",
    summary: "A card of transformation, where an ending must pass before the new can begin.",
    keywords: {
      upright: ["endings and beginnings", "transformation", "closure", "rebirth"],
      reversed: ["resistance to change", "lingering attachment", "stagnation", "fear"],
    },
    interpretation: {
      upright:
        "One chapter must close before the next can begin. Fear less, and let go of what's old -- that's when the door to true renewal opens.",
      reversed:
        "You may be holding onto something that needs to end, unable to move forward. Fear of change might be the very thing making this harder than it needs to be.",
    },
  },
  "major-14-temperance": {
    name: "Temperance",
    summary: "A card of balance, blending different elements into harmony.",
    keywords: {
      upright: ["balance", "harmony", "patience", "healing"],
      reversed: ["excess", "imbalance", "impatience", "discord"],
    },
    interpretation: {
      upright:
        "This is a season of slowly blending different elements into harmony. Staying moderate rather than swinging to extremes creates a stable flow.",
      reversed:
        "A lopsided lifestyle or an impatient attitude may be throwing your balance off. It's time to slow down and practice a little restraint.",
    },
  },
  "major-15-devil": {
    name: "The Devil",
    summary: "A card of bondage, confronting the chains you placed on yourself.",
    keywords: {
      upright: ["bondage", "obsession", "temptation", "material desire"],
      reversed: ["freedom from bondage", "awareness", "overcoming", "recovery"],
    },
    interpretation: {
      upright:
        "Take a look at whether you're bound by a familiar habit, relationship, or desire that's actually holding you back. Recognizing that you placed the chains there yourself is the first step.",
      reversed:
        "You're beginning to free yourself from something that has held you back for a long time. The courage to face the problem head-on and cut it loose is growing.",
    },
  },
  "major-16-tower": {
    name: "The Tower",
    summary: "A card of sudden upheaval, where something must fall before it can be rebuilt.",
    keywords: {
      upright: ["sudden change", "collapse", "shocking realization", "liberation"],
      reversed: ["avoiding change", "delayed collapse", "inner turmoil", "fear"],
    },
    interpretation: {
      upright:
        "What looked solid on the outside was already crumbling within, and now it's revealed all at once. Painful as it is, this collapse is clearing ground for a sturdier foundation.",
      reversed:
        "You may find yourself trying hard to avoid an unexpected change or the collapse of an existing structure. The longer you put it off, the harder the impact may land.",
    },
  },
  "major-17-star": {
    name: "The Star",
    summary: "A card of quiet hope, arriving after the darkness.",
    keywords: {
      upright: ["hope", "healing", "inspiration", "recovery"],
      reversed: ["despair", "loss of faith", "lack of confidence", "disconnection"],
    },
    interpretation: {
      upright:
        "Having passed through a dark stretch, the light of hope begins to shine again. This is a time to quietly heal and restore your faith in the future.",
      reversed:
        "You may have lost hope and your belief in yourself is shaking. Don't forget that this darkness will not last forever.",
    },
  },
  "major-18-moon": {
    name: "The Moon",
    summary: "A card of uncertainty, feeling your way through the fog by instinct.",
    keywords: {
      upright: ["uncertainty", "the unconscious", "illusion", "fear"],
      reversed: ["confusion clearing", "hidden truth revealed", "anxiety easing", "waking from illusion"],
    },
    interpretation: {
      upright:
        "This is a time of walking through fog, where nothing feels entirely clear. Rather than letting vague anxiety take over, trust your instincts and move forward one step at a time.",
      reversed:
        "A confusing situation, or a truth that's been hidden, is gradually starting to come to light. Anxiety that had no real basis is beginning to settle.",
    },
  },
  "major-19-sun": {
    name: "The Sun",
    summary: "A card of the sun, where the clouds part and achievement comes into focus.",
    keywords: {
      upright: ["success", "vitality", "joy", "clarity"],
      reversed: ["temporary slump", "excessive optimism", "delayed achievement", "low energy"],
    },
    interpretation: {
      upright:
        "This is a bright period where the clouds part and everything becomes vividly clear. You can fully enjoy the achievement and joy that your effort has earned.",
      reversed:
        "A bright outcome may be arriving later than expected, or your energy may feel somewhat dimmed. Be careful that excessive optimism doesn't cause you to miss something important.",
    },
  },
  "major-20-judgement": {
    name: "Judgement",
    summary: "A card of awakening, looking back on the road traveled to answer a new calling.",
    keywords: {
      upright: ["awakening", "reassessment", "a calling", "new purpose"],
      reversed: ["self-criticism", "delayed decision", "lingering attachment to the past", "ignoring the call"],
    },
    interpretation: {
      upright:
        "This is a time to look back over the path you've walked, reassess yourself with fresh eyes, and answer a call toward the next stage. Find the courage to respond in the direction you truly want.",
      reversed:
        "You may be too caught up in past mistakes or failures to move forward. Consider whether you're holding yourself to an unfairly harsh standard.",
    },
  },
  "major-21-world": {
    name: "The World",
    summary: "A card of fulfillment, where a long journey completes its circle.",
    keywords: {
      upright: ["completion", "achievement", "integration", "the next stage"],
      reversed: ["incompleteness", "delay", "unfinished business", "stagnation"],
    },
    interpretation: {
      upright:
        "This is the moment a long journey draws itself into a complete circle. You're ready to fully acknowledge what you've achieved and step forward into a new one.",
      reversed:
        "You may be nearly there but unable to tie off that last knot. Rather than rushing to finish, take the time to calmly wrap up what remains.",
    },
  },

  // ---- Wands ----
  "wands-01-ace": {
    name: "Ace of Wands",
    summary: "A card of new passion, the first spark catching flame.",
    keywords: {
      upright: ["new passion", "inspiration", "the drive to begin", "creative impulse"],
      reversed: ["delayed start", "lack of motivation", "burnout", "blocked creativity"],
    },
    interpretation: {
      upright:
        "A new passion and fresh ideas are catching fire in your chest like a spark. This is the moment your drive to begin burns brightest.",
      reversed:
        "You may want to act but can't quite follow through, or your enthusiasm keeps fizzling out too soon. You need something to reignite that momentum.",
    },
  },
  "wands-02": {
    name: "Two of Wands",
    summary: "A card of planning, standing on what you've built to look toward the horizon.",
    keywords: {
      upright: ["planning", "long-term vision", "decisiveness", "expansion"],
      reversed: ["hesitation", "narrow view", "lack of planning", "fear"],
    },
    interpretation: {
      upright:
        "Standing on what you've already achieved, this is a time to look toward a wider world and plan your next move.",
      reversed:
        "You may be hesitating over your next step, unable to decide, or your view of things may have narrowed more than you realize.",
    },
  },
  "wands-03": {
    name: "Three of Wands",
    summary: "A card of expansion, gazing out to sea while you wait for the harvest.",
    keywords: {
      upright: ["expansion", "anticipation", "trade and cooperation", "waiting for results"],
      reversed: ["delay", "obstacles", "shortsighted planning", "failed cooperation"],
    },
    interpretation: {
      upright:
        "This is a time to watch the seeds you've planted grow toward fruition. An opportunity to step onto a bigger stage is opening up.",
      reversed:
        "The results you were hoping for may be taking longer than expected, or your plans may be unfolding differently than you imagined.",
    },
  },
  "wands-04": {
    name: "Four of Wands",
    summary: "A card of harmony, celebrating a shared achievement together.",
    keywords: {
      upright: ["celebration", "stability", "harmony", "the joy of the harvest"],
      reversed: ["unstable foundation", "delayed celebration", "conflict", "lack of belonging"],
    },
    interpretation: {
      upright:
        "This is a time to share and celebrate the fruits of your effort with others. Standing on stable ground, you can fully enjoy the happiness you've earned.",
      reversed:
        "Your foundation may be shaky, or a celebration and recognition you rightly deserve may be delayed.",
    },
  },
  "wands-05": {
    name: "Five of Wands",
    summary: "A card of rivalry, each side pushing for its own share.",
    keywords: {
      upright: ["rivalry", "conflict", "clashing opinions", "tension"],
      reversed: ["conflict resolving", "avoidance", "internal competition", "easing tension"],
    },
    interpretation: {
      upright:
        "Differing opinions and interests are colliding, stirring up a noisy sort of competition around you.",
      reversed:
        "The conflict may be gradually settling down, or you might be avoiding a confrontation you actually need to face directly.",
    },
  },
  "wands-06": {
    name: "Six of Wands",
    summary: "A card of victory, riding home in triumph as your effort earns recognition.",
    keywords: {
      upright: ["success", "recognition", "confidence", "victory"],
      reversed: ["lack of recognition", "arrogance", "delayed success", "diminished confidence"],
    },
    interpretation: {
      upright:
        "This is a time when your effort is recognized by those around you, and you ride home in well-earned triumph.",
      reversed:
        "You may not be getting the recognition you deserve, or it may be worth checking whether success has made you a little too pleased with yourself.",
    },
  },
  "wands-07": {
    name: "Seven of Wands",
    summary: "A card of defense, standing firm for what's worth protecting.",
    keywords: {
      upright: ["defense", "firmness", "facing a challenge", "conviction"],
      reversed: ["feeling overwhelmed", "giving up the defense", "lack of confidence", "weary resistance"],
    },
    interpretation: {
      upright:
        "You're standing firm against challenges to protect the high ground you've claimed. It takes courage to hold to your convictions.",
      reversed:
        "You may feel worn down by mounting pressure, or as though you no longer have the strength to keep holding your ground.",
    },
  },
  "wands-08": {
    name: "Eight of Wands",
    summary: "A card of swift progress, moving forward like an arrow in flight.",
    keywords: {
      upright: ["rapid progress", "movement", "news", "acceleration"],
      reversed: ["delay", "stagnation", "rashness", "crossed signals"],
    },
    interpretation: {
      upright:
        "Things are moving quickly now, and news you've been waiting for is arriving like an arrow in flight.",
      reversed:
        "A smooth flow may suddenly stall, or crossed signals could create confusion just when clarity matters most.",
    },
  },
  "wands-09": {
    name: "Nine of Wands",
    summary: "A card of endurance, holding the line even while wounded.",
    keywords: {
      upright: ["endurance", "vigilance", "resilience", "one last stand"],
      reversed: ["exhaustion", "excessive vigilance", "on the verge of giving up", "fatigue"],
    },
    interpretation: {
      upright:
        "You've endured a great deal and kept standing through it all. You're facing one last hurdle, so gather a little more strength to see it through.",
      reversed:
        "You may be worn out from staying on guard too long, or feeling ready to give up when you're almost there.",
    },
  },
  "wands-10": {
    name: "Ten of Wands",
    summary: "A card of perseverance, carrying a heavy load toward the finish line.",
    keywords: {
      upright: ["excessive responsibility", "burden", "perseverance", "shouldering the load"],
      reversed: ["setting the burden down", "delegating", "burnout", "reaching a limit"],
    },
    interpretation: {
      upright:
        "You're carrying too much alone, struggling toward your destination under a heavy load. The finish line isn't far now.",
      reversed:
        "It's time to share the load or set some of it down. Don't let yourself collapse from trying to carry everything by yourself.",
    },
  },
  "wands-11-page": {
    name: "Page of Wands",
    summary: "A card of exploration, waiting for news with curious eyes.",
    keywords: {
      upright: ["curiosity", "a spirit of exploration", "fresh news", "enthusiastic learning"],
      reversed: ["hasty planning", "lack of focus", "immaturity", "unreliable news"],
    },
    interpretation: {
      upright:
        "A pure curiosity and passion for learning something new is running high. Welcome news may be on its way to you.",
      reversed:
        "A plan may be too hastily made, or your attention may be scattered across too many things at once.",
    },
  },
  "wands-12-knight": {
    name: "Knight of Wands",
    summary: "A card of passion, riding forward without hesitation.",
    keywords: {
      upright: ["drive to act", "spirit of adventure", "passionate momentum", "boldness"],
      reversed: ["impulsiveness", "recklessness", "lack of consistency", "impulsive decisions"],
    },
    interpretation: {
      upright:
        "This is a season of passionate momentum, where your body moves before your mind finishes thinking. Bold action now brings good results.",
      reversed:
        "Acting without thinking things through could end up backfiring. You may need to rein in your pace before you burn out.",
    },
  },
  "wands-13-queen": {
    name: "Queen of Wands",
    summary: "A card of leadership, lighting up those around you with warm charisma.",
    keywords: {
      upright: ["confidence", "charisma", "warm leadership", "independence"],
      reversed: ["jealousy", "a need to show off", "lack of confidence", "stubbornness"],
    },
    interpretation: {
      upright:
        "You have the power to lead others with a charisma that's both warm and commanding. This is a good time to trust your own charm and ability.",
      reversed:
        "You may be overly conscious of others' opinions, or your confidence could be shaken by jealousy and comparison.",
    },
  },
  "wands-14-king": {
    name: "King of Wands",
    summary: "A card of leadership, stepping boldly to the front with a clear vision.",
    keywords: {
      upright: ["vision", "decisiveness", "leadership", "bold drive"],
      reversed: ["self-righteousness", "hasty decisions", "arrogance", "impulsive leadership"],
    },
    interpretation: {
      upright:
        "This is a time to lead others boldly, guided by a clear vision and the confidence to see it through.",
      reversed:
        "Too much confidence may tip into self-righteousness, or an impulsive decision could put you at odds with those around you.",
    },
  },

  // ---- Cups ----
  "cups-01-ace": {
    name: "Ace of Cups",
    summary: "A card of new feeling, the first fill of the heart's cup.",
    keywords: {
      upright: ["new emotion", "the start of love", "intuition", "emotional fullness"],
      reversed: ["suppressed emotion", "emptiness", "delayed love", "a closed heart"],
    },
    interpretation: {
      upright:
        "A new love and emotional fullness are rising in your heart like a cup overflowing. The more you open your feelings, the more flows in.",
      reversed:
        "You may be shutting your heart or suppressing your feelings, leaving you with a quiet sense of emptiness.",
    },
  },
  "cups-02": {
    name: "Two of Cups",
    summary: "A card of connection, two hearts raising their cups together.",
    keywords: {
      upright: ["connection", "mutual understanding", "partnership", "attraction"],
      reversed: ["unbalanced relationship", "misunderstanding", "distance", "one-sided feelings"],
    },
    interpretation: {
      upright:
        "Two hearts naturally meet, creating a deep bond and partnership between you.",
      reversed:
        "A lopsided connection or a misunderstanding may be throwing the relationship's balance off.",
    },
  },
  "cups-03": {
    name: "Three of Cups",
    summary: "A card of friendship, cups raised together to share in joy.",
    keywords: {
      upright: ["celebration", "friendship", "community", "shared joy"],
      reversed: ["feeling left out", "conflict", "excess indulgence", "a broken friendship"],
    },
    interpretation: {
      upright:
        "This is a time when you'll get to share joy and celebrate with those close to you. You draw real strength from your community.",
      reversed:
        "You may feel left out within a group, or cracks may be forming in a relationship you value.",
    },
  },
  "cups-04": {
    name: "Four of Cups",
    summary: "A card of reflection, missing what's right in front of you amid boredom.",
    keywords: {
      upright: ["boredom", "indifference", "reflection", "a missed opportunity"],
      reversed: ["new awareness", "acceptance", "breaking free of boredom", "renewed interest"],
    },
    interpretation: {
      upright:
        "You may be caught in a listless, indifferent mood, and missing an opportunity that's right in front of you.",
      reversed:
        "You're slowly emerging from a stagnant state of mind and beginning to take an interest in things around you again.",
    },
  },
  "cups-05": {
    name: "Five of Cups",
    summary: "A card of loss, looking at what remains before spilled cups.",
    keywords: {
      upright: ["loss", "regret", "sorrow", "what's missing"],
      reversed: ["recovery", "acceptance", "reclaiming hope", "the start of healing"],
    },
    interpretation: {
      upright:
        "Your mind is caught on something you've lost, steeped in sorrow and regret. But remember, there's still something left standing.",
      reversed:
        "You're beginning to steady yourself past the sorrow and look ahead again.",
    },
  },
  "cups-06": {
    name: "Six of Cups",
    summary: "A card of nostalgia, old memories blooming again.",
    keywords: {
      upright: ["memories", "innocence", "longing", "reunion"],
      reversed: ["clinging to the past", "immaturity", "avoiding reality", "an old connection"],
    },
    interpretation: {
      upright:
        "A warm memory from the past, or someone you've missed, is knocking at your heart once again. This is a time to recall the innocence you once had.",
      reversed:
        "You may be so caught up in the past that you're not fully living in the present.",
    },
  },
  "cups-07": {
    name: "Seven of Cups",
    summary: "A card of illusion, choices spread across the clouds.",
    keywords: {
      upright: ["options", "illusion", "imagination", "confusing temptation"],
      reversed: ["a clarified choice", "waking from illusion", "facing reality", "resolve"],
    },
    interpretation: {
      upright:
        "A range of possibilities and illusions spread out before you, leaving you unsure what to choose.",
      reversed:
        "You're breaking free of vague illusions, and what truly matters is coming into focus at last.",
    },
  },
  "cups-08": {
    name: "Eight of Cups",
    summary: "A card of seeking, leaving what you've built behind to find the road.",
    keywords: {
      upright: ["leaving", "searching for something better", "letting go", "an inner journey"],
      reversed: ["lingering attachment", "unable to leave", "a stalled goodbye", "staying out of fear"],
    },
    interpretation: {
      upright:
        "This is a time to leave behind what you've built and set out in search of something more meaningful.",
      reversed:
        "You know you need to leave, but attachment is keeping you from stepping away.",
    },
  },
  "cups-09": {
    name: "Nine of Cups",
    summary: "A card of fulfillment, every cup filled with what you wished for.",
    keywords: {
      upright: ["satisfaction", "wishes fulfilled", "fullness", "gratitude"],
      reversed: ["excessive greed", "surface satisfaction", "a hollow achievement", "dissatisfaction"],
    },
    interpretation: {
      upright:
        "What you've hoped for has come true, leaving you deeply satisfied. The more grateful you are for what you have, the fuller it feels.",
      reversed:
        "Things may look satisfying on the surface while you actually feel empty, or you may be wanting more than you truly need.",
    },
  },
  "cups-10": {
    name: "Ten of Cups",
    summary: "A card of harmony, a family gathered beneath a rainbow.",
    keywords: {
      upright: ["happiness", "harmony", "emotional security", "an ideal relationship"],
      reversed: ["discord at home", "a gap between ideal and reality", "broken harmony", "emotional disconnection"],
    },
    interpretation: {
      upright:
        "This is a time to enjoy a deeply peaceful, happy moment with the people you love.",
      reversed:
        "Beneath the surface, there may be cracks in a relationship, or the harmony you thought you had may be wavering.",
    },
  },
  "cups-11-page": {
    name: "Page of Cups",
    summary: "A card of pure feeling, watching the fish rise from the cup.",
    keywords: {
      upright: ["pure sensitivity", "creative inspiration", "kind news", "sensitivity"],
      reversed: ["emotional ups and downs", "immature expression", "daydreaming", "disappointing news"],
    },
    interpretation: {
      upright:
        "You're seeing the world through soft, unguarded eyes, and warm news or creative inspiration may be coming your way.",
      reversed:
        "Your emotions may be swinging widely, or you may be leaning more toward daydreams than reality.",
    },
  },
  "cups-12-knight": {
    name: "Knight of Cups",
    summary: "A card of romance, approaching gently with cup in hand.",
    keywords: {
      upright: ["romance", "an offer", "pursuing an ideal", "a courteous approach"],
      reversed: ["emotional inconsistency", "unrealistic expectations", "insincerity", "disappointment"],
    },
    interpretation: {
      upright:
        "This is a time of romantic feeling, when a heartfelt offer or gesture may come your way. You move gracefully toward your ideal.",
      reversed:
        "Words and true feelings may not match, or unrealistic expectations could lead to disappointment.",
    },
  },
  "cups-13-queen": {
    name: "Queen of Cups",
    summary: "A card of compassion, holding deep empathy within a closed cup.",
    keywords: {
      upright: ["empathy", "intuitive care", "emotional steadiness", "a capacity for compassion"],
      reversed: ["emotional excess", "self-pity", "empathy without boundaries", "emotional instability"],
    },
    interpretation: {
      upright:
        "You have the power to hold others with deep empathy and warm care. This is a time when you can handle emotions with real sensitivity.",
      reversed:
        "You may be too easily swept up in others' emotions, or caught in a moment of self-pity.",
    },
  },
  "cups-14-king": {
    name: "King of Cups",
    summary: "A card of composure, staying steady even on a rolling sea.",
    keywords: {
      upright: ["emotional balance", "mature leadership", "tolerance", "composure"],
      reversed: ["suppressed emotion", "inconsistency", "a manipulative attitude", "emotional unease"],
    },
    interpretation: {
      upright:
        "This is a time to lead others with a mature steadiness that stays warm without being swept away by emotion.",
      reversed:
        "You may look calm on the surface while suppressing your feelings underneath, or your mood may be shifting your attitude toward others.",
    },
  },

  // ---- Swords ----
  "swords-01-ace": {
    name: "Ace of Swords",
    summary: "A card of sharp insight, cutting straight through the fog.",
    keywords: {
      upright: ["clarity", "truth", "fresh insight", "decisiveness"],
      reversed: ["confusion", "poor judgment", "distorted truth", "indecision"],
    },
    interpretation: {
      upright:
        "The fog clouding your mind clears, and sharp insight cuts straight toward the truth.",
      reversed:
        "Your thoughts may be too tangled to judge clearly, or the truth may be reaching you in a distorted form.",
    },
  },
  "swords-02": {
    name: "Two of Swords",
    summary: "A card of conflict, balancing blindfolded between two truths.",
    keywords: {
      upright: ["a crossroads", "balance", "avoidance", "inner conflict"],
      reversed: ["resolution", "information overload", "suppressed conflict", "a confusing choice"],
    },
    interpretation: {
      upright:
        "Blindfolded and weighing both sides, you're putting off a difficult decision for now.",
      reversed:
        "A moment of decision you can no longer postpone is approaching, or conflict you've been suppressing is starting to surface.",
    },
  },
  "swords-03": {
    name: "Three of Swords",
    summary: "A card of heartbreak, facing a pain that pierces straight through.",
    keywords: {
      upright: ["heartbreak", "pain", "separation", "a painful truth"],
      reversed: ["the start of healing", "rising above the pain", "reconciliation", "recovery"],
    },
    interpretation: {
      upright:
        "You're facing a painful truth or a parting that cuts straight through the heart. It hurts, but it's a moment you need to face.",
      reversed:
        "A wound that ached is slowly healing, and you're beginning to gather yourself again.",
    },
  },
  "swords-04": {
    name: "Four of Swords",
    summary: "A card of recovery, laying down the sword to rest in quiet.",
    keywords: {
      upright: ["rest", "recovery", "recharging", "a pause"],
      reversed: ["forced rest", "delayed recovery", "burnout", "uneasy stillness"],
    },
    interpretation: {
      upright:
        "You need time to set down a tired body and mind and quietly recover. This pause is itself preparation for what comes next.",
      reversed:
        "You may want to rest but can't, or an unwanted stillness may be leaving you uneasy rather than restored.",
    },
  },
  "swords-05": {
    name: "Five of Swords",
    summary: "A card of hollow conflict, a victory that still tastes bitter.",
    keywords: {
      upright: ["conflict", "a draining win", "a sense of defeat", "tension"],
      reversed: ["reconciliation", "the aftertaste of conflict", "accepting defeat", "an attempt to mend things"],
    },
    interpretation: {
      upright:
        "Even a win leaves a bitter taste in this draining, tense conflict. A battle of pride may be wearing the relationship down.",
      reversed:
        "You're clearing away the aftertaste of a past fight and starting to look for a thread toward reconciliation.",
    },
  },
  "swords-06": {
    name: "Six of Swords",
    summary: "A card of transition, moving on along calmer waters.",
    keywords: {
      upright: ["transition", "a move toward recovery", "gradual stability", "leaving"],
      reversed: ["stagnation", "a reluctant move", "delayed recovery", "staying stuck in the past"],
    },
    interpretation: {
      upright:
        "This is a time to leave a difficult situation behind and quietly move toward calmer waters.",
      reversed:
        "You may be stuck in the past, unable to move forward even when it's time to leave.",
    },
  },
  "swords-07": {
    name: "Seven of Swords",
    summary: "A card of strategy and evasion, slipping away with the swords in hand.",
    keywords: {
      upright: ["strategy", "secrecy", "avoidance", "cunning"],
      reversed: ["getting caught", "a guilty conscience", "what was hidden coming to light", "a turn toward honesty"],
    },
    interpretation: {
      upright:
        "Rather than a direct confrontation, you're trying to work around the problem strategically, or handling it your own quiet way.",
      reversed:
        "Something you've been hiding may come to light, or a shortcut you've been relying on may stop working.",
    },
  },
  "swords-08": {
    name: "Eight of Swords",
    summary: "A card of restriction, bound by ropes you tied yourself.",
    keywords: {
      upright: ["trapped thinking", "limited options", "fear", "helplessness"],
      reversed: ["breaking free of restrictive thinking", "awareness", "a new perspective", "taking action"],
    },
    interpretation: {
      upright:
        "You feel trapped in a mindset of your own making, as though you have no options left. In truth, the blindfold is one you can remove yourself.",
      reversed:
        "You're beginning to break free of the fear that bound you and realize you actually have more choices than you thought.",
    },
  },
  "swords-09": {
    name: "Nine of Swords",
    summary: "A card of anxiety, lying awake beneath a weight of worry.",
    keywords: {
      upright: ["anxiety", "nightmarish worry", "guilt", "a sleepless night"],
      reversed: ["easing anxiety", "letting go of worry", "reaching out for help", "the start of relief"],
    },
    interpretation: {
      upright:
        "Worry and anxiety are keeping your mind racing late into the night. Your fear may be more exaggerated than the reality.",
      reversed:
        "The weight pressing down on you is starting to lift, or you're beginning to open up to someone about what you've been carrying alone.",
    },
  },
  "swords-10": {
    name: "Ten of Swords",
    summary: "A card of completion, hitting bottom just before the dawn.",
    keywords: {
      upright: ["an ending", "hitting rock bottom", "a sense of betrayal", "the end of a painful chapter"],
      reversed: ["the start of recovery", "rising from rock bottom", "resistance", "slow healing"],
    },
    interpretation: {
      upright:
        "You're at the tail end of a situation so difficult it can't get much worse. Ironically, that also means a new beginning is close at hand.",
      reversed:
        "You may be starting to rise up from rock bottom, or still holding onto a situation that needs to end.",
    },
  },
  "swords-11-page": {
    name: "Page of Swords",
    summary: "A card of observation, watching the wind for what stirs it.",
    keywords: {
      upright: ["curious observation", "new information", "sharpness", "watchfulness"],
      reversed: ["hasty judgment", "rumor", "scattered attention", "immature words or actions"],
    },
    interpretation: {
      upright:
        "With sharp eyes, you're keeping watch on your surroundings and quick to pick up on new information.",
      reversed:
        "You may be judging too quickly on unverified information, or speaking before you've thought things through.",
    },
  },
  "swords-12-knight": {
    name: "Knight of Swords",
    summary: "A card of resolve, charging forward with sword raised.",
    keywords: {
      upright: ["swift action", "direct decisiveness", "logical drive", "firmness"],
      reversed: ["rashness", "an aggressive attitude", "reckless charging", "thoughtless words or actions"],
    },
    interpretation: {
      upright:
        "This is a time of firm resolve, charging straight toward your goal without hesitation.",
      reversed:
        "Pushing forward too hard without pacing yourself could put you at odds with the people around you.",
    },
  },
  "swords-13-queen": {
    name: "Queen of Swords",
    summary: "A card of wisdom, setting emotion aside to point straight at the truth.",
    keywords: {
      upright: ["clear judgment", "independence", "candor", "clear-eyed wisdom"],
      reversed: ["cynicism", "excessive criticism", "emotional distance", "sharp words or behavior"],
    },
    interpretation: {
      upright:
        "With clear judgment unclouded by emotion, this is a time when you can pinpoint the truth precisely.",
      reversed:
        "Overly sharp words or a cynical attitude could create distance in your relationships.",
    },
  },
  "swords-14-king": {
    name: "King of Swords",
    summary: "A card of authority, judging fairly through logic and principle.",
    keywords: {
      upright: ["logical authority", "fair judgment", "clear principles", "intellectual leadership"],
      reversed: ["dogmatic judgment", "excessive coldness", "abuse of authority", "inflexibility"],
    },
    interpretation: {
      upright:
        "This is a time to judge and decide fairly, grounded in logic and principle rather than emotion.",
      reversed:
        "Clinging too rigidly to principle could lead to an overly cold or dogmatic decision.",
    },
  },

  // ---- Pentacles ----
  "pentacles-01-ace": {
    name: "Ace of Pentacles",
    summary: "A card of real opportunity, a seed placed right in your hand.",
    keywords: {
      upright: ["new opportunity", "a material beginning", "a seed of stability", "tangible results"],
      reversed: ["a missed opportunity", "an unstable start", "lack of planning", "delayed results"],
    },
    interpretation: {
      upright:
        "A seed of real opportunity rests in your hand. Plant it carefully and tend it, and it will grow into something solid.",
      reversed:
        "You may be letting a good opportunity slip past, or starting out without enough preparation, leaving the foundation shaky.",
    },
  },
  "pentacles-02": {
    name: "Two of Pentacles",
    summary: "A card of balance, juggling with both hands steady.",
    keywords: {
      upright: ["balance", "prioritizing", "adaptability", "juggling multiple tasks"],
      reversed: ["loss of balance", "overload", "confused priorities", "financial instability"],
    },
    interpretation: {
      upright:
        "You're skillfully juggling several things at once, finding your balance as you go.",
      reversed:
        "You may be carrying too much at the same time, and the balance could be starting to give way.",
    },
  },
  "pentacles-03": {
    name: "Three of Pentacles",
    summary: "A card of collaboration, building something recognized together.",
    keywords: {
      upright: ["collaboration", "skill", "recognized ability", "teamwork"],
      reversed: ["failed collaboration", "underrated ability", "discord", "poor coordination"],
    },
    interpretation: {
      upright:
        "Combining each person's skill, this collaboration is leading toward a good result.",
      reversed:
        "Things may not be clicking within the team, or your ability may not be getting the recognition it deserves.",
    },
  },
  "pentacles-04": {
    name: "Four of Pentacles",
    summary: "A card of stability and attachment, holding tightly to what you've built.",
    keywords: {
      upright: ["stability", "thrift", "possessiveness", "seeking security"],
      reversed: ["attachment", "stinginess", "resistance to change", "anxiety over material things"],
    },
    interpretation: {
      upright:
        "This is a time to protect what you've built and settle into stability. Just be careful not to grip it too tightly.",
      reversed:
        "Fear of losing what you have may be turning into attachment, or making you overly stingy.",
    },
  },
  "pentacles-05": {
    name: "Five of Pentacles",
    summary: "A card of hardship, enduring want out in the cold.",
    keywords: {
      upright: ["lack", "a sense of exclusion", "financial hardship", "isolated struggle"],
      reversed: ["the start of recovery", "accepting help", "overcoming a crisis", "finding support"],
    },
    interpretation: {
      upright:
        "You may feel a sense of lack, as though enduring a cold, difficult season all alone. In truth, help may be closer than you realize.",
      reversed:
        "You're emerging from a hard stretch and beginning to accept a helping hand as you recover.",
    },
  },
  "pentacles-06": {
    name: "Six of Pentacles",
    summary: "A card of generosity, weighing out a fair share for both sides.",
    keywords: {
      upright: ["sharing", "balanced giving", "generosity", "support"],
      reversed: ["unfair sharing", "one-sided dependence", "conditional help", "imbalance"],
    },
    interpretation: {
      upright:
        "Generosity flows both ways as you give and receive, creating a balanced, supportive relationship.",
      reversed:
        "Help may be flowing in only one direction, or coming with strings attached.",
    },
  },
  "pentacles-07": {
    name: "Seven of Pentacles",
    summary: "A card of patience, watching a young tree grow.",
    keywords: {
      upright: ["patience", "assessment", "long-term investment", "waiting for the harvest"],
      reversed: ["impatience", "lack of results", "a poor investment", "patience running out"],
    },
    interpretation: {
      upright:
        "A little more patience is needed before your efforts bear fruit. Take a calm look at what you've accomplished so far.",
      reversed:
        "You may be growing impatient because results haven't come as expected, or it may be time to reconsider where you're investing your energy.",
    },
  },
  "pentacles-08": {
    name: "Eight of Pentacles",
    summary: "A card of craft, honing skill one careful stitch at a time.",
    keywords: {
      upright: ["mastery", "diligence", "steady practice", "craftsmanship"],
      reversed: ["lack of care", "repeated mistakes", "boredom", "declining quality"],
    },
    interpretation: {
      upright:
        "This is a time of devoting yourself fully to one craft, steadily sharpening your skill. Diligence eventually becomes mastery.",
      reversed:
        "Your interest or care may be flagging, causing the quality of your work to slip.",
    },
  },
  "pentacles-09": {
    name: "Nine of Pentacles",
    summary: "A card of ease, savoring a garden you tended yourself.",
    keywords: {
      upright: ["independence", "abundant harvest", "self-sufficiency", "comfort"],
      reversed: ["excessive restraint", "isolated achievement", "financial insecurity", "impulsive spending"],
    },
    interpretation: {
      upright:
        "This is a time to enjoy a comfortable, independent sense of satisfaction in what you've built through your own effort.",
      reversed:
        "You may not be fully enjoying what you've achieved, or impulsive spending could be shaking your stability.",
    },
  },
  "pentacles-10": {
    name: "Ten of Pentacles",
    summary: "A card of legacy, abundance carried across generations.",
    keywords: {
      upright: ["legacy", "long-term abundance", "family and tradition", "a stable foundation"],
      reversed: ["family conflict", "financial loss", "an unstable legacy", "a break from tradition"],
    },
    interpretation: {
      upright:
        "The stability you've built over a long time becomes a solid foundation that carries into the next generation.",
      reversed:
        "Be mindful of conflict within family or community, or an unexpected financial loss.",
    },
  },
  "pentacles-11-page": {
    name: "Page of Pentacles",
    summary: "A card of new study, examining the coin with careful attention.",
    keywords: {
      upright: ["the start of learning", "a practical plan", "a diligent attitude", "exploring a new opportunity"],
      reversed: ["an unrealistic plan", "laziness", "lack of focus", "delayed learning"],
    },
    interpretation: {
      upright:
        "This is a time to set a practical goal and begin learning it diligently. Treat each small opportunity with care.",
      reversed:
        "A plan may be unrealistic, or a lack of consistency may be keeping your learning from turning into real progress.",
    },
  },
  "pentacles-12-knight": {
    name: "Knight of Pentacles",
    summary: "A card of diligence, moving slowly but surely.",
    keywords: {
      upright: ["consistency", "responsibility", "careful progress", "diligent follow-through"],
      reversed: ["stagnation", "excessive caution", "stubbornness", "laziness"],
    },
    interpretation: {
      upright:
        "Without rushing, you're moving toward your goal one careful, steady step at a time.",
      reversed:
        "Excessive caution may have you stuck in place, or stubbornness may be keeping you from embracing change.",
    },
  },
  "pentacles-13-queen": {
    name: "Queen of Pentacles",
    summary: "A card of stewardship, tending a household on fertile ground.",
    keywords: {
      upright: ["practical care", "a sense of security", "a well-tended home", "down-to-earth wisdom"],
      reversed: ["overwork", "work-life imbalance", "material insecurity", "neglecting self-care"],
    },
    interpretation: {
      upright:
        "With practical wisdom, this is a time to generously care for both yourself and those around you, building a secure, well-tended life.",
      reversed:
        "You may be so busy caring for others that you're neglecting yourself, or your work-life balance may be slipping.",
    },
  },
  "pentacles-14-king": {
    name: "King of Pentacles",
    summary: "A card of prosperity, standing on solid ground you built yourself.",
    keywords: {
      upright: ["material success", "a stable foundation", "dependable leadership", "abundance"],
      reversed: ["attachment to material things", "stubborn authority", "financial misjudgment", "complacency"],
    },
    interpretation: {
      upright:
        "After long effort, this is a time when you've built a stable foundation and real abundance, and can lead those around you from solid ground.",
      reversed:
        "You may be overly attached to material success, or growing too comfortable to keep growing.",
    },
  },
};
