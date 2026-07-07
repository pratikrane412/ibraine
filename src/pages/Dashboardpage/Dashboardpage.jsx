import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, Search, Users, Layout, Monitor, Code, 
  MousePointerClick, PenTool, Palette, Video, LogOut, 
  Lock, User, Calendar, Briefcase, Globe, FileText, 
  Database, RefreshCw, Mail, Phone, X, Award, ChevronRight
} from 'lucide-react';

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
  
  // Dashboard UI State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState('All');
  const [selectedLead, setSelectedLead] = useState(null);
  const [activeTab, setActiveTab] = useState('briefs'); // 'briefs' | 'services'
  
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
      const response = await fetch('http://127.0.0.1:8000/api/login/', {
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
      } else {
        setError(data.error || 'Authentication failed. Please check credentials.');
      }
    } catch (err) {
      console.error(err);
      setError('Connection refused. Please make sure the Django server is running.');
    } finally {
      setLoginLoading(false);
    }
  };

  const fetchLeads = async (authToken) => {
    setLoading(true);
    try {
      const response = await fetch('http://127.0.0.1:8000/api/dashboard/leads/', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
      
      const data = await response.json();
      if (response.ok && data.success) {
        setLeads(data.leads);
      } else {
        setError(data.error || 'Failed to fetch lead data.');
        if (response.status === 401 || response.status === 403) {
          handleLogout();
        }
      }
    } catch (err) {
      console.error(err);
      setError('Error connecting to the database server.');
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

  // Compute analytics from loaded leads
  const totalLeads = leads.length;
  const contactLeadsCount = leads.filter(l => l.id.startsWith('brief_')).length;
  const serviceLeadsCount = leads.filter(l => !l.id.startsWith('brief_')).length;
  
  const todayCount = leads.filter(lead => {
    const today = new Date().toDateString();
    const leadDate = new Date(lead.created_at).toDateString();
    return today === leadDate;
  }).length;

  // Compute top service requested
  const getTopService = () => {
    if (leads.length === 0) return 'None';
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
    return top;
  };

  // Filter leads list based on selected Tab (Briefs vs Quick Service inquiries)
  const activeLeadsList = activeTab === 'briefs'
    ? leads.filter(l => l.id.startsWith('brief_'))
    : leads.filter(l => !l.id.startsWith('brief_'));

  // Filter leads according to Search Query and Service Category Filter
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
    <div className="min-h-screen bg-slate-50 font-lora relative pb-16">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-lines pointer-events-none opacity-30 z-0" />

      <AnimatePresence mode="wait">
        {!isAuthenticated ? (
          // ═════════════════════ MINIMAL EDITORIAL LOGIN SCREEN ═════════════════════
          <div className="relative min-h-[90vh] flex items-center justify-center px-4 w-full">
            <motion.div 
              key="login"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative z-10 w-full max-w-md bg-white border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] rounded-3xl p-8 md:p-12"
            >
              <div className="mb-10 text-center">
                <img src="/images/logo.png" alt="iBraine Logo" className="h-10 w-auto mx-auto mb-6" />
                <h2 className="text-3xl text-slate-900 font-bold leading-tight font-lora">
                  Admin Portal.
                </h2>
                <p className="text-slate-400 text-xs mt-2 font-medium">Verify credentials to access inquiry leads.</p>
              </div>

              {error && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mb-8 p-4 rounded-xl bg-rose-50 border border-rose-100 text-rose-700 text-xs font-semibold text-center"
                >
                  {error}
                </motion.div>
              )}

              <form onSubmit={handleLoginSubmit} className="space-y-8">
                {/* Username Input */}
                <div className="group relative pt-4">
                  <label className="absolute top-0 left-0 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 group-focus-within:text-[#2c66f6] transition-colors duration-300">
                    Username
                  </label>
                  <input 
                    type="text"
                    name="username"
                    value={loginForm.username}
                    onChange={handleLoginChange}
                    required
                    placeholder="admin"
                    className="w-full bg-transparent border-b border-slate-200 pb-2 pt-3 outline-none focus:border-[#2c66f6] transition-all duration-300 text-[15px] text-slate-800 placeholder:text-slate-300 placeholder:font-light"
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#2c66f6] group-focus-within:w-full transition-all duration-500 ease-out" />
                </div>

                {/* Password Input */}
                <div className="group relative pt-4">
                  <label className="absolute top-0 left-0 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 group-focus-within:text-[#2c66f6] transition-colors duration-300">
                    Password
                  </label>
                  <input 
                    type="password"
                    name="password"
                    value={loginForm.password}
                    onChange={handleLoginChange}
                    required
                    placeholder="••••••••"
                    className="w-full bg-transparent border-b border-slate-200 pb-2 pt-3 outline-none focus:border-[#2c66f6] transition-all duration-300 text-[15px] text-slate-800 placeholder:text-slate-300 placeholder:font-light"
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#2c66f6] group-focus-within:w-full transition-all duration-500 ease-out" />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={loginLoading}
                  whileHover={{ x: 8 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-4 group mt-8 cursor-pointer border-none bg-transparent disabled:opacity-50 disabled:cursor-not-allowed mx-auto"
                >
                  <div className="w-12 h-12 rounded-full bg-slate-950 flex items-center justify-center text-white group-hover:bg-[#ffb400] transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.05)] group-hover:shadow-[#ffb400]/20">
                    {loginLoading ? (
                      <RefreshCw className="animate-spin" size={16} />
                    ) : (
                      <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                    )}
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-900 group-hover:text-[#ffb400] transition-colors">
                    {loginLoading ? 'Verifying...' : 'Verify & Enter'}
                  </span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        ) : (
          // ═════════════════════ iBRAINE EDITORIAL DASHBOARD PANEL ═════════════════════
          <motion.div 
            key="dashboard"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 w-full max-w-[96%] xl:max-w-[98%] mx-auto px-4 md:px-8 pt-12"
          >
            {/* ════ HEADER ════ */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-slate-100 pb-8 mb-12">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-[2px] bg-[#2c66f6]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#2c66f6]">Administrative Console</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight font-lora">
                  Inquiries Dashboard<span className="text-[#ffb400]">.</span>
                </h1>
                <p className="text-slate-400 text-xs mt-2 font-medium">
                  Welcome back, <span className="text-slate-700 font-bold">{adminUser.username}</span>. Currently reviewing incoming lead briefs.
                </p>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
                <button 
                  onClick={() => fetchLeads(token)}
                  className="p-3 border border-slate-200 hover:border-[#ffb400] text-slate-600 hover:text-slate-900 rounded-xl transition-all bg-white shadow-sm flex items-center justify-center cursor-pointer font-lora text-[14px]"
                  title="Refresh leads list"
                >
                  <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center justify-center gap-2 border-2 border-slate-900 hover:bg-slate-950 hover:text-white text-slate-950 px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-[0.2em] transition-all w-full md:w-auto cursor-pointer font-lora"
                >
                  <LogOut size={14} />
                  Logout
                </button>
              </div>
            </div>

            {/* ════ STATISTICS OVERVIEW ════ */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Stat Item 1 */}
              <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.01)] relative overflow-hidden flex items-start gap-4">
                <div className="absolute top-0 left-0 w-[4px] h-full bg-[#ffb400]" />
                <div className="flex-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">Project Briefs</span>
                  <h3 className="text-4xl font-bold text-slate-900 mt-2 font-lora">{contactLeadsCount}</h3>
                  <p className="text-[11px] text-slate-400 mt-2 font-medium">Leads from primary contact page</p>
                </div>
              </div>

              {/* Stat Item 2 */}
              <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.01)] relative overflow-hidden flex items-start gap-4">
                <div className="absolute top-0 left-0 w-[4px] h-full bg-[#2c66f6]" />
                <div className="flex-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 block">Service Inquiries</span>
                  <h3 className="text-4xl font-bold text-slate-900 mt-2 font-lora">{serviceLeadsCount}</h3>
                  <p className="text-[11px] text-slate-400 mt-2 font-medium">Leads from 11 service pages</p>
                </div>
              </div>

              {/* Stat Item 3 */}
              <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.01)] relative overflow-hidden flex items-start gap-4">
                <div className="absolute top-0 left-0 w-[4px] h-full bg-slate-900" />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 block">Top Service Request</span>
                  <h3 className="text-xl font-bold text-slate-900 mt-2 font-lora truncate" title={getTopService()}>{getTopService()}</h3>
                  <p className="text-[11px] text-slate-400 mt-2 font-medium">Most requested capability</p>
                </div>
              </div>
            </div>

            {/* ════ MAIN FILTER & DATA TABLE SECTION ════ */}
            <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.02)] overflow-hidden">
              
              {/* Header Filters */}
              <div className="p-6 md:px-8 border-b border-slate-100 flex flex-col md:flex-row gap-4 items-center justify-between bg-slate-50/50">
                {/* Search Bar */}
                <div className="relative w-full md:max-w-md">
                  <Search className="absolute left-3.5 top-3.5 text-slate-400" size={16} />
                  <input 
                    type="text"
                    placeholder="Search name, company, email..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl py-2 pl-10 pr-4 outline-none focus:border-[#2c66f6] text-[13px] text-slate-800 placeholder-slate-400 transition-colors font-lora h-9"
                  />
                </div>

                {/* Service Category Dropdown */}
                <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest shrink-0">Filter By:</span>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="bg-white border border-slate-200 rounded-xl py-2 px-4 text-xs font-bold text-slate-700 outline-none focus:border-[#2c66f6] cursor-pointer transition-colors font-lora h-9"
                  >
                    <option value="All">All Services</option>
                    {services.map((service, i) => (
                      <option key={i} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Tab Switcher */}
              <div className="flex border-b border-slate-100 bg-slate-50/20 px-8">
                <button
                  onClick={() => {
                    setActiveTab('briefs');
                    setSearchQuery('');
                  }}
                  className={`py-4 px-6 text-[10px] font-black uppercase tracking-[0.2em] border-b-2 transition-all flex items-center gap-2 cursor-pointer ${
                    activeTab === 'briefs'
                      ? 'border-b-[#ffb400] text-slate-900 font-bold'
                      : 'border-b-transparent text-slate-400 hover:text-slate-600 font-normal'
                  }`}
                >
                  Contact Leads
                  <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${
                    activeTab === 'briefs' ? 'bg-[#ffb400]/10 text-[#ffb400]' : 'bg-slate-100 text-slate-400'
                  }`}>
                    {contactLeadsCount}
                  </span>
                </button>
                
                <button
                  onClick={() => {
                    setActiveTab('services');
                    setSearchQuery('');
                  }}
                  className={`py-4 px-6 text-[10px] font-black uppercase tracking-[0.2em] border-b-2 transition-all flex items-center gap-2 cursor-pointer ${
                    activeTab === 'services'
                      ? 'border-b-[#2c66f6] text-slate-900 font-bold'
                      : 'border-b-transparent text-slate-400 hover:text-slate-600 font-normal'
                  }`}
                >
                  Service Inquiries
                  <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${
                    activeTab === 'services' ? 'bg-[#2c66f6]/10 text-[#2c66f6]' : 'bg-slate-100 text-slate-400'
                  }`}>
                    {serviceLeadsCount}
                  </span>
                </button>
              </div>

              {/* Data Table */}
              {/* Inbox-Style Ledger */}
              <div className="divide-y divide-slate-100">
                {loading ? (
                  <div className="py-24 text-center text-slate-400 font-medium font-lora">
                    <RefreshCw className="animate-spin inline mr-3 text-slate-400" size={18} />
                    Querying MySQL database...
                  </div>
                ) : filteredLeads.length === 0 ? (
                  <div className="py-24 text-center text-slate-400 font-medium font-lora">
                    No inquiries found matching criteria.
                  </div>
                ) : (
                  filteredLeads.map((lead, idx) => (
                    <div 
                      key={lead.id}
                      onClick={() => setSelectedLead(lead)}
                      className="p-6 md:p-8 hover:bg-slate-50/50 transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6 group relative"
                    >
                      {/* Left border highlight on hover */}
                      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#ffb400] opacity-0 group-hover:opacity-100 transition-opacity" />

                      <div className="flex items-start gap-5 flex-1 min-w-0">
                        {/* Number Indicator */}
                        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-[11px] font-bold text-slate-400 group-hover:bg-[#ffb400]/10 group-hover:text-[#ffb400] transition-colors shrink-0">
                          {String(idx + 1).padStart(2, '0')}
                        </div>

                        <div className="flex-1 min-w-0">
                          {/* Client Title and Badge */}
                          <div className="flex flex-wrap items-center gap-3">
                            <h4 className="text-lg font-bold text-slate-900 font-lora leading-snug">
                              {lead.full_name}
                            </h4>
                            <span className="border border-slate-200 text-slate-500 bg-white px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                              {lead.subject}
                            </span>
                            {lead.company && (
                              <span className="text-xs text-slate-400 font-medium font-lora">
                                @ {lead.company}
                              </span>
                            )}
                          </div>

                          {/* Message snippet preview */}
                          <p className="text-slate-400 text-xs mt-2 line-clamp-1 italic font-lora leading-relaxed pr-8">
                            "{lead.requirements || 'No project description brief provided.'}"
                          </p>

                          {/* Contact Details row */}
                          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-3 text-xs text-slate-400">
                            <span className="flex items-center gap-1.5 font-sans font-medium">
                              <Mail size={12} className="text-slate-300" />
                              {lead.email}
                            </span>
                            <span className="flex items-center gap-1.5 font-sans font-medium">
                              <Phone size={12} className="text-slate-300" />
                              {lead.phone}
                            </span>
                            {lead.website && (
                              <span className="flex items-center gap-1.5 font-sans font-medium text-blue-500/80 hover:text-blue-500">
                                <Globe size={12} className="text-slate-300" />
                                {lead.website.replace(/(^\w+:|^)\/\//, '')}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Right Section: Time & Click Indicator */}
                      <div className="flex md:flex-col items-start md:items-end justify-between md:justify-center gap-2 shrink-0 border-t md:border-t-0 pt-4 md:pt-0 border-slate-100/50">
                        <span className="text-[11px] font-bold text-slate-400 flex items-center gap-1">
                          <Calendar size={11} />
                          {formatDate(lead.created_at)}
                        </span>
                        
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[10px] font-black uppercase tracking-widest text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity">
                            View Brief
                          </span>
                          <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-slate-950 group-hover:text-white transition-all transform group-hover:translate-x-1 shadow-sm">
                            <ChevronRight size={14} />
                          </div>
                        </div>
                      </div>

                    </div>
                  ))
                )}
              </div>

              {/* Footer status summary */}
              <div className="py-4 px-8 bg-slate-50/30 border-t border-slate-100 flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <span>Total inquiries: {totalLeads}</span>
                <span>iBraine Admin Console</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═════════════════════ DETAIL SIDE SHEET / MODAL ═════════════════════ */}
      <AnimatePresence>
        {selectedLead && (
          <div className="fixed inset-0 z-[2000] flex justify-end">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLead(null)}
              className="absolute inset-0 bg-slate-950"
            />
            
            {/* Side Panel */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35, ease: "easeOut" }}
              className="relative w-full max-w-xl bg-white h-screen overflow-y-auto shadow-2xl flex flex-col z-10 border-l border-slate-100 font-lora"
            >
              {/* Side Panel Header */}
              <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 text-[#ffb400] flex items-center justify-center">
                    <FileText size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-xl leading-tight font-lora">
                      Lead Brief Details<span className="text-[#2c66f6]">.</span>
                    </h3>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black mt-1">Ref ID: #{selectedLead.id} • {formatDate(selectedLead.created_at)}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedLead(null)}
                  className="p-2 hover:bg-slate-200 text-slate-400 hover:text-slate-800 rounded-lg transition-colors border-none bg-transparent cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Side Panel Body */}
              <div className="flex-1 p-8 space-y-8">
                
                {/* 1. Basic Info */}
                <div className="space-y-4">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#2c66f6] border-b border-slate-100 pb-2">Client Identity</h4>
                  
                  <div className="grid grid-cols-2 gap-y-6 gap-x-6 text-sm">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Full Name</span>
                      <span className="font-bold text-slate-900 text-base font-lora">{selectedLead.full_name}</span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Company Name</span>
                      <span className="font-bold text-slate-700">{selectedLead.company || 'Not Specified'}</span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Email Address</span>
                      <a href={`mailto:${selectedLead.email}`} className="text-blue-500 font-semibold hover:text-blue-600 hover:underline flex items-center gap-1.5 mt-1 transition-colors">
                        <Mail size={13} />
                        {selectedLead.email}
                      </a>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Phone Number</span>
                      <a href={`tel:${selectedLead.phone}`} className="text-blue-500 font-semibold hover:text-blue-600 hover:underline flex items-center gap-1.5 mt-1 transition-colors">
                        <Phone size={13} />
                        {selectedLead.phone}
                      </a>
                    </div>

                    <div className="col-span-2">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Website URL</span>
                      {selectedLead.website ? (
                        <a 
                          href={selectedLead.website.startsWith('http') ? selectedLead.website : `https://${selectedLead.website}`} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-blue-500 font-semibold hover:text-blue-600 hover:underline flex items-center gap-1.5 mt-1 transition-colors"
                        >
                          <Globe size={13} />
                          {selectedLead.website}
                        </a>
                      ) : (
                        <span className="text-slate-400 font-medium">None</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* 2. Services Requested */}
                <div className="space-y-4">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#2c66f6] border-b border-slate-100 pb-2">Required Capabilities</h4>
                  
                  <div className="flex flex-wrap gap-2 pt-1">
                    {selectedLead.services ? (
                      selectedLead.services.split(',').map((service, i) => (
                        <span 
                          key={i} 
                          className="border border-slate-200 hover:border-[#ffb400] bg-white text-slate-700 px-3.5 py-1 rounded-full text-xs font-semibold transition-all cursor-default"
                        >
                          {service.trim()}
                        </span>
                      ))
                    ) : (
                      <span className="text-slate-400 text-xs font-medium">No services requested</span>
                    )}
                  </div>
                </div>

                {/* 3. Inquiry Details */}
                <div className="space-y-4">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#2c66f6] border-b border-slate-100 pb-2">Project Brief Details</h4>
                  
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Subject Matter</span>
                    <span className="border border-slate-200 text-slate-700 bg-slate-50 px-3 py-1 rounded-md text-xs font-bold">
                      {selectedLead.subject}
                    </span>
                  </div>

                  <div className="pt-2">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block mb-2">Requirements Brief</span>
                    <div className="border-l-2 border-l-[#ffb400] bg-[#fafafa] p-5 rounded-r-xl text-sm italic text-slate-600 font-medium whitespace-pre-wrap leading-relaxed">
                      "{selectedLead.requirements || 'No description provided.'}"
                    </div>
                  </div>
                </div>

              </div>

              {/* Side Panel Footer */}
              <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedLead(null)}
                  className="px-6 py-2.5 border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors border-none bg-transparent cursor-pointer font-lora"
                >
                  Close Brief
                </button>
                <a
                  href={`mailto:${selectedLead.email}?subject=Regarding Your Inquiry: ${selectedLead.subject}`}
                  className="px-6 py-2.5 bg-slate-950 hover:bg-[#ffb400] text-white hover:text-black rounded-lg text-xs font-bold uppercase tracking-widest transition-all shadow-md flex items-center gap-2 font-lora"
                >
                  <Mail size={14} />
                  Reply via Email
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Dashboardpage;
