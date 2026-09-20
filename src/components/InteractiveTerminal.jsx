import React, { useState, useRef, useEffect } from "react";
import { Terminal } from "lucide-react";

// Virtual File System
const fileSystem = {
  "/": {
    type: "dir",
    children: {
      "athul-sabu-resume.pdf": { type: "file", content: "Opening resume...", link: "/athul-sabu-resume.pdf" },
      "hero.gif": { type: "file", content: "Opening image...", link: "/hero.gif" },
      "dark-hero.gif": { type: "file", content: "Opening image...", link: "/dark-hero.gif" },
      "about.txt": { type: "file", content: "Hi! I am Athul Sabu, a passionate developer based in India shaping code into real projects that deliver results." },
      "images": {
        type: "dir",
        children: {
          "athulcoder.jpg": { type: "file", content: "Opening image...", link: "/images/athulcoder.jpg" },
        },
      },
    },
  },
};

const getDir = (path) => {
  if (path === "/") return fileSystem["/"];
  const parts = path.split("/").filter(Boolean);
  let curr = fileSystem["/"];
  for (let part of parts) {
    if (curr.type !== "dir" || !curr.children[part]) return null;
    curr = curr.children[part];
  }
  return curr;
};

const resolvePath = (current, target) => {
  if (target.startsWith("/")) return target;
  if (target === "~") return "/";
  if (target === "") return current;
  
  const currentParts = current === "/" ? [] : current.split("/").filter(Boolean);
  const targetParts = target.split("/");
  
  for (let part of targetParts) {
    if (part === "." || part === "") continue;
    if (part === "..") {
      currentParts.pop();
    } else {
      currentParts.push(part);
    }
  }
  
  return "/" + currentParts.join("/");
};

