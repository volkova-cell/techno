"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, Phone, Building2, ArrowRight } from "lucide-react"

interface LoginScreenProps {
  onLogin: (email: string) => void
}

export default function LoginScreen({ onLogin }: LoginScreenProps) {
  const [loginType, setLoginType] = useState<"email" | "phone" | "corporate">("email")
  const [inputValue, setInputValue] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim()) {
      onLogin(inputValue)
    }
  }

  const getPlaceholder = () => {
    switch (loginType) {
      case "email":
        return "example@email.com"
      case "phone":
        return "+7 (999) 123-45-67"
      case "corporate":
        return "example@technomoscow.ru"
      default:
        return ""
    }
  }

  const getInputType = () => {
    switch (loginType) {
      case "email":
      case "corporate":
        return "email"
      case "phone":
        return "tel"
      default:
        return "text"
    }
  }

  return (
    <div className="h-full bg-white flex flex-col">
      <div className="px-6 py-6 text-center bg-gradient-to-b from-white to-gray-50">
        <h1 className="text-lg font-bold text-gray-900 leading-tight">
          ТЕХНОПОЛИС МОСКВА
          <br />
          <span className="text-sm font-medium text-gray-600">особая экономическая зона</span>
        </h1>
      </div>

      {/* Login Form */}
      <div className="flex-1 px-6 py-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Вход в систему</h2>
        </div>

        {/* Login Type Selector */}
        <div className="grid grid-cols-3 gap-2 mb-6">
          <Button
            variant={loginType === "email" ? "default" : "outline"}
            size="sm"
            onClick={() => setLoginType("email")}
            className={`flex flex-col items-center gap-1 h-auto py-3 ${
              loginType === "email"
                ? "bg-[#E91E63] hover:bg-[#C2185B] text-white"
                : "border-gray-200 text-gray-600 hover:bg-gray-50"
            }`}
          >
            <Mail className="w-4 h-4" />
            <span className="text-xs">Email</span>
          </Button>
          <Button
            variant={loginType === "phone" ? "default" : "outline"}
            size="sm"
            onClick={() => setLoginType("phone")}
            className={`flex flex-col items-center gap-1 h-auto py-3 ${
              loginType === "phone"
                ? "bg-[#E91E63] hover:bg-[#C2185B] text-white"
                : "border-gray-200 text-gray-600 hover:bg-gray-50"
            }`}
          >
            <Phone className="w-4 h-4" />
            <span className="text-xs">Телефон</span>
          </Button>
          <Button
            variant={loginType === "corporate" ? "default" : "outline"}
            size="sm"
            onClick={() => setLoginType("corporate")}
            className={`flex flex-col items-center gap-1 h-auto py-3 ${
              loginType === "corporate"
                ? "bg-[#E91E63] hover:bg-[#C2185B] text-white"
                : "border-gray-200 text-gray-600 hover:bg-gray-50"
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span className="text-xs">Корпорат.</span>
          </Button>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="login-input" className="text-sm font-medium text-gray-700">
              {loginType === "email" && "Электронная почта"}
              {loginType === "phone" && "Номер телефона"}
              {loginType === "corporate" && "Корпоративная почта"}
            </Label>
            <Input
              id="login-input"
              type={getInputType()}
              placeholder={getPlaceholder()}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="h-12 border-gray-200 focus:border-[#E91E63] focus:ring-[#E91E63]"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full h-12 bg-[#E91E63] hover:bg-[#C2185B] text-white font-medium"
            disabled={!inputValue.trim()}
          >
            Продолжить
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </form>

        {/* Additional Options */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <div className="text-center">
            <button className="text-sm text-[#E91E63] hover:text-[#C2185B] font-medium">Нужна помощь?</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
        <p className="text-xs text-gray-500 text-center">Центр развития высокотехнологичных производств</p>
      </div>
    </div>
  )
}
