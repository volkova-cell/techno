"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Camera, ArrowLeft } from "lucide-react"

interface LostAndFoundScreenProps {
  onBack: () => void
}

export default function LostAndFoundScreen({ onBack }: LostAndFoundScreenProps) {
  return (
    <div className="flex-1 overflow-y-auto no-scrollbar pb-20 bg-gray-50">
      {/* Header */}
      <div className="p-4 border-b bg-white flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-lg font-bold text-center flex-1">Бюро находок</h1>
        <div className="w-8"></div> {/* Spacer */}
      </div>

      <div className="p-4">
        <Tabs defaultValue="found">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="found">Я нашел</TabsTrigger>
            <TabsTrigger value="lost">Я потерял</TabsTrigger>
          </TabsList>
          <TabsContent value="found">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Сообщить о находке</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="found-photo">Фотография</Label>
                  <div className="w-full h-32 border-2 border-dashed rounded-lg flex flex-col items-center justify-center text-gray-500 cursor-pointer hover:bg-gray-100">
                    <Camera className="h-8 w-8 mb-2" />
                    <span>Нажмите, чтобы загрузить</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="found-description">Подробное описание</Label>
                  <Textarea id="found-description" placeholder="Например: Черный рюкзак с синим карманом" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="found-location">Где нашли?</Label>
                  <Input id="found-location" placeholder="Например: Столовая, 2 этаж" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="found-contact">Ваше местонахождение (для связи)</Label>
                  <Input id="found-contact" placeholder="Например: Кабинет 303" />
                </div>
                <Button className="w-full bg-[#E91E63] hover:bg-[#d00e46]">Отправить</Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="lost">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Сообщить о потере</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="lost-photo">Фотография (если есть)</Label>
                   <div className="w-full h-32 border-2 border-dashed rounded-lg flex flex-col items-center justify-center text-gray-500 cursor-pointer hover:bg-gray-100">
                    <Camera className="h-8 w-8 mb-2" />
                    <span>Нажмите, чтобы загрузить</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lost-description">Подробное описание</Label>
                  <Textarea id="lost-description" placeholder="Например: Ключи от машины на красном брелке" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lost-location">Где в последний раз видели?</Label>
                  <Input id="lost-location" placeholder="Например: Переговорная 'Марс'" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lost-contact">Ваше местонахождение (для связи)</Label>
                  <Input id="lost-contact" placeholder="Например: Кабинет 303" />
                </div>
                <Button className="w-full bg-[#E91E63] hover:bg-[#d00e46]">Отправить</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}