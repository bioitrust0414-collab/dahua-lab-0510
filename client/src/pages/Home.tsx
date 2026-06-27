import { useState } from "react";
import { ChevronDown, Heart, Microscope, Dna, Pill, AlertCircle, Baby, Shield, Brain, Leaf, Sun, Sparkles, MapPin, Phone, MessageCircle, Send } from "lucide-react";

export default function Home() {
  const [expandedPkg, setExpandedPkg] = useState<string | null>(null);
  const [expandedAllergy, setExpandedAllergy] = useState<string | null>(null);
  const [pkgGroup, setPkgGroup] = useState("general");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handlePackageClick = (id: string) => {
    setExpandedPkg(expandedPkg === id ? null : id);
  };

  const handleAllergyClick = (id: string) => {
    setExpandedAllergy(expandedAllergy === id ? null : id);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  const packages = {
    general: [
      {
        id: "basic",
        name: "新生活健康檢查",
        icon: "💚",
        color: "sky",
        desc: "涵蓋血液、尿液、肝腎功能、三高等基礎項目，適合首次健檢或年度例行篩檢。",
        items: ["血液常規檢查（CBC）", "尿液常規檢查", "肝功能（GOT、GPT、γ-GT）", "腎功能（BUN、Creatinine）", "血脂肪（總膽固醇、三酸甘油酯）", "空腹血糖", "尿酸"],
      },
      {
        id: "happy",
        name: "幸福型健康檢查",
        icon: "❤️",
        color: "emerald",
        desc: "在基礎項目之上，增加心血管硬化指數分析、早期肝癌篩檢與糖化血色素。",
        items: ["新生活套組全部項目", "糖化血色素（HbA1c）", "高密度脂蛋白（HDL）、低密度脂蛋白（LDL）", "動脈硬化指數（AI）", "甲型胎兒蛋白（AFP，早期肝癌篩檢）", "C 反應蛋白（CRP）"],
      },
      {
        id: "refined",
        name: "精緻型健康檢查",
        icon: "🔬",
        color: "violet",
        desc: "進一步加入 B 型、C 型肝炎篩檢、甲狀腺功能分析、類風濕性關節炎與高敏感度發炎指標。",
        items: ["幸福型套組全部項目", "B 型肝炎表面抗原（HBsAg）", "C 型肝炎抗體（Anti-HCV）", "甲狀腺功能（TSH、Free T4）", "類風濕因子（RF）", "高敏感度 C 反應蛋白（hs-CRP）", "鐵蛋白（Ferritin）"],
      },
      {
        id: "premium",
        name: "尊榮型健康檢查",
        icon: "👑",
        color: "amber",
        desc: "最完整的全方位健檢，包含胃幽門桿菌篩檢、過敏體質分析、荷爾蒙檢查與全套防癌腫瘤標記篩檢。",
        items: ["精緻型套組全部項目", "幽門桿菌抗體（H. pylori IgG）", "過敏體質篩檢（Total IgE）", "腫瘤標記全套（CEA、CA19-9、CA125、PSA）", "荷爾蒙基礎評估（DHEA-S）", "維生素 D（25-OH Vitamin D）", "同半胱胺酸（Homocysteine）"],
      },
      {
        id: "elite",
        name: "菁英型健康檢查",
        icon: "🧬",
        color: "rose",
        desc: "針對心血管與代謝深入分析，加入胰島素阻抗、心肌梗塞風險因子與骨質疏鬆風險評估。",
        items: ["尊榮型套組全部項目", "胰島素（Insulin）與胰島素阻抗指數（HOMA-IR）", "脂蛋白（a）（Lp(a)）", "心肌梗塞風險因子（Apo A1、Apo B）", "骨質疏鬆風險（Osteocalcin）", "鎂離子（Magnesium）", "銅藍蛋白（Ceruloplasmin）"],
      },
      {
        id: "antiage",
        name: "抗衰老健康檢查",
        icon: "🌿",
        color: "teal",
        desc: "結合基礎健檢與抗老荷爾蒙、性荷爾蒙結合球蛋白等指標，全面評估身體老化狀態。",
        items: ["精緻型套組全部項目", "DHEA-S（抗老荷爾蒙）", "性荷爾蒙結合球蛋白（SHBG）", "游離睪固酮（Free Testosterone）", "雌二醇（Estradiol, E2）", "胰島素樣生長因子（IGF-1）", "氧化壓力指標（8-OHdG）"],
      },
    ],
    special: [
      {
        id: "premarital",
        name: "婚前甜蜜健康檢查",
        icon: "💕",
        color: "pink",
        desc: "為準新人設計，包含地中海型貧血評估、傳染病篩檢、蠶豆症，以及男性精液品質分析或女性德國麻疹抗體檢查。",
        items: ["血液常規（含地中海型貧血評估）", "蠶豆症篩檢（G6PD）", "梅毒篩檢（VDRL/TPHA）", "愛滋病毒篩檢（HIV）", "B 型肝炎、C 型肝炎篩檢", "男性：精液品質分析（精子數量、活動力、型態）", "女性：德國麻疹抗體（Rubella IgG）"],
      },
      {
        id: "cancer",
        name: "防癌健康檢查",
        icon: "🛡️",
        color: "red",
        desc: "針對男女不同器官的腫瘤標記進行專屬篩檢，早期發現潛在癌症風險。",
        items: ["甲型胎兒蛋白（AFP，肝癌）", "癌胚抗原（CEA，大腸癌、肺癌）", "CA19-9（胰臟癌、膽管癌）", "男性：攝護腺特異抗原（PSA）", "女性：CA125（卵巢癌）、CA15-3（乳癌）", "鱗狀細胞癌抗原（SCC，子宮頸癌）", "神經元特異性烯醇酶（NSE，肺小細胞癌）"],
      },
      {
        id: "liver",
        name: "肝臟組合檢查",
        icon: "🧡",
        color: "orange",
        desc: "針對肝炎病毒、肝功能與肝癌標記進行全面篩檢，適合有肝炎家族史或需要定期追蹤肝臟健康者。",
        items: ["肝功能（GOT、GPT、γ-GT、ALP）", "B 型肝炎表面抗原（HBsAg）", "B 型肝炎表面抗體（Anti-HBs）", "B 型肝炎 e 抗原（HBeAg）", "C 型肝炎抗體（Anti-HCV）", "甲型胎兒蛋白（AFP）", "總膽紅素、直接膽紅素"],
      },
      {
        id: "std",
        name: "性病組合檢查",
        icon: "🔒",
        color: "indigo",
        desc: "提供全面的性傳染病篩檢，包含梅毒、愛滋病毒、疱疹、披衣菌、淋病等。",
        items: ["梅毒篩檢（VDRL + TPHA）", "愛滋病毒（HIV 1/2 抗體）", "單純疱疹病毒（HSV-1、HSV-2 IgG）", "披衣菌抗體（Chlamydia IgG）", "淋病奈瑟菌（Gonorrhea 抗體）", "人類乳突病毒（HPV 高危型）", "B 型肝炎、C 型肝炎篩檢"],
      },
      {
        id: "fertility",
        name: "好孕連組合檢查",
        icon: "👶",
        color: "sky",
        desc: "備孕前的重要指標分析，男性提供精液品質與睪固酮，女性提供完整的荷爾蒙與卵巢功能評估。",
        items: ["男性：精液品質分析、睪固酮（Testosterone）、FSH、LH", "女性：AMH（卵巢儲備功能）、FSH、LH、Estradiol（E2）", "甲狀腺功能（TSH、Free T4）", "泌乳激素（Prolactin）", "德國麻疹抗體（Rubella IgG）", "TORCH 感染篩檢", "葉酸、維生素 B12"],
      },
    ],
  };

  const allergyDetails: Record<string, { desc: string; items: string[] }> = {
    "allergy-1": {
      desc: "針對 66 種常見急性過敏原進行 IgE 抗體檢測，快速找出引發急性過敏反應的主要過敏原。",
      items: ["吸入性：塵蟎、貓毛、狗毛、蟑螂、黴菌等", "食物性：蛋白、牛奶、花生、大豆、小麥、蝦、蟹等", "花粉類：多種常見花粉過敏原"],
    },
    "allergy-2": {
      desc: "同時檢測 IgE（急性）與 IgG（慢性）兩種抗體，涵蓋 110 種過敏原，全面掌握急慢性過敏狀況。",
      items: ["急性過敏原（IgE）：66 種常見吸入性與食物性過敏原", "慢性過敏原（IgG）：44 種食物慢性過敏原", "適合長期有不明原因不適症狀者"],
    },
    "allergy-3": {
      desc: "專注於 101 種食物的 IgG 慢性過敏抗體檢測，找出造成慢性發炎、腸胃不適、皮膚問題的隱性食物過敏原。",
      items: ["穀物類：小麥、大麥、燕麥、玉米等", "乳製品：牛奶、起司、優格等", "蛋白質類：雞蛋、各種肉類、海鮮", "蔬果類：多種常見蔬菜與水果"],
    },
    "allergy-4": {
      desc: "最完整的過敏原檢測方案，同時涵蓋 IgE 急性與 IgG 慢性共 224 種過敏原，提供最全面的過敏體質分析報告。",
      items: ["急性過敏原（IgE）：120 種吸入性、食物性、昆蟲毒素", "慢性過敏原（IgG）：104 種食物慢性過敏原", "提供個人化飲食調整建議", "適合有複雜過敏症狀或需要全面評估者"],
    },
  };

  const geneTests = [
    { name: "全基因圖譜掃描", desc: "涵蓋 40 種疾病、18 項癌症基因", icon: Dna, highlight: true },
    { name: "癌症預防基因檢測", desc: "男性 18 項 / 女性 19 項", icon: Shield },
    { name: "慢性病預防基因檢測", desc: "14 項慢性病基因", icon: Heart },
    { name: "心血管疾病預防基因", desc: "11 項心血管基因", icon: Brain },
    { name: "兒童天生潛能基因", desc: "10 項潛能基因", icon: Baby },
    { name: "體重管理基因", desc: "肥胖與減重體質基因", icon: Leaf },
    { name: "逆齡美妍基因", desc: "皮膚修護與抗老因子", icon: Sparkles },
    { name: "喚時淨白基因", desc: "白皙與環境抗壓係數", icon: Sun },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-white/96 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-[68px]">
          <a href="#hero" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-slate-900 rounded-xl flex items-center justify-center text-white text-sm">
              <Microscope size={18} />
            </div>
            <div>
              <div className="font-black text-base leading-none">大華醫事檢驗所</div>
              <div className="text-[10px] text-slate-400 tracking-widest uppercase">Dahua Medical Laboratory</div>
            </div>
          </a>
          <div className="hidden lg:flex gap-6 text-[11px] font-black uppercase tracking-widest text-slate-400 items-center">
            <a href="#checkups" className="hover:text-slate-900 transition">健康檢查</a>
            <a href="#gene" className="hover:text-slate-900 transition">基因檢測</a>
            <a href="#specialized" className="hover:text-slate-900 transition">專項檢驗</a>
            <a href="#products" className="hover:text-slate-900 transition">保健產品</a>
            <a href="#booking" className="px-5 py-2.5 bg-slate-900 text-white rounded-full hover:bg-sky-600 transition">預約諮詢</a>
          </div>
          <button className="lg:hidden p-2 rounded-xl text-slate-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white px-6 py-4 space-y-3">
            <a href="#checkups" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-bold text-slate-600 hover:text-slate-900 py-2">健康檢查</a>
            <a href="#gene" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-bold text-slate-600 hover:text-slate-900 py-2">基因檢測</a>
            <a href="#specialized" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-bold text-slate-600 hover:text-slate-900 py-2">專項檢驗</a>
            <a href="#products" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-bold text-slate-600 hover:text-slate-900 py-2">保健產品</a>
            <a href="#booking" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-bold text-white bg-slate-900 rounded-xl py-3 text-center">預約諮詢</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="min-h-screen flex items-center bg-white px-6 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-sky-50 text-sky-600 rounded-full text-xs font-bold">彰化市崙平南路 532 號 · 04-7616801</div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight">精準醫學，<br /><span className="text-sky-600">數據實證。</span></h1>
              <p className="text-slate-500 text-base md:text-lg max-w-lg leading-relaxed">大華醫事檢驗所深耕預防醫學領域，通過國家級實驗室標準審核，以嚴謹的臨床生化數據，為您與家人的健康管理提供最可靠的科學依據。</p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#checkups" className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-sky-700 transition shadow-lg shadow-slate-900/20">瀏覽檢查套組</a>
                <a href="#booking" className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold border-2 border-slate-200 hover:border-slate-900 transition">預約諮詢</a>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div><div className="text-3xl font-black text-sky-600">12+</div><div className="text-xs text-slate-400 mt-1 font-semibold">健康檢查套組</div></div>
                <div><div className="text-3xl font-black text-teal-600">224</div><div className="text-xs text-slate-400 mt-1 font-semibold">過敏原檢測項目</div></div>
                <div><div className="text-3xl font-black text-violet-600">9</div><div className="text-xs text-slate-400 mt-1 font-semibold">基因檢測方案</div></div>
              </div>
            </div>
            <div className="relative hidden lg:block h-[520px] rounded-[80px] overflow-hidden shadow-2xl">
              <img
                src="/images/dhlp3.webp"
                alt="大華醫事檢驗所內部環境"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Microscope size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="font-black text-sm text-slate-900">大華醫事檢驗所</div>
                      <div className="text-xs text-slate-500">國家級實驗室認證 · 專業醫事檢驗</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLINIC SHOWCASE */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-xs font-bold mb-4">About Us</div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">大華醫事檢驗所</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">位於彰化市崙平南路 532 號，擁有現代化的檢驗設備與專業的醫事檢驗團隊，致力於為民眾提供最可靠的健康檢查與檢驗服務。</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <img src="/images/dhlp1.webp" alt="大華醫事檢驗所外觀" className="rounded-3xl w-full h-80 object-cover shadow-lg" />
            <img src="/images/dhlp4.webp" alt="大華醫事檢驗所街景" className="rounded-3xl w-full h-80 object-cover shadow-lg" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <img src="/images/dhlp2.webp" alt="大華醫事檢驗所前台" className="rounded-3xl w-full h-80 object-cover shadow-lg" />
            <img src="/images/dhlp3.webp" alt="大華醫事檢驗所內部" className="rounded-3xl w-full h-80 object-cover shadow-lg" />
          </div>
        </div>
      </section>

      {/* HEALTH CHECKUPS */}
      <section id="checkups" className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-sky-50 text-sky-600 rounded-full text-xs font-bold mb-4">Health Checkup Packages</div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">全身健康檢查套組</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">從基礎篩檢到高階全方位健康評估，依據您的需求與年齡層，選擇最適合的健康檢查方案。</p>
          </div>

          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-slate-100 rounded-full p-1 gap-1">
              <button onClick={() => setPkgGroup("general")} className={`px-6 py-2 rounded-full font-bold text-sm transition ${pkgGroup === "general" ? "bg-slate-900 text-white" : "text-slate-600 hover:text-slate-900"}`}>基礎與進階</button>
              <button onClick={() => setPkgGroup("special")} className={`px-6 py-2 rounded-full font-bold text-sm transition ${pkgGroup === "special" ? "bg-slate-900 text-white" : "text-slate-600 hover:text-slate-900"}`}>特定族群</button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages[pkgGroup as keyof typeof packages].map((pkg) => (
              <div key={pkg.id} onClick={() => handlePackageClick(pkg.id)} className="bg-white rounded-3xl border border-slate-100 p-6 hover:shadow-lg hover:-translate-y-1 transition cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{pkg.icon}</div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full bg-${pkg.color}-50 text-${pkg.color}-600`}>查看詳情</span>
                </div>
                <h3 className="text-xl font-black mb-2">{pkg.name}</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{pkg.desc}</p>
                <div className="text-sky-600 text-xs font-bold flex items-center gap-1">查看檢驗項目 <ChevronDown size={12} className={`transition ${expandedPkg === pkg.id ? "rotate-180" : ""}`} /></div>
                {expandedPkg === pkg.id && (
                  <div className="mt-4 pt-4 border-t border-slate-100 text-sm text-slate-600">
                    <p className="text-xs text-slate-500 mb-2 font-semibold">主要檢驗項目：</p>
                    <ul className="space-y-1.5 text-xs">
                      {pkg.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-sky-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="#booking" onClick={(e) => e.stopPropagation()} className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 transition px-4 py-2 rounded-xl">
                      預約此套組諮詢
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GENE TESTING */}
      <section id="gene" className="py-24 bg-slate-900 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-sky-900 text-sky-300 rounded-full text-xs font-bold mb-4">Gene Testing</div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">基因檢測系列</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">基因檢測可提供了解自身之各項特質，分析您罹患疾病的風險與對藥物之特別反應，進而針對自己先天體質不足之處加以保健。</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {geneTests.map((test, idx) => {
              const Icon = test.icon;
              return (
                <div key={idx} className={`rounded-3xl p-6 transition hover:-translate-y-1 ${test.highlight ? "md:col-span-2 lg:col-span-1 bg-gradient-to-br from-sky-600 to-sky-700 text-white" : "bg-slate-800 text-slate-200"}`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${test.highlight ? "bg-white/20" : "bg-white/10"}`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-black mb-2">{test.name}</h3>
                  <p className="text-sm opacity-75">{test.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SPECIALIZED TESTS */}
      <section id="specialized" className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-teal-50 text-teal-600 rounded-full text-xs font-bold mb-4">Specialized Tests</div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">專項檢驗服務</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">針對特定健康需求提供精準的專項檢驗，從過敏原追蹤到營養素評估。</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* 過敏原 */}
            <div className="bg-gradient-to-br from-slate-50 to-teal-50 rounded-3xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-1">過敏原檢測</h3>
                  <p className="text-slate-500 text-sm">沒生病 ≠ 真健康！身體說不出的不適，就從抓出過敏原開始。</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { id: "allergy-1", title: "急性過敏原檢測 66 項（IgE 檢測）" },
                  { id: "allergy-2", title: "急慢性過敏原檢測 110 項（IgE + IgG）" },
                  { id: "allergy-3", title: "慢性過敏原檢測 101 項（IgG 檢測）" },
                  { id: "allergy-4", title: "急慢性過敏原檢測 224 項（最完整）" },
                ].map((item) => (
                  <div key={item.id} onClick={() => handleAllergyClick(item.id)} className={`rounded-2xl p-4 border cursor-pointer transition ${expandedAllergy === item.id ? "bg-teal-600 text-white border-teal-600" : "bg-white border-teal-100 text-slate-900"}`}>
                    <div className="flex items-center justify-between">
                      <div className="font-bold text-sm">{item.title}</div>
                      <ChevronDown size={16} className={`transition flex-shrink-0 ml-2 ${expandedAllergy === item.id ? "rotate-180" : ""}`} />
                    </div>
                    {expandedAllergy === item.id && allergyDetails[item.id] && (
                      <div className="mt-3 pt-3 border-t border-white/30">
                        <p className="text-xs text-white/90 mb-2 leading-relaxed">{allergyDetails[item.id].desc}</p>
                        <ul className="space-y-1">
                          {allergyDetails[item.id].items.map((detail, i) => (
                            <li key={i} className="text-xs text-white/80 flex items-start gap-1.5">
                              <span className="mt-0.5 flex-shrink-0">·</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 五大營養素 */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Pill className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-1">五大營養素檢測</h3>
                    <p className="text-slate-500 text-sm">精準評估體內關鍵營養素含量。</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white rounded-2xl p-4 border border-amber-100 text-center"><div className="text-2xl mb-1">🧬</div><div className="font-bold text-sm">維生素 B12</div></div>
                  <div className="bg-white rounded-2xl p-4 border border-amber-100 text-center"><div className="text-2xl mb-1">🌿</div><div className="font-bold text-sm">葉酸</div></div>
                  <div className="bg-white rounded-2xl p-4 border border-amber-100 text-center"><div className="text-2xl mb-1">☀️</div><div className="font-bold text-sm">維生素 D</div></div>
                  <div className="bg-white rounded-2xl p-4 border border-amber-100 text-center"><div className="text-2xl mb-1">🔴</div><div className="font-bold text-sm">Ferritin</div></div>
                  <div className="bg-amber-500 rounded-2xl p-4 text-center col-span-2"><div className="text-2xl mb-1">⚡</div><div className="font-bold text-sm text-white">鋅（Zinc）</div></div>
                </div>
              </div>

              <div className="bg-slate-900 rounded-3xl p-8 text-white">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-4">
                  <MessageCircle className="text-sky-300" size={20} />
                </div>
                <h3 className="text-xl font-black mb-3">不確定選哪個套組？</h3>
                <p className="text-slate-400 text-sm mb-5">我們的專業醫事人員將根據您的年齡、家族病史與健康需求，為您量身推薦最適合的檢驗方案。</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="#booking" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-sky-600 text-white rounded-2xl font-bold hover:bg-sky-500 transition text-sm">預約免費諮詢</a>
                  <a href="https://line.me/ti/p/@932cczax" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#06C755] text-white rounded-2xl font-bold hover:opacity-90 transition text-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.365 9.863c.349-1.864-1.869-3.693-6.603-6.779-4.735-3.086-10.333-3.067-10.682-1.203-.349 1.864 1.869 3.693 6.604 6.779 4.734 3.086 10.332 3.067 10.681 1.203M6.103 18.795c-1.624 1.058-3.306 2.201-4.758 3.383-.829.667-1.023 1.854-.431 2.635.591.78 1.735.872 2.565.205 1.452-1.182 3.134-2.325 4.758-3.383.829-.667 1.023-1.854.431-2.635-.591-.78-1.735-.872-2.565-.205m12.694-4.259c1.624-1.058 3.306-2.201 4.758-3.383.829-.667 1.023-1.854.431-2.635-.591-.78-1.735-.872-2.565-.205-1.452 1.182-3.134 2.325-4.758 3.383-.829.667-1.023 1.854-.431 2.635.591.78 1.735.872 2.565.205"/></svg>
                    LINE 詢問
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-emerald-50 text-emerald-600 rounded-full text-xs font-bold mb-4">Health Products</div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">健康保健產品</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">精選高品質的營養補充與口腔保健產品，為您與家人的健康加分。</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 兒童活力鈣咀嚼錠 */}
            <a href="/calcium.html" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-3xl p-8 border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition cursor-pointer group">
              <div className="w-14 h-14 bg-sky-500 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0">
                <Pill className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-black mb-3">兒童活力鈣咀嚼錠</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">以臨床骨代謝數據為基準，融合 4OA 有機複合鈣系統（牛奶鈣、珍珠鈣、乳酸鈣、海藻鈣），搭配 D3/MK7 精準引導鈣質沉積，確保每一份營養都能精準轉化為細胞能量。</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-slate-600">
                  <span className="text-emerald-600 font-bold">✓</span> 高效吸收配方
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <span className="text-emerald-600 font-bold">✓</span> 適合兒童咀嚼
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <span className="text-emerald-600 font-bold">✓</span> 骨骼發育支持
                </div>
              </div>
              <div className="mt-6 flex items-center gap-2 text-sky-600 text-sm font-bold group-hover:gap-3 transition-all">
                了解更多詳情
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
            </a>

            {/* 嗨嚼寵物健康零食 */}
            <a href="/heychew.html" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-3xl p-8 border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition cursor-pointer group">
              <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0">
                <Heart className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-black mb-3">嗨嚼寵物健康零食</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">嚴選天然蛋白膜與高純度葡萄糖胺，結合物理耐啃工藝，同時守護寵物的口腔清潔與關節健康，讓毛孩每一口都是雙重守護。</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-slate-600">
                  <span className="text-amber-600 font-bold">✓</span> 天然成分
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <span className="text-amber-600 font-bold">✓</span> 口腔清潔
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <span className="text-amber-600 font-bold">✓</span> 關節保健
                </div>
              </div>
              <div className="mt-6 flex items-center gap-2 text-amber-600 text-sm font-bold group-hover:gap-3 transition-all">
                查看全系列產品
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-24 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-sky-50 text-sky-600 rounded-full text-xs font-bold mb-4">Contact &amp; Booking</div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">聯絡與預約諮詢</h2>
            <p className="text-slate-500 max-w-xl mx-auto">歡迎透過以下方式與我們聯絡，或直接填寫預約表單。</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 bg-slate-50 rounded-3xl">
              <div className="w-14 h-14 bg-[#06C755] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-white" size={24} />
              </div>
              <h4 className="font-black mb-1">LINE 官方帳號</h4>
              <p className="text-slate-500 text-sm font-mono">@932cczax</p>
              <a href="https://line.me/ti/p/@932cczax" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-xs text-[#06C755] font-bold">立即加入 →</a>
            </div>
            <div className="text-center p-8 bg-slate-50 rounded-3xl">
              <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="text-white" size={24} />
              </div>
              <h4 className="font-black mb-1">諮詢專線</h4>
              <p className="text-slate-500 text-sm font-mono">04-7616801</p>
              <a href="tel:0447616801" className="mt-3 inline-block text-xs text-slate-700 font-bold">立即撥打 →</a>
            </div>
            <div className="text-center p-8 bg-slate-50 rounded-3xl">
              <div className="w-14 h-14 bg-sky-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-white" size={24} />
              </div>
              <h4 className="font-black mb-1">診所地址</h4>
              <p className="text-slate-500 text-sm">彰化市崙平南路 532 號</p>
              <a href="https://maps.google.com/?q=彰化市崙平南路532號" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-xs text-sky-600 font-bold">Google 地圖 →</a>
            </div>
          </div>

          <div className="bg-slate-900 rounded-[40px] p-8 md:p-14">
            <h3 className="text-3xl font-black text-white mb-2 text-center">預約專業諮詢</h3>
            <p className="text-slate-400 text-sm text-center mb-10">填寫以下資料，我們將於工作日 24 小時內與您聯繫確認。</p>

            {formSubmitted ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <h3 className="text-2xl font-black text-white mb-2">預約資料已成功送出</h3>
                <p className="text-slate-400">我們將盡快與您聯繫，感謝您的信任。</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 max-w-2xl mx-auto">
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" required placeholder="您的姓名 / 單位名稱" className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-sky-400" />
                  <input type="tel" required placeholder="聯絡電話" className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-sky-400" />
                </div>
                <select required defaultValue="" className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-2xl text-white focus:outline-none focus:border-sky-400">
                  <option value="" disabled className="text-slate-600">請選擇諮詢項目</option>
                  <option value="健康檢查" className="text-slate-900">健康檢查</option>
                  <option value="基因檢測" className="text-slate-900">基因檢測</option>
                  <option value="過敏原檢測" className="text-slate-900">過敏原檢測</option>
                  <option value="五大營養素檢測" className="text-slate-900">五大營養素檢測</option>
                  <option value="保健產品" className="text-slate-900">保健產品</option>
                  <option value="其他" className="text-slate-900">其他</option>
                </select>
                <textarea required placeholder="請描述您的具體需求或想了解的套組..." className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-sky-400 resize-none" rows={4} />
                <button type="submit" className="w-full py-5 bg-sky-600 text-white rounded-2xl font-black hover:bg-sky-500 transition text-base flex items-center justify-center gap-2">
                  <Send size={18} /> 送出預約諮詢
                </button>
                <p className="text-center text-slate-500 text-xs">或直接透過 <a href="https://line.me/ti/p/@932cczax" target="_blank" rel="noopener noreferrer" className="text-[#06C755] font-bold">LINE @932cczax</a> 與我們聯繫</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 bg-slate-900 text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="w-8 h-8 bg-white/10 rounded-xl flex items-center justify-center text-white text-xs">
            <Microscope size={16} />
          </div>
          <div className="font-black text-white text-sm">大華醫事檢驗所</div>
        </div>
        <p className="text-slate-500 text-xs">彰化市崙平南路 532 號 · 04-7616801 · dahualab@gmail.com</p>
        <p className="text-slate-600 text-xs mt-3">&copy; 2026 大華醫事檢驗所. All rights reserved.</p>
      </footer>

      {/* Social FAB */}
      <div className="fixed right-6 bottom-8 flex flex-col gap-3 z-40">
        <a href="https://www.facebook.com/dahualabpeng" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-[#1877F2] rounded-2xl flex items-center justify-center text-white hover:scale-110 transition shadow-lg">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </a>
        <a href="https://line.me/ti/p/@932cczax" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-[#06C755] rounded-2xl flex items-center justify-center text-white hover:scale-110 transition shadow-lg">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.365 9.863c.349-1.864-1.869-3.693-6.603-6.779-4.735-3.086-10.333-3.067-10.682-1.203-.349 1.864 1.869 3.693 6.604 6.779 4.734 3.086 10.332 3.067 10.681 1.203M6.103 18.795c-1.624 1.058-3.306 2.201-4.758 3.383-.829.667-1.023 1.854-.431 2.635.591.78 1.735.872 2.565.205 1.452-1.182 3.134-2.325 4.758-3.383.829-.667 1.023-1.854.431-2.635-.591-.78-1.735-.872-2.565-.205m12.694-4.259c1.624-1.058 3.306-2.201 4.758-3.383.829-.667 1.023-1.854.431-2.635-.591-.78-1.735-.872-2.565-.205-1.452 1.182-3.134 2.325-4.758 3.383-.829.667-1.023 1.854-.431 2.635.591.78 1.735.872 2.565.205"/></svg>
        </a>
      </div>
    </div>
  );
}
