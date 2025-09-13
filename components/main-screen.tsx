"use client"

import { useState } from "react"
import Image from "next/image"
import { Bell, Calendar, CreditCard, Gift, FileText, Car, Coffee, MessageCircle, Key, Home, Map, CalendarDays, LayoutGrid, User, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import ServicesScreen from "./services-screen"
import ProfileScreen from "./profile-screen"

interface MainScreenProps {
  onBack: () => void
}

export default function MainScreen({ onBack }: MainScreenProps) {
  const [activeTab, setActiveTab] = useState("home")

  const tabs = [
    { id: "home", label: "Главная", icon: Home },
    { id: "map", label: "Карта", icon: Map },
    { id: "events", label: "События", icon: CalendarDays },
    { id: "services", label: "Сервисы", icon: LayoutGrid },
    { id: "profile", label: "Профиль", icon: User },
  ]

  const quickActions = [
    { title: "Заказать пропуск", icon: Key },
    { title: "Бронировать комнату", icon: Coffee },
    { title: "Записаться на спорт", icon: Calendar },
    { title: "Вызвать курьера", icon: Car },
    { title: "Бюро находок", icon: Gift },
    { title: "Задать вопрос", icon: MessageCircle },
  ]

  const activities = [
    {
      icon: Calendar,
      title: "Конференция 'Цифровые технологии'",
      description: "15 января, 10:00 - Конференц-зал А",
    },
    {
      icon: FileText,
      title: "Новый опрос доступен",
      description: "Оцените качество сервисов Технополиса",
      button: "Пройти опрос",
    },
  ]

  const events = [
    {
      date: "25 января",
      title: "Воркшоп по дизайну",
      description: "Изучаем новые инструменты и техники в дизайне.",
      image: "/conference-presentation-technology.jpg",
    },
    {
      date: "30 января",
      title: "Технологический митап",
      description: "Обсуждаем последние тренды в разработке.",
      image: "/conference-presentation-technology.jpg",
    },
    {
      date: "5 февраля",
      title: "Хакатон 'Smart City'",
      description: "Создаем решения для умного города.",
      image: "/conference-presentation-technology.jpg",
    },
  ]

  const renderHomeContent = () => (
    <div className="flex-1 overflow-y-auto pb-20 no-scrollbar">
      {/* Header */}
      <div className="bg-white p-4">
        <div className="flex justify-between items-center">
          <Image src="/logo.png" alt="Логотип" width={60} height={15} className="object-contain" />
          <Button variant="ghost" size="sm" className="text-gray-800 cursor-default">
            <Bell className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Мои баллы */}
        <Card className="bg-gradient-to-br from-[#E91E63] to-[#C2185B] text-white shadow-lg">
          <CardContent className="p-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <h2 className="font-semibold">Мои баллы</h2>
                <HelpCircle className="h-4 w-4 opacity-80 cursor-pointer" />
              </div>
              <div className="text-2xl font-bold">1,000</div>
            </div>
            <div className="mt-2 flex gap-2">
              <Button size="sm" className="flex-1 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm">
                Потратить
              </Button>
              <Button variant="outline" size="sm" className="flex-1 bg-transparent border-white/50 hover:bg-white/10 text-white">
                История
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Мои активности */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-semibold text-gray-900">Мои активности</h2>
            <Button variant="link" className="text-sm text-[#E91E63] p-0 h-auto">
              Все
            </Button>
          </div>
          <Carousel className="w-full">
            <CarouselContent className="-ml-3">
              {activities.map((activity, index) => (
                <CarouselItem key={index} className="pl-3 basis-4/5">
                  <Card className="h-full">
                    <CardContent className="p-2 h-full flex">
                      <div className="flex items-start gap-3">
                        <activity.icon className="h-4 w-4 text-[#E91E63] mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <h3 className="font-medium text-sm leading-tight">{activity.title}</h3>
                          <p className="text-xs text-gray-600 mt-1">{activity.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Сервисы */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-semibold text-gray-900">Сервисы</h2>
            <Button variant="link" className="text-sm text-[#d00e46] p-0 h-auto">
              Все
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {quickActions.map((action, index) => (
              <Card key={index} className="bg-gray-100 border-none shadow-sm rounded-2xl">
                <CardContent className="py-0 px-2 flex flex-col items-center justify-center text-center gap-0.5">
                  <action.icon className="h-6 w-6 text-[#d00e46]" />
                  <p className="text-xs font-medium text-gray-800 leading-tight">{action.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Мероприятия */}
        <div>
          <div className="flex justify-between items-center my-3">
            <h2 className="font-semibold text-gray-900">Мероприятия</h2>
            <Button variant="link" className="text-sm text-[#d00e46] p-0 h-auto">
              Все
            </Button>
          </div>
          <Carousel className="w-full">
            <CarouselContent className="-ml-3">
              {events.map((event, index) => (
                <CarouselItem key={index} className="pl-3 basis-4/5">
                  <Card className="h-full overflow-hidden shadow-sm rounded-2xl border-none">
                    <CardContent className="p-0 h-full flex flex-col">
                      <div className="relative w-full h-20 bg-gray-200">
                        <Image src={event.image} alt={event.title} layout="fill" objectFit="cover" />
                      </div>
                      <div className="p-2 bg-white">
                        <p className="text-xs text-gray-500 mb-1">{event.date}</p>
                        <h3 className="font-semibold text-sm leading-tight mb-1 text-gray-800">{event.title}</h3>
                        <p className="text-xs text-gray-600 leading-snug">{event.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  )

  const renderEmptyTab = (tabName: string) => (
    <div className="flex-1 flex items-center justify-center">
      <div className="text-center">
        <div className="text-4xl mb-2">🚧</div>
        <h2 className="text-lg font-semibold text-gray-900 mb-1">{tabName}</h2>
        <p className="text-sm text-gray-600">Раздел в разработке</p>
      </div>
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return renderHomeContent()
      case "map":
        return renderEmptyTab("Карта")
      case "events":
        return renderEmptyTab("События")
      case "services":
        return <ServicesScreen />
      case "profile":
        return <ProfileScreen />
      default:
        return renderHomeContent()
    }
  }

  return (
    <div className="h-full flex flex-col bg-white">
      <div className="flex-1 overflow-y-auto no-scrollbar">
        {renderContent()}
      </div>

      {/* Tab Bar */}
      <div className="bg-white border-t border-gray-200 py-1">
        <div className="grid grid-cols-5">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center justify-center py-2 rounded-lg transition-colors w-full ${
                  activeTab === tab.id ? "text-[#E91E63] bg-red-50" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Icon className="h-6 w-6 mb-1" />
                <span className="text-xs font-medium">{tab.label}</span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
