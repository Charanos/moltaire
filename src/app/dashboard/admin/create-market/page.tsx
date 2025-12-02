"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Upload, Plus, X, Save, Send, CheckCircle2, Calendar } from "lucide-react"
import { useRouter } from "next/navigation"
import { DashboardCard } from "@/components/dashboard/DashboardCard"

export default function CreateMarketPage() {
  const router = useRouter()
  const [tags, setTags] = useState<string[]>([])
  const [currentTag, setCurrentTag] = useState("")
  const [outcomes, setOutcomes] = useState([{ id: 1, name: "" }, { id: 2, name: "" }])

  const handleAddTag = () => {
    if (currentTag && !tags.includes(currentTag)) {
      setTags([...tags, currentTag])
      setCurrentTag("")
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove))
  }

  const handleAddOutcome = () => {
    setOutcomes([...outcomes, { id: outcomes.length + 1, name: "" }])
  }

  const handleRemoveOutcome = (id: number) => {
    if (outcomes.length > 2) {
      setOutcomes(outcomes.filter(outcome => outcome.id !== id))
    }
  }

  return (
    <div className="min-h-screen pb-32">
      <div className="max-w-full mx-auto px-6 pb-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center gap-4">
            <button 
              onClick={() => router.back()}
              className="w-10 h-10 rounded-lg border border-neutral-200 bg-white hover:bg-neutral-50 transition-colors flex items-center justify-center cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5 text-neutral-600" />
            </button>
            <div>
              <h1 className="text-2xl font-semibold text-neutral-900">Create New Market</h1>
              <p className="text-sm text-neutral-500 mt-0.5">Set up a new prediction market</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-green-600 bg-green-50 px-3 py-1.5 rounded-lg border border-green-100">
            <CheckCircle2 className="w-4 h-4" />
            <span className="font-medium font-mono">Draft saved 3:43:13 AM</span>
          </div>
        </motion.div>

        {/* Market Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <DashboardCard className="p-8 mb-6">
            <h2 className="text-lg font-semibold text-neutral-900 mb-6">Market Details</h2>
            
            {/* Title */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-neutral-900 mb-2">
                Market Title <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                placeholder="e.g., Will Bitcoin reach $100k by end of 2025?"
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
              />
            </div>

            {/* Description */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-neutral-900 mb-2">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea 
                rows={4}
                placeholder="Provide details about the market, resolution criteria, and any relevant information..."
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all resize-none"
              />
              <div className="flex justify-end mt-1.5">
                <span className="text-xs text-neutral-400 font-mono">0 / 2000 characters</span>
              </div>
            </div>

            {/* Image Upload */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-neutral-900 mb-2">
                Market Image/GIF (Optional)
              </label>
              <button className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 bg-white hover:bg-neutral-50 transition-all flex items-center justify-center gap-2 group cursor-pointer">
                <Upload className="w-4 h-4 text-neutral-500 group-hover:text-neutral-700 transition-colors" />
                <span className="text-sm font-medium text-neutral-600 group-hover:text-neutral-900 transition-colors">Attach Media (Optional)</span>
              </button>
              <p className="text-xs text-neutral-500 mt-1.5">Images (.jpg, .png, .webp), GIFs, or Videos (.mp4, .mov) • Max 5MB</p>
            </div>

            {/* Tags */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-neutral-900 mb-2">
                Tags (Optional)
              </label>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Add tags..."
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                  className="flex-1 px-3.5 py-2.5 text-sm rounded-lg border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                />
                <button 
                  onClick={handleAddTag}
                  className="px-4 py-2.5 rounded-lg bg-white border border-neutral-200 hover:bg-neutral-50 text-neutral-700 transition-all cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {tags.map(tag => (
                    <motion.span 
                      key={tag} 
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-neutral-100 text-xs font-medium text-neutral-700 border border-neutral-200"
                    >
                      {tag}
                      <button onClick={() => handleRemoveTag(tag)} className="hover:text-red-500 transition-colors cursor-pointer">
                        <X className="w-3 h-3" />
                      </button>
                    </motion.span>
                  ))}
                </div>
              )}
            </div>

            <div className="border-t border-neutral-100 my-6"></div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Buy-in Amount */}
              <div>
                <label className="block text-sm font-medium text-neutral-900 mb-2">
                  Buy-in Amount (MP) <span className="text-red-500">*</span>
                </label>
                <input 
                  type="number" 
                  defaultValue={10}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all font-mono"
                />
              </div>

              {/* Duration */}
              <div>
                <label className="block text-sm font-medium text-neutral-900 mb-2">
                  Market Duration
                </label>
                <select className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all appearance-none cursor-pointer">
                  <option>Daily (24h)</option>
                  <option>Weekly (7d)</option>
                  <option>Monthly (30d)</option>
                  <option>Custom</option>
                </select>
                <p className="text-xs text-neutral-500 mt-1.5">Affects early bettor bonus calculations</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Min Participants */}
              <div>
                <label className="block text-sm font-medium text-neutral-900 mb-2">
                  Min Participants <span className="text-red-500">*</span>
                </label>
                <input 
                  type="number" 
                  defaultValue={2}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all font-mono"
                />
              </div>

              {/* Max Participants */}
              <div>
                <label className="block text-sm font-medium text-neutral-900 mb-2">
                  Max Participants (Optional)
                </label>
                <input 
                  type="text" 
                  placeholder="Unlimited"
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all font-mono"
                />
              </div>
            </div>

            <div className="border-t border-neutral-100 my-6"></div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Close Time */}
              <div>
                <label className="block text-sm font-medium text-neutral-900 mb-2 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  Close Time <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text"
                  placeholder="dd/mm/yyyy --:--"
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all font-mono"
                />
              </div>

              {/* Settlement Time */}
              <div>
                <label className="block text-sm font-medium text-neutral-900 mb-2 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  Settlement Time <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text"
                  placeholder="dd/mm/yyyy --:--"
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all font-mono"
                />
              </div>

              {/* Publish Time */}
              <div>
                <label className="block text-sm font-medium text-neutral-900 mb-2 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  Scheduled Publish (Optional)
                </label>
                <input 
                  type="text"
                  placeholder="dd/mm/yyyy --:--"
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all font-mono"
                />
                <p className="text-xs text-neutral-500 mt-1.5">If set, market will automatically publish at this time</p>
              </div>
            </div>
          </DashboardCard>
        </motion.div>

        {/* Outcome Options Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <DashboardCard className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-neutral-900">Outcome Options</h2>
              <button 
                onClick={handleAddOutcome}
                className="text-sm font-medium text-neutral-700 hover:text-neutral-900 flex items-center gap-2 px-3 py-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition-all cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                Add Option
              </button>
            </div>

            <div className="space-y-6">
              {outcomes.map((outcome, index) => (
                <motion.div 
                  key={outcome.id} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 rounded-lg border border-neutral-200 bg-neutral-50/50"
                >
                  <div className="flex items-center justify-between mb-4">
                    <label className="text-sm font-medium text-neutral-900">
                      Option {index + 1} <span className="text-red-500">*</span>
                    </label>
                    {outcomes.length > 2 && (
                      <button 
                        onClick={() => handleRemoveOutcome(outcome.id)} 
                        className="p-1 rounded text-neutral-400 hover:text-red-500 hover:bg-red-50 transition-all cursor-pointer"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  <input 
                    type="text" 
                    placeholder={`e.g., ${index === 0 ? 'Yes' : index === 1 ? 'No' : 'Maybe'}`}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all mb-4"
                  />
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Option Image/GIF (Optional)
                    </label>
                    <button className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 bg-white hover:bg-neutral-50 transition-all flex items-center justify-center gap-2 group cursor-pointer">
                      <Upload className="w-4 h-4 text-neutral-500 group-hover:text-neutral-700 transition-colors" />
                      <span className="text-sm font-medium text-neutral-600 group-hover:text-neutral-900 transition-colors">Attach Media (Optional)</span>
                    </button>
                    <p className="text-xs text-neutral-500 mt-1.5">Images (.jpg, .png, .webp), GIFs, or Videos (.mp4, .mov) • Max 5MB</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </DashboardCard>
        </motion.div>
      </div>

      {/* Floating Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 px-6 py-4 z-20">
        <div className="max-w-5xl mx-auto flex items-center justify-end gap-3">
          <button 
            onClick={() => router.back()}
            className="px-5 py-2.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-lg transition-all cursor-pointer"
          >
            Cancel
          </button>
          <button className="px-5 py-2.5 text-sm font-medium text-neutral-700 hover:text-neutral-900 bg-white border border-neutral-200 hover:bg-neutral-50 rounded-lg transition-all flex items-center gap-2 cursor-pointer">
            <Save className="w-4 h-4" />
            Save Draft
          </button>
          <button className="px-6 py-2.5 text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-all flex items-center gap-2 cursor-pointer">
            <Send className="w-4 h-4" />
            Publish Now
          </button>
        </div>
      </div>
    </div>
  )
}