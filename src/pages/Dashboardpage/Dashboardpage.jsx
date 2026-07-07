/* eslint-disable no-unused-vars, no-empty, react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, Search, Users, Layout, Monitor, Code, 
  MousePointerClick, PenTool, Palette, Video, LogOut, 
  Lock, User, Calendar, Briefcase, Globe, FileText, 
  Database, RefreshCw, Mail, Phone, X, Award, ChevronRight,
  Flag, Check, Copy, ExternalLink, Filter, Sparkles, Clock, ShieldAlert,
  ArrowUpRight, AlertCircle, MessageSquare, ArrowRight, BarChart2
} from 'lucide-react';

const API_BASE = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
  ? 'http://127.0.0.1:8000'
  : 'https://api.ibraine.com';

const services = [
  "Performance Marketing",
  "SEM Experts",
  "SEO Services",
  "Social Media Marketing",
  "Website Design",
  "UX/UI Design",
  "GTM Integration",
  "CRO Optimization",
  "Content Writing",
  "Graphic Design",
  "Video Production"
];

const Dashboardpage = () => {
  // Authentication & Leads State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState('');
  const [adminUser, setAdminUser] = useState({ username: '', email: '' });
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Login Form State
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  
  // Interactive UX States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState('All');
  const [selectedLead, setSelectedLead] = useState(null);
  const [activeTab, setActiveTab] = useState('briefs'); // 'briefs' | 'services'
  const [flaggedLeads, setFlaggedLeads] = useState(new Set());
  const [readLeads, setReadLeads] = useState(new Set());
  const [toast, setToast] = useState({ visible: false, message: '' });
  const [viewMode, setViewMode] = useState('split'); // 'split' | 'analytics'

  // Toast Helper
  const showToast = (message) => {
    setToast({ visible: true, message });
    setTimeout(() => {
      setToast(prev => ({ ...prev, visible: false }));
    }, 2500);
  };

  // Check local storage for session on mount
  useEffect(() => {
    const savedToken = localStorage.getItem('ibraine_admin_token');
    const savedUsername = localStorage.getItem('ibraine_admin_username');
    const savedEmail = localStorage.getItem('ibraine_admin_email');
    
    if (savedToken && savedUsername) {
      setToken(savedToken);
      setAdminUser({ username: savedUsername, email: savedEmail || '' });
      setIsAuthenticated(true);
      fetchLeads(savedToken);
    }

    // Load flagged & read states from localStorage
    const savedFlags = localStorage.getItem('ibraine_flagged_leads');
    if (savedFlags) {
      try { setFlaggedLeads(new Set(JSON.parse(savedFlags))); } catch(e) {}
    }
    const savedRead = localStorage.getItem('ibraine_read_leads');
    if (savedRead) {
      try { setReadLeads(new Set(JSON.parse(savedRead))); } catch(e) {}
    }
  }, []);

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginForm(prev => ({ ...prev, [name]: value }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoginLoading(true);
    setError('');
    
    try {
      const response = await fetch(`${API_BASE}/api/login/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginForm)
      });
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        localStorage.setItem('ibraine_admin_token', data.token);
        localStorage.setItem('ibraine_admin_username', data.username);
        localStorage.setItem('ibraine_admin_email', data.email || '');
        
        setToken(data.token);
        setAdminUser({ username: data.username, email: data.email || '' });
        setIsAuthenticated(true);
        fetchLeads(data.token);
        showToast(`Welcome back, ${data.username}!`);
      } else {
        setError(data.error || 'Authentication failed. Please check credentials.');
      }
    } catch (err) {
      console.error(err);
      setError('Connection refused. Make sure the Django server is running.');
    } finally {
      setLoginLoading(false);
    }
  };

  const fetchLeads = async (authToken) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE}/api/dashboard/leads/`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
      
      const data = await response.json();
      if (response.ok && data.success) {
        setLeads(data.leads);
        // Sync read list with existing leads
        const allIds = new Set(data.leads.map(l => l.id));
        setReadLeads(prev => {
          const updated = new Set([...prev].filter(id => allIds.has(id)));
          return updated;
        });
      } else {
        setError(data.error || 'Failed to fetch lead data.');
        if (response.status === 401 || response.status === 403) {
          handleLogout();
        }
      }
    } catch (err) {
      console.error(err);
      setError('Connection error. Failed to load database.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('ibraine_admin_token');
    localStorage.removeItem('ibraine_admin_username');
    localStorage.removeItem('ibraine_admin_email');
    
    setIsAuthenticated(false);
    setToken('');
    setAdminUser({ username: '', email: '' });
    setLeads([]);
    setSelectedLead(null);
    setLoginForm({ username: '', password: '' });
    showToast('Logged out successfully.');
  };

  const toggleFlagLead = (leadId, e) => {
    if (e) e.stopPropagation();
    const updatedFlags = new Set(flaggedLeads);
    if (updatedFlags.has(leadId)) {
      updatedFlags.delete(leadId);
      showToast('Removed flag.');
    } else {
      updatedFlags.add(leadId);
      showToast('Flagged message.');
    }
    setFlaggedLeads(updatedFlags);
    localStorage.setItem('ibraine_flagged_leads', JSON.stringify([...updatedFlags]));
  };

  const markLeadAsRead = (leadId) => {
    if (!readLeads.has(leadId)) {
      const updatedRead = new Set(readLeads);
      updatedRead.add(leadId);
      setReadLeads(updatedRead);
      localStorage.setItem('ibraine_read_leads', JSON.stringify([...updatedRead]));
    }
  };

  const selectLeadWithRead = (lead) => {
    setSelectedLead(lead);
    markLeadAsRead(lead.id);
  };

  const copyContactDetails = (lead) => {
    const textToCopy = `Name: ${lead.full_name}\nEmail: ${lead.email}\nPhone: ${lead.phone}\nCompany: ${lead.company || 'N/A'}\nSubject: ${lead.subject}\nRequirements: ${lead.requirements}`;
    navigator.clipboard.writeText(textToCopy);
    showToast('Copied info to clipboard!');
  };

  // Helper: Format ISO date string nicely
  const formatDate = (isoString) => {
    if (!isoString) return 'N/A';
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Compute stats
  const totalLeads = leads.length;
  const contactLeadsCount = leads.filter(l => l.id.startsWith('brief_')).length;
  const serviceLeadsCount = leads.filter(l => !l.id.startsWith('brief_')).length;
  
  const todayCount = leads.filter(lead => {
    const today = new Date().toDateString();
    const leadDate = new Date(lead.created_at).toDateString();
    return today === leadDate;
  }).length;

  const getTopService = () => {
    if (leads.length === 0) return { name: 'None', count: 0 };
    const counts = {};
    leads.forEach(lead => {
      if (lead.services) {
        lead.services.split(',').forEach(s => {
          const service = s.trim();
          if (service) {
            counts[service] = (counts[service] || 0) + 1;
          }
        });
      }
    });
    let top = 'None';
    let max = 0;
    for (const [service, count] of Object.entries(counts)) {
      if (count > max) {
        max = count;
        top = service;
      }
    }
    return { name: top, count: max };
  };

  const topServiceData = getTopService();

  // Get last 7 days data for the chart dynamically
  const getChartData = () => {
    const data = [];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const dateString = d.toDateString();
      const dayLabel = days[d.getDay()];
      
      const count = leads.filter(lead => {
        return new Date(lead.created_at).toDateString() === dateString;
      }).length;
      
      data.push({
        label: dayLabel,
        count: count,
        date: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
      });
    }
    return data;
  };

  const chartData = getChartData();
  const maxChartCount = Math.max(...chartData.map(d => d.count), 5);

  const points = chartData.map((d, i) => {
    const x = 40 + (i * (440 / 6)); // margin left = 40, width space = 440 (total svg width = 500)
    const y = 150 - (d.count / maxChartCount) * 110; // margin bottom = 40, height space = 110 (total svg height = 190)
    return { x, y, ...d };
  });

  const linePath = points.length > 0 
    ? `M ${points.map(p => `${p.x},${p.y}`).join(' L ')}`
    : '';
  
  const areaPath = points.length > 0
    ? `${linePath} L ${points[points.length - 1].x},150 L ${points[0].x},150 Z`
    : '';

  // Filter leads list based on active tab
  const activeLeadsList = activeTab === 'briefs'
    ? leads.filter(l => l.id.startsWith('brief_'))
    : leads.filter(l => !l.id.startsWith('brief_'));

  // Filter leads according to Search and Service Category Filter
  const filteredLeads = activeLeadsList.filter(lead => {
    const matchesSearch = 
      lead.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.phone.includes(searchQuery) ||
      (lead.company && lead.company.toLowerCase().includes(searchQuery.toLowerCase())) ||
      lead.subject.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesService = 
      selectedService === 'All' || 
      lead.services.toLowerCase().includes(selectedService.toLowerCase());
      
    return matchesSearch && matchesService;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans relative antialiased flex flex-col selection:bg-indigo-150 selection:text-indigo-900 w-full text-xs">
      
      {/* Dynamic top gradient grid pattern for modern SaaS aesthetic */}
      <div className="absolute top-0 left-0 w-full h-[260px] bg-gradient-to-b from-indigo-50/60 via-slate-50/20 to-transparent pointer-events-none z-0 border-b border-indigo-100/10" />

      {/* Modern Slide Toast notifications */}
      <AnimatePresence>
        {toast.visible && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-5 left-1/2 -translate-x-1/2 z-[3000] px-4 py-2.5 bg-white/90 backdrop-blur-md border border-indigo-100 shadow-[0_15px_40px_rgba(99,102,241,0.08)] rounded-2xl flex items-center gap-2.5"
          >
            <div className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-650">
              <Check size={11} className="stroke-[3] text-indigo-600" />
            </div>
            <span className="text-xs font-bold text-slate-700 whitespace-nowrap">{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!isAuthenticated ? (
          // ═════════════════════ HIGH-END GLASS LOGIN SCREEN ═════════════════════
          <div className="relative min-h-screen flex items-center justify-center px-4 w-full z-10 overflow-hidden bg-slate-50">
            {/* Background elements */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-indigo-200/40 blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-violet-200/40 blur-3xl" />

            <motion.div 
              key="login"
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[390px] bg-white border border-slate-200/70 shadow-[0_15px_35px_rgba(0,0,0,0.03)] rounded-3xl p-8"
            >
              <div className="mb-6 text-center">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100/50 flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <ShieldAlert className="text-indigo-655 text-indigo-600" size={22} />
                </div>
                <h2 className="text-xl text-slate-900 font-black tracking-tight">
                  iBraine Portal
                </h2>
                <p className="text-slate-400 text-xs mt-1.5 font-medium">Administrative identity authentication</p>
              </div>

              {error && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-5 p-3.5 rounded-xl bg-rose-50 border border-rose-100 text-rose-600 text-xs font-semibold text-center leading-relaxed"
                >
                  {error}
                </motion.div>
              )}

              <form onSubmit={handleLoginSubmit} className="space-y-4">
                {/* Username Input */}
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block pl-0.5">
                    Username
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-3 text-slate-400" size={14} />
                    <input 
                      type="text"
                      name="username"
                      value={loginForm.username}
                      onChange={handleLoginChange}
                      required
                      placeholder="admin"
                      className="w-full bg-slate-50/50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-3 outline-none focus:border-indigo-500 focus:bg-white text-xs text-slate-800 transition-all font-semibold"
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block pl-0.5">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-3 text-slate-400" size={14} />
                    <input 
                      type="password"
                      name="password"
                      value={loginForm.password}
                      onChange={handleLoginChange}
                      required
                      placeholder="••••••••"
                      className="w-full bg-slate-50/50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-3 outline-none focus:border-indigo-500 focus:bg-white text-xs text-slate-800 transition-all font-semibold"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loginLoading}
                  className="w-full bg-indigo-600 hover:bg-indigo-555 hover:bg-indigo-500 text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer disabled:opacity-50 shadow-sm flex items-center justify-center gap-1.5 mt-4"
                >
                  {loginLoading ? (
                    <RefreshCw className="animate-spin" size={13} />
                  ) : (
                    <>
                      Verify Identity
                      <ChevronRight size={13} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        ) : (
          // ═════════════════════ HIGH-END WORKSPACE LAYOUT (LIGHT MODE) ═════════════════════
          <div className="flex flex-col min-h-screen relative z-10 w-full bg-[#F8FAFC]">
            
            {/* TOP HEADER BAR (MODERN GLOSSY DESK) */}
            <header className="h-14 border-b border-slate-200/80 bg-white/70 backdrop-blur-md flex items-center justify-between px-6 lg:px-8 shrink-0 sticky top-0 z-50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-500 to-indigo-650 flex items-center justify-center text-white shadow-[0_4px_12px_rgba(99,102,241,0.2)] font-black text-sm">
                  iB
                </div>
                <div>
                  <h1 className="font-black text-sm tracking-tight text-slate-800 leading-tight">iBraine Inquiries</h1>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Console: <span className="text-slate-600 font-extrabold">{adminUser.username}</span></p>
                </div>
              </div>

              {/* Navigation Tabs (Toggle Layout View) */}
              <div className="flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl">
                <button
                  onClick={() => setViewMode('split')}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all border-none bg-transparent cursor-pointer flex items-center gap-1.5 ${
                    viewMode === 'split'
                      ? 'bg-white text-indigo-650 shadow-[0_2px_8px_rgba(0,0,0,0.03)] font-extrabold'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <MessageSquare size={13} />
                  Inquiry Ledger
                </button>
                <button
                  onClick={() => setViewMode('analytics')}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all border-none bg-transparent cursor-pointer flex items-center gap-1.5 ${
                    viewMode === 'analytics'
                      ? 'bg-white text-indigo-650 shadow-[0_2px_8px_rgba(0,0,0,0.03)] font-extrabold'
                      : 'text-slate-505 text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <BarChart2 size={13} />
                  Analytics Desk
                </button>
              </div>

              {/* Header Actions */}
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => fetchLeads(token)}
                  disabled={loading}
                  className="p-1.5 border border-slate-200/80 bg-white hover:bg-slate-50 text-slate-500 rounded-lg transition-all cursor-pointer flex items-center justify-center disabled:opacity-50"
                  title="Refresh Database"
                >
                  <RefreshCw size={13} className={loading ? "animate-spin" : ""} />
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1 border border-slate-205 border-slate-200/80 bg-white hover:bg-rose-50 hover:text-rose-600 hover:border-rose-100 text-slate-555 text-slate-500 py-1.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer"
                >
                  <LogOut size={12} />
                  Logout
                </button>
              </div>
            </header>

            {/* MAIN WORKSPACE BODY - FULL WIDTH & DENSE LAYOUT */}
            <main className="flex-1 p-4 lg:p-6 space-y-6 w-full max-w-full overflow-y-auto z-10">
              
              {/* METRICS WIDGETS SECTION */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                
                {/* Metric 1 */}
                <div className="bg-white border border-slate-200/70 p-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.01)] relative overflow-hidden group hover:border-indigo-100 hover:shadow-[0_4px_20px_rgba(99,102,241,0.02)] transition-all flex items-start justify-between">
                  <div className="space-y-1.5">
                    <span className="text-xs uppercase tracking-wider font-extrabold text-slate-400">Received Today</span>
                    <div className="flex items-baseline gap-2">
                      <h3 className="text-2xl font-black text-slate-900 tracking-tight">{todayCount}</h3>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-1.5 py-0.5 rounded">Live</span>
                    </div>
                    <p className="text-[10px] text-slate-455 text-slate-400 font-medium">Incoming inquiries captured</p>
                  </div>
                  <div className="w-8 h-8 rounded-xl bg-indigo-50/50 border border-indigo-100/50 flex items-center justify-center text-indigo-650 shrink-0">
                    <Clock size={15} />
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="bg-white border border-slate-200/70 p-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.01)] relative overflow-hidden group hover:border-indigo-100 hover:shadow-[0_4px_20px_rgba(99,102,241,0.02)] transition-all flex items-start justify-between">
                  <div className="space-y-1.5">
                    <span className="text-xs uppercase tracking-wider font-extrabold text-slate-400">Project Briefs</span>
                    <div className="flex items-baseline gap-2">
                      <h3 className="text-2xl font-black text-slate-900 tracking-tight">{contactLeadsCount}</h3>
                      <span className="text-[10px] font-bold text-indigo-650 bg-indigo-50 border border-indigo-100/50 px-1.5 py-0.5 rounded">Contact Page</span>
                    </div>
                    <p className="text-[10px] text-slate-455 text-slate-400 font-medium">Comprehensive client briefs</p>
                  </div>
                  <div className="w-8 h-8 rounded-xl bg-violet-50/50 border border-violet-100/50 flex items-center justify-center text-violet-650 shrink-0">
                    <FileText size={15} />
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="bg-white border border-slate-200/70 p-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.01)] relative overflow-hidden group hover:border-indigo-100 hover:shadow-[0_4px_20px_rgba(99,102,241,0.02)] transition-all flex items-start justify-between">
                  <div className="space-y-1.5">
                    <span className="text-xs uppercase tracking-wider font-extrabold text-slate-400">Quick Inquiries</span>
                    <div className="flex items-baseline gap-2">
                      <h3 className="text-2xl font-black text-slate-900 tracking-tight">{serviceLeadsCount}</h3>
                      <span className="text-[10px] font-bold text-pink-650 bg-pink-50 border border-pink-100/50 px-1.5 py-0.5 rounded">Service Desk</span>
                    </div>
                    <p className="text-[10px] text-slate-455 text-slate-400 font-medium">Actionable service inquiries</p>
                  </div>
                  <div className="w-8 h-8 rounded-xl bg-pink-50/50 border border-pink-100/50 flex items-center justify-center text-pink-650 shrink-0">
                    <Layout size={15} />
                  </div>
                </div>

                {/* Metric 4 */}
                <div className="bg-white border border-slate-200/70 p-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.01)] relative overflow-hidden group hover:border-indigo-100 hover:shadow-[0_4px_20px_rgba(99,102,241,0.02)] transition-all flex items-start justify-between">
                  <div className="space-y-1.5 min-w-0 flex-1">
                    <span className="text-xs uppercase tracking-wider font-extrabold text-slate-400">Top Service Capability</span>
                    <h3 className="text-base font-black text-slate-900 tracking-tight truncate pr-1" title={topServiceData.name}>{topServiceData.name}</h3>
                    <p className="text-[10px] text-slate-455 text-slate-400 font-medium">{topServiceData.count} total allocations</p>
                  </div>
                  <div className="w-8 h-8 rounded-xl bg-amber-50/50 border border-amber-100/50 flex items-center justify-center text-amber-655 text-amber-600 shrink-0">
                    <Award size={15} />
                  </div>
                </div>
              </div>

              <AnimatePresence mode="wait">
                
                {/* ════ VIEW 1: DYNAMIC INQUIRY SPLIT LEDGER ════ */}
                {viewMode === 'split' && (
                  <motion.div 
                    key="split-view"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start relative z-10 w-full"
                  >
                    
                    {/* LEFT MESSAGES COLUMN (5 Columns) */}
                    <div className="lg:col-span-5 space-y-4">
                      
                      {/* Interactive Search & Category Filter Card */}
                      <div className="bg-white border border-slate-200/70 p-4 rounded-2xl shadow-sm space-y-3.5">
                        <div className="relative">
                          <Search className="absolute left-3.5 top-3 text-slate-400" size={14} />
                          <input 
                            type="text"
                            placeholder="Search client briefs..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 pl-10 pr-3 outline-none focus:border-indigo-500 focus:bg-white text-xs text-slate-700 placeholder-slate-400 transition-all font-semibold"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest pl-0.5">Filter by Service Category</label>
                          <select
                            value={selectedService}
                            onChange={(e) => setSelectedService(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-xs font-bold text-slate-600 outline-none focus:border-indigo-500 focus:bg-white cursor-pointer transition-all"
                          >
                            <option value="All">All Services</option>
                            {services.map((service, i) => (
                              <option key={i} value={service}>{service}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Inbox List Container */}
                      <div className="bg-white border border-slate-200/70 rounded-2xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.015)]">
                        
                        {/* Tab header toggle buttons */}
                        <div className="flex border-b border-slate-100 bg-slate-50/50">
                          <button
                            onClick={() => {
                              setActiveTab('briefs');
                              setSearchQuery('');
                              setSelectedLead(null);
                            }}
                            className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                              activeTab === 'briefs'
                                ? 'border-b-indigo-650 text-indigo-650 bg-indigo-50/10 font-black'
                                : 'border-b-transparent text-slate-400 hover:text-slate-655'
                            }`}
                          >
                            Project Briefs
                            <span className={`px-1.5 py-0.5 rounded-full text-xs font-bold ${
                              activeTab === 'briefs' ? 'bg-indigo-100 text-indigo-755 font-bold' : 'bg-slate-100 text-slate-400'
                            }`}>
                              {contactLeadsCount}
                            </span>
                          </button>
                          
                          <button
                            onClick={() => {
                              setActiveTab('services');
                              setSearchQuery('');
                              setSelectedLead(null);
                            }}
                            className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                              activeTab === 'services'
                                ? 'border-b-indigo-655 text-indigo-655 bg-indigo-50/10 font-black'
                                : 'border-b-transparent text-slate-400 hover:text-slate-655'
                            }`}
                          >
                            Service Inquiries
                            <span className={`px-1.5 py-0.5 rounded-full text-xs font-bold ${
                              activeTab === 'services' ? 'bg-indigo-100 text-indigo-755 font-bold' : 'bg-slate-100 text-slate-400'
                            }`}>
                              {serviceLeadsCount}
                            </span>
                          </button>
                        </div>

                        {/* List Items scroll viewport */}
                        <div className="divide-y divide-slate-100 max-h-[460px] overflow-y-auto custom-scrollbar">
                          {loading ? (
                            <div className="py-16 text-center text-slate-400 font-medium space-y-3">
                              <RefreshCw className="animate-spin inline text-indigo-500" size={16} />
                              <p className="text-xs">Connecting to VPS database...</p>
                            </div>
                          ) : filteredLeads.length === 0 ? (
                            <div className="py-16 text-center text-slate-455 font-medium">
                              No inquiries found matching criteria.
                            </div>
                          ) : (
                            filteredLeads.map((lead) => {
                              const isUnread = !readLeads.has(lead.id);
                              const isFlagged = flaggedLeads.has(lead.id);
                              const isSelected = selectedLead && selectedLead.id === lead.id;
                              
                              return (
                                <div 
                                  key={lead.id}
                                  onClick={() => selectLeadWithRead(lead)}
                                  className={`p-3.5 transition-all cursor-pointer relative flex items-start gap-3.5 border-l-2 ${
                                    isSelected 
                                      ? 'bg-slate-50/60 border-l-indigo-650' 
                                      : 'hover:bg-slate-50/30 border-l-transparent'
                                  }`}
                                >
                                  {/* Unread dot */}
                                  {isUnread && (
                                    <span className="w-2 h-2 rounded-full bg-indigo-600 absolute left-2 top-1/2 -translate-y-1/2 shadow-[0_0_8px_rgba(99,102,241,0.4)] animate-pulse" />
                                  )}

                                  {/* Flag */}
                                  {isFlagged && (
                                    <Flag size={11} className="text-amber-500 absolute right-3.5 top-3.5 fill-amber-500" />
                                  )}

                                  {/* User initials bubble */}
                                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-slate-50 to-slate-100 border border-slate-205 border-slate-200/80 flex items-center justify-center text-xs font-extrabold text-slate-655 shrink-0 shadow-sm">
                                    {lead.full_name.substring(0, 2).toUpperCase()}
                                  </div>

                                  <div className="flex-1 min-w-0 pr-4 space-y-1">
                                    <h4 className="text-xs font-bold text-slate-800 truncate">
                                      {lead.full_name}
                                    </h4>
                                    <div className="flex items-center gap-1.5">
                                      <span className="text-[9px] font-extrabold text-indigo-755 text-indigo-650 uppercase bg-indigo-50 border border-indigo-100/50 px-2 py-0.5 rounded">
                                        {lead.subject}
                                      </span>
                                      {lead.company && (
                                        <span className="text-[11px] text-slate-400 truncate">
                                          @ {lead.company}
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-[11px] text-slate-455 text-slate-400 mt-1 line-clamp-1 italic font-medium leading-normal">
                                      "{lead.requirements || 'No project description brief provided.'}"
                                    </p>
                                  </div>
                                </div>
                              );
                            })
                          )}
                        </div>

                        {/* List viewport footer summary */}
                        <div className="py-2.5 px-4 bg-slate-50/50 border-t border-slate-100 flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                          <span>Total Filtered: {filteredLeads.length} of {activeLeadsList.length}</span>
                        </div>
                      </div>
                    </div>

                    {/* RIGHT COLUMN: LEAD DETAIL VIEWER (7 Columns) */}
                    <div className="lg:col-span-7">
                      <AnimatePresence mode="wait">
                        {!selectedLead ? (
                          // Placeholder State (styled like a high-end workspace page)
                          <motion.div 
                            key="placeholder"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="bg-white border border-slate-200/70 p-12 rounded-2xl text-center space-y-4 flex flex-col items-center justify-center min-h-[440px] shadow-sm relative overflow-hidden"
                          >
                            {/* Decorative grids */}
                            <div className="absolute inset-0 bg-grid-pattern opacity-[0.01] pointer-events-none" />
                            <div className="w-14 h-14 rounded-2xl bg-indigo-50/80 border border-indigo-100/50 flex items-center justify-center text-indigo-500 mb-2 shadow-sm">
                              <FileText size={24} />
                            </div>
                            <div className="space-y-1.5 max-w-sm">
                              <h3 className="text-sm font-extrabold text-slate-800">Inquiry Workspace</h3>
                              <p className="text-xs text-slate-455 text-slate-450 leading-relaxed font-medium">
                                Please select an inquiry from the ledger to view the client's information card, requested capabilities, and email options.
                              </p>
                            </div>
                          </motion.div>
                        ) : (
                          // Full Message Detail Card
                          <motion.div
                            key="details"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.2 }}
                            className="bg-white border border-slate-200/70 rounded-2xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.015)] flex flex-col min-h-[440px]"
                          >
                            {/* Detail Card Header */}
                            <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between gap-4">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-500 to-indigo-600 flex items-center justify-center text-white font-extrabold text-xs shadow-sm">
                                  {selectedLead.full_name.substring(0, 2).toUpperCase()}
                                </div>
                                <div className="min-w-0">
                                  <h3 className="font-black text-slate-900 text-sm leading-snug truncate">{selectedLead.full_name}</h3>
                                  <div className="flex items-center gap-2 mt-0.5">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">ID: #{selectedLead.id}</span>
                                    <span className="w-1 h-1 rounded-full bg-slate-200" />
                                    <span className="text-[11px] text-slate-500 font-semibold flex items-center gap-1"><Clock size={10} /> {formatDate(selectedLead.created_at)}</span>
                                  </div>
                                </div>
                              </div>

                              {/* Card actions */}
                              <div className="flex items-center gap-1.5">
                                <button
                                  onClick={(e) => toggleFlagLead(selectedLead.id, e)}
                                  className={`p-1.5 border rounded-lg transition-all cursor-pointer ${
                                    flaggedLeads.has(selectedLead.id)
                                      ? 'bg-amber-50 border-amber-250 text-amber-500 animate-pulse shadow-sm'
                                      : 'bg-white border-slate-200 text-slate-400 hover:text-slate-655 hover:bg-slate-50'
                                  }`}
                                  title="Flag message"
                                >
                                  <Flag size={12} className={flaggedLeads.has(selectedLead.id) ? "fill-amber-500" : ""} />
                                </button>
                                <button
                                  onClick={() => copyContactDetails(selectedLead)}
                                  className="p-1.5 border border-slate-200 bg-white hover:bg-slate-50 text-slate-400 hover:text-slate-655 rounded-lg transition-all cursor-pointer"
                                  title="Copy details"
                                >
                                  <Copy size={12} />
                                </button>
                              </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-5 space-y-5 flex-1">
                              
                              {/* Client Details Grid */}
                              <div className="space-y-2.5">
                                <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-650 block border-b border-slate-100 pb-1">Client Identity card</span>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3 text-xs leading-normal">
                                  {/* Company Card */}
                                  <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl space-y-1">
                                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Company Name</span>
                                    <span className="font-bold text-slate-800">{selectedLead.company || 'Not Specified'}</span>
                                  </div>
                                  
                                  {/* Website Card */}
                                  <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl space-y-1">
                                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Website URL</span>
                                    {selectedLead.website ? (
                                      <a 
                                        href={selectedLead.website.startsWith('http') ? selectedLead.website : `https://${selectedLead.website}`} 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        className="font-bold text-indigo-600 hover:text-indigo-500 inline-flex items-center gap-1 hover:underline"
                                      >
                                        <Globe size={11} />
                                        {selectedLead.website}
                                        <ExternalLink size={9} />
                                      </a>
                                    ) : (
                                      <span className="font-medium text-slate-400">None</span>
                                    )}
                                  </div>

                                  {/* Email Card */}
                                  <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl space-y-1">
                                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Email Address</span>
                                    <a href={`mailto:${selectedLead.email}`} className="font-bold text-indigo-600 hover:underline flex items-center gap-1">
                                      <Mail size={11} />
                                      {selectedLead.email}
                                    </a>
                                  </div>

                                  {/* Phone Card */}
                                  <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl space-y-1">
                                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Phone Connection</span>
                                    <a href={`tel:${selectedLead.phone}`} className="font-bold text-indigo-600 hover:underline flex items-center gap-1">
                                      <Phone size={11} />
                                      {selectedLead.phone}
                                    </a>
                                  </div>
                                </div>
                              </div>

                              {/* Service Tags */}
                              <div className="space-y-2">
                                <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-650 block border-b border-slate-100 pb-1">Requested Capabilities</span>
                                <div className="flex flex-wrap gap-1.5 pt-0.5">
                                  {selectedLead.services ? (
                                    selectedLead.services.split(',').map((service, i) => (
                                      <span 
                                        key={i} 
                                        className="border border-indigo-100/50 bg-indigo-50/30 text-indigo-655 px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all hover:bg-indigo-50 hover:border-indigo-200"
                                      >
                                        {service.trim()}
                                      </span>
                                    ))
                                  ) : (
                                    <span className="text-slate-455 text-xs font-medium">No capabilities specified</span>
                                  )}
                                </div>
                              </div>

                              {/* Requirements message block */}
                              <div className="space-y-2.5">
                                <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-655 block border-b border-slate-100 pb-1">Message / Requirements Brief</span>
                                <div className="space-y-2">
                                  <div className="text-[10px] font-bold text-slate-455 text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                                    <span>Subject:</span>
                                    <span className="bg-indigo-50 text-indigo-650 border border-indigo-100 px-2 py-0.5 rounded text-xs font-bold">{selectedLead.subject}</span>
                                  </div>
                                  <div className="border border-slate-205 border-slate-200 bg-slate-50/50 p-4 rounded-xl text-xs text-slate-700 leading-relaxed font-medium whitespace-pre-wrap">
                                    "{selectedLead.requirements || 'No project description brief provided.'}"
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Detail Card Actions Footer */}
                            <div className="p-3 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
                              <button
                                onClick={() => setSelectedLead(null)}
                                className="px-3.5 py-1.5 border border-slate-200 bg-white hover:bg-slate-50 text-slate-500 rounded-lg text-xs font-bold transition-all cursor-pointer"
                              >
                                Close File
                              </button>
                              <a
                                href={`mailto:${selectedLead.email}?subject=Regarding Your Inquiry: ${selectedLead.subject}`}
                                className="px-4.5 py-1.5 bg-indigo-650 hover:bg-indigo-600 text-white rounded-lg text-xs font-bold transition-all hover:shadow-[0_4px_12px_rgba(99,102,241,0.2)] flex items-center gap-1.5"
                              >
                                <Mail size={12} />
                                Compose Reply
                              </a>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                  </motion.div>
                )}

                {/* ════ VIEW 2: REPORTS & CHARTS VIEW (LINE CHART) ════ */}
                {viewMode === 'analytics' && (
                  <motion.div 
                    key="analytics-view"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <div>
                      <h2 className="text-base font-extrabold tracking-tight text-slate-900">Database Charts & Analytics</h2>
                      <p className="text-slate-400 text-xs mt-0.5">Real-time statistics compiled from incoming submission forms.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="bg-white border border-slate-200/70 p-5 rounded-2xl lg:col-span-2 space-y-5 shadow-sm">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-xs font-bold text-slate-800">Weekly Ingestion Flow</h4>
                            <p className="text-[10px] text-slate-500">Visualization of database inputs captured.</p>
                          </div>
                          <span className="text-[10px] font-bold text-indigo-655 bg-indigo-50 border border-indigo-100 py-0.5 px-2.5 rounded-full">Line Graph</span>
                        </div>
                        
                        {/* Dynamic Line Chart */}
                        <div className="w-full relative pt-2">
                          <svg className="w-full h-auto" viewBox="0 0 500 190">
                            <defs>
                              <linearGradient id="gradient-chart" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="rgb(99, 102, 241)" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="rgb(99, 102, 241)" stopOpacity="0" />
                              </linearGradient>
                            </defs>
                            
                            {/* Grid lines */}
                            <line x1="40" y1="30" x2="480" y2="30" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3,3" />
                            <line x1="40" y1="90" x2="470" y2="90" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3,3" />
                            <line x1="40" y1="150" x2="470" y2="150" stroke="#E2E8F0" strokeWidth="1" />
                            
                            {/* Y-Axis Labels */}
                            <text x="10" y="34" fill="#94A3B8" fontSize="9" fontWeight="bold">{maxChartCount}</text>
                            <text x="10" y="94" fill="#94A3B8" fontSize="9" fontWeight="bold">{Math.round(maxChartCount / 2)}</text>
                            <text x="20" y="154" fill="#94A3B8" fontSize="9" fontWeight="bold">0</text>
                            
                            {/* Area under the line */}
                            {areaPath && <path d={areaPath} fill="url(#gradient-chart)" />}
                            
                            {/* Line path */}
                            {linePath && (
                              <path d={linePath} fill="none" stroke="rgb(99, 102, 241)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            )}
                            
                            {/* Dots and Labels */}
                            {points.map((p, idx) => (
                              <g key={idx} className="group">
                                <circle cx={p.x} cy={p.y} r="4" fill="rgb(99, 102, 241)" stroke="#FFFFFF" strokeWidth="2" />
                                {/* Value label above dot */}
                                <text x={p.x} y={p.y - 8} textAnchor="middle" fill="#4F46E5" fontSize="9" fontWeight="bold">
                                  {p.count}
                                </text>
                                {/* X-Axis Date label */}
                                <text x={p.x} y="170" textAnchor="middle" fill="#64748B" fontSize="9" fontWeight="bold">
                                  {p.label}
                                </text>
                              </g>
                            ))}
                          </svg>
                        </div>
                      </div>

                      <div className="bg-white border border-slate-200/70 p-5 rounded-2xl space-y-5 shadow-sm">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-xs font-bold text-slate-800">Category Division</h4>
                            <p className="text-[10px] text-slate-500">Division between contact types.</p>
                          </div>
                        </div>

                        {/* Concentric Progress Display */}
                        <div className="flex flex-col items-center justify-center py-4 relative">
                          <div className="relative w-28 h-28 flex items-center justify-center">
                            {/* Background ring */}
                            <svg className="w-full h-full transform -rotate-90">
                              <circle cx="56" cy="56" r="48" stroke="#F1F5F9" strokeWidth="9" fill="transparent" />
                              <circle 
                                cx="56" 
                                cy="56" 
                                r="48" 
                                stroke="rgb(99, 102, 241)" 
                                strokeWidth="9" 
                                fill="transparent" 
                                strokeDasharray={301.6}
                                strokeDashoffset={totalLeads > 0 ? 301.6 - (301.6 * (contactLeadsCount / totalLeads)) : 301.6}
                                strokeLinecap="round"
                              />
                            </svg>
                            <div className="absolute flex flex-col items-center justify-center">
                              <span className="text-xl font-black text-slate-800">
                                {totalLeads > 0 ? Math.round((contactLeadsCount / totalLeads) * 100) : 0}%
                              </span>
                              <span className="text-[8px] font-bold tracking-widest uppercase text-slate-400">Briefs</span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-1.5 pt-1.5 text-xs font-bold text-slate-500">
                          <div className="flex items-center justify-between">
                            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-indigo-500" /> Project Briefs</span>
                            <span>{contactLeadsCount} ({totalLeads > 0 ? Math.round((contactLeadsCount / totalLeads) * 100) : 0}%)</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-slate-200" /> Service Inquiries</span>
                            <span>{serviceLeadsCount} ({totalLeads > 0 ? Math.round((serviceLeadsCount / totalLeads) * 100) : 0}%)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>

            </main>

          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Dashboardpage;
