"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"

export default function LPForm() {
    const [analysisType, setAnalysisType] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        setStatus({ type: null, message: '' })

        const formData = new FormData(e.currentTarget)

        try {
            const response = await fetch('/send_email.php', {
                method: 'POST',
                body: formData,
            })

            const text = await response.text()
            let data
            try {
                data = JSON.parse(text)
            } catch (err) {
                // If response is not JSON, might be a server error or plain text
                if (response.ok) {
                    data = { success: true, message: text || 'Enviado com sucesso!' }
                } else {
                    throw new Error(`Erro do servidor: ${response.status}`)
                }
            }

            if (json_response_success(data)) {
                setStatus({ type: 'success', message: data.message || 'Solicitação enviada com sucesso! Em breve entraremos em contato.' })
                e.currentTarget.reset()
                setAnalysisType("")
            } else {
                throw new Error(data.message || 'Erro ao enviar solicitação.')
            }
        } catch (error: any) {
            console.error('Submission error:', error)
            setStatus({ type: 'error', message: error.message || 'Ocorreu um erro ao enviar. Tente novamente ou contate-nos pelo WhatsApp.' })
        } finally {
            setIsSubmitting(false)
        }
    }

    const json_response_success = (data: any) => {
        return data && (data.success === true || data.status === 'success')
    }

    return (
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-2xl shadow-xl">
            <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                    Solicite um Orçamento
                </h3>
                <p className="text-gray-200 text-sm">
                    Preencha o formulário para falar com nossos especialistas.
                </p>
            </div>

            {status.type && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${status.type === 'success' ? 'bg-green-500/20 text-green-100 border border-green-500/30' : 'bg-red-500/20 text-red-100 border border-red-500/30'}`}
                >
                    {status.type === 'success' ? <CheckCircle2 className="w-5 h-5 shrink-0" /> : <AlertCircle className="w-5 h-5 shrink-0" />}
                    <p className="text-sm font-medium">{status.message}</p>
                </motion.div>
            )}

            <form
                onSubmit={handleSubmit}
                className="space-y-4"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label htmlFor="user_name" className="text-sm font-medium text-white ml-1">Nome Completo</label>
                        <input
                            type="text"
                            name="user_name"
                            id="user_name"
                            placeholder="Digite seu nome"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-400 focus:outline-none focus:border-greenSup focus:ring-1 focus:ring-greenSup transition-all"
                        />
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="user_email" className="text-sm font-medium text-white ml-1">E-mail</label>
                        <input
                            type="email"
                            name="user_email"
                            id="user_email"
                            placeholder="seu@email.com"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-400 focus:outline-none focus:border-greenSup focus:ring-1 focus:ring-greenSup transition-all"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label htmlFor="telefone" className="text-sm font-medium text-white ml-1">Telefone / WhatsApp</label>
                        <input
                            type="tel"
                            name="telefone"
                            id="telefone"
                            placeholder="(00) 00000-0000"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-400 focus:outline-none focus:border-greenSup focus:ring-1 focus:ring-greenSup transition-all"
                        />
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="cnpj" className="text-sm font-medium text-white ml-1">CNPJ</label>
                        <input
                            type="text"
                            name="cnpj"
                            id="cnpj"
                            placeholder="00.000.000/0000-00"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-400 focus:outline-none focus:border-greenSup focus:ring-1 focus:ring-greenSup transition-all"
                        />
                    </div>
                </div>

                <div className="space-y-1">
                    <label htmlFor="cidade_uf" className="text-sm font-medium text-white ml-1">Cidade / UF</label>
                    <input
                        type="text"
                        name="cidade_uf"
                        id="cidade_uf"
                        placeholder="Ex: Araraquara/SP"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-400 focus:outline-none focus:border-greenSup focus:ring-1 focus:ring-greenSup transition-all"
                    />
                </div>

                <div className="space-y-1">
                    <label htmlFor="analise_opt" className="text-sm font-medium text-white ml-1">Tipo de Análise</label>
                    <select
                        name="analise_opt"
                        id="analise_opt"
                        required
                        value={analysisType}
                        onChange={(e) => setAnalysisType(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-greenSup focus:ring-1 focus:ring-greenSup transition-all [&>option]:text-black"
                    >
                        <option value="">Selecione...</option>
                        <option value="agua">Análise de Água</option>
                        <option value="solo">Análise de Solo</option>
                        <option value="cosmeticos">Análise de Cosméticos</option>
                        <option value="alimentos">Análise de Alimentos</option>
                        <option value="outro">Outro</option>
                    </select>
                </div>

                {/* Conditional Fields */}
                <AnimatePresence>
                    {analysisType === "agua" && (
                        <motion.div
                            key="agua"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="space-y-4 overflow-hidden"
                        >
                            <div className="space-y-1">
                                <label htmlFor="tipo_agua" className="text-sm font-medium text-white ml-1">Tipo de Água</label>
                                <select name="tipo_agua" id="tipo_agua" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-greenSup focus:ring-1 focus:ring-greenSup transition-all [&>option]:text-black">
                                    <option value="">Selecione...</option>
                                    <option value="Potável">Potável</option>
                                    <option value="Industrial">Industrial</option>
                                    <option value="Efluentes">Efluentes</option>
                                    <option value="Outra">Outra</option>
                                </select>
                            </div>

                            <div className="space-y-1">
                                <label htmlFor="finalidade_agua" className="text-sm font-medium text-white ml-1">Finalidade</label>
                                <select name="finalidade_agua" id="finalidade_agua" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-greenSup focus:ring-1 focus:ring-greenSup transition-all [&>option]:text-black">
                                    <option value="">Selecione...</option>
                                    <option value="Conformidade">Conformidade com regulamentações</option>
                                    <option value="Manutenção">Manutenção regular</option>
                                    <option value="Problema">Solução de problema específico</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </div>
                        </motion.div>
                    )}

                    {analysisType === "solo" && (
                        <motion.div
                            key="solo"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="space-y-4 overflow-hidden"
                        >
                            <div className="space-y-1">
                                <label htmlFor="objetivo_solo" className="text-sm font-medium text-white ml-1">Objetivo da Análise</label>
                                <select name="objetivo_solo" id="objetivo_solo" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-greenSup focus:ring-1 focus:ring-greenSup transition-all [&>option]:text-black">
                                    <option value="">Selecione...</option>
                                    <option value="Contaminação">Avaliação de contaminação</option>
                                    <option value="Ambiental">Estudos ambientais</option>
                                    <option value="Agricultura">Agricultura</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </div>
                        </motion.div>
                    )}

                    {analysisType === "cosmeticos" && (
                        <motion.div
                            key="cosmeticos"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="space-y-4 overflow-hidden"
                        >
                            <div className="space-y-1">
                                <label htmlFor="tipo_cosmetico" className="text-sm font-medium text-white ml-1">Tipo de Cosmético</label>
                                <select name="tipo_cosmetico" id="tipo_cosmetico" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-greenSup focus:ring-1 focus:ring-greenSup transition-all [&>option]:text-black">
                                    <option value="">Selecione...</option>
                                    <option value="Capilar">Capilar</option>
                                    <option value="Facial">Facial</option>
                                    <option value="Corporal">Corporal</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </div>
                        </motion.div>
                    )}

                    {analysisType === "alimentos" && (
                        <motion.div
                            key="alimentos"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="space-y-4 overflow-hidden"
                        >
                            <div className="space-y-1">
                                <label htmlFor="tipo_alimento" className="text-sm font-medium text-white ml-1">Tipo de Alimento</label>
                                <select name="tipo_alimento" id="tipo_alimento" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-greenSup focus:ring-1 focus:ring-greenSup transition-all [&>option]:text-black">
                                    <option value="">Selecione...</option>
                                    <option value="Sólidos">Alimentos sólidos</option>
                                    <option value="Bebidas">Bebidas (não alcoólicas)</option>
                                    <option value="Alcoólicas">Bebidas alcoólicas</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </div>
                        </motion.div>
                    )}

                    {(analysisType === "outro" || analysisType !== "") && (
                        <motion.div
                            key="general-details"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="space-y-4 overflow-hidden"
                        >
                            <div className="space-y-1">
                                <label htmlFor="parametros_desejados" className="text-sm font-medium text-white ml-1">Detalhes / Parâmetros</label>
                                <textarea
                                    name="parametros_desejados"
                                    id="parametros_desejados"
                                    rows={3}
                                    placeholder="Descreva o que precisa analisar..."
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-400 focus:outline-none focus:border-greenSup focus:ring-1 focus:ring-greenSup transition-all resize-none"
                                ></textarea>
                            </div>
                        </motion.div>
                    )}

                </AnimatePresence>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label htmlFor="quantidade" className="text-sm font-medium text-white ml-1">Nº de Amostras</label>
                        <select name="quantidade" id="quantidade" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-greenSup focus:ring-1 focus:ring-greenSup transition-all [&>option]:text-black">
                            <option value="1-5">1-5</option>
                            <option value="6-10">6-10</option>
                            <option value="11-20">11-20</option>
                            <option value="20+">20+</option>
                        </select>
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="prazo_entrega" className="text-sm font-medium text-white ml-1">Prazo</label>
                        <select name="prazo_entrega" id="prazo_entrega" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-greenSup focus:ring-1 focus:ring-greenSup transition-all [&>option]:text-black">
                            <option value="Regular">Regular (4-7 dias)</option>
                            <option value="Urgente">Urgente (1-3 dias)</option>
                            <option value="Flexível">Flexível (7+ dias)</option>
                        </select>
                    </div>
                </div>

                {/* Hidden field for stats */}
                <input type="hidden" name="utilizou_servicos" value="Não/Novo Lead" />

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-greenSup hover:bg-greenSup/90 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-greenSup/20 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-lg disabled:opacity-75 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-6 h-6 animate-spin" />
                            Enviando...
                        </>
                    ) : (
                        <>
                            Solicitar Orçamento
                            <Send className="w-5 h-5" />
                        </>
                    )}
                </button>

                <p className="text-center text-xs text-gray-300 mt-4">
                    Seus dados estão seguros. Respondemos em até 1 dia útil.
                </p>
            </form>
        </div>
    )
}
