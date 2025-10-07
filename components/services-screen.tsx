"use client"

import { Key, Coffee, Car, Gift, MessageCircle, HelpCircle, ShoppingCart, ChevronRight, School } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  { id: "booking", title: "Бронирование комнат для переговоров/залов", icon: Coffee },
  { id: "pass", title: "Заказ пропусков", icon: Key },
  { id: "lost-and-found", title: "Сообщить о потерянной/найденной вещи (Бюро находок)", icon: Gift },
  { id: "chat-bot", title: "Чат-бот", icon: MessageCircle },
  { id: "faq", title: "Частые вопросы", icon: HelpCircle },
  { id: "store", title: "Интернет-магазин с мерчем компании", icon: ShoppingCart },
  { id: "school", title: "Программы Московской технической школы", icon: School },
]

interface ServicesScreenProps {
  onServiceClick: (serviceId: string) => void;
}


export default function ServicesScreen({ onServiceClick }: ServicesScreenProps) {
  return (
    <div>
      <div className="p-4 border-b">
        <h1 className="text-lg font-bold text-center">Сервисы</h1>
      </div>
      <div className="p-4 space-y-3">
        {services.map((service, index) => (
          <Card
            key={index}
            className="cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => {
              if (service.id === 'lost-and-found' || service.id === 'booking' || service.id === 'pass') {
                onServiceClick(service.id)
              }
            }}
          >
            <CardContent className="px-4 py-1 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-6 flex justify-center">
                  <service.icon className="h-6 w-6 text-[#d00e46]" />
                </div>
                <span className="font-medium text-sm">{service.title}</span>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}