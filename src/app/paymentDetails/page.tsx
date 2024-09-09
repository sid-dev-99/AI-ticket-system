
export default function paymentDetails(){
  return (
    <div className="flex justify-center items-center h-screen bg-slate-900">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-green-500">Payment Successful</h1>
        <p className="mb-6 text-black">
          The QR code will be sent to your email. You can exit now.
        </p>
        <p className="text-gray-500 text-center">
          Thanks for trusting us!
        </p>
      </div>
    </div>
  );
};

