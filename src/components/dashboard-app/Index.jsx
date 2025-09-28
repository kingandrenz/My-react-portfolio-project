

export default function Home = () = {
  (<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-6">
    <div className="text-center">
      <h1 className="text-5xl font-bold text'gray-800 mb-6" >
        Welcome to FlexTeck Dashboard App
      </div>
      
      <p className="text-lg text-gray-600 mb-8" >Manage your tasks, track analytics, and stay organized with our powerful dashboard.</p>
      <Link className="inline-flex items-center justify-center bg-blue-600
      text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700
      transition-colors shadow-lg hover:shadow-xl" href="/dashboard">Dashboard</Link>
    </div>
  </div>)
}