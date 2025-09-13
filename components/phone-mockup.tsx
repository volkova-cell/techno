import type React from "react"
import { Wifi, Battery, Signal } from "lucide-react"

interface PhoneMockupProps {
  children: React.ReactNode
}

function StatusBar() {
  const currentTime = new Date().toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })

  return (
    <div className="absolute top-0 left-0 right-0 h-11 bg-white text-black flex items-center justify-between px-6 pt-2 z-50">
      <div className="text-sm font-medium">{currentTime}</div>
      <div className="flex items-center gap-1">
        <Signal className="w-4 h-4" />
        <Wifi className="w-4 h-4" />
        <Battery className="w-5 h-3" />
      </div>
    </div>
  )
}

export default function PhoneMockup({ children }: PhoneMockupProps) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      {/* Phone frame */}
      <div className="relative">
        {/* Phone outer frame */}
        <div className="w-[375px] h-[812px] bg-black rounded-[3rem] p-2 shadow-2xl">
          {/* Phone inner frame */}
          <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
            {/* Status Bar */}
            <StatusBar />

            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-6 bg-black rounded-b-2xl z-40"></div>

            {/* Screen content with top padding for status bar */}
            <div className="w-full h-full pt-11 overflow-hidden">{children}</div>
          </div>
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-400 rounded-full"></div>
      </div>
    </div>
  )
}
