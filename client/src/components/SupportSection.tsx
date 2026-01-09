import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, useRef } from "react";

// 46 имён для команды поддержки
const TEAM_NAMES = [
  "Emma S.",
  "Alex K.",
  "Sofia M.",
  "Marcus J.",
  "Nina P.",
  "Daniel R.",
  "Olivia T.",
  "James L.",
  "Mia W.",
  "Lucas H.",
  "Ava C.",
  "Ethan B.",
  "Isabella F.",
  "Noah D.",
  "Charlotte G.",
  "Liam N.",
  "Amelia V.",
  "Oliver Z.",
  "Harper Q.",
  "William X.",
  "Evelyn Y.",
  "Benjamin U.",
  "Abigail I.",
  "Mason O.",
  "Emily A.",
  "Logan E.",
  "Elizabeth S.",
  "Alexander M.",
  "Mila K.",
  "Henry J.",
  "Camila P.",
  "Sebastian R.",
  "Luna T.",
  "Jack L.",
  "Penelope W.",
  "Aiden H.",
  "Layla C.",
  "Owen B.",
  "Riley F.",
  "Samuel D.",
  "Zoey G.",
  "Jacob N.",
  "Nora V.",
  "Michael Z.",
  "Lily Q.",
  "David X.",
];

// 46 уникальных аватаров
const AVATAR_SOURCES = [
  "photo-1494790108377-be9c29b29330",
  "photo-1507003211169-0a1dd7228f2d",
  "photo-1438761681033-6461ffad8d80",
  "photo-1472099645785-5658abf4ff4e",
  "photo-1544005313-94ddf0286df2",
  "photo-1500648767791-00dcc994a43e",
  "photo-1534528741775-53994a69daeb",
  "photo-1517841905240-472988babdf9",
  "photo-1580489944761-15a19d654956",
  "photo-1531746020798-e6953c6e8e04",
  "photo-1506794778202-cad84cf45f1d",
  "photo-1519345182560-3f2917c472ef",
  "photo-1539571696357-5a69c17a67c6",
  "photo-1524504388940-b1c1722653e1",
  "photo-1488426862026-3ee34a7d66df",
  "photo-1502823403499-6ccfcf4fb453",
  "photo-1499996860823-5f82763f536b",
  "photo-1542206395-9feb3edaa68d",
  "photo-1546961342-ea5f71b193f3",
  "photo-1552374196-c4e7ffc6e126",
  "photo-1545167622-3a6ac756afa4",
  "photo-1557862921-37829c790f19",
  "photo-1573496359142-b8d87734a5a2",
  "photo-1560250097-0b93528c311a",
  "photo-1573497019940-1c28c88b4f3e",
  "photo-1580894742597-87bc8789db3d",
  "photo-1548142813-c348350df52b",
  "photo-1508214751196-bcfd4ca60f91",
  "photo-1463453091185-61582044d556",
  "photo-1522075469751-3a6694fb2f61",
  "photo-1487412720507-e7ab37603c6f",
  "photo-1524638431109-93d95c968f03",
  "photo-1492562080023-ab3db95bfbce",
  "photo-1507591064344-4c6ce005b128",
  "photo-1504257432389-52343af06ae3",
  "photo-1519085360753-af0119f7cbe7",
  "photo-1496345875659-11f7dd282d1d",
  "photo-1513956589380-bad6acb9b9d4",
  "photo-1485893086445-ed75865251e0",
  "photo-1518806118471-f28b20a1d79d",
  "photo-1529626455594-4ff0802cfb7e",
  "photo-1488161628813-04466f0be7c4",
  "photo-1501196354995-cbb51c65adc8",
  "photo-1530785602389-07594beb8b73",
  "photo-1504199367641-aba8151af406",
  "photo-1507038772120-7fff76f79d79",
];

interface FloatingAvatar {
  id: number;
  avatarIndex: number;
  startX: number;
  endX: number;
  y: number;
  size: number;
  duration: number;
  initialProgress: number;
}

const MIN_AVATARS = 12;
const MAX_AVATARS = 16;

