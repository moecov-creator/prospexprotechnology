import { useState, useEffect } from 'react';
import { X, Users } from 'lucide-react';

const names = ["Aisha K.", "James L.", "Elena R.", "Michael T.", "Sarah M.", "David W.", "Jessica B.", "Robert C.", "Emily D.", "Daniel F."];
const locations = ["Atlanta, GA", "Miami, FL", "Vancouver, Canada", "Austin, TX", "London, UK", "Sydney, Australia", "New York, NY", "Chicago, IL", "Toronto, Canada", "Los Angeles, CA", "Berlin, Germany", "Paris, France", "Tokyo, Japan", "Dubai, UAE", "Singapore", "Dublin, Ireland", "Auckland, New Zealand"];
const actions = ["just signed up to Prospex Pro Technology", "just upgraded to Premier", "just upgraded to Professional", "just built their first funnel", "Just booked 14 appointments via AI"];
const getRandomItem = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];
const getRandomTime = () => `${Math.floor(Math.random() * 59) + 1} minutes ago`;

export const SocialProofPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [data, setData] = useState({
    name: names[0],
    action: actions[0],
    location: locations[0],
    time: "2 minutes ago"
  });

  useEffect(() => {
    if (isClosed) return;

    let timeoutId: NodeJS.Timeout;

    const showPopup = () => {
      setData({
        name: getRandomItem(names),
        action: getRandomItem(actions),
        location: getRandomItem(locations),
        time: getRandomTime()
      });
      setIsVisible(true);

      // Hide after 5 seconds
      timeoutId = setTimeout(() => {
        setIsVisible(false);
        
        // Wait 8-10 seconds before showing next
        const nextDelay = Math.floor(Math.random() * 2000) + 8000;
        timeoutId = setTimeout(showPopup, nextDelay);
      }, 5000);
    };

    // Initial delay before first popup
    const initialDelay = Math.floor(Math.random() * 2000) + 3000;
    timeoutId = setTimeout(showPopup, initialDelay);

    return () => clearTimeout(timeoutId);
  }, [isClosed]);

  if (isClosed) return null;

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 transition-all duration-500 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-[#0B101B] border border-slate-800 rounded-xl p-4 shadow-2xl flex items-start gap-4 max-w-sm relative pr-10">
        <button 
          onClick={() => setIsClosed(true)}
          className="absolute top-3 right-3 text-slate-500 hover:text-slate-300 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
        
        <div className="bg-primary/10 p-2.5 rounded-full shrink-0">
          <Users className="h-5 w-5 text-primary" />
        </div>
        
        <div className="flex flex-col text-sm">
          <p className="text-slate-300">
            <span className="font-semibold text-white">{data.name}</span> {data.action}
          </p>
          <p className="text-slate-500 text-xs mt-1">
            {data.location} · {data.time}
          </p>
        </div>
      </div>
    </div>
  );
};
