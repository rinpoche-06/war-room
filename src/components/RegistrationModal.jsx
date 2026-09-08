import { useState } from 'react'
import { X, Users, CreditCard, CheckCircle2, ArrowRight, ArrowLeft, QrCode, Sparkles, Copy, Check } from 'lucide-react'

const RegistrationModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1)
  const [copied, setCopied] = useState(false)
  const [ticketId, setTicketId] = useState('')

  // Form state
  const [formData, setFormData] = useState({
    teamName: '',
    college: '',
    leaderName: '',
    leaderEmail: '',
    leaderPhone: '',
    member2Name: '',
    member2Email: '',
    member3Name: '',
    member3Email: '',
    utrNumber: ''
  })

  if (!isOpen) return null

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleCopyUpi = () => {
    navigator.clipboard.writeText('gdgcec@upi')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (step === 1) {
      if (!formData.teamName || !formData.college) {
        alert('Please enter your Team Name and College Name.')
        return
      }
      setStep(2)
    } else if (step === 2) {
      if (!formData.leaderName || !formData.leaderEmail || !formData.leaderPhone) {
        alert('Please fill out Team Leader information.')
        return
      }
      setStep(3)
    } else if (step === 3) {
      if (!formData.utrNumber) {
        alert('Please enter your payment Transaction UTR / Ref Number.')
        return
      }
      const randomTicket = 'WR2026-' + Math.floor(100000 + Math.random() * 900000)
      setTicketId(randomTicket)
      setStep(4) // Success step
    }
  }

  const resetForm = () => {
    setStep(1)
    setFormData({
      teamName: '',
      college: '',
      leaderName: '',
      leaderEmail: '',
      leaderPhone: '',
      member2Name: '',
      member2Email: '',
      member3Name: '',
      member3Email: '',
      utrNumber: ''
    })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full border border-gray-200 shadow-2xl overflow-hidden relative my-8">
        
        {/* Close Button */}
        <button 
          onClick={resetForm}
          className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors z-10 cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="bg-gray-900 text-white p-6 sm:p-8 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F35B04] text-white text-[10px] font-black uppercase tracking-widest rounded-full mb-3">
            <Sparkles size={12} />
            OFFICIAL REGISTRATION FORM
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            WAR ROOM 2.0 <span className="text-[#F35B04]">Registration</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            13th Sept 2026 • SDPK Hall, College of Engineering Chengannur • ₹300 / Team
          </p>

          {/* Stepper indicator */}
          {step < 4 && (
            <div className="flex items-center gap-2 mt-6">
              <div className={`h-1.5 flex-1 rounded-full ${step >= 1 ? 'bg-[#F35B04]' : 'bg-gray-800'}`}></div>
              <div className={`h-1.5 flex-1 rounded-full ${step >= 2 ? 'bg-[#F35B04]' : 'bg-gray-800'}`}></div>
              <div className={`h-1.5 flex-1 rounded-full ${step >= 3 ? 'bg-[#F35B04]' : 'bg-gray-800'}`}></div>
            </div>
          )}
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8">

          {/* STEP 1: Team & College Info */}
          {step === 1 && (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="text-xs font-black text-gray-500 uppercase tracking-wider mb-2">Step 1 of 3: Team Information</div>
              
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Team Name *
                </label>
                <input
                  type="text"
                  name="teamName"
                  value={formData.teamName}
                  onChange={handleChange}
                  placeholder="e.g. Team Ignites"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#F35B04] focus:ring-2 focus:ring-orange-200 outline-none text-sm font-semibold text-gray-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  College / Institution Name *
                </label>
                <input
                  type="text"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  placeholder="e.g. College of Engineering Chengannur"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#F35B04] focus:ring-2 focus:ring-orange-200 outline-none text-sm font-semibold text-gray-900"
                />
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="btn-orange px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2 cursor-pointer"
                >
                  <span>Next: Team Members</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          )}

          {/* STEP 2: Members Info */}
          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="text-xs font-black text-gray-500 uppercase tracking-wider mb-2">Step 2 of 3: Member Details (3 Required)</div>
              
              {/* Leader */}
              <div className="p-4 bg-orange-50/60 rounded-2xl border border-orange-200 space-y-3">
                <div className="text-xs font-bold text-[#F35B04] uppercase">Team Leader Details</div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="leaderName"
                    value={formData.leaderName}
                    onChange={handleChange}
                    placeholder="Leader Full Name *"
                    required
                    className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-gray-300 focus:border-[#F35B04] outline-none text-xs font-semibold"
                  />
                  <input
                    type="email"
                    name="leaderEmail"
                    value={formData.leaderEmail}
                    onChange={handleChange}
                    placeholder="Leader Email *"
                    required
                    className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-gray-300 focus:border-[#F35B04] outline-none text-xs font-semibold"
                  />
                </div>
                <input
                  type="tel"
                  name="leaderPhone"
                  value={formData.leaderPhone}
                  onChange={handleChange}
                  placeholder="Leader WhatsApp Phone Number *"
                  required
                  className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-gray-300 focus:border-[#F35B04] outline-none text-xs font-semibold"
                />
              </div>

              {/* Member 2 */}
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 space-y-3">
                <div className="text-xs font-bold text-gray-700 uppercase">Team Member 2</div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="member2Name"
                    value={formData.member2Name}
                    onChange={handleChange}
                    placeholder="Member 2 Full Name"
                    className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-gray-300 focus:border-[#F35B04] outline-none text-xs font-semibold"
                  />
                  <input
                    type="email"
                    name="member2Email"
                    value={formData.member2Email}
                    onChange={handleChange}
                    placeholder="Member 2 Email"
                    className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-gray-300 focus:border-[#F35B04] outline-none text-xs font-semibold"
                  />
                </div>
              </div>

              {/* Member 3 */}
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 space-y-3">
                <div className="text-xs font-bold text-gray-700 uppercase">Team Member 3</div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="member3Name"
                    value={formData.member3Name}
                    onChange={handleChange}
                    placeholder="Member 3 Full Name"
                    className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-gray-300 focus:border-[#F35B04] outline-none text-xs font-semibold"
                  />
                  <input
                    type="email"
                    name="member3Email"
                    value={formData.member3Email}
                    onChange={handleChange}
                    placeholder="Member 3 Email"
                    className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-gray-300 focus:border-[#F35B04] outline-none text-xs font-semibold"
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-100 flex items-center gap-1 cursor-pointer"
                >
                  <ArrowLeft size={14} />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  className="btn-orange px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2 cursor-pointer"
                >
                  <span>Next: Fee Payment</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: Payment & UPI Confirmation */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="text-xs font-black text-gray-500 uppercase tracking-wider mb-2">Step 3 of 3: Fee Payment (₹300 / Team)</div>
              
              <div className="bg-[#FFEAD7] border border-orange-200 rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-5">
                <div className="w-28 h-28 bg-white rounded-xl p-2 border border-orange-300 flex items-center justify-center flex-shrink-0 shadow-sm">
                  {/* UPI QR code mock SVG */}
                  <svg viewBox="0 0 100 100" className="w-full h-full text-gray-900">
                    <path fill="currentColor" d="M10 10h30v30H10zM15 15v20h20V15zM20 20h10v10H20zM60 10h30v30H60zM65 15v20h20V15zM70 20h10v10H70zM10 60h30v30H10zM15 65v20h20V65zM20 70h10v10H20zM50 50h10v10H50zM70 50h20v10H70zM50 70h20v20H50zM80 80h10v10H80z" />
                  </svg>
                </div>

                <div className="text-left space-y-1.5 flex-1">
                  <span className="text-[10px] font-black text-orange-950 uppercase tracking-widest">PAYMENT VIA UPI</span>
                  <div className="text-xl font-black text-gray-900">₹300.00</div>
                  <p className="text-xs text-gray-700">Scan QR code using Google Pay, PhonePe, or Paytm.</p>
                  
                  <div className="flex items-center gap-2 pt-1">
                    <span className="text-xs font-bold text-gray-900 bg-white px-2.5 py-1 rounded-lg border border-orange-200">
                      UPI ID: gdgcec@upi
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyUpi}
                      className="p-1.5 bg-white hover:bg-orange-100 rounded-lg text-gray-700 transition-colors border border-orange-200"
                      title="Copy UPI ID"
                    >
                      {copied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Transaction UTR / Reference Number *
                </label>
                <input
                  type="text"
                  name="utrNumber"
                  value={formData.utrNumber}
                  onChange={handleChange}
                  placeholder="e.g. 425619873012"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#F35B04] focus:ring-2 focus:ring-orange-200 outline-none text-sm font-semibold text-gray-900"
                />
                <span className="text-[11px] text-gray-500 mt-1 block">Found in your payment app payment details receipt.</span>
              </div>

              <div className="pt-2 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-100 flex items-center gap-1 cursor-pointer"
                >
                  <ArrowLeft size={14} />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  className="btn-orange px-6 py-3 rounded-xl text-sm font-extrabold flex items-center gap-2 cursor-pointer shadow-lg"
                >
                  <CheckCircle2 size={16} />
                  <span>Complete Team Registration</span>
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: Registration Success */}
          {step === 4 && (
            <div className="text-center py-6 space-y-6 animate-fadeIn">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 size={36} />
              </div>

              <div>
                <span className="text-xs font-black text-emerald-600 uppercase tracking-widest">REGISTRATION CONFIRMED</span>
                <h3 className="text-2xl font-black text-gray-900 mt-1">Welcome to WAR ROOM 2.0!</h3>
                <p className="text-xs text-gray-600 mt-1">Your team spot has been recorded successfully.</p>
              </div>

              <div className="bg-gray-900 text-white rounded-2xl p-5 max-w-sm mx-auto text-left space-y-2 border border-gray-800 shadow-md">
                <div className="flex justify-between items-center text-xs text-gray-400 border-b border-gray-800 pb-2">
                  <span>REGISTRATION TICKET</span>
                  <span className="text-[#F35B04] font-mono font-bold">{ticketId}</span>
                </div>
                <div className="text-sm font-extrabold text-white">{formData.teamName}</div>
                <div className="text-xs text-gray-300">{formData.college}</div>
                <div className="text-[11px] text-gray-400 pt-2 flex justify-between">
                  <span>Leader: {formData.leaderName}</span>
                  <span>13th Sept 2026</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                <button
                  onClick={resetForm}
                  className="btn-orange px-6 py-3 rounded-xl text-xs font-bold cursor-pointer"
                >
                  Done & Close
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  )
}

export default RegistrationModal
