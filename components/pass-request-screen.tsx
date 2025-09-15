"use client"

import { useState } from "react"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

interface PassRequestScreenProps {
  onBack: () => void
}

export default function PassRequestScreen({ onBack }: PassRequestScreenProps) {
  const [passType, setPassType] = useState("temporary")
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)

  const handleSubmit = () => {
    // Here you would typically handle form submission logic
    setIsConfirmOpen(true)
  }

  return (
    <>
      <div className="h-full flex flex-col bg-gray-50">
        <div className="p-4 border-b flex items-center sticky top-0 bg-white z-10">
          <Button variant="ghost" size="icon" onClick={onBack} className="mr-2">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-lg font-bold text-center flex-1">Заказ пропуска</h1>
          <div className="w-8"></div> {/* Spacer */}
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Данные для пропуска</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="recipient-name">ФИО посетителя</Label>
                <Input id="recipient-name" placeholder="Иванов Иван Иванович" />
              </div>

              <div>
                <Label>Тип пропуска</Label>
                <Tabs value={passType} onValueChange={setPassType} className="w-full mt-1">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="temporary">Временный</TabsTrigger>
                    <TabsTrigger value="permanent">Постоянный</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              {passType === "temporary" && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="valid-date">Дата</Label>
                    <Input id="valid-date" type="date" />
                  </div>
                  <div>
                    <Label htmlFor="valid-time">Время</Label>
                    <Input id="valid-time" type="time" />
                  </div>
                </div>
              )}

              {passType === "permanent" && (
                 <div>
                    <Label htmlFor="valid-until-date">Действителен до</Label>
                    <Input id="valid-until-date" type="date" />
                  </div>
              )}
               <div>
                <Label htmlFor="recipient-company">Компания</Label>
                <Input id="recipient-company" placeholder="ООО 'Технопарк'" />
              </div>
            </CardContent>
          </Card>

          <Button onClick={handleSubmit} className="w-full mt-6 bg-[#E91E63] hover:bg-[#d00e46]">
            Заказать пропуск
          </Button>
        </div>
      </div>

      <AlertDialog open={isConfirmOpen} onOpenChange={setIsConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <div className="flex justify-center mb-2">
              <CheckCircle className="h-12 w-12 text-green-500" />
            </div>
            <AlertDialogTitle className="text-center">Успешно!</AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              Ваш запрос на пропуск успешно отправлен.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={onBack} className="w-full bg-[#E91E63] hover:bg-[#d00e46]">
              Отлично
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}