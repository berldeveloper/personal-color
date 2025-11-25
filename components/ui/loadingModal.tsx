"use client";

import { useEffect, useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";

type LoadingModalProps = {
  open: boolean;
  success?: boolean;
  onClose?: () => void;
  message?: string;
};

const LoadingModal: React.FC<LoadingModalProps> = ({
  open,
  success = false,
  onClose,
  message = "Processing...",
}) => {
  const [show, setShow] = useState(open);

  useEffect(() => {
    setShow(open);
  }, [open]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      {" "}
      <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center space-y-4 w-80">
        {!success ? (
          <>
            {" "}
            <Loader2 className="animate-spin w-12 h-12 text-blue-500" />{" "}
            <p className="text-gray-700 font-medium">{message}</p>
          </>
        ) : (
          <>
            {" "}
            <CheckCircle className="w-16 h-16 text-green-500" />{" "}
            <p className="text-gray-700 font-medium">Success!</p>
            <button
              onClick={() => {
                setShow(false);
                if (onClose) onClose();
              }}
              className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
            >
              Close{" "}
            </button>
          </>
        )}{" "}
      </div>{" "}
    </div>
  );
};

export default LoadingModal;