// Генерация случайного аватара - движение справа налево
function generateRandomAvatar(
  id: number,
  avatarIndexCounter: number,
  isInitial: boolean = false
): FloatingAvatar {
  const avatarIndex = avatarIndexCounter % AVATAR_SOURCES.length;

  // Все аватары двигаются справа налево
  const startX = 110;
  const endX = -15;

  const initialProgress = isInitial ? Math.random() * 0.8 : 0;

  return {
    id,
    avatarIndex,
    startX,
    endX,
    y: 5 + Math.random() * 85,
    size: 52 + Math.random() * 36, // Увеличенные аватарки 52-88px
    duration: 25 + Math.random() * 20, // 25-45 секунд для медленного движения
    initialProgress,
  };
}

function FloatingAvatarComponent({
  avatar,
  onComplete,
}: {
  avatar: FloatingAvatar;
  onComplete: (id: number) => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const src = `https://images.unsplash.com/${
    AVATAR_SOURCES[avatar.avatarIndex]
  }?auto=format&fit=crop&w=150&q=80`;
  const name = TEAM_NAMES[avatar.avatarIndex % TEAM_NAMES.length];

  const progressX =
    avatar.startX + (avatar.endX - avatar.startX) * avatar.initialProgress;
  const remainingDuration = avatar.duration * (1 - avatar.initialProgress);

  return (
    <motion.div
      className="absolute cursor-pointer"
      style={{
        top: `${avatar.y}%`,
        width: avatar.size,
        height: avatar.size,
      }}
      initial={{
        left: `${progressX}%`,
        opacity: avatar.initialProgress > 0 ? 1 : 0,
      }}
      animate={{
        left: `${avatar.endX}%`,
        opacity: 1,
      }}
      transition={{
        left: {
          duration: remainingDuration,
          ease: "linear",
        },
        opacity: {
          duration: 0.5,
        },
      }}
      onAnimationComplete={() => onComplete(avatar.id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ scale: isHovered ? 1.15 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <div className="absolute inset-0 rounded-full bg-white/30 blur-sm scale-105" />
        <img
          src={src}
          alt={name}
          className="w-full h-full rounded-full object-cover border-[3px] border-white shadow-xl relative z-10"
        />

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 5, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 5, scale: 0.9 }}
              transition={{ duration: 0.15 }}
              className="absolute left-1/2 -translate-x-1/2 -bottom-8 z-50 whitespace-nowrap"
            >
              <div className="bg-gray-900 text-white text-xs font-medium px-2.5 py-1 rounded-lg shadow-lg">
                {name}
                <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 bg-gray-900 rotate-45" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

function StaticHeartAvatar({
  name,
  src,
  className,
  animateY,
  duration,
  delay = 0,
}: {
  name: string;
  src: string;
  className: string;
  animateY: number[];
  duration: number;
  delay?: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`absolute z-30 cursor-pointer ${className}`}
      animate={{ y: animateY }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <img
          src={src}
          alt={name}
          className="w-full h-full rounded-full object-cover border-4 border-white shadow-xl"
        />
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 5, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 5, scale: 0.9 }}
              transition={{ duration: 0.15 }}
              className="absolute left-1/2 -translate-x-1/2 -bottom-8 z-50 whitespace-nowrap"
            >
              <div className="bg-gray-900 text-white text-xs font-medium px-2.5 py-1 rounded-lg shadow-lg">
                {name}
                <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 bg-gray-900 rotate-45" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export function SupportSection() {
  const [avatars, setAvatars] = useState<FloatingAvatar[]>([]);
  const nextIdRef = useRef(0);
  const avatarIndexRef = useRef(0);
  const isInitializedRef = useRef(false);

  const addAvatar = useCallback((isInitial: boolean = false) => {
    const newAvatar = generateRandomAvatar(
      nextIdRef.current++,
      avatarIndexRef.current++,
      isInitial
    );
    setAvatars((prev) => [...prev, newAvatar]);
  }, []);

  const removeAvatar = useCallback((id: number) => {
    setAvatars((prev) => {
      const filtered = prev.filter((a) => a.id !== id);
      return filtered;
    });
  }, []);

  useEffect(() => {
    if (isInitializedRef.current) return;
    isInitializedRef.current = true;

    for (let i = 0; i < MIN_AVATARS; i++) {
      addAvatar(true);
    }
  }, [addAvatar]);

  useEffect(() => {
    if (avatars.length < MIN_AVATARS) {
      const needed = MIN_AVATARS - avatars.length;
      for (let i = 0; i < needed; i++) {
        setTimeout(() => addAvatar(false), i * 100);
      }
    }
  }, [avatars.length, addAvatar]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (avatars.length < MAX_AVATARS) {
        addAvatar(false);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [avatars.length, addAvatar]);

  return (
    <section className="py-8 bg-gray-50 dark:bg-[#0a0a0a]">
      <div className="container-wolt">
        {/* Section title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-lg md:text-xl font-semibold text-foreground mb-8"
        >
          Почти всё доставляется вам — быстро, надёжно и по доступной цене
        </motion.p>

        {/* Two cards grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Support Card with floating avatars */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden h-[380px] md:h-[420px]"
            style={{
              background:
                "linear-gradient(135deg, #87CEEB 0%, #5BB5E0 50%, #3AA5D8 100%)",
            }}
          >
            {/* 3D Heart */}
            <div className="absolute right-0 bottom-0 w-[60%] h-full flex items-end justify-end pointer-events-none z-0">
              <svg
                viewBox="0 0 400 400"
                className="w-full h-auto max-h-[90%] opacity-80"
                style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.15))" }}
              >
                <defs>
                  <linearGradient
                    id="heartGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#7DD3FC" />
                    <stop offset="50%" stopColor="#38BDF8" />
                    <stop offset="100%" stopColor="#0EA5E9" />
                  </linearGradient>
                  <linearGradient
                    id="heartHighlight"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#BAE6FD" />
                    <stop offset="100%" stopColor="#7DD3FC" />
                  </linearGradient>
                </defs>
                <path
                  d="M200 350 C100 280 30 200 30 140 C30 80 80 40 140 40 C170 40 195 55 200 80 C205 55 230 40 260 40 C320 40 370 80 370 140 C370 200 300 280 200 350 Z"
                  fill="url(#heartGradient)"
                />
                <ellipse
                  cx="130"
                  cy="100"
                  rx="40"
                  ry="30"
                  fill="url(#heartHighlight)"
                  opacity="0.6"
                />
                <ellipse
                  cx="280"
                  cy="90"
                  rx="25"
                  ry="18"
                  fill="url(#heartHighlight)"
                  opacity="0.4"
                />
              </svg>
            </div>

            {/* Content */}
            <div className="relative z-20 p-8 md:p-10 max-w-[300px]">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3 leading-tight">
                Реальная поддержка
                <br />
                от реальных людей
              </h2>
              <p className="text-sm md:text-base text-white/90 leading-relaxed">
                Наша команда поддержки мирового уровня всегда готова прийти на
                помощь. Мы дружелюбны и быстро реагируем.
              </p>
            </div>

            {/* Floating Avatars */}
            <div className="absolute inset-0 overflow-hidden z-10">
              {avatars.map((avatar) => (
                <FloatingAvatarComponent
                  key={avatar.id}
                  avatar={avatar}
                  onComplete={removeAvatar}
                />
              ))}
            </div>

            {/* Static avatars on heart */}
            <StaticHeartAvatar
              name="Sarah M."
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80"
              className="right-[20%] top-[30%] w-16 h-16"
              animateY={[-8, 0, -8]}
              duration={3}
            />
            <StaticHeartAvatar
              name="Kate L."
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&q=80"
              className="right-[6%] top-[22%] w-14 h-14"
              animateY={[-6, 0, -6]}
              duration={2.5}
              delay={0.5}
            />
          </motion.div>

          {/* Wolt+ Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative rounded-3xl overflow-hidden h-[380px] md:h-[420px] bg-[#1a1040]"
          >
            {/* Background image */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80"
                alt="Friends with Wolt boxes"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1040]/90 via-[#1a1040]/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 md:p-10 h-full flex flex-col">
              <div className="max-w-[320px]">
                <h2 className="text-2xl md:text-3xl font-black text-white mb-3 leading-tight">
                  Бесплатная доставка с Wolt+
                </h2>
                <p className="text-sm md:text-base text-white/80 leading-relaxed">
                  Наслаждайтесь бесплатной доставкой из лучших ресторанов и
                  магазинов вашего города.
                </p>
              </div>

              {/* Wolt+ button at bottom */}
              <div className="mt-auto">
                <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-bold text-sm transition-all hover:scale-105">
                  Wolt+
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
