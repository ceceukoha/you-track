export default function Login() {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <form className="p-6 bg-white rounded shadow-md">
          <h2 className="text-xl font-bold mb-4">Login</h2>
          <input
            type="email"
            placeholder="Email"
            className="block w-full p-2 border mb-4 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="block w-full p-2 border mb-4 rounded"
          />
          <button className="w-full bg-blue-500 text-white py-2 rounded">
            Log In
          </button>
        </form>
      </div>
    );
  }
  