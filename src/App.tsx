import React, { useState } from 'react';
import { Rainbow, Sparkles, Shuffle, Languages, Home, Heart, Flower } from 'lucide-react';

// Chakra data with corresponding colors and affirmations
const chakras = [
  {
    name: {
      en: "Root (Muladhara)",
      zh: "根輪 (Muladhara)"
    },
    color: "bg-red-500",
    textColor: "text-white",
    affirmations: [
  { en: "I create stability in my adult life so that my inner child feels safe", zh: "我在成人生活裡創造穩定，俾使我的內在小孩感到安全" },
  { en: "With money, I want to create the most beautiful things in life", zh: "有了錢，我想創造生活中最美好的事物" },
  { en: "Everything goes smoothly, and that's exactly how it is now", zh: "每件事情都很順遂，目前情況正是如此" },
  { en: "Money is a manifestation of love and support for me and others", zh: "金錢對我與他人都是愛與支持的呈現" },
  { en: "There is absolutely nothing to worry about", zh: "絕對沒有什麼事好擔心" },
  { en: "I bless myself with lighthearted love", zh: "我用輕鬆的愛來祝福自己" },
  { en: "Everyone who enters my home feels welcome and loved", zh: "每個進入我家的人，都覺得受歡迎，並且被愛" },
  { en: "Wealth means joy and freedom", zh: "富裕就是快樂和自由" },
  { en: "I maintain financial balance", zh: "我在財務上能保持收支平衡" },
  { en: "Money itself is neither good nor bad; it depends on how you perceive it", zh: "金錢本身無所謂的好壞，就看你如何認定" },
  { en: "I sincerely thank for the supply of everything I need", zh: "我由衷地感謝所有我需要的東西都有人供應" },
  { en: "My whole body is as beautiful and natural as my face and my hands", zh: "我整個身體正如我的臉和手一樣美麗與自然" },
  { en: "I enjoy home life and share this joy with others", zh: "我享受家居生活，並把這喜悅跟別人分享" },
  { en: "The world is an abundant place", zh: "這世界是個豐富的地方" },
  { en: "I pay attention to the messages my body conveys", zh: "我注意身體傳達給我的訊息" },
  { en: "I welcome abundance into my life", zh: "我歡迎豐盈進入我的生命" },
  { en: "My body is my close friend", zh: "身體是我親密的朋友" },
  { en: "I know how to maintain health", zh: "我知道如何保持健康" },
  { en: "Earth's health is important to me", zh: "地球的健康對我而言是很重要的" },
  { en: "I have the time, money, and support I desire now", zh: "現在我擁有我想要的時間、金錢與協助" },
  { en: "Every cell in my body joyfully responds to my positive images", zh: "我身體的每個細胞都對我積極的心像做喜悅的回應" },
  { en: "My body is strong, and it heals itself", zh: "我的身體是強壯的，它會療癒自己" },
  { en: "I am fully open to receive the abundance and wealth the universe offers", zh: "我完全敞開心胸以接受宇宙提供給我的豐富與財富" },
  { en: "Wherever I go, I am protected and loved", zh: "無論我到何處，我總是被保護也被愛" },
  { en: "I pay my bills with gratitude and love", zh: "我懷著感謝與愛的心情來付出自己的帳單" },
  { en: "The earth provides wealth and abundance", zh: "大地供應我們財富與豐富" },
  { en: "Healthy and nutritious food energizes me and keeps me balanced", zh: "有益健康及有營養的食物給我能量，並且讓我保持均衡" },
  { en: "My home is beautiful, and I fill each room with love and joy", zh: "我家很美，我讓每個房間都充滿愛與喜悅" },
  { en: "I keep my body, mind, and spirit healthy", zh: "我使自己的身、心、靈都很健康" },
  { en: "I love doing what I enjoy, and it brings financial rewards", zh: "我喜歡做我愛做的事，並因此得到金錢的回饋" },
  { en: "I enjoy making the most of my money", zh: "我喜歡活用我的錢" },
  { en: "I take care of my body with love and gratitude", zh: "我懷著愛與感恩的心情來照顧我的身體" },
  { en: "I am not only wealthy but also versatile", zh: "我不但富有而且多才多藝" },
  { en: "I am amazed at the incredible capabilities within my body", zh: "我對自身體內不可思議的能力感到讚嘆" },
  { en: "My inner wealth brings me much pleasure", zh: "我內在的財富給我許多樂趣" }
]

  },
  {
    name: {
      en: "Sacral (Svadhisthana)",
      zh: "臍輪 (Svadhisthana)"
    },
    color: "bg-orange-400",
    textColor: "text-black",
    affirmations: [
  { en: "Everything in the present moment is vibrant and full of life", zh: "當下每件事物都是活力充沛的" },
  { en: "I joyfully live in the present moment", zh: "我喜悅地活在當下" },
  { en: "We all enjoy the wealth and abundance of the universe in meaningful ways", zh: "我們每個人都以有意義的方式，來享受宇宙間的財富與豐盈" },
  { en: "My heart is filled with joy because my life is full of wonderful blessings", zh: "我的心洋溢著喜悅，因為我的生活充滿了美好的祝福" },
  { en: "Today I treat myself well and glow all day", zh: "今天我盛宴款待自己，因此整天都容光煥發" },
  { en: "I love to inspire and motivate those around me", zh: "我喜歡鼓舞並激勵我周圍的人" },
  { en: "I easily adapt to the people, places, and things around me", zh: "我很容易適應我周遭的人、地方和事物" },
  { en: "By caring for my body with love, I gradually understand its hidden desires", zh: "當我帶著愛去關心身體，我逐漸了解身體所傳達出的隱密願望" },
  { en: "I expand my creativity with love and joy to its fullest potential", zh: "我帶著愛和喜悅來擴展創造力，而達到其極限" },
  { en: "I love my unique and wonderful life", zh: "我愛我獨一無二而且美好的生活" },
  { en: "My inner child teaches me to relax and enjoy life", zh: "我的內在小孩教我如何放鬆並享受生命" },
  { en: "Everyone deserves a happy and fulfilling life", zh: "每個人都值得擁有快樂且充實的生活" },
  { en: "Every day is special and precious because I only have it once", zh: "每一天都是特別的也是珍貴的，因為我只能擁有一次" },
  { en: "I freely and lovingly create things that enrich and beautify my life", zh: "我自由地、帶著愛去創造那些使我生活更豐富、更美好的事物" },
  { en: "I recognize sexuality as a sacred expression", zh: "我知道性是一種神聖的表現" },
  { en: "Every cell in my body is filled with infinite joyous energy", zh: "我身體的每個細胞都充滿了無限的喜悅能量" },
  { en: "Losing control is perfectly okay", zh: "失去控制也沒關係" },
  { en: "I am grateful for the company of good friends", zh: "我很感恩有好朋友的陪伴" },
  { en: "Life is beautiful, and I give back for all the goodness I receive", zh: "生命是美好的，我極盡所能地回饋我所接受的所有善" },
  { en: "Play is an important part of my life", zh: "玩是我生命中的重要一部份" },
  { en: "I enjoy my sexual energy, which is natural and beautiful", zh: "我歡愉於我的性能量，那是自然而且美好的" },
  { en: "The atmosphere in my home is happy and bright", zh: "我家的氣氛是快樂且明亮的" },
  { en: "I see vibrant life energy everywhere", zh: "我隨處都看見旺盛的生命能量" },
  { en: "I allow myself to enjoy sexuality", zh: "我允許自己享受性" },
  { en: "Everyone has enough space to joyfully express our unique creativity", zh: "每個人都有足夠的空間喜悅地展示我們獨一無二的創造力" },
  { en: "You can find joy in unexpected places", zh: "你可以在意想不到的地方找到快樂" },
  { en: "I am happy to be here", zh: "我很高興我在這裏" },
  { en: "I joyfully open my heart to the joyful changes in life", zh: "我喜悅地敞開心胸來接受生命中快樂的轉變" },
  { en: "Today I allow myself to have fun and fully enjoy", zh: "今天我允許自己玩得很開心、很盡興" },
  { en: "By affirming life and demonstrating the joy of living, my love, power, and wisdom grow", zh: "藉由肯定生命來展現活著的喜悅，我的愛、力量與智慧與之成長" },
  { en: "Sex relaxes me and makes me calm and beautiful", zh: "性使我放鬆，並使我平靜、美麗" },
  { en: "I enjoy encountering new ideas", zh: "我喜歡接觸新的想法" },
  { en: "I move toward my goals with ease and joy", zh: "我可以輕鬆且喜悅地朝著目標前進" },
  { en: "Even the smallest daily things can bring me happiness and peace", zh: "微不足道的日常事物也能使我充滿快樂與平靜" },
  { en: "Every morning when I wake up, I look forward to the day's gifts with joy", zh: "每天早晨我醒來，都喜悅地期待這一天會帶給我的禮物" }
]

  },
  {
    name: {
      en: "Solar Plexus (Manipura)",
      zh: "太陽輪 (Manipura)"
    },
    color: "bg-yellow-300",
    textColor: "text-black",
    affirmations: [
  { en: "Calmness begins within", zh: "平靜從自身開始" },
  { en: "I make time to rest", zh: "我安排時間休息" },
  { en: "I have the power and ability to live a meaningful life", zh: "我有力量和能力，去過有意義的生活" },
  { en: "Absolute tranquility resides in my heart", zh: "絕對的靜謐，常駐我心" },
  { en: "I take responsibility for my life", zh: "我對我的生命負責" },
  { en: "As long as I trust myself, I can face any situation", zh: "只要我信任我自己就可以面對任何情況" },
  { en: "I know I am the source of all love", zh: "我知道我是所有愛的源頭" },
  { en: "I am who I am, and I am good", zh: "我就是我，我很好" },
  { en: "I know I deserve a beautiful life", zh: "我知道我值得擁有美好的生活" },
  { en: "I no longer identify with the fears I create", zh: "我不再認同自己創造出的恐懼" },
  { en: "Ultimately, I am only facing myself", zh: "我面對的終究只有自己" },
  { en: "Only I can make myself truly happy", zh: "只有我能夠使自己真正快樂" },
  { en: "I know the difference between true needs and feelings of lack", zh: "我知道真實的需求和匱乏感之間的區別" },
  { en: "In my life, I am the shining sun", zh: "在我的生命中，我就是發光的太陽" },
  { en: "I am willing to face changes in life", zh: "我願意面對生命的改變" },
  { en: "I am unique, and so is everyone else", zh: "我是獨一無二的，而別人也是如此" },
  { en: "I accept that I have retained old patterns that no longer serve me", zh: "我接納自己一直保留著，那些不適用的舊模式" },
  { en: "Heaven has always been within my heart", zh: "天堂一直在我心中" },
  { en: "I am valuable and welcome just as I am", zh: "我是有價值並且受觀迎的，我目前就是如此" },
  { en: "I always receive the right timing, place, and support", zh: "我總是得到天時、地利、人和之便" },
  { en: "I am great, just as I am now", zh: "我很棒，我目前正是如此" },
  { en: "I am a unique individual, and my mission will be fulfilled in everyday life", zh: "我是個獨一無二的個體，我的使命會在日常生活中實現" },
  { en: "I live in the present", zh: "我活在當下" },
  { en: "I welcome everything that makes me happy", zh: "我歡迎所有令我快樂的事情" },
  { en: "I know I am powerful and use my strengths in various ways", zh: "我知道我很有力量，並且用不同的方式來使用它們" },
  { en: "I can feel my emotions without feeling endangered", zh: "我可以感受我的情緒，而不覺得受到傷害" },
  { en: "I affirm and recognize my inner beauty", zh: "我肯定並了解自己內在的美" },
  { en: "I am a wonderful, radiant, and divine being", zh: "我是一個很棒的、發光的、並且神聖的個體" },
  { en: "I am in absolute safety", zh: "我身處絕對安全之中" },
  { en: "I am peaceful, and everything is going well", zh: "我很平安，而且一切都很順利" },
  { en: "I see goodness in myself and everyone else", zh: "我能看到自己和每個人的良善" },
  { en: "I affirm myself", zh: "我肯定我自己" },
  { en: "I desire positive change, and I accept myself as I am now", zh: "我渴望正向的改變，因此我接納目前的自己" },
  { en: "I am truth, I am life, I am one with the universe", zh: "我是真理，我是生命，我跟宇宙萬物合一" },
  { en: "I feel safe whether or not my partner agrees with me", zh: "無論我的伙伴是否認同我，我都能擁有安全感" }
]

  },
  {
    name: {
      en: "Heart (Anahata)",
      zh: "心輪 (Anahata)"
    },
    color: "bg-green-500",
    textColor: "text-white",
    affirmations: [
  { en: "The treasure I have been seeking is within my heart", zh: "我一直在尋找的寶藏，就在我心中" },
  { en: "The world heals wounds with love", zh: "世界用愛來療癒傷口" },
  { en: "I fill myself with love and extend it to others", zh: "我讓愛佈滿全身，並推及他人" },
  { en: "By respecting myself, my world becomes better", zh: "藉著自重，我的世界變得更好" },
  { en: "I love learning, growing, and changing", zh: "我喜歡學習、成長和改變" },
  { en: "I nurture myself with loving and caring thoughts", zh: "我用愛和關心的想法來滋潤自己" },
  { en: "Whether towards myself or others, I choose loving thoughts", zh: "無論對自己或別人，我都選擇愛的想法" },
  { en: "I combine love and light to create a new world", zh: "我結合愛與光，因而創造了一個嶄新的世界" },
  { en: "I am bringing heaven to earth", zh: "我正把天堂帶到人間" },
  { en: "I love myself and enjoy living in a great and sacred way", zh: "我愛自己並且喜歡以偉大、神聖的方式來過日子" },
  { en: "I open my heart to receive love and abundance in life", zh: "我敞開心胸來迎接，生命中的愛與豐盈" },
  { en: "Since I experience inner love and peace, I am willing to give love and peace", zh: "由於我體驗到內在的愛與平靜，所以我也願意給出愛與平靜" },
  { en: "I look at my partner with loving eyes", zh: "我以愛的眼光，來看我的伙伴" },
  { en: "My goal is to give love at every moment", zh: "我的目標就是在每個片刻都付出愛" },
  { en: "My heart is filled with infinite love", zh: "在我心中，充滿了無限的愛" },
  { en: "It is wonderful to be loved", zh: "被愛的是美好的" },
  { en: "Every day I love myself more", zh: "每天我都更愛我自己" },
  { en: "I sincerely accept everything as part of me", zh: "我由衷地接納每件事，那都是我的一部分" },
  { en: "When I transform anger into healing love, beautiful changes happen", zh: "當我把憤怒的能量轉變成愛的療癒能量時，就會產生美好的轉變" },
  { en: "Being loved is the easiest thing because it is my true nature", zh: "被愛是世界上最輕易的事情，因為那是我真實的本性" },
  { en: "I know that behind all hatred there is love", zh: "我知道在所有仇恨的背後有愛存在" },
  { en: "I understand that everyone wants to be loved", zh: "我瞭解每個人都想得到愛" },
  { en: "To my partner, I am lovable; to me, he is lovable too", zh: "對我的伙伴而言，我是可愛的；對我而言，對方也是可愛的" },
  { en: "I let love flow into my world, blessing everyone and everything", zh: "我讓愛流入我的世界，祝福每個人和每件事" },
  { en: "I find God's love in the eyes of those around me", zh: "我在周圍人們的眼裡，找到神的愛" },
  { en: "Because I choose loving thoughts, I feel surrounded by a loving environment", zh: "因為我選擇愛的想法，所以我感覺身處在充滿了愛的環境" },
  { en: "True love has no hatred", zh: "真愛裡面，沒有憎恨" },
  { en: "My heart is filled with love to welcome each new day", zh: "我心中充滿著愛，來迎接每個嶄新的日子" },
  { en: "Any qualities I wish to see in my partner can be found within me", zh: "任何我希望在伙伴身上出現的特質，都可以在我的內心找到" },
  { en: "I enjoy getting to know new friends step by step", zh: "我喜歡逐步地認識新朋友" },
  { en: "Loving oneself begins with forgiving oneself", zh: "愛自己，始於寬恕自己" },
  { en: "Now I am willing to freely and openly give and receive love", zh: "現在我願意自由且公開地付出及接受愛" },
  { en: "As I learn to develop self-respect and self-love, I become more patient with myself", zh: "當我學著發展自重和自愛的時候，我對自己更有耐心" },
  { en: "I let go of expectations and open my heart to experience the abundance brought by differences", zh: "我放下期望而敞開心胸去體驗任何差異帶給我的豐盈" },
  { en: "I love him, so I show my true self without hiding. That's why I thank him", zh: "我愛他，所以在他面前我毫不隱瞞的呈現真實的自己。這是我感謝他的原因。" }
]

  },
  {
    name: {
      en: "Throat (Vishuddha)",
      zh: "喉輪 (Vishuddha)"
    },
    color: "bg-blue-500",
    textColor: "text-white",
    affirmations: [
  { en: "It is wonderful to live in the present", zh: "活在當下是很棒的" },
  { en: "Through clear and loving actions, I have clear and loving experiences", zh: "藉著清楚且帶著愛的行為，我擁有清楚且帶著愛的經驗" },
  { en: "I am willing to open up and let others know me", zh: "我願意敞開心胸，讓別人了解我" },
  { en: "Living in the present empowers me", zh: "活在當下使我充滿力量" },
  { en: "I am free to travel anywhere", zh: "我可以自由自在地去任何地方旅行" },
  { en: "In truth, giving and receiving are the same", zh: "在真理中，付出和接受是同一件事" },
  { en: "What I give to others returns to me many times over", zh: "我贈與出去的，會更多倍地回饋到我身上" },
  { en: "I take responsibility for myself and do not blame others", zh: "我對自己負責，不為任何事情責怪任何人" },
  { en: "Today, my energy is radiant and peaceful. I can express my anger constructively.", zh: "今天我的能量是發光且平靜的。我可以用建設性的方式，來表達我的憤怒。" },
  { en: "I communicate love, truth, and care", zh: "我傳達愛、真實和關懷" },
  { en: "I am willing to experience each day in a new way", zh: "我願意以嶄新的方式來經驗每一天" },
  { en: "My life is deep, organized, and relaxed", zh: "我的生命是有深度，有規律，並且放鬆的" },
  { en: "I protect and heal the earth in various ways", zh: "我用各種不同的方式來保護並療癒地球" },
  { en: "I observe my feelings rather than telling others how to feel", zh: "我觀察自己的感覺，而非告訴別人應該如何感覺" },
  { en: "My work is ideal and brings me joy", zh: "我的工作是理想的，並帶當我樂趣" },
  { en: "When I am allowed to be my true self, I am happy to give", zh: "當我被允許成為真實的自己時，我樂於付出" },
  { en: "I happily share my knowledge and skills with those who are open to me", zh: "我快樂地分享我的知識和能力，給那些對我敞開心胸的人" },
  { en: "I know where to set boundaries and say 'no' when necessary", zh: "我知道界線設在什麼地方，並在必要的時候說”不”" },
  { en: "I choose higher awareness, understanding, freedom, and compassion", zh: "我選擇高層意識、善解、自由和慈悲" },
  { en: "I approach others with confidence and love", zh: "我帶著信心和愛去接近別人" },
  { en: "I choose my words carefully because they create reality", zh: "我仔細地選擇我的話語，因為它們會創造現實" },
  { en: "I give myself freedom to have new and radiant experiences", zh: "我給自己自由去擁有嶄新且發光的經驗" },
  { en: "My mission is to live my life in my own way", zh: "我的任務就是以自己的方式來過日子" },
  { en: "I am willing to let go of past pain and forgive myself and others", zh: "我願意放下過去的傷痛，寬恕自己也寬恕別人" },
  { en: "Today, I have enough time to do everything that needs to be done", zh: "今天我有足夠的時間去做任何需要做的事情" },
  { en: "I let go of my expectations", zh: "我放下我的期待" },
  { en: "When I ask others for help, I am still worthy of love", zh: "在我請求他人幫助時，我也依然值得被愛" },
  { en: "By understanding and accepting myself, I reveal my life", zh: "藉著了解並接納自己，我呈現我的生命" },
  { en: "I do my job well and receive recognition and praise from everyone", zh: "我把工作做得很好，並受到每個人的肯定與讚美" },
  { en: "The past is over", zh: "過去的事情已經過去了" },
  { en: "Now I choose to live vibrantly", zh: "現在我選擇活得神采弈弈" },
  { en: "In my work, I express love and creativity", zh: "我在工作中，呈現愛和創造力" },
  { en: "Through work, I learn to broaden my horizons", zh: "透過工作，我學習拓展我的視野。" },
  { en: "In relationships, I find a balance between intimacy and freedom", zh: "在人際關係中，我能在親密和自由之間取得平衡" },
  { en: "I have the right and ability to express my anger, opinions, and emotions without harming anyone or losing their love", zh: "我有權力也有能力去表達我的暴怒、生氣及意見，而不會傷害任何人，也不會失去他們對我的愛" }
]

  },
  {
    name: {
      en: "Third Eye (Ajna)",
      zh: "眉心輪 (Ajna)"
    },
    color: "bg-indigo-600",
    textColor: "text-white",
    affirmations: [
  { en: "Today, I begin a new life", zh: "今天我開始過嶄新的生活" },
  { en: "I allow fear to come and go like clouds", zh: "我允許恐懼像雲一樣的來去自如" },
  { en: "I choose to take responsibility for the power of my thoughts", zh: "我選擇對我思想所產生的力量負責" },
  { en: "I treat myself and others with compassion", zh: "我以慈悲心對待自己與別人" },
  { en: "I feel safe in the flow of life", zh: "在生命之流裡，我感到安全" },
  { en: "I break through the protective patterns set by my parents", zh: "我突破了父母為保護我而設立的規範" },
  { en: "I observe my thoughts and remove those that cause pain, focusing on positive ideas", zh: "我能自我覺察，並剷除那些令我痛苦的念頭，並專注於對我有益的想法" },
  { en: "I do not live to satisfy others or follow their expectations", zh: "我活著不是為了滿足別人，也不必依照他人的想法來過日子。" },
  { en: "I cannot live in the past because it is already gone", zh: "我不可以活在過去，因為那已經過去了。" },
  { en: "Right now, I am creating my future", zh: "此刻，我創造我自己的未來" },
  { en: "Experiences are springboards and invaluable teachers", zh: "經驗如跳板，是不可多得的良師" },
  { en: "I let new ideas grow in my subconscious", zh: "我讓新觀念在潛意識中成長。" },
  { en: "It is time to think for myself", zh: "該是我為自己設想的時候了。" },
  { en: "Life is too precious to get lost in past hatred and pain", zh: "生命太珍貴了，所以我不能讓自己迷失在過去憎恨與痛苦裡。" },
  { en: "To give is to receive", zh: "有捨才有得" },
  { en: "My thoughts return to me as experiences", zh: "我的想法會迴向到我身上而成為經驗" },
  { en: "I learn from experiences and know that taking a different path is absolutely okay", zh: "我從經驗中學習並認為走不同的路，是絕對可行的" },
  { en: "I understand and decisively seize opportunities for growth during crises", zh: "我了解並決定地在危機中抓住學習與成長的機會。" },
  { en: "I trust my intuition", zh: "我信任我的直覺" },
  { en: "There are no problems, only limited viewpoints", zh: "沒有所謂的難題，有的只是有限的觀點。" },
  { en: "I learn to treat pain as a reminder to listen to my body's wisdom", zh: "我學習把痛苦當做一個提醒自己去傾聽身體智慧的信號。" },
  { en: "I can choose between love and hate, heaven and hell", zh: "我可以在愛與恨、天堂與地獄之間做選擇" },
  { en: "The more positively I view myself and the world, the more positive people I attract", zh: "我越正向地看待自己，以及世界，就越吸引正向的人" },
  { en: "I let go of competition and comparison with others", zh: "我放下跟別人競爭和比較" },
  { en: "I choose thoughts of joy and peace", zh: "我選擇喜悅及和平的想法" },
  { en: "New ideas appearing in my life help me reconcile with the past", zh: "每天在生活中出現的新點子協助我跟過去和解。" },
  { en: "Life is a journey of self-exploration", zh: "生命就是自我探索的旅程" },
  { en: "I resolve all hatred and create harmony in my life", zh: "我了結所有的仇恨，並在生活中創造和諧" },
  { en: "I open my heart to accept joyful solutions", zh: "我敞開心胸，接受快樂的解決之道" },
  { en: "I appreciate and value the clarity and truth of my mind", zh: "我欣賞且看重我頭腦的明晰和真實" },
  { en: "I know that thoughts create reality", zh: "我知道思想會創造實相" },
  { en: "What I think determines what I see", zh: "我怎麼想就會看見什麼" },
  { en: "Right and wrong are not important; the lesson from experience is what matters", zh: "對錯不重要，重要的是從經驗中得到教訓" },
  { en: "I allow my feelings to be expressed in moderation, learn from them, and move forward", zh: "我讓感覺適度宣洩，從中學習，然後繼續前進" },
  { en: "I observe my inner dialogue", zh: "我觀照我內在的對話" }
]

  },
  {
    name: {
      en: "Crown (Sahasrara)",
      zh: "頂輪 (Sahasrara)"
    },
    color: "bg-purple-500",
    textColor: "text-white",
    affirmations: [
  { en: "I feel that my true mission is to be in harmony with the universe", zh: "我覺得我真實的使命是和宇宙和諧" },
  { en: "All the sacred wisdom that brings me experiences helps me grow", zh: "所有神聖的智慧帶給我的經驗都幫助我成長" },
  { en: "I know that my heart is always filled with selfless love, and it responds when I need it", zh: "我知道我內心經常充滿無私的愛，當我需要時，它會回應我" },
  { en: "In the will of the universal whole, I feel safe, knowing that situations arise for the benefit of all", zh: "在宇宙整體的意志中，我覺得安全，並知道情況如此是為了全體的利益" },
  { en: "I dedicate my life to exploring and realizing my vision", zh: "我奉獻我的一生去探索並實踐我的願景" },
  { en: "Even when working, I am willing to connect with my higher self", zh: "即使在工作的時候，我也願意跟我的高層心靈連繫" },
  { en: "With God, there is no right or wrong, good or evil", zh: "與神同在，就無對錯，也無善惡" },
  { en: "I allow myself to live my true self", zh: "我允許自己活出真實的自己" },
  { en: "I trust my divinity to guide me on what needs to change", zh: "我信任我的內在神聖力量會指引我哪些需要改變" },
  { en: "I am one with all vibrant things", zh: "我和所有活力充沛的事物合一" },
  { en: "I have a direct connection with the force that created me", zh: "我跟創造我的力量有直接的連繫" },
  { en: "I let my inner guidance lead me", zh: "我讓內在的指引來帶領" },
  { en: "My consciousness is bright, clear, and full of love", zh: "我的意識是光明、清楚並且充滿愛的" },
  { en: "I am willing to see every event today as a gift from life", zh: "我願意把每一件今天發生在我身上的事當做是生命賦予的禮物" },
  { en: "Every day I take time to feel peaceful and fully aligned with my inner self", zh: "每天我都撥出時間讓自己心情平和，並與內在自我全然合一" },
  { en: "I let go of all that no longer belongs to me and open my heart to change", zh: "我放下不再屬於我的一切，敞開心胸接受轉變" },
  { en: "Enlightenment means self-exploration and understanding of the true self. When I truly love myself, enlightenment happens.", zh: "開悟意味著自我探索並了解真實的自我。當我真正愛自己時，開悟就發生了。" },
  { en: "Everything I need to know will be revealed to me at the right time and place", zh: "所有我需要知道的事都會有人在適當的時間、適當的地點告訴我" },
  { en: "I release resistance to life", zh: "我放下對生命的抗拒" },
  { en: "I am boundless and free", zh: "我無拘無束、無罣無礙" },
  { en: "When I need help, I ask my inner self or the universe", zh: "當我需要幫助時，我詢問內心或宇宙" },
  { en: "Clear inner thoughts heal external negative manifestations", zh: "內心的清明思維能療癒外在的負面表徵" },
  { en: "I trust my divinity", zh: "我信任自己內在的神聖力量" },
  { en: "The thought of unity with the universe empowers and inspires me in this ever-changing reality", zh: "與宇宙合一的想法賦予我力量，並在這不斷變動的現實世界裡鼓舞我。" },
  { en: "I trust life and believe that everything happens for a divine and perfect reason", zh: "我信任生命，並深信每件事的發生都是神聖完美的" },
  { en: "When I learn to know and love myself, my divinity guides me", zh: "當我學著了解自己、愛自己的時候，我的神性會引導我。" },
  { en: "I deeply understand that the universe always fulfills my needs in the best possible way", zh: "我深深了解，老天總是儘可能地，以最好的方式來滿足我的需求。" },
  { en: "Everything I need comes to me at the right moment", zh: "所有我需要的東西，都會適時的來到我的身邊。" },
  { en: "There is only the experience of the present moment", zh: "只有當下的經驗。" },
  { en: "I am safe in every situation", zh: "我在任何情況下，我都是安全的" },
  { en: "I am grateful to be a channel of divine wisdom and to spread it", zh: "我很感謝我能夠成為神的管道，把非凡的智慧發揚光大。" },
  { en: "The universe always helps me in expected or unexpected ways", zh: "上蒼總是幫助我，以我預期的或是意想不到的方式" },
  { en: "Facing inner demons is the path to completeness and living in the light", zh: "面對心魔是使自己完整，並活在光中的不二法門。" },
  { en: "I allow myself to freely overcome obstacles", zh: "我允許自己自由地跨越障礙。" },
  { en: "I have the insight that the earth is a beautiful and worthwhile place to live", zh: "我有個洞見：地球是個美好且值得居住的所在。" }
]

  }
];

