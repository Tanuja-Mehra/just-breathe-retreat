function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div className="relative w-full max-w-3xl rounded-3xl bg-white p-4 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full bg-brand-navy px-3 py-1 text-sm text-white"
        >
          Close
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
