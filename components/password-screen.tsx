"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, ArrowRight, Eye, EyeOff, Shield } from "lucide-react"

interface PasswordScreenProps {
  email: string
  onConfirm: () => void
  onBack: () => void
}

export default function PasswordScreen({ email, onConfirm, onBack }: PasswordScreenProps) {
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (password.trim()) {
      setIsLoading(true)
      // Simulate authentication delay
      setTimeout(() => {
        setIsLoading(false)
        onConfirm()
      }, 1500)
    }
  }

  return (
    <div className="h-full bg-white flex flex-col">
      {/* Header */}
      <div className="px-6 py-6 border-b border-gray-100">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={onBack} className="p-2 hover:bg-gray-100">
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </Button>
          <div className="flex-1">
            <h1 className="text-lg font-semibold text-gray-900">Подтверждение входа</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-[#E91E63] rounded-2xl flex items-center justify-center">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Введите пароль</h2>
          <p className="text-gray-600 text-sm">
            Для аккаунта: <span className="font-medium text-gray-900">{email}</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium text-gray-700">
              Пароль
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Введите ваш пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 pr-12 border-gray-200 focus:border-[#E91E63] focus:ring-[#E91E63]"
                required
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4 text-gray-500" />
                ) : (
                  <Eye className="w-4 h-4 text-gray-500" />
                )}
              </Button>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full h-12 bg-[#E91E63] hover:bg-[#C2185B] text-white font-medium"
            disabled={!password.trim() || isLoading}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Проверка...
              </div>
            ) : (
              <>
                Войти в систему
                <ArrowRight className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </form>

        {/* Additional Options */}
        <div className="mt-8 space-y-4">
          <div className="text-center">
            <button className="text-sm text-[#E91E63] hover:text-[#C2185B] font-medium">Забыли пароль?</button>
          </div>

          <div className="pt-4 border-t border-gray-100">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="text-sm font-medium text-blue-900 mb-1">Безопасность</h3>
                  <p className="text-xs text-blue-700">Ваши данные защищены современными методами шифрования</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
