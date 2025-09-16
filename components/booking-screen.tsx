"use client"

import { useState, useMemo } from "react"
import { ArrowLeft, Map, List, Users, Calendar as CalendarIcon, Tag, MapPin, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { format } from "date-fns"
import { ru } from "date-fns/locale"
import { cn } from "@/lib/utils"

interface BookingScreenProps {
  onBack: () => void
}

interface Room {
  id: string
  name: string
  floor: string
  capacity: number
  location: string
  equipment: string[]
}

const locations = ["Печатники", "Алабушево", "Руднево", "Микрон", "Ангстрем", "МИЭТ"]

const rooms: Room[] = [
  { id: "1", name: "Переговорная 'Альфа'", floor: "3 этаж", capacity: 8, location: "Печатники", equipment: ["Проектор"] },
  { id: "2", name: "Конференц-зал 'Большой'", floor: "2 этаж", capacity: 50, location: "Алабушево", equipment: ["Микрофоны"] },
  { id: "3", name: "Комната 'Тет-а-тет'", floor: "5 этаж", capacity: 4, location: "Руднево", equipment: ["Монитор 4K"] },
  { id: "4", name: "Переговорная 'Бета'", floor: "3 этаж", capacity: 10, location: "Печатники", equipment: ["Маркерная доска"] },
  { id: "5", name: "Лекторий 'Микрон'", floor: "1 этаж", capacity: 30, location: "Микрон", equipment: ["Проектор"] },
  { id: "6", name: "Зал 'Ангстрем'", floor: "4 этаж", capacity: 12, location: "Ангстрем", equipment: ["Флипчарт"] },
]

// Mock schedule: date string 'yyyy-MM-dd' -> array of busy room IDs
const mockSchedule: Record<string, string[]> = {
  [format(new Date(), "yyyy-MM-dd")]: ["2", "6"],
  [format(new Date(Date.now() + 86400000), "yyyy-MM-dd")]: ["1", "4", "5"],
}

export default function BookingScreen({ onBack }: BookingScreenProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedLocation, setSelectedLocation] = useState("all")
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null)
  const [bookingTime, setBookingTime] = useState("10:00")
  const [bookingDuration, setBookingDuration] = useState("1")
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)

  const filteredRooms = useMemo(() => {
    const dateKey = selectedDate ? format(selectedDate, "yyyy-MM-dd") : ""
    const busyRoomsToday = mockSchedule[dateKey] || []
    
    return rooms
      .filter(room => selectedLocation === "all" || room.location === selectedLocation)
      .map(room => ({
        ...room,
        isBusy: busyRoomsToday.includes(room.id),
      }))
  }, [selectedLocation, selectedDate])

  const handleBookingConfirm = () => {
    setIsConfirmOpen(true)
  }

  const renderRoomList = () => (
    <div className="p-4">
      <Tabs defaultValue="list">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="list"><List className="h-4 w-4 mr-2" />Списком</TabsTrigger>
          <TabsTrigger value="map" disabled><Map className="h-4 w-4 mr-2" />На карте</TabsTrigger>
        </TabsList>
        <TabsContent value="list" className="mt-4">
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div>
              <Input
                type="date"
                value={selectedDate ? format(selectedDate, "yyyy-MM-dd") : ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSelectedDate(e.target.value ? new Date(e.target.value) : undefined)}
                className="w-full"
              />
            </div>
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger><SelectValue placeholder="Площадка" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все площадки</SelectItem>
                {locations.map(loc => <SelectItem key={loc} value={loc}>{loc}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            {filteredRooms.map((room) => (
              <Card key={room.id} className="cursor-pointer hover:shadow-md" onClick={() => !room.isBusy && setSelectedRoom(room)}>
                <CardContent className="p-2 flex items-center justify-between gap-2">
                  <div className="flex-1">
                    <p className="font-semibold text-sm leading-tight">{room.name}</p>
                    <div className="flex items-center flex-wrap gap-x-3 gap-y-1 text-xs text-gray-600 mt-1">
                      <div className="flex items-center gap-1"><Users className="h-3 w-3" /><span>{room.capacity} чел.</span></div>
                      <div className="flex items-center gap-1"><MapPin className="h-3 w-3" /><span>{room.location}</span></div>
                      <div className="flex items-center gap-1"><Tag className="h-3 w-3" /><span>{room.floor}</span></div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-xs font-semibold ${room.isBusy ? 'text-red-600' : 'text-green-600'}`}>
                      {room.isBusy ? 'Занято' : 'Свободно'}
                    </div>
                    <Button size="sm" className="text-xs h-auto px-3 py-1 mt-1 bg-[#E91E63] hover:bg-[#d00e46]" disabled={room.isBusy}>
                      Выбрать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )

  const renderBookingDetail = () => {
    if (!selectedRoom) return null
    return (
      <div className="p-4">
        <h2 className="text-lg font-bold mb-1">{selectedRoom.name}</h2>
        <p className="text-sm text-gray-500 mb-4">{selectedRoom.location}, {selectedRoom.floor}, до {selectedRoom.capacity} человек</p>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Дата</label>
            <p className="font-semibold">{selectedDate ? format(selectedDate, "d MMMM yyyy", { locale: ru }) : 'Не выбрана'}</p>
          </div>
          <div>
            <label htmlFor="booking-time" className="text-sm font-medium text-gray-700 block mb-1">Время начала</label>
            <Select value={bookingTime} onValueChange={setBookingTime}>
              <SelectTrigger id="booking-time"><SelectValue /></SelectTrigger>
              <SelectContent>
                {["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"].map(time => <SelectItem key={time} value={time}>{time}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="booking-duration" className="text-sm font-medium text-gray-700 block mb-1">Продолжительность</label>
            <Select value={bookingDuration} onValueChange={setBookingDuration}>
              <SelectTrigger id="booking-duration"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="0.5">30 минут</SelectItem>
                <SelectItem value="1">1 час</SelectItem>
                <SelectItem value="1.5">1.5 часа</SelectItem>
                <SelectItem value="2">2 часа</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button onClick={handleBookingConfirm} className="w-full mt-6 bg-[#E91E63] hover:bg-[#d00e46]">
          Подтвердить бронирование
        </Button>
      </div>
    )
  }

  return (
    <>
      <div className="h-full flex flex-col bg-white">
        <div className="p-4 border-b flex items-center sticky top-0 bg-white z-10">
          <Button variant="ghost" size="icon" onClick={selectedRoom ? () => setSelectedRoom(null) : onBack} className="mr-2">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-lg font-bold text-center flex-1">
            {selectedRoom ? "Детали бронирования" : "Бронирование"}
          </h1>
          <div className="w-8" />
        </div>
        <div
          className="flex-1 overflow-y-scroll no-scrollbar"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {selectedRoom ? renderBookingDetail() : renderRoomList()}
        </div>
      </div>
      {/* Success Modal */}
      {isConfirmOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-sm w-full">
            <div className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-16 w-16 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Успешно!</h3>
              <p className="text-gray-600 mb-6">
                {selectedRoom && selectedDate && `Вы забронировали "${selectedRoom.name}" на ${format(selectedDate, "d MMMM", { locale: ru })} в ${bookingTime}.`}
              </p>
              <Button
                onClick={onBack}
                className="w-full bg-[#E91E63] hover:bg-[#d00e46]"
              >
                Отлично
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}