export default function InteractiveTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDir, setCurrentDir] = useState("/");
  const [history, setHistory] = useState([
    {
      command: "",
      output: (
        <span>
          Welcome to AthulOS! Type <span className="text-yellow-400">help</span> to see available commands.
          <br/>
          Try running: <span className="text-green-400">npx athulcoder</span>
        </span>
      ),
      isError: false,
    },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const endRef = useRef(null);

  // Auto-focus and scroll to bottom
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      endRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isOpen, history]);

  const handleTabCompletion = () => {
    if (!input) return;

    const args = input.split(" ");
    
    // Command completion
    if (args.length === 1) {
      const commands = ["help", "ls", "cd", "pwd", "cat", "clear", "npx"];
      const partialCmd = args[0].toLowerCase();
      const matches = commands.filter((c) => c.startsWith(partialCmd));
      
      if (matches.length === 1) {
        setInput(matches[0] + " ");
      } else if (matches.length > 1) {
        let prefix = matches[0];
        for (let i = 1; i < matches.length; i++) {
          while (!matches[i].startsWith(prefix)) {
            prefix = prefix.slice(0, -1);
          }
        }
        if (prefix && prefix !== partialCmd) {
          setInput(prefix);
        }
      }
      return;
    }

    // Path completion
    const lastArg = args[args.length - 1];
    let searchDir = currentDir;
    let partialName = lastArg;
    let prefixPath = "";

    if (lastArg.includes("/")) {
      const parts = lastArg.split("/");
      partialName = parts.pop();
      prefixPath = parts.join("/") + "/";
      searchDir = resolvePath(currentDir, parts.join("/"));
    }

    const dirObj = getDir(searchDir);
    if (!dirObj || dirObj.type !== "dir") return;

    const children = Object.keys(dirObj.children);
    const matches = children.filter((child) => child.startsWith(partialName));

    if (matches.length === 1) {
      const match = matches[0];
      const isDir = dirObj.children[match].type === "dir";
      args[args.length - 1] = prefixPath + match + (isDir ? "/" : " ");
      setInput(args.join(" "));
    } else if (matches.length > 1) {
      let prefix = matches[0];
      for (let i = 1; i < matches.length; i++) {
        while (!matches[i].startsWith(prefix)) {
          prefix = prefix.slice(0, -1);
        }
      }
      if (prefix && prefix !== partialName) {
        args[args.length - 1] = prefixPath + prefix;
        setInput(args.join(" "));
      }
    }
  };

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const cmdStr = input.trim();
      setInput("");
      processCommand(cmdStr);
    } else if (e.key === "Tab") {
      e.preventDefault();
      handleTabCompletion();
    }
  };

  const processCommand = (cmdStr) => {
    if (!cmdStr) {
      setHistory((prev) => [...prev, { command: cmdStr, output: "", isError: false }]);
      return;
    }

    const args = cmdStr.split(" ").filter(Boolean);
    const cmd = args[0].toLowerCase();
    let output = "";
    let isError = false;

    switch (cmd) {
      case "help":
        output = (
          <div className="flex flex-col gap-1 text-zinc-300">
            <div><span className="text-green-400 w-16 inline-block">help</span> - Show this message</div>
            <div><span className="text-green-400 w-16 inline-block">ls</span> - List directory contents</div>
            <div><span className="text-green-400 w-16 inline-block">cd</span> - Change directory</div>
            <div><span className="text-green-400 w-16 inline-block">pwd</span> - Print working directory</div>
            <div><span className="text-green-400 w-16 inline-block">cat</span> - Read a file</div>
            <div><span className="text-green-400 w-16 inline-block">clear</span> - Clear terminal</div>
            <div><span className="text-green-400 w-16 inline-block">npx</span> - Execute a package (try 'npx athulcoder')</div>
          </div>
        );
        break;
      case "pwd":
        output = currentDir;
        break;
      case "clear":
        setHistory([]);
        return;
      case "ls": {
        const targetPath = resolvePath(currentDir, args[1] || ".");
        const dir = getDir(targetPath);
        if (!dir) {
          output = `ls: ${args[1]}: No such file or directory`;
          isError = true;
        } else if (dir.type !== "dir") {
          output = args[1];
        } else {
          output = (
            <div className="flex flex-wrap gap-4">
              {Object.keys(dir.children).map((key) => {
                const child = dir.children[key];
                return (
                  <span key={key} className={child.type === "dir" ? "text-blue-400 font-bold" : child.link ? "text-purple-400" : "text-zinc-300"}>
                    {key}
                  </span>
                );
              })}
            </div>
          );
        }
        break;
      }
      case "cd": {
        if (!args[1] || args[1] === "~") {
          setCurrentDir("/");
          break;
        }
        const targetPath = resolvePath(currentDir, args[1]);
        const dir = getDir(targetPath);
        if (!dir) {
          output = `cd: ${args[1]}: No such file or directory`;
          isError = true;
        } else if (dir.type !== "dir") {
          output = `cd: ${args[1]}: Not a directory`;
          isError = true;
        } else {
          setCurrentDir(targetPath);
        }
        break;
      }
      case "cat": {
        if (!args[1]) {
          output = "cat: missing file operand";
          isError = true;
          break;
        }
        const targetPath = resolvePath(currentDir, args[1]);
        const file = getDir(targetPath);
        if (!file) {
          output = `cat: ${args[1]}: No such file or directory`;
          isError = true;
        } else if (file.type === "dir") {
          output = `cat: ${args[1]}: Is a directory`;
          isError = true;
        } else {
          output = file.content;
          if (file.link) {
            window.open(file.link, "_blank");
          }
        }
        break;
      }
      case "npx": {
        if (args[1] === "athulcoder") {
          output = (
            <div className="flex flex-col gap-2 my-2 border border-green-500/20 p-4 rounded-lg bg-green-500/5">
              <pre className="text-green-400 text-xs md:text-sm font-bold">
{`
    ___   __  __          __ 
   /   | / /_/ /_  __  __/ / 
  / /| |/ __/ __ \\/ / / / /  
 / ___ / /_/ / / / /_/ / /   
/_/  |_\\__/_/ /_/\\__,_/_/    
`}
              </pre>
              <div className="mt-4 text-zinc-300">
                <p><span className="text-yellow-400 font-bold">Name:</span> Athul Sabu</p>
                <p><span className="text-yellow-400 font-bold">Role:</span> Full-Stack Developer</p>
                <p><span className="text-yellow-400 font-bold">Location:</span> India</p>
                <br/>
                <p>Welcome to my interactive portfolio!</p>
                <p>Feel free to explore the VFS or check out my resume.</p>
              </div>
            </div>
          );
        } else {
          output = `npx: command not found: ${args[1] || ""}`;
          isError = true;
        }
        break;
      }
      default:
        output = `command not found: ${cmd}`;
        isError = true;
    }

    setHistory((prev) => [...prev, { command: cmdStr, output, isError }]);
  };

  return (
    <>
      {/* Trigger Button */}
      <div className="w-full flex justify-center py-5">
        <button
          onClick={() => setIsOpen(true)}
          className="group flex flex-col items-center gap-3 hover:scale-105 transition-transform duration-300"
        >
          <div className="w-16 h-16 rounded-2xl bg-zinc-900 dark:bg-zinc-800 border border-zinc-700 shadow-2xl flex items-center justify-center relative overflow-hidden group-hover:border-green-500/50 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Terminal size={32} className="text-green-400" />
          </div>
          <span className="text-sm font-medium text-slate-600 dark:text-zinc-400 group-hover:text-green-500 transition-colors">
            Open Web Terminal
          </span>
        </button>
      </div>

      {/* Terminal Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
          <div 
            className="w-full max-w-4xl h-[70vh] rounded-xl border border-zinc-700 bg-[#1e1e1e] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => { e.stopPropagation(); inputRef.current?.focus(); }}
          >
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#2d2d2d] border-b border-zinc-800 select-none">
              <div className="flex gap-2">
                <button 
                  onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                  className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 flex items-center justify-center group"
                >
                  <span className="opacity-0 group-hover:opacity-100 text-black text-[8px] font-bold">✕</span>
                </button>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="text-xs text-zinc-400 font-mono font-medium flex items-center gap-2">
                <Terminal size={14} /> athulcoder — zsh — 80x24
              </div>
              <div className="w-12"></div>
            </div>

            {/* Terminal Body */}
            <div className="flex-1 overflow-y-auto p-4 font-mono text-sm text-zinc-300">
              {history.map((entry, i) => (
                <div key={i} className="mb-2">
                  {entry.command && (
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-green-400">athulcoder@mac</span>
                      <span className="text-blue-400">{currentDir}</span>
                      <span className="text-zinc-500">%</span>
                      <span className="text-white">{entry.command}</span>
                    </div>
                  )}
                  {entry.output && (
                    <div className={`${entry.isError ? "text-red-400" : ""}`}>
                      {entry.output}
                    </div>
                  )}
                </div>
              ))}

              {/* Input Line */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-green-400 shrink-0">athulcoder@mac</span>
                <span className="text-blue-400 shrink-0">{currentDir}</span>
                <span className="text-zinc-500 shrink-0">%</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleCommand}
                  className="flex-1 bg-transparent outline-none text-white font-mono min-w-0"
                  spellCheck="false"
                  autoComplete="off"
                  autoFocus
                />
              </div>
              <div ref={endRef} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
