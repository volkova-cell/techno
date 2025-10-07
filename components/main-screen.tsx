"use client"

import { useState } from "react"
import Image from "next/image"
import { Bell, Calendar, CreditCard, Gift, FileText, Car, Coffee, MessageCircle, Key, Home, Map, CalendarDays, LayoutGrid, User, HelpCircle, History, ShoppingCart, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import ServicesScreen from "./services-screen"
import ProfileScreen from "./profile-screen"
import LostAndFoundScreen from "./lost-and-found-screen"
import BookingScreen from "./booking-screen"
import PassRequestScreen from "./pass-request-screen"
import { LoadIndicatorIcon } from "./ui/load-indicator-icon"

interface MainScreenProps {
  onBack: () => void
}

export default function MainScreen({ onBack }: MainScreenProps) {
  const [activeTab, setActiveTab] = useState("home")
  const [activeServiceScreen, setActiveServiceScreen] = useState<string | null>(null)

  const handleBack = () => {
    setActiveServiceScreen(null)
  }

  const openServiceScreen = (screen: string) => {
    setActiveServiceScreen(screen)
  }

  const tabs = [
    { id: "home", label: "Главная", icon: Home },
    { id: "map", label: "Карта", icon: Map },
    { id: "events", label: "События", icon: CalendarDays },
    { id: "services", label: "Сервисы", icon: LayoutGrid },
    { id: "profile", label: "Профиль", icon: User },
  ]

  const quickActions = [
    { id: "pass", title: "Заказать пропуск", icon: Key },
    { id: "booking", title: "Бронировать комнату", icon: Coffee },
    { id: "store", title: "Интернет-магазин", icon: ShoppingCart },
    { id: "lost-and-found", title: "Бюро находок", icon: Gift },
    { id: "ask-question", title: "Задать вопрос", icon: Bot },
    { id: "faq", title: "FAQ", icon: HelpCircle },
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
      description: "Изучаем новые инструменты и техники.",
      image: "/conference-presentation-technology.jpg",
      venue: "Печатники",
      color: "rgba(233, 30, 99, 0.85)", // Main pink with opacity
    },
    {
      date: "30 января",
      title: "Технологический митап",
      description: "Обсуждаем последние тренды в разработке.",
      image: "/conference-presentation-technology.jpg",
      venue: "Алабушево",
      color: "rgba(74, 144, 226, 0.85)", // Blue with opacity
    },
    {
      date: "5 февраля",
      title: "Хакатон 'Smart City'",
      description: "Создаем решения для умного города.",
      image: "/conference-presentation-technology.jpg",
      venue: "Техноград",
      color: "rgba(80, 227, 194, 0.85)", // Teal with opacity
    },
  ]

  const renderHomeContent = () => (
    <div className="flex-1">
      {/* Header */}
      <div className="bg-white p-4">
        <div className="flex justify-between items-center">
          <Image src="/logo.png" alt="Логотип" width={120} height={20} className="object-contain" />
          <Button variant="ghost" size="sm" className="text-gray-800 cursor-default">
            <Bell className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Мои баллы */}
        <Card className="bg-gradient-to-br from-[#E91E63] to-[#C2185B] text-white shadow-lg">
          <CardContent className="px-2 py-1 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="font-semibold">Мои баллы:</h2>
              <div className="text-xl font-bold">1,000</div>
            </div>
            <div className="flex items-center gap-2">
              <Button size="sm" className="text-xs h-auto px-2 py-1 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm">
                Потратить
              </Button>
              <Button variant="ghost" size="icon" className="h-7 w-7 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm">
                <History className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Загруженность столовой */}
        <Card className="bg-white shadow-sm border border-gray-100">
          <CardContent className="px-2 py-0.5 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <h2 className="font-semibold text-sm text-gray-800">Загруженность столовой:</h2>
            </div>
            <div className="flex items-center gap-1">
              <div className="text-sm font-bold text-yellow-500">
                Средняя
              </div>
              <LoadIndicatorIcon loadLevel="medium" className="h-5 w-5 -mr-1" />
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
          <div className="space-y-2">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-start gap-3 p-2 rounded-lg bg-gray-50">
                <activity.icon className="h-4 w-4 text-[#E91E63] mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-medium text-sm leading-tight">{activity.title}</h3>
                  <p className="text-xs text-gray-600">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
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
              <Card
                key={index}
                className="bg-gray-100 border-none shadow-sm rounded-2xl cursor-pointer"
                onClick={() => {
                  if (action.id === 'lost-and-found' || action.id === 'booking' || action.id === 'pass') {
                    openServiceScreen(action.id)
                  }
                }}
              >
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
            <CarouselContent className="-ml-3 items-start">
              {events.map((event, index) => (
                <CarouselItem key={index} className="pl-3 basis-4/5">
                  <Card className="overflow-hidden shadow-sm rounded-2xl border border-gray-100 bg-white h-fit">
                    <CardContent className="p-0 flex flex-col">
                      <div className="relative w-full h-20">
                        <Image src={event.image} alt={event.title} layout="fill" objectFit="cover" className="rounded-t-2xl" />
                        <div
                          className="absolute bottom-0 left-0 p-2 text-white rounded-tr-lg"
                          style={{ backgroundColor: event.color }}
                        >
                          <p className="text-xs font-bold uppercase tracking-wide">{event.date}</p>
                          <p className="text-xs">{event.venue}</p>
                        </div>
                      </div>
                      <div className="p-2">
                        <h3 className="font-semibold text-sm leading-tight text-gray-800">{event.title}</h3>
                        <p className="text-xs text-gray-600 leading-snug mt-1 line-clamp-1">{event.description}</p>
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
        return <ServicesScreen onServiceClick={openServiceScreen} />
      case "profile":
        return <ProfileScreen />
      default:
        return renderHomeContent()
    }
  }

  const renderActiveScreen = () => {
    if (activeServiceScreen === 'lost-and-found') {
      return <LostAndFoundScreen onBack={handleBack} />
    }
    if (activeServiceScreen === 'booking') {
      return <BookingScreen onBack={handleBack} />
    }
    if (activeServiceScreen === 'pass') {
      return <PassRequestScreen onBack={handleBack} />
    }
    return renderContent()
  }

  return (
    <div className="h-full flex flex-col bg-white">
      <div
        className="flex-1 overflow-y-scroll no-scrollbar"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        {renderActiveScreen()}
      </div>

      {/* Tab Bar */}
      {activeServiceScreen === null && (
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
      )}
    </div>
  )
}
