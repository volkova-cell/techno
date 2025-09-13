"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Home,
  MapPin,
  Calendar,
  Grid3X3,
  User,
  Bell,
  HelpCircle,
  ChevronRight,
  ArrowRight,
  Building2,
  FileText,
  Truck,
  Search,
  Bot,
  Info,
  ShoppingBag,
  Key,
} from "lucide-react"
import Image from "next/image"

interface DashboardScreenProps {
  onBack: () => void
}

export default function DashboardScreen({ onBack }: DashboardScreenProps) {
  const [activeTab, setActiveTab] = useState("home")

  const newsItems = [
    {
      id: 1,
      title: "Новые возможности для резидентов",
      description: "Запущена программа поддержки стартапов с льготными условиями аренды",
      date: "15 янв",
      image: "/office-building-technology.jpg",
    },
    {
      id: 2,
      title: "Технологический форум 2024",
      description: "Приглашаем на ежегодную конференцию по инновационным технологиям",
      date: "12 янв",
      image: "/conference-presentation-technology.jpg",
    },
    {
      id: 3,
      title: "Расширение инфраструктуры",
      description: "Открытие нового корпуса с современными лабораториями",
      date: "10 янв",
      image: "/modern-office-building.png",
    },
  ]

  const servicesItems = [
    { name: "Переговорные", icon: Building2 },
    { name: "Документы", icon: FileText },
    { name: "Курьер", icon: Truck },
    { name: "Поиск", icon: Search },
    { name: "Чат-бот", icon: Bot },
    { name: "Инфо", icon: Info },
  ]

  const fullServicesList = [
    { name: "Бронирование комнат для переговоров/залов", icon: Building2 },
    { name: "Заказ пропусков", icon: Key },
    { name: "Заказ курьера", icon: Truck },
    { name: "Бюро находок", icon: Search },
    { name: "Чат-бот с ИИ", icon: Bot },
    { name: "Часто задаваемые вопросы (FAQ)", icon: HelpCircle },
    { name: "Информация об ОЭЗ «Технополис Москва»", icon: Info },
    { name: "Интернет-магазин с мерчем компании", icon: ShoppingBag },
  ]

  const tabs = [
    { id: "home", label: "Главная", icon: Home },
    { id: "map", label: "Карта", icon: MapPin },
    { id: "events", label: "События", icon: Calendar },
    { id: "services", label: "Сервисы", icon: Grid3X3 },
    { id: "profile", label: "Профиль", icon: User },
  ]

  const renderHomeTab = () => (
    <div className="flex-1 overflow-y-auto">
      <div className="px-4 py-4 bg-white border-b border-gray-100">
        <div className="flex items-center justify-between">
          <Image
            src="/images/technopolis-logo.png"
            alt="Технополис Москва"
            width={120}
            height={40}
            className="object-contain"
          />
          <Button variant="ghost" size="sm" className="p-2">
            <Bell className="w-5 h-5 text-[#E91E63]" />
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-6">
        <Card className="p-4 bg-gradient-to-r from-[#E91E63] to-[#C2185B] text-white">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold">Мои баллы</h3>
            <Button variant="ghost" size="sm" className="p-1 text-white hover:bg-white/20">
              <HelpCircle className="w-4 h-4" />
            </Button>
          </div>
          <div className="text-2xl font-bold mb-3">2,450</div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="text-xs bg-white/20 border-white/30 text-white hover:bg-white/30"
            >
              История баллов
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="text-xs bg-white/20 border-white/30 text-white hover:bg-white/30"
            >
              Потратить баллы
            </Button>
          </div>
        </Card>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Новости и мероприятия</h3>
            <Button variant="ghost" size="sm" className="text-[#E91E63] text-sm">
              Все новости <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {newsItems.map((item) => (
              <Card
                key={item.id}
                className="min-w-[280px] p-0 overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
              >
                <div className="aspect-video relative">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <div className="text-xs text-[#E91E63] font-medium mb-2">{item.date}</div>
                  <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">{item.title}</h4>
                  <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Сервисы</h3>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {servicesItems.map((service, index) => (
              <Card
                key={index}
                className="min-w-[100px] p-4 text-center cursor-pointer hover:shadow-md transition-shadow"
              >
                <service.icon className="w-6 h-6 mx-auto mb-2 text-[#E91E63]" />
                <div className="text-xs font-medium text-gray-900">{service.name}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const renderServicesTab = () => (
    <div className="flex-1 overflow-y-auto">
      <div className="px-4 py-4 bg-white border-b border-gray-100">
        <h1 className="text-xl font-semibold text-gray-900">Сервисы</h1>
      </div>
      <div className="p-4">
        <div className="space-y-2">
          {fullServicesList.map((service, index) => (
            <Card key={index} className="p-4 cursor-pointer hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <service.icon className="w-5 h-5 text-[#E91E63]" />
                  <span className="font-medium text-gray-900">{service.name}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )

  const renderEmptyTab = (title: string) => (
    <div className="flex-1 flex items-center justify-center">
      <div className="text-center">
        <div className="text-gray-400 mb-2">🚧</div>
        <p className="text-gray-600">{title} в разработке</p>
      </div>
    </div>
  )

  return (
    <div className="h-full bg-gray-50 flex flex-col">
      {/* Content */}
      {activeTab === "home" && renderHomeTab()}
      {activeTab === "map" && renderEmptyTab("Карта")}
      {activeTab === "events" && renderEmptyTab("События")}
      {activeTab === "services" && renderServicesTab()}
      {activeTab === "profile" && renderEmptyTab("Профиль")}

      <div className="bg-white border-t border-gray-200 px-2 py-2">
        <div className="flex justify-around items-center">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant="ghost"
              size="sm"
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center gap-1 p-2 min-w-0 flex-1 ${
                activeTab === tab.id ? "text-[#E91E63]" : "text-gray-500"
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span className="text-xs font-medium truncate">{tab.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
