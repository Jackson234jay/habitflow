const CheckEmail = () => {
  return (
    <div className="min-h-screen bg-base-300 flex items-center justify-center px-4">
      <div className="w-full max-w-md my-4 space-y-6">
        <div className="card bg-white w-full mx-auto max-w-md  shadow-lg">
          <div className="card-body p-6 space-y-4">
            <h2 className="text-xl font-bold">Check your email</h2>
            <p className="text-sm text-neutral-content">
              We’ve sent you a confirmation link. Please check your inbox and
              click the link to activate your account.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckEmail;
