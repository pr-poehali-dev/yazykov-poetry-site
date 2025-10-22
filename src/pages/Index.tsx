import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const poems = [
    {
      title: "Пловец",
      year: "1829",
      text: `Нелюдимо наше море,
День и ночь шумит оно;
В роковом его просторе
Много бед погребено.

Смело, братья! Бурей полный,
Прям и крепок парус мой.
Мчит на всех путях мой челн,
Скользит отважный предо мной.

Облака бегут над морем,
Крепнет ветер, зыбь черней,
Будет буря: мы поспорим
И помужествуем с ней!`,
      description: "Одно из самых известных стихотворений Языкова, ставшее гимном романтизму и вольнолюбию."
    },
    {
      title: "Элегия",
      year: "1824",
      text: `Блажен, кто мог на ложе сна
Сойти минутой роковою!
Кто в час, когда его волна
Земного горя захлестнула,
В безоблачную тишину
Ушел, спокойной головою...`,
      description: "Философская элегия о бренности бытия и поиске покоя."
    },
    {
      title: "Моё уединение",
      year: "1831",
      text: `Дуб — кров мой! лист его — одежда!
В тиши восторг души любя,
Как некогда и жил я, нежда
Вновь лучших дней для себя.

Один в пустыне я безгласной,
Где нет ни хижин, ни людей;
Вкруг — сосны, ели; мох прекрасной,
А там лазурь небес полей.`,
      description: "Стихотворение о любви к уединению и природе."
    },
    {
      title: "Водопад",
      year: "1830",
      text: `С высокой кручи водопад
Стремится бурною волной,
И дол его гремящий град
Дивит окрестность тишиной.

Так юность мчится и шумит,
Свободы грозные порывы,
Но время быстро пролетит —
И нет уж прежней той игривы.`,
      description: "Метафорическое сравнение водопада с бурной молодостью."
    },
    {
      title: "Тригорское",
      year: "1826",
      text: `Тригорское! Урочный кров,
Приют поэзии прекрасной,
Где меж берез и где дубов
Гулял певец любви всечасной.

Здесь Пушкин думал и творил,
Здесь музы светлые летали,
Здесь вдохновенье озарил
Те песни, что века признали.`,
      description: "Посвящение имению Осиповых-Вульф, где бывал Пушкин."
    },
    {
      title: "К халату",
      year: "1823",
      text: `Халат! Мой старый, верный друг!
Товарищ юности ленивой!
С тобою всё мне так игриво,
И кабинет — волшебный круг.

Ты был со мной в часы утех,
В заботах, в думах вдохновенных,
Ты грел меня от бурь презренных,
Хранил от шумных всех помех!`,
      description: "Юмористическая ода халату — символу домашнего уюта и творчества."
    },
    {
      title: "К Вяземскому",
      year: "1824",
      text: `Язвительный поэт, остряк замысловатый,
Любимец русских муз и милых Аонид!
Твой стих — живой, крылатый,
Сверкает и горит.

В нём блеск ума, огонь сердечный,
Насмешка тонкая, язык беспечный,
И правды смелый, чистый глас!`,
      description: "Дружеское послание князю П.А. Вяземскому."
    },
    {
      title: "Песня",
      year: "1825",
      text: `Из страны, страны далекой,
С Волги-матушки широкой,
Ради сладостной весны
Прилетели к нам грачи.

Прилетели — и запели,
И березки зеленели,
Зацвели, зашумели
Над рекой в тиши ночей.`,
      description: "Лирическая песня о весеннем пробуждении природы."
    }
  ];

  const timeline = [
    { year: "1803, 4 марта", event: "Родился в имении Симбирской губернии в богатой дворянской семье" },
    { year: "1814-1819", event: "Домашнее образование, первые поэтические опыты" },
    { year: "1819-1822", event: "Учеба в Институте Корпуса горных инженеров в Петербурге" },
    { year: "1822", event: "Поступление в Дерптский (Тартуский) университет на философский факультет" },
    { year: "1824", event: "Первая публикация в журнале «Полярная звезда»" },
    { year: "1826", event: "Знакомство с А.С. Пушкиным, начало дружеской переписки" },
    { year: "1829", event: "Публикация стихотворения «Пловец», принёсшего широкую известность" },
    { year: "1831", event: "Окончание университета, возвращение в Россию" },
    { year: "1831-1838", event: "Жизнь в Москве, служба, активная литературная деятельность" },
    { year: "1833", event: "Выход первого сборника стихотворений" },
    { year: "1838", event: "Начало тяжёлой болезни позвоночника" },
    { year: "1841-1845", event: "Лечение за границей (Германия, Италия), религиозный перелом" },
    { year: "1844", event: "Издание второго сборника стихотворений" },
    { year: "1845", event: "Возвращение в Москву, обострение болезни" },
    { year: "1846, 26 декабря", event: "Скончался в Москве, похоронен в Симбирске" }
  ];

  const interestingFacts = [
    {
      title: "Студенческие песни",
      text: "Языков прославился своими студенческими песнями, которые пели во всех университетах России. Его стихи о молодости, дружбе и свободе стали гимном целого поколения студентов."
    },
    {
      title: "Дружба с Пушкиным",
      text: "Языков и Пушкин никогда не встречались лично, но вели активную переписку. Пушкин высоко ценил талант Языкова и называл его «надеждой нашей словесности». Они посвящали друг другу стихи."
    },
    {
      title: "Литературный круг",
      text: "В Дерпте Языков сблизился с будущими славянофилами — братьями Киреевскими, А.С. Хомяковым. Это определило его дальнейшие философские и религиозные взгляды."
    },
    {
      title: "Неоконченное образование",
      text: "Несмотря на 9 лет учёбы в университете, Языков так и не получил диплома. Он учился для души, а не ради формального документа, и покинул университет, не сдав выпускных экзаменов."
    },
    {
      title: "Болезнь и творчество",
      text: "Последние 8 лет жизни Языков был прикован к постели из-за болезни позвоночника. Несмотря на страшные боли, он продолжал писать стихи, создав в этот период свои самые глубокие духовные произведения."
    },
    {
      title: "Полемика с Белинским",
      text: "Языков написал резкую эпиграмму на критика В.Г. Белинского, назвав его «нечистым». Эта полемика отразила раскол между славянофилами и западниками в русской литературе 1840-х годов."
    },
    {
      title: "Поэтическое наследие",
      text: "При жизни Языкова вышло всего два сборника его стихов. Полное собрание сочинений было издано только в 1869 году, через 23 года после его смерти."
    },
    {
      title: "Влияние на литературу",
      text: "Поэзия Языкова повлияла на творчество Лермонтова, Тютчева, Фета. Его метрика и образность стали образцом для многих поэтов XIX века."
    }
  ];

  const literaryConnections = [
    {
      name: "Александр Пушкин",
      years: "1826-1837",
      description: "Пушкин и Языков познакомились заочно через общих друзей. Пушкин высоко ценил талант молодого поэта, называл его «любимцем муз» и посвятил ему стихотворение. Языков ответил посланием «К Пушкину». Их переписка продолжалась до самой смерти Пушкина в 1837 году, которая глубоко потрясла Языкова.",
      quote: "«Языков — поэт! Он у нас оригинален — ибо мыслит» — А.С. Пушкин"
    },
    {
      name: "Николай Гоголь",
      years: "1841-1845",
      description: "Языков и Гоголь сблизились в начале 1840-х годов, когда оба жили за границей. Гоголь помогал больному Языкову, навещал его, читал ему свои произведения. Языков посвятил Гоголю несколько стихотворений, а Гоголь упоминал Языкова в своих письмах как «истинного поэта и христианина».",
      quote: "«В Языкове поэзия чиста и благородна» — Н.В. Гоголь"
    },
    {
      name: "Пётр Вяземский",
      years: "1824-1846",
      description: "Князь П.А. Вяземский был одним из первых ценителей таланта Языкова. Он способствовал публикации его стихов, поддерживал морально и материально. Языков посвятил Вяземскому несколько посланий, воспевая его остроумие и поэтический дар.",
      quote: "«Языков — поэт по призванию, а не по ремеслу» — П.А. Вяземский"
    },
    {
      name: "Алексей Хомяков",
      years: "1827-1846",
      description: "Хомяков и Языков познакомились в Москве и быстро стали близкими друзьями. Хомяков, один из основателей славянофильства, оказал большое влияние на мировоззрение Языкова. В последние годы жизни Хомяков часто навещал больного друга.",
      quote: "«Языков — истинный русский поэт, выразитель народного духа» — А.С. Хомяков"
    }
  ];

  const personalLife = [
    {
      title: "Семья и происхождение",
      text: "Языков родился в богатой дворянской семье Симбирской губернии. Отец, Михаил Петрович Языков, был помещиком и чиновником. Мать, Екатерина Александровна, происходила из древнего рода. У Николая было четверо братьев и сестра."
    },
    {
      title: "Характер и облик",
      text: "Современники описывали Языкова как живого, остроумного, общительного человека с горячим темпераментом. Он был среднего роста, плотного телосложения, с выразительными карими глазами. В молодости любил шумные компании, застолья, студенческие пирушки."
    },
    {
      title: "Личная жизнь",
      text: "Языков никогда не был женат. В молодости он влюблялся несколько раз, посвящая возлюбленным стихи, но серьёзных отношений не складывалось. Болезнь в последние годы жизни окончательно закрыла для него возможность семейного счастья."
    },
    {
      title: "Образ жизни",
      text: "В студенческие годы Языков вёл богемный образ жизни: пиры, балы, литературные вечера. После возвращения в Россию стал более замкнутым, посвящал время литературе и философским размышлениям. Болезнь сделала его отшельником."
    },
    {
      title: "Религиозность",
      text: "В молодости Языков был довольно индифферентен к религии. Однако в последнее десятилетие жизни, особенно под влиянием болезни и общения со славянофилами, он пережил глубокий религиозный перелом и стал истовым православным христианином."
    },
    {
      title: "Последние годы",
      text: "Последние восемь лет Языков страдал от тяжёлой болезни позвоночника, которая приковала его к постели. Он испытывал невыносимые боли, но находил утешение в вере и поэзии. Умер в Москве 26 декабря 1846 года в возрасте 43 лет."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="bg-primary text-primary-foreground py-20 px-4 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center">
            <Icon name="Feather" size={64} className="text-accent" />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6">Николай Михайлович Языков</h1>
          <p className="text-2xl md:text-3xl opacity-90 font-light">Русский поэт золотого века</p>
          <p className="text-lg mt-4 opacity-75">1803 — 1846</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-accent/20 px-4 py-2 rounded-full">Романтик</span>
            <span className="bg-accent/20 px-4 py-2 rounded-full">Славянофил</span>
            <span className="bg-accent/20 px-4 py-2 rounded-full">Друг Пушкина</span>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 bg-card shadow-md z-10 border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-base">
            <a href="#biography" className="hover:text-accent transition-colors flex items-center gap-2">
              <Icon name="User" size={18} />
              Биография
            </a>
            <a href="#personal" className="hover:text-accent transition-colors flex items-center gap-2">
              <Icon name="Heart" size={18} />
              Личная жизнь
            </a>
            <a href="#connections" className="hover:text-accent transition-colors flex items-center gap-2">
              <Icon name="Users" size={18} />
              Литературный круг
            </a>
            <a href="#creative" className="hover:text-accent transition-colors flex items-center gap-2">
              <Icon name="Sparkles" size={18} />
              Творчество
            </a>
            <a href="#poems" className="hover:text-accent transition-colors flex items-center gap-2">
              <Icon name="BookOpen" size={18} />
              Стихотворения
            </a>
            <a href="#facts" className="hover:text-accent transition-colors flex items-center gap-2">
              <Icon name="Lightbulb" size={18} />
              Интересные факты
            </a>
            <a href="#timeline" className="hover:text-accent transition-colors flex items-center gap-2">
              <Icon name="Calendar" size={18} />
              Хронология
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        {/* Biography */}
        <section id="biography" className="animate-slide-up">
          <Card className="p-8 md:p-12 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="User" size={32} className="text-accent" />
              <h2 className="text-4xl font-bold">Биография</h2>
            </div>
            <Separator className="mb-6" />
            <div className="prose prose-lg max-w-none space-y-4 text-foreground">
              <p className="text-xl font-semibold text-secondary">
                <strong>Николай Михайлович Языков</strong> (1803-1846) — выдающийся русский поэт-романтик, 
                один из ярких представителей золотого века русской литературы.
              </p>
              <p>
                Родился 4 марта 1803 года в богатой дворянской семье в имении Симбирской губернии (ныне Ульяновская область). 
                Отец — Михаил Петрович Языков, состоятельный помещик. Детство провёл в родовом имении, получая домашнее 
                образование от французских и немецких гувернёров.
              </p>
              <p>
                В 1814 году был определён в Горный кадетский корпус в Петербурге, затем в Институт Корпуса горных инженеров 
                (1819-1822), где начал писать первые стихи. Однако наука его не привлекала — душа просила свободы и поэзии.
              </p>
              <p>
                В 1822 году Языков поступил в Дерптский (Тартуский) университет на философский факультет. Дерптский период 
                (1822-1829) стал золотым временем его творчества. Здесь он написал свои знаменитые студенческие песни, воспевающие 
                молодость, свободу, дружбу. Стихи Языкова пели во всех университетах России.
              </p>
              <p>
                В Дерпте Языков познакомился с будущими славянофилами — братьями Иваном и Петром Киреевскими, сблизился с 
                А.С. Хомяковым. В 1826 году состоялось заочное знакомство с А.С. Пушкиным, которое переросло в дружбу и 
                взаимное уважение. Они обменивались посланиями в стихах, хотя лично так никогда и не встретились.
              </p>
              <p>
                В 1829 году, не окончив университет, Языков вернулся в Россию. Поселился сначала в семейном имении, затем 
                переехал в Москву (1831), где поступил на службу и активно участвовал в литературной жизни. В 1833 году вышел 
                его первый сборник стихотворений, принесший широкую известность.
              </p>
              <p>
                В 1838 году началась тяжёлая болезнь позвоночника, которая постепенно приковала поэта к постели. В поисках 
                излечения Языков провёл несколько лет за границей (1841-1845), лечился в Германии и Италии. В это время 
                произошёл глубокий религиозный перелом в его мировоззрении — поэзия стала более философской и духовной.
              </p>
              <p>
                Последние годы жизни Языков провёл в Москве, страдая от невыносимых болей, но не прекращая творчества. 
                В 1844 году вышел второй сборник его стихов. Умер Николай Михайлович Языков 26 декабря 1846 года в Москве 
                в возрасте 43 лет. Похоронен в родном Симбирске (Ульяновске).
              </p>
              <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent mt-6">
                <p className="italic text-lg">
                  "Языков принадлежит к числу самобытнейших русских поэтов. В его стихах слышится что-то своё, 
                  родное, русское..." — В.Г. Белинский
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Personal Life */}
        <section id="personal" className="animate-slide-up">
          <Card className="p-8 md:p-12 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="Heart" size={32} className="text-accent" />
              <h2 className="text-4xl font-bold">Личная жизнь и характер</h2>
            </div>
            <Separator className="mb-8" />
            <div className="grid md:grid-cols-2 gap-6">
              {personalLife.map((item, index) => (
                <Card key={index} className="p-6 bg-muted/30 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-secondary mb-3 flex items-center gap-2">
                    <Icon name="Circle" size={8} className="text-accent" />
                    {item.title}
                  </h3>
                  <p className="leading-relaxed">{item.text}</p>
                </Card>
              ))}
            </div>
          </Card>
        </section>

        {/* Literary Connections */}
        <section id="connections" className="animate-slide-up">
          <Card className="p-8 md:p-12 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="Users" size={32} className="text-accent" />
              <h2 className="text-4xl font-bold">Литературный круг и дружба</h2>
            </div>
            <Separator className="mb-8" />
            <div className="space-y-8">
              {literaryConnections.map((person, index) => (
                <div key={index} className="border-l-4 border-accent pl-6 py-4">
                  <div className="flex flex-wrap items-center gap-4 mb-3">
                    <h3 className="text-2xl font-semibold text-secondary">{person.name}</h3>
                    <span className="text-sm bg-accent/20 px-3 py-1 rounded-full">{person.years}</span>
                  </div>
                  <p className="text-lg leading-relaxed mb-4">{person.description}</p>
                  <div className="bg-primary/5 p-4 rounded-lg border-l-2 border-primary">
                    <p className="italic text-muted-foreground">{person.quote}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Creative Work */}
        <section id="creative" className="animate-slide-up">
          <Card className="p-8 md:p-12 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="Sparkles" size={32} className="text-accent" />
              <h2 className="text-4xl font-bold">Творчество</h2>
            </div>
            <Separator className="mb-6" />
            <Tabs defaultValue="early" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="early">Ранний период</TabsTrigger>
                <TabsTrigger value="mature">Зрелость</TabsTrigger>
                <TabsTrigger value="late">Поздний период</TabsTrigger>
              </TabsList>
              
              <TabsContent value="early" className="space-y-6">
                <h3 className="text-3xl font-semibold text-secondary">1820-е годы — Дерптский период</h3>
                <p className="text-lg leading-relaxed">
                  Ранний период творчества Языкова (1822-1831) — это эпоха студенческих песен, вольнолюбивой лирики 
                  и романтического порыва. Молодой поэт воспевал молодость, дружбу, свободу духа, вино и веселье. 
                  Его стихи отличались необыкновенной энергией, динамикой, звучностью стиха.
                </p>
                <p className="text-lg leading-relaxed">
                  Особую популярность приобрели студенческие песни Языкова — "Пловец", "Элегия", "Моё уединение". 
                  Эти произведения пели во всех университетах России, они стали гимном целого поколения. Языков создал 
                  образ вольного, бесшабашного студента, живущего полной жизнью и не признающего авторитетов.
                </p>
                <div className="bg-muted p-6 rounded-lg border-l-4 border-accent">
                  <h4 className="font-semibold mb-2 text-secondary">Основные темы раннего периода:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={20} className="text-accent mt-1 flex-shrink-0" />
                      <span>Воспевание молодости, студенческой вольницы и дружбы</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={20} className="text-accent mt-1 flex-shrink-0" />
                      <span>Романтические пейзажи и любовная лирика</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={20} className="text-accent mt-1 flex-shrink-0" />
                      <span>Вольнолюбивые мотивы, протест против застоя</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={20} className="text-accent mt-1 flex-shrink-0" />
                      <span>Поэтические послания друзьям (Пушкину, Вяземскому)</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="mature" className="space-y-6">
                <h3 className="text-3xl font-semibold text-secondary">1830-е годы — Московский период</h3>
                <p className="text-lg leading-relaxed">
                  В зрелый период (1831-1838) поэзия Языкова становится более философской и глубокой. Он размышляет 
                  о смысле жизни, о назначении поэта, о судьбе России. Сближение со славянофилами (Хомяков, Киреевские) 
                  привносит в его творчество патриотические и религиозные мотивы.
                </p>
                <p className="text-lg leading-relaxed">
                  Языков создаёт произведения, посвящённые русской истории, православной вере. Его язык становится 
                  более отточенным и выразительным, образы — глубокими и многогранными. Поэт обращается к традициям 
                  древнерусской литературы, народному творчеству.
                </p>
                <div className="bg-muted p-6 rounded-lg border-l-4 border-accent">
                  <h4 className="font-semibold mb-2 text-secondary">Основные темы зрелого периода:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={20} className="text-accent mt-1 flex-shrink-0" />
                      <span>Философские размышления о жизни и смерти</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={20} className="text-accent mt-1 flex-shrink-0" />
                      <span>Патриотическая лирика, воспевание России</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={20} className="text-accent mt-1 flex-shrink-0" />
                      <span>Религиозные мотивы, обращение к православию</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={20} className="text-accent mt-1 flex-shrink-0" />
                      <span>Полемика с западниками и либералами</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="late" className="space-y-6">
                <h3 className="text-3xl font-semibold text-secondary">1840-е годы — Духовный период</h3>
                <p className="text-lg leading-relaxed">
                  Последний период жизни и творчества Языкова (1838-1846) омрачён тяжёлой болезнью позвоночника. 
                  Прикованный к постели, испытывающий невыносимые боли, поэт переживает глубокий религиозный кризис 
                  и духовное перерождение.
                </p>
                <p className="text-lg leading-relaxed">
                  Его поэзия приобретает глубоко религиозный, молитвенный характер. Языков пишет духовные стихи, 
                  молитвы, обращается к библейским сюжетам. Он размышляет о смерти, бессмертии души, о Божественном 
                  промысле. Несмотря на физические страдания, поэт сохраняет силу духа и продолжает творить до последних дней.
                </p>
                <div className="bg-muted p-6 rounded-lg border-l-4 border-accent">
                  <h4 className="font-semibold mb-2 text-secondary">Основные темы позднего периода:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={20} className="text-accent mt-1 flex-shrink-0" />
                      <span>Религиозная лирика, молитвы и духовные стихи</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={20} className="text-accent mt-1 flex-shrink-0" />
                      <span>Размышления о смерти и бессмертии души</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={20} className="text-accent mt-1 flex-shrink-0" />
                      <span>Библейские и евангельские сюжеты</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={20} className="text-accent mt-1 flex-shrink-0" />
                      <span>Покаяние, смирение, принятие воли Божией</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </section>

        {/* Poems */}
        <section id="poems" className="animate-slide-up">
          <Card className="p-8 md:p-12 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="BookOpen" size={32} className="text-accent" />
              <h2 className="text-4xl font-bold">Избранные стихотворения</h2>
            </div>
            <Separator className="mb-8" />
            <Accordion type="single" collapsible className="w-full space-y-4">
              {poems.map((poem, index) => (
                <AccordionItem key={index} value={`poem-${index}`} className="border rounded-lg bg-muted/20">
                  <AccordionTrigger className="px-6 hover:no-underline">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full text-left pr-4">
                      <h3 className="text-xl font-semibold text-secondary">{poem.title}</h3>
                      <span className="text-sm bg-accent/20 px-3 py-1 rounded-full mt-2 md:mt-0 self-start md:self-center">
                        {poem.year}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="text-muted-foreground mb-4 italic">{poem.description}</p>
                    <Separator className="my-4" />
                    <pre className="font-serif text-base md:text-lg leading-relaxed whitespace-pre-wrap text-foreground bg-card p-6 rounded-lg border-l-4 border-accent">
                      {poem.text}
                    </pre>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </section>

        {/* Interesting Facts */}
        <section id="facts" className="animate-slide-up">
          <Card className="p-8 md:p-12 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="Lightbulb" size={32} className="text-accent" />
              <h2 className="text-4xl font-bold">Интересные факты</h2>
            </div>
            <Separator className="mb-8" />
            <div className="grid md:grid-cols-2 gap-6">
              {interestingFacts.map((fact, index) => (
                <Card key={index} className="p-6 bg-gradient-to-br from-accent/5 to-secondary/5 hover:shadow-lg transition-all hover:scale-105">
                  <div className="flex items-start gap-3 mb-3">
                    <Icon name="Star" size={24} className="text-accent flex-shrink-0 mt-1" />
                    <h3 className="text-xl font-semibold text-secondary">{fact.title}</h3>
                  </div>
                  <p className="leading-relaxed">{fact.text}</p>
                </Card>
              ))}
            </div>
          </Card>
        </section>

        {/* Timeline */}
        <section id="timeline" className="animate-slide-up">
          <Card className="p-8 md:p-12 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="Calendar" size={32} className="text-accent" />
              <h2 className="text-4xl font-bold">Хронология жизни</h2>
            </div>
            <Separator className="mb-8" />
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6 items-start group">
                  <div className="flex-shrink-0 w-40">
                    <div className="text-xl font-bold text-accent group-hover:scale-110 transition-transform">
                      {item.year}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="h-full border-l-2 border-accent/30 pl-6 pb-2 relative">
                      <div className="absolute -left-[9px] top-2 w-4 h-4 bg-accent rounded-full"></div>
                      <p className="text-lg leading-relaxed">{item.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Bibliography */}
        <section id="bibliography" className="animate-slide-up">
          <Card className="p-8 md:p-12 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="Library" size={32} className="text-accent" />
              <h2 className="text-4xl font-bold">Библиография</h2>
            </div>
            <Separator className="mb-6" />
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-4">Издания стихотворений</h3>
                <ul className="space-y-3 text-lg">
                  <li className="pl-4 border-l-2 border-accent/50 hover:border-accent transition-colors">
                    Стихотворения Н.М. Языкова. — СПб., 1833
                  </li>
                  <li className="pl-4 border-l-2 border-accent/50 hover:border-accent transition-colors">
                    Стихотворения Н.М. Языкова. Часть вторая. — М., 1844
                  </li>
                  <li className="pl-4 border-l-2 border-accent/50 hover:border-accent transition-colors">
                    Полное собрание стихотворений Н.М. Языкова. — СПб., 1869
                  </li>
                  <li className="pl-4 border-l-2 border-accent/50 hover:border-accent transition-colors">
                    Языков Н.М. Полное собрание стихотворений / Ред. М.К. Азадовский. — М.-Л., 1934
                  </li>
                  <li className="pl-4 border-l-2 border-accent/50 hover:border-accent transition-colors">
                    Языков Н.М. Стихотворения и поэмы / Вступ. ст. К.К. Бухмейер. — Л., 1988
                  </li>
                </ul>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-4">Литература о поэте</h3>
                <ul className="space-y-3 text-lg">
                  <li className="pl-4 border-l-2 border-accent/50 hover:border-accent transition-colors">
                    Белинский В.Г. Стихотворения Н. Языкова // Полн. собр. соч. — Т. 1
                  </li>
                  <li className="pl-4 border-l-2 border-accent/50 hover:border-accent transition-colors">
                    Тынянов Ю.Н. Архаисты и Пушкин // Пушкин и его современники. — Л., 1969
                  </li>
                  <li className="pl-4 border-l-2 border-accent/50 hover:border-accent transition-colors">
                    Кошелев В.А. Н.М. Языков. Личность. Творчество. Судьба. — Л., 1990
                  </li>
                  <li className="pl-4 border-l-2 border-accent/50 hover:border-accent transition-colors">
                    Песков А.М. Н.М. Языков в кругу литераторов пушкинской поры. — М., 2003
                  </li>
                  <li className="pl-4 border-l-2 border-accent/50 hover:border-accent transition-colors">
                    Поэты 1820-1830-х годов. В 2 т. / Общ. ред. Л.Я. Гинзбург. — Л., 1972
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-6">
            <Icon name="Feather" size={48} className="text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Николай Михайлович Языков</h3>
            <p className="text-lg opacity-75">Поэт золотого века русской литературы</p>
            <p className="text-sm opacity-60 mt-2">1803 — 1846</p>
          </div>
          <Separator className="my-6 opacity-30" />
          <p className="text-sm opacity-60">
            Литературный сайт, посвящённый жизни и творчеству Н.М. Языкова
          </p>
          <div className="mt-6 flex justify-center gap-8 flex-wrap text-sm">
            <a href="#biography" className="hover:text-accent transition-colors">Биография</a>
            <a href="#poems" className="hover:text-accent transition-colors">Стихотворения</a>
            <a href="#timeline" className="hover:text-accent transition-colors">Хронология</a>
            <a href="#facts" className="hover:text-accent transition-colors">Интересные факты</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
