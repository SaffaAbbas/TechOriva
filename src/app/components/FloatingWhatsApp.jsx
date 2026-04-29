export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/+923135424935"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[70] group"
    >
      <span className="absolute -inset-2 rounded-full bg-[#25D366]/20 blur-md opacity-70 group-hover:opacity-100 transition" />
      <span className="relative h-14 w-14 rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.35)] ring-1 ring-black/5 flex items-center justify-center transition-transform group-hover:scale-[1.06]">
        <svg
          viewBox="0 0 32 32"
          width="26"
          height="26"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M19.11 17.53c-.27-.14-1.59-.78-1.83-.87-.24-.09-.42-.14-.6.14-.18.27-.69.87-.84 1.05-.15.18-.31.2-.58.07-.27-.14-1.12-.41-2.13-1.31-.79-.7-1.32-1.56-1.48-1.83-.15-.27-.02-.42.12-.55.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.6-1.45-.82-1.99-.22-.52-.44-.45-.6-.46h-.51c-.18 0-.47.07-.71.34-.24.27-.94.92-.94 2.24 0 1.32.96 2.6 1.09 2.78.13.18 1.89 2.88 4.58 4.04.64.28 1.14.45 1.53.58.64.2 1.22.17 1.68.1.51-.08 1.59-.65 1.81-1.27.22-.62.22-1.15.15-1.27-.07-.12-.24-.2-.51-.34z" />
          <path d="M15.99 3.2C8.86 3.2 3.07 8.99 3.07 16.12c0 2.28.6 4.5 1.75 6.46L3 29.2l6.78-1.77a12.9 12.9 0 0 0 6.21 1.58h.01c7.13 0 12.92-5.79 12.92-12.92S23.12 3.2 15.99 3.2zm0 23.67h-.01c-2 0-3.96-.54-5.67-1.55l-.41-.24-4.02 1.05 1.07-3.92-.27-.4a10.77 10.77 0 0 1-1.68-5.78c0-5.97 4.86-10.83 10.83-10.83 5.97 0 10.83 4.86 10.83 10.83 0 5.97-4.86 10.83-10.83 10.83z" />
        </svg>
      </span>
    </a>
  );
}