const translations = {
  title: {
    en: "Daily Chakra Card",
    zh: "每日脈輪能量卡"
  },
  subtitle: {
    en: "Draw your daily energy card for guidance and inspiration",
    zh: "抽一張今日能量卡來獲得指引與靈感"
  },
  drawButton: {
    en: "Quick Draw",
    zh: "快速抽卡"
  },
  manualDrawButton: {
    en: "Manual Draw",
    zh: "手動抽卡"
  },
  drawAgain: {
    en: "Draw Again",
    zh: "再抽一次"
  },
  chooseCard: {
    en: "Choose one card to reveal",
    zh: "選擇一張卡片來翻開"
  },
  home: {
    en: "Return Home",
    zh: "返回首頁"
  }
};

type Card = {
  chakraIndex: number;
  affirmationIndex: number;
};

function App() {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [manualCards, setManualCards] = useState<Card[]>([]);
  const [isManualMode, setIsManualMode] = useState(false);
  const [language, setLanguage] = useState<'en' | 'zh'>('zh');
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const generateRandomCard = (): Card => {
    const chakraIndex = Math.floor(Math.random() * chakras.length);
    const affirmationIndex = Math.floor(
      Math.random() * chakras[chakraIndex].affirmations.length
    );
    return { chakraIndex, affirmationIndex };
  };

  const quickDraw = () => {
    setIsManualMode(false);
    setManualCards([]);
    setSelectedCard(generateRandomCard());
    setFlippedIndex(null);
  };

  const startManualDraw = () => {
    setIsManualMode(true);
    setSelectedCard(null);
    setFlippedIndex(null);
    const cards: Card[] = [];
    for (let i = 0; i < 5; i++) {
      cards.push(generateRandomCard());
    }
    setManualCards(cards);
  };

  const selectCard = (index: number) => {
    setFlippedIndex(index);
    setTimeout(() => {
      setSelectedCard(manualCards[index]);
      setManualCards([]);
      setFlippedIndex(null);
    }, 1000);
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'zh' : 'en');
  };

  const reset = () => {
    setSelectedCard(null);
    setManualCards([]);
    setIsManualMode(false);
    setFlippedIndex(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-8">
        {/* Language Toggle */}
        <div className="absolute top-4 right-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-2 bg-white bg-opacity-10 hover:bg-opacity-20 text-white px-4 py-2 rounded-lg transition-all duration-300"
          >
            <Languages className="w-5 h-5" />
            <span>{language === 'en' ? '中文' : 'English'}</span>
          </button>
        </div>

        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center space-x-2">
            <Rainbow className="w-8 h-8 text-white" />
            <h1 className="text-3xl font-bold text-white">{translations.title[language]}</h1>
            <Rainbow className="w-8 h-8 text-white" />
          </div>
          <p className="text-gray-400">{translations.subtitle[language]}</p>
        </div>

        {/* Draw Buttons */}
        {!selectedCard && manualCards.length === 0 && (
          <div className="flex justify-center space-x-4">
            <button
              onClick={quickDraw}
              className="flex items-center space-x-2 bg-white bg-opacity-10 hover:bg-opacity-20 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Shuffle className="w-5 h-5" />
              <span>{translations.drawButton[language]}</span>
            </button>
            <button
              onClick={startManualDraw}
              className="flex items-center space-x-2 bg-white bg-opacity-10 hover:bg-opacity-20 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Heart className="w-5 h-5" />
              <span>{translations.manualDrawButton[language]}</span>
            </button>
          </div>
        )}

        {/* Manual Draw Cards */}
        {manualCards.length > 0 && (
          <div className="space-y-4">
            <p className="text-center text-gray-400">{translations.chooseCard[language]}</p>
            <div className="grid grid-cols-5 gap-4">
              {manualCards.map((card, index) => (
                <div
                  key={index}
                  className={`flip-card aspect-[3/4] cursor-pointer ${flippedIndex === index ? 'flipped' : ''}`}
                  onClick={() => selectCard(index)}
                >
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-xl transform transition-all duration-300 hover:scale-110 hover:shadow-2xl flex items-center justify-center">
                        <Flower className="text-white w-8 h-8 opacity-60" />
                      </div>
                    </div>
                    <div className="flip-card-back">
                      <div className={`w-full h-full ${chakras[card.chakraIndex].color} rounded-xl p-4 shadow-xl flex items-center justify-center`}>
                        <p className={`${chakras[card.chakraIndex].textColor} text-center font-bold`}>
                          {chakras[card.chakraIndex].name[language]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Selected Card Display */}
        {selectedCard && (
          <div className="space-y-8">
            <div 
              className={`${chakras[selectedCard.chakraIndex].color} rounded-xl p-8 shadow-2xl transform transition-all duration-500 hover:scale-102`}
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className={`${chakras[selectedCard.chakraIndex].textColor} text-xl font-bold`}>
                  {chakras[selectedCard.chakraIndex].name[language]}
                </h2>
                <Sparkles className={`${chakras[selectedCard.chakraIndex].textColor} w-6 h-6`} />
              </div>
              <p className={`${chakras[selectedCard.chakraIndex].textColor} text-2xl font-serif text-center my-8`}>
                "{chakras[selectedCard.chakraIndex].affirmations[selectedCard.affirmationIndex][language]}"
              </p>
            </div>
            
            <div className="flex flex-col space-y-4">
              <button
                onClick={quickDraw}
                className="w-full bg-white bg-opacity-10 hover:bg-opacity-20 text-white rounded-lg py-3 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Shuffle className="w-5 h-5" />
                <span>{translations.drawAgain[language]}</span>
              </button>
              
              <button
                onClick={reset}
                className="w-full bg-white bg-opacity-10 hover:bg-opacity-20 text-white rounded-lg py-3 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Home className="w-5 h-5" />
                <span>{translations.home[language]}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;