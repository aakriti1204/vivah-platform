export default function Dashboard() {
  return (
    <main className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600">
        Dashboard 💍
      </h1>

      <div className="mt-6 bg-white p-6 rounded-xl shadow-md">
        <p className="text-gray-600">
          Welcome to your Vivah Platform dashboard.
        </p>

        <button className="mt-4 bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700">
          Create Wedding Website
        </button>
      </div>
    </main>
  );
}