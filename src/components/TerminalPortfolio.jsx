export default function TerminalCommand() {
    const command = "npx athulcoder";

    const copyCommand = async () => {
        await navigator.clipboard.writeText(command);

        const btn = document.getElementById("copy-btn");

        btn.innerText = "Copied ✓";

        setTimeout(() => {
            btn.innerText = "Copy";
        }, 2000);
    };

    return (
        <div className="w-full flex items-center justify-center px-6 py-10">
            <div className="w-full max-w-2xl rounded-2xl border border-green-500/20 bg-black overflow-hidden shadow-2xl">

                {/* Top Bar */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-green-500/10 bg-zinc-900">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>

                    <button
                        id="copy-btn"
                        onClick={copyCommand}
                        className="text-sm px-3 py-1 rounded-lg bg-green-500 text-black font-semibold hover:bg-green-400 transition"
                    >
                        Copy
                    </button>
                </div>

                {/* Command */}
                <div className="px-6 py-8 font-mono text-lg md:text-2xl text-green-400 overflow-x-auto">
                    <span className="text-zinc-500">$</span> {command}
                </div>
            </div>
        </div>
    );
}