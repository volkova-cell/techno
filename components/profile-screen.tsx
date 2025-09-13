"use client"

import { User, Shield, LogOut, Trash2, Star, History, Share2, ShoppingCart, FileText, Bell, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import Image from "next/image"

export default function ProfileScreen() {
  return (
    <div className="flex-1 overflow-y-auto no-scrollbar pb-20 bg-gray-50">
      {/* Header */}
      <div className="p-4 border-b bg-white">
        <h1 className="text-lg font-bold text-center">Профиль</h1>
      </div>

      <div className="p-4 space-y-3">
        {/* User Info */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gray-200 relative overflow-hidden">
            <Image src="/placeholder-user.jpg" alt="User Avatar" layout="fill" objectFit="cover" />
          </div>
          <div>
            <h2 className="font-bold text-lg">Иванов Иван</h2>
            <p className="text-sm text-gray-600">ivan.ivanov@example.com</p>
          </div>
        </div>

        {/* Loyalty System */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Star className="w-5 h-5 text-[#E91E63]" />
              <span>Система баллов</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-center">
              <p className="text-3xl font-bold">1,000</p>
              <p className="text-sm text-gray-500">Текущий баланс баллов</p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <Button variant="outline" className="flex items-center justify-center gap-2">
                <History className="w-4 h-4" />
                <span>История</span>
              </Button>
              <Button variant="outline" className="flex items-center justify-center gap-2">
                <Share2 className="w-4 h-4" />
                <span>Поделиться</span>
              </Button>
            </div>
            <Button className="w-full bg-[#E91E63] hover:bg-[#d00e46]">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Перейти в интернет-магазин
            </Button>
          </CardContent>
        </Card>

        {/* Surveys */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#E91E63]" />
              <span>Опросы и анкеты</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-2 rounded-lg bg-gray-100 cursor-pointer hover:bg-gray-200">
              <span className="text-sm font-medium">Доступен новый опрос</span>
              <ChevronRight className="w-5 h-5 text-gray-500" />
            </div>
          </CardContent>
        </Card>

        {/* Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Настройки приложения</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-sm">PUSH-уведомления</p>
                <p className="text-xs text-gray-500">Новости, события и акции</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Profile Actions */}
        <div className="space-y-1 text-sm">
          <div className="flex items-center justify-between p-2 rounded-lg cursor-pointer hover:bg-gray-100">
            <span>Политика конфиденциальности</span>
            <ChevronRight className="w-5 h-5 text-gray-500" />
          </div>
          <div className="flex items-center justify-between p-2 rounded-lg cursor-pointer hover:bg-gray-100 text-red-600">
            <span>Выйти из профиля</span>
            <LogOut className="w-5 h-5" />
          </div>
          <div className="flex items-center justify-between p-2 rounded-lg cursor-pointer hover:bg-gray-100 text-gray-600">
            <span>Удалить профиль</span>
            <Trash2 className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  )
}