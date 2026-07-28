import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Play } from 'lucide-react';

const LightFlare = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: [0, 1, 0], scale: [0.5, 2, 2.5] }}
    transition={{ duration: 3, ease: "easeOut" }}
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 z-[45] pointer-events-none"
  >
    <div className="absolute inset-0 bg-white rounded-full blur-[120px] opacity-30" />
    <div className="absolute inset-0 bg-yellow-100 rounded-full blur-[60px] opacity-50" />
  </motion.div>
);

const DustParticles = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="dust-particle"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: Math.random() * 0.5,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{
            y: [null, (Math.random() - 0.5) * 50 + "px"],
            x: [null, (Math.random() - 0.5) * 50 + "px"],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            width: Math.random() * 4 + 2 + "px",
            height: Math.random() * 4 + 2 + "px",
          }}
        />
      ))}
    </div>
  );
};

type InvitationProps = {
  onDetailsClick: (e: React.MouseEvent) => void;
};

const Invitation = ({ onDetailsClick }: InvitationProps) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX - innerWidth / 2) / 40;
    const y = (clientY - innerHeight / 2) / 40;
    setMousePos({ x, y });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 2, delay: 1, ease: "easeOut" }}
      className="relative z-20 flex flex-col items-center justify-center min-h-[100dvh] px-4 md:px-6 text-center w-full h-full"
    >
      <motion.div
        animate={{ x: mousePos.x, y: mousePos.y }}
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
        className="animate-float relative w-full max-w-[90%] md:max-w-lg lg:max-w-xl mx-auto flex flex-col items-center justify-center"
      >
        {/* Card Container - Added max-h-[85vh] and overflow-hidden to preserve the card shape */}
        <div className="bg-[#fffdfa] backdrop-blur-sm p-6 md:p-8 lg:p-10 rounded-[2rem] shadow-2xl border-[1px] border-[#bf953f] w-full max-h-[85vh] overflow-hidden relative flex flex-col items-center justify-center">
          {/* Double Border Frame */}
          <div className="absolute inset-2 md:inset-3 border border-[#bf953f]/40 rounded-[1.75rem] pointer-events-none" />
          <div className="absolute inset-1 md:inset-1.5 border-[2px] border-double border-[#bf953f]/60 rounded-[1.5rem] pointer-events-none" />

          {/* Corner Ornaments */}
          <div className="absolute top-0 left-0 w-12 h-12 md:w-20 md:h-20 pointer-events-none opacity-20">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-[#bf953f]">
              <path d="M0 0 L100 0 L100 5 L5 5 L5 100 L0 100 Z" />
            </svg>
          </div>
          <div className="absolute bottom-0 right-0 w-12 h-12 md:w-20 md:h-20 rotate-180 pointer-events-none opacity-20">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-[#bf953f]">
              <path d="M0 0 L100 0 L100 5 L5 5 L5 100 L0 100 Z" />
            </svg>
          </div>

          {/* Subtle gold shimmer overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-10 bg-gradient-to-tr from-transparent via-[#fcf6ba] to-transparent -translate-x-full animate-[shine_8s_infinite]" />

          <div className="space-y-4 md:space-y-5 font-amiri text-[#2c2c2c] relative z-10 w-full py-2">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="text-lg md:text-2xl lg:text-3xl font-aref gold-text"
            >
              دعوة زفاف
            </motion.h2>

            <div className="space-y-1 md:space-y-2">
              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2, duration: 1.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-aref text-[#b38728] leading-tight"
              >
                <span className="gold-text block mb-1">محمد</span>
                <span className="text-xl md:text-2xl lg:text-3xl font-amiri block text-[#bf953f]">&</span>
                <span className="gold-text block mt-1">الاء</span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 1 }}
              className="space-y-3 md:space-y-4"
            >
              <p className="text-base md:text-xl lg:text-2xl font-reem">يسرنا دعوتكم لحضور حفل زفافنا</p>
              <div className="space-y-1">
                <p className="text-sm md:text-lg lg:text-xl font-tajawal text-[#b38728] px-2">ومشاركتنا فرحتنا في هذا اليوم المميز</p>
              </div>

              <div className="flex items-center justify-center gap-3 md:gap-5 mt-2 md:mt-4">
                <div className="h-[1px] w-6 md:w-10 bg-[#bf953f]/40" />
                <div className="flex flex-col items-center">
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#bf953f] mb-1">يوم</span>
                  <p className="text-3xl md:text-5xl lg:text-6xl font-aref gold-text font-bold">8</p>
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#bf953f] mt-1">أغسطس 2026</span>
                </div>
                <div className="h-[1px] w-6 md:w-10 bg-[#bf953f]/40" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 1 }}
              className="pt-2 md:pt-4"
            >
              <div
                onClick={onDetailsClick}
                className="inline-block p-2 md:p-3 px-4 md:px-6 border border-[#bf953f] rounded-full hover:bg-[#bf953f]/10 transition-colors cursor-pointer group"
              >
                <span className="text-[10px] md:text-xs tracking-[0.1em] md:tracking-[0.2em] font-reem uppercase group-hover:tracking-[0.2em] md:group-hover:tracking-[0.3em] transition-all">تفاصيل الحفل</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute -top-2 -left-2 md:-top-3 md:-left-3 w-8 h-8 md:w-12 md:h-12 border-t-2 border-l-2 border-[#bf953f]" />
        <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-8 h-8 md:w-12 md:h-12 border-t-2 border-r-2 border-[#bf953f]" />
        <div className="absolute -bottom-2 -left-2 md:-bottom-3 md:-left-3 w-8 h-8 md:w-12 md:h-12 border-b-2 border-l-2 border-[#bf953f]" />
        <div className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 w-8 h-8 md:w-12 md:h-12 border-b-2 border-r-2 border-[#bf953f]" />
      </motion.div>
    </motion.div>
  );
};

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isAudioStarted, setIsAudioStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showDetails, setShowDetails] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const sfxRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
      if (sfxRef.current) {
        sfxRef.current.volume = 0.6;
        sfxRef.current.play().catch(e => console.log("SFX play failed", e));
      }
      if (!isAudioStarted) {
        startAudio();
      }
    }
  };

  const startAudio = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.play().catch(e => console.log("Audio play failed", e));
      setIsAudioStarted(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <main className="relative w-full h-[100dvh] bg-black overflow-hidden select-none touch-none" dir="ltr">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-16 h-16 md:w-20 md:h-20 border-2 border-[#bf953f] rounded-full flex items-center justify-center"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 border-t-2 border-[#bf953f] rounded-full animate-spin" />
            </motion.div>
            <p className="mt-6 md:mt-8 text-[#bf953f] font-reem text-lg md:text-xl tracking-[0.1em] md:tracking-[0.2em] animate-pulse">جاري تجهيز الدعوة</p>
            <p className="mt-2 text-[#bf953f]/60 text-xs md:text-sm font-tajawal tracking-widest">يُفضل تفعيل الصوت لتجربة أفضل</p>
          </motion.div>
        )}
      </AnimatePresence>

      <audio
        ref={audioRef}
        loop
        src="/audio/wedding-song.mp3"
      />

      {/* Background Layer (Palace Interior) */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[3000ms] ease-out"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1920&q=80')`,
          transform: isOpen ? 'scale(1.05)' : 'scale(1.15)',
          filter: isOpen ? 'blur(0px) brightness(0.6)' : 'blur(20px) brightness(0.2)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
      </div>

      <DustParticles />

      {/* Cinematic Vignette */}
      <div className="absolute inset-0 pointer-events-none z-[60] bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />

      {/* Content Layer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <LightFlare />
            <Invitation onDetailsClick={(e) => {
              e.stopPropagation();
              setShowDetails(true);
            }} />
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ y: 40, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative w-full max-w-md rounded-3xl border border-[#bf953f] bg-[#fffdfa]/95 p-6 text-right shadow-2xl"
            >
              <button
                onClick={() => setShowDetails(false)}
                className="absolute top-4 left-4 text-[#bf953f] hover:text-[#8b6d25]"
              >
                إغلاق
              </button>
              <h2 className="text-xl md:text-2xl font-aref text-[#b38728] mb-4">تفاصيل الحفل</h2>
              <div className="space-y-4 text-[#2c2c2c] font-amiri">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[#bf953f] mb-1">المكان</p>
                  <p className="text-lg md:text-xl">قاعة الفرسان</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[#bf953f] mb-1">الساعة</p>
                  <p className="text-lg md:text-xl">الساعة 10:00 مساءً</p>
                </div>
                <div className="rounded-2xl border border-[#bf953f]/40 bg-white/80 p-4 text-sm md:text-base text-[#444]">
                  <p>نتطلع لمشاركتكم فرحتنا في هذا اليوم الخاص.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gate Scene Overlay */}
      <motion.div
        onTap={handleOpen}
        onClick={handleOpen}
        className={`absolute inset-0 z-[70] cursor-pointer ${isOpen ? 'pointer-events-none' : 'pointer-events-auto'}`}
      >
        <div className="relative w-full h-full flex perspective-1000">

          {/* Left Door */}
          <motion.div
            initial={false}
            animate={{ rotateY: isOpen ? -100 : 0 }}
            transition={{ duration: 4.5, ease: [0.4, 0, 0.2, 1] }}
            className="door-left relative w-1/2 h-full cursor-pointer preserve-3d"
          >
            <div
              className="absolute inset-0 bg-cover bg-right border-r border-[#bf953f]/50 shadow-[10px_0_30px_rgba(0,0,0,0.8)]"
              style={{
                background: `linear-gradient(135deg, rgba(26,20,15,0.95) 0%, rgba(13,10,7,0.95) 100%), url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1920&q=80')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
            >
              {/* Royal Door Panels */}
              <div className="absolute inset-y-8 md:inset-y-12 right-4 md:right-6 left-8 md:left-12 border-2 border-[#b38728] rounded-tr-3xl bg-gradient-to-b from-[#d4af37]/5 to-transparent shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]" />

              <div className="absolute inset-0 bg-black/20" />
              {/* Left Handle Ornament */}
              <div className="absolute right-[-15px] md:right-[-20px] top-1/2 -translate-y-1/2 w-8 md:w-10 h-32 md:h-40 flex items-center justify-end z-10">
                <div className="w-1.5 md:w-2 h-24 md:h-32 bg-gradient-to-b from-[#bf953f] via-[#fcf6ba] to-[#bf953f] rounded-full shadow-[0_0_15px_rgba(212,175,55,0.4)]" />
                <div className="w-4 h-4 md:w-5 md:h-5 bg-gradient-to-br from-[#fcf6ba] to-[#aa771c] rounded-full absolute right-[-2px] shadow-lg" />
              </div>
            </div>
          </motion.div>

          {/* Right Door */}
          <motion.div
            initial={false}
            animate={{ rotateY: isOpen ? 100 : 0 }}
            transition={{ duration: 4.5, ease: [0.4, 0, 0.2, 1] }}
            className="door-right relative w-1/2 h-full cursor-pointer preserve-3d"
          >
            <div
              className="absolute inset-0 bg-cover bg-left border-l border-[#bf953f]/50 shadow-[-10px_0_30px_rgba(0,0,0,0.8)]"
              style={{
                background: `linear-gradient(135deg, rgba(26,20,15,0.95) 0%, rgba(13,10,7,0.95) 100%), url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1920&q=80')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
            >
              {/* Royal Door Panels */}
              <div className="absolute inset-y-8 md:inset-y-12 left-4 md:left-6 right-8 md:right-12 border-2 border-[#b38728] rounded-tl-3xl bg-gradient-to-b from-[#d4af37]/5 to-transparent shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]" />

              <div className="absolute inset-0 bg-black/20" />
              {/* Right Handle Ornament */}
              <div className="absolute left-[-15px] md:left-[-20px] top-1/2 -translate-y-1/2 w-8 md:w-10 h-32 md:h-40 flex items-center justify-start z-10">
                <div className="w-1.5 md:w-2 h-24 md:h-32 bg-gradient-to-b from-[#bf953f] via-[#fcf6ba] to-[#bf953f] rounded-full shadow-[0_0_15px_rgba(212,175,55,0.4)]" />
                <div className="w-4 h-4 md:w-5 md:h-5 bg-gradient-to-br from-[#fcf6ba] to-[#aa771c] rounded-full absolute left-[-2px] shadow-lg" />
              </div>
            </div>
          </motion.div>

          {/* Tap to Open Hint */}
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
            >
              <div className="p-6 md:p-8 rounded-full border border-[#bf953f]/40 bg-black/60 backdrop-blur-md shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                <p className="text-[#bf953f] font-tajawal text-lg md:text-xl tracking-[0.1em] mb-3 md:mb-4">انقر لفتح الباب</p>
                <div className="flex justify-center">
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <Play className="text-[#bf953f] fill-[#bf953f] w-6 h-6 md:w-8 md:h-8 drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}

        </div>
      </motion.div>

      {/* Audio Toggle */}
      <button
        onClick={toggleMute}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[100] p-2 md:p-3 rounded-full bg-black/60 border border-[#bf953f]/50 text-[#bf953f] backdrop-blur-md hover:bg-[#bf953f]/30 transition-all"
      >
        {isMuted ? <VolumeX size={20} className="md:w-6 md:h-6" /> : <Volume2 size={20} className="md:w-6 md:h-6" />}
      </button>

      {/* Glowing Light Transition */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2.5, times: [0, 0.4, 1] }}
            className="absolute inset-0 z-40 bg-[#fcf6ba] pointer-events-none"
            style={{ mixBlendMode: 'overlay' }}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
