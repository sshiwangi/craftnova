"use client";
import { useState, useRef, useEffect } from "react";
import { Sparkles, X } from "lucide-react";

interface PromptModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const suggestedPrompts = [
  "Create a minimalist logo for a tech startup",
  "Design a social media post for a café",
  "Make a business card design for a photographer",
];

export const PromptModal: React.FC<PromptModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [prompt, setPrompt] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div
        className="bg-primary-50 w-full max-w-2xl rounded-2xl shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-primary-100">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-lightgreen" />
            <h2 className="text-xl font-semibold text-primary-800">Ask CraftNova AI</h2>
          </div>
          <button
            onClick={onClose}
            className="text-primary-700 hover:text-primary-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="bg-white rounded-xl border border-primary-100 p-4 mb-6">
            <textarea
              ref={inputRef}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe what you want to create..."
              className="w-full h-32 resize-none text-primary-800 placeholder:text-primary-700/50 bg-transparent border-none outline-none"
            />
          </div>

          {/* Suggested Prompts */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-primary-700">
              Suggested Prompts
            </h3>
            <div className="flex flex-wrap gap-2">
              {suggestedPrompts.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => setPrompt(suggestion)}
                  className="px-4 py-2 rounded-full bg-primary-100 text-sm text-primary-800 hover:bg-primary-200 transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-primary-100 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-primary-800 hover:bg-primary-100 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              // Handle prompt submission
              console.log(prompt);
            }}
            disabled={!prompt.trim()}
            className="px-4 py-2 rounded-lg bg-primary-800 text-primary-50 hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Generate Design
          </button>
        </div>
      </div>
    </div>
  );
};


