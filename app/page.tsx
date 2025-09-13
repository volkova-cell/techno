"use client"

import { useState } from "react"
import PhoneMockup from "@/components/phone-mockup"
import LoginScreen from "@/components/login-screen"
import PasswordScreen from "@/components/password-screen"
import MainScreen from "@/components/main-screen"

export default function TechnopolisApp() {
  const [currentScreen, setCurrentScreen] = useState<"login" | "password" | "main">("login")
  const [userEmail, setUserEmail] = useState("")

  const handleLogin = (email: string) => {
    setUserEmail(email)
    setCurrentScreen("password")
  }

  const handlePasswordConfirm = () => {
    setCurrentScreen("main")
  }

  const handleBack = () => {
    if (currentScreen === "password") {
      setCurrentScreen("login")
    } else if (currentScreen === "main") {
      setCurrentScreen("login")
    }
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case "login":
        return <LoginScreen onLogin={handleLogin} />
      case "password":
        return <PasswordScreen email={userEmail} onConfirm={handlePasswordConfirm} onBack={handleBack} />
      case "main":
        return <MainScreen onBack={handleBack} />
      default:
        return <LoginScreen onLogin={handleLogin} />
    }
  }

  return (
    <div className="h-screen bg-gray-100">
      <PhoneMockup>{renderScreen()}</PhoneMockup>
    </div>
  )
}
