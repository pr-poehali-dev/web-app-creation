import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('courses');

  const courses = [
    {
      id: 1,
      title: 'Основы программирования',
      description: 'Изучите базовые концепции программирования и начните свой путь в IT',
      duration: '8 недель',
      level: 'Начальный',
      students: 245,
      instructor: 'Анна Петрова',
      schedule: 'Пн, Ср 18:00-20:00',
      price: '15 000 ₽'
    },
    {
      id: 2,
      title: 'Web-разработка',
      description: 'Создавайте современные веб-приложения с использованием React и TypeScript',
      duration: '12 недель',
      level: 'Средний',
      students: 189,
      instructor: 'Дмитрий Иванов',
      schedule: 'Вт, Чт 19:00-21:00',
      price: '25 000 ₽'
    },
    {
      id: 3,
      title: 'Анализ данных',
      description: 'Освойте Python и инструменты для работы с большими данными',
      duration: '10 недель',
      level: 'Средний',
      students: 167,
      instructor: 'Мария Сидорова',
      schedule: 'Ср, Пт 18:30-20:30',
      price: '20 000 ₽'
    },
    {
      id: 4,
      title: 'Машинное обучение',
      description: 'Погрузитесь в мир искусственного интеллекта и нейронных сетей',
      duration: '16 недель',
      level: 'Продвинутый',
      students: 98,
      instructor: 'Александр Ковалев',
      schedule: 'Пн, Чт 20:00-22:00',
      price: '35 000 ₽'
    },
  ];

  const instructors = [
    {
      name: 'Анна Петрова',
      specialty: 'Программирование',
      experience: '10 лет',
      courses: 3,
      rating: 4.9
    },
    {
      name: 'Дмитрий Иванов',
      specialty: 'Web-разработка',
      experience: '8 лет',
      courses: 5,
      rating: 4.8
    },
    {
      name: 'Мария Сидорова',
      specialty: 'Анализ данных',
      experience: '12 лет',
      courses: 4,
      rating: 4.9
    },
    {
      name: 'Александр Ковалев',
      specialty: 'Machine Learning',
      experience: '15 лет',
      courses: 6,
      rating: 5.0
    }
  ];

  const faqs = [
    {
      question: 'Как записаться на курс?',
      answer: 'Выберите интересующий курс, заполните форму обратной связи или свяжитесь с нами напрямую. Мы ответим в течение 24 часов и предоставим всю необходимую информацию для зачисления.'
    },
    {
      question: 'Какие сертификаты вы выдаете?',
      answer: 'После успешного завершения курса вы получаете официальный сертификат нашей академии, подтверждающий ваши знания и навыки. Сертификат признается ведущими компаниями в отрасли.'
    },
    {
      question: 'Можно ли учиться онлайн?',
      answer: 'Да, все наши курсы доступны в онлайн-формате. Вы можете присутствовать на занятиях дистанционно, получать доступ к записям лекций и выполнять задания в удобное время.'
    },
    {
      question: 'Есть ли возможность рассрочки?',
      answer: 'Да, мы предлагаем беспроцентную рассрочку на срок до 6 месяцев. Также доступны скидки при единовременной оплате всего курса.'
    },
    {
      question: 'Какой уровень подготовки необходим?',
      answer: 'Для каждого курса указан рекомендуемый уровень подготовки. Курсы начального уровня не требуют предварительных знаний. Для продвинутых курсов необходимы базовые навыки в соответствующей области.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <nav className="sticky top-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="GraduationCap" className="text-primary-foreground" size={32} />
              <h1 className="text-2xl font-bold text-primary-foreground">Академия Знаний</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#courses" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">Курсы</a>
              <a href="#instructors" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">Преподаватели</a>
              <a href="#schedule" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">Расписание</a>
              <a href="#faq" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">FAQ</a>
              <a href="#contact" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">Контакты</a>
            </div>
            <Button variant="secondary" size="sm">
              Войти
            </Button>
          </div>
        </div>
      </nav>

      <section className="py-20 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <Badge className="mb-4 bg-accent text-accent-foreground">Образование будущего</Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
            Инвестируйте в свои знания
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Получите востребованные навыки у лучших преподавателей. Сертифицированные программы для вашего профессионального роста.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать обучение
            </Button>
            <Button size="lg" variant="outline">
              <Icon name="PlayCircle" size={20} className="mr-2" />
              Смотреть демо
            </Button>
          </div>
        </div>
      </section>

      <section id="courses" className="py-16 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 text-primary">Наши курсы</h3>
            <p className="text-muted-foreground text-lg">Выберите программу, которая изменит вашу карьеру</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <Card key={course.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary">{course.level}</Badge>
                    <Icon name="BookOpen" className="text-accent" size={24} />
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="Clock" size={16} className="mr-2" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="Users" size={16} className="mr-2" />
                    {course.students} студентов
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="User" size={16} className="mr-2" />
                    {course.instructor}
                  </div>
                  <div className="flex items-center text-sm font-semibold text-accent">
                    <Icon name="Calendar" size={16} className="mr-2" />
                    {course.schedule}
                  </div>
                  <div className="text-2xl font-bold text-primary pt-2">
                    {course.price}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-accent hover:bg-accent/90">
                    Записаться
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="instructors" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 text-primary">Наши преподаватели</h3>
            <p className="text-muted-foreground text-lg">Учитесь у экспертов с многолетним опытом</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {instructors.map((instructor, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center">
                    <Icon name="UserCircle" size={48} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{instructor.name}</CardTitle>
                  <CardDescription>{instructor.specialty}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center text-sm text-muted-foreground">
                      <Icon name="Award" size={16} className="mr-2" />
                      Опыт: {instructor.experience}
                    </div>
                    <div className="flex items-center justify-center text-sm text-muted-foreground">
                      <Icon name="BookOpen" size={16} className="mr-2" />
                      Курсов: {instructor.courses}
                    </div>
                    <div className="flex items-center justify-center text-sm font-semibold text-accent">
                      <Icon name="Star" size={16} className="mr-2 fill-accent" />
                      Рейтинг: {instructor.rating}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-16 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 text-primary">Расписание занятий</h3>
            <p className="text-muted-foreground text-lg">Планируйте свое обучение удобно</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {courses.map((course) => (
                    <div key={course.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-1">{course.title}</h4>
                        <p className="text-sm text-muted-foreground">{course.instructor}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-accent font-semibold mb-1">
                          <Icon name="Calendar" size={18} className="mr-2" />
                          {course.schedule}
                        </div>
                        <div className="text-sm text-muted-foreground">{course.duration}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 text-primary">Получите сертификат</h3>
            <p className="text-muted-foreground text-lg">Подтвердите свои знания официальным документом</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8 bg-gradient-to-br from-accent to-secondary text-white flex items-center justify-center">
                  <div className="text-center">
                    <Icon name="Award" size={100} className="mx-auto mb-4" />
                    <h4 className="text-2xl font-bold mb-2">Сертификат</h4>
                    <p className="text-white/90">О прохождении курса</p>
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold mb-4">Что вы получите:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Icon name="CheckCircle" className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                      <span>Официальный сертификат с уникальным номером</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="CheckCircle" className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                      <span>Подтверждение полученных знаний и навыков</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="CheckCircle" className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                      <span>Возможность добавить в портфолио</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="CheckCircle" className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                      <span>Признание в индустрии</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="CheckCircle" className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                      <span>Цифровая и печатная версия</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 text-primary">Часто задаваемые вопросы</h3>
            <p className="text-muted-foreground text-lg">Найдите ответы на популярные вопросы</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 text-primary">Свяжитесь с нами</h3>
            <p className="text-muted-foreground text-lg">Остались вопросы? Мы всегда рады помочь</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя</label>
                    <Input placeholder="Введите ваше имя" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input type="tel" placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <Textarea placeholder="Расскажите, чем мы можем помочь..." rows={5} />
                  </div>
                  <Button className="w-full bg-accent hover:bg-accent/90" size="lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Icon name="Mail" className="mx-auto mb-3 text-accent" size={32} />
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-sm text-muted-foreground">info@academy.ru</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Icon name="Phone" className="mx-auto mb-3 text-accent" size={32} />
                  <h4 className="font-semibold mb-1">Телефон</h4>
                  <p className="text-sm text-muted-foreground">+7 (495) 123-45-67</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Icon name="MapPin" className="mx-auto mb-3 text-accent" size={32} />
                  <h4 className="font-semibold mb-1">Адрес</h4>
                  <p className="text-sm text-muted-foreground">Москва, ул. Знаний, д. 1</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="GraduationCap" size={28} />
                <h4 className="text-xl font-bold">Академия Знаний</h4>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                Образовательная платформа для профессионального развития и карьерного роста.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#courses" className="hover:text-primary-foreground transition-colors">Курсы</a></li>
                <li><a href="#instructors" className="hover:text-primary-foreground transition-colors">Преподаватели</a></li>
                <li><a href="#schedule" className="hover:text-primary-foreground transition-colors">Расписание</a></li>
                <li><a href="#faq" className="hover:text-primary-foreground transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ресурсы</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Вебинары</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Материалы</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Сообщество</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Следите за нами</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-accent transition-colors">
                  <Icon name="Facebook" size={24} />
                </a>
                <a href="#" className="hover:text-accent transition-colors">
                  <Icon name="Twitter" size={24} />
                </a>
                <a href="#" className="hover:text-accent transition-colors">
                  <Icon name="Instagram" size={24} />
                </a>
                <a href="#" className="hover:text-accent transition-colors">
                  <Icon name="Linkedin" size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/80">
            <p>© 2024 Академия Знаний. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
