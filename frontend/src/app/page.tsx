'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleString())
    }
    
    updateTime()
    const interval = setInterval(updateTime, 1000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Project 580</h1>
        <p className="text-xl mb-4">Aplicação Full-Stack</p>
        <p className="text-lg text-gray-600 mb-8">Deploy via Ares Agent</p>
        
        <div className="mt-8 p-6 bg-gray-100 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Status do Deploy</h2>
          <div className="space-y-2">
            <p className="text-green-600 font-semibold">✅ Deploy realizado com sucesso!</p>
            <p><strong>Projeto:</strong> project580</p>
            <p><strong>Versão:</strong> 1.0.0</p>
            <p><strong>Ambiente:</strong> Produção (Azure)</p>
            <p><strong>Hora atual:</strong> {currentTime}</p>
          </div>
        </div>

        <div className="mt-8 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Funcionalidades</h3>
          <ul className="space-y-2 text-left">
            <li>🚀 Deploy automático com Ares</li>
            <li>⚡ Next.js 14 com Standalone mode</li>
            <li>🎨 Tailwind CSS para estilização</li>
            <li>☁️ Hospedado no Azure App Service</li>
            <li>🔧 TypeScript para type safety</li>
          </ul>
        </div>
      </div>
    </main>
  )
}