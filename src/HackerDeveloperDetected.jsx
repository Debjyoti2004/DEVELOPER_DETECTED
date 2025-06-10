import React, { useState, useEffect, useRef } from 'react';
import {
  Terminal,
  Wifi,
  Shield,
  Zap,
  Eye,
  Skull,
  Lock,
  Unlock,
  Activity,
  AlertTriangle,
  Database,
  Server,
} from 'lucide-react';

export default function HackerDeveloperDetected() {
  const [scanProgress, setScanProgress] = useState(0);
  const [isScanning, setIsScanning] = useState(true);
  const [matrixRain, setMatrixRain] = useState([]);
  const [terminalLines, setTerminalLines] = useState([]);
  const [currentIP, setCurrentIP] = useState('192.168.1.337');
  const [accessLevel, setAccessLevel] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [currentHack, setCurrentHack] = useState('');
  const [glitchText, setGlitchText] = useState('DEVELOPER DETECTED');
  const [networkNodes, setNetworkNodes] = useState([]);
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });

  const hackerJokes = [
    "There are only 10 types of people: those who understand binary and those who don't! 01001000 01100001!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised. Much like your code review! 😱",
    "Why did the hacker break up with the internet? Too many connection issues! 💔",
    "My password is the last 8 digits of π. Good luck brute forcing that! 🔐",
    "I'm not a hacker, I'm a 'security researcher' with questionable ethics! 😈",
    "404: Sleep not found. Coffee.exe is running... ☕",
    "I don't always test my code, but when I do, I do it in production! 🔥",
  ];

  const terminalCommands = [
    "nmap -sS -O target.exe",
    "sudo ./exploit_dev_skills.sh",
    "metasploit > use awesome/developer",
    "hydra -l admin -P passwords.txt",
    "sqlmap -u 'http://skill-level.com'",
    "aircrack-ng -w dictionary.txt",
    "john --wordlist=epic.txt hashes",
    "nc -lvp 1337",
    "python3 mind_reader.py --target=developer",
    "./social_engineer.exe --compliment=true",
  ];

  const hackingProgress = [
    "Scanning network topology...",
    "Analyzing code patterns...",
    "Detecting caffeine levels...",
    "Measuring debugging skills...",
    "Calculating awesome factor...",
    "Bypassing firewall of mediocrity...",
    "Injecting compliments into system...",
    "Establishing secure connection to respect...",
    "Access granted: LEGENDARY DEVELOPER",
  ];

  // Get viewport dimensions
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Initialize scanning sequence
  useEffect(() => {
    if (isScanning) {
      const interval = setInterval(() => {
        setScanProgress((prev) => {
          if (prev >= 100) {
            setIsScanning(false);
            setAccessLevel(3);
            return 100;
          }
          return prev + Math.random() * 8 + 2;
        });
      }, 200);
      return () => clearInterval(interval);
    }
  }, [isScanning]);

  // Matrix rain effect
  useEffect(() => {
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    const createRain = () => {
      const drops = [];
      for (let i = 0; i < 100; i++) {
        drops.push({
          id: i,
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
          char: chars[Math.floor(Math.random() * chars.length)],
          speed: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
      setMatrixRain(drops);
    };
    createRain();
    const rainInterval = setInterval(() => {
      setMatrixRain((prev) =>
        prev.map((drop) => ({
          ...drop,
          y:
            drop.y > dimensions.height ? -20 : drop.y + drop.speed,
          char: Math.random() > 0.98
            ? chars[Math.floor(Math.random() * chars.length)]
            : drop.char,
          opacity: Math.random() * 0.5 + 0.2,
        }))
      );
    }, 100);
    return () => clearInterval(rainInterval);
  }, [dimensions]);

  // Terminal simulation
  useEffect(() => {
    let commandIndex = 0;
    const addTerminalLine = () => {
      if (commandIndex < terminalCommands.length) {
        setTerminalLines((prev) => {
          const newLines = [...prev, {
            id: Date.now(),
            command: terminalCommands[commandIndex],
            status: Math.random() > 0.7 ? 'SUCCESS' : 'EXECUTING',
          }];
          // Keep only last 10 lines
          return newLines.slice(-10);
        });
        commandIndex++;
        setTimeout(addTerminalLine, Math.random() * 2000 + 1000);
      }
    };
    const timer = setTimeout(addTerminalLine, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Glitch effect
  useEffect(() => {
    const glitchTexts = [
      'DEVELOPER DETECTED',
      'D3V3L0P3R D3T3CT3D',
      'ⱠɆVɆⱠØⱣɆⱤ ⱠɆTɆȻTɆⱠ',
      '01000100 01000101 01010110',
      'ḦÄĊKËŔ ÏĎËŇTÏFÏËĎ',
      'DEVELOPER DETECTED',
    ];
    const glitchInterval = setInterval(() => {
      const randomText = glitchTexts[Math.floor(Math.random() * glitchTexts.length)];
      setGlitchText(randomText);
      setTimeout(() => setGlitchText('DEVELOPER DETECTED'), 200);
    }, 3000);
    return () => clearInterval(glitchInterval);
  }, []);

  // Network nodes animation
  useEffect(() => {
    const nodes = [];
    for (let i = 0; i < 15; i++) {
      nodes.push({
        id: i,
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
        connected: Math.random() > 0.5,
      });
    }
    setNetworkNodes(nodes);
    const moveNodes = setInterval(() => {
      setNetworkNodes((prev) =>
        prev.map((node) => ({
          ...node,
          x: Math.max(
            0,
            Math.min(dimensions.width, node.x + node.vx)
          ),
          y: Math.max(
            0,
            Math.min(dimensions.height, node.y + node.vy)
          ),
          vx: node.x <= 0 || node.x >= dimensions.width
            ? -node.vx
            : node.vx,
          vy: node.y <= 0 || node.y >= dimensions.height
            ? -node.vy
            : node.vy,
          connected: Math.random() > 0.3,
        }))
      );
    }, 100);
    return () => clearInterval(moveNodes);
  }, [dimensions]);

  const getCurrentProgressText = () => {
    const index = Math.floor((scanProgress / 100) * hackingProgress.length);
    return hackingProgress[Math.min(index, hackingProgress.length - 1)];
  };

  const showHackerJoke = () => {
    const randomJoke = hackerJokes[Math.floor(Math.random() * hackerJokes.length)];
    setCurrentHack(randomJoke);
    setShowModal(true);
  };

  const performHack = () => {
    setAccessLevel((prev) => Math.min(prev + 1, 5));
    const messages = [
      "Privilege escalation successful! 🚀",
      "Firewall bypassed like a boss! 🔥",
      "Admin access acquired! 👑",
      "System owned! You're unstoppable! 💀",
      "GOD MODE ACTIVATED! 🌟",
    ];
    alert(messages[Math.min(accessLevel, 4)]);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-red-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,65,0.1),transparent_70%)]"></div>
      </div>

      {/* Matrix Rain */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {matrixRain.map(drop => (
          <div
            key={drop.id}
            className="absolute text-green-400 font-mono text-xs select-none"
            style={{
              left: `${drop.x}px`,
              top: `${drop.y}px`,
              opacity: drop.opacity,
              textShadow: '0 0 5px #00ff41',
              transform: 'translateZ(0)' // Force hardware acceleration
            }}
          >
            {drop.char}
          </div>
        ))}
      </div>

      {/* Network Visualization */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <svg className="w-full h-full" viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
          {networkNodes.map((node, i) =>
            networkNodes.slice(i + 1).map((otherNode, j) => {
              const distance = Math.sqrt(
                Math.pow(node.x - otherNode.x, 2) +
                  Math.pow(node.y - otherNode.y, 2)
              );
              return distance < 150 && node.connected && otherNode.connected ? (
                <line
                  key={`${i}-${j}`}
                  x1={node.x}
                  y1={node.y}
                  x2={otherNode.x}
                  y2={otherNode.y}
                  stroke="rgba(0,255,65,0.2)"
                  strokeWidth="1"
                />
              ) : null;
            })
          )}
          {networkNodes.map((node) => (
            <circle
              key={node.id}
              cx={node.x}
              cy={node.y}
              r="3"
              fill={node.connected ? '#00ff41' : '#ff0041'}
              opacity="0.6"
            />
          ))}
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-20 p-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-black/80 border border-red-500 rounded-lg p-4 mb-6 backdrop-blur-sm">
            <AlertTriangle className="text-red-500 w-8 h-8 mr-3 animate-pulse" />
            <span className="text-red-500 font-mono text-xl">SECURITY BREACH DETECTED</span>
            <AlertTriangle className="text-red-500 w-8 h-8 ml-3 animate-pulse" />
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 relative">
            <span
              className="bg-gradient-to-r from-green-400 via-red-500 to-purple-500 bg-clip-text text-transparent animate-pulse"
              style={{
                textShadow: '0 0 20px #00ff41, 0 0 40px #ff0041',
                animation: 'glitch 0.3s infinite',
              }}
            >
              {glitchText}
            </span>
          </h1>
          <div className="text-xl sm:text-2xl md:text-4xl text-green-400 font-mono mb-6">
            {'>'} SYSTEM_COMPROMISED.exe 💀
          </div>
        </div>

        {/* Scanning Progress */}
        {isScanning && (
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-black/90 border border-green-500 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <Activity className="text-green-400 w-6 h-6 mr-3 animate-spin" />
                <span className="text-green-400 font-mono text-lg">DEEP SCAN IN PROGRESS...</span>
              </div>
              <div className="relative">
                <div className="bg-gray-800 rounded-full h-4 mb-4">
                  <div
                    className="bg-gradient-to-r from-green-400 to-red-500 h-4 rounded-full transition-all duration-300"
                    style={{ width: `${scanProgress}%` }}
                  ></div>
                </div>
                <div className="text-green-400 font-mono text-sm">
                  {getCurrentProgressText()} [{Math.floor(scanProgress)}%]
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Dashboard */}
        {!isScanning && (
          <div className="max-w-7xl mx-auto">
            {/* Status Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
              <div className="bg-black/80 border border-green-500 rounded-lg p-4 text-center backdrop-blur-sm">
                <Shield className="text-green-400 w-6 sm:w-8 h-6 sm:h-8 mx-auto mb-2" />
                <div className="text-green-400 text-lg sm:text-2xl font-bold">BREACH</div>
                <div className="text-gray-400 text-xs sm:text-sm">Status: ACTIVE</div>
              </div>
              <div className="bg-black/80 border border-red-500 rounded-lg p-4 text-center backdrop-blur-sm">
                <Database className="text-red-400 w-6 sm:w-8 h-6 sm:h-8 mx-auto mb-2" />
                <div className="text-red-400 text-lg sm:text-2xl font-bold">1337</div>
                <div className="text-gray-400 text-xs sm:text-sm">Skills Level</div>
              </div>
              <div className="bg-black/80 border border-purple-500 rounded-lg p-4 text-center backdrop-blur-sm">
                <Server className="text-purple-400 w-6 sm:w-8 h-6 sm:h-8 mx-auto mb-2" />
                <div className="text-purple-400 text-lg sm:text-2xl font-bold">∞</div>
                <div className="text-gray-400 text-xs sm:text-sm">Coffee Units</div>
              </div>
              <div className="bg-black/80 border border-yellow-500 rounded-lg p-4 text-center backdrop-blur-sm">
                <Zap className="text-yellow-400 w-6 sm:w-8 h-6 sm:h-8 mx-auto mb-2" />
                <div className="text-yellow-400 text-lg sm:text-2xl font-bold">9001</div>
                <div className="text-gray-400 text-xs sm:text-sm">Power Level</div>
              </div>
              <div className="bg-black/80 border border-cyan-500 rounded-lg p-4 text-center backdrop-blur-sm col-span-2 sm:col-span-1">
                <Skull className="text-cyan-400 w-6 sm:w-8 h-6 sm:h-8 mx-auto mb-2" />
                <div className="text-cyan-400 text-lg sm:text-2xl font-bold">404</div>
                <div className="text-gray-400 text-xs sm:text-sm">Bugs Killed</div>
              </div>
            </div>

            {/* Terminal Window */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-black/90 border border-green-500 rounded-lg overflow-hidden backdrop-blur-sm">
                <div className="bg-green-500/20 p-3 flex items-center">
                  <Terminal className="text-green-400 w-5 h-5 mr-2" />
                  <span className="text-green-400 font-mono text-sm">root@hackerman:~#</span>
                  <div className="ml-auto flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="p-4 h-64 overflow-y-auto">
                  {terminalLines.map((line) => (
                    <div key={line.id} className="mb-2">
                      <span className="text-green-400 font-mono text-sm break-all">
                        $ {line.command}
                      </span>
                      <div className={`text-sm font-mono ml-4 ${
                        line.status === 'SUCCESS' ? 'text-green-300' : 'text-yellow-300'
                      }`}>
                        [{line.status}] Executing...
                      </div>
                    </div>
                  ))}
                  <div className="text-green-400 font-mono text-sm animate-pulse">
                    $ █
                  </div>
                </div>
              </div>

              {/* System Info */}
              <div className="bg-black/90 border border-red-500 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-red-400 text-xl font-bold mb-4 flex items-center">
                  <Eye className="w-6 h-6 mr-2" />
                  TARGET ANALYSIS
                </h3>
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">IP Address:</span>
                    <span className="text-green-400">{currentIP}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Skill Level:</span>
                    <span className="text-red-400">LEGENDARY</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Threat Level:</span>
                    <span className="text-purple-400">MAXIMUM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Coffee Dependency:</span>
                    <span className="text-yellow-400">CRITICAL</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Debugging Skills:</span>
                    <span className="text-cyan-400">GOD-TIER</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                onClick={() => window.history.back()}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-green-400 rounded-lg text-black font-bold text-sm sm:text-lg overflow-hidden hover:scale-105 transition-all duration-300 border border-green-300"
              >
                <span className="relative z-10 flex items-center">
                  <Unlock className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                  GRANT ACCESS
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-lime-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button
                onClick={showHackerJoke}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-400 rounded-lg text-white font-bold text-sm sm:text-lg overflow-hidden hover:scale-105 transition-all duration-300 border border-red-300"
              >
                <span className="relative z-10 flex items-center">
                  <Skull className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                  DEPLOY HUMOR
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button
                onClick={performHack}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg text-white font-bold text-sm sm:text-lg overflow-hidden hover:scale-105 transition-all duration-300 border border-purple-300"
              >
                <span className="relative z-10 flex items-center">
                  <Lock className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                  ESCALATE PRIVILEGES
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Recognition Banner */}
            <div className="bg-gradient-to-r from-black via-red-900/50 to-black border border-red-500 rounded-lg p-6 sm:p-8 text-center backdrop-blur-sm">
              <div className="text-2xl sm:text-4xl mb-4">💀 LEGENDARY HACKER IDENTIFIED 💀</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-400 mb-4">
                ACCESS LEVEL: {accessLevel}/5 - {accessLevel >= 5 ? 'ROOT' : 'ELEVATED'}
              </h2>
              <p className="text-green-400 text-sm sm:text-lg leading-relaxed max-w-4xl mx-auto font-mono">
                 ANALYSIS COMPLETE: Subject exhibits advanced problem-solving capabilities, 
                infinite patience for debugging, and supernatural ability to turn caffeine into code.
                Classification: ELITE DEVELOPER. Recommendation: IMMEDIATE RESPECT PROTOCOL ACTIVATED.
              </p>
              <div className="mt-6 text-purple-400 font-mono text-xs sm:text-sm animate-pulse">
                // Welcome to the matrix, Neo... I mean, Developer! 😎
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-black border border-green-500 rounded-lg p-6 sm:p-8 max-w-md w-full animate-pulse">
            <div className="text-center">
              <div className="text-4xl sm:text-6xl mb-4">🤣</div>
              <div className="text-green-400 font-mono text-sm mb-4">[HUMOR.EXE EXECUTED]</div>
              <p className="text-white text-sm sm:text-lg mb-6">{currentHack}</p>
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-400 rounded-lg text-black font-bold hover:scale-105 transition-all duration-300"
              >
                ROFL.close() 😂
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
      `}</style>
    </div>
  );
}