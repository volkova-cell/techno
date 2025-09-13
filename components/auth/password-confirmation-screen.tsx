"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, Shield, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import TechnopolisLogo from "@/components/technopolis-logo"

interface PasswordConfirmationScreenProps {
  onBack?: () => void
  onConfirm?: (code: string) => void
  onResendCode?: () => void
  contactMethod?: string
  contactValue?: string
}

export default function PasswordConfirmationScreen({
  onBack,
  onConfirm,
  onResendCode,
  contactMethod = "email",
  contactValue = "example@email.com",
}: PasswordConfirmationScreenProps) {
  const [code, setCode] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      onConfirm?.(code)
      setIsLoading(false)
    }, 1000)
  }

  const handleResend = () => {
    onResendCode?.()
  }

  const getContactMethodText = () => {
    switch (contactMethod) {
      case "phone":
        return "SMS"
      case "corporate":
      case "email":
      default:
        return "email"
    }
  }

  const getMaskedValue = () => {
    if (contactMethod === "phone") {
      return contactValue.replace(/(\+7\s?\d{3})\s?\d{3}(\d{2})(\d{2})/, "$1 ***-**-$3")
    }
    const [name, domain] = contactValue.split("@")
    return `${name.slice(0, 2)}***@${domain}`
  }

  return (
    <div className="h-full bg-background flex flex-col">
      {/* Header */}
      <div className="px-6 pt-8 pb-6">
        <div className="flex items-center mb-6">
          <button onClick={onBack} className="p-2 -ml-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1 text-center">
            <TechnopolisLogo className="w-10 h-10 mx-auto" />
          </div>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-xl font-bold text-foreground mb-2">Подтверждение входа</h1>
          <p className="text-sm text-muted-foreground">
            Мы отправили код подтверждения на ваш {getContactMethodText()}
          </p>
          <p className="text-sm font-medium text-foreground mt-1">{getMaskedValue()}</p>
        </div>
      </div>

      {/* Confirmation Form */}
      <div className="flex-1 px-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="code">Код подтверждения</Label>
            <Input
              id="code"
              type="text"
              placeholder="Введите 6-значный код"
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
              required
              className="h-12 text-center text-lg font-mono tracking-widest"
              maxLength={6}
            />
            <p className="text-xs text-muted-foreground text-center">Код действителен в течение 10 минут</p>
          </div>

          <Button type="submit" className="w-full h-12 text-base font-medium" disabled={code.length !== 6 || isLoading}>
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Проверяем...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Подтвердить
              </div>
            )}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground mb-2">Не получили код?</p>
          <button onClick={handleResend} className="text-sm text-primary hover:text-primary/80 font-medium">
            Отправить повторно
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 text-center">
        <p className="text-xs text-muted-foreground">Если у вас возникли проблемы, обратитесь в службу поддержки</p>
      </div>
    </div>
  )
}
