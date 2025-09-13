"use client"

import type React from "react"

import { useState } from "react"
import { Eye, EyeOff, Mail, Phone, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TechnopolisLogo from "@/components/technopolis-logo"

interface LoginScreenProps {
  onLogin?: (credentials: { type: string; identifier: string; password: string }) => void
  onForgotPassword?: () => void
  onRegister?: () => void
}

export default function LoginScreen({ onLogin, onForgotPassword, onRegister }: LoginScreenProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [corporateEmail, setCorporateEmail] = useState("")
  const [password, setPassword] = useState("")
  const [activeTab, setActiveTab] = useState("email")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    let identifier = ""

    switch (activeTab) {
      case "email":
        identifier = email
        break
      case "phone":
        identifier = phone
        break
      case "corporate":
        identifier = corporateEmail
        break
    }

    onLogin?.({ type: activeTab, identifier, password })
  }

  return (
    <div className="h-full bg-background flex flex-col">
      {/* Header */}
      <div className="px-6 pt-8 pb-6 text-center">
        <div className="flex justify-center mb-4">
          <TechnopolisLogo className="w-16 h-16" />
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">ТЕХНОПОЛИС</h1>
        <p className="text-lg font-medium text-primary mb-1">МОСКВА</p>
        <p className="text-sm text-muted-foreground">Особая экономическая зона</p>
      </div>

      {/* Login Form */}
      <div className="flex-1 px-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-foreground mb-2">Вход в систему</h2>
          <p className="text-sm text-muted-foreground">Выберите способ авторизации</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="email" className="text-xs">
                <Mail className="w-4 h-4 mr-1" />
                Email
              </TabsTrigger>
              <TabsTrigger value="phone" className="text-xs">
                <Phone className="w-4 h-4 mr-1" />
                Телефон
              </TabsTrigger>
              <TabsTrigger value="corporate" className="text-xs">
                <Building2 className="w-4 h-4 mr-1" />
                Корп. почта
              </TabsTrigger>
            </TabsList>

            <TabsContent value="email" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email адрес</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12"
                />
              </div>
            </TabsContent>

            <TabsContent value="phone" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Номер телефона</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+7 (999) 123-45-67"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="h-12"
                />
              </div>
            </TabsContent>

            <TabsContent value="corporate" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="corporate">Корпоративная почта</Label>
                <Input
                  id="corporate"
                  type="email"
                  placeholder="name@technomoscow.ru"
                  value={corporateEmail}
                  onChange={(e) => setCorporateEmail(e.target.value)}
                  required
                  className="h-12"
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="space-y-2">
            <Label htmlFor="password">Пароль</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Введите пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-12 pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <Button type="submit" className="w-full h-12 text-base font-medium">
            Войти
          </Button>
        </form>

        <div className="mt-6 space-y-4">
          <button
            onClick={onForgotPassword}
            className="w-full text-center text-sm text-primary hover:text-primary/80 font-medium"
          >
            Забыли пароль?
          </button>

          <div className="text-center">
            <span className="text-sm text-muted-foreground">Нет аккаунта? </span>
            <button onClick={onRegister} className="text-sm text-primary hover:text-primary/80 font-medium">
              Зарегистрироваться
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 text-center">
        <p className="text-xs text-muted-foreground">© 2024 ОЭЗ «Технополис Москва»</p>
      </div>
    </div>
  )
}
