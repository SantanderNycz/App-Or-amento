"use client"

import type React from "react"

import { useState } from "react"
import { useRef } from "react"
import { Printer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function BudgetForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    product: "",
    defect: "",
    value: "",
    observations: "",
    employee: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const printRef = useRef<HTMLDivElement>(null)

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Sistema de Orçamento</h1>
        <Button onClick={handlePrint} className="flex items-center gap-2 print:hidden">
          <Printer size={16} />
          Imprimir Orçamento
        </Button>
      </div>

      <div ref={printRef} className="bg-white">
        {/* First copy - Company copy */}
        <div className="mb-8 p-6 border rounded-lg shadow-sm">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold">ORÇAMENTO</h2>
            <p className="text-sm text-gray-500">VIA DA EMPRESA</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <Label htmlFor="name">Nome do Cliente</Label>
              <Input id="name" name="name" value={formData.name} onChange={handleChange} className="w-full" />
            </div>
            <div>
              <Label htmlFor="phone">Telefone</Label>
              <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full" />
            </div>
          </div>

          <div className="mb-4">
            <Label htmlFor="address">Endereço</Label>
            <Input id="address" name="address" value={formData.address} onChange={handleChange} className="w-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <Label htmlFor="product">Produto</Label>
              <Input id="product" name="product" value={formData.product} onChange={handleChange} className="w-full" />
            </div>
            <div>
              <Label htmlFor="defect">Defeito</Label>
              <Input id="defect" name="defect" value={formData.defect} onChange={handleChange} className="w-full" />
            </div>
          </div>

          <div className="mb-4">
            <Label htmlFor="value">Valor</Label>
            <Input
              id="value"
              name="value"
              value={formData.value}
              onChange={handleChange}
              className="w-full"
              placeholder="R$"
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="observations">Observações</Label>
            <Textarea
              id="observations"
              name="observations"
              value={formData.observations}
              onChange={handleChange}
              className="w-full"
              rows={3}
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="employee">Nome do Funcionário</Label>
            <Input id="employee" name="employee" value={formData.employee} onChange={handleChange} className="w-full" />
          </div>

          <div className="mt-6 pt-6 border-t border-dashed flex justify-between">
            <div>
              <p className="text-sm">Data: {new Date().toLocaleDateString()}</p>
            </div>
            <div>
              <p className="text-sm">Assinatura: _________________________</p>
            </div>
          </div>
        </div>

        {/* Dotted line separator for tearing */}
        <div className="border-t-2 border-dashed my-8 print:my-4 relative">
          <span className="absolute left-0 right-0 text-center -top-3 bg-white px-4 text-xs text-gray-500 print:bg-white inline-block w-40 mx-auto">
            RECORTAR AQUI
          </span>
        </div>

        {/* Second copy - Customer copy */}
        <div className="p-6 border rounded-lg shadow-sm">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold">ORÇAMENTO</h2>
            <p className="text-sm text-gray-500">VIA DO CLIENTE</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <Label htmlFor="name-copy">Nome do Cliente</Label>
              <p className="border p-2 rounded-md">{formData.name}</p>
            </div>
            <div>
              <Label htmlFor="phone-copy">Telefone</Label>
              <p className="border p-2 rounded-md">{formData.phone}</p>
            </div>
          </div>

          <div className="mb-4">
            <Label htmlFor="address-copy">Endereço</Label>
            <p className="border p-2 rounded-md">{formData.address}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <Label htmlFor="product-copy">Produto</Label>
              <p className="border p-2 rounded-md">{formData.product}</p>
            </div>
            <div>
              <Label htmlFor="defect-copy">Defeito</Label>
              <p className="border p-2 rounded-md">{formData.defect}</p>
            </div>
          </div>

          <div className="mb-4">
            <Label htmlFor="value-copy">Valor</Label>
            <p className="border p-2 rounded-md">{formData.value}</p>
          </div>

          <div className="mb-4">
            <Label htmlFor="observations-copy">Observações</Label>
            <p className="border p-2 rounded-md min-h-[80px]">{formData.observations}</p>
          </div>

          <div className="mb-4">
            <Label htmlFor="employee-copy">Nome do Funcionário</Label>
            <p className="border p-2 rounded-md">{formData.employee}</p>
          </div>

          <div className="mt-6 pt-6 border-t border-dashed flex justify-between">
            <div>
              <p className="text-sm">Data: {new Date().toLocaleDateString()}</p>
            </div>
            <div>
              <p className="text-sm">Assinatura: _________________________</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

