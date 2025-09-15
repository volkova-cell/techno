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
        <Card className="bg-gradient-to-br from-[#E91E63] to-[#C2185B] text-white shadow-lg">
          <CardContent className="p-2 flex flex-col gap-2">
            <div className="flex items-center justify-between">
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
            </div>
            <div className="flex justify-center">
              <Button size="sm" className="text-xs h-auto px-4 py-2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm justify-center gap-1">
                <Share2 className="h-4 w-4" />
                Поделиться баллами
              </Button>
            </div>
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