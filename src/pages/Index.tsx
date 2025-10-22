import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const poems = [
    {
      title: "Элегия",
      year: "1824",
      text: `Блажен, кто мог на ложе сна\nСойти минутой роковою!\nКто смел презреть обман и зло,\nИ с миром полным, как весною,\nВ сию юдоль печали прийти;\nКто смел в борьбу с судьбою сильной\nНе устрашась, вступить один.`
    },
    {
      title: "Пловец",
      year: "1829",
      text: `Нелюдимо наше море,\nДень и ночь шумит оно;\nВ роковом его просторе\nМного бед погребено.`
    },
    {
      title: "Моё уединение",
      year: "1831",
      text: `Дуб — кров мой! лист его — одежда!\nВ тиши восторг души любя,\nКак некогда и жил я, нежда\nВновь лучших дней для себя.`
    }
  ];

  const timeline = [
    { year: "1803", event: "Родился в имении Симбирской губернии" },
    { year: "1819-1822", event: "Учеба в Институте Корпуса горных инженеров" },
    { year: "1822-1829", event: "Дерптский университет, дружба с кругом А.С. Пушкина" },
    { year: "1826", event: "Выход первого сборника стихотворений" },
    { year: "1831-1838", event: "Служба в Москве, литературная деятельность" },
    { year: "1846", event: "Скончался в Москве" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="bg-primary text-primary-foreground py-20 px-4 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center">
            <Icon name="Feather" size={64} className="text-accent" />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6">Николай Языков</h1>
          <p className="text-2xl md:text-3xl opacity-90 font-light">Русский поэт золотого века</p>
          <p className="text-lg mt-4 opacity-75">1803 — 1846</p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 bg-card shadow-md z-10 border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            <a href="#biography" className="hover:text-accent transition-colors flex items-center gap-2">
              <Icon name="User" size={18} />
              Биография
            </a>
            <a href="#creative" className="hover:text-accent transition-colors flex items-center gap-2">
              <Icon name="Sparkles" size={18} />
              Творчество
            </a>
            <a href="#poems" className="hover:text-accent transition-colors flex items-center gap-2">
              <Icon name="BookOpen" size={18} />
              Стихотворения
            </a>
            <a href="#timeline" className="hover:text-accent transition-colors flex items-center gap-2">
              <Icon name="Calendar" size={18} />
              Хронология
            </a>
            <a href="#bibliography" className="hover:text-accent transition-colors flex items-center gap-2">
              <Icon name="Library" size={18} />
              Библиография
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
              <p>
                <strong>Николай Михайлович Языков</strong> — выдающийся русский поэт, один из ярких представителей 
                золотого века русской литературы. Родился 4 марта 1803 года в богатой дворянской семье в имении 
                Симбирской губернии.
              </p>
              <p>
                Первоначальное образование получил дома, затем обучался в Институте Корпуса горных инженеров 
                в Петербурге (1819-1822). После продолжил образование в Дерптском университете (ныне Тартуский 
                университет), где сблизился с кружком любомудров и активно занимался литературным творчеством.
              </p>
              <p>
                В студенческие годы Языков сближается с А.С. Пушкиным, становится участником литературных кружков. 
                Его поэзия отличалась романтическим порывом, восторженностью, воспеванием свободы и вольнолюбивых 
                идеалов. Особую популярность приобрели его студенческие песни, проникнутые духом молодости и бунтарства.
              </p>
              <p>
                Последние годы жизни поэт тяжело болел, что наложило отпечаток на его творчество, ставшее более 
                философским и религиозным. Скончался Николай Языков 26 декабря 1846 года в Москве, оставив после 
                себя богатое поэтическое наследие.
              </p>
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
              
              <TabsContent value="early" className="space-y-4">
                <h3 className="text-2xl font-semibold text-secondary">1820-е годы</h3>
                <p className="text-lg leading-relaxed">
                  Ранний период творчества Языкова — это время студенческих песен и вольнолюбивой лирики. 
                  Поэт воспевал молодость, дружбу, свободу духа. Его стихи отличались энергией, динамикой, 
                  романтическим порывом. Особую популярность приобрели такие произведения как "Пловец", "Элегия", 
                  студенческие застольные песни.
                </p>
                <div className="bg-muted p-6 rounded-lg border-l-4 border-accent">
                  <p className="italic text-muted-foreground">
                    "Блажен, кто смело и младой, / За истину поносим громко, / Стоит, недвижим, / Смеётся в лицо 
                    безумным толпам."
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="mature" className="space-y-4">
                <h3 className="text-2xl font-semibold text-secondary">1830-е годы</h3>
                <p className="text-lg leading-relaxed">
                  В зрелый период творчества поэзия Языкова становится более философской. Он размышляет о смысле 
                  жизни, о назначении поэта, о судьбе России. Сближение со славянофилами привносит в его творчество 
                  патриотические и религиозные мотивы. Язык становится более отточенным, образы — глубокими и многогранными.
                </p>
                <div className="bg-muted p-6 rounded-lg border-l-4 border-accent">
                  <p className="italic text-muted-foreground">
                    Языков создаёт произведения, посвящённые русской истории, православной вере, размышляет 
                    о роли поэта в обществе.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="late" className="space-y-4">
                <h3 className="text-2xl font-semibold text-secondary">1840-е годы</h3>
                <p className="text-lg leading-relaxed">
                  Последний период жизни и творчества Языкова омрачён тяжёлой болезнью. Его поэзия приобретает 
                  глубоко религиозный характер, полна размышлений о смерти, бессмертии души, о Божественном промысле. 
                  Несмотря на физические страдания, поэт сохраняет силу духа и продолжает творить до последних дней.
                </p>
                <div className="bg-muted p-6 rounded-lg border-l-4 border-accent">
                  <p className="italic text-muted-foreground">
                    В последние годы Языков пишет духовные стихи, молитвы, обращается к библейским сюжетам.
                  </p>
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
            <div className="grid gap-8">
              {poems.map((poem, index) => (
                <div key={index} className="border-l-4 border-accent pl-6 py-4 bg-muted/30 rounded-r-lg">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-semibold text-secondary">{poem.title}</h3>
                    <span className="text-sm bg-accent/20 px-3 py-1 rounded-full">{poem.year}</span>
                  </div>
                  <pre className="font-serif text-lg leading-relaxed whitespace-pre-wrap text-foreground">
                    {poem.text}
                  </pre>
                </div>
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
                  <div className="flex-shrink-0 w-32">
                    <div className="text-2xl font-bold text-accent group-hover:scale-110 transition-transform">
                      {item.year}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="h-full border-l-2 border-accent/30 pl-6 pb-2">
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
                  <li className="pl-4 border-l-2 border-accent/50">
                    Стихотворения Н.М. Языкова. — СПб., 1833
                  </li>
                  <li className="pl-4 border-l-2 border-accent/50">
                    Стихотворения Н.М. Языкова. Часть вторая. — М., 1844
                  </li>
                  <li className="pl-4 border-l-2 border-accent/50">
                    Полное собрание стихотворений Н.М. Языкова. — СПб., 1869
                  </li>
                  <li className="pl-4 border-l-2 border-accent/50">
                    Языков Н.М. Полное собрание стихотворений / Ред. М.К. Азадовский. — М.-Л., 1934
                  </li>
                </ul>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-4">Литература о поэте</h3>
                <ul className="space-y-3 text-lg">
                  <li className="pl-4 border-l-2 border-accent/50">
                    Белинский В.Г. Стихотворения Н. Языкова // Полн. собр. соч. — Т. 1
                  </li>
                  <li className="pl-4 border-l-2 border-accent/50">
                    Тынянов Ю.Н. Архаисты и Пушкин // Пушкин и его современники. — Л., 1969
                  </li>
                  <li className="pl-4 border-l-2 border-accent/50">
                    Кошелев В.А. Н.М. Языков. Личность. Творчество. Судьба. — Л., 1990
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
            <h3 className="text-2xl font-bold mb-2">Николай Языков</h3>
            <p className="text-lg opacity-75">Поэт золотого века русской литературы</p>
          </div>
          <Separator className="my-6 opacity-30" />
          <p className="text-sm opacity-60">
            Литературный сайт, посвящённый жизни и творчеству Н.М. Языкова
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